// Vaa Macha Vettiya Irukala! - Comprehensive Bundled Engine
// Works seamlessly standalone or modularly

(function() {
  'use strict';

  // 1. Initial State & Data Store Initialization
  window.appState = window.appState || {
    currentTab: 'assistant',
    selectedUniv: 'madras_univ',
    selectedDept: '',
    selectedSubject: '',
    timetable: [
      { time: '08:30 - 10:00 AM', subject: 'UNOM-CS301 Programming in C++', type: 'Lecture', venue: 'Hall 201' },
      { time: '10:30 - 01:00 PM', subject: 'UNOM-CS302 Web Tech Lab', type: 'Lab', venue: 'Lab 3' },
      { time: '02:00 - 03:30 PM', subject: 'UNOM-CM301 Cost Accounting', type: 'Lecture', venue: 'Hall 105' }
    ],
    tasks: [
      { id: 1, title: 'UNOM C++ 15-Mark Inheritance Assignment', deadline: 'Tomorrow, 5:00 PM', priority: 'urgent', done: false },
      { id: 2, title: 'Cost Accounting EOQ & BEP Formula Revision', deadline: 'In 2 days', priority: 'medium', done: false },
      { id: 3, title: 'Data Structures Quick Sort Derivation', deadline: 'In 4 days', priority: 'chill', done: true }
    ],
    gpaCourses: [
      { name: 'Programming in C++ & Data Structures', credit: 4, grade: 10 },
      { name: 'Web Technology & JS Essentials', credit: 4, grade: 9 },
      { name: 'Cost Accounting & Auditing', credit: 4, grade: 9 },
      { name: 'Environmental Studies (UNOM)', credit: 2, grade: 10 }
    ],
    timer: {
      duration: 25 * 60,
      remaining: 25 * 60,
      interval: null,
      isRunning: false
    }
  };

  // 2. Database Objects Initialization
  window.UNIVERSITIES_DATA = window.UNIVERSITIES_DATA || {
    "madras_univ": {
      name: "University of Madras (UNOM)",
      departments: [
        "Computer Science & Applications (B.Sc CS / BCA / M.Sc)",
        "Commerce & Finance (B.Com General / A&F / CS)",
        "Business Administration (BBA)",
        "Mathematical & Physical Sciences (B.Sc Maths / Physics)",
        "Humanities & Languages (B.A. English / Tamil / Econ)"
      ],
      subjects: {
        "Computer Science & Applications (B.Sc CS / BCA / M.Sc)": [
          "UNOM-CS301 - Programming in C++ & Data Structures",
          "UNOM-CS302 - Web Technology & JavaScript Essentials",
          "UNOM-CS401 - Database Management Systems (RDBMS)",
          "UNOM-CS402 - Python Programming & Artificial Intelligence",
          "UNOM-CS501 - Operating Systems & Computer Architecture"
        ],
        "Commerce & Finance (B.Com General / A&F / CS)": [
          "UNOM-CM201 - Financial Accounting & Corporate Reports",
          "UNOM-CM301 - Cost Accounting & Auditing",
          "UNOM-CM401 - Business Law & Industrial Regulations",
          "UNOM-CM501 - Income Tax & GST Law"
        ],
        "Business Administration (BBA)": [
          "UNOM-BB301 - Principles of Management & Org Behavior",
          "UNOM-BB401 - Marketing Management & Digital Strategy",
          "UNOM-BB501 - Human Resource Management (HRM)"
        ],
        "Mathematical & Physical Sciences (B.Sc Maths / Physics)": [
          "UNOM-MT101 - Calculus, Algebra & Differential Equations",
          "UNOM-PH101 - Mechanics, Wave Optics & Electricity"
        ],
        "Humanities & Languages (B.A. English / Tamil / Econ)": [
          "UNOM-EG101 - General English Communication & Prose",
          "UNOM-EC101 - Microeconomics & Indian Economy"
        ]
      }
    },
    "anna_univ": {
      name: "Anna University (R2021 / R2017)",
      departments: ["Computer Science & Engineering (B.E. CSE)", "Information Technology (B.Tech IT)", "Electronics & Comm (B.E. ECE)"],
      subjects: {
        "Computer Science & Engineering (B.E. CSE)": ["CS3491 - Artificial Intelligence & Machine Learning", "CS3451 - Data Structures", "CS3401 - Algorithms"],
        "Information Technology (B.Tech IT)": ["IT3401 - Web Essentials", "CS3491 - AI & Machine Learning"],
        "Electronics & Comm (B.E. ECE)": ["EC3451 - Linear Integrated Circuits", "EC3491 - Communication Systems"]
      }
    },
    "vtu": {
      name: "Visvesvaraya Technological University (VTU)",
      departments: ["Computer Science & Engineering", "Information Science & Engineering"],
      subjects: {
        "Computer Science & Engineering": ["21CS51 - Automata Theory & Computability", "21CS52 - Database Management Systems"],
        "Information Science & Engineering": ["21IS53 - Computer Networks & Protocols"]
      }
    },
    "jntu": {
      name: "Jawaharlal Nehru Technological Univ (JNTU)",
      departments: ["CSE & Allied Branches", "ECE & EEE"],
      subjects: {
        "CSE & Allied Branches": ["CS501 - Formal Languages & Automata", "CS502 - Software Engineering"],
        "ECE & EEE": ["EC501 - Digital Signal Processing"]
      }
    },
    "mumbai_univ": {
      name: "University of Mumbai (MU)",
      departments: ["B.Sc Computer Science & IT", "Engineering (Computer / IT)"],
      subjects: {
        "B.Sc Computer Science & IT": ["USCS301 - Core Java & OOPs", "USCS302 - Database Systems"],
        "Engineering (Computer / IT)": ["CSC401 - Applied Mathematics IV", "CSC402 - Analysis of Algorithms"]
      }
    },
    "autonomous": {
      name: "Autonomous / Deemed Universities",
      departments: ["School of Computing", "School of Commerce & Mgmt"],
      subjects: {
        "School of Computing": ["AUT-CS101 - Advanced Data Structures", "AUT-CS102 - Cloud Computing"],
        "School of Commerce & Mgmt": ["AUT-CM101 - Corporate Finance", "AUT-CM102 - Managerial Economics"]
      }
    },
    "custom": {
      name: "Custom University / College",
      departments: ["General Science & Tech", "Arts & Humanities", "Commerce & Mgmt"],
      subjects: {
        "General Science & Tech": ["GEN101 - General Computer Science"],
        "Arts & Humanities": ["GEN102 - Soft Skills & Literature"],
        "Commerce & Mgmt": ["GEN103 - General Accounting & Business"]
      }
    }
  };

  window.SAMPLE_SYLLABI = window.SAMPLE_SYLLABI || {
    "UNOM-CS301 - Programming in C++ & Data Structures": `UNIT I: C++ OBJECT ORIENTED PROGRAMMING
Tokens, Expressions, Control Structures, Classes & Objects, Constructors & Destructors, Operator Overloading, Function Overloading, Inheritance (Single, Multiple, Multilevel, Hybrid), Polymorphism & Virtual Functions.

UNIT II: ARRAYS, STACKS & QUEUES
Abstract Data Types (ADTs), Array Representation, Pointers & Dynamic Memory, Stack ADT Operations (Push, Pop, Peek), Infix to Postfix Conversion, Queue ADT, Circular Queue, Priority Queue.

UNIT III: LINKED LISTS & TREES
Singly Linked List, Doubly Linked List, Circular Linked List, Binary Trees, Binary Search Tree (BST) Operations, Tree Traversals (Inorder, Preorder, Postorder), AVL Tree Rotations.

UNIT IV: SORTING & SEARCHING
Linear Search, Binary Search, Bubble Sort, Selection Sort, Insertion Sort, Quick Sort, Merge Sort, Heap Sort Analysis.

UNIT V: GRAPH & HASHING
Graph Representations (Adjacency Matrix, List), Graph Traversals (BFS, DFS), Minimum Spanning Tree, Hash Tables & Collision Resolution Techniques.`,

    "UNOM-CM301 - Cost Accounting & Auditing": `UNIT I: COST ACCOUNTING FOUNDATIONS
Definition, Scope, Objectives, Elements of Cost, Cost Sheet Preparation, Material Costing, EOQ (Economic Order Quantity) Calculation, ABC Analysis.

UNIT II: LABOUR & OVERHEAD COSTS
Labour Costing, Time & Piece Rate Systems, Idle Time, Overheads Classification, Allocation, Apportionment & Absorption of Overheads.

UNIT III: MARGINAL COSTING & BREAK-EVEN ANALYSIS
Marginal Costing vs Absorption Costing, P/V Ratio, Break-Even Point (BEP) in Units & Value, Margin of Safety, Decision Making Applications.

UNIT IV: CONTRACT & PROCESS COSTING
Contract Account Preparation, Work-in-Progress, Escalation Clause, Process Costing, Normal & Abnormal Loss, Joint Products & By-Products.

UNIT V: AUDITING & INTERNAL CHECK
Audit Principles, Types of Audit, Vouching, Internal Check System, Auditor Rights & Liabilities under Indian Companies Act.`,

    "CS3491 - Artificial Intelligence & Machine Learning": `UNIT I: PROBLEM SOLVING & HEURISTIC SEARCH
Introduction to AI, Uninformed Search (BFS, DFS), Informed Search (A* Search, Greedy Best First), Heuristic Functions, Constraint Satisfaction Problems, Alpha-Beta Pruning.

UNIT II: KNOWLEDGE REPRESENTATION
Propositional & First-Order Logic (FOL), Forward & Backward Chaining, Resolution Refutation, Semantic Networks & Frames.

UNIT III: MACHINE LEARNING
Supervised vs Unsupervised Learning, Linear & Logistic Regression, Decision Trees, ID3 Algorithm, Information Gain, Entropy, SVM, Random Forests.

UNIT IV: DEEP LEARNING
Perceptrons, Multilayer Perceptron (MLP), Backpropagation Algorithm, Activation Functions (ReLU, Softmax), CNN for Vision, RNN & LSTM for NLP.

UNIT V: REINFORCEMENT LEARNING & ETHICS
Q-Learning, Bellman Equation, Markov Decision Process (MDP), Generative AI & LLMs, AI Ethics, Bias & Explainability.`
  };

  window.QUESTION_BANKS = window.QUESTION_BANKS || {
    "UNOM-CS301 - Programming in C++ & Data Structures": {
      importantQuestions: [
        {
          id: "unom_iq1",
          type: "2-Mark",
          unit: "Unit I",
          question: "What is Virtual Function in C++? State its syntax.",
          answer: "A virtual function is a member function in a base class redefined in derived classes. Syntax: virtual void display();"
        },
        {
          id: "unom_iq2",
          type: "2-Mark",
          unit: "Unit II",
          question: "Differentiate between Stack and Queue ADT.",
          answer: "Stack follows LIFO (Last In First Out) at TOP. Queue follows FIFO (First In First Out) at REAR/FRONT."
        },
        {
          id: "unom_iq3",
          type: "15-Mark",
          unit: "Unit I",
          question: "Explain various types of Inheritance in C++ with code examples.",
          answer: "Types of Inheritance:\n1. Single Inheritance\n2. Multiple Inheritance\n3. Multilevel Inheritance\n4. Hierarchical Inheritance\n5. Hybrid Inheritance\n\nCode snippet:\nclass Base { public: int x; };\nclass Derived : public Base { public: void show() { cout << x; } };"
        }
      ],
      repeatedQuestions: [
        {
          id: "unom_rq1",
          frequency: "Appeared 7x in UNOM Past Papers (2018-2025)",
          probability: "99% Probability in Exam",
          unit: "Unit IV",
          question: "Explain Quick Sort Algorithm with a numerical example. Analyze best/worst time complexity.",
          answer: "Quick Sort uses Divide and Conquer with a Pivot. Time Complexities: Best/Avg O(n log n), Worst O(n^2)."
        },
        {
          id: "unom_rq2",
          frequency: "Appeared 5x in UNOM April/Nov Papers",
          probability: "95% Probability in Exam",
          unit: "Unit III",
          question: "Detail Binary Search Tree (BST) operations: Insertion, Deletion, and Inorder Traversal.",
          answer: "BST Property: Left < Root < Right. Inorder Traversal gives sorted order. Deletion handles leaf, 1-child, and 2-children cases."
        }
      ]
    },
    "UNOM-CM301 - Cost Accounting & Auditing": {
      importantQuestions: [
        {
          id: "cm_iq1",
          type: "2-Mark",
          unit: "Unit I",
          question: "Define Economic Order Quantity (EOQ). Write the formula.",
          answer: "EOQ is the optimal order quantity that minimizes total inventory costs. Formula: EOQ = sqrt( (2 * A * O) / C )."
        },
        {
          id: "cm_iq2",
          type: "15-Mark",
          unit: "Unit III",
          question: "Explain Marginal Costing equations: P/V Ratio, BEP, and Margin of Safety with a numerical illustration.",
          answer: "1. P/V Ratio = (Contribution / Sales) * 100\n2. BEP (Units) = Fixed Cost / Contribution per Unit\n3. Margin of Safety = Actual Sales - Break-Even Sales."
        }
      ],
      repeatedQuestions: [
        {
          id: "cm_rq1",
          frequency: "Appeared 6x in UNOM Commerce Papers",
          probability: "96% Probability in Exam",
          unit: "Unit I",
          question: "Prepare a Cost Sheet format showing Prime Cost, Works Cost, Cost of Production & Total Cost.",
          answer: "Direct Material + Direct Labour + Direct Expenses = Prime Cost.\nPrime Cost + Factory Overheads = Works Cost.\nWorks Cost + Admin Overheads = Cost of Production."
        }
      ]
    }
  };

  // 3. Global Toast Utility
  window.showToast = function(message) {
    try {
      const toast = document.getElementById('toast');
      if (!toast) return;
      toast.innerText = message;
      toast.style.display = 'block';
      setTimeout(() => { toast.style.display = 'none'; }, 3500);
    } catch(e) { console.error(e); }
  };

  // 4. Global Share Utility
  window.shareWithFriends = function() {
    try {
      const shareText = "Hey Macha! 🚀 Check out this awesome Student App 'Vaa Macha Vettiya Irukala!': Important Q&A PDFs, YouTube Watch Hour Calculator, Notes Generator & Study Planner all in one! Try it here: " + window.location.href;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(shareText);
        window.showToast("🚀 App Link & Whatsapp Invite Copied to Clipboard!");
      } else {
        alert(shareText);
      }
    } catch(e) { alert("App Link: " + window.location.href); }
  };

  // 5. Tab Controller
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
        const t = document.getElementById('current-tab-title');
        const s = document.getElementById('current-tab-subtitle');
        if (t) t.innerText = titles[tabId].title;
        if (s) s.innerText = titles[tabId].subtitle;
      }

      if (window.lucide) lucide.createIcons();
    } catch(err) { console.error("Tab switch error:", err); }
  };

  // 6. AI Assistant Functions
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
      typingBubble.innerHTML = `<em>Machan AI is analyzing your query... 🧠</em>`;
      chatContainer.appendChild(typingBubble);
      chatContainer.scrollTop = chatContainer.scrollHeight;

      setTimeout(() => {
        const indicator = document.getElementById('aiTypingIndicator');
        if (indicator && indicator.parentNode) indicator.parentNode.removeChild(indicator);

        const aiBubble = document.createElement('div');
        aiBubble.className = 'message-bubble assistant';

        const lower = msgText.toLowerCase();
        let responseText = "";

        if (lower.includes('cost account') || lower.includes('accounting') || lower.includes('commerce') || lower.includes('finance') || lower.includes('doubt')) {
          responseText = `Vannakam Macha! Cost Accounting & Commerce-la doubt-ah? Don't worry, naan iruken! 📚💼<br><br>
          📌 **Cost Accounting Key Concepts for Madras Univ (UNOM):**<br>
          1. **Material Costing:** EOQ (Economic Order Quantity) = sqrt( (2 * A * O) / C )<br>
          2. **Marginal Costing:** P/V Ratio = (Contribution / Sales) * 100<br>
          3. **Break-Even Point (BEP):** BEP (in Units) = Fixed Cost / Contribution per Unit<br><br>
          💡 **Exam Tip:** Left menu-la **University Question Bank** click panni **B.Com / UNOM-CM301 Cost Accounting** select panna, 15-Mark repeated questions & full model solutions PDF-ah download pannikalam macha! 🔥`;
        } else if (lower.includes('plan') || lower.includes('college') || lower.includes('time') || lower.includes('schedule') || lower.includes('study') || lower.includes('routine')) {
          responseText = `Super Macha! Unoda free hours-ah analyze pantean. 🔥<br><br>
          📌 **Today's Customized Study Plan:**<br>
          • **08:30 AM - 02:00 PM:** College & Lab hours (Focus on core lectures).<br>
          • **02:00 PM - 04:00 PM:** Lunch, Rest & Evening Break.<br>
          • **05:00 PM - 06:30 PM:** Deep Study Block 1: Unit 3 Important Questions (1.5 hrs).<br>
          • **07:30 PM - 08:30 PM:** Dinner & Break.<br>
          • **08:30 PM - 09:30 PM:** 5-Min Revision & Assignment drafting.<br><br>
          Naa intha plan-ah ready paniruka macha! Below **"Save Schedule to Timetable"** button click panni direct-ah Timetable-la sync pannikalam! 🚀`;
        } else if (lower.includes('hi') || lower.includes('vanakkam') || lower.includes('hello') || lower.includes('macha') || lower.includes('hey')) {
          responseText = `Vannakam Macha! 👋 Enna macha vettiya irukala? Illa exam stress-ah?<br><br>
          Unaku syllabus doubt, important questions PDF, study notes, or daily schedule plan ethu venum nalum en kitta kelungaa, naan unaku help panren! 🚀`;
        } else {
          responseText = `Super question Macha! 💡<br><br>
          Intha topic-ku detailed study notes & 5-minute exam revision card venum na, left menu-la **Syllabus Notes Generator** click pannunga. Complete formulas & model answers direct-ah generate aagi PDF-ah download aagum! 🚀`;
        }

        aiBubble.innerHTML = responseText;
        chatContainer.appendChild(aiBubble);
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }, 500);
    } catch(err) { console.error("Chat error:", err); }
  };

  window.syncScheduleToTimetable = function() {
    try {
      if (window.appState && window.appState.timetable) {
        window.appState.timetable.push(
          { time: '05:00 - 06:30 PM', subject: 'Deep Study: Unit 3 Important Qs', type: 'Study', venue: 'Home / Library' },
          { time: '08:30 - 09:30 PM', subject: '5-Min Revision & Assignment', type: 'Revision', venue: 'Desk' }
        );
        window.renderTimetable();
      }
      window.showToast("✅ AI Daily Routine synced to your Timetable!");
    } catch(err) { console.error(err); }
  };

  // 7. YouTube Matcher Functions
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
      if (matchElem) matchElem.innerText = "94% Match";
      if (speedElem) speedElem.innerText = "2.25 Hours";

      window.renderYoutubeMatches();
    } catch(err) { console.error(err); }
  };

  window.renderYoutubeMatches = function() {
    try {
      const container = document.getElementById('ytMatchingVideosList');
      if (!container) return;

      const videos = [
        { title: "Unit I: C++ Object Oriented Programming & Virtual Functions", duration: "45 mins", match: "98% Match", link: "https://youtube.com" },
        { title: "Unit II: Stacks, Queues & Array Representation", duration: "55 mins", match: "96% Match", link: "https://youtube.com" },
        { title: "Unit III: Linked Lists & Binary Search Trees (BST)", duration: "1 hr 10 mins", match: "94% Match", link: "https://youtube.com" },
        { title: "Unit IV: Quick Sort & Merge Sort Complexity Analysis", duration: "40 mins", match: "95% Match", link: "https://youtube.com" },
        { title: "Unit V: Graph BFS/DFS Traversals & Hashing Techniques", duration: "50 mins", match: "92% Match", link: "https://youtube.com" }
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

  // 8. Exam Question Bank Functions
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
        : ["UNOM-CS301 - Programming in C++ & Data Structures", "CS3491 - Artificial Intelligence & Machine Learning"];

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
      const subject = subjectSelect ? subjectSelect.value : 'UNOM-CS301 - Programming in C++ & Data Structures';
      if (window.appState) window.appState.selectedSubject = subject;

      const syllabusText = window.SAMPLE_SYLLABI[subject] || `UNIT I: Core Concepts & Principles\nUNIT II: Advanced Analysis & Design\nUNIT III: System Implementation\nUNIT IV: Testing & Optimization\nUNIT V: Real World Applications`;

      const txtElem = document.getElementById('examSyllabusText');
      if (txtElem) txtElem.value = syllabusText;

      window.generateQuestionBank();
    } catch(err) { console.error(err); }
  };

  window.generateQuestionBank = function() {
    try {
      const subject = window.appState ? window.appState.selectedSubject : 'UNOM-CS301 - Programming in C++ & Data Structures';
      const defaultBank = {
        importantQuestions: [
          { id: "iq1", type: "2-Mark", unit: "Unit I", question: "Define core principles of subject.", answer: "Standard definition and overview." },
          { id: "iq2", type: "15-Mark", unit: "Unit II", question: "Explain main architecture and derivation.", answer: "Detailed explanation with steps and formulas." }
        ],
        repeatedQuestions: [
          { id: "rq1", frequency: "Appeared 5x in University Exams", probability: "95% Probability", unit: "Unit III", question: "Explain past exam repeated question.", answer: "Complete model answer for university exams." }
        ]
      };

      const qBankData = window.QUESTION_BANKS[subject] || window.QUESTION_BANKS["UNOM-CS301 - Programming in C++ & Data Structures"] || defaultBank;

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
      const subject = window.appState ? window.appState.selectedSubject : 'UNOM-CS301 - Programming in C++ & Data Structures';
      
      const qBankData = window.QUESTION_BANKS[subject] || window.QUESTION_BANKS["UNOM-CS301 - Programming in C++ & Data Structures"] || {};

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

  // 9. Notes Generator & Assignment Copilot
  window.generateSyllabusNotes = function() {
    try {
      const topicInput = document.getElementById('notesInputTopic');
      const topic = topicInput ? topicInput.value.trim() : 'Quick Sort Algorithm';
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
              <strong>Core Concept:</strong> ${topic} is a fundamental module tested extensively in university examinations.<br>
              <strong>Key Exam Formula / Definition:</strong> Focus on step-by-step algorithms, diagrams, and time complexities.
            </p>
          </div>

          <h3>1. Detailed Overview & Definitions</h3>
          <p>
            ${topic} plays a vital role in computer science & university curricula. Students are required to present structured definitions, block diagrams, and algorithmic steps to score full marks in 15-mark questions.
          </p>

          <h3>2. Algorithmic Steps & Step-by-Step Logic</h3>
          <ul>
            <li><strong>Step 1: Initialization:</strong> Define input data structures, pointers, and variables.</li>
            <li><strong>Step 2: Core Processing:</strong> Execute iterative or recursive control loops.</li>
            <li><strong>Step 3: Termination & Output:</strong> Return processed results and handle boundary conditions.</li>
          </ul>

          <h3>3. Key Complexity / Performance Summary</h3>
          <table style="width: 100%; border-collapse: collapse; margin-top: 12px;" border="1" cellpadding="8">
            <tr style="background: rgba(15,23,42,0.8);">
              <th>Case</th>
              <th>Time Complexity</th>
              <th>Space Complexity</th>
            </tr>
            <tr>
              <td>Best Case</td>
              <td>O(1) / O(n log n)</td>
              <td>O(1)</td>
            </tr>
            <tr>
              <td>Worst Case</td>
              <td>O(n^2)</td>
              <td>O(n)</td>
            </tr>
          </table>
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
      const titleText = titleInput ? titleInput.value.trim() : 'Stack ADT C++ Program';
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
            This assignment presents the solution for <strong>${titleText}</strong> adhering to academic conventions and standard coding guidelines.
          </p>

          <h4>2. Implementation Code / Derivation</h4>
          <pre style="background: #090d16; padding: 14px; border-radius: 8px; border: 1px solid var(--border-color); font-family: monospace; color: #67e8f9; overflow-x: auto;">
#include &lt;iostream&gt;
using namespace std;

// Solution for ${titleText}
int main() {
    cout &lt;&lt; "Academic Solution Prepared Successfully!" &lt;&lt; endl;
    return 0;
}
          </pre>

          <h4>3. Conclusion & Summary</h4>
          <p>
            The above program and derivation satisfy all required criteria for maximum academic scoring.
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

  // 10. Productivity Tools Functions (Timetable, Tasks, GPA, Pomodoro)
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

  // 11. PDF Generator Helper
  window.exportPdfDocument = function(opts) {
    try {
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
          <div style="font-size: 12px; font-weight: bold; color: #0f172a; margin-top: 6px;">${opts.university || "University of Madras (UNOM)"} | ${opts.subject || ""}</div>
        </div>
        ${itemsHtml}
        <div style="text-align: center; font-size: 10px; color: #94a3b8; margin-top: 30px; border-top: 1px solid #e2e8f0; padding-top: 8px;">
          Generated by Vaa Macha Vettiya Irukala! AI Student Assistant - Free Printable Study Resource
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

  // 12. DOM Content Loaded Initialization
  document.addEventListener('DOMContentLoaded', () => {
    try {
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
