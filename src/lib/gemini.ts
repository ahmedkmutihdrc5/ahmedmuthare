/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GoogleGenAI, Type } from "@google/genai";
import { Question, ContentAnalysis, TrainingMode } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

const ANALYSIS_SCHEMA = {
  type: Type.OBJECT,
  properties: {
    topics: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          main: { type: Type.STRING },
          sub: { type: Type.ARRAY, items: { type: Type.STRING } }
        },
        required: ["main", "sub"]
      }
    },
    definitions: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          term: { type: Type.STRING },
          definition: { type: Type.STRING }
        },
        required: ["term", "definition"]
      }
    },
    concepts: { type: Type.ARRAY, items: { type: Type.STRING } },
    examFocus: { type: Type.ARRAY, items: { type: Type.STRING } }
  },
  required: ["topics", "definitions", "concepts", "examFocus"]
};

export async function analyzeContent(content: string): Promise<ContentAnalysis> {
  const prompt = `
    Analyze this academic content as a senior professor.
    Extract:
    1. Main topics and their subtopics.
    2. Key definitions.
    3. Essential concepts.
    4. "Exam Focus" areas (high yield topics).
    
    CONTENT:
    ${content}
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: ANALYSIS_SCHEMA as any,
      },
    });

    return JSON.parse(response.text) as ContentAnalysis;
  } catch (error) {
    console.error("Analysis error:", error);
    return { topics: [], definitions: [], concepts: [], examFocus: [] };
  }
}

const TRIPLE_SHOT_SCHEMA = {
  type: Type.ARRAY,
  items: {
    type: Type.OBJECT,
    properties: {
      id: { type: Type.STRING },
      type: { type: Type.STRING, enum: ["triple_shot", "standard"] },
      title: { type: Type.STRING },
      tripleShot: {
        type: Type.OBJECT,
        properties: {
          basic: { type: Type.STRING, description: "Direct concept question" },
          application: { type: Type.STRING, description: "Application of concept" },
          scenario: { type: Type.STRING, description: "Complex scenario linking ideas" }
        },
        required: ["basic", "application", "scenario"]
      },
      text: { type: Type.STRING, description: "The final aggregate question in English" },
      textArabic: { type: Type.STRING, description: "Professional Arabic translation of the question" },
      textArabicSimple: { type: Type.STRING, description: "Iraqi dialect explanation, like teaching a child" },
      options: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            id: { type: Type.STRING },
            text: { type: Type.STRING, description: "Option text in English" },
            textArabic: { type: Type.STRING, description: "Option text in professional Arabic" }
          },
          required: ["id", "text", "textArabic"]
        }
      },
      correctOptionId: { type: Type.STRING },
      explanation: { type: Type.STRING, description: "Detailed correct answer explanation in Arabic (Explain clearly why this is the right choice)" },
      distractorAnalysis: {
        type: Type.OBJECT,
        additionalProperties: { type: Type.STRING },
        description: "Mapped by option ID: Why each incorrect option is wrong in Arabic"
      },
      keywords: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            en: { type: Type.STRING },
            ar: { type: Type.STRING }
          },
          required: ["en", "ar"]
        }
      },
      relatedTopics: { type: Type.ARRAY, items: { type: Type.STRING } }
    },
    required: ["id", "type", "text", "textArabic", "textArabicSimple", "options", "correctOptionId", "explanation", "distractorAnalysis", "keywords"]
  }
};

export async function extractQuestions(content: string, difficulty: string, trainingMode: TrainingMode): Promise<Question[]> {
  const context = content || "General Computer Science, Data Structures, Algorithms, and Programming Logic (equivalent to first-year university level IT courses)";
  const prompt = `
    Act as a strict yet helpful University Professor and Exam Designer.
    Create a 10-question exam for a student using the "Triple Shot" system.
    
    FOCUS AREA: ${context}
    DIFFICULTY: ${difficulty}
    TRAINING MODE: ${trainingMode}
    (Easy: fundamentals, Exam: balanced, Extreme: hard scenarios, Last Night: high yield)
    
    TRIPLE SHOT RULES:
    Each question has 3 layers:
    1. Basic: Direct concept.
    2. Application: Applying the concept.
    3. Scenario: A complex real-world or ministerial-style scenario combining 2-3 topics.
    
    LANGUAGE RULES (STRICT):
    - text: Write the question in PROFESSIONAL ENGLISH. Every technical term (from the list below) MUST be followed by its Arabic translation in parentheses immediately after the term.
      Example: "What is a pointer (المؤشر) in programming (البرمجة)?"
    - options: Each option MUST follow the same format: English term followed by (Arabic translation) if it's a technical keyword.
    - textArabic: A full professional Arabic translation of the question.
    - textArabicSimple: A VERY simple explanation in Iraqi dialect (explain like a friend). Keep tech terms in English.
    - explanation: Professional Arabic explanation. Keep tech terms in English.
    - distractorAnalysis: Brief Arabic analysis for each wrong option. Keep tech terms in English.

    MANDATORY KEYWORD TRANSLATIONS (English -> Arabic):
    Pointer (المؤشر), Node (العقدة), Linked List (القائمة المرتبطة), Singly Linked List (القائمة المرتبطة البسيطة), 
    Doubly Linked List (القائمة المرتبطة المزدوجة), Circular Linked List (القائمة المرتبطة الدائرية), 
    Stack (المكدس), Queue (الطابور), Push (إضافة), Pop (إزالة), Enqueue (إضافة), Dequeue (إزالة), 
    LIFO (Last In, First Out), FIFO (First In, First Out), Tree (الشجرة), Binary Tree (الشجرة الثنائية), 
    BST (شجرة البحث الثنائية), Root (الجذر), Leaf (ورقة / عقدة ورقية), Parent (الأب), Child (الابن), 
    Height (الارتفاع), Depth (العمق), Traversal (الاجتياز), In-order (المركزي), Pre-order (الأمامي), 
    Post-order (الخلفي), BFS (اتساع أول), DFS (عمق أول), Graph (الرسم البياني), Vertex (رأس), 
    Edge (حافة), Adjacency List (قائمة الجوار), Adjacency Matrix (مصفوفة الجوار), Heap (الكومة), 
    Min-heap (الكومة الصغرى), Max-heap (الكومة الكبرى), Priority Queue (طابور الأولوية), 
    Sorting (الترتيب / الفرز), Bubble Sort (فرز الفقاعات), Insertion Sort (فرز الإدراج), 
    Selection Sort (فرز التحديد), Quick Sort (الفرز السريع), Heap Sort (ترتيب الكومة), 
    Time Complexity (التعقيد الزمني), Space Complexity (التعقيد المكاني), Pivot (المحور), 
    Stable (مستقر), In-place (في المكان), Recursion (العودية), Expression Tree (شجرة التعبير), 
    RPN (التدوين البولندي العكسي).

    OUTPUT: A JSON array of 10 objects matching the schema.
    Ensure strict adherence to the "(Arabic)" formatting in the English text.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: TRIPLE_SHOT_SCHEMA as any,
      },
    });

    return JSON.parse(response.text) as Question[];
  } catch (error) {
    console.error("Generator error:", error);
    return [];
  }
}

export async function quickTranslate(text: string): Promise<{ arabic: string; keywords: { en: string; ar: string }[] }> {
  // Existing implementation remains similar but can be refined for "Professor" tone
  const prompt = `
    Translate and break down this English sentence like a helpful professor teaching a beginner student using simple Iraqi Arabic.
    TEXT: "${text}"
  `;
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            arabic: { type: Type.STRING },
            keywords: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  en: { type: Type.STRING },
                  ar: { type: Type.STRING }
                },
                required: ["en", "ar"]
              }
            }
          },
          required: ["arabic", "keywords"]
        } as any
      },
    });
    return JSON.parse(response.text);
  } catch (err) {
    return { arabic: "Could not translate.", keywords: [] };
  }
}
