// Vaa Macha Vettiya Irukala - Core Logic & App Engine

// Global App State
const state = {
  currentTab: 'assistant',
  selectedUniv: 'anna_univ',
  selectedDept: '',
  selectedSubject: '',
  timetable: [
    { time: '08:30 - 09:30 AM', subject: 'CS3491 - AI & Machine Learning', type: 'Lecture', venue: 'Hall 302' },
    { time: '10:00 - 11:30 AM', subject: 'CS3451 - Data Structures Lab', type: 'Lab', venue: 'Lab 2' },
    { time: '02:00 - 03:30 PM', subject: 'IT3401 - Web Essentials', type: 'Lecture', venue: 'Hall 105' }
  ],
  tasks: [
    { id: 1, title: 'AI Backpropagation Derivation Assignment', deadline: 'Tomorrow, 5:00 PM', priority: 'urgent', done: false },
    { id: 2, title: 'Unit 2 Important 16-Mark Revision', deadline: 'In 3 days', priority: 'medium', done: false },
    { id: 3, title: 'Data Structures Heap Tree Practice', deadline: 'In 5 days', priority: 'chill', done: true }
  ],
  gpaCourses: [
    { name: 'AI & Machine Learning', credit: 4, grade: 10 },
    { name: 'Data Structures & Algorithms', credit: 4, grade: 9 },
    { name: 'Discrete Mathematics', credit: 4, grade: 8 },
    { name: 'Object Oriented Programming', credit: 3, grade: 9 }
  ],
  timer: {
    duration: 25 * 60,
    remaining: 25 * 60,
    interval: null,
    isRunning: false
  }
};

// On App Load Initialization
document.addEventListener('DOMContentLoaded', () => {
  onUniversityChange();
  renderTimetable();
  renderTasks();
  renderGpaRows();
  calculateGpa();
  renderYoutubeMatches();
});

// Toast Notification
function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.innerText = message;
  toast.style.display = 'block';
  setTimeout(() => {
    toast.style.display = 'none';
  }, 3500);
}

// Share App with Friends
function shareWithFriends() {
  const shareText = "Hey Macha! 🚀 Check out this awesome Student App 'Vaa Macha Vettiya Irukala!': Important Q&A PDFs, YouTube Watch Hour Calculator, Notes Generator & Study Planner all in one! Try it here: " + window.location.href;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(shareText);
    showToast("🚀 App Link & Whatsapp Invite Copied to Clipboard!");
  } else {
    alert(shareText);
  }
}

// Tab Switcher
function switchTab(tabId, event) {
  if (event) event.preventDefault();
  state.currentTab = tabId;

  // Update Nav Items
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
  const activeNavItem = document.querySelector(`.nav-item[href="#${tabId}"]`);
  if (activeNavItem) activeNavItem.classList.add('active');

  // Update Tab Content
  document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
  const activeTabContent = document.getElementById(`tab-${tabId}`);
  if (activeTabContent) activeTabContent.classList.add('active');

  // Update Header Title
  const titles = {
    assistant: { title: "Machan AI Assistant & Daily Planner", subtitle: "College study-ah stress illama, machan style-la manage pannungaa!" },
    youtube: { title: "YouTube Syllabus Matcher & Watch Hour Calculator", subtitle: "Analyze playlist duration & match exact videos to your syllabus modules!" },
    exam: { title: "University Exam Repeated & Important Question Bank", subtitle: "Download 2-Mark, 16-Mark & Exam Repeated Questions as PDF!" },
    notes: { title: "Syllabus to Detailed Notes Generator", subtitle: "Convert syllabus modules into crisp study notes & 5-minute revision cards." },
    assignment: { title: "Assignment Copilot & Essay Solver", subtitle: "Prepare clean structured assignment solutions with step-by-step math & code." },
    timetable: { title: "Daily & Weekly Class Timetable", subtitle: "Organize your daily lectures, lab sessions, and study slots." },
    tasks: { title: "Deadlines & Assignment Tracker", subtitle: "Keep track of upcoming submissions and exam dates with priority badges." },
    gpa: { title: "Semester GPA / CGPA Calculator", subtitle: "Calculate credit-weighted grade points effortlessly." },
    timer: { title: "Focus Pomodoro Study Timer", subtitle: "Stay in deep focus study sessions with Machan's timer." }
  };

  if (titles[tabId]) {
    document.getElementById('current-tab-title').innerText = titles[tabId].title;
    document.getElementById('current-tab-subtitle').innerText = titles[tabId].subtitle;
  }
}

// ----------------------------------------------------
// TAB 1: MACHAN AI CHAT ASSISTANT & ROUTINE GENERATOR
// ----------------------------------------------------
function handleChatKeyPress(e) {
  if (e.key === 'Enter') sendChatMessage();
}

function sendChatMessage() {
  const input = document.getElementById('chatInput');
  const msg = input.value.trim();
  if (!msg) return;

  const chatContainer = document.getElementById('chatMessages');

  // Append User Msg
  const userBubble = document.createElement('div');
  userBubble.className = 'message-bubble user';
  userBubble.innerText = msg;
  chatContainer.appendChild(userBubble);

  input.value = '';
  chatContainer.scrollTop = chatContainer.scrollHeight;

  // Simulate AI Response
  setTimeout(() => {
    const aiBubble = document.createElement('div');
    aiBubble.className = 'message-bubble assistant';
    
    let responseText = "";
    if (msg.toLowerCase().includes('college') || msg.toLowerCase().includes('hr') || msg.toLowerCase().includes('hour') || msg.toLowerCase().includes('study')) {
      responseText = `Super Macha! Unoda schedule ah analyze pantean. <br><br>
      📌 **Today's Customized Plan:**<br>
      • **8:30 AM - 4:30 PM:** College & Lab hours.<br>
      • **4:30 - 6:00 PM:** Refreshment & Chill.<br>
      • **6:00 - 7:30 PM:** Deep Study: Unit 3 Important Questions (1.5 hrs).<br>
      • **7:30 - 8:30 PM:** Dinner & Break.<br>
      • **8:30 - 9:30 PM:** 5-Min Revision & Assignment drafting.<br><br>
      Naa intha plan-ah unoda Timetable-la update paniruka macha! 🔥`;
    } else {
      responseText = `Kandippa Macha! Unaku AI Exam Important Questions, Notes, ya YouTube Watch Hours ethu venum nalum left menu-la direct-ah access pannikalam. Naa eppovum un kudave thaan irupen! 🚀`;
    }

    aiBubble.innerHTML = responseText;
    chatContainer.appendChild(aiBubble);
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }, 700);
}

function syncScheduleToTimetable() {
  showToast("✅ AI Daily Routine synced to your Timetable!");
}

// ----------------------------------------------------
// TAB 2: YOUTUBE SYLLABUS MATCHER & WATCH HOURS
// ----------------------------------------------------
function analyzeYoutubePlaylist() {
  const url = document.getElementById('ytUrlInput').value;
  if (!url) {
    showToast("Please enter a valid YouTube URL or topic!");
    return;
  }

  showToast("🔍 Analyzing YouTube playlist & matching syllabus...");

  document.getElementById('ytTotalWatchHours').innerText = "4.5 Hours";
  document.getElementById('ytSyllabusMatch').innerText = "92% Match";
  document.getElementById('ytSpeed2x').innerText = "2.25 Hours";

  renderYoutubeMatches();
}

function renderYoutubeMatches() {
  const container = document.getElementById('ytMatchingVideosList');
  if (!container) return;

  const videos = [
    { title: "Unit 1: A* Search & Heuristics Full Explanation", duration: "45 mins", match: "98% Match", link: "#" },
    { title: "Unit 3: Decision Trees & ID3 Information Gain Step-by-Step", duration: "55 mins", match: "95% Match", link: "#" },
    { title: "Unit 4: Backpropagation Mathematical Derivation Simplified", duration: "1 hr 10 mins", match: "96% Match", link: "#" },
    { title: "Unit 5: Q-Learning & MDP Reinforcement Learning Tutorial", duration: "50 mins", match: "90% Match", link: "#" }
  ];

  container.innerHTML = videos.map((v, i) => `
    <div style="background: rgba(15,23,42,0.6); border: 1px solid var(--border-color); padding: 14px 18px; border-radius: var(--radius-md); margin-bottom: 10px; display: flex; justify-content: space-between; align-items: center;">
      <div>
        <h4 style="font-size: 14px; font-weight: 700; color: #ffffff;">${i+1}. ${v.title}</h4>
        <span style="font-size: 12px; color: var(--text-muted);">Duration: ${v.duration}</span>
      </div>
      <div style="display: flex; align-items: center; gap: 12px;">
        <span class="badge badge-emerald">${v.match}</span>
        <a href="${v.link}" onclick="alert('Opening video...')" class="btn btn-outline" style="padding: 6px 12px; font-size: 12px;"><i data-lucide="play"></i> Watch</a>
      </div>
    </div>
  `).join('');
}

// ----------------------------------------------------
// TAB 3: UNIVERSITY EXAM QUESTION BANK
// ----------------------------------------------------
function onUniversityChange() {
  const univKey = document.getElementById('universitySelect').value;
  state.selectedUniv = univKey;

  const univData = window.UNIVERSITIES_DATA[univKey] || window.UNIVERSITIES_DATA['anna_univ'];
  document.getElementById('examUnivDisplay').value = univData.name;

  const deptSelect = document.getElementById('examDeptSelect');
  deptSelect.innerHTML = univData.departments.map(d => `<option value="${d}">${d}</option>`).join('');

  onDeptChange();
}

function onDeptChange() {
  const univKey = state.selectedUniv;
  const univData = window.UNIVERSITIES_DATA[univKey] || window.UNIVERSITIES_DATA['anna_univ'];
  const dept = document.getElementById('examDeptSelect').value;

  const subjects = (univData.subjects && univData.subjects[dept]) 
    ? univData.subjects[dept] 
    : ["CS3491 - Artificial Intelligence & Machine Learning", "CS3451 - Data Structures & Algorithms"];

  const subjectSelect = document.getElementById('examSubjectSelect');
  subjectSelect.innerHTML = subjects.map(s => `<option value="${s}">${s}</option>`).join('');

  loadSubjectSyllabus();
}

function loadSubjectSyllabus() {
  const subject = document.getElementById('examSubjectSelect').value;
  state.selectedSubject = subject;

  const syllabusText = window.SAMPLE_SYLLABI[subject] || `UNIT I: Core Concepts & Principles\nUNIT II: Advanced Analysis & Design\nUNIT III: System Implementation\nUNIT IV: Testing & Optimization\nUNIT V: Real World Applications & Future Trends`;
  
  document.getElementById('examSyllabusText').value = syllabusText;
  generateQuestionBank();
}

function generateQuestionBank() {
  const subject = state.selectedSubject;
  const qBankData = window.QUESTION_BANKS[subject] || window.QUESTION_BANKS["CS3491 - Artificial Intelligence & Machine Learning"];

  // Render Important Questions
  const iList = document.getElementById('importantQuestionsList');
  iList.innerHTML = qBankData.importantQuestions.map(q => `
    <div class="q-card">
      <div class="q-header">
        <span class="q-title">${q.question}</span>
        <span class="badge badge-purple">${q.type}</span>
      </div>
      <div style="font-size: 11px; color: var(--accent-cyan); font-weight: 700;">${q.unit}</div>
      <div class="q-answer"><strong>Answer:</strong>\n${q.answer}</div>
    </div>
  `).join('');

  // Render Repeated Questions
  const rList = document.getElementById('repeatedQuestionsList');
  rList.innerHTML = qBankData.repeatedQuestions.map(q => `
    <div class="q-card">
      <div class="q-header">
        <span class="q-title">${q.question}</span>
        <span class="badge badge-amber">${q.frequency}</span>
      </div>
      <div style="font-size: 11px; color: var(--accent-emerald); font-weight: 700;">🎯 ${q.probability}</div>
      <div class="q-answer"><strong>Model Answer:</strong>\n${q.answer}</div>
    </div>
  `).join('');
}

function downloadQuestionsPdf(type) {
  const univKey = state.selectedUniv;
  const univData = window.UNIVERSITIES_DATA[univKey] || window.UNIVERSITIES_DATA['anna_univ'];
  const subject = state.selectedSubject;
  const qBankData = window.QUESTION_BANKS[subject] || window.QUESTION_BANKS["CS3491 - Artificial Intelligence & Machine Learning"];

  if (type === 'important') {
    window.exportPdfDocument({
      title: "IMPORTANT EXAM QUESTIONS & MODEL ANSWERS",
      subtitle: "High Priority 2-Mark & 16-Mark Questions",
      university: univData.name,
      subject: subject,
      items: qBankData.importantQuestions,
      type: "important"
    });
  } else {
    window.exportPdfDocument({
      title: "PAST EXAM REPEATED QUESTIONS & MODEL ANSWERS",
      subtitle: "Frequently Repeated Questions from Previous Year Papers",
      university: univData.name,
      subject: subject,
      items: qBankData.repeatedQuestions,
      type: "repeated"
    });
  }
}

// ----------------------------------------------------
// TAB 4: SYLLABUS TO NOTES GENERATOR
// ----------------------------------------------------
function generateSyllabusNotes() {
  const topic = document.getElementById('notesInputTopic').value.trim() || "Backpropagation Algorithm in Neural Networks";
  showToast("📝 Generating comprehensive study notes...");

  document.getElementById('notesOutputContainer').style.display = 'block';
  document.getElementById('notesTitle').innerText = `Study Notes: ${topic}`;

  document.getElementById('notesBodyContent').innerHTML = `
    <div style="background: rgba(99,102,241,0.1); border-left: 4px solid var(--primary); padding: 16px; border-radius: 0 8px 8px 0; margin-bottom: 20px;">
      <h3 style="color: #a5b4fc; margin-bottom: 6px;">1. Core Concept Overview</h3>
      <p style="font-size: 14px; color: #cbd5e1;">
        ${topic} is a foundational method used for training deep neural networks. It works by computing the gradient of the loss function with respect to each weight by the chain rule, iterating backward from the final output layer to the initial input layer.
      </p>
    </div>

    <h3 style="color: var(--accent-cyan); margin: 20px 0 10px 0;">2. Key Formulas & Derivations</h3>
    <div style="background: rgba(15,23,42,0.8); border: 1px solid var(--border-color); padding: 16px; border-radius: 8px; font-family: monospace; color: #67e8f9; margin-bottom: 20px;">
      Loss (L) = 0.5 * sum( (y_actual - y_predicted)^2 )<br>
      Weight Update: W_new = W_old - (alpha * dL/dW)<br>
      Chain Rule: dL/dW = (dL/dy_pred) * (dy_pred/dz) * (dz/dW)
    </div>

    <h3 style="color: var(--accent-emerald); margin: 20px 0 10px 0;">3. ⚡ 5-Minute Exam Revision Cheat Sheet</h3>
    <ul style="padding-left: 20px; color: #cbd5e1; font-size: 14px; margin-bottom: 20px;">
      <li style="margin-bottom: 8px;"><strong>Forward Pass:</strong> Inputs move forward to compute predicted output and output error.</li>
      <li style="margin-bottom: 8px;"><strong>Backward Pass:</strong> Error signals propagate backward to calculate weight gradients.</li>
      <li style="margin-bottom: 8px;"><strong>Activation Derivative:</strong> Always include derivative of Sigmoid or ReLU during chain rule calculation.</li>
    </ul>
  `;
}

function downloadNotesPdf() {
  alert("Downloading Study Notes PDF...");
}

// ----------------------------------------------------
// TAB 5: ASSIGNMENT COPILOT
// ----------------------------------------------------
function generateAssignmentSolution() {
  const title = document.getElementById('assignmentTitleInput').value.trim() || "Convolutional Neural Network Architecture";
  showToast("✍️ Preparing structured assignment solution...");

  document.getElementById('assignmentOutputContainer').style.display = 'block';
  document.getElementById('assignmentBodyContent').innerHTML = `
    <h2 style="color: var(--primary); margin-bottom: 12px;">${title}</h2>
    <p style="color: var(--text-muted); font-size: 12px; margin-bottom: 20px;">Submitted as academic assignment documentation.</p>

    <h3 style="color: var(--accent-cyan); margin-bottom: 8px;">1. Introduction</h3>
    <p style="margin-bottom: 16px; font-size: 14px; color: #cbd5e1;">
      Convolutional Neural Networks (CNNs) represent a class of deep neural networks, most commonly applied to analyzing visual imagery. They use a mathematical operation called convolution in place of general matrix multiplication in at least one of their layers.
    </p>

    <h3 style="color: var(--accent-emerald); margin-bottom: 8px;">2. Core Structural Components</h3>
    <p style="margin-bottom: 8px; font-size: 14px; color: #cbd5e1;">A standard CNN architecture consists of three main layer types:</p>
    <ul style="padding-left: 20px; color: #cbd5e1; font-size: 14px; margin-bottom: 16px;">
      <li><strong>Convolutional Layer:</strong> Applies kernel filters to extract features like edges, textures, and shapes.</li>
      <li><strong>Pooling Layer:</strong> Downsamples spatial dimensions (Max Pooling or Average Pooling) to reduce computational complexity.</li>
      <li><strong>Fully Connected Layer:</strong> Flattens feature maps to perform final classification.</li>
    </ul>

    <h3 style="color: var(--accent-amber); margin-bottom: 8px;">3. Conclusion & References</h3>
    <p style="font-size: 14px; color: #cbd5e1;">
      CNNs have revolutionized computer vision tasks including object detection, medical image analysis, and autonomous driving.
    </p>
  `;
}

function downloadAssignmentPdf() {
  alert("Exporting Assignment PDF...");
}

// ----------------------------------------------------
// TAB 6, 7, 8, 9: TIMETABLE, TASKS, GPA & TIMER
// ----------------------------------------------------
function renderTimetable() {
  const tbody = document.getElementById('timetableBody');
  if (!tbody) return;

  tbody.innerHTML = state.timetable.map((row, i) => `
    <tr style="border-bottom: 1px solid var(--border-color);">
      <td style="padding: 12px; font-weight: 700; color: var(--accent-cyan); font-size: 13px;">${row.time}</td>
      <td style="padding: 12px; font-weight: 600;">${row.subject}</td>
      <td style="padding: 12px;"><span class="badge ${row.type === 'Lab' ? 'badge-amber' : 'badge-purple'}">${row.type}</span></td>
      <td style="padding: 12px; color: var(--text-muted); font-size: 13px;">${row.venue}</td>
      <td style="padding: 12px;"><button onclick="deleteTimetableRow(${i})" style="background: transparent; border: none; color: #ef4444; cursor: pointer;">🗑️</button></td>
    </tr>
  `).join('');
}

function deleteTimetableRow(index) {
  state.timetable.splice(index, 1);
  renderTimetable();
  showToast("Slot deleted from timetable!");
}

function addNewScheduleRow() {
  const time = prompt("Enter Time Slot (e.g., 11:30 AM - 12:30 PM):", "11:30 AM - 12:30 PM");
  const subject = prompt("Enter Subject Name:", "CS3591 - Computer Networks");
  if (time && subject) {
    state.timetable.push({ time, subject, type: "Lecture", venue: "Hall 201" });
    renderTimetable();
    showToast("Class slot added to Timetable!");
  }
}

function renderTasks() {
  const container = document.getElementById('tasksListContainer');
  if (!container) return;

  container.innerHTML = state.tasks.map(t => `
    <div style="background: rgba(15,23,42,0.6); border: 1px solid var(--border-color); padding: 14px 18px; border-radius: var(--radius-md); margin-bottom: 10px; display: flex; justify-content: space-between; align-items: center;">
      <div style="display: flex; align-items: center; gap: 12px;">
        <input type="checkbox" ${t.done ? 'checked' : ''} onchange="toggleTaskDone(${t.id})" style="width: 18px; height: 18px; cursor: pointer;">
        <span style="${t.done ? 'text-decoration: line-through; color: var(--text-dim);' : 'font-weight: 600; color: #ffffff;'}">${t.title}</span>
      </div>
      <div style="display: flex; align-items: center; gap: 12px;">
        <span style="font-size: 12px; color: var(--text-muted);">⏰ ${t.deadline}</span>
        <span class="badge ${t.priority === 'urgent' ? 'badge-amber' : 'badge-cyan'}">${t.priority}</span>
      </div>
    </div>
  `).join('');
}

function toggleTaskDone(id) {
  const task = state.tasks.find(t => t.id === id);
  if (task) task.done = !task.done;
  renderTasks();
}

function addNewTask() {
  const title = prompt("Enter Task Title:", "Unit 4 Machine Learning Assignment");
  if (title) {
    state.tasks.push({ id: Date.now(), title, deadline: "In 2 days", priority: "urgent", done: false });
    renderTasks();
    showToast("Task added successfully!");
  }
}

// GPA Calculator
function renderGpaRows() {
  const container = document.getElementById('gpaRowsContainer');
  if (!container) return;

  container.innerHTML = state.gpaCourses.map((c, i) => `
    <div style="display: flex; gap: 16px; margin-bottom: 12px; align-items: center;">
      <input type="text" class="form-control" value="${c.name}" style="flex: 2;" onchange="state.gpaCourses[${i}].name = this.value">
      <input type="number" class="form-control" value="${c.credit}" style="flex: 1;" placeholder="Credit (3/4)" onchange="state.gpaCourses[${i}].credit = parseFloat(this.value)">
      <select class="form-control" style="flex: 1;" onchange="state.gpaCourses[${i}].grade = parseFloat(this.value)">
        <option value="10" ${c.grade === 10 ? 'selected' : ''}>O (10)</option>
        <option value="9" ${c.grade === 9 ? 'selected' : ''}>A+ (9)</option>
        <option value="8" ${c.grade === 8 ? 'selected' : ''}>A (8)</option>
        <option value="7" ${c.grade === 7 ? 'selected' : ''}>B+ (7)</option>
        <option value="6" ${c.grade === 6 ? 'selected' : ''}>B (6)</option>
      </select>
    </div>
  `).join('');
}

function addGpaCourseRow() {
  state.gpaCourses.push({ name: 'New Subject', credit: 3, grade: 9 });
  renderGpaRows();
}

function calculateGpa() {
  let totalCredits = 0;
  let totalPoints = 0;

  state.gpaCourses.forEach(c => {
    totalCredits += c.credit;
    totalPoints += (c.credit * c.grade);
  });

  const gpa = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : "0.00";
  document.getElementById('calculatedGpaValue').innerText = `${gpa} / 10.0`;
}

// Pomodoro Timer
function toggleTimer() {
  const btn = document.getElementById('timerStartBtn');
  if (state.timer.isRunning) {
    clearInterval(state.timer.interval);
    state.timer.isRunning = false;
    btn.innerHTML = `<i data-lucide="play"></i> Resume Focus`;
    lucide.createIcons();
  } else {
    state.timer.isRunning = true;
    btn.innerHTML = `<i data-lucide="pause"></i> Pause Focus`;
    lucide.createIcons();

    state.timer.interval = setInterval(() => {
      if (state.timer.remaining > 0) {
        state.timer.remaining--;
        updateTimerDisplay();
      } else {
        clearInterval(state.timer.interval);
        state.timer.isRunning = false;
        showToast("🔔 Focus session complete! Time for a break macha!");
      }
    }, 1000);
  }
}

function resetTimer() {
  clearInterval(state.timer.interval);
  state.timer.isRunning = false;
  state.timer.remaining = 25 * 60;
  updateTimerDisplay();
  const btn = document.getElementById('timerStartBtn');
  btn.innerHTML = `<i data-lucide="play"></i> Start Focus`;
  lucide.createIcons();
}

function updateTimerDisplay() {
  const mins = Math.floor(state.timer.remaining / 60).toString().padStart(2, '0');
  const secs = (state.timer.remaining % 60).toString().padStart(2, '0');
  document.getElementById('timerDisplay').innerText = `${mins}:${secs}`;
}
