const SLOTS = [
  { id: 1,  time: "09:00 - 10:00", startMin: 540,  endMin: 600  },
  { id: 2,  time: "10:00 - 11:00", startMin: 600,  endMin: 660  },
  { id: "b1", isBreak: true, label: "Short Break", time: "11:00 - 11:15", startMin: 660, endMin: 675 },
  { id: 3,  time: "11:15 - 12:15", startMin: 675, endMin: 735 },
  { id: 4,  time: "12:15 - 13:15", startMin: 735, endMin: 795 },
  { id: "b2", isBreak: true, label: "Lunch Break", time: "13:15 - 13:45", startMin: 795, endMin: 825 },
  { id: 5,  time: "13:45 - 14:45", startMin: 825, endMin: 885 },
  { id: 6,  time: "14:45 - 15:45", startMin: 885, endMin: 945 }
];

const ALL_BATCHES = ["A1","A2","A3","B1","B2","B3","C1","C2","C3"];
let selectedDay, currentBatch = "ALL";

function nowMin() { const d = new Date(); return d.getHours() * 60 + d.getMinutes(); }

function initPage(SCHEDULE, defaultBatches) {
  const batches = defaultBatches || ALL_BATCHES;
  const today = new Date().getDay();
  selectedDay = (today >= 1 && today <= 5) ? today : 1;

  document.querySelectorAll('.day-btn').forEach(btn => {
    const d = parseInt(btn.dataset.day);
    if (d === today) btn.innerHTML += '<span class="today-dot"></span>';
    btn.classList.toggle('active', d === selectedDay);
    btn.addEventListener('click', () => {
      selectedDay = d;
      document.querySelectorAll('.day-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      render(SCHEDULE, batches);
    });
  });

  document.querySelectorAll('.batch-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentBatch = btn.dataset.batch;
      document.querySelectorAll('.batch-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      render(SCHEDULE, batches);
    });
  });

  render(SCHEDULE, batches);
  setInterval(() => render(SCHEDULE, batches), 30000);
}

function render(SCHEDULE, batches) {
  const c = document.getElementById('timeline');
  const dayData = SCHEDULE[selectedDay];
  
  if (!dayData || Object.keys(dayData).length === 0) {
    c.innerHTML = '<div class="empty-day"><p>No classes scheduled</p></div>';
    return;
  }
  
  const isToday = selectedDay === new Date().getDay();
  const now = nowMin();
  let html = '';
  let skip = {};

  SLOTS.forEach(slot => {
    if (slot.isBreak) {
      html += `<div class="break-card"><span class="break-label">${slot.label}</span><span class="break-time">${slot.time}</span></div>`;
      return;
    }
    if (skip[slot.id]) return;

    const combined12 = ((slot.id === 1 || slot.id === 2) && dayData["1-2"]);
    const combined34 = ((slot.id === 3 || slot.id === 4) && dayData["3-4"]);
    const combined56 = ((slot.id === 5 || slot.id === 6) && dayData["5-6"]);
    
    if (slot.id === 2 && dayData["1-2"]) { skip[2]=true; return; }
    if (slot.id === 4 && dayData["3-4"]) { skip[4]=true; return; }
    if (slot.id === 6 && dayData["5-6"]) { skip[6]=true; return; }

    let entry, sMin, eMin, timeLabel;
    
    if (combined12 && slot.id === 1) {
      entry = dayData["1-2"]; sMin = 540; eMin = 660; timeLabel = "09:00 - 11:00"; skip[2]=true;
    } else if (combined34 && slot.id === 3) {
      entry = dayData["3-4"]; sMin = 675; eMin = 795; timeLabel = "11:15 - 13:15"; skip[4]=true;
    } else if (combined56 && slot.id === 5) {
      entry = dayData["5-6"]; sMin = 825; eMin = 945; timeLabel = "13:45 - 15:45"; skip[6]=true;
    } else {
      entry = dayData[slot.id];
      if (!entry) return;
      sMin = slot.startMin; eMin = slot.endMin; timeLabel = slot.time;
    }

    const live = isToday && now >= sMin && now < eMin;
    const next = isToday && now < sMin && (sMin - now) <= 45;

    if (entry.type === "practical") {
      html += renderPractical(entry, timeLabel, live, next, batches);
    } else {
      html += renderTheory(entry, timeLabel, live, next);
    }
  });

  c.innerHTML = html;
}

function statusHTML(live, next) {
  if (live) return '<span class="status-tag live">In Progress</span>';
  if (next) return '<span class="status-tag next">Up Next</span>';
  return '';
}

function renderTheory(entry, timeLabel, live, next) {
  const cls = live ? 'lecture-card live' : next ? 'lecture-card next' : 'lecture-card';
  return `
    <div class="${cls}">
      <div class="card-head">
        <span class="time-tag">${timeLabel}</span>
        ${statusHTML(live, next)}
      </div>
      <div class="card-subject">${entry.code}</div>
      <div class="card-fullname">${entry.name}</div>
      <div class="card-meta">
        <span class="card-prof">${entry.prof}</span>
        <span class="card-room">Room ${entry.room}</span>
      </div>
    </div>`;
}

function renderPractical(entry, timeLabel, live, next, batches) {
  const cls = live ? 'lecture-card live' : next ? 'lecture-card next' : 'lecture-card';

  if (currentBatch !== "ALL") {
    const a = entry.batches[currentBatch] || { code:"Self-Study", prof:"-", room:"Library" };
    return `
      <div class="${cls}">
        <div class="card-head">
          <span class="time-tag">${timeLabel}</span>
          ${statusHTML(live, next)}
        </div>
        <div class="card-subject">${a.code}</div>
        <div class="card-fullname">Batch ${currentBatch}</div>
        <div class="card-meta">
          <span class="card-prof">${a.prof}</span>
          <span class="card-room">${a.room}</span>
        </div>
      </div>`;
  }

  let cells = '';
  batches.forEach(b => {
    const a = entry.batches[b] || { code:"Self-Study", prof:"-", room:"Library" };
    cells += `<div class="matrix-cell"><div class="cell-batch">Batch ${b}</div><div class="cell-subject">${a.code}</div><div class="cell-room">${a.room}</div><div class="cell-prof">${a.prof}</div></div>`;
  });

  return `
    <div class="${cls}">
      <div class="card-head">
        <span class="time-tag">${timeLabel}</span>
        ${statusHTML(live, next)}
      </div>
      <div class="practical-header"><span class="practical-title">Practical Sessions</span></div>
      <div class="batch-matrix">${cells}</div>
    </div>`;
}
