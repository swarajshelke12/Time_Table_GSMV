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

  // 2-hour practical slot pairings
  const COMBINED_SLOTS = {
    1: { key: '1-2', skip: 2, time: '9:00 - 11:00 AM', startMin: 540, endMin: 660 },
    3: { key: '3-4', skip: 4, time: '11:15 AM - 1:15 PM', startMin: 675, endMin: 795 },
    5: { key: '5-6', skip: 6, time: '1:45 - 3:45 PM', startMin: 825, endMin: 945 }
  };

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

    container.innerHTML = DAYS.map(day => `
      <button 
        class="day-btn ${day.id === selectedDay ? 'active' : ''} ${day.id === today ? 'is-today' : ''}" 
        data-day="${day.id}"
        title="${day.full}${day.id === today ? ' (Today)' : ''}"
      >
        ${day.short}
      </button>
    `).join('');
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
    container.innerHTML = '<span class="batch-label">Batch:</span>' +
      availableBatches.map(b => `
        <button class="batch-btn ${b === selectedBatch ? 'active' : ''}" data-batch="${b}">
          ${b}
        </button>
      `).join('');
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

      const combo = COMBINED_SLOTS[slot.id];
      const hasCombo = combo && dayData[combo.key];
      const entry = hasCombo ? dayData[combo.key] : dayData[slot.id];
      if (!entry) return;

      const sMin = hasCombo ? combo.startMin : slot.startMin;
      const eMin = hasCombo ? combo.endMin : slot.endMin;
      const timeLabel = hasCombo ? combo.time : slot.time;
      if (hasCombo) skipSlots[combo.skip] = true;

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
          ${entry.name && entry.name !== entry.code ? `<span class="card-subject-name">• ${entry.name}</span>` : ''}
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
            <span class="focused-batch-title">${b.code}${b.name && b.name !== b.code ? ' — ' + b.name : ''}</span>
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
    const hash = window.location.hash.slice(1);
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

    // Keyboard accessibility for interactive cards
    document.addEventListener('keydown', function (e) {
      if ((e.key === 'Enter' || e.key === ' ') && e.target.classList && e.target.classList.contains('class-card')) {
        e.preventDefault();
        e.target.click();
      }
    });

    // Event delegation for day and batch selection
    document.getElementById('day-strip')?.addEventListener('click', e => {
      const btn = e.target.closest('.day-btn');
      if (btn) {
        selectedDay = parseInt(btn.dataset.day, 10);
        renderClassView();
      }
    });

    document.getElementById('batch-strip')?.addEventListener('click', e => {
      const btn = e.target.closest('.batch-btn');
      if (btn) {
        selectedBatch = btn.dataset.batch;
        localStorage.setItem('gsmv_selected_batch', selectedBatch);
        renderClassView();
      }
    });

    // Register Service Worker for offline capability
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('sw.js').catch(() => {});
    }

    // Periodic refresh for live time and lecture indicators only
    setInterval(() => {
      updateLiveClock();
      if (currentClass && SCHEDULES[currentClass]) {
        renderTimeline(SCHEDULES[currentClass]);
      }
    }, 30000);
  });

})();
