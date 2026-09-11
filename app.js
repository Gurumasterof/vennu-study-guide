// Vaa Macha Vettiya Irukala! - Core Application Logic Engine

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

  // 2. Global Toast Utility
  window.showToast = window.showToast || function(message) {
    try {
      const toast = document.getElementById('toast');
      if (!toast) return;
      toast.innerText = message;
      toast.style.display = 'block';
      setTimeout(() => { toast.style.display = 'none'; }, 3500);
    } catch(e) { console.error(e); }
  };

  // 3. Global Share Utility
  window.shareWithFriends = window.shareWithFriends || function() {
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
})();
