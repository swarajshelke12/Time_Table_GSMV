/**
 * Department of Computer Engineering - Timetable Application Logic
 * Single Page Application Controller
 * Author: Swaraj Shelke
 */

(function () {
  'use strict';

  // State
  let currentClass = null;
  let selectedDay = 1;
  let selectedBatch = localStorage.getItem('gsmv_selected_batch') || 'ALL';

  // Helper: Get minutes from midnight
  function getNowMinutes() {
    const now = new Date();
    return now.getHours() * 60 + now.getMinutes();
  }

  // Helper: Format current time as "HH:MM AM/PM"
  function formatCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  // Helper: Get today's weekday (1 = Mon, ..., 5 = Fri, 0/6 = Weekend -> default 1)
  function getTodayWeekday() {
    const day = new Date().getDay();
    return (day >= 1 && day <= 5) ? day : 1;
  }

  // Navigation Controller
  window.navigateTo = function (viewName) {
    const landingView = document.getElementById('landing-view');
    const timetableView = document.getElementById('timetable-view');

    if (viewName === 'landing' || !viewName) {
      currentClass = null;
      if (landingView) landingView.style.display = 'flex';
      if (timetableView) timetableView.style.display = 'none';
      window.location.hash = '';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (CLASS_CONFIG[viewName]) {
      currentClass = viewName;
      if (landingView) landingView.style.display = 'none';
      if (timetableView) timetableView.style.display = 'flex';

      // Auto-select today's day on entry
      selectedDay = getTodayWeekday();

      // Ensure selected batch is valid for this class
      const validBatches = CLASS_CONFIG[viewName].batches;
      if (!validBatches.includes(selectedBatch)) {
        selectedBatch = 'ALL';
      }

      window.location.hash = viewName;
      renderClassView();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Render Timetable View
  function renderClassView() {
    if (!currentClass || !CLASS_CONFIG[currentClass]) return;

    const config = CLASS_CONFIG[currentClass];
    const schedule = SCHEDULES[currentClass];

    // 1. Update Header Information
    const titleEl = document.getElementById('view-title');
    const subEl = document.getElementById('view-subtitle');
    if (titleEl) titleEl.textContent = config.title;
    if (subEl) subEl.textContent = config.subtitle;

    // 2. Render Day Selector
    renderDayStrip();

    // 3. Render Batch Selector
    renderBatchStrip(config.batches);

    // 4. Render Schedule Timeline
    renderTimeline(schedule);

    // 5. Update Live Clock
    updateLiveClock();
  }

  // Render Day Strip
  function renderDayStrip() {
    const container = document.getElementById('day-strip');
    if (!container) return;

    const today = new Date().getDay();

    let html = '';
    DAYS.forEach(day => {
      const isActive = day.id === selectedDay;
      const isToday = day.id === today;
      html += `
        <button 
          class="day-btn ${isActive ? 'active' : ''} ${isToday ? 'is-today' : ''}" 
          data-day="${day.id}"
          title="${day.full}${isToday ? ' (Today)' : ''}"
        >
          ${day.short}
        </button>
      `;
    });

    container.innerHTML = html;

    // Attach click events
    container.querySelectorAll('.day-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        selectedDay = parseInt(this.dataset.day, 10);
        renderClassView();
      });
    });
  }

  // Render Batch Strip
  function renderBatchStrip(availableBatches) {
    const wrapper = document.getElementById('batch-strip-wrapper');
    const container = document.getElementById('batch-strip');
    if (!wrapper || !container) return;

    if (!availableBatches || availableBatches.length <= 1) {
      wrapper.style.display = 'none';
      return;
    }

    wrapper.style.display = 'flex';
    let html = '<span class="batch-label">Batch:</span>';
    availableBatches.forEach(b => {
      const isActive = b === selectedBatch;
      html += `
        <button class="batch-btn ${isActive ? 'active' : ''}" data-batch="${b}">
          ${b}
        </button>
      `;
    });

    container.innerHTML = html;

    // Attach click events
    container.querySelectorAll('.batch-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        selectedBatch = this.dataset.batch;
        localStorage.setItem('gsmv_selected_batch', selectedBatch);
        renderClassView();
      });
    });
  }

  // Render Schedule Timeline
  function renderTimeline(schedule) {
    const container = document.getElementById('timetable-content');
    if (!container) return;

    const dayData = schedule ? schedule[selectedDay] : null;

    if (!dayData || Object.keys(dayData).length === 0) {
      container.innerHTML = `
        <div class="empty-schedule">
          <h3>No Classes Scheduled</h3>
          <p>There are no lectures or practicals scheduled for this day.</p>
        </div>
      `;
      return;
    }

    const now = getNowMinutes();
    const isToday = selectedDay === new Date().getDay();
    let html = '';
    const skipSlots = {};
    let cardIndex = 0;

    TIME_SLOTS.forEach((slot, i) => {
      // Break Slots
      if (slot.isBreak) {
        html += `
          <div class="break-card animate-enter" style="animation-delay: ${cardIndex * 50}ms;">
            <span class="break-label">${slot.label}</span>
            <span class="break-time">${slot.time}</span>
          </div>
        `;
        cardIndex++;
        return;
      }

      if (skipSlots[slot.id]) return;

      // Check for combined 2-hour slots ("1-2", "3-4", "5-6")
      const combined12 = (slot.id === 1 || slot.id === 2) && dayData['1-2'];
      const combined34 = (slot.id === 3 || slot.id === 4) && dayData['3-4'];
      const combined56 = (slot.id === 5 || slot.id === 6) && dayData['5-6'];

      if (slot.id === 2 && dayData['1-2']) { skipSlots[2] = true; return; }
      if (slot.id === 4 && dayData['3-4']) { skipSlots[4] = true; return; }
      if (slot.id === 6 && dayData['5-6']) { skipSlots[6] = true; return; }

      let entry, sMin, eMin, timeLabel;

      if (combined12 && slot.id === 1) {
        entry = dayData['1-2'];
        sMin = 540; eMin = 660;
        timeLabel = "9:00 - 11:00 AM";
        skipSlots[2] = true;
      } else if (combined34 && slot.id === 3) {
        entry = dayData['3-4'];
        sMin = 675; eMin = 795;
        timeLabel = "11:15 AM - 1:15 PM";
        skipSlots[4] = true;
      } else if (combined56 && slot.id === 5) {
        entry = dayData['5-6'];
        sMin = 825; eMin = 945;
        timeLabel = "1:45 - 3:45 PM";
        skipSlots[6] = true;
      } else {
        entry = dayData[slot.id];
        if (!entry) return;
        sMin = slot.startMin;
        eMin = slot.endMin;
        timeLabel = slot.time;
      }

      const isLive = isToday && now >= sMin && now < eMin;
      const isNext = isToday && now < sMin && (sMin - now) <= 45;
      const cardClass = isLive ? 'lecture-card live' : isNext ? 'lecture-card next' : 'lecture-card';

      // Render Practical Card
      if (entry.type === 'practical') {
        html += renderPracticalCard(entry, timeLabel, isLive, isNext, cardClass, cardIndex);
      } else {
        // Render Theory Card
        html += renderTheoryCard(entry, timeLabel, isLive, isNext, cardClass, cardIndex);
      }
      cardIndex++;
    });

    container.innerHTML = html;
  }

  // Render Theory Card
  function renderTheoryCard(entry, timeLabel, isLive, isNext, cardClass, index) {
    let statusBadge = '';
    if (isLive) {
      statusBadge = '<span class="status-badge live">Live Now</span>';
    } else if (isNext) {
      statusBadge = '<span class="status-badge next">Up Next</span>';
    }

    return `
      <div class="${cardClass} animate-enter" style="animation-delay: ${index * 50}ms;">
        <div class="card-head">
          <span class="time-tag">${timeLabel}</span>
          ${statusBadge}
        </div>
        <div class="card-subject-row">
          <span class="card-subject-code">${entry.code}</span>
          ${entry.name ? `<span class="card-subject-name">• ${entry.name}</span>` : ''}
        </div>
        <div class="card-meta-row">
          <span class="card-prof">${entry.prof || '-'}</span>
          <span class="card-room">${entry.room || '-'}</span>
        </div>
      </div>
    `;
  }

  // Render Practical Card
  function renderPracticalCard(entry, timeLabel, isLive, isNext, cardClass, index) {
    let statusBadge = '';
    if (isLive) {
      statusBadge = '<span class="status-badge live">Live Now</span>';
    } else if (isNext) {
      statusBadge = '<span class="status-badge next">Up Next</span>';
    }

    // If a specific batch is chosen, show a focused card
    if (selectedBatch !== 'ALL' && entry.batches && entry.batches[selectedBatch]) {
      const b = entry.batches[selectedBatch];
      return `
        <div class="${cardClass} animate-enter" style="animation-delay: ${index * 50}ms;">
          <div class="card-head">
            <span class="time-tag">${timeLabel}</span>
            ${statusBadge}
          </div>
          <div class="focused-batch-card">
            <span class="focused-batch-sub">Batch ${selectedBatch} Practical</span>
            <span class="focused-batch-title">${b.code}${b.name ? ' — ' + b.name : ''}</span>
          </div>
          <div class="card-meta-row">
            <span class="card-prof">${b.prof || '-'}</span>
            <span class="card-room">${b.room || '-'}</span>
          </div>
        </div>
      `;
    }

    // Otherwise, render the full batch matrix
    let matrixHtml = '';
    const batches = Object.keys(entry.batches || {});
    batches.forEach(bKey => {
      const b = entry.batches[bKey];
      const isHighlighted = bKey === selectedBatch;
      matrixHtml += `
        <div class="matrix-cell ${isHighlighted ? 'highlight-batch' : ''}">
          <span class="cell-batch">Batch ${bKey}</span>
          <span class="cell-subject">${b.code}</span>
          <span class="cell-prof">${b.prof}</span>
          <span class="cell-room">${b.room}</span>
        </div>
      `;
    });

    return `
      <div class="${cardClass} animate-enter" style="animation-delay: ${index * 50}ms;">
        <div class="card-head">
          <span class="time-tag">${timeLabel}</span>
          ${statusBadge}
        </div>
        <div class="practical-header-title">${entry.title || 'Practical Sessions'}</div>
        <div class="batch-matrix">
          ${matrixHtml}
        </div>
      </div>
    `;
  }

  // Update Clock in Topbar
  function updateLiveClock() {
    const clockEl = document.getElementById('live-clock');
    if (clockEl) {
      clockEl.textContent = formatCurrentTime();
    }
  }

  // Handle URL Hash Navigation
  function handleHash() {
    const hash = window.location.hash.replace('#', '').trim();
    if (hash && CLASS_CONFIG[hash]) {
      navigateTo(hash);
    } else {
      navigateTo('landing');
    }
  }

  // Initialize App on DOM Ready
  document.addEventListener('DOMContentLoaded', function () {
    handleHash();
    window.addEventListener('hashchange', handleHash);

    // Periodic refresh for live time and lecture indicators
    setInterval(function () {
      updateLiveClock();
      if (currentClass) {
        renderClassView();
      }
    }, 30000);
  });

})();
