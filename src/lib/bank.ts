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
      { id: "C", text: "O(n)", textArabic: "O(n)" },
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
      { id: "B", text: "2", textArabic: "2" },
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
      { id: "B", text: "The root (الجذر)", textArabic: "الجذر" },
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
      { id: "B", text: "Stack (المكدس)", textArabic: "المكدس" },
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
      { id: "B", text: "Rear (الذيل)", textArabic: "الذيل" },
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
      { id: "B", text: "Less than the parent (الأب)", textArabic: "أصغر من الأب" },
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
      { id: "B", text: "O(1)", textArabic: "O(1)" },
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
      { id: "A", text: "BFS (اتساع أول)", textArabic: "اتساع أول" },
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
      { id: "C", text: "O(n²)", textArabic: "O(n²)" },
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
      { id: "B", text: "Preserves the relative order of equal elements", textArabic: "تحافظ على الترتيب النسبي للعناصر المتساوية" },
      { id: "C", text: "Uses no extra space", textArabic: "لا تستخدم مساحة إضافية" },
      { id: "D", text: "Can sort nodes (العقدة) in a list", textArabic: "يمكنها ترتيب العقد في قائمة" }
    ],
    correctOptionId: "B",
    explanation: "Stability means that equal keys stay in the same relative order as they were in the input.",
    keywords: [{ en: "Sorting", ar: "الترتيب" }, { en: "Stable", ar: "مستقر" }]
  },

  // --- NEW QUESTIONS BATCH (University Level) ---

  // Chapter 4: Lists
  {
    id: "Q4",
    type: "standard",
    text: "Which structure allows non-contiguous (غير متتالية) memory storage for elements, unlike an array (المصفوفة)?",
    textArabic: "أي هيكل يسمح بتخزين العناصر في ذاكرة غير متتالية، على عكس المصفوفة؟",
    textArabicSimple: "المصفوفة مثل العمارة، الشقق لازم وحدة ورا الثانية. الـ Pointer structure مثل البيوت المتوزعة، كل بيت يدلنا على اللي بعده بالمؤشر.",
    options: [
      { id: "A", text: "Array (المصفوفة)", textArabic: "المصفوفة" },
      { id: "B", text: "Pointer structure (هيكل المؤشرات)", textArabic: "هيكل المؤشرات" },
      { id: "C", text: "Binary Search", textArabic: "البحث الثنائي" },
      { id: "D", text: "Bubble Sort", textArabic: "فرز الفقاعات" }
    ],
    correctOptionId: "B",
    explanation: "Pointer structures spread items around memory and use links to connect them, unlike contiguous arrays.",
    keywords: [{ en: "Pointer", ar: "المؤشر" }, { en: "Array", ar: "المصفوفة" }]
  },
  {
    id: "Q5",
    type: "standard",
    text: "What is the time complexity (التعقيد الزمني) of deleting the head (الجذر) node (العقدة) in a singly linked list (القائمة المرتبطة البسيطة)?",
    textArabic: "ما هو التعقيد الزمني لحذف عقدة الرأس في قائمة مرتبطة بسيطة؟",
    textArabicSimple: "لانك بالبداية ومأشر على أول وحدة، بس تطفر للي وراها وتخلص منها بلحظة O(1).",
    options: [
      { id: "A", text: "O(n)", textArabic: "O(n)" },
      { id: "B", text: "O(log n)", textArabic: "O(log n)" },
      { id: "C", text: "O(1)", textArabic: "O(1)" },
      { id: "D", text: "O(n²)", textArabic: "O(n²)" }
    ],
    correctOptionId: "C",
    explanation: "Deleting the head node only requires updating the pointer to the next node, which is O(1).",
    keywords: [{ en: "Singly Linked List", ar: "القائمة المرتبطة البسيطة" }, { en: "Complexity", ar: "التعقيد" }]
  },

  // Chapter 5: Stack & Queue
  {
    id: "Q18",
    type: "standard",
    text: "In expression trees (شجرة التعبير), which data structure (هيكل بيانات) is used to parse a Reverse Polish (البولندي العكسي) expression?",
    textArabic: "في أشجار التعبير، أي هيكل بيانات يستخدم لتحليل تعبير البولندي العكسي؟",
    textArabicSimple: "تخيل المعادلة مثل كومة أرقام، تستخدم الـ Stack حتى تخزن الأرقام ولما يجي رمز حسابي تسحب آخر ثنين وتحسبهم.",
    options: [
      { id: "A", text: "Queue (الطابور)", textArabic: "الطابور" },
      { id: "B", text: "Stack (المكدس)", textArabic: "المكدس" },
      { id: "C", text: "Heap (الكومة)", textArabic: "الكومة" },
      { id: "D", text: "Graph (الرسم البياني)", textArabic: "الرسم البياني" }
    ],
    correctOptionId: "B",
    explanation: "Parsing RPN (post-fix) into an expression tree is traditionally done using a Stack to manage operands and operators.",
    keywords: [{ en: "Stack", ar: "المكدس" }, { en: "Expression Tree", ar: "شجرة التعبير" }]
  },
  {
    id: "Q19",
    type: "standard",
    text: "Which of the following is a real-world application (تطبيق) of a queue (الطابور)?",
    textArabic: "أي مما يلي هو تطبيق حقيقي للطابور؟",
    textArabicSimple: "أي شي بي 'سرة' وبالدور هو طابور، مثل طابعة المكتب اللي تطبع الملفات حسب منو وصل أول (FIFO).",
    options: [
      { id: "A", text: "Browser History (سجل المتصفح)", textArabic: "سجل المتصفح" },
      { id: "B", text: "Undo operation (خيار التراجع)", textArabic: "خيار التراجع" },
      { id: "C", text: "Printer scheduler (جدولة الطابعة)", textArabic: "جدولة الطابعة" },
      { id: "D", text: "Recursion (العودية)", textArabic: "العودية" }
    ],
    correctOptionId: "C",
    explanation: "Printer spoolers and OS process scheduling use Queues (FIFO) to handle requests in order.",
    keywords: [{ en: "Queue", ar: "الطابور" }, { en: "FIFO", ar: "FIFO" }]
  },

  // Chapter 6: Trees
  {
    id: "Q32",
    type: "standard",
    text: "The number of edges (حافة) from the root (الجذر) to a specific node (العقدة) is called?",
    textArabic: "عدد الحواف من الجذر إلى عقدة معينة يسمى؟",
    textArabicSimple: "تخيل الشجرة عمارة، الجذر هو السطح، من تنزل لآخر طابق هذا النزول يسمى العمق (Depth).",
    options: [
      { id: "A", text: "Height (الارتفاع)", textArabic: "الارتفاع" },
      { id: "B", text: "Depth (العمق)", textArabic: "العمق" },
      { id: "C", text: "Degree (الدرجة)", textArabic: "الدرجة" },
      { id: "D", text: "Level (المستوى)", textArabic: "المستوى" }
    ],
    correctOptionId: "B",
    explanation: "Depth measures distance from the root, while Height measures distance to the deepest leaf.",
    keywords: [{ en: "Depth", ar: "العمق" }, { en: "Root", ar: "الجذر" }]
  },
  {
    id: "Q33",
    type: "standard",
    text: "In a min-heap (الكومة الصغرى), where is the largest (الأكبر) element always found?",
    textArabic: "في الكومة الصغرى، أين نجد العنصر الأكبر دائماً؟",
    textArabicSimple: "بالـ Min-heap، الصغير هو الملك وواكف فوك بالجذر. الكبار راح يندفعون لآخر شي وهي الأوراق.",
    options: [
      { id: "A", text: "At the root (الجذر)", textArabic: "عند الجذر" },
      { id: "B", text: "At index 1 (الفهرس 1)", textArabic: "عند الفهرس 1" },
      { id: "C", text: "In a leaf (ورقة)", textArabic: "في إحدى الأوراق" },
      { id: "D", text: "In the left subtree", textArabic: "في الشجرة اليسرى" }
    ],
    correctOptionId: "C",
    explanation: "In a Min-heap, the smallest value is at the root, so larger values must reside in the leaf nodes.",
    keywords: [{ en: "Min-heap", ar: "الكومة الصغرى" }, { en: "Leaf", ar: "ورقة" }]
  },

  // Chapter 8: Graphs
  {
    id: "Q62",
    type: "standard",
    text: "Which graph (الرسم البياني) representation (تمثيل) is best for sparse (قليلة الحواف) graphs to save space?",
    textArabic: "أي تمثيل للرسم البياني هو الأفضل للرسوم قليلة الحواف لتوفير المساحة؟",
    textArabicSimple: "لو عندك هواية نقاط بس علاقاتهم قليلة، الـ Adjacency list أحسن لأنك تسجل بس اللي بيناتهم علاقة، مو مثل المصفوفة تحجز مكان للكل.",
    options: [
      { id: "A", text: "Adjacency Matrix (مصفوفة الجوار)", textArabic: "مصفوفة الجوار" },
      { id: "B", text: "Adjacency List (قائمة الجوار)", textArabic: "قائمة الجوار" },
      { id: "C", text: "Expression Tree", textArabic: "شجرة التعبير" },
      { id: "D", text: "Stack", textArabic: "المكدس" }
    ],
    correctOptionId: "B",
    explanation: "Adjacency Lists are more memory-efficient for sparse graphs where |E| is much smaller than |V|².",
    keywords: [{ en: "Adjacency List", ar: "قائمة الجوار" }, { en: "Graph", ar: "الرسم البياني" }]
  },
  {
    id: "Q63",
    type: "standard",
    text: "In DFS (عمق أول) traversal (الاجتياز), what is used to backtrack (الرجوع) once a dead end is reached?",
    textArabic: "في اجتياز DFS، ما الذي يستخدم للرجوع عند الوصول لنهاية مسدودة؟",
    textArabicSimple: "الـ DFS مثل متاهة، تدخل للأخير، ولما تنسد بوجهك لازم تمسح وتشوف وين جنت (Backtrack) باستخدام الـ Stack.",
    options: [
      { id: "A", text: "Queue", textArabic: "الطابور" },
      { id: "B", text: "Stack (المكدس)", textArabic: "المكدس" },
      { id: "C", text: "Pivot", textArabic: "المحور" },
      { id: "D", text: "Leaf", textArabic: "ورقة" }
    ],
    correctOptionId: "B",
    explanation: "DFS uses a Stack (directly or via recursion) to store path vertices and backtrack when needed.",
    keywords: [{ en: "DFS", ar: "عمق أول" }, { en: "Backtrack", ar: "الرجوع" }]
  },

  // Chapter 10: Sorting
  {
    id: "Q83",
    type: "standard",
    text: "Selection sort (فرز التحديد) is considered 'not stable (غير مستقر)' because an element can?",
    textArabic: "يعتبر فرز التحديد غير مستقر لأن العنصر يمكن أن؟",
    textArabicSimple: "بالـ Selection، ممكن رقم صغير يطفر فوق أرقام تساويه وتخرب الترتيب مالتهم، يسموها 'leap-frog'.",
    options: [
      { id: "A", text: "Bubbles to the top", textArabic: "يطفو للقمة" },
      { id: "B", text: "Leap-frog equal values (يقفز فوق قيم مساوية)", textArabic: "يقفز فوق قيم مساوية له" },
      { id: "C", text: "Be partitioned", textArabic: "يتم تقسيمه" },
      { id: "D", text: "Stay in-place", textArabic: "يبقى مكانه" }
    ],
    correctOptionId: "B",
    explanation: "Selection sort can swap an element over other equal-valued elements, changing their relative order.",
    keywords: [{ en: "Selection Sort", ar: "فرز التحديد" }, { en: "Stable", ar: "مستقر" }]
  },
  {
    id: "Q84",
    type: "standard",
    text: "In Quick Sort (الفرز السريع), choosing an already sorted (مرتبة) list's first item as a pivot (المحور) leads to what time complexity?",
    textArabic: "في الفرز السريع، اختيار أول عنصر في قائمة مرتبة أصلاً كـ محور يؤدي إلى أي تعقيد زمني؟",
    textArabicSimple: "هذي تعتبر أسوأ حالة للـ Quick sort، لأنك ما كمت تقسم بالتساوي، فراح يصير بطيء جداً O(n²).",
    options: [
      { id: "A", text: "O(n log n)", textArabic: "O(n log n)" },
      { id: "B", text: "O(n)", textArabic: "O(n)" },
      { id: "C", text: "O(n²)", textArabic: "O(n²)" },
      { id: "D", text: "O(1)", textArabic: "O(1)" }
    ],
    correctOptionId: "C",
    explanation: "Picking the first element as pivot on a sorted list results in highly unbalanced partitions, leading to n-minus-one passes.",
    keywords: [{ en: "Quick Sort", ar: "الفرز السريع" }, { en: "Pivot", ar: "المحور" }]
  }
];
