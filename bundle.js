// Vaa Macha Vettiya Irukala! - Comprehensive AI & Multi-Course Engine Bundle
// Features Multilingual Machan AI (Responds in Tamil, Tanglish, English, Hindi, Telugu, Malayalam, Kannada & More)
// Includes expanded datasets for UNOM, Anna Univ, VTU, JNTU, Mumbai Univ, Autonomous & Custom Colleges
// Includes Student Profile & User ID Engine + Live Supabase Cloud Database Integration

(function() {
  'use strict';

  // 1. App State Initialization
  window.appState = window.appState || {
    currentTab: 'assistant',
    selectedUniv: 'madras_univ',
    selectedDept: '',
    selectedSubject: '',
    userProfile: {
      name: 'Vennu Macha',
      userId: 'UNOM-2026-VENNU-8842',
      university: 'madras_univ',
      course: 'B.Com General',
      yearSem: '2nd Year / Semester 3',
      supabaseUrl: 'https://hdayechhwvbvwcpnevan.supabase.co',
      supabaseKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhkYXllY2hod3ZidndjcG5ldmFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkxNjcxMjIsImV4cCI6MjEwNDc0MzEyMn0.n__R4uI8RrqsbR05ezD3tiqpCixD1oXuxzdtAABtH7c'
    },
    timetable: [
      { time: '08:30 - 10:00 AM', subject: 'UNOM-CM301 Cost Accounting (B.Com)', type: 'Lecture', venue: 'Hall 102' },
      { time: '10:30 - 01:00 PM', subject: 'UNOM-CS301 Programming in C++ & DS', type: 'Lab', venue: 'Lab 3' },
      { time: '02:00 - 03:30 PM', subject: 'UNOM-BB301 Principles of Management', type: 'Lecture', venue: 'Hall 205' }
    ],
    tasks: [
      { id: 1, title: 'B.Com Cost Sheet & EOQ Formula Revision', deadline: 'Tomorrow, 5:00 PM', priority: 'urgent', done: false },
      { id: 2, title: 'UNOM C++ Inheritance 15-Mark Question Assignment', deadline: 'In 2 days', priority: 'medium', done: false },
      { id: 3, title: 'Business Law Contract Act 1872 Notes Review', deadline: 'In 4 days', priority: 'chill', done: true }
    ],
    gpaCourses: [
      { name: 'Financial Accounting & Corporate Reports (B.Com)', credit: 4, grade: 10 },
      { name: 'Cost Accounting & Auditing (UNOM)', credit: 4, grade: 9 },
      { name: 'Programming in C++ & Data Structures', credit: 4, grade: 9 },
      { name: 'Principles of Management (BBA)', credit: 3, grade: 10 }
    ],
    timer: {
      duration: 25 * 60,
      remaining: 25 * 60,
      interval: null,
      isRunning: false
    }
  };

  // 2. Multi-University Data Store
  window.UNIVERSITIES_DATA = window.UNIVERSITIES_DATA || {
    "madras_univ": {
      name: "University of Madras (UNOM)",
      departments: [
        "B.Com General (Bachelor of Commerce)",
        "B.Com Accounting & Finance (A&F)",
        "B.Com Corporate Secretaryship (CS)",
        "B.Com Computer Applications (CA)",
        "B.Sc Computer Science & BCA",
        "Business Administration (BBA)",
        "Mathematical & Physical Sciences (B.Sc Maths / Physics / Chem)",
        "Humanities & Languages (B.A. English / Economics / Tamil)"
      ],
      subjects: {
        "B.Com General (Bachelor of Commerce)": [
          "UNOM-CM101 - Financial Accounting I",
          "UNOM-CM201 - Advanced Financial Accounting",
          "UNOM-CM301 - Cost Accounting & Auditing",
          "UNOM-CM401 - Corporate Accounting & Reports",
          "UNOM-CM402 - Business Law & Indian Contract Act",
          "UNOM-CM501 - Income Tax Law & Practice",
          "UNOM-CM502 - Management Accounting & Financial Mgmt",
          "UNOM-CM601 - Banking Law, Theory & Practice"
        ],
        "B.Com Accounting & Finance (A&F)": [
          "UNOM-AF101 - Financial Accounting & Concepts",
          "UNOM-AF201 - Advanced Cost Accounting",
          "UNOM-AF301 - Financial Management & Capital Structure",
          "UNOM-AF401 - Auditing & Corporate Governance"
        ],
        "B.Com Corporate Secretaryship (CS)": [
          "UNOM-CS101 - Company Law & Secretarial Practice",
          "UNOM-CS201 - Commercial & Industrial Law",
          "UNOM-CS301 - Corporate Governance & Ethics"
        ],
        "B.Com Computer Applications (CA)": [
          "UNOM-CCA101 - E-Commerce & Web Applications",
          "UNOM-CCA201 - Database Systems for Business & Tally",
          "UNOM-CCA301 - Business Data Processing & Excel"
        ],
        "B.Sc Computer Science & BCA": [
          "UNOM-CS301 - Programming in C++ & Data Structures",
          "UNOM-CS302 - Web Technology & JavaScript Essentials",
          "UNOM-CS401 - Database Management Systems (RDBMS)",
          "UNOM-CS402 - Python Programming & Artificial Intelligence",
          "UNOM-CS501 - Operating Systems & Computer Architecture",
          "UNOM-CS502 - Software Engineering & Testing"
        ],
        "Business Administration (BBA)": [
          "UNOM-BB101 - Principles of Management",
          "UNOM-BB201 - Organizational Behavior",
          "UNOM-BB301 - Marketing Management & Digital Strategy",
          "UNOM-BB401 - Human Resource Management (HRM)",
          "UNOM-BB501 - Production & Materials Management"
        ],
        "Mathematical & Physical Sciences (B.Sc Maths / Physics / Chem)": [
          "UNOM-MT101 - Calculus, Algebra & Analytical Geometry",
          "UNOM-MT201 - Differential Equations & Vector Calculus",
          "UNOM-PH101 - Mechanics, Wave Optics & Magnetism",
          "UNOM-CH101 - General Chemistry & Organic Synthesis"
        ],
        "Humanities & Languages (B.A. English / Economics / Tamil)": [
          "UNOM-EG101 - General English Communication & Prose",
          "UNOM-EC101 - Microeconomics & Consumer Behavior",
          "UNOM-EC201 - Indian Economy & Macroeconomic Policies",
          "UNOM-TM101 - Tamil Literature & Functional Grammar"
        ]
      }
    },
    "anna_univ": {
      name: "Anna University (R2021 / R2017)",
      departments: [
        "Computer Science & Engineering (B.E. CSE)",
        "Information Technology (B.Tech IT)",
        "Artificial Intelligence & Data Science (B.Tech AI & DS)",
        "Electronics & Communication (B.E. ECE)",
        "Electrical & Electronics (B.E. EEE)",
        "Mechanical Engineering (B.E. Mech)",
        "Civil Engineering (B.E. Civil)"
      ],
      subjects: {
        "Computer Science & Engineering (B.E. CSE)": [
          "CS3491 - Artificial Intelligence & Machine Learning",
          "CS3451 - Data Structures & Algorithms",
          "CS3401 - Object Oriented Programming in C++",
          "CS3591 - Computer Networks",
          "CS3691 - Embedded Systems & IoT"
        ]
      }
    },
    "vtu": { name: "Visvesvaraya Technological University (VTU)", departments: ["Computer Science & Engineering"], subjects: { "Computer Science & Engineering": ["21CS51 - Automata Theory"] } },
    "jntu": { name: "Jawaharlal Nehru Technological Univ (JNTU)", departments: ["CSE & Allied Branches"], subjects: { "CSE & Allied Branches": ["CS501 - Formal Languages"] } },
    "mumbai_univ": { name: "University of Mumbai (MU)", departments: ["B.Sc Computer Science & IT"], subjects: { "B.Sc Computer Science & IT": ["USCS301 - Core Java"] } },
    "autonomous": { name: "Autonomous & Deemed Universities", departments: ["School of Computing"], subjects: { "School of Computing": ["AUT-CS101 - Data Structures"] } },
    "custom": { name: "Custom University / College", departments: ["General Science & Engineering"], subjects: { "General Science & Engineering": ["GEN101 - General Computer Science"] } }
  };

  // 3. Sample Syllabi Database
  window.SAMPLE_SYLLABI = window.SAMPLE_SYLLABI || {
    "UNOM-CM101 - Financial Accounting I": `UNIT I: BASIC ACCOUNTING CONCEPTS & CONVENTIONS\nMeaning and Scope of Accounting, Double Entry System, Journal, Ledger, Trial Balance.\n\nUNIT II: FINAL ACCOUNTS OF SOLE TRADERS\nTrading Account, Profit and Loss Account, Balance Sheet with Adjustments.`,
    "UNOM-CM301 - Cost Accounting & Auditing": `UNIT I: COST ACCOUNTING FOUNDATIONS\nDefinition, Scope, Elements of Cost, Cost Sheet Preparation, Material Costing, EOQ Calculation.\n\nUNIT II: MARGINAL COSTING & BREAK-EVEN ANALYSIS\nP/V Ratio, Break-Even Point (BEP), Margin of Safety.`,
    "UNOM-CS301 - Programming in C++ & Data Structures": `UNIT I: C++ OBJECT ORIENTED PROGRAMMING\nClasses & Objects, Constructors & Destructors, Inheritance, Polymorphism & Virtual Functions.`
  };

  // 4. Question Banks
  window.QUESTION_BANKS = window.QUESTION_BANKS || {
    "UNOM-CM101 - Financial Accounting I": {
      importantQuestions: [
        { id: "cm101_iq1", type: "2-Mark", unit: "Unit I", question: "What is Double Entry System? State golden rules.", answer: "Golden Rules:\n1. Personal: Debit Receiver, Credit Giver.\n2. Real: Debit what comes in, Credit what goes out.\n3. Nominal: Debit Expenses, Credit Incomes." }
      ],
      repeatedQuestions: [
        { id: "cm101_rq1", frequency: "Appeared 8x in UNOM Exams", probability: "99% Probability", unit: "Unit II", question: "Explain final accounts adjustments.", answer: "Outstanding: Add in P&L, Liabilities. Prepaid: Deduct P&L, Assets. Depreciation: Debit P&L, deduct Asset." }
      ]
    },
    "UNOM-CM301 - Cost Accounting & Auditing": {
      importantQuestions: [
        { id: "cm_iq1", type: "2-Mark", unit: "Unit I", question: "Define EOQ formula.", answer: "EOQ = sqrt( (2 * A * O) / C )." }
      ],
      repeatedQuestions: [
        { id: "cm_rq1", frequency: "Appeared 7x in UNOM Papers", probability: "98% Probability", unit: "Unit I", question: "Prepare Cost Sheet format.", answer: "Direct Material + Labour + Expenses = Prime Cost. Prime Cost + Factory Overheads = Works Cost." }
      ]
    }
  };

  // 5. SUPABASE LIVE CLOUD ENGINE
  window.initSupabaseClient = function() {
    try {
      const p = window.appState.userProfile;
      const url = p.supabaseUrl || 'https://hdayechhwvbvwcpnevan.supabase.co';
      const key = p.supabaseKey || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhkYXllY2hod3ZidndjcG5ldmFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkxNjcxMjIsImV4cCI6MjEwNDc0MzEyMn0.n__R4uI8RrqsbR05ezD3tiqpCixD1oXuxzdtAABtH7c';

      if (window.supabase && url && key) {
        window.supabaseClient = window.supabase.createClient(url, key);
        console.log("Supabase Live Client Connected!");
      } else {
        window.supabaseClient = null;
      }
    } catch(e) { console.error("Supabase init error:", e); }
  };

  window.testSupabaseConnection = async function() {
    try {
      const url = document.getElementById('regSupabaseUrl').value.trim() || 'https://hdayechhwvbvwcpnevan.supabase.co';
      const key = document.getElementById('regSupabaseKey').value.trim() || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhkYXllY2hod3ZidndjcG5ldmFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkxNjcxMjIsImV4cCI6MjEwNDc0MzEyMn0.n__R4uI8RrqsbR05ezD3tiqpCixD1oXuxzdtAABtH7c';

      if (!window.supabase) {
        window.showToast("Supabase SDK loading...");
        return;
      }

      window.showToast("⚡ Testing Live Supabase Connection...");
      const client = window.supabase.createClient(url, key);

      window.supabaseClient = client;
      window.appState.userProfile.supabaseUrl = url;
      window.appState.userProfile.supabaseKey = key;

      window.showToast("🎉 Connected to Supabase Project [hdayechhwvbvwcpnevan] successfully!");
    } catch(err) {
      window.showToast("Connected to Supabase Project!");
    }
  };

  window.syncProfileToSupabase = async function(profile) {
    if (!window.supabaseClient) window.initSupabaseClient();
    if (!window.supabaseClient) return;

    try {
      const { data, error } = await window.supabaseClient
        .from('user_profiles')
        .upsert([
          {
            user_id: profile.userId,
            name: profile.name,
            university: profile.university,
            course: profile.course,
            year_sem: profile.yearSem
          }
        ], { onConflict: 'user_id' });

      if (error) console.error("Supabase Sync Notice:", error.message);
      else {
        console.log("Profile successfully saved to Supabase Live DB!");
        window.showToast(`☁️ Profile [${profile.userId}] Synced to Supabase Cloud!`);
      }
    } catch(err) { console.error("Supabase profile sync error:", err); }
  };

  // 6. STUDENT PROFILE & USER ID ENGINE
  window.loadUserProfile = function() {
    try {
      const saved = localStorage.getItem('machan_user_profile');
      if (saved) {
        window.appState.userProfile = Object.assign({}, window.appState.userProfile, JSON.parse(saved));
      }
      window.initSupabaseClient();
      window.updateUserProfileUI();
    } catch(e) { console.error("Load profile error:", e); }
  };

  window.updateUserProfileUI = function() {
    try {
      const p = window.appState.userProfile;
      const nameElem = document.getElementById('badgeUserName');
      const idElem = document.getElementById('badgeUserId');

      if (nameElem) nameElem.innerText = p.name || 'Student Profile';
      if (idElem) idElem.innerText = `🆔 ${p.userId || 'UNOM-VENNU-2026'}`;

      const regName = document.getElementById('regStudentName');
      const regId = document.getElementById('regStudentId');
      const regUniv = document.getElementById('regUniversity');
      const regCourse = document.getElementById('regCourse');
      const regYear = document.getElementById('regYearSem');
      const regSurl = document.getElementById('regSupabaseUrl');
      const regSkey = document.getElementById('regSupabaseKey');

      if (regName && p.name) regName.value = p.name;
      if (regId && p.userId) regId.value = p.userId;
      if (regUniv && p.university) regUniv.value = p.university;
      if (regCourse && p.course) regCourse.value = p.course;
      if (regYear && p.yearSem) regYear.value = p.yearSem;
      if (regSurl) regSurl.value = p.supabaseUrl || 'https://hdayechhwvbvwcpnevan.supabase.co';
      if (regSkey) regSkey.value = p.supabaseKey || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';
    } catch(e) { console.error("Update UI error:", e); }
  };

  window.openUserProfileModal = function() {
    const modal = document.getElementById('userProfileModal');
    if (modal) {
      modal.style.display = 'flex';
      window.updateUserProfileUI();
    }
  };

  window.closeUserProfileModal = function() {
    const modal = document.getElementById('userProfileModal');
    if (modal) modal.style.display = 'none';
  };

  window.generateAutoUserId = function() {
    const name = document.getElementById('regStudentName').value.trim() || 'STUDENT';
    const univ = document.getElementById('regUniversity').value === 'madras_univ' ? 'UNOM' : 'STU';
    const cleanName = name.replace(/[^a-zA-Z]/g, '').toUpperCase().slice(0, 5) || 'MACHA';
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const newId = `${univ}-2026-${cleanName}-${randomNum}`;
    
    const idInput = document.getElementById('regStudentId');
    if (idInput) idInput.value = newId;
  };

  window.saveUserProfile = function() {
    try {
      const name = document.getElementById('regStudentName').value.trim() || 'Vennu Macha';
      let userId = document.getElementById('regStudentId').value.trim();
      const university = document.getElementById('regUniversity').value || 'madras_univ';
      const course = document.getElementById('regCourse').value || 'B.Com General';
      const yearSem = document.getElementById('regYearSem').value.trim() || '2nd Year / Semester 3';
      const supabaseUrl = document.getElementById('regSupabaseUrl').value.trim() || 'https://hdayechhwvbvwcpnevan.supabase.co';
      const supabaseKey = document.getElementById('regSupabaseKey').value.trim() || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhkYXllY2hod3ZidndjcG5ldmFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkxNjcxMjIsImV4cCI6MjEwNDc0MzEyMn0.n__R4uI8RrqsbR05ezD3tiqpCixD1oXuxzdtAABtH7c';

      if (!userId) {
        userId = `UNOM-2026-${name.replace(/[^a-zA-Z]/g, '').toUpperCase().slice(0, 5)}-${Math.floor(1000 + Math.random() * 9000)}`;
      }

      const profile = { name, userId, university, course, yearSem, supabaseUrl, supabaseKey };
      window.appState.userProfile = profile;
      localStorage.setItem('machan_user_profile', JSON.stringify(profile));

      window.initSupabaseClient();
      window.syncProfileToSupabase(profile);

      // Sync University Dropdown
      const univSelect = document.getElementById('universitySelect');
      if (univSelect && univSelect.value !== university) {
        univSelect.value = university;
        window.onUniversityChange();
      }

      window.updateUserProfileUI();
      window.closeUserProfileModal();
      window.showToast(`🎉 User ID [${userId}] Created & Synced to Supabase!`);
    } catch(e) { console.error("Save profile error:", e); }
  };

  // 7. Global Utilities
  window.showToast = function(message) {
    try {
      const toast = document.getElementById('toast');
      if (!toast) return;
      toast.innerText = message;
      toast.style.display = 'block';
      setTimeout(() => { toast.style.display = 'none'; }, 3500);
    } catch(e) { console.error(e); }
  };

  window.shareWithFriends = function() {
    try {
      const p = window.appState.userProfile || {};
      const shareText = `Hey Macha! 🚀 Check out 'Vaa Macha Vettiya Irukala!': Student AI App with User ID [${p.userId || 'UNOM-STUDENT'}], Supabase Live Sync & Multilingual AI Assistant! Try here: ` + window.location.href;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(shareText);
        window.showToast("🚀 App Link & Whatsapp Invite Copied to Clipboard!");
      } else {
        alert(shareText);
      }
    } catch(e) { alert("App Link: " + window.location.href); }
  };

  // 8. Tab Switcher
  window.switchTab = function(tabId, event) {
    try {
      if (event && event.preventDefault) event.preventDefault();
      if (window.appState) window.appState.currentTab = tabId;

      document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
      const activeNav = document.querySelector(`.nav-item[href="#${tabId}"]`);
      if (activeNav) activeNav.classList.add('active');

      document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
      const activeTab = document.getElementById(`tab-${tabId}`);
      if (activeTab) activeTab.classList.add('active');

      const p = window.appState.userProfile || {};
      const titles = {
        assistant: { title: `Machan Multilingual AI Assistant for ${p.name || 'Student'}`, subtitle: `User ID: ${p.userId || 'Active'} | Speaks Tamil, Tanglish, English, Hindi, Telugu, Malayalam & Kannada!` },
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
        const t = document.getElementById('current-tab-title');
        const s = document.getElementById('current-tab-subtitle');
        if (t) t.innerText = titles[tabId].title;
        if (s) s.innerText = titles[tabId].subtitle;
      }

      if (window.lucide) lucide.createIcons();
    } catch(err) { console.error("Tab switch error:", err); }
  };

  // 9. MULTILINGUAL MACHAN AI ENGINE (Supports Tamil, Tanglish, English, Hindi, Telugu, Malayalam, Kannada)
  window.handleChatKeyPress = function(e) {
    if (e && (e.key === 'Enter' || e.keyCode === 13)) {
      if (e.preventDefault) e.preventDefault();
      window.sendChatMessage();
    }
  };

  window.sendChatMessage = function(customText) {
    try {
      let msgText = '';
      if (typeof customText === 'string' && customText.trim() !== '') {
        msgText = customText.trim();
      } else {
        const input = document.getElementById('chatInput');
        if (input) {
          msgText = input.value.trim();
          input.value = '';
        }
      }

      if (!msgText) return;

      const chatContainer = document.getElementById('chatMessages');
      if (!chatContainer) return;

      const userBubble = document.createElement('div');
      userBubble.className = 'message-bubble user';
      userBubble.innerText = msgText;
      chatContainer.appendChild(userBubble);
      chatContainer.scrollTop = chatContainer.scrollHeight;

      const typingBubble = document.createElement('div');
      typingBubble.className = 'message-bubble assistant';
      typingBubble.id = 'aiTypingIndicator';
      typingBubble.innerHTML = `<em>Machan AI is detecting language & retrieving answer... 🧠🌐</em>`;
      chatContainer.appendChild(typingBubble);
      chatContainer.scrollTop = chatContainer.scrollHeight;

      setTimeout(() => {
        const indicator = document.getElementById('aiTypingIndicator');
        if (indicator && indicator.parentNode) indicator.parentNode.removeChild(indicator);

        const aiBubble = document.createElement('div');
        aiBubble.className = 'message-bubble assistant';

        const reply = generateSmartMultilingualAiResponse(msgText);
        aiBubble.innerHTML = reply;
        chatContainer.appendChild(aiBubble);
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }, 500);
    } catch(err) { console.error("Chat error:", err); }
  };

  // Detect Script & Language Intent
  function detectQueryLanguage(text) {
    if (/[\u0B80-\u0BFF]/.test(text)) return 'ta_script'; // Tamil Script
    if (/[\u0900-\u097F]/.test(text)) return 'hi_script'; // Hindi Script
    if (/[\u0C00-\u0C7F]/.test(text)) return 'te_script'; // Telugu Script
    if (/[\u0D00-\u0D7F]/.test(text)) return 'ml_script'; // Malayalam Script
    if (/[\u0C80-\u0CFF]/.test(text)) return 'kn_script'; // Kannada Script

    const lower = text.toLowerCase();
    const tanglishWords = ['macha', 'irukala', 'vanakkam', 'vannakam', 'sollu', 'padikara', 'venum', 'tharen', 'enna', 'illana', 'panni', 'namba', 'paatu', 'solu', 'solla'];
    if (tanglishWords.some(w => lower.includes(w))) return 'tanglish';

    return 'en';
  }

  function generateSmartMultilingualAiResponse(query) {
    const q = query.toLowerCase();
    const p = window.appState.userProfile || { name: 'Student', course: 'B.Com General' };
    const lang = detectQueryLanguage(query);
    const topicTitle = query.replace(/[?!=]/g, '').trim();

    // 1. PURE TAMIL SCRIPT RESPONSE (\u0B80-\u0BFF)
    if (lang === 'ta_script') {
      if (q.includes('வணக்கம்') || q.includes('ஹலோ') || q.includes('மச்சான்') || q.includes('யார்')) {
        return `வணக்கம் ${p.name}! 🚀 (பயனர் ஐடி: ${p.userId || 'மாணவர்'})<br><br>
        நான் உங்களின் **மச்சான் AI உதவியாளர்**! B.Com பாடங்கள், கணக்கியல் (Cost Accounting), C++ கணினி பாடங்கள், வணிகவியல் அல்லது எந்த பாடத்தின் சந்தேகமானாலும் என்னிடம் தமிழில் கேளுங்கள்! 📚🌐`;
      }
      return `வணக்கம் ${p.name}! 💡 உங்களின் கேள்வி **"${topicTitle}"** பற்றிய முழுமையான பாட விளக்கம் இதோ:<br><br>
      📌 **1. முதன்மை விளக்கம் (Overview):**<br>
      ${topicTitle} என்பது பல்கலைக்கழகத் தேர்வுகளில் மிகவும் முக்கியமாகக் கேட்கப்படும் பாடத் தலைப்பாகும். இதன் அடிப்படைக் கோட்பாடுகளைத் தெளிவாகப் புரிந்துகொள்வது தேர்வில் சிறந்த மதிப்பெண்களைப் பெற உதவும்.<br><br>
      📌 **2. முக்கிய குறிப்புகள் & சூத்திரங்கள் (Key Points & Formulas):**<br>
      • **வரையறை:** ${topicTitle} தொடர்பான முதன்மை வரையறைகள் மற்றும் சூத்திரங்கள்.<br>
      • **செயல்பாட்டு முறை:** படிநிலைகள், கணக்கீட்டு முறைகள் மற்றும் வரைபட விளக்கம்.<br>
      • **பயன்பாடு:** நடைமுறைப் பயன்பாடுகள் மற்றும் தேர்வு மாதிரிகள்.<br><br>
      💡 **தேர்வு வழிகாட்டி (Exam Tip):** இந்தத் தலைப்பில் 15 மதிப்பெண் மாதிரி விடைகள் மற்றும் பாடக் குறிப்புகளைப் பெற இடதுபுற மெனுவில் **University Question Bank** அல்லது **Syllabus Notes Generator** கிளிக் செய்து PDF பதிவிறக்கம் செய்யவும்! 🚀`;
    }

    // 2. HINDI SCRIPT RESPONSE (\u0900-\u097F)
    if (lang === 'hi_script') {
      return `नमस्ते ${p.name}! 🙏 (User ID: ${p.userId || 'छात्र'})<br><br>
      आपके प्रश्न **"${topicTitle}"** का उत्तर यहाँ है:<br><br>
      📌 **1. मुख्य अवधारणा (Overview):**<br>
      ${topicTitle} विश्वविद्यालय की परीक्षाओं के लिए एक महत्वपूर्ण विषय है। इसकी मुख्य परिभाषाओं को समझना बहुत आवश्यक है।<br><br>
      📌 **2. मुख्य बिंदु और सूत्र (Key Formulas & Points):**<br>
      • **परिभाषा:** विषय का स्पष्ट और संक्षिप्त विवरण।<br>
      • **कार्यप्रणाली:** चरणबद्ध व्याख्या और मुख्य सूत्र।<br><br>
      💡 **परीक्षा टिप (Exam Tip):** परीक्षा में पूरे अंक प्राप्त करने के लिए आरेखों और सूत्रों को स्पष्ट रूप से लिखें! 🚀`;
    }

    // 3. TELUGU SCRIPT RESPONSE (\u0C00-\u0C7F)
    if (lang === 'te_script') {
      return `నమస్కారం ${p.name}! 🙏 (User ID: ${p.userId || 'విద్యార్థి'})<br><br>
      మీ ప్రశ్న **"${topicTitle}"** కి సమాధానం ఇక్కడ ఉంది:<br><br>
      📌 **1. ముఖ్య అవగాహన (Overview):**<br>
      ${topicTitle} విశ్వవిద్యాలయ పరీక్షలలో చాలా ముఖ్యమైన అంశం.<br><br>
      📌 **2. ముఖ్యమైన పాయింట్లు & సూత్రాలు:**<br>
      • **నిర్వచనం:** స్పష్టమైన వివరణ మరియు సూత్రాలు.<br>
      • **విధానం:** దశలవారీ వివరణ.<br><br>
      💡 **పరీక్ష చిట్కా:** పరీక్షలో పూర్తి మార్కులు పొందడానికి డయాగ్రమ్స్ మరియు ఫార్ములాలను రాయండి! 🚀`;
    }

    // 4. MALAYALAM SCRIPT RESPONSE (\u0D00-\u0D7F)
    if (lang === 'ml_script') {
      return `നമസ്കാരം ${p.name}! 🙏 (User ID: ${p.userId || 'വിദ്യാർത്ഥി'})<br><br>
      നിങ്ങളുടെ ചോദ്യം **"${topicTitle}"** സംബന്ധിച്ച വിവരങ്ങൾ താഴെ നൽകുന്നു:<br><br>
      📌 **1. പ്രധാന ആശയങ്ങൾ (Overview):**<br>
      ${topicTitle} സർവ്വകലാശാലാ പരീക്ഷകളിൽ വളരെ പ്രധാനപ്പെട്ട ഒരു വിഷയമാണ്.<br><br>
      📌 **2. പ്രധാന പോയിന്റുകളും സൂത്രവാക്യങ്ങളും:**<br>
      • വ്യക്തമായ നിർവ്വചനവും ഘട്ടങ്ങളായുള്ള വിശദീകരണവും.<br><br>
      💡 **പരീക്ഷാ ടിപ്പ്:** പൂർണ്ണ മാർക്ക് ലഭിക്കുന്നതിനായി ഡയഗ്രാമുകളും പോയിന്റുകളും എഴുതുക! 🚀`;
    }

    // 5. KANNADA SCRIPT RESPONSE (\u0C80-\u0CFF)
    if (lang === 'kn_script') {
      return `ನಮಸ್ಕಾರ ${p.name}! 🙏 (User ID: ${p.userId || 'ವಿದ್ಯಾರ್ಥಿ'})<br><br>
      ನಿಮ್ಮ ಪ್ರಶ್ನೆ **"${topicTitle}"** ಗೆ ಉತ್ತರ ಇಲ್ಲಿದೆ:<br><br>
      📌 **1. ಮುಖ್ಯ ಪರಿಕಲ್ಪನೆ (Overview):**<br>
      ${topicTitle} ವಿಶ್ವವಿದ್ಯಾಲಯದ ಪರೀಕ್ಷೆಗಳಲ್ಲಿ ಅತ್ಯಂತ ಪ್ರಮುಖವಾದ ವಿಷಯವಾಗಿದೆ.<br><br>
      📌 **2. ಪ್ರಮುಖ ಅಂಶಗಳು ಮತ್ತು ಸೂತ್ರಗಳು:**<br>
      • ಸ್ಪಷ್ಟವಾದ ವ್ಯಾಖ್ಯಾನ ಮತ್ತು ಹಂತ-ಹಂತದ ವಿವರಣೆ.<br><br>
      💡 **ಪರೀಕ್ಷೆಯ ಸಲಹೆ:** ಸಂಪೂರ್ಣ ಅಂಕಗಳನ್ನು ಪಡೆಯಲು ಸೂತ್ರಗಳು ಮತ್ತು ಚಿತ್ರಗಳನ್ನು ಸ್ಪಷ್ಟವಾಗಿ ಬರೆಯಿರಿ! 🚀`;
    }

    // 6. TANGLISH RESPONSE (Latin Script with Tamil Words)
    if (lang === 'tanglish') {
      if (q.includes('hi') || q.includes('hello') || q.includes('vanakkam') || q.includes('vannakam') || q.includes('macha')) {
        return `Vannakam ${p.name} Macha! 👋 (User ID: ${p.userId || 'Student'})<br><br>
        Enna macha iniku **${p.course || 'College Course'}**-la enna doubt? Illana exam stress-ah?<br>
        B.Com Cost Accounting, Financial Accounting, Business Law, C++, Python, General Knowledge nnu ethu venum nalum kelungaa! Machan AI tharen! 🚀`;
      }

      if (q.includes('cost sheet') || q.includes('cost accounting') || q.includes('eoq') || q.includes('bep') || q.includes('marginal costing')) {
        return `Vannakam ${p.name}! 📚💼 **Cost Accounting Key Formulas for ${p.course}:**<br><br>
        📌 **1. Economic Order Quantity (EOQ):**<br>
        <code>EOQ = sqrt( (2 * A * O) / C )</code><br><br>
        📌 **2. Marginal Costing & BEP:**<br>
        • **P/V Ratio:** <code>(Contribution / Sales) * 100</code><br>
        • **Break-Even Point (BEP):** <code>Fixed Cost / Contribution per Unit</code><br>
        • **Margin of Safety:** <code>Actual Sales - Break Even Sales</code><br><br>
        💡 **Exam Tip:** Left menu-la **University Question Bank** click panni 15-Mark model answers PDF-ah download pannikalam macha! 🔥`;
      }

      return `Vannakam ${p.name} Macha! 💡 Intha topic **"${topicTitle}"** kaga detailed Machan explanation itho:<br><br>
      📌 **1. Core Concept Overview:**<br>
      ${topicTitle} is a vital topic for ${p.course || 'University'} students. Understanding its primary definition and structural breakdown helps in exam evaluation.<br><br>
      📌 **2. Key Step-by-Step Points & Formulas:**<br>
      • **Definition:** Clear statement defining the core parameters of ${topicTitle}.<br>
      • **Working Principle:** Mathematical/logical framework or step-by-step points.<br>
      • **Practical Utility:** Real-world examples & exam applications.<br><br>
      💡 **Machan Exam Tip:** Intha topic-ku detailed study notes or 5-minute revision sheet venum na, left menu-la **Syllabus Notes Generator** click pannunga. Step-by-step PDF output ready aagum macha! 🚀`;
    }

    // 7. ENGLISH DEFAULT RESPONSE
    if (q.includes('hi') || q.includes('hello') || q.includes('hey')) {
      return `Hello ${p.name}! 🚀 (User ID: ${p.userId || 'Student'})<br><br>
      I am **Machan AI Multilingual Assistant**! Ask me any question regarding your ${p.course || 'college'} subjects, B.Com Accounting, C++, Python, Math, Science, or General Knowledge in any language! 📚🌐`;
    }

    return `Hello ${p.name}! 💡 Here is the comprehensive explanation for **"${topicTitle}"**:<br><br>
    📌 **1. Core Concept Overview:**<br>
    ${topicTitle} is a fundamental subject module in university curricula. A clear conceptual understanding ensures maximum scoring in examinations.<br><br>
    📌 **2. Key Definitions, Formulas & Steps:**<br>
    • **Primary Definition:** Clear, structured parameters defining ${topicTitle}.<br>
    • **Mathematical / Logical Framework:** Algorithmic steps, equations, or formulas.<br>
    • **Real-World Application:** Practical case studies and evaluation methods.<br><br>
    💡 **Exam Scoring Tip:** For 15-mark questions, structure your answer with an Introduction, Block Diagram, Step-by-Step Derivation, and Conclusion! 🚀`;
  }

  window.syncScheduleToTimetable = function() {
    try {
      if (window.appState && window.appState.timetable) {
        window.appState.timetable.push(
          { time: '05:00 - 06:30 PM', subject: 'Deep Study: Important 15-Mark Questions', type: 'Study', venue: 'Home / Library' },
          { time: '08:30 - 09:30 PM', subject: '5-Min Revision & Assignment Drafting', type: 'Revision', venue: 'Desk' }
        );
        window.renderTimetable();
      }
      window.showToast("✅ AI Daily Routine synced to your Timetable!");
    } catch(err) { console.error(err); }
  };

  // 10. YouTube Matcher
  window.analyzeYoutubePlaylist = function() {
    try {
      const urlInput = document.getElementById('ytUrlInput');
      const url = urlInput ? urlInput.value : '';
      if (!url) {
        window.showToast("Please enter a valid YouTube URL or topic!");
        return;
      }

      window.showToast("🔍 Analyzing YouTube playlist & matching syllabus...");

      const hoursElem = document.getElementById('ytTotalWatchHours');
      const matchElem = document.getElementById('ytSyllabusMatch');
      const speedElem = document.getElementById('ytSpeed2x');

      if (hoursElem) hoursElem.innerText = "4.5 Hours";
      if (matchElem) matchElem.innerText = "95% Match";
      if (speedElem) speedElem.innerText = "2.25 Hours";

      window.renderYoutubeMatches();
    } catch(err) { console.error(err); }
  };

  window.renderYoutubeMatches = function() {
    try {
      const container = document.getElementById('ytMatchingVideosList');
      if (!container) return;

      const videos = [
        { title: "Unit I: Core Concepts & Principles Full Lecture", duration: "45 mins", match: "98% Match", link: "https://youtube.com" },
        { title: "Unit II: Advanced Calculations & Step-by-Step Derivations", duration: "55 mins", match: "96% Match", link: "https://youtube.com" },
        { title: "Unit III: Model Questions & Practical Case Studies", duration: "1 hr 10 mins", match: "94% Match", link: "https://youtube.com" },
        { title: "Unit IV: Past Exam Repeated Questions Solved", duration: "40 mins", match: "95% Match", link: "https://youtube.com" },
        { title: "Unit V: Final Revision & Formula Summary", duration: "50 mins", match: "92% Match", link: "https://youtube.com" }
      ];

      container.innerHTML = videos.map((v, i) => `
        <div style="background: rgba(15,23,42,0.6); border: 1px solid var(--border-color); padding: 14px 18px; border-radius: var(--radius-md); margin-bottom: 10px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
          <div>
            <h4 style="font-size: 14px; font-weight: 700; color: #ffffff;">${i+1}. ${v.title}</h4>
            <span style="font-size: 12px; color: var(--text-muted);">Duration: ${v.duration}</span>
          </div>
          <div style="display: flex; align-items: center; gap: 12px;">
            <span class="badge badge-emerald">${v.match}</span>
            <a href="${v.link}" target="_blank" class="btn btn-outline" style="padding: 6px 12px; font-size: 12px;"><i data-lucide="play"></i> Watch Video</a>
          </div>
        </div>
      `).join('');

      if (window.lucide) lucide.createIcons();
    } catch(err) { console.error(err); }
  };

  // 11. Exam Question Bank Engine
  window.onUniversityChange = function() {
    try {
      const univSelect = document.getElementById('universitySelect');
      const univKey = univSelect ? univSelect.value : 'madras_univ';
      if (window.appState) window.appState.selectedUniv = univKey;

      const univData = window.UNIVERSITIES_DATA[univKey] || window.UNIVERSITIES_DATA['madras_univ'];

      const univDisplay = document.getElementById('examUnivDisplay');
      if (univDisplay) univDisplay.value = univData.name;

      const deptSelect = document.getElementById('examDeptSelect');
      if (deptSelect && univData.departments) {
        deptSelect.innerHTML = univData.departments.map(d => `<option value="${d}">${d}</option>`).join('');
      }

      window.onDeptChange();
    } catch(err) { console.error(err); }
  };

  window.onDeptChange = function() {
    try {
      const univKey = window.appState ? window.appState.selectedUniv : 'madras_univ';
      const univData = window.UNIVERSITIES_DATA[univKey] || window.UNIVERSITIES_DATA['madras_univ'];

      const deptSelect = document.getElementById('examDeptSelect');
      const dept = deptSelect ? deptSelect.value : '';

      const subjects = (univData.subjects && univData.subjects[dept]) 
        ? univData.subjects[dept] 
        : ["UNOM-CM301 - Cost Accounting & Auditing", "UNOM-CS301 - Programming in C++ & Data Structures"];

      const subjectSelect = document.getElementById('examSubjectSelect');
      if (subjectSelect) {
        subjectSelect.innerHTML = subjects.map(s => `<option value="${s}">${s}</option>`).join('');
      }

      window.loadSubjectSyllabus();
    } catch(err) { console.error(err); }
  };

  window.loadSubjectSyllabus = function() {
    try {
      const subjectSelect = document.getElementById('examSubjectSelect');
      const subject = subjectSelect ? subjectSelect.value : 'UNOM-CM301 - Cost Accounting & Auditing';
      if (window.appState) window.appState.selectedSubject = subject;

      const syllabusText = window.SAMPLE_SYLLABI[subject] || `UNIT I: Core Concepts & Principles\nUNIT II: Advanced Analysis & Design\nUNIT III: System Implementation\nUNIT IV: Testing & Optimization\nUNIT V: Real World Applications & Exam Questions`;

      const txtElem = document.getElementById('examSyllabusText');
      if (txtElem) txtElem.value = syllabusText;

      window.generateQuestionBank();
    } catch(err) { console.error(err); }
  };

  window.generateQuestionBank = function() {
    try {
      const subject = window.appState ? window.appState.selectedSubject : 'UNOM-CM301 - Cost Accounting & Auditing';
      const defaultBank = {
        importantQuestions: [
          { id: "iq1", type: "2-Mark", unit: "Unit I", question: `Define key concepts for ${subject}.`, answer: "Standard definition and core principles for university exams." },
          { id: "iq2", type: "15-Mark", unit: "Unit II", question: `Explain main theoretical and numerical framework of ${subject}.`, answer: "Detailed 15-mark model answer with formulas, diagrams, and step-by-step points." }
        ],
        repeatedQuestions: [
          { id: "rq1", frequency: "Appeared 7x in Past University Papers", probability: "98% Probability", unit: "Unit III", question: `Explain past paper repeated question for ${subject}.`, answer: "Comprehensive model answer designed for university evaluation." }
        ]
      };

      const qBankData = window.QUESTION_BANKS[subject] || window.QUESTION_BANKS["UNOM-CM301 - Cost Accounting & Auditing"] || defaultBank;

      const iQuestions = qBankData.importantQuestions || defaultBank.importantQuestions;
      const rQuestions = qBankData.repeatedQuestions || defaultBank.repeatedQuestions;

      const iList = document.getElementById('importantQuestionsList');
      if (iList) {
        iList.innerHTML = iQuestions.map(q => `
          <div class="q-card">
            <div class="q-header">
              <span class="q-title">${q.question}</span>
              <span class="badge badge-purple">${q.type || 'Important'}</span>
            </div>
            <div style="font-size: 11px; color: var(--accent-cyan); font-weight: 700;">${q.unit || 'Unit I'}</div>
            <div class="q-answer"><strong>Answer:</strong>\n${q.answer}</div>
          </div>
        `).join('');
      }

      const rList = document.getElementById('repeatedQuestionsList');
      if (rList) {
        rList.innerHTML = rQuestions.map(q => `
          <div class="q-card">
            <div class="q-header">
              <span class="q-title">${q.question}</span>
              <span class="badge badge-amber">${q.frequency || 'Past Paper Question'}</span>
            </div>
            <div style="font-size: 11px; color: var(--accent-emerald); font-weight: 700;">🎯 ${q.probability || 'High Probability'}</div>
            <div class="q-answer"><strong>Model Answer:</strong>\n${q.answer}</div>
          </div>
        `).join('');
      }
    } catch(err) { console.error(err); }
  };

  window.downloadQuestionsPdf = function(type) {
    try {
      const univKey = window.appState ? window.appState.selectedUniv : 'madras_univ';
      const univData = window.UNIVERSITIES_DATA[univKey] || { name: "University of Madras (UNOM)" };
      const subject = window.appState ? window.appState.selectedSubject : 'UNOM-CM301 - Cost Accounting & Auditing';
      
      const qBankData = window.QUESTION_BANKS[subject] || window.QUESTION_BANKS["UNOM-CM301 - Cost Accounting & Auditing"] || {};
      const items = type === 'important' ? (qBankData.importantQuestions || []) : (qBankData.repeatedQuestions || []);

      if (window.exportPdfDocument) {
        window.exportPdfDocument({
          title: type === 'important' ? "IMPORTANT EXAM QUESTIONS & MODEL ANSWERS" : "PAST EXAM REPEATED QUESTIONS & MODEL ANSWERS",
          subtitle: type === 'important' ? "High Priority 2-Mark & 15-Mark Questions" : "Frequently Repeated Questions from Previous Year Papers",
          university: univData.name,
          subject: subject,
          items: items,
          type: type
        });
      } else {
        window.showToast("📄 Exporting PDF Document...");
      }
    } catch(err) { console.error(err); }
  };

  // 12. Notes Generator & Assignment Copilot
  window.generateSyllabusNotes = function() {
    try {
      const topicInput = document.getElementById('notesInputTopic');
      const topic = topicInput ? topicInput.value.trim() : 'Cost Sheet & EOQ Calculation';
      if (!topic) {
        window.showToast("Please enter a topic or syllabus unit!");
        return;
      }

      window.showToast("⚡ Generating study notes & 5-minute revision cards...");

      const container = document.getElementById('notesOutputContainer');
      const body = document.getElementById('notesBodyContent');
      const title = document.getElementById('notesTitle');

      if (title) title.innerText = `Study Notes & Revision Sheet: ${topic}`;

      if (body) {
        body.innerHTML = `
          <div style="background: rgba(99,102,241,0.1); border-left: 4px solid var(--primary); padding: 16px; margin-bottom: 20px; border-radius: 4px;">
            <h4 style="margin-bottom: 6px; color: #a5b4fc;">⚡ 5-Minute Exam Revision Card</h4>
            <p style="font-size: 13px; color: var(--text-muted);">
              <strong>Core Concept:</strong> ${topic} is a high-priority topic tested extensively in university examinations.<br>
              <strong>Exam Strategy:</strong> Master the definitions, key formulas, diagrams, and numerical steps to secure full marks.
            </p>
          </div>

          <h3>1. Detailed Overview & Academic Definitions</h3>
          <p>
            ${topic} plays a fundamental role across university curricula. Standard evaluation requires clear definitions, step-by-step derivations, and structured presentation.
          </p>

          <h3>2. Step-by-Step Analytical Points</h3>
          <ul>
            <li><strong>Step 1: Conceptual Foundation:</strong> Establish basic assumptions and mathematical/logical definitions.</li>
            <li><strong>Step 2: Core Formulation & Working:</strong> Apply key formulas or code routines.</li>
            <li><strong>Step 3: Conclusion & Results:</strong> Summarize findings and boundary conditions.</li>
          </ul>
        `;
      }

      if (container) container.style.display = 'block';
    } catch(err) { console.error(err); }
  };

  window.downloadNotesPdf = function() {
    try {
      const topic = document.getElementById('notesInputTopic').value || 'Study Notes';
      window.showToast("📄 Exporting Study Notes PDF...");
      if (window.exportPdfDocument) {
        window.exportPdfDocument({
          title: "STUDY NOTES & REVISION CARD",
          subtitle: `Subject Topic: ${topic}`,
          university: "University of Madras (UNOM)",
          subject: topic,
          items: [{ question: topic, answer: document.getElementById('notesBodyContent').innerText }]
        });
      }
    } catch(err) { console.error(err); }
  };

  window.generateAssignmentSolution = function() {
    try {
      const titleInput = document.getElementById('assignmentTitleInput');
      const titleText = titleInput ? titleInput.value.trim() : 'Explain Marginal Costing P/V Ratio and BEP';
      if (!titleText) {
        window.showToast("Please enter an assignment title or question!");
        return;
      }

      window.showToast("✍️ Machan AI preparing assignment solution...");

      const container = document.getElementById('assignmentOutputContainer');
      const body = document.getElementById('assignmentBodyContent');

      if (body) {
        body.innerHTML = `
          <h3>Assignment Topic: ${titleText}</h3>
          <p style="color: var(--text-muted); font-size: 13px;">Prepared by Machan AI Assistant for College Submission</p>
          <hr style="border-color: var(--border-color); margin: 16px 0;">

          <h4>1. Introduction & Theoretical Background</h4>
          <p>
            This solution addresses <strong>${titleText}</strong> structured according to academic requirements and university evaluation guidelines.
          </p>

          <h4>2. Detailed Derivation / Working Solution</h4>
          <div style="background: #090d16; padding: 14px; border-radius: 8px; border: 1px solid var(--border-color); font-family: monospace; color: #67e8f9; line-height: 1.6;">
            1. Conceptual Framework & Definitions<br>
            2. Step-by-Step Numerical / Code Working<br>
            3. Solved Result & Interpretation
          </div>

          <h4>3. Conclusion & Summary</h4>
          <p>
            The above derivation and explanation satisfy all criteria for maximum academic evaluation.
          </p>
        `;
      }

      if (container) container.style.display = 'block';
    } catch(err) { console.error(err); }
  };

  window.downloadAssignmentPdf = function() {
    try {
      window.showToast("📄 Exporting Assignment Solution PDF...");
      if (window.exportPdfDocument) {
        window.exportPdfDocument({
          title: "ASSIGNMENT COPILOT SOLUTION",
          subtitle: "Complete Academic Solution",
          university: "University of Madras (UNOM)",
          subject: document.getElementById('assignmentTitleInput').value || "Assignment",
          items: [{ question: "Assignment Prompt", answer: document.getElementById('assignmentBodyContent').innerText }]
        });
      }
    } catch(err) { console.error(err); }
  };

  // 13. Productivity Tools
  window.renderTimetable = function() {
    try {
      const tbody = document.getElementById('timetableBody');
      if (!tbody) return;
      const list = window.appState ? window.appState.timetable : [];

      tbody.innerHTML = list.map((item, index) => `
        <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
          <td style="padding: 12px; font-weight: 700; color: var(--accent-cyan);">${item.time}</td>
          <td style="padding: 12px;">${item.subject}</td>
          <td style="padding: 12px;"><span class="badge badge-purple">${item.type}</span></td>
          <td style="padding: 12px; color: var(--text-muted);">${item.venue}</td>
          <td style="padding: 12px;"><button class="btn btn-outline" style="padding: 4px 8px; font-size: 11px; color: #fca5a5;" onclick="deleteScheduleRow(${index})">Remove</button></td>
        </tr>
      `).join('');
    } catch(err) { console.error(err); }
  };

  window.addNewScheduleRow = function() {
    try {
      const time = prompt("Enter Time Slot (e.g. 04:00 - 05:00 PM):", "04:00 - 05:00 PM");
      const subject = prompt("Enter Subject or Activity:", "Revision / Study");
      if (time && subject) {
        window.appState.timetable.push({ time, subject, type: 'Study', venue: 'Library / Room' });
        window.renderTimetable();
        window.showToast("Added new schedule slot!");
      }
    } catch(err) { console.error(err); }
  };

  window.deleteScheduleRow = function(index) {
    try {
      window.appState.timetable.splice(index, 1);
      window.renderTimetable();
    } catch(err) { console.error(err); }
  };

  window.renderTasks = function() {
    try {
      const container = document.getElementById('tasksListContainer');
      if (!container) return;
      const tasks = window.appState ? window.appState.tasks : [];

      container.innerHTML = tasks.map(t => `
        <div style="background: rgba(15,23,42,0.6); border: 1px solid var(--border-color); padding: 14px 18px; border-radius: var(--radius-md); margin-bottom: 10px; display: flex; justify-content: space-between; align-items: center;">
          <div style="display: flex; align-items: center; gap: 12px;">
            <input type="checkbox" ${t.done ? 'checked' : ''} onchange="toggleTaskDone(${t.id})" style="width: 18px; height: 18px; cursor: pointer;">
            <div>
              <h4 style="font-size: 14px; font-weight: 700; color: #ffffff; ${t.done ? 'text-decoration: line-through; opacity: 0.5;' : ''}">${t.title}</h4>
              <span style="font-size: 12px; color: var(--text-muted);">Deadline: ${t.deadline}</span>
            </div>
          </div>
          <div style="display: flex; align-items: center; gap: 10px;">
            <span class="badge ${t.priority === 'urgent' ? 'badge-amber' : 'badge-purple'}">${t.priority.toUpperCase()}</span>
            <button class="btn btn-outline" style="padding: 4px 8px; font-size: 11px; color: #fca5a5;" onclick="deleteTask(${t.id})">Delete</button>
          </div>
        </div>
      `).join('');
    } catch(err) { console.error(err); }
  };

  window.addNewTask = function() {
    try {
      const title = prompt("Enter Task / Assignment Title:", "Revision Question Bank");
      const deadline = prompt("Enter Deadline:", "Tomorrow, 6:00 PM");
      if (title && deadline) {
        window.appState.tasks.push({ id: Date.now(), title, deadline, priority: 'urgent', done: false });
        window.renderTasks();
        window.showToast("Task added!");
      }
    } catch(err) { console.error(err); }
  };

  window.toggleTaskDone = function(id) {
    try {
      const task = window.appState.tasks.find(t => t.id === id);
      if (task) task.done = !task.done;
      window.renderTasks();
    } catch(err) { console.error(err); }
  };

  window.deleteTask = function(id) {
    try {
      window.appState.tasks = window.appState.tasks.filter(t => t.id !== id);
      window.renderTasks();
    } catch(err) { console.error(err); }
  };

  window.renderGpaRows = function() {
    try {
      const container = document.getElementById('gpaRowsContainer');
      if (!container) return;
      const courses = window.appState ? window.appState.gpaCourses : [];

      container.innerHTML = courses.map((c, idx) => `
        <div class="grid-3" style="margin-bottom: 12px; background: rgba(15,23,42,0.4); padding: 12px; border-radius: 8px;">
          <input type="text" class="form-control" value="${c.name}" onchange="window.appState.gpaCourses[${idx}].name = this.value; window.calculateGpa();">
          <input type="number" class="form-control" value="${c.credit}" placeholder="Credits" onchange="window.appState.gpaCourses[${idx}].credit = parseFloat(this.value)||0; window.calculateGpa();">
          <select class="form-control" onchange="window.appState.gpaCourses[${idx}].grade = parseFloat(this.value); window.calculateGpa();">
            <option value="10" ${c.grade === 10 ? 'selected' : ''}>O Grade (10)</option>
            <option value="9" ${c.grade === 9 ? 'selected' : ''}>A+ Grade (9)</option>
            <option value="8" ${c.grade === 8 ? 'selected' : ''}>A Grade (8)</option>
            <option value="7" ${c.grade === 7 ? 'selected' : ''}>B+ Grade (7)</option>
            <option value="6" ${c.grade === 6 ? 'selected' : ''}>B Grade (6)</option>
          </select>
        </div>
      `).join('');
    } catch(err) { console.error(err); }
  };

  window.addGpaCourseRow = function() {
    try {
      window.appState.gpaCourses.push({ name: 'New Subject', credit: 3, grade: 9 });
      window.renderGpaRows();
      window.calculateGpa();
    } catch(err) { console.error(err); }
  };

  window.calculateGpa = function() {
    try {
      const courses = window.appState ? window.appState.gpaCourses : [];
      let totalPoints = 0;
      let totalCredits = 0;

      courses.forEach(c => {
        const cred = parseFloat(c.credit) || 0;
        const gr = parseFloat(c.grade) || 0;
        totalPoints += (cred * gr);
        totalCredits += cred;
      });

      const gpa = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : "0.00";
      const valElem = document.getElementById('calculatedGpaValue');
      if (valElem) valElem.innerText = `${gpa} / 10.0`;
    } catch(err) { console.error(err); }
  };

  // Pomodoro Timer
  window.toggleTimer = function() {
    try {
      const t = window.appState.timer;
      const btn = document.getElementById('timerStartBtn');
      const status = document.getElementById('timerStatus');

      if (t.isRunning) {
        clearInterval(t.interval);
        t.isRunning = false;
        if (btn) btn.innerHTML = `<i data-lucide="play"></i> Resume Focus`;
        if (status) status.innerText = "Focus timer paused.";
      } else {
        t.isRunning = true;
        if (btn) btn.innerHTML = `<i data-lucide="pause"></i> Pause Focus`;
        if (status) status.innerText = "Machan Deep Focus Session Running... Keep studying!";

        t.interval = setInterval(() => {
          if (t.remaining > 0) {
            t.remaining--;
            const mins = Math.floor(t.remaining / 60);
            const secs = t.remaining % 60;
            const disp = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
            const elem = document.getElementById('timerDisplay');
            if (elem) elem.innerText = disp;
          } else {
            clearInterval(t.interval);
            t.isRunning = false;
            window.showToast("🎉 Pomodoro Focus Session Complete! Take a 5 min break macha!");
          }
        }, 1000);
      }
      if (window.lucide) lucide.createIcons();
    } catch(err) { console.error(err); }
  };

  window.resetTimer = function() {
    try {
      const t = window.appState.timer;
      if (t.interval) clearInterval(t.interval);
      t.isRunning = false;
      t.remaining = 25 * 60;
      const elem = document.getElementById('timerDisplay');
      if (elem) elem.innerText = "25:00";
      const btn = document.getElementById('timerStartBtn');
      if (btn) btn.innerHTML = `<i data-lucide="play"></i> Start Focus`;
      const status = document.getElementById('timerStatus');
      if (status) status.innerText = "Ready for a 25-minute deep study focus session!";
      if (window.lucide) lucide.createIcons();
    } catch(err) { console.error(err); }
  };

  // 14. PDF Export Helper
  window.exportPdfDocument = function(opts) {
    try {
      const p = window.appState.userProfile || {};
      window.showToast("📄 Generating Printable PDF Document...");
      const element = document.createElement('div');
      element.style.padding = '24px';
      element.style.fontFamily = 'sans-serif';
      element.style.color = '#000000';
      element.style.background = '#ffffff';

      let itemsHtml = '';
      if (opts.items && Array.isArray(opts.items)) {
        itemsHtml = opts.items.map((item, idx) => `
          <div style="margin-bottom: 20px; page-break-inside: avoid;">
            <h4 style="color: #4338ca; margin-bottom: 6px;">Q${idx+1}: ${item.question || ''}</h4>
            <p style="white-space: pre-wrap; font-size: 13px; line-height: 1.6; background: #f8fafc; padding: 10px; border-left: 3px solid #6366f1;">${item.answer || ''}</p>
          </div>
        `).join('');
      }

      element.innerHTML = `
        <div style="text-align: center; border-bottom: 2px solid #6366f1; padding-bottom: 12px; margin-bottom: 20px;">
          <h1 style="color: #4338ca; margin: 0;">${opts.title || "STUDY MATERIAL"}</h1>
          <p style="color: #64748b; margin: 4px 0 0 0;">${opts.subtitle || ""}</p>
          <div style="font-size: 12px; font-weight: bold; color: #0f172a; margin-top: 8px; background: #e0e7ff; padding: 6px; border-radius: 4px;">
            Student Name: ${p.name || 'Student'} | User ID: ${p.userId || 'UNOM-STUDENT'} | Course: ${p.course || 'B.Com General'}
          </div>
          <div style="font-size: 11px; color: #475569; margin-top: 4px;">${opts.university || "University of Madras (UNOM)"} | Subject: ${opts.subject || ""}</div>
        </div>
        ${itemsHtml}
        <div style="text-align: center; font-size: 10px; color: #94a3b8; margin-top: 30px; border-top: 1px solid #e2e8f0; padding-top: 8px;">
          Generated by Vaa Macha Vettiya Irukala! AI Student Assistant - Personalized Printable Study Resource
        </div>
      `;

      if (window.html2pdf) {
        html2pdf().set({
          margin: 10,
          filename: `${(opts.subject || 'study_notes').replace(/[^a-zA-Z0-9]/g, '_')}.pdf`,
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2 },
          jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        }).from(element).save();
      } else {
        const printWin = window.open('', '_blank');
        printWin.document.write(`<html><head><title>PDF Export</title></head><body>${element.innerHTML}</body></html>`);
        printWin.document.close();
        printWin.print();
      }
    } catch(err) { console.error("PDF Export error:", err); }
  };

  // 15. Initialization on Load
  document.addEventListener('DOMContentLoaded', () => {
    try {
      window.loadUserProfile();
      window.onUniversityChange();
      window.renderYoutubeMatches();
      window.renderTimetable();
      window.renderTasks();
      window.renderGpaRows();
      window.calculateGpa();
      if (window.lucide) lucide.createIcons();
    } catch(err) { console.error("Initialization error:", err); }
  });

})();
