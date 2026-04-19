/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Mission {
  id: string;
  title: string;
  description: string;
  content: string;
}

export const CURRICULUM: Mission[] = [
  {
    id: 'ch4',
    title: 'Chapter 4: Lists & Pointers',
    description: 'تحليل الروابط والمؤشرات وهياكل القوائم المتصلة.',
    content: `Chapter 4 — Lists and Pointer Structures. Lecture notes: Pointers, Nodes, Singly / Doubly / Circular Linked Lists. 
    1. Why Pointers? Pointers allow indirect addressing. Hardware support for this is called indirect addressing. In Python, references are technically pointers managed by the language.
    2. Arrays vs. Pointer Structures: Arrays are sequential blocks of data, fast but require contiguous memory. Pointer structures spread items around memory; nodes hold links to next items.
    3. Nodes: A node stores data plus one or more links.
    4. Singly Linked Lists: One pointer between successive nodes. Move forward only.
    4.1 SinglyLinkedList Class: head tracks first, tail tracks last (fast append).
    4.2 Append: O(1) if tracking tail.
    4.4 Delete: O(n) because you need to find the previous node (lagging cursor).
    5. Doubly Linked Lists: Two pointers per node (next and prev). Easier deletion.
    6. Circular Linked Lists: Last node points back to head. No exit condition in while loops without counters.
    7. Cheat-Sheet: Singly/Doubly Linked result in O(1) append, O(n) search/delete.`
  },
  {
    id: 'ch5',
    title: 'Chapter 5: Stacks & Queues',
    description: 'دراسة مبادئ LIFO و FIFO وتطبيقاتها البرمجية.',
    content: `Chapter 5 — Stacks and Queues. Stacks (LIFO): Last In, First Out. Like a pile of plates. Core operations: push, pop, peek.
    1.1 Why Stacks Matter: Function calls (return addresses), argument passing, undo/redo, browser history.
    2. Implementing a Stack: Base on Node class. All operations run in O(1).
    3. Bracket Matching: Classic application using a stack to ensure balanced parentheses/brackets.
    4. Queues (FIFO): First In, First Out. Like a line at a store. New people join at back (enqueue), served at front (dequeue).
    5. List-based Queue: Inefficient if using insert(0) - O(n).
    6. Stack-based Queue: Two-stack trick (inbound and outbound stacks). Dequeue drains inbound to outbound (reversing order).
    7. Node-based Queue: Doubly linked list allows O(1) for both ends.
    8. Application: Media Player Queue.`
  },
  {
    id: 'ch6',
    title: 'Chapter 6: Trees',
    description: 'فهم الهياكل الهرمية والأشجار الثنائية وعمليات البحث.',
    content: `Chapter 6 — Trees. Binary Trees, BSTs, Traversal, Expression Trees & Heaps.
    1. What Is a Tree? Hierarchical structure with parent-child relationships. Root is at top. Use cases: parsing, searches, XML/HTML, file systems.
    2. Terminology: Root node (top), Leaf node (no children), Edge (connection), Height (levels in tree).
    4. Binary Search Trees (BST): Left sub-tree <= v, Right sub-tree > v. Searching, min, and max run in O(h).
    5.3 Deleting Nodes: Three cases: leaf, one child, two children (replace with in-order successor).
    6. Tree Traversal: Depth-first (in-order, pre-order, post-order) and Breadth-first (level-by-level using a queue).
    8. Expression Trees: Represent arithmetic expressions. Root is operator, children are operands.
    9. Heaps: Binary tree with heap property (min-heap: parent <= children).`
  },
  {
    id: 'ch8',
    title: 'Chapter 8: Graphs',
    description: 'استكشاف الشبكات والمسارات وخوارزميات البحث في الرسوم.',
    content: `Chapter 8 — Graphs and Other Algorithms. Graphs, BFS, DFS, Heaps, Priority Queues.
    1. What Is a Graph? Formally G = (V, E). Models road maps, social networks, circuits. 
    2. Terminology: Node/Vertex, Edge, Loop, Degree, Adjacency, Path.
    3. Types: Undirected vs. Directed, Weighted Graphs (edges carry costs).
    4. Representation: Adjacency List (dictionary of lists) vs. Adjacency Matrix (2D table). List preferred for sparse graphs.
    5. Traversal: BFS starts at node, visits all neighbors first (uses queue). DFS goes deep before backtracking (uses stack/recursion).
    5.1 BFS: O(|V| + |E|).
    6. Priority Queues/Heaps: min-heap property parent <= children. Representation in array: index n has children at 2n and 2n+1.
    7. Selection Algorithms: Finding i-th smallest element.`
  },
  {
    id: 'ch10',
    title: 'Chapter 10: Sorting',
    description: 'مقارنة خوارزميات الترتيب وكفاءتها الزمنية والمكانية.',
    content: `Chapter 10 — Sorting. Bubble, Insertion, Selection, Quick, and Heap Sort.
    1. Why Sort? Facilitates binary search. Differs in time complexity, memory usage, stability.
    2. Bubble Sort: Swaps adjacent pairs. O(n^2). Simple but slow for large lists.
    3. Insertion Sort: Like sorting cards. O(n^2). Performs well on nearly-sorted data.
    4. Selection Sort: Repeatedly finds smallest and swaps. O(n^2). Not stable.
    5. Quick Sort: Divide-and-conquer using a pivot and partition. Average O(n log n), worst O(n^2).
    6. Heap Sort: Uses min-heap to extract smallest repeatedly. Guaranteed O(n log n).
    7. Summary: Quick sort usually fastest in practice. Bubble/Insertion/Selection mostly for teaching.`
  }
];
