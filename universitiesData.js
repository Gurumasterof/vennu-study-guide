// Sample University & Question Bank Dataset for Vaa Macha Vettiya Irukala App

window.UNIVERSITIES_DATA = {
  "anna_univ": {
    name: "Anna University (Regulation 2021/2017)",
    departments: ["Computer Science & Engineering", "Information Technology", "Electronics & Communication", "Mechanical Engineering", "Electrical & Electronics", "Civil Engineering", "Arts & Science"],
    subjects: {
      "Computer Science & Engineering": [
        "CS3491 - Artificial Intelligence & Machine Learning",
        "CS3391 - Object Oriented Programming",
        "CS3451 - Data Structures & Algorithms",
        "CS3591 - Computer Networks",
        "MA3354 - Discrete Mathematics",
        "CS3401 - Database Management Systems"
      ],
      "Information Technology": [
        "IT3401 - Web Essentials & Frontend Frameworks",
        "CS3491 - Artificial Intelligence & Machine Learning",
        "IT3501 - Cloud Computing & DevOps",
        "CS3391 - Object Oriented Programming"
      ]
    }
  },
  "vtu": {
    name: "Visvesvaraya Technological University (VTU)",
    departments: ["Computer Science", "Information Science", "ECE", "EEE", "Mechanical"],
    subjects: {
      "Computer Science": [
        "21CS51 - Automata Theory & Computability",
        "21CS52 - Computer Networks & Security",
        "21CS53 - Database Management Systems",
        "21CS54 - Artificial Intelligence & Machine Learning"
      ]
    }
  },
  "jntu": {
    name: "JNTU (Hyderabad / Kakinada / Anantapur)",
    departments: ["CSE", "ECE", "IT", "Mechanical", "Civil"],
    subjects: {
      "CSE": [
        "CS401 - Operating Systems",
        "CS402 - Design and Analysis of Algorithms",
        "CS403 - Software Engineering",
        "CS404 - Java Programming"
      ]
    }
  },
  "mumbai_univ": {
    name: "University of Mumbai",
    departments: ["Computer Engineering", "IT", "EXCT", "CIVIL"],
    subjects: {
      "Computer Engineering": [
        "CSC501 - Computer Networks",
        "CSC502 - Data Warehousing & Mining",
        "CSC503 - Software Engineering",
        "CSC504 - Theoretical Computer Science"
      ]
    }
  },
  "autonomous": {
    name: "Autonomous / Deemed Universities (SRM, VIT, PSG, SASTRA, Amrita, etc.)",
    departments: ["Engineering & Technology", "Arts & Science", "Management & Business", "Medical & Allied"],
    subjects: {
      "Engineering & Technology": [
        "21CSC201 - Data Structures & Algorithms",
        "21CSC202 - Object Oriented Analysis & Design",
        "21MAC101 - Applied Calculus & Linear Algebra",
        "21CSC301 - Full Stack Web Development"
      ]
    }
  }
};

window.SAMPLE_SYLLABI = {
  "CS3491 - Artificial Intelligence & Machine Learning": `UNIT I: PROBLEM SOLVING & HEURISTIC SEARCH
Introduction to AI, Problem Spaces, Uninformed Search (BFS, DFS), Informed Search (A* Search, AO*, Greedy Best First), Heuristic Functions, Constraint Satisfaction Problems, Adversarial Search & Minimax Algorithm with Alpha-Beta Pruning.

UNIT II: KNOWLEDGE REPRESENTATION & REASONING
Propositional Logic, First-Order Logic (FOL), Forward & Backward Chaining, Resolution, Ontological Engineering, Unification, Knowledge Representation using Semantic Networks & Frames.

UNIT III: MACHINE LEARNING FUNDAMENTALS
Supervised vs Unsupervised Learning, Linear Regression, Logistic Regression, Decision Trees, Information Gain, Entropy, Random Forests, Support Vector Machines (SVM), K-Nearest Neighbors (KNN), Overfitting & Underfitting, Evaluation Metrics (Precision, Recall, F1-Score, ROC-AUC).

UNIT IV: DEEP LEARNING & NEURAL NETWORKS
Perceptrons, Multilayer Perceptron (MLP), Backpropagation Algorithm, Activation Functions (ReLU, Sigmoid, Softmax), Convolutional Neural Networks (CNN) for Computer Vision, Recurrent Neural Networks (RNN) & LSTM for NLP.

UNIT V: REINFORCEMENT LEARNING & AI ETHICS
Q-Learning, Markov Decision Process (MDP), Reward Functions, Policy Iteration, Generative AI & LLMs overview, AI Ethics, Bias, Fairness, and Explainable AI (XAI).`,

  "CS3451 - Data Structures & Algorithms": `UNIT I: LINEAR DATA STRUCTURES
Abstract Data Types (ADTs), Array implementation, Singly Linked List, Doubly Linked List, Circular Linked List, Stack ADT (Array & Linked List implementation), Queue ADT, Circular Queue, Priority Queue.

UNIT II: TREE STRUCTURES
Trees, Binary Trees, Binary Search Tree (BST) Operations, AVL Trees & Rotations, B-Trees, B+ Trees, Binary Heaps (Min-Heap, Max-Heap), Heap Sort.

UNIT III: GRAPH ALGORITHMS
Graph Representations (Adjacency Matrix & List), Graph Traversals (BFS, DFS), Topological Sort, Minimum Spanning Trees (Prim's & Kruskal's Algorithms), Single Source Shortest Path (Dijkstra's Algorithm, Bellman-Ford), All-Pairs Shortest Path (Floyd-Warshall).

UNIT IV: ALGORITHM DESIGN TECHNIQUES
Asymptotic Notations (Big-O, Omega, Theta), Divide and Conquer (Merge Sort, Quick Sort), Greedy Method (Fractional Knapsack, Huffman Coding), Dynamic Programming (0/1 Knapsack, Longest Common Subsequence).

UNIT V: HASHING & ADVANCED SEARCHING
Hash Functions, Collision Resolution Techniques (Separate Chaining, Open Addressing: Linear Probing, Quadratic Probing, Double Hashing), Rehashing, Trie Data Structure, Pattern Matching Algorithms (KMP Algorithm).`
};

window.QUESTION_BANKS = {
  "CS3491 - Artificial Intelligence & Machine Learning": {
    importantQuestions: [
      {
        id: "iq1",
        type: "2-Mark",
        unit: "Unit I",
        question: "Define Heuristic Function and explain its role in A* search algorithm.",
        answer: "A heuristic function h(n) estimates the cost of the cheapest path from state n to the goal state. In A* search, evaluation function f(n) = g(n) + h(n), where g(n) is the exact cost from start to n. If h(n) is admissible (never overestimates real cost), A* is guaranteed to find the optimal shortest path."
      },
      {
        id: "iq2",
        type: "2-Mark",
        unit: "Unit III",
        question: "Differentiate between Overfitting and Underfitting in Machine Learning.",
        answer: "Overfitting occurs when a model learns the training data too well, including noise, resulting in high training accuracy but low generalization on test data. Underfitting happens when a model is too simple to capture underlying patterns, causing poor performance on both training and testing datasets."
      },
      {
        id: "iq3",
        type: "13/16-Mark",
        unit: "Unit I",
        question: "Explain A* Search Algorithm with an illustrative example. Derive proof of its admissibility.",
        answer: "1. Algorithm Overview:\n   - Maintained lists: OPEN (nodes to evaluate) and CLOSED (evaluated nodes).\n   - Node scoring: f(n) = g(n) + h(n).\n   - Always expands node with lowest f(n).\n\n2. Step-by-Step Execution:\n   - Step 1: Place start node S in OPEN. g(S)=0, f(S)=h(S).\n   - Step 2: If OPEN is empty, return failure.\n   - Step 3: Remove node n with lowest f(n) from OPEN, add to CLOSED.\n   - Step 4: If n is Goal state, reconstruct path and exit.\n   - Step 5: Expand n. For each successor n', calculate g(n') = g(n) + cost(n,n'). Update OPEN list if better path found.\n\n3. Admissibility Proof:\n   - If h(n) <= h*(n) for all n, A* using TREE-SEARCH is optimal. If h(n) is consistent (satisfies triangle inequality), GRAPH-SEARCH is optimal.\n\n4. Key Formula Summary:\n   f(n) = g(n) + h(n)\n   Condition for Admissibility: 0 <= h(n) <= h*(n)"
      },
      {
        id: "iq4",
        type: "13/16-Mark",
        unit: "Unit III",
        question: "Detail Decision Tree Learning using ID3 algorithm. Calculate Information Gain and Entropy for a sample dataset.",
        answer: "1. Entropy Formula:\n   H(S) = - sum( p_i * log2(p_i) )\n   where p_i is probability of class i.\n\n2. Information Gain Formula:\n   Gain(S, A) = H(S) - sum( (|S_v| / |S|) * H(S_v) )\n\n3. Algorithm Steps:\n   - Step 1: Calculate Total Entropy H(S) of target attribute.\n   - Step 2: For each feature A, calculate weighted average entropy after split.\n   - Step 3: Select feature with highest Information Gain as root node.\n   - Step 4: Recursively split child branches until pure nodes or stopping criteria met."
      }
    ],
    repeatedQuestions: [
      {
        id: "rq1",
        frequency: "Appeared 6x (2020-2025)",
        probability: "98% Probability in Exam",
        unit: "Unit IV",
        question: "Explain Backpropagation algorithm in Multilayer Perceptrons with complete mathematical derivation.",
        answer: "1. Forward Pass:\n   Input x -> Hidden Layer h = sigma(W1 * x + b1) -> Output y_hat = sigma(W2 * h + b2).\n\n2. Error Calculation:\n   Loss L = 0.5 * sum( (y - y_hat)^2 ).\n\n3. Backward Pass (Gradient Chain Rule):\n   - Output layer weight gradient: dL/dW2 = (dL/dy_hat) * (dy_hat/dz2) * (dz2/dW2).\n   - Hidden layer weight gradient: dL/dW1 = (dL/dh) * (dh/dz1) * (dz1/dW1).\n\n4. Weight Update Rule:\n   W_new = W_old - alpha * (dL/dW), where alpha is learning rate.\n\n5. Exam Tip: Draw the multi-layer neural network diagram with node labels x, z1, h, z2, y_hat to score full marks!"
      },
      {
        id: "rq2",
        frequency: "Appeared 5x (2021, 2022, 2023, 2024, 2025)",
        probability: "95% Probability in Exam",
        unit: "Unit II",
        question: "Convert the following English sentences into First-Order Predicate Logic (FOL) and perform Resolution Refutation.",
        answer: "1. Sample Sentences & FOL Translations:\n   - 'Every student likes AI': ∀x (Student(x) → Likes(x, AI))\n   - 'Ramu is a student': Student(Ramu)\n   - 'Goal: Ramu likes AI': Likes(Ramu, AI)\n\n2. Convert to Conjunctive Normal Form (CNF):\n   - Clause 1: ¬Student(x) ∨ Likes(x, AI)\n   - Clause 2: Student(Ramu)\n   - Negated Goal Clause: ¬Likes(Ramu, AI)\n\n3. Resolution Step:\n   - Resolve Clause 1 & Clause 2 with substitution {x/Ramu} -> Likes(Ramu, AI)\n   - Resolve with Negated Goal Clause -> Empty Clause (□).\n   - Contradiction achieved, hence Goal is PROVED!"
      },
      {
        id: "rq3",
        frequency: "Appeared 4x in Past University Papers",
        probability: "90% Probability in Exam",
        unit: "Unit V",
        question: "Explain Q-Learning algorithm and state the Q-value update equation.",
        answer: "1. Q-Learning Definition:\n   Model-free reinforcement learning algorithm used to find optimal action-selection policy for any finite Markov Decision Process.\n\n2. Bellman Q-Update Equation:\n   Q(s, a) <- Q(s, a) + alpha * [ r + gamma * max_a'( Q(s', a') ) - Q(s, a) ]\n   where:\n   - alpha: Learning rate (0 < alpha <= 1)\n   - r: Immediate reward\n   - gamma: Discount factor (0 <= gamma < 1)\n   - max_a' Q(s', a'): Maximum future reward in next state s'."
      }
    ]
  }
};
