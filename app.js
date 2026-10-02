/* ============================================
   CHAANDHU'S JOURNAL — APP.JS
   ============================================ */

'use strict';

// ══════════════════════════════════════════
// DATA DEFINITIONS
// ══════════════════════════════════════════

const CHECKLIST_ITEMS = [
  { id: 'fajr',      icon: '🕌', name: 'Fajr',                    sub: 'Morning prayer',         optional: false, special: null,        color: '#8b5cf6' },
  { id: 'wakeup',    icon: '⏰', name: 'Wake Up Early',            sub: 'Rise before 7 AM',       optional: false, special: null,        color: '#f59e0b' },
  { id: 'brush',     icon: '🦷', name: 'Brush',                    sub: 'Oral hygiene',           optional: false, special: null,        color: '#60a5fa' },
  { id: 'facewash',  icon: '🧼', name: 'Face Wash',                sub: 'Skin care',              optional: false, special: null,        color: '#2dd4bf' },
  { id: 'exercise',  icon: '💪', name: 'Exercise',                 sub: '30-minute workout',      optional: false, special: 'exercise',  color: '#f97316' },
  { id: 'breakfast', icon: '🥣', name: 'Breakfast',                sub: 'Start the day right',    optional: false, special: null,        color: '#fbbf24' },
  { id: 'luhar',     icon: '🕐', name: 'Luhar',                    sub: 'Dhuhr prayer',           optional: false, special: null,        color: '#a78bfa' },
  { id: 'bath',      icon: '🚿', name: 'Bath',                     sub: 'Stay fresh',             optional: false, special: null,        color: '#38bdf8' },
  { id: 'lunch',     icon: '🍱', name: 'Lunch',                    sub: 'Midday meal',            optional: false, special: null,        color: '#4ade80' },
  { id: 'asr',       icon: '🌤️', name: 'Asr',                      sub: 'Afternoon prayer',       optional: false, special: null,        color: '#fb923c' },
  { id: 'sleeping',  icon: '😴', name: 'Sleeping',                 sub: 'Rest & recharge',        optional: true,  special: null,        color: '#818cf8' },
  { id: 'learn',     icon: '📚', name: 'Learn Something New',      sub: 'Growth mindset',         optional: false, special: 'learn',    color: '#c084fc' },
  { id: 'maghrib',   icon: '🌆', name: 'Maghrib',                  sub: 'Evening prayer',         optional: false, special: null,        color: '#f472b6' },
  { id: 'dinner',    icon: '🍽️', name: 'Dinner',                   sub: 'Evening meal',           optional: false, special: null,        color: '#34d399' },
  { id: 'isha',      icon: '🌙', name: 'Isha',                     sub: 'Night prayer',           optional: false, special: null,        color: '#818cf8' },
  { id: 'water',     icon: '💧', name: 'Drink 3–4 Litres of Water', sub: 'Stay hydrated',         optional: false, special: 'water',    color: '#38bdf8' },
  { id: 'nosmoking', icon: '🚭', name: 'Smoke-Free Day',           sub: 'Another day stronger',   optional: false, special: 'nosmoking', color: '#4ade80' },
];

const EXERCISE_ACCENT_COLORS = [
  '#8b5cf6', '#ec4899', '#14b8a6', '#f59e0b',
  '#3b82f6', '#22c55e', '#f97316',
];

const WEEKLY_WORKOUTS = {
  0: { // Sunday
    label: 'Sunday',
    emoji: '☀️',
    exercises: [
      { id: 'jumpingjacks', icon: '⚡', name: 'Jumping Jacks',      duration: '5 mins', reps: '3 sets × 50 reps', desc: 'Great for warming up. Keep a steady rhythm and land softly.' },
      { id: 'squats',       icon: '🦵', name: 'Bodyweight Squats',  duration: '6 mins', reps: '3 sets × 15 reps', desc: 'Keep your back straight, chest up, and lower until thighs are parallel.' },
      { id: 'pushups',      icon: '💪', name: 'Push-Ups',           duration: '6 mins', reps: '3 sets × 12 reps', desc: 'Maintain a straight body line from head to heels. Breathe out on the push.' },
      { id: 'mtnclimbers',  icon: '🏔️', name: 'Mountain Climbers', duration: '6 mins', reps: '3 sets × 20 reps', desc: 'Drive your knees toward your chest alternately at a fast but controlled pace.' },
      { id: 'plank',        icon: '🪨', name: 'Plank',              duration: '7 mins', reps: '3 sets × 45 sec',  desc: 'Keep hips level, core tight. Do not hold your breath.' },
    ],
  },
  1: { // Monday
    label: 'Monday',
    emoji: '🚀',
    exercises: [
      { id: 'highknees',    icon: '🦿', name: 'High Knees',         duration: '5 mins', reps: '3 sets × 30 sec',  desc: 'Run in place lifting your knees as high as possible. Pump your arms.' },
      { id: 'lunges',       icon: '🦵', name: 'Lunges',             duration: '6 mins', reps: '3 sets × 12 each', desc: 'Step forward, lower your back knee near the ground. Keep torso upright.' },
      { id: 'glutebridges', icon: '🍑', name: 'Glute Bridges',      duration: '6 mins', reps: '3 sets × 20 reps', desc: 'Lie on your back, push hips upward squeezing glutes at the top.' },
      { id: 'shouldertaps', icon: '👐', name: 'Shoulder Taps',      duration: '6 mins', reps: '3 sets × 20 reps', desc: 'In plank position, tap each shoulder alternately. Keep hips still.' },
      { id: 'bicyclecrunches', icon: '🚲', name: 'Bicycle Crunches', duration: '7 mins', reps: '3 sets × 20 reps', desc: 'Bring opposite elbow to knee. Extend the other leg fully. Slow & controlled.' },
    ],
  },
  2: { // Tuesday
    label: 'Tuesday',
    emoji: '🔥',
    exercises: [
      { id: 'burpees',      icon: '💥', name: 'Burpees',            duration: '6 mins', reps: '3 sets × 8 reps',  desc: 'Drop to a push-up, jump your feet in, then jump up with arms overhead.' },
      { id: 'stepups',      icon: '📦', name: 'Step-Ups',           duration: '6 mins', reps: '3 sets × 12 each', desc: 'Use a step or sturdy chair. Step up and down in a controlled motion.' },
      { id: 'inclinepush',  icon: '📐', name: 'Incline Push-Ups',   duration: '6 mins', reps: '3 sets × 15 reps', desc: 'Hands on elevated surface. Great for upper chest and shoulders.' },
      { id: 'russiantwist', icon: '🔄', name: 'Russian Twists',     duration: '6 mins', reps: '3 sets × 20 reps', desc: 'Sit at 45°, twist side to side. Keep feet lifted for more challenge.' },
      { id: 'wallsit',      icon: '🧱', name: 'Wall Sit',           duration: '6 mins', reps: '3 sets × 45 sec',  desc: 'Slide down the wall until thighs parallel. Hold. Breathe steadily.' },
    ],
  },
  3: { // Wednesday
    label: 'Wednesday',
    emoji: '⚡',
    exercises: [
      { id: 'jumpingjacks2', icon: '⚡', name: 'Jumping Jacks',     duration: '5 mins', reps: '3 sets × 50 reps', desc: 'Start with this classic to get blood flowing. Keep a steady rhythm.' },
      { id: 'tricepsdips',  icon: '💺', name: 'Tricep Dips',        duration: '6 mins', reps: '3 sets × 12 reps', desc: 'Use a chair. Lower and raise yourself using your arms. Keep elbows close.' },
      { id: 'legRaises',    icon: '🦿', name: 'Leg Raises',         duration: '6 mins', reps: '3 sets × 15 reps', desc: 'Lie flat, keep legs straight, raise to 90° and lower slowly. No swinging.' },
      { id: 'sumoSquats',   icon: '🦵', name: 'Sumo Squats',        duration: '6 mins', reps: '3 sets × 15 reps', desc: 'Wide stance, toes out. Lower deeply and drive through heels on the way up.' },
      { id: 'superman',     icon: '🦸', name: 'Superman Hold',      duration: '7 mins', reps: '3 sets × 10 reps', desc: 'Lie face down, lift arms and legs simultaneously. Hold 2 seconds. Great for back.' },
    ],
  },
  4: { // Thursday
    label: 'Thursday',
    emoji: '🌟',
    exercises: [
      { id: 'skipjump',     icon: '🪢', name: 'Skip / Jump Rope',   duration: '6 mins', reps: '3 sets × 1 min',   desc: 'If no rope, mimic the motion. Great cardio and coordination exercise.' },
      { id: 'pikePush',     icon: '🔺', name: 'Pike Push-Ups',      duration: '6 mins', reps: '3 sets × 10 reps', desc: 'Hips high in an inverted V. Bend elbows to lower your head toward the floor.' },
      { id: 'calf',         icon: '🦶', name: 'Calf Raises',        duration: '5 mins', reps: '3 sets × 25 reps', desc: 'Stand tall, raise onto your toes, hold for a second, lower slowly.' },
      { id: 'sidePlank',    icon: '🪨', name: 'Side Plank',         duration: '6 mins', reps: '3 sets × 30 sec each', desc: 'Lie sideways, prop on forearm. Keep body straight. Switch sides.' },
      { id: 'boxJumps',     icon: '📦', name: 'Box Jumps / Squat Jumps', duration: '7 mins', reps: '3 sets × 8 reps', desc: 'Explosive jump from squat position. Land softly bending knees.' },
    ],
  },
  5: { // Friday
    label: 'Friday',
    emoji: '🎉',
    exercises: [
      { id: 'warmupjog',    icon: '🏃', name: 'Jogging in Place',   duration: '5 mins', reps: '3 sets × 1 min',   desc: 'Warm up with an easy jog. Gradually increase pace each set.' },
      { id: 'diamondPush',  icon: '💎', name: 'Diamond Push-Ups',   duration: '6 mins', reps: '3 sets × 10 reps', desc: 'Hands in diamond shape under chest. Targets triceps and inner chest.' },
      { id: 'curtsy',       icon: '👑', name: 'Curtsy Lunges',      duration: '6 mins', reps: '3 sets × 12 each', desc: 'Cross your leg behind and lower down. Targets glutes and outer thighs.' },
      { id: 'toeTouches',   icon: '🙆', name: 'Toe Touches',        duration: '6 mins', reps: '3 sets × 20 reps', desc: 'Lie on back, raise legs to 90°. Reach up to touch your toes. Core focus.' },
      { id: 'bear',         icon: '🐻', name: 'Bear Crawl',         duration: '7 mins', reps: '3 sets × 30 sec',  desc: 'On hands and knees, keep knees 2 inches off the floor. Crawl forward and back.' },
    ],
  },
  6: { // Saturday
    label: 'Saturday',
    emoji: '🏆',
    exercises: [
      { id: 'starJumps',    icon: '⭐', name: 'Star Jumps',         duration: '5 mins', reps: '3 sets × 30 reps', desc: 'Jump wide spreading arms and legs into a star shape. High intensity cardio.' },
      { id: 'widePush',     icon: '🤲', name: 'Wide Push-Ups',      duration: '6 mins', reps: '3 sets × 12 reps', desc: 'Hands wider than shoulder width. Targets outer chest and shoulders.' },
      { id: 'singleLegDeadlift', icon: '🦩', name: 'Single-Leg Balance', duration: '6 mins', reps: '3 sets × 30 sec each', desc: 'Balance on one leg. Extend other behind. Great for stability and glutes.' },
      { id: 'crunchKnee',   icon: '🦴', name: 'Crunch with Knee Twist', duration: '6 mins', reps: '3 sets × 20 reps', desc: 'Alternate bringing elbow to opposite knee as you crunch up. Oblique focus.' },
      { id: 'plank2',       icon: '🪨', name: 'Plank to Downward Dog', duration: '7 mins', reps: '3 sets × 10 reps', desc: 'Alternate between plank and downward dog position. Flow slowly.' },
    ],
  },
};

// ══════════════════════════════════════════
// STORAGE HELPERS
// ══════════════════════════════════════════

const STORAGE_KEY = 'chaandhu_journal_v1';

function loadData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch { return {}; }
}

function saveData(data) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch {}
}

function getData() { return loadData(); }

function getDateKey(d) {
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

function getDayData(dateKey) {
  const data = getData();
  if (!data[dateKey]) data[dateKey] = {};
  return data[dateKey];
}

function saveDayData(dateKey, dayData) {
  const data = getData();
  data[dateKey] = dayData;
  saveData(data);
}

// ══════════════════════════════════════════
// STATE
// ══════════════════════════════════════════

const state = {
  currentPage: 'today',
  selectedDate: new Date(),
  foodDate: new Date(),
  exerciseDate: new Date(),
  journalDate: new Date(),
  activeExerciseDay: new Date().getDay(),
  weeklyModalDay: new Date().getDay(),
  selectedMood: null,
  selectedCategory: 'General',
  openInlineLearn: false,
  historyMonth: new Date(),
  historySelectedDateKey: getDateKey(new Date()),
  activeDemoExId: null,
};

// ══════════════════════════════════════════
// UTILS
// ══════════════════════════════════════════

const DAYS_FULL = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const DAYS_SHORT = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];

function formatDate(d) {
  return `${DAYS_FULL[d.getDay()]}, ${MONTHS[d.getMonth()]} ${d.getDate()}`;
}

function formatDateShort(d) {
  return `${MONTHS[d.getMonth()].slice(0,3)} ${d.getDate()}, ${d.getFullYear()}`;
}

function isToday(d) {
  const now = new Date();
  return d.getDate() === now.getDate() && d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
}

function getGreeting() {
  const h = new Date().getHours();
  if (h < 5)  return { text: 'Good night, Chaandhu', emoji: '🌙' };
  if (h < 12) return { text: 'Good morning, Chaandhu', emoji: '☀️' };
  if (h < 17) return { text: 'Good afternoon, Chaandhu', emoji: '🌤️' };
  if (h < 21) return { text: 'Good evening, Chaandhu', emoji: '🌆' };
  return { text: 'Good night, Chaandhu', emoji: '🌙' };
}

function addDays(d, n) {
  const nd = new Date(d);
  nd.setDate(nd.getDate() + n);
  return nd;
}

function clamp(v, mn, mx) { return Math.min(Math.max(v, mn), mx); }

function el(id) { return document.getElementById(id); }

let toastTimer = null;
function showToast(msg, dur = 2500) {
  const t = el('toast') || (() => {
    const div = document.createElement('div');
    div.id = 'toast';
    document.body.appendChild(div);
    return div;
  })();
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), dur);
}

// ══════════════════════════════════════════
// PROGRESS HELPERS
// ══════════════════════════════════════════

function getApplicableItems() {
  // optional items not counted unless checked
  return CHECKLIST_ITEMS.filter(i => !i.optional);
}

function getCompletionForDate(dateKey) {
  const dd = getDayData(dateKey);
  const checked = dd.checklist || {};
  const applicable = getApplicableItems();
  const total = applicable.length;
  const done = applicable.filter(i => checked[i.id]).length;
  return { done, total, pct: total ? Math.round((done/total)*100) : 0 };
}

function getProgressMessage(pct) {
  if (pct === 100) return '🎉 Day completed!';
  if (pct >= 70)  return '🌟 Almost there!';
  if (pct >= 30)  return '💪 Keep going! You\'re building consistency';
  return '🌱 Every small step counts';
}

function getProgressColor(pct) {
  if (pct >= 70) return '#4ade80';
  if (pct >= 40) return '#fbbf24';
  return '#8b5cf6';
}

function calculateStreak() {
  let streak = 0;
  const now = new Date();
  for (let i = 0; i < 365; i++) {
    const d = addDays(now, -i);
    const k = getDateKey(d);
    const { pct } = getCompletionForDate(k);
    if (pct >= 70) streak++;
    else break;
  }
  return streak;
}

function openNoSmokingModal() {
  const dateKey = getDateKey(state.selectedDate);
  const dd = getDayData(dateKey);
  const checked = dd.checklist || {};
  const isChecked = !!checked['nosmoking'];

  // Calculate smoke-free streak
  let smokeFreeStreak = 0;
  const now = new Date();
  for (let i = 0; i < 365; i++) {
    const d = addDays(now, -i);
    const k = getDateKey(d);
    const dayD = getDayData(k);
    if (dayD.checklist && dayD.checklist['nosmoking']) smokeFreeStreak++;
    else break;
  }

  const messages = [
    { emoji: '🌟', title: 'You\'re a champion!', body: 'Every smoke-free day is a victory for your health. Your lungs thank you!' },
    { emoji: '💚', title: 'Breathe in, breathe out!', body: 'Fresh air, clear lungs. You\'re making an incredible choice every single day.' },
    { emoji: '🚀', title: 'Progress is progress!', body: 'Each smoke-free day adds years to your life and life to your years.' },
    { emoji: '🌸', title: 'Feeling stronger!', body: 'Your body is healing and getting healthier with every smoke-free moment.' },
  ];
  const msg = messages[smokeFreeStreak % messages.length];

  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.id = 'modal-nosmoking';
  overlay.innerHTML = `
    <div class="modal-sheet">
      <div class="modal-handle"></div>
      <button class="modal-close-btn" id="nosmoking-close">✕</button>
      <div style="text-align: center; padding: 8px 24px 24px">
        <div style="font-size: 72px; margin-bottom: 12px">${msg.emoji}</div>
        <div style="font-family: Poppins, sans-serif; font-size: 22px; font-weight: 800; background: linear-gradient(135deg, #4ade80, #2dd4bf); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; margin-bottom: 8px">${msg.title}</div>
        <div style="font-size: 14px; color: var(--text-secondary); line-height: 1.7; margin-bottom: 20px">${msg.body}</div>

        ${smokeFreeStreak > 0 ? `
          <div style="background: linear-gradient(135deg, rgba(74,222,128,0.15), rgba(45,212,191,0.1)); border: 1px solid rgba(74,222,128,0.3); border-radius: var(--radius-lg); padding: 16px; margin-bottom: 20px">
            <div style="font-size: 36px; font-weight: 900; font-family: Poppins, sans-serif; color: #4ade80">${smokeFreeStreak}</div>
            <div style="font-size: 13px; color: var(--text-secondary); font-weight: 600">consecutive smoke-free ${smokeFreeStreak === 1 ? 'day' : 'days'} 🎉</div>
          </div>
        ` : ''}

        <button class="btn-primary" id="nosmoking-mark" style="background: linear-gradient(135deg, #22c55e, #14b8a6); box-shadow: 0 4px 20px rgba(34,197,94,0.35)">
          ${isChecked ? '✅ Smoke-Free Day Marked!' : '🚭 Mark as Smoke-Free Day'}
        </button>
        ${isChecked ? '<div style="font-size: 12px; color: #4ade80; font-weight: 700; margin-top: 12px">Another smoke-free day completed! You\'re incredible! 💪</div>' : ''}
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  overlay.querySelector('#nosmoking-close').addEventListener('click', () => overlay.remove());
  overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove(); });
  overlay.querySelector('#nosmoking-mark').addEventListener('click', () => {
    toggleChecklistItem('nosmoking');
    overlay.remove();
  });
}


// ══════════════════════════════════════════
// PAGE: TODAY
// ══════════════════════════════════════════

function renderTodayPage() {
  const page = el('page-today');
  const dateKey = getDateKey(state.selectedDate);
  const dd = getDayData(dateKey);
  const checked = dd.checklist || {};
  const greeting = getGreeting();
  const { done, total, pct } = getCompletionForDate(dateKey);

  page.innerHTML = `
    <!-- Header -->
    <div class="today-header-bg">
      <div class="app-logo">🌙 Chaandhu's Journal</div>
      <div class="greeting-text">${greeting.emoji} ${greeting.text}</div>
      <div class="date-nav">
        <button class="date-nav-btn" id="prev-date" aria-label="Previous day">‹</button>
        <div class="date-display">
          <div class="date-day">${isToday(state.selectedDate) ? 'Today' : DAYS_FULL[state.selectedDate.getDay()]}</div>
          <div class="date-full">${formatDate(state.selectedDate)}</div>
        </div>
        <button class="date-nav-btn" id="next-date" aria-label="Next day">›</button>
      </div>
    </div>

    <!-- Progress -->
    <div class="progress-section">
      <div class="progress-header">
        <span class="progress-title">Today's Progress</span>
        <span class="progress-pct">${pct}%</span>
      </div>
      <div class="progress-bar-track">
        <div class="progress-bar-fill" id="progress-fill" style="width: ${pct}%"></div>
      </div>
      <div class="progress-count">
        <span id="progress-done">${done}</span> <span>/ ${total} completed</span>
      </div>
      <div class="progress-message" id="progress-msg">${getProgressMessage(pct)}</div>
    </div>

    <!-- Checklist -->
    <div class="checklist-section" id="checklist-section"></div>

    <!-- History -->
    <div style="padding: 0 16px 8px">
      <button class="history-btn" id="history-btn">
        <span>📅</span> View History
      </button>
    </div>
  `;

  // Streak
  const streak = calculateStreak();
  if (streak > 0) {
    const streakEl = document.createElement('div');
    streakEl.className = 'streak-banner';
    streakEl.innerHTML = `🔥 <strong>${streak}-day streak</strong> — Keep it up, Chaandhu!`;
    el('checklist-section').before(streakEl);
  }

  // Render checklist items
  // Render checklist items
  const section = el('checklist-section');
  CHECKLIST_ITEMS.forEach(item => {
    const isChecked = !!checked[item.id];
    const card = document.createElement('div');
    card.className = `checklist-card${isChecked ? ' completed' : ''}${item.optional ? ' optional-task' : ''}`;
    card.dataset.id = item.id;
    card.style.setProperty('--task-color', item.color || '#8b5cf6');

    const smokeFreeMsg = item.id === 'nosmoking' ? `<div class="smoke-free-msg${isChecked ? ' visible' : ''}" id="smoke-msg-${item.id}">Another smoke-free day completed! 💪</div>` : '';
    const optBadge = item.optional ? '<span class="optional-badge">Optional</span>' : '';
    let subText = item.sub;
    if (item.id === 'water') subText = getWaterSub(dateKey);
    else if (item.id === 'learn') subText = getLearnSub(dateKey);

    card.innerHTML = `
      <div class="card-color-bar" style="background: ${item.color || '#8b5cf6'}"></div>
      <button class="check-btn${isChecked ? ' checked' : ''}" data-id="${item.id}" aria-label="Toggle ${item.name}" style="${isChecked ? '' : `border-color: ${item.color}55`}">
        ${isChecked ? '✓' : ''}
      </button>
      <span class="task-icon">${item.icon}</span>
      <div class="task-info">
        <div class="task-name">${item.name}${optBadge}</div>
        <div class="task-sub">${subText}</div>
        ${smokeFreeMsg}
      </div>
      ${item.special ? `<button class="arrow-btn" data-id="${item.id}" data-special="${item.special}" aria-label="Open ${item.name} details" style="color: ${item.color}; border-color: ${item.color}33">›</button>` : ''}
    `;
    section.appendChild(card);

    // If inline learn section is open, append directly below the Learn card
    if (item.id === 'learn' && state.openInlineLearn) {
      section.appendChild(renderInlineLearnPanel(dateKey));
    }
  });

  // Events
  el('prev-date').addEventListener('click', () => {
    state.selectedDate = addDays(state.selectedDate, -1);
    renderTodayPage();
  });
  el('next-date').addEventListener('click', () => {
    state.selectedDate = addDays(state.selectedDate, 1);
    renderTodayPage();
  });
  el('history-btn').addEventListener('click', openHistory);

  // Checklist checkboxes
  section.querySelectorAll('.check-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      toggleChecklistItem(btn.dataset.id);
    });
  });

  // Arrow buttons
  section.querySelectorAll('.arrow-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      handleSpecialArrow(btn.dataset.special, btn.dataset.id);
    });
  });

  // Card tap (whole card taps checkbox)
  section.querySelectorAll('.checklist-card').forEach(card => {
    card.addEventListener('click', e => {
      if (!e.target.closest('.arrow-btn') && !e.target.closest('.check-btn')) {
        const id = card.dataset.id;
        const item = CHECKLIST_ITEMS.find(i => i.id === id);
        if (item?.special === 'exercise') {
          state.selectedDate = new Date();
          state.activeExerciseDay = new Date().getDay();
          navigateTo('exercise');
        } else if (item?.special === 'learn') {
          state.openInlineLearn = !state.openInlineLearn;
          renderTodayPage();
        } else {
          toggleChecklistItem(id);
        }
      }
    });
  });
}

function getWaterSub(dateKey) {
  const dd = getDayData(dateKey);
  const ml = dd.water || 0;
  if (ml === 0) return 'Stay hydrated — 3 to 4 litres';
  return `${(ml/1000).toFixed(2).replace(/\.?0+$/,'')} L drunk today`;
}

function getLearnSub(dateKey) {
  const dd = getDayData(dateKey);
  if (dd.learn && dd.learn.topic) {
    const time = dd.learn.timeSpent ? ` · ${dd.learn.timeSpent}` : '';
    const cat = dd.learn.category ? `${dd.learn.category}` : 'Learned';
    return `📚 ${dd.learn.topic} (${cat}${time})`;
  }
  return 'Growth mindset — tap arrow › or card to enter what you learned';
}

function toggleChecklistItem(id) {
  const dateKey = getDateKey(state.selectedDate);
  const dd = getDayData(dateKey);
  if (!dd.checklist) dd.checklist = {};
  dd.checklist[id] = !dd.checklist[id];
  saveDayData(dateKey, dd);

  const wasComplete = getCompletionForDate(dateKey).pct === 100;
  renderTodayPage();
  if (!wasComplete && getCompletionForDate(dateKey).pct === 100) {
    setTimeout(showCelebration, 400);
  }
}

function handleSpecialArrow(special, id) {
  if (special === 'exercise') {
    state.selectedDate = new Date();
    state.activeExerciseDay = new Date().getDay();
    navigateTo('exercise');
  }
  else if (special === 'water') { openWaterTracker(); }
  else if (special === 'learn') {
    state.openInlineLearn = !state.openInlineLearn;
    renderTodayPage();
  }
  else if (special === 'nosmoking') { openNoSmokingModal(); }
}

// ══════════════════════════════════════════
// PAGE: EXERCISE
// ══════════════════════════════════════════

// ══════════════════════════════════════════
// PAGE: EXERCISE
// ══════════════════════════════════════════

function getMuscleTarget(exId) {
  if (['jumpingjacks', 'jumpingjacks2', 'highknees', 'skipjump', 'starJumps', 'warmupjog', 'burpees'].includes(exId)) return 'Full Body Cardio & Calorie Burn';
  if (['squats', 'sumoSquats', 'lunges', 'curtsy', 'stepups', 'wallsit', 'boxJumps', 'calf'].includes(exId)) return 'Quads, Glutes & Lower Body';
  if (['pushups', 'inclinepush', 'pikePush', 'diamondPush', 'widePush', 'tricepsdips'].includes(exId)) return 'Chest, Shoulders & Triceps';
  if (['plank', 'sidePlank', 'superman', 'russiantwist', 'legRaises', 'toeTouches', 'crunchKnee', 'bicyclecrunches'].includes(exId)) return 'Core Abs & Stability';
  return 'Full Body Conditioning';
}

function renderExerciseDollSvg(exId) {
  let animClass = 'anim-squat';
  if (['jumpingjacks', 'jumpingjacks2', 'highknees', 'skipjump', 'boxJumps', 'starJumps', 'warmupjog'].includes(exId)) {
    animClass = 'anim-jumping-jacks';
  } else if (['pushups', 'inclinepush', 'pikePush', 'diamondPush', 'widePush', 'tricepsdips', 'shouldertaps'].includes(exId)) {
    animClass = 'anim-pushup';
  } else if (['plank', 'sidePlank', 'superman', 'bear', 'plank2', 'wallsit'].includes(exId)) {
    animClass = 'anim-plank';
  } else if (['bicyclecrunches', 'russiantwist', 'legRaises', 'toeTouches', 'crunchKnee', 'mtnclimbers', 'burpees', 'glutebridges'].includes(exId)) {
    animClass = 'anim-crunch';
  } else if (['lunges', 'curtsy', 'stepups', 'singleLegDeadlift', 'calf'].includes(exId)) {
    animClass = 'anim-lunge';
  }

  return `
    <div class="doll-stage ${animClass}">
      <svg class="doll-svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="100" cy="176" rx="55" ry="8" fill="rgba(139, 92, 246, 0.25)" class="doll-shadow" />
        <g class="doll-body-group">
          <!-- Head -->
          <circle cx="100" cy="50" r="14" fill="#c084fc" stroke="#8b5cf6" stroke-width="3" class="doll-head" />
          <circle cx="95" cy="48" r="2" fill="#fff" />
          <circle cx="105" cy="48" r="2" fill="#fff" />
          <path d="M 95 56 Q 100 60 105 56" stroke="#fff" stroke-width="2" fill="none" />

          <!-- Torso -->
          <line x1="100" y1="64" x2="100" y2="120" stroke="#a78bfa" stroke-width="8" stroke-linecap="round" class="doll-torso" />

          <!-- Left Arm -->
          <g class="doll-arm-left-g">
            <line x1="100" y1="72" x2="70" y2="100" stroke="#f472b6" stroke-width="6" stroke-linecap="round" class="doll-arm-left" />
            <circle cx="70" cy="100" r="4" fill="#f472b6" />
          </g>

          <!-- Right Arm -->
          <g class="doll-arm-right-g">
            <line x1="100" y1="72" x2="130" y2="100" stroke="#f472b6" stroke-width="6" stroke-linecap="round" class="doll-arm-right" />
            <circle cx="130" cy="100" r="4" fill="#f472b6" />
          </g>

          <!-- Left Leg -->
          <g class="doll-leg-left-g">
            <line x1="100" y1="120" x2="80" y2="170" stroke="#60a5fa" stroke-width="7" stroke-linecap="round" class="doll-leg-left" />
            <circle cx="80" cy="170" r="5" fill="#60a5fa" />
          </g>

          <!-- Right Leg -->
          <g class="doll-leg-right-g">
            <line x1="100" y1="120" x2="120" y2="170" stroke="#60a5fa" stroke-width="7" stroke-linecap="round" class="doll-leg-right" />
            <circle cx="120" cy="170" r="5" fill="#60a5fa" />
          </g>
        </g>
      </svg>
    </div>
  `;
}

function renderExercisePage() {
  const page = el('page-exercise');
  const dayIndex = state.activeExerciseDay;
  const workout = WEEKLY_WORKOUTS[dayIndex];
  // Use state.selectedDate so exercise data aligns with Today page
  const dateKey = getDateKey(state.selectedDate);
  const dd = getDayData(dateKey);
  const exDone = dd.exercises || {};

  const doneCount = workout.exercises.filter(e => exDone[e.id]).length;
  const totalCount = workout.exercises.length;
  const pct = totalCount ? Math.round((doneCount/totalCount)*100) : 0;

  page.innerHTML = `
    <div class="exercise-header">
      <div class="ex-page-title">💪 Daily Exercise</div>
      <div class="ex-page-sub">Today's 30-Minute Workout</div>
      <div class="ex-day-badge">${workout.emoji} ${workout.label} · 30 Minute Workout</div>
    </div>

    <div class="page-content" style="padding-top: 16px">
      <!-- Progress -->
      <div class="card" style="border-color: rgba(45,212,191,0.2); background: linear-gradient(135deg, rgba(45,212,191,0.08), rgba(96,165,250,0.05))">
        <div class="progress-header">
          <span class="progress-title" style="color: var(--teal-400)">Workout Progress</span>
          <span style="font-size: 13px; font-weight: 700; color: var(--teal-400)">${pct}%</span>
        </div>
        <div class="progress-bar-track" style="margin-bottom: 8px">
          <div class="progress-bar-fill" style="width: ${pct}%; background: linear-gradient(90deg, #14b8a6, #60a5fa)"></div>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center">
          <span style="font-size: 20px; font-weight: 900; font-family: Poppins, sans-serif">
            ${doneCount} <span style="font-size: 14px; font-weight: 600; color: var(--text-muted)">/ ${totalCount} exercises</span>
          </span>
          <span style="font-size: 13px; font-weight: 700; color: var(--text-muted)">🕐 30 minutes total</span>
        </div>
      </div>

      <!-- Exercise Cards -->
      <div id="exercise-cards"></div>

      <!-- Weekly Plan Btn -->
      <button class="weekly-plan-btn" id="weekly-plan-btn">
        📅 View Weekly Plan
      </button>
    </div>
  `;

  const cardsContainer = el('exercise-cards');
  workout.exercises.forEach((ex, idx) => {
    const done = !!exDone[ex.id];
    const accent = EXERCISE_ACCENT_COLORS[idx % EXERCISE_ACCENT_COLORS.length];
    const isDemoOpen = state.activeDemoExId === ex.id;

    const card = document.createElement('div');
    card.className = `ex-card${done ? ' done' : ''}`;
    card.innerHTML = `
      <div class="ex-card-accent" style="background: ${accent}"></div>
      <div class="ex-card-header">
        <div class="ex-card-left" style="cursor: pointer" data-id="${ex.id}">
          <div class="ex-card-icon">${ex.icon}</div>
          <div class="ex-card-info">
            <div class="ex-card-name">${ex.name}</div>
            <span class="ex-card-duration">⏱ ${ex.duration} · ${ex.reps}</span>
          </div>
        </div>
        <button class="arrow-btn ex-demo-toggle-btn" data-id="${ex.id}" style="width: auto; padding: 4px 10px; font-size: 11px; font-weight: 800; color: ${accent}; border-color: ${accent}44; background: rgba(255,255,255,0.06)">
          ${isDemoOpen ? '✕ Close' : '🎥 Animation Reference'}
        </button>
      </div>
      <div class="ex-card-desc">${ex.desc}</div>

      <!-- Animated Demo Panel -->
      ${isDemoOpen ? `
        <div class="ex-demo-panel">
          <div class="ex-demo-hdr">
            <div class="ex-demo-title">🤸 Animated Reference — ${ex.name}</div>
          </div>

          ${renderExerciseDollSvg(ex.id)}

          <div class="ex-demo-info">
            <div class="ex-demo-step"><strong>Target Muscle:</strong> ${getMuscleTarget(ex.id)}</div>
            <div class="ex-demo-step"><strong>Form Tip:</strong> ${ex.desc}</div>
            <div class="ex-demo-step"><strong>Rhythm:</strong> ${ex.reps} · Controlled breathing</div>
          </div>

          <div style="display: flex; gap: 8px; margin-top: 10px">
            <button class="btn-primary ex-start-timer-btn" data-id="${ex.id}" style="padding: 10px 14px; font-size: 12px; background: linear-gradient(135deg, #0d9488, #3b82f6)">
              ⏱️ Start 30s Timer
            </button>
            <button class="ex-complete-btn${done ? ' done' : ''}" data-id="${ex.id}" style="margin: 0; padding: 10px 14px; font-size: 12px">
              ${done ? '✅ Completed' : '○ Mark Done'}
            </button>
          </div>

          <div class="ex-timer-display hidden" id="ex-timer-${ex.id}" style="text-align: center; margin-top: 10px; background: rgba(0,0,0,0.3); padding: 10px; border-radius: var(--radius-md)">
            <div style="font-size: 11px; font-weight: 800; color: var(--teal-400); text-transform: uppercase">Live Exercise Timer</div>
            <div style="font-size: 26px; font-weight: 900; color: #fff" id="timer-val-${ex.id}">30s</div>
          </div>
        </div>
      ` : ''}

      <div style="display: flex; gap: 8px; margin-top: 10px">
        <button class="ex-complete-btn${done ? ' done' : ''}" data-id="${ex.id}">
          ${done ? '✅ Completed' : '○ Mark Complete'}
        </button>
      </div>
    `;
    cardsContainer.appendChild(card);
  });

  // Events: Toggle Demo Animation
  cardsContainer.querySelectorAll('.ex-demo-toggle-btn, .ex-card-left').forEach(elItem => {
    elItem.addEventListener('click', (e) => {
      e.stopPropagation();
      const exId = elItem.dataset.id;
      state.activeDemoExId = (state.activeDemoExId === exId) ? null : exId;
      renderExercisePage();
    });
  });

  // Events: Mark Complete
  cardsContainer.querySelectorAll('.ex-complete-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleExercise(btn.dataset.id);
    });
  });

  // Events: 30s Quick Exercise Timer
  cardsContainer.querySelectorAll('.ex-start-timer-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const exId = btn.dataset.id;
      const timerDisplay = el(`ex-timer-${exId}`);
      const timerVal = el(`timer-val-${exId}`);
      if (!timerDisplay || !timerVal) return;

      timerDisplay.classList.remove('hidden');
      let timeLeft = 30;
      timerVal.textContent = `${timeLeft}s`;

      if (window.exTimerInterval) clearInterval(window.exTimerInterval);

      window.exTimerInterval = setInterval(() => {
        timeLeft--;
        timerVal.textContent = `${timeLeft}s`;
        if (timeLeft <= 0) {
          clearInterval(window.exTimerInterval);
          showToast(`💪 30s set finished! Great job!`);
          toggleExercise(exId);
        }
      }, 1000);
    });
  });

  el('weekly-plan-btn').addEventListener('click', openWeeklyPlan);
}

function toggleExercise(exId) {
  // Always use state.selectedDate to stay in sync with the Today page
  const dateKey = getDateKey(state.selectedDate);
  const dd = getDayData(dateKey);
  if (!dd.exercises) dd.exercises = {};
  dd.exercises[exId] = !dd.exercises[exId];
  saveDayData(dateKey, dd);

  // Sync Exercise checklist item:
  // Checked = at least 1 exercise done. Unchecked = zero done.
  const dayIndex = state.activeExerciseDay;
  const workout = WEEKLY_WORKOUTS[dayIndex];
  const doneCount = workout.exercises.filter(e => !!dd.exercises[e.id]).length;
  const allDone   = doneCount === workout.exercises.length;
  const anyDone   = doneCount > 0;

  if (!dd.checklist) dd.checklist = {};
  const wasChecked = !!dd.checklist['exercise'];

  if (anyDone && !wasChecked) {
    dd.checklist['exercise'] = true;
    saveDayData(dateKey, dd);
  } else if (!anyDone && wasChecked) {
    dd.checklist['exercise'] = false;
    saveDayData(dateKey, dd);
  }

  if (allDone) {
    showToast('🎉 All 5 exercises done! Amazing workout!');
  } else if (anyDone && !wasChecked) {
    showToast('💪 Exercise started — keep going!');
  }

  renderExercisePage();
}

// ══════════════════════════════════════════
// PAGE: JULY'S FOOD (CAT FEEDING JOURNAL)
// ══════════════════════════════════════════

const FOOD_MEALS = [
  { id: 'breakfast', icon: '🌅', label: 'Morning Cat Meal',          placeholder: 'e.g. 1/2 Can Salmon & Chicken Wet Food + Fresh Water Bowl', emoji: '🥫', accent: '#f59e0b' },
  { id: 'lunch',     icon: '☀️', label: 'Afternoon Kibble & Treats', placeholder: 'e.g. 1 Scoop Salmon Kibble + 2 Churu Cat Treats',      emoji: '🐟', accent: '#38bdf8' },
  { id: 'dinner',    icon: '🌙', label: 'Evening Dinner & Water',    placeholder: 'e.g. 1 Can Tuna & Poultry Pate + Clean Water Refill',    emoji: '🍗', accent: '#8b5cf6' },
  { id: 'snack',     icon: '🐾', label: 'Night Snack & Care',       placeholder: 'e.g. Cat Grass / Dental Chew + Water Bowl Check',         emoji: '🥛', accent: '#4ade80' },
];

const CAT_QUICK_PRESETS = [
  { emoji: '🥫', text: 'Wet Food Can (Salmon/Tuna)' },
  { emoji: '🪺', text: 'Salmon Kibble Bowl' },
  { emoji: '🐟', text: 'Churu Lickable Treat' },
  { emoji: '🥩', text: 'Chicken Pate' },
  { emoji: '💧', text: 'Fresh Water Bowl Refill' },
  { emoji: '🌿', text: 'Cat Grass / Dental Chew' },
];

function renderFoodPage() {
  const page = el('page-food');
  const dateKey = getDateKey(state.foodDate);
  const dd = getDayData(dateKey);
  const food = dd.food || {};

  const loggedMealsCount = FOOD_MEALS.filter(m => food[m.id]).length;

  page.innerHTML = `
    <div class="food-header">
      <div class="food-page-title">🐱 July's Food & Feeding Log</div>
      <div style="font-size: 13px; color: var(--text-secondary); font-weight: 600; margin-top: 4px">Daily meal, treat & hydration tracker for July the Cat 🐾</div>
      
      <div style="margin-top: 12px; display: inline-flex; align-items: center; gap: 6px; background: rgba(251, 191, 36, 0.15); border: 1px solid rgba(251, 191, 36, 0.3); border-radius: var(--radius-full); padding: 4px 12px; font-size: 12px; font-weight: 800; color: var(--amber-400)">
        <span>🐾 ${loggedMealsCount > 0 ? `July has ${loggedMealsCount} of ${FOOD_MEALS.length} meals logged today!` : 'July is waiting for breakfast!'}</span>
      </div>

      <div class="food-date-nav">
        <button class="date-nav-btn" id="food-prev-date">‹</button>
        <div class="date-display">
          <div class="date-day">${isToday(state.foodDate) ? 'Today' : DAYS_FULL[state.foodDate.getDay()]}</div>
          <div class="date-full">${formatDate(state.foodDate)}</div>
        </div>
        <button class="date-nav-btn" id="food-next-date">›</button>
      </div>
    </div>

    <div class="page-content" style="padding-top: 16px">
      ${FOOD_MEALS.map(meal => `
        <div class="food-meal-card" data-meal="${meal.id}">
          <div class="food-meal-header">
            <div class="food-meal-title">
              <span class="food-meal-icon">${meal.icon}</span>
              <span>${meal.label}</span>
            </div>
            <button class="arrow-btn" data-meal="${meal.id}" id="edit-${meal.id}-btn" style="border-color: ${meal.accent}33; color: ${meal.accent}" aria-label="Edit ${meal.label}">✏️ Edit</button>
          </div>

          <div class="food-entry-display${food[meal.id] ? '' : ' placeholder'}" id="food-display-${meal.id}" data-meal="${meal.id}">
            ${food[meal.id] ? `${meal.emoji} ${food[meal.id]}` : meal.placeholder}
          </div>

          <div class="food-edit-area" id="food-edit-${meal.id}">
            <div style="font-size: 11px; font-weight: 800; color: var(--text-muted); text-transform: uppercase; margin-bottom: 6px">Quick Cat Food Presets:</div>
            <div class="category-chips" style="margin-bottom: 10px; overflow-x: auto; flex-wrap: wrap">
              ${CAT_QUICK_PRESETS.map(p => `
                <button class="category-chip cat-preset-chip" data-meal="${meal.id}" data-preset="${p.emoji} ${p.text}">
                  ${p.emoji} ${p.text}
                </button>
              `).join('')}
            </div>

            <textarea class="food-textarea" id="food-ta-${meal.id}" placeholder="${meal.placeholder}" rows="3">${food[meal.id] || ''}</textarea>
            <div style="display: flex; gap: 8px; justify-content: flex-end; margin-top: 8px">
              <button class="arrow-btn" id="food-cancel-${meal.id}" style="width: auto; padding: 0 16px">Cancel</button>
              <button class="food-save-btn" id="food-save-${meal.id}" data-meal="${meal.id}">💾 Save Meal</button>
            </div>
          </div>
        </div>
      `).join('')}

      <!-- Cat Nutrition & Care Note -->
      <div class="card" style="background: rgba(251,191,36,0.06); border-color: rgba(251,191,36,0.25)">
        <div style="display: flex; align-items: flex-start; gap: 12px">
          <span style="font-size: 28px">🐱</span>
          <div>
            <div style="font-size: 14px; font-weight: 800; color: var(--amber-400)">July's Care & Hydration Tip</div>
            <div style="font-size: 12px; color: var(--text-secondary); margin-top: 4px; line-height: 1.6">
              Cats obtain most of their hydration from wet food. Make sure July gets high-quality wet food daily and fresh, clean water in a shallow bowl!
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  el('food-prev-date').addEventListener('click', () => {
    state.foodDate = addDays(state.foodDate, -1);
    renderFoodPage();
  });
  el('food-next-date').addEventListener('click', () => {
    state.foodDate = addDays(state.foodDate, 1);
    renderFoodPage();
  });

  FOOD_MEALS.forEach(meal => {
    const editBtn = el(`edit-${meal.id}-btn`);
    if (editBtn) {
      editBtn.addEventListener('click', () => {
        const editArea = el(`food-edit-${meal.id}`);
        editArea.classList.toggle('visible');
        if (editArea.classList.contains('visible')) {
          el(`food-ta-${meal.id}`).focus();
        }
      });
    }

    const displayEl = el(`food-display-${meal.id}`);
    if (displayEl) {
      displayEl.addEventListener('click', () => {
        el(`food-edit-${meal.id}`).classList.add('visible');
        el(`food-ta-${meal.id}`).focus();
      });
    }

    const cancelBtn = el(`food-cancel-${meal.id}`);
    if (cancelBtn) {
      cancelBtn.addEventListener('click', () => {
        el(`food-edit-${meal.id}`).classList.remove('visible');
      });
    }

    const saveBtn = el(`food-save-${meal.id}`);
    if (saveBtn) {
      saveBtn.addEventListener('click', () => saveFoodEntry(meal.id));
    }
  });

  // Attach Preset Chip Clicks
  page.querySelectorAll('.cat-preset-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const mealId = chip.dataset.meal;
      const preset = chip.dataset.preset;
      const textarea = el(`food-ta-${mealId}`);
      if (textarea) {
        if (textarea.value.trim()) {
          textarea.value += ` + ${preset}`;
        } else {
          textarea.value = preset;
        }
        textarea.focus();
      }
    });
  });
}

function saveFoodEntry(mealId) {
  const dateKey = getDateKey(state.foodDate);
  const dd = getDayData(dateKey);
  if (!dd.food) dd.food = {};
  const val = el(`food-ta-${mealId}`).value.trim();
  if (val) {
    dd.food[mealId] = val;
  } else {
    delete dd.food[mealId];
  }
  saveDayData(dateKey, dd);
  showToast('🐾 July\'s meal saved!');
  renderFoodPage();
}

// ══════════════════════════════════════════
// PAGE: JOURNAL
// ══════════════════════════════════════════

const MOODS = [
  { emoji: '😄', label: 'Great' },
  { emoji: '🙂', label: 'Good' },
  { emoji: '😐', label: 'Okay' },
  { emoji: '😔', label: 'Low' },
  { emoji: '😤', label: 'Stressed' },
];

function renderJournalPage() {
  const page = el('page-journal');
  const dateKey = getDateKey(state.journalDate);
  const dd = getDayData(dateKey);
  const entry = dd.journal || {};

  // Past journal entries (other days)
  const allData = getData();
  const pastEntries = Object.entries(allData)
    .filter(([k, v]) => v.journal && v.journal.text && k !== dateKey)
    .sort((a, b) => b[0].localeCompare(a[0]))
    .slice(0, 5);

  page.innerHTML = `
    <div class="journal-header">
      <div class="journal-page-title">📖 My Journal</div>
      <div style="font-size: 13px; color: var(--text-secondary); font-weight: 600; margin-top: 4px">
        ${isToday(state.journalDate) ? 'How was your day?' : formatDateShort(state.journalDate)}
      </div>
      <div style="margin-top: 12px; display: flex; justify-content: space-between; align-items: center;">
        <button class="date-nav-btn" id="j-prev">‹</button>
        <span style="font-size: 13px; font-weight: 700; color: var(--text-secondary)">${formatDate(state.journalDate)}</span>
        <button class="date-nav-btn" id="j-next">›</button>
      </div>
    </div>

    <div class="page-content" style="padding-top: 16px">
      <div class="journal-entry-card">
        <div class="journal-mood-section">
          <div class="journal-mood-label">How are you feeling? 💭</div>
          <div class="mood-options" id="mood-options">
            ${MOODS.map(m => `
              <button class="mood-btn${entry.mood === m.label ? ' selected' : ''}" data-mood="${m.label}">
                ${m.emoji}
                <span>${m.label}</span>
              </button>
            `).join('')}
          </div>
        </div>
        <div class="form-label">Today's Reflections ✍️</div>
        <textarea class="journal-entry-textarea" id="journal-textarea" placeholder="Write about your day... What happened? What are you grateful for? What did you learn?">${entry.text || ''}</textarea>
        <button class="journal-save-btn" id="journal-save-btn">
          💾 Save Entry
        </button>
      </div>

      ${pastEntries.length ? `
        <div class="journal-past-entries">
          <div class="section-label">Past Entries</div>
          ${pastEntries.map(([k, v]) => `
            <div class="journal-past-card">
              <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                <div class="journal-past-date">${formatDateShort(new Date(k + 'T00:00:00'))}</div>
                <span class="journal-past-mood">${MOODS.find(m => m.label === v.journal.mood)?.emoji || '📝'}</span>
              </div>
              <div class="journal-past-text">${v.journal.text.slice(0, 120)}${v.journal.text.length > 120 ? '…' : ''}</div>
            </div>
          `).join('')}
        </div>
      ` : ''}
    </div>
  `;

  state.selectedMood = entry.mood || null;

  el('j-prev').addEventListener('click', () => { state.journalDate = addDays(state.journalDate, -1); renderJournalPage(); });
  el('j-next').addEventListener('click', () => { state.journalDate = addDays(state.journalDate, 1); renderJournalPage(); });

  el('mood-options').querySelectorAll('.mood-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.selectedMood = btn.dataset.mood;
      el('mood-options').querySelectorAll('.mood-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
    });
  });

  el('journal-save-btn').addEventListener('click', saveJournalEntry);
}

function saveJournalEntry() {
  const dateKey = getDateKey(state.journalDate);
  const dd = getDayData(dateKey);
  const text = el('journal-textarea').value.trim();
  if (!text) { showToast('✏️ Write something first!'); return; }
  dd.journal = { text, mood: state.selectedMood, savedAt: new Date().toISOString() };
  saveDayData(dateKey, dd);
  showToast('💾 Journal entry saved!');
  renderJournalPage();
}

// ══════════════════════════════════════════
// MODALS
// ══════════════════════════════════════════

// ── Water Tracker ──
function openWaterTracker() {
  const dateKey = getDateKey(state.selectedDate);
  const dd = getDayData(dateKey);
  const ml = dd.water || 0;
  const targetMl = 3000;
  const pct = clamp((ml / targetMl) * 100, 0, 100);
  const circumference = 339.29;
  const dashOffset = circumference - (circumference * pct / 100);

  const overlay = el('modal-water');
  overlay.innerHTML = `
    <div class="modal-sheet">
      <div class="modal-handle"></div>
      <button class="modal-close-btn" id="water-close">✕</button>
      <div class="modal-title">💧 Water Tracker</div>
      <div class="water-display">
        <div class="water-visual">
          <svg viewBox="0 0 120 120" width="140" height="140">
            <defs>
              <linearGradient id="waterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#60a5fa"/>
                <stop offset="100%" stop-color="#2dd4bf"/>
              </linearGradient>
            </defs>
            <circle class="water-ring-track" cx="60" cy="60" r="54"/>
            <circle class="water-ring-fill" cx="60" cy="60" r="54" stroke-dashoffset="${dashOffset}"/>
          </svg>
          <div class="water-ring-emoji">${ml >= targetMl ? '🎉' : '💧'}</div>
        </div>
        <div class="water-amount">${(ml/1000).toFixed(2).replace(/\.?0+$/,'')} <span style="font-size: 24px">L</span></div>
        <div class="water-target">Goal: 3 – 4 Litres · ${Math.round(pct)}% complete</div>
        ${ml >= targetMl ? '<div style="color: var(--green-400); font-weight: 700; margin-top: 8px; font-size: 13px">🎉 Goal reached! Amazing!</div>' : ''}
        ${ml >= targetMl ? '' : `<div style="color: var(--text-muted); font-size: 12px; margin-top: 4px">${((targetMl - ml)/1000).toFixed(2).replace(/\.?0+$/,'')} L more to go</div>`}
      </div>
      <div class="water-btns">
        <button class="water-add-btn" data-ml="250">+250<span>ml</span></button>
        <button class="water-add-btn" data-ml="500">+500<span>ml</span></button>
        <button class="water-add-btn" data-ml="750">+750<span>ml</span></button>
      </div>
      <button class="water-add-btn" data-ml="1000" style="width: calc(100% - 40px); margin: 0 20px 12px; padding: 12px; background: linear-gradient(135deg, rgba(96,165,250,0.2), rgba(45,212,191,0.15)); border-color: rgba(96,165,250,0.35)">
        +1 Litre
      </button>
      <button class="water-reset-btn" id="water-reset">↺ Reset today's water</button>
    </div>
  `;
  overlay.classList.remove('hidden');

  el('water-close').addEventListener('click', () => { overlay.classList.add('hidden'); });
  overlay.addEventListener('click', e => { if (e.target === overlay) overlay.classList.add('hidden'); });

  overlay.querySelectorAll('.water-add-btn').forEach(btn => {
    btn.addEventListener('click', () => addWater(Number(btn.dataset.ml)));
  });
  el('water-reset').addEventListener('click', () => {
    const dd2 = getDayData(getDateKey(state.selectedDate));
    dd2.water = 0;
    dd2.checklist = dd2.checklist || {};
    dd2.checklist['water'] = false;
    saveDayData(getDateKey(state.selectedDate), dd2);
    openWaterTracker();
    renderTodayPage();
  });
}

function addWater(ml) {
  const dateKey = getDateKey(state.selectedDate);
  const dd = getDayData(dateKey);
  dd.water = (dd.water || 0) + ml;
  if (dd.water >= 3000) {
    if (!dd.checklist) dd.checklist = {};
    dd.checklist['water'] = true;
    showToast('💧 3L reached! Water task marked complete! 🎉');
  }
  saveDayData(dateKey, dd);
  openWaterTracker();
  renderTodayPage();
}

// ── Learn Something New (Inline & Modal) ──
function renderInlineLearnPanel(dateKey) {
  const dd = getDayData(dateKey);
  const entry = dd.learn || {};
  const categories = ['Programming', 'Reading', 'Skill', 'Language', 'Health', 'General', 'Other'];

  const allData = getData();
  const allLearn = Object.entries(allData)
    .filter(([k, v]) => v.learn && v.learn.topic && k !== dateKey)
    .sort((a, b) => b[0].localeCompare(a[0]))
    .slice(0, 3);

  const panel = document.createElement('div');
  panel.className = 'inline-learn-panel';
  panel.id = 'inline-learn-panel';

  panel.innerHTML = `
    <div class="inline-learn-header">
      <div class="inline-learn-title">📚 Write What You Learned Today</div>
      <button class="inline-learn-close" id="inline-learn-close-btn" aria-label="Close">✕</button>
    </div>
    <div class="learn-form" style="margin-top: 0">
      <div class="form-group">
        <label class="form-label">What did you learn today? *</label>
        <input class="form-input" type="text" id="inline-learn-topic" placeholder="e.g. How async/await works, CSS Grid layouts..." value="${entry.topic || ''}"/>
      </div>
      <div class="form-group">
        <label class="form-label">Category</label>
        <div class="category-chips">
          ${categories.map(c => `<button class="category-chip${(entry.category || state.selectedCategory || 'General') === c ? ' selected' : ''}" data-cat="${c}">${c}</button>`).join('')}
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">Time Spent</label>
        <input class="form-input" type="text" id="inline-learn-time" placeholder="e.g. 30 minutes, 1 hour..." value="${entry.timeSpent || ''}"/>
      </div>
      <div class="form-group">
        <label class="form-label">Notes & Reflections (Optional)</label>
        <textarea class="form-input form-textarea" id="inline-learn-notes" style="min-height: 60px" placeholder="Key takeaways or summary notes...">${entry.notes || ''}</textarea>
      </div>
      <button class="inline-save-btn" id="inline-learn-save-btn">📚 Save Learning & Check Box</button>

      ${allLearn.length ? `
        <div class="section-label" style="margin-top: 16px; margin-bottom: 8px">Past Learning History</div>
        ${allLearn.map(([k, v]) => `
          <div class="learn-saved-entry" style="padding: 8px 12px; margin-bottom: 6px">
            <div class="learn-saved-date">${formatDateShort(new Date(k + 'T00:00:00'))}</div>
            <div class="learn-saved-topic" style="font-size: 13px">${v.learn.topic}</div>
            <div class="learn-saved-meta" style="font-size: 11px">${v.learn.category || 'General'}${v.learn.timeSpent ? ' · ' + v.learn.timeSpent : ''}</div>
          </div>
        `).join('')}
      ` : ''}
    </div>
  `;

  setTimeout(() => {
    const closeBtn = panel.querySelector('#inline-learn-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        state.openInlineLearn = false;
        renderTodayPage();
      });
    }

    panel.querySelectorAll('.category-chip').forEach(chip => {
      chip.addEventListener('click', (e) => {
        e.stopPropagation();
        state.selectedCategory = chip.dataset.cat;
        panel.querySelectorAll('.category-chip').forEach(c => c.classList.remove('selected'));
        chip.classList.add('selected');
      });
    });

    const saveBtn = panel.querySelector('#inline-learn-save-btn');
    if (saveBtn) {
      saveBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        saveInlineLearnEntry(dateKey);
      });
    }
  }, 0);

  return panel;
}

function saveInlineLearnEntry(dateKey) {
  const topic = el('inline-learn-topic')?.value.trim();
  if (!topic) {
    showToast('✏️ Enter what you learned first!');
    return;
  }

  const dd = getDayData(dateKey);
  const timeSpent = el('inline-learn-time')?.value.trim() || '';
  const notes = el('inline-learn-notes')?.value.trim() || '';
  const category = state.selectedCategory || 'General';

  dd.learn = { topic, category, timeSpent, notes, savedAt: new Date().toISOString() };
  if (!dd.checklist) dd.checklist = {};
  dd.checklist['learn'] = true;

  saveDayData(dateKey, dd);
  showToast('📚 Learning saved & task checked! Great work!');
  state.openInlineLearn = false;
  renderTodayPage();
}

function openLearnModal() {
  const dateKey = getDateKey(state.selectedDate);
  const dd = getDayData(dateKey);
  const entry = dd.learn || {};
  const allData = getData();
  const allLearn = Object.entries(allData)
    .filter(([, v]) => v.learn && v.learn.topic)
    .sort((a, b) => b[0].localeCompare(a[0]))
    .slice(0, 5);

  const categories = ['Programming', 'Reading', 'Skill', 'Language', 'Health', 'General', 'Other'];

  const overlay = el('modal-learn');
  overlay.innerHTML = `
    <div class="modal-sheet">
      <div class="modal-handle"></div>
      <button class="modal-close-btn" id="learn-close">✕</button>
      <div class="modal-title">📚 Learn Something New</div>
      <div class="learn-form">
        <div class="form-group">
          <label class="form-label">What did you learn today? *</label>
          <input class="form-input" type="text" id="learn-topic" placeholder="e.g. How closures work in JavaScript" value="${entry.topic || ''}"/>
        </div>
        <div class="form-group">
          <label class="form-label">Category</label>
          <div class="category-chips">
            ${categories.map(c => `<button class="category-chip${(entry.category||'General') === c ? ' selected' : ''}" data-cat="${c}">${c}</button>`).join('')}
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Time Spent</label>
          <input class="form-input" type="text" id="learn-time" placeholder="e.g. 30 minutes" value="${entry.timeSpent || ''}"/>
        </div>
        <div class="form-group">
          <label class="form-label">Notes (Optional)</label>
          <textarea class="form-input form-textarea" id="learn-notes" placeholder="Any extra notes about what you learned...">${entry.notes || ''}</textarea>
        </div>
        <button class="learn-save-btn" id="learn-save-btn">📚 Save Learning</button>
        ${allLearn.length ? `
          <div class="section-label" style="margin-top: 24px">Past Learning</div>
          ${allLearn.map(([k, v]) => `
            <div class="learn-saved-entry">
              <div class="learn-saved-date">${formatDateShort(new Date(k + 'T00:00:00'))}</div>
              <div class="learn-saved-topic">${v.learn.topic}</div>
              <div class="learn-saved-meta">${v.learn.category || 'General'} · ${v.learn.timeSpent || ''}</div>
            </div>
          `).join('')}
        ` : ''}
        <div style="height: 32px"></div>
      </div>
    </div>
  `;

  el('learn-close').addEventListener('click', () => overlay.classList.add('hidden'));
  overlay.addEventListener('click', e => { if (e.target === overlay) overlay.classList.add('hidden'); });
  overlay.classList.remove('hidden');

  state.selectedCategory = entry.category || 'General';
  overlay.querySelectorAll('.category-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      state.selectedCategory = chip.dataset.cat;
      overlay.querySelectorAll('.category-chip').forEach(c => c.classList.remove('selected'));
      chip.classList.add('selected');
    });
  });

  el('learn-save-btn').addEventListener('click', saveLearnEntry);
}

function saveLearnEntry() {
  const topic = el('learn-topic').value.trim();
  if (!topic) { showToast('✏️ Enter what you learned first!'); return; }
  const dateKey = getDateKey(state.selectedDate);
  const dd = getDayData(dateKey);
  dd.learn = {
    topic,
    category: state.selectedCategory,
    timeSpent: el('learn-time').value.trim(),
    notes: el('learn-notes').value.trim(),
    savedAt: new Date().toISOString(),
  };
  if (!dd.checklist) dd.checklist = {};
  dd.checklist['learn'] = true;
  saveDayData(dateKey, dd);
  showToast('📚 Learning saved & task marked complete!');
  el('modal-learn').classList.add('hidden');
  renderTodayPage();
}

// ── History ──
function openHistory() {
  navigateTo('history');
}

// ══════════════════════════════════════════
// PAGE: HISTORY & CALENDAR
// ══════════════════════════════════════════

function renderHistoryPage() {
  const page = el('page-history');

  if (!state.historyMonth) {
    state.historyMonth = new Date();
  }
  if (!state.historySelectedDateKey) {
    state.historySelectedDateKey = getDateKey(new Date());
  }

  const year = state.historyMonth.getFullYear();
  const month = state.historyMonth.getMonth();
  const monthName = MONTHS[month];

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  let totalTasksDoneMonth = 0;
  let totalTasksPossibleMonth = 0;
  let journalEntriesMonth = 0;

  for (let d = 1; d <= daysInMonth; d++) {
    const dObj = new Date(year, month, d);
    const k = getDateKey(dObj);
    const stats = getCompletionForDate(k);
    totalTasksDoneMonth += stats.done;
    totalTasksPossibleMonth += stats.total;

    const dd = getDayData(k);
    if (dd.journal && (dd.journal.text || dd.journal.entry)) {
      journalEntriesMonth++;
    }
  }

  const monthPct = totalTasksPossibleMonth ? Math.round((totalTasksDoneMonth / totalTasksPossibleMonth) * 100) : 0;
  const streak = calculateStreak();

  page.innerHTML = `
    <div class="history-header">
      <div class="history-title">📅 Activity & Journal History</div>
      <div class="history-sub">Revisit past days, view logged entries & journal notes</div>

      <!-- Month Switcher -->
      <div class="history-month-nav">
        <button class="month-nav-btn" id="hist-prev-month" aria-label="Previous Month">‹</button>
        <div class="month-title">${monthName} ${year}</div>
        <button class="month-nav-btn" id="hist-next-month" aria-label="Next Month">›</button>
      </div>
    </div>

    <!-- Monthly Stats -->
    <div class="history-stats-grid">
      <div class="hist-stat-card">
        <div class="hist-stat-val">🔥 ${streak}</div>
        <div class="hist-stat-lbl">Day Streak</div>
      </div>
      <div class="hist-stat-card">
        <div class="hist-stat-val">${monthPct}%</div>
        <div class="hist-stat-lbl">Avg Completion</div>
      </div>
      <div class="hist-stat-card">
        <div class="hist-stat-val">📝 ${journalEntriesMonth}</div>
        <div class="hist-stat-lbl">Journal Entries</div>
      </div>
    </div>

    <!-- Calendar View -->
    <div class="calendar-card">
      <div class="calendar-weekdays">
        <div class="weekday-hdr">Sun</div>
        <div class="weekday-hdr">Mon</div>
        <div class="weekday-hdr">Tue</div>
        <div class="weekday-hdr">Wed</div>
        <div class="weekday-hdr">Thu</div>
        <div class="weekday-hdr">Fri</div>
        <div class="weekday-hdr">Sat</div>
      </div>

      <div class="calendar-days-grid" id="calendar-days-grid">
        ${renderCalendarCellsHtml(year, month, firstDay, daysInMonth)}
      </div>
    </div>

    <!-- Day Details Section -->
    <div id="history-day-details-container">
      ${renderHistoryDayDetailsHtml(state.historySelectedDateKey)}
    </div>

    <div style="height: 40px"></div>
  `;

  // Attach Month Navigation Events
  const prevBtn = el('hist-prev-month');
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      state.historyMonth = new Date(year, month - 1, 1);
      renderHistoryPage();
    });
  }

  const nextBtn = el('hist-next-month');
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      state.historyMonth = new Date(year, month + 1, 1);
      renderHistoryPage();
    });
  }

  // Attach Day Cell Click Events
  page.querySelectorAll('.cal-day-cell:not(.empty)').forEach(cell => {
    cell.addEventListener('click', () => {
      const dateKey = cell.dataset.dateKey;
      state.historySelectedDateKey = dateKey;
      page.querySelectorAll('.cal-day-cell').forEach(c => c.classList.remove('selected'));
      cell.classList.add('selected');

      const detailsContainer = el('history-day-details-container');
      if (detailsContainer) {
        detailsContainer.innerHTML = renderHistoryDayDetailsHtml(dateKey);
        attachDayDetailsEvents(dateKey);
      }
    });
  });

  attachDayDetailsEvents(state.historySelectedDateKey);
}

function renderCalendarCellsHtml(year, month, firstDay, daysInMonth) {
  let html = '';
  const todayKey = getDateKey(new Date());

  // Offset empty cells
  for (let i = 0; i < firstDay; i++) {
    html += `<div class="cal-day-cell empty"></div>`;
  }

  // Days of month
  for (let d = 1; d <= daysInMonth; d++) {
    const dObj = new Date(year, month, d);
    const dateKey = getDateKey(dObj);
    const stats = getCompletionForDate(dateKey);
    const dd = getDayData(dateKey);

    const isTodayCell = dateKey === todayKey;
    const isSelectedCell = dateKey === state.historySelectedDateKey;

    const hasJournal = !!(dd.journal && (dd.journal.text || dd.journal.entry));
    const hasExercise = !!(dd.exercises && Object.values(dd.exercises).some(Boolean));
    const hasWater = (dd.water || 0) >= 3000;
    const hasLearn = !!(dd.learn && dd.learn.topic);

    let badgeHtml = '';
    if (stats.pct === 100) {
      badgeHtml = `<span class="cal-day-badge full">🌟 100%</span>`;
    } else if (stats.pct > 0) {
      badgeHtml = `<span class="cal-day-badge partial">${stats.pct}%</span>`;
    }

    let indicators = '';
    if (hasJournal) indicators += '📝';
    if (hasExercise) indicators += '💪';
    if (hasWater) indicators += '💧';
    if (hasLearn) indicators += '📚';

    html += `
      <div class="cal-day-cell${isTodayCell ? ' today' : ''}${isSelectedCell ? ' selected' : ''}" data-date-key="${dateKey}">
        <span class="cal-day-num">${d}</span>
        ${badgeHtml}
        <div class="cal-indicators">${indicators}</div>
      </div>
    `;
  }

  return html;
}

function renderHistoryDayDetailsHtml(dateKey) {
  const dObj = new Date(dateKey + 'T00:00:00');
  const stats = getCompletionForDate(dateKey);
  const dd = getDayData(dateKey);
  const isTodayDate = dateKey === getDateKey(new Date());

  const journalText = dd.journal?.text || dd.journal?.entry || '';
  const journalMood = dd.journal?.mood || '';

  const learnEntry = dd.learn || {};

  const breakfast = dd.food?.breakfast || '';
  const lunch = dd.food?.lunch || '';
  const dinner = dd.food?.dinner || '';

  const exDoneCount = dd.exercises ? Object.values(dd.exercises).filter(Boolean).length : 0;

  return `
    <div class="history-detail-panel">
      <div class="hist-detail-header">
        <div>
          <div class="hist-detail-date">${formatDate(dObj)}${isTodayDate ? ' (Today)' : ''}</div>
          <div style="font-size: 11px; color: var(--text-muted); margin-top: 2px">${stats.done} of ${stats.total} checklist tasks completed</div>
        </div>
        <div class="hist-detail-pct">${stats.pct}% Complete</div>
      </div>

      <!-- Journal Section -->
      <div class="hist-journal-card">
        <div class="hist-journal-title">
          <span>📖 Daily Journal Entry</span>
          ${journalMood ? `<span style="font-size: 11px; text-transform: none; color: var(--pink-400)">Mood: ${journalMood}</span>` : ''}
        </div>
        ${journalText ? `
          <div class="hist-journal-text">"${journalText}"</div>
          <button class="btn-primary" id="btn-edit-journal" style="margin-top: 10px; padding: 8px 14px; font-size: 12px; background: rgba(192, 132, 252, 0.2); border: 1px solid rgba(192, 132, 252, 0.4); color: #c084fc; box-shadow: none">
            ✏️ Edit Journal Entry
          </button>
        ` : `
          <div style="font-size: 13px; color: var(--text-muted); font-style: italic; margin-bottom: 8px">No journal entry recorded for this date.</div>
          <button class="btn-primary" id="btn-write-journal" style="padding: 10px 16px; font-size: 13px">
            ✍️ Write Journal Entry for this Date
          </button>
        `}
      </div>

      <!-- Learn Section (if exists) -->
      ${learnEntry.topic ? `
        <div class="hist-section-card" style="border-color: rgba(192, 132, 252, 0.3); background: rgba(192, 132, 252, 0.05)">
          <div class="hist-section-hdr" style="color: #c084fc">📚 What You Learned</div>
          <div style="font-size: 14px; font-weight: 700; color: var(--text-primary)">${learnEntry.topic}</div>
          <div style="font-size: 12px; color: var(--text-muted); margin-top: 2px">
            Category: ${learnEntry.category || 'General'}${learnEntry.timeSpent ? ' · Time: ' + learnEntry.timeSpent : ''}
          </div>
          ${learnEntry.notes ? `<div style="font-size: 12px; color: var(--text-secondary); margin-top: 6px; font-style: italic">"${learnEntry.notes}"</div>` : ''}
        </div>
      ` : ''}

      <!-- Exercise Section (if exists) -->
      ${exDoneCount > 0 ? `
        <div class="hist-section-card" style="border-color: rgba(45, 212, 191, 0.3); background: rgba(45, 212, 191, 0.05)">
          <div class="hist-section-hdr" style="color: var(--teal-400)">💪 Workout Routine Completed</div>
          <div style="font-size: 13px; font-weight: 700; color: var(--text-primary)">
            ${exDoneCount} exercise${exDoneCount > 1 ? 's' : ''} completed on this day! 🎉
          </div>
        </div>
      ` : ''}

      <!-- Meals Logged (if exists) -->
      ${(breakfast || lunch || dinner) ? `
        <div class="hist-section-card">
          <div class="hist-section-hdr">🍽️ Meals Logged</div>
          <div style="font-size: 12px; line-height: 1.5; color: var(--text-secondary)">
            ${breakfast ? `<div><strong>🥣 Breakfast:</strong> ${breakfast}</div>` : ''}
            ${lunch ? `<div><strong>🍱 Lunch:</strong> ${lunch}</div>` : ''}
            ${dinner ? `<div><strong>🍽️ Dinner:</strong> ${dinner}</div>` : ''}
          </div>
        </div>
      ` : ''}

      <!-- Checklist Tasks Summary Grid -->
      <div class="hist-section-card">
        <div class="hist-section-hdr">✅ Checklist Tasks Overview</div>
        <div class="hist-tasks-grid">
          ${CHECKLIST_ITEMS.map(item => {
            const isDone = !!(dd.checklist && dd.checklist[item.id]);
            return `
              <div class="hist-task-item${isDone ? ' done' : ''}">
                <span>${isDone ? '✓' : '○'}</span>
                <span>${item.icon} ${item.name}</span>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Jump to Today Checklist -->
      <button class="btn-primary" id="btn-open-day-checklist" style="margin-top: 14px">
        🏠 View / Edit Checklist for ${formatDateShort(dObj)}
      </button>
    </div>
  `;
}

function attachDayDetailsEvents(dateKey) {
  const dObj = new Date(dateKey + 'T00:00:00');

  const btnEditJournal = el('btn-edit-journal');
  if (btnEditJournal) {
    btnEditJournal.addEventListener('click', () => {
      state.journalDate = dObj;
      state.selectedDate = dObj;
      navigateTo('journal');
    });
  }

  const btnWriteJournal = el('btn-write-journal');
  if (btnWriteJournal) {
    btnWriteJournal.addEventListener('click', () => {
      state.journalDate = dObj;
      state.selectedDate = dObj;
      navigateTo('journal');
    });
  }

  const btnOpenChecklist = el('btn-open-day-checklist');
  if (btnOpenChecklist) {
    btnOpenChecklist.addEventListener('click', () => {
      state.selectedDate = dObj;
      navigateTo('today');
    });
  }
}

// ── Weekly Exercise Plan ──
function openWeeklyPlan() {
  const todayDay = new Date().getDay();
  let selectedDay = state.weeklyModalDay;

  function renderWeekly() {
    const workout = WEEKLY_WORKOUTS[selectedDay];
    const overlay = el('modal-weekly');
    overlay.innerHTML = `
      <div class="modal-sheet">
        <div class="modal-handle"></div>
        <button class="modal-close-btn" id="weekly-close">✕</button>
        <div class="modal-title">📅 Weekly Exercise Plan</div>
        <div class="weekly-day-tab" id="weekly-tabs">
          ${DAYS_FULL.map((day, idx) => `
            <button class="day-tab-btn${idx === selectedDay ? ' active' : ''}${idx === todayDay ? ' today-marker' : ''}" data-day="${idx}">
              ${DAYS_SHORT[idx]} ${WEEKLY_WORKOUTS[idx].emoji}
            </button>
          `).join('')}
        </div>
        <div class="weekly-exercises-list" id="weekly-exercises">
          <div style="padding: 0 0 12px; font-size: 15px; font-weight: 700; color: var(--teal-400)">
            ${workout.emoji} ${workout.label}${selectedDay === todayDay ? ' <span style="font-size:11px; background: rgba(45,212,191,0.2); border-radius: 999px; padding: 2px 10px; font-size: 11px; color: var(--teal-400)">Today</span>' : ''}
          </div>
          ${workout.exercises.map((ex, idx) => `
            <div class="weekly-ex-item">
              <div class="weekly-ex-num">${idx+1}</div>
              <div class="weekly-ex-icon">${ex.icon}</div>
              <div style="flex: 1">
                <div class="weekly-ex-name">${ex.name}</div>
                <div class="weekly-ex-dur">⏱ ${ex.duration} · ${ex.reps}</div>
              </div>
            </div>
          `).join('')}
          <div style="height: 20px"></div>
        </div>
      </div>
    `;

    el('weekly-close').addEventListener('click', () => overlay.classList.add('hidden'));
    overlay.addEventListener('click', e => { if (e.target === overlay) overlay.classList.add('hidden'); });

    overlay.querySelectorAll('.day-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        selectedDay = Number(btn.dataset.day);
        state.weeklyModalDay = selectedDay;
        renderWeekly();
      });
    });
  }

  el('modal-weekly').classList.remove('hidden');
  renderWeekly();
}

// ── Celebration ──
function showCelebration() {
  launchConfetti();
  const overlay = el('celebration');
  overlay.innerHTML = `
    <div class="celebration-card">
      <span class="celebration-emoji">🎉</span>
      <div class="celebration-title">Day Completed!</div>
      <div class="celebration-sub">You crushed it today, Chaandhu!<br>Every habit you build shapes a better you. 🌟</div>
      <button class="celebration-close-btn" id="celebration-close">Keep Going! 🚀</button>
    </div>
  `;
  overlay.classList.remove('hidden');
  el('celebration-close').addEventListener('click', () => overlay.classList.add('hidden'));
  overlay.addEventListener('click', e => { if (e.target === overlay) overlay.classList.add('hidden'); });
}

function launchConfetti() {
  const colors = ['#8b5cf6', '#ec4899', '#fbbf24', '#4ade80', '#60a5fa', '#f97316'];
  for (let i = 0; i < 60; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.cssText = `
      left: ${Math.random() * 100}vw;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      --fall-dur: ${2 + Math.random() * 2}s;
      width: ${6 + Math.random() * 8}px;
      height: ${6 + Math.random() * 8}px;
      border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
      animation-delay: ${Math.random() * 0.8}s;
    `;
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 5000);
  }
}

// ══════════════════════════════════════════
// NAVIGATION
// ══════════════════════════════════════════

function navigateTo(page) {
  state.currentPage = page;
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

  el(`page-${page}`).classList.add('active');
  el(`nav-${page}`).classList.add('active');

  switch (page) {
    case 'today':    renderTodayPage(); break;
    case 'exercise':
      // Sync to today's date so exercise data matches the Today checklist
      state.selectedDate = new Date();
      state.activeExerciseDay = new Date().getDay();
      renderExercisePage();
      break;
    case 'food':     renderFoodPage(); break;
    case 'journal':  renderJournalPage(); break;
    case 'history':  renderHistoryPage(); break;
  }

  // Scroll to top
  el(`page-${page}`).scrollTo(0, 0);
}

// ══════════════════════════════════════════
// INIT
// ══════════════════════════════════════════

function init() {
  // Nav buttons
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => navigateTo(btn.dataset.page));
  });

  // Initial render
  renderTodayPage();

  // Toast element
  const toast = document.createElement('div');
  toast.id = 'toast';
  document.body.appendChild(toast);
}

document.addEventListener('DOMContentLoaded', init);
