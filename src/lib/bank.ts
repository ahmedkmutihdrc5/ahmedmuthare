import { Question } from '../types';

export const QUESTION_BANK: Partial<Question>[] = [
  // --- CHAPTER 4: LINKED LISTS (1-15) ---
  {
    id: "Q1",
    type: "standard",
    text: "What is the time complexity (التعقيد الزمني) to find an element in a singly linked list (القائمة المرتبطة البسيطة) of size n?",
    textArabic: "ما هو التعقيد الزمني لإيجاد عنصر في قائمة مرتبطة بسيطة حجمها n؟",
    textArabicSimple: "بالقائمة المرتبطة العادية، لازم تمشي من أول وحدة لآخر وحدة حتى تلكي اللي تريده، فتاخذ وقت n.",
    options: [
      { id: "A", text: "O(1)", textArabic: "O(1)" },
      { id: "B", text: "O(log n)", textArabic: "O(log n)" },
      { id: "C", text: "O(n)", textArabic: "O(n) ✅" },
      { id: "D", text: "O(n log n)", textArabic: "O(n log n)" }
    ],
    correctOptionId: "C",
    explanation: "Searching in a singly linked list requires linear time O(n) because you must traverse nodes one by one.",
    keywords: [{ en: "Time Complexity", ar: "التعقيد الزمني" }, { en: "Singly Linked List", ar: "القائمة المرتبطة البسيطة" }]
  },
  {
    id: "Q2",
    type: "standard",
    text: "A node (العقدة) in a doubly linked list (القائمة المرتبطة المزدوجة) contains how many pointer (المؤشر) fields?",
    textArabic: "العقدة في القائمة المرتبطة المزدوجة تحتوي على كم حقل مؤشر؟",
    textArabicSimple: "المزدوجة يعني تباوع كدام وتراقب وره، فعدها مؤشرين للـ Next والـ Prev.",
    options: [
      { id: "A", text: "1", textArabic: "1" },
      { id: "B", text: "2", textArabic: "2 ✅" },
      { id: "C", text: "3", textArabic: "3" },
      { id: "D", text: "0", textArabic: "0" }
    ],
    correctOptionId: "B",
    explanation: "A doubly linked list node has two pointers: one to the next node and one to the previous node.",
    keywords: [{ en: "Node", ar: "العقدة" }, { en: "Pointer", ar: "المؤشر" }, { en: "Doubly Linked List", ar: "القائمة المرتبطة المزدوجة" }]
  },
  {
    id: "Q3",
    type: "standard",
    text: "In a circular linked list (القائمة المرتبطة الدائرية), the last node (العقدة) points back to?",
    textArabic: "في القائمة المرتبطة الدائرية، العقدة الأخيرة تشير إلى؟",
    textArabicSimple: "هي دائرية، يعني الحلقة مسدودة. آخر وحدة ترجع تكمش ايد أول وحدة (Root).",
    options: [
      { id: "A", text: "None", textArabic: "لا شيء" },
      { id: "B", text: "The root (الجذر)", textArabic: "الجذر ✅" },
      { id: "C", text: "The middle node", textArabic: "العقدة الوسطى" },
      { id: "D", text: "Itself", textArabic: "نفسها" }
    ],
    correctOptionId: "B",
    explanation: "In a circular linked list, the tail node's next pointer points to the head (root) node.",
    keywords: [{ en: "Circular Linked List", ar: "القائمة المرتبطة الدائرية" }, { en: "Root", ar: "الجذر" }]
  },
  
  // --- CHAPTER 5: STACK & QUEUE (16-30) ---
  {
    id: "Q16",
    type: "standard",
    text: "Which data structure (هيكل بيانات) follows the LIFO (Last In, First Out) principle?",
    textArabic: "أي هيكل بيانات يتبع مبدأ LIFO؟",
    textArabicSimple: "مثل ماعون الأكل، آخر واحد تغسله وتخليه فوك، هو أول واحد راح تستخدمه.",
    options: [
      { id: "A", text: "Queue (الطابور)", textArabic: "الطابور" },
      { id: "B", text: "Stack (المكدس)", textArabic: "المكدس ✅" },
      { id: "C", text: "Tree (الشجرة)", textArabic: "الشجرة" },
      { id: "D", text: "Graph (الرسم البياني)", textArabic: "الرسم البياني" }
    ],
    correctOptionId: "B",
    explanation: "A stack is a LIFO (Last In, First Out) structure where the most recently added item is the first to be removed.",
    keywords: [{ en: "LIFO", ar: "Last In, First Out" }, { en: "Stack", ar: "المكدس" }]
  },
  {
    id: "Q17",
    type: "standard",
    text: "The enqueue (إضافة) operation in a queue (الطابور) adds an element to the?",
    textArabic: "عملية الإضافة في الطابور تضيف العنصر إلى؟",
    textArabicSimple: "بالطابور (السرى)، اللي يجي جديد يوكف بآخر السرى (Rear).",
    options: [
      { id: "A", text: "Front", textArabic: "المقدمة" },
      { id: "B", text: "Rear (الذيل)", textArabic: "الذيل ✅" },
      { id: "C", text: "Middle", textArabic: "المنتصف" },
      { id: "D", text: "Root", textArabic: "الجذر" }
    ],
    correctOptionId: "B",
    explanation: "Enqueue adds elements to the back (rear/tail) of the queue.",
    keywords: [{ en: "Enqueue", ar: "إضافة" }, { en: "Queue", ar: "الطابور" }]
  },

  // --- CHAPTER 6: TREES (31-45) ---
  {
    id: "Q31",
    type: "standard",
    text: "In a BST (شجرة البحث الثنائية), the left child (الابن) of a node (العقدة) must be?",
    textArabic: "في شجرة البحث الثنائية، الابن الأيسر للعقدة يجب أن يكون؟",
    textArabicSimple: "بالـ BST، الصغير يروح يسار والكبير يروح يمين.",
    options: [
      { id: "A", text: "Greater than the parent (الأب)", textArabic: "أكبر من الأب" },
      { id: "B", text: "Less than the parent (الأب)", textArabic: "أصغر من الأب ✅" },
      { id: "C", text: "Equal to the parent", textArabic: "مساوٍ للأب" },
      { id: "D", text: "Zero", textArabic: "صفر" }
    ],
    correctOptionId: "B",
    explanation: "In a Binary Search Tree (BST), the left child must have a value less than its parent.",
    keywords: [{ en: "BST", ar: "شجرة البحث الثنائية" }, { en: "Parent", ar: "الأب" }, { en: "Child", ar: "الابن" }]
  },

  // --- CROSS-CHAPTER / MIXED (46-55) ---
  {
    id: "Q46",
    text: "When implementing a queue (الطابور) using two stacks (مكدسين) , the amortized time complexity (التعقيد الزمني المطفأ) of a single dequeue (إزالة) operation is?",
    textArabic: "عند تنفيذ طابور باستخدام مكدسين، ما هو التعقيد الزمني المطفأ لعملية إزالة واحدة؟",
    options: [
      { id: "A", text: "O(n)", textArabic: "O(n)" },
      { id: "B", text: "O(1)", textArabic: "O(1) ✅" },
      { id: "C", text: "O(log n)", textArabic: "O(log n)" },
      { id: "D", text: "O(n²)", textArabic: "O(n²)" }
    ],
    correctOptionId: "B",
    explanation: "While a single dequeue might take O(n) in the worst case (transferring all items), the amortized time over many operations is O(1).",
    keywords: [{ en: "Queue", ar: "الطابور" }, { en: "Stack", ar: "المكدس" }, { en: "Amortized Time Complexity", ar: "التعقيد الزمني المطفأ" }]
  },

  // --- CHAPTER 8: GRAPHS & HEAP ---
  {
    id: "Q61",
    text: "Which traversal (الاجتياز) of a graph (الرسم البياني) uses a queue (الطابور)?",
    textArabic: "أي اجتياز للرسم البياني يستخدم الطابور؟",
    options: [
      { id: "A", text: "BFS (اتساع أول)", textArabic: "اتساع أول ✅" },
      { id: "B", text: "DFS (عمق أول)", textArabic: "عمق أول" },
      { id: "C", text: "Quick Sort", textArabic: "الفرز السريع" },
      { id: "D", text: "Binary Search", textArabic: "البحث الثنائي" }
    ],
    correctOptionId: "A",
    explanation: "Breadth-First Search (BFS) uses a queue to traverse level by level.",
    keywords: [{ en: "Traversal", ar: "الاجتياز" }, { en: "BFS", ar: "اتساع أول" }, { en: "Queue", ar: "الطابور" }]
  },

  // --- CHAPTER 10: SORTING ---
  {
    id: "Q81",
    text: "What is the worst-case time complexity (التعقيد الزمني) of Quick Sort (الفرز السريع)?",
    textArabic: "ما هو التعقيد الزمني لأسوأ حالة في الفرز السريع؟",
    options: [
      { id: "A", text: "O(n log n)", textArabic: "O(n log n)" },
      { id: "B", text: "O(n)", textArabic: "O(n)" },
      { id: "C", text: "O(n²)", textArabic: "O(n²) ✅" },
      { id: "D", text: "O(1)", textArabic: "O(1)" }
    ],
    correctOptionId: "C",
    explanation: "Quick Sort's worst case occurs when the pivot always picks the smallest or largest element, leading to O(n²) complexity.",
    keywords: [{ en: "Time Complexity", ar: "التعقيد الزمني" }, { en: "Quick Sort", ar: "الفرز السريع" }]
  },
  {
    id: "Q82",
    text: "A sorting (الترتيب) algorithm is called stable (مستقر) if it?",
    textArabic: "تسمى خوارزمية الترتيب مستقرة إذا كانت؟",
    options: [
      { id: "A", text: "Always takes O(n log n)", textArabic: "دائماً تأخذ O(n log n)" },
      { id: "B", text: "Preserves the relative order of equal elements", textArabic: "تحافظ على الترتيب النسبي للعناصر المتساوية ✅" },
      { id: "C", text: "Uses no extra space", textArabic: "لا تستخدم مساحة إضافية" },
      { id: "D", text: "Can sort nodes (العقدة) in a list", textArabic: "يمكنها ترتيب العقد في قائمة" }
    ],
    correctOptionId: "B",
    explanation: "Stability means that equal keys stay in the same relative order as they were in the input.",
    keywords: [{ en: "Sorting", ar: "الترتيب" }, { en: "Stable", ar: "مستقر" }]
  }
];
