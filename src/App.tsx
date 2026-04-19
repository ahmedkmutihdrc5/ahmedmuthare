/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, Gamepad2, Languages, BrainCircuit, RotateCcw, 
  ArrowRight, CheckCircle2, XCircle, GraduationCap, Target, 
  Zap, Flame, Info, Search, ListChecks, Star, Volume2, Globe, Library,
  Bell, UserCircle, Bot, Sparkles, Languages as LangIcon, ArrowLeft
} from 'lucide-react';
import { Question, AppMode, Difficulty, TrainingMode } from './types';
import { extractQuestions } from './lib/gemini';

import { QUESTION_BANK } from './lib/bank';

const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export default function App() {
  const [mode, setMode] = useState<AppMode>('setup');
  const [difficulty, setDifficulty] = useState<Difficulty>('medium');
  const [trainingMode, setTrainingMode] = useState<TrainingMode>('exam');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState('Generating Questions...');

  // Quiz state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showArabicTerms, setShowArabicTerms] = useState(true);
  const [showFullTranslation, setShowFullTranslation] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const startSetup = () => {
    setMode('setup');
    setQuestions([]);
    setCurrentIndex(0);
    setScore(0);
    setIsAnswered(false);
    setSelectedOptionId(null);
    setShowFullTranslation(false);
  };

  const handleStartTraining = () => {
    // Start with a shuffled version of the bank
    const shuffledBank = shuffleArray(QUESTION_BANK as Question[]);
    setQuestions(shuffledBank);
    setMode('quiz');
    
    // Immediately pre-fetch the next batch of UNIQUE AI questions
    loadMoreQuestions();
  };

  const loadMoreQuestions = async () => {
    try {
      const qs = await extractQuestions('', difficulty, trainingMode);
      setQuestions(prev => [...prev, ...qs]);
    } catch (err) {
      console.error("Failed to load more questions", err);
    }
  };

  const handleSpeak = (text: string, lang: 'en' | 'ar' = 'en') => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang === 'en' ? 'en-US' : 'ar-SA';
      utterance.rate = 0.9;
      
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      
      window.speechSynthesis.speak(utterance);
    }
  };

  const confirmAnswer = () => {
    if (isAnswered || !selectedOptionId) return;
    setIsAnswered(true);
    const q = questions[currentIndex];
    const isCorrect = selectedOptionId === q.correctOptionId;
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (currentIndex === questions.length - 2) {
      loadMoreQuestions();
    }
    
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setIsAnswered(false);
      setSelectedOptionId(null);
      setShowFullTranslation(false);
      window.speechSynthesis.cancel();
    } else {
      setMode('results');
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8 min-h-screen font-tajawal selection:bg-neon-blue/20">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-[70px] bg-[#121826]/70 backdrop-blur-[14px] border-b border-[#1E293B] z-50 flex items-center px-4 md:px-8">
        <div className="flex items-center gap-4">
          <button 
            onClick={startSetup}
            className="w-10 h-10 bg-neon-blue rounded-[12px] flex items-center justify-center text-white neon-glow transition-transform active:scale-95 shadow-[0_0_12px_rgba(0,191,255,0.4)]"
          >
            <Library size={24} fill="white" />
          </button>
          <h2 className="text-[20px] font-bold text-text-primary hidden sm:block uppercase tracking-tight">
            {mode === 'setup' ? 'الرئيسية' : mode === 'quiz' ? 'اختبار ذكي' : 'النتائج'}
          </h2>
        </div>

        <div className="flex-grow" />

        <div className="flex items-center gap-3">
          <button 
            onClick={() => setShowArabicTerms(!showArabicTerms)}
            className={`px-4 py-2 rounded-full border transition-all text-xs font-bold flex items-center gap-2 ${showArabicTerms ? 'bg-neon-blue/20 border-neon-blue text-neon-blue' : 'bg-white/5 border-white/10 text-slate-400'}`}
          >
            <LangIcon size={16} />
            {showArabicTerms ? 'إخفاء الترجمة' : 'إظهار الترجمة'}
          </button>
          <button className="w-6 h-6 text-text-secondary hover:text-neon-blue transition-colors flex items-center justify-center">
            <Search size={24} />
          </button>
          <button className="w-6 h-6 text-text-secondary hover:text-neon-blue transition-colors group flex items-center justify-center">
            <Bell size={24} className="group-hover:hidden" />
            <Bell size={24} fill="currentColor" className="hidden group-hover:block" />
          </button>
          <button className="w-6 h-6 text-text-secondary hover:text-neon-blue transition-colors group flex items-center justify-center">
            <UserCircle size={24} className="group-hover:hidden" />
            <UserCircle size={24} fill="currentColor" className="hidden group-hover:block" />
          </button>
        </div>
      </header>

      {/* Floating AI Assistant */}
      <button className="fixed bottom-6 right-6 w-14 h-14 bg-neon-blue rounded-full shadow-[0_0_20px_rgba(0,191,255,0.4)] flex items-center justify-center text-white z-[60] animate-pulse">
        <Sparkles size={28} fill="white" />
      </button>

      <main className="mt-[100px] pb-24">
        <AnimatePresence mode="wait">
          {loading && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="glass-card p-12 flex flex-col items-center justify-center space-y-6 text-center"
            >
               <motion.div
                 animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                 transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                 className="p-6 bg-neon-blue/20 rounded-full text-neon-blue"
               >
                 <BrainCircuit size={64} />
               </motion.div>
               <div className="space-y-2">
                 <h2 className="text-xl font-bold text-white uppercase tracking-widest" dir="rtl">{loadingText}</h2>
                 <p className="text-slate-400 text-sm italic" dir="rtl">"الأستاذ يجهز لك الجلسة التدريبية... انتظر ثواني"</p>
               </div>
            </motion.div>
          )}

          {mode === 'setup' && !loading && (
            <motion.div
              key="setup"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-12"
            >
              <div className="text-center space-y-6">
                 <motion.div 
                   initial={{ opacity: 0, scale: 0.8 }}
                   animate={{ opacity: 1, scale: 1 }}
                   transition={{ delay: 0.2 }}
                   className="flex justify-center"
                 >
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-neon-blue rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                      <img 
                        src="https://alshaab.edu.iq/wp-content/uploads/2022/09/Alsaab-Design.png" 
                        alt="جامعة الشعب"
                        className="relative w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-[0_0_15px_rgba(0,191,255,0.6)]"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                 </motion.div>
                 <div className="space-y-1">
                    <span className="text-[18px] text-text-secondary font-medium block">تعلم مع</span>
                    <h1 className="text-[42px] font-black text-neon-blue uppercase tracking-tighter neon-glow">أحمد مثنى</h1>
                    <p className="text-[16px] text-text-secondary font-normal">بإشراف الأستاذة: ست أروى صاحب</p>
                 </div>
              </div>

              <div className="glass-card p-10 max-w-3xl mx-auto space-y-10 text-center border-t-4 border-neon-blue">
                 <div className="flex justify-center">
                    <div className="w-20 h-20 bg-neon-blue/10 rounded-[32px] flex items-center justify-center text-neon-blue shadow-[0_0_20px_rgba(0,191,255,0.2)]">
                       <Zap size={40} fill="currentColor" />
                    </div>
                 </div>
                 
                 <div className="space-y-4">
                    <h2 className="text-[28px] font-bold text-text-primary px-4 leading-tight">مركز التدريب اللانهائي للـ Bubble Sheet</h2>
                    <p className="text-text-secondary text-lg leading-relaxed">
                      نظام ذكاء اصطناعي يولد لك أهم الأسئلة الوزارية باللغة الإنكليزية مع شرح وافٍ وتوضيحات مبسطة لكل جواب.
                    </p>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase text-slate-500 tracking-[0.3em] block">مستوى التحدي</label>
                      <div className="flex bg-black/40 p-1.5 rounded-full border border-white/5 gap-1">
                        {(['easy', 'medium', 'hard'] as Difficulty[]).map((d) => (
                          <button
                            key={d}
                            onClick={() => setDifficulty(d)}
                            className={`flex-1 py-2.5 rounded-full text-[11px] font-black uppercase transition-all ${difficulty === d ? 'bg-neon-blue text-white shadow-lg scale-105' : 'text-slate-500 hover:text-slate-300'}`}
                          >
                            {d}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase text-slate-500 tracking-[0.3em] block">نمط التدريب</label>
                      <div className="flex bg-black/40 p-1.5 rounded-full border border-white/5 gap-1">
                        {(['exam', 'extreme'] as TrainingMode[]).map((m) => (
                          <button
                            key={m}
                            onClick={() => setTrainingMode(m)}
                            className={`flex-1 py-2.5 rounded-full text-[11px] font-black uppercase transition-all ${trainingMode === m ? 'bg-neon-blue text-white shadow-lg scale-105' : 'text-slate-500 hover:text-slate-300'}`}
                          >
                            {m}
                          </button>
                        ))}
                      </div>
                    </div>
                 </div>

                 <button
                    onClick={handleStartTraining}
                    className="w-full h-20 bg-neon-blue text-white rounded-[40px] text-[24px] font-black shadow-[0_0_40px_rgba(0,191,255,0.4)] hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-4 transition-all group"
                 >
                    ابدأ التدريب الآن <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                 </button>
              </div>
            </motion.div>
          )}

          {mode === 'quiz' && questions.length > 0 && !loading && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Left Column: Keywords & Progress */}
              <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-[100px]">
                <div className="glass-card p-6 space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-[10px] font-black uppercase text-slate-500">
                      <span>السؤال {currentIndex + 1}</span>
                      <span className="text-neon-blue">دقة الإجابة: {score}</span>
                    </div>
                    <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden border border-white/5">
                      <motion.div 
                        className="bg-neon-blue h-full"
                        animate={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xs font-black uppercase text-slate-500 tracking-widest flex items-center gap-2 flex-row-reverse" dir="rtl">
                      <Languages size={14} className="text-neon-blue" /> قاموس المصطلحات
                    </h3>
                    <div className="space-y-2">
                      {questions[currentIndex].keywords.map((kw, i) => (
                        <div key={i} className="flex gap-3 items-center bg-white/5 border border-white/5 px-4 py-3 rounded-xl hover:bg-white/10 transition-colors flex-row-reverse">
                           <span className="font-bold text-neon-blue text-sm uppercase flex-1">{kw.en}</span>
                           <span className="text-slate-600">→</span>
                           <span className="text-text-secondary text-sm flex-1 text-right" dir="rtl">{kw.ar}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <button 
                  onClick={startSetup}
                  className="w-full h-12 flex items-center justify-center gap-2 text-text-secondary text-xs uppercase font-bold hover:text-neon-blue transition-colors group"
                >
                  <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> إلغاء الجلسة والعودة
                </button>
              </div>

              {/* Right Column: Question Content */}
              <div className="lg:col-span-8 space-y-6">
                <motion.div
                  key={`q-${currentIndex}`}
                  className="glass-card p-6 md:p-10 space-y-10 relative overflow-hidden flex flex-col"
                >
                  <div className="space-y-8 relative z-10 flex-grow">
                    <div className="flex justify-between items-center">
                       <div className="flex gap-2">
                          <button 
                            onClick={() => handleSpeak(questions[currentIndex].text, 'en')} 
                            className={`p-3 rounded-xl border transition-all ${isSpeaking ? 'bg-neon-blue text-white neon-glow border-neon-blue' : 'bg-white/5 border-white/10 text-slate-400 hover:text-neon-blue hover:border-neon-blue'}`}
                            title="نطق السؤال"
                          >
                            <Volume2 size={18} className={isSpeaking ? 'animate-pulse' : ''} />
                          </button>
                          <button 
                            onClick={() => setShowFullTranslation(!showFullTranslation)} 
                            className={`p-3 rounded-xl border transition-all ${showFullTranslation ? 'bg-neon-blue/20 border-neon-blue text-neon-blue' : 'bg-white/5 border-white/10 text-slate-400 hover:text-neon-blue hover:border-neon-blue'}`}
                            title="ترجمة كاملة"
                          >
                            <Globe size={18} />
                          </button>
                       </div>
                       <div className="px-4 py-1 bg-neon-blue/20 border border-neon-blue/40 text-neon-blue rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                         <Target size={12} />
                         Bubble Sheet Mode
                       </div>
                    </div>

                    <div className="space-y-6">
                       <div className="p-8 bg-[#1B2433] rounded-[24px] border-l-8 border-neon-blue shadow-xl group/q hover:border-neon-blue/60 transition-all">
                          <h3 className="text-[20px] font-bold text-text-primary leading-tight text-right">
                             {showArabicTerms 
                               ? questions[currentIndex].text 
                               : questions[currentIndex].text.replace(/\s*\([\u0600-\u06FF \/]+\)\s*/g, ' ').trim()
                             }
                          </h3>
                       </div>
                       
                       <AnimatePresence>
                         {showFullTranslation && (
                            <motion.div 
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden"
                            >
                               <div className="bg-neon-blue/5 p-4 rounded-2xl border border-neon-blue/10 flex flex-col items-end gap-2">
                                  <div className="flex items-center gap-2 text-neon-blue text-[10px] font-bold uppercase mb-1">
                                     Professional Translation
                                     <Globe size={12} />
                                  </div>
                                  <p className="text-white italic text-right leading-relaxed" dir="rtl">
                                    {questions[currentIndex].textArabic}
                                  </p>
                                  <button 
                                    onClick={() => handleSpeak(questions[currentIndex].textArabic, 'ar')}
                                    className="text-[10px] text-neon-blue hover:underline flex items-center gap-1"
                                  >
                                    استماع للترجمة <Volume2 size={10} />
                                  </button>
                               </div>
                            </motion.div>
                         )}
                       </AnimatePresence>
                    </div>

                    <div className="grid grid-cols-1 gap-3">
                       {questions[currentIndex].options.map((option) => {
                         const isSelected = selectedOptionId === option.id;
                         const isCorrect = option.id === questions[currentIndex].correctOptionId;
                         let status = 'idle';
                         if (isAnswered) {
                           if (isCorrect) status = 'correct';
                           else if (isSelected) status = 'wrong';
                         }

                         return (
                           <button
                             key={option.id}
                             onClick={() => !isAnswered && setSelectedOptionId(option.id)}
                             disabled={isAnswered}
                             className={`flex flex-row-reverse items-center gap-6 p-6 border-2 transition-all rounded-[32px] text-right group ${
                               status === 'correct' ? 'bg-[#10B981]/20 border-[#10B981] text-white shadow-[0_0_20px_rgba(16,185,129,0.3)]' :
                               status === 'wrong' ? 'bg-[#EF4444]/20 border-[#EF4444] text-white shadow-[0_0_20px_rgba(239,68,68,0.2)]' :
                               isSelected ? 'bg-neon-blue/30 border-neon-blue text-white shadow-[0_0_20px_rgba(0,191,255,0.4)]' :
                               'bg-[#1E293B]/50 border-white/10 text-text-primary hover:border-white/30 hover:bg-[#1E293B]/80'
                             }`}
                           >
                             <div className={`w-14 h-14 rounded-[16px] flex items-center justify-center text-xl font-black shrink-0 transition-all shadow-lg ${
                               status === 'correct' ? 'bg-[#10B981] text-white border-2 border-white/20' :
                               status === 'wrong' ? 'bg-[#EF4444] text-white border-2 border-white/20' :
                               isSelected ? 'bg-neon-blue text-white border-2 border-white/20 animate-pulse' : 
                               'bg-white/10 text-slate-400 group-hover:text-white group-hover:bg-white/20'
                             }`}>{option.id}</div>
                             <div className="flex-1 flex flex-col gap-1 items-end">
                                <span className={`text-[20px] font-bold tracking-tight transition-colors ${status === 'idle' && !isSelected ? 'text-text-primary' : 'text-white'}`}>
                                  {showArabicTerms 
                                    ? option.text 
                                    : option.text.replace(/\s*\([\u0600-\u06FF \/]+\)\s*/g, ' ').trim()
                                  }
                                </span>
                                <span className="text-[14px] opacity-70 italic font-medium">{option.textArabic}</span>
                             </div>
                           </button>
                         );
                       })}
                    </div>
                  </div>

                  {!isAnswered && selectedOptionId && (
                     <button
                        onClick={confirmAnswer}
                        className="w-full h-16 bg-correct text-white rounded-[40px] font-black uppercase text-sm flex items-center justify-center gap-3 shadow-lg hover:scale-[1.02] transition-all mt-8"
                     >
                        <CheckCircle2 size={24} /> تأكيد الإجابة
                     </button>
                  )}

                  {isAnswered && (
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 pt-10 border-t border-white/10 mt-10">
                       <div className="p-8 bg-neon-blue/5 rounded-[24px] border border-neon-blue/20 space-y-6 text-right">
                          <div className="flex items-center gap-3 justify-end text-neon-blue">
                             <h4 className="text-[15px] font-bold">لماذا هذه هي الإجابة النموذجية؟</h4>
                             <Bot size={24} />
                          </div>
                          
                          <p className="text-[#F0F4F8] leading-relaxed text-[17px] font-medium">
                             {questions[currentIndex].explanation}
                          </p>

                          <div className="space-y-3 bg-black/40 p-6 rounded-2xl border border-white/5">
                             <h5 className="text-[12px] font-black text-neon-blue uppercase tracking-widest">توضيح مبسط من الأستاذة:</h5>
                             <p className="text-slate-400 text-sm leading-relaxed italic">
                                {questions[currentIndex].textArabicSimple}
                             </p>
                          </div>
                       </div>

                       <button
                        onClick={nextQuestion}
                        className="w-full h-20 bg-neon-blue text-white rounded-full text-xl font-black italic flex items-center justify-center gap-4 hover:scale-[1.02] transition-all"
                      >
                        التحدي التالي <ArrowRight className="rotate-180" />
                      </button>
                    </motion.div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          )}

          {mode === 'results' && (
            <motion.div
              key="results"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card p-12 text-center space-y-12 max-w-2xl mx-auto"
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="w-24 h-24 bg-neon-blue/10 rounded-[32px] flex items-center justify-center text-neon-blue neon-glow border border-neon-blue/20">
                  <Star size={48} fill="currentColor" />
                </div>
                <div className="space-y-1">
                  <h2 className="text-[32px] font-bold text-text-primary">إنجاز عظيم يا بطل!</h2>
                  <p className="text-text-secondary">نتيجتك في دورة الـ Bubble Sheet الحالية</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-8 bg-white/5 border border-white/5 rounded-[24px]">
                  <span className="text-[48px] font-bold text-neon-blue leading-none">{Math.round((score / questions.length) * 100)}%</span>
                  <p className="text-[12px] text-text-secondary uppercase font-black tracking-widest mt-2">معدل الإتقان</p>
                </div>
                <div className="p-8 bg-white/5 border border-white/5 rounded-[24px]">
                  <span className="text-[48px] font-bold text-neon-blue leading-none">{score}/{questions.length}</span>
                  <p className="text-[12px] text-text-secondary uppercase font-black tracking-widest mt-2">الإجابات</p>
                </div>
              </div>

              <div className="space-y-6">
                 <button 
                  onClick={startSetup}
                  className="w-full h-16 bg-neon-blue text-white rounded-[40px] text-xl font-black shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-4"
                >
                  <RotateCcw size={24} /> تدريب جديد
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="mt-12 text-center text-slate-600 text-[10px] font-black uppercase tracking-[0.5em] pb-8">
        منصة تعلم مع أحمد مثنى • جميع الحقوق محفوظة
      </footer>
    </div>
  );
}
