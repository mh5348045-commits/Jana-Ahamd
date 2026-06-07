/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Lesson, Question, QuestionType, WordOrderQuestion, MatchingQuestion } from "../types";
import { ArrowLeft, BookOpen, AlertCircle, CheckCircle, XCircle, RefreshCw, Layers, Sparkles, BookOpenCheck } from "lucide-react";

interface LessonQuizProps {
  lesson: Lesson;
  userAnswers: { [questionId: string]: { selected: any; isCorrect: boolean } };
  onSaveAnswer: (questionId: string, selected: any, isCorrect: boolean) => void;
  onGoBack: () => void;
}

export const LessonQuiz: React.FC<LessonQuizProps> = ({
  lesson,
  userAnswers,
  onSaveAnswer,
  onGoBack
}) => {
  // Select active exercise
  const [activeExerciseIdx, setActiveExerciseIdx] = useState(0);
  const activeExercise = lesson.exercises[activeExerciseIdx] || lesson.exercises[0];

  // Reset exercise tabs when switching lessons
  useEffect(() => {
    setActiveExerciseIdx(0);
  }, [lesson.id]);

  // Word Order builder local state
  const [wordOrderSelections, setWordOrderSelections] = useState<{ [qId: string]: string[] }>({});
  // Matching game state
  const [selectedLeft, setSelectedLeft] = useState<{ qId: string; pairId: string; text: string } | null>(null);
  const [selectedRight, setSelectedRight] = useState<{ qId: string; pairId: string; text: string } | null>(null);
  const [matchingSuccesses, setMatchingSuccesses] = useState<{ [qId: string]: string[] }>({}); // lists of connected pairIds
  const [matchingError, setMatchingError] = useState<{ qId: string; leftId: string; rightId: string } | null>(null);

  // Clear builders and matchings when changing exercise
  useEffect(() => {
    setWordOrderSelections({});
    setSelectedLeft(null);
    setSelectedRight(null);
    setMatchingError(null);
  }, [activeExerciseIdx, lesson.id]);

  // Handle standard MCQ / Binary / Dropdown question selections
  const handleSingleChoiceSelect = (question: Question, value: string) => {
    // Check if correctAnswer exists in the question type
    if ("correctAnswer" in question && typeof question.correctAnswer === "string") {
      const isCorrect = value.trim().toLowerCase() === question.correctAnswer.trim().toLowerCase();
      onSaveAnswer(question.id, value, isCorrect);
    }
  };

  // Word Order builders functions
  const handleWordClick = (qId: string, word: string) => {
    const current = wordOrderSelections[qId] || [];
    setWordOrderSelections({
      ...wordOrderSelections,
      [qId]: [...current, word]
    });
  };

  const handleRemoveWordClick = (qId: string, indexToRemove: number) => {
    const current = wordOrderSelections[qId] || [];
    const updated = current.filter((_, idx) => idx !== indexToRemove);
    setWordOrderSelections({
      ...wordOrderSelections,
      [qId]: updated
    });
  };

  const handleWordOrderReset = (qId: string) => {
    setWordOrderSelections({
      ...wordOrderSelections,
      [qId]: []
    });
  };

  const handleWordOrderSubmit = (q: WordOrderQuestion) => {
    const entered = (wordOrderSelections[q.id] || []).join(" ").trim();
    // Clean strings to compare logically
    const cleanStr = (s: string) => s.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").replace(/\s+/g, " ").trim().toLowerCase();
    const isCorrect = cleanStr(entered) === cleanStr(q.correctSentence);
    onSaveAnswer(q.id, entered, isCorrect);
  };

  // Click-to-match pair logic (Exercise 1 of Lesson 2 & Exercise 1 & 3 of Lesson 3/4)
  const handleMatchingLeftClick = (qId: string, pairId: string, text: string) => {
    // If the pair is already completed, do nothing
    const completed = matchingSuccesses[qId] || [];
    if (completed.includes(pairId)) return;

    setSelectedLeft({ qId, pairId, text });

    // If right was selected, check answer
    if (selectedRight && selectedRight.qId === qId) {
      triggerMatchCheck(qId, pairId, selectedRight.pairId);
    }
  };

  const handleMatchingRightClick = (qId: string, pairId: string, text: string) => {
    const completed = matchingSuccesses[qId] || [];
    if (completed.includes(pairId)) return;

    setSelectedRight({ qId, pairId, text });

    // If left was selected, check answer
    if (selectedLeft && selectedLeft.qId === qId) {
      triggerMatchCheck(qId, selectedLeft.pairId, pairId);
    }
  };

  const triggerMatchCheck = (qId: string, leftId: string, rightId: string) => {
    if (leftId === rightId) {
      // It's a match!
      const current = matchingSuccesses[qId] || [];
      const updated = [...current, leftId];
      const nextMatchingSuccesses = { ...matchingSuccesses, [qId]: updated };
      setMatchingSuccesses(nextMatchingSuccesses);
      
      setSelectedLeft(null);
      setSelectedRight(null);

      // Check if all pairs in matching are finished. If yes, save answer for overall matching question as correct!
      const question = activeExercise.questions.find(q => q.id === qId) as MatchingQuestion;
      if (question && updated.length === question.pairs.length) {
        onSaveAnswer(qId, "All Pairs Matched", true);
      }
    } else {
      // Mistake! Flash red error state
      setMatchingError({ qId, leftId, rightId });
      setTimeout(() => {
        setMatchingError(null);
        setSelectedLeft(null);
        setSelectedRight(null);
      }, 900);
    }
  };

  // Reset matching game
  const resetMatchingGame = (qId: string) => {
    setMatchingSuccesses({
      ...matchingSuccesses,
      [qId]: []
    });
    setSelectedLeft(null);
    setSelectedRight(null);
    setMatchingError(null);
    // Remove stored answer
    onSaveAnswer(qId, null, false);
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header and Back navigation */}
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between" style={{ direction: "rtl" }}>
        <button
          onClick={onGoBack}
          id="back-to-dashboard-btn"
          className="inline-flex items-center self-start gap-1.5 rounded-xl border border-gray-200 bg-white px-3.5 py-2 text-sm font-semibold text-gray-700 shadow-xxs transition-all hover:bg-slate-50"
        >
          <ArrowLeft className="h-4 w-4" />
          العودة للرئيسية
        </button>

        <div className="text-right">
          <h2 className="text-xl font-extrabold text-gray-900 font-sans tracking-tight">
            {lesson.titleAr}
          </h2>
          <p className="text-xs text-gray-400 font-mono tracking-wide">{lesson.title}</p>
        </div>
      </div>

      {/* Grid containing Sidebar (Reading passage for Lesson 3) or Full view */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Lesson 3 Reading Passage Layout (Span 5 on larger screens) */}
        {lesson.passage && (
          <div className="lg:col-span-12 xl:col-span-5 h-[400px] xl:h-[700px] flex flex-col rounded-3xl border border-gray-200 bg-emerald-900/5 p-5 overflow-hidden shadow-xs" style={{ direction: "rtl" }}>
            <div className="flex items-center gap-2 pb-3 mb-3 border-b border-gray-200/50">
              <BookOpenCheck className="h-5 w-5 text-emerald-700 animate-bounce" />
              <h3 className="text-sm font-extrabold text-emerald-900 font-sans">
                قطعة الفهم الطبي والغذائي (اقرأ منها للأجوبة)
              </h3>
            </div>
            {/* Scrollable content of passage */}
            <div className="overflow-y-auto space-y-4 pr-1 text-right">
              <h4 className="text-base font-extrabold text-emerald-900 font-sans border-b border-emerald-100 pb-1">
                {lesson.passage.title}
              </h4>
              {lesson.passage.paragraphs.map(p => (
                <div key={p.id} className="rounded-xl bg-white p-4 border border-emerald-100/40 shadow-xxs space-y-2">
                  <p className="text-xs font-mono font-bold text-emerald-800 uppercase tracking-widest">
                    PARAGRAPH {p.id}
                  </p>
                  <p className="text-xs text-gray-750 leading-relaxed font-sans font-medium" style={{ direction: "ltr" }}>
                    {p.text}
                  </p>
                  {p.textAr && (
                    <p className="text-2xs text-emerald-700 leading-relaxed font-sans bg-emerald-50/40 rounded-lg p-2 border-r-2 border-emerald-400">
                      <strong>الترجمة التوضيحية:</strong> {p.textAr}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Exercises layout (Span Remaining) */}
        <div className={`${lesson.passage ? "lg:col-span-12 xl:col-span-7" : "lg:col-span-12"} space-y-6`}>
          {/* Exercise Tabs Selection bar */}
          <div className="flex flex-wrap items-center gap-2 rounded-2xl bg-slate-100 p-1.5" style={{ direction: "rtl" }}>
            {lesson.exercises.map((ex, idx) => {
              // Compute individual exercise status counts
              let eQuestions = 0;
              let eCorrect = 0;
              ex.questions.forEach(q => {
                eQuestions++;
                if (userAnswers[q.id]?.isCorrect) eCorrect++;
              });

              const isCompleted = eQuestions > 0 && eQuestions === eCorrect;

              return (
                <button
                  key={ex.id}
                  onClick={() => setActiveExerciseIdx(idx)}
                  className={`flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    activeExerciseIdx === idx
                      ? "bg-white text-emerald-800 shadow-xs border border-emerald-500/10"
                      : "text-gray-500 hover:text-gray-900 hover:bg-white/50"
                  }`}
                >
                  <Layers className={`h-3.5 w-3.5 ${activeExerciseIdx === idx ? "text-emerald-600" : "text-gray-400"}`} />
                  <span>تمرين {idx + 1}</span>
                  {eCorrect > 0 && (
                    <span className={`rounded-full px-1.5 py-0.2 text-xxs font-mono ${isCompleted ? "bg-emerald-100 text-emerald-700" : "bg-slate-200 text-slate-700"}`}>
                      {eCorrect}/{eQuestions}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Exercise Title in center */}
          <div className="rounded-2xl bg-white border border-gray-150 p-5 shadow-xs text-right" style={{ direction: "rtl" }}>
            <span className="text-xxs font-extrabold text-emerald-600 font-mono tracking-widest uppercase block mb-1">
              CURRENT PROGRESS AREA
            </span>
            <h3 className="text-base font-bold text-gray-900 leading-snug">
              {activeExercise.nameAr}
            </h3>
            <p className="text-xs text-gray-400 font-mono leading-none mt-1">
              {activeExercise.name}
            </p>
          </div>

          {/* Core vertical list of questions in chosen Exercise */}
          <div className="space-y-6">
            {activeExercise.questions.map((q, qidx) => {
              const currentAnswer = userAnswers[q.id];
              const isAnswered = !!currentAnswer;
              const isCorrect = currentAnswer?.isCorrect === true;

              return (
                <div
                  key={q.id}
                  id={`question-card-${q.id}`}
                  className={`rounded-2xl border bg-white p-5 transition-all shadow-xs space-y-4 ${
                    isAnswered
                      ? isCorrect
                        ? "border-emerald-200 bg-emerald-50/10 shadow-emerald-50/20"
                        : "border-rose-200 bg-rose-50/10 shadow-rose-50/20"
                      : "border-gray-200"
                  }`}
                  style={{ direction: "rtl" }}
                >
                  {/* Header info of question */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 border-b border-gray-50 pb-2.5">
                    <span className="text-xs font-extrabold text-emerald-600 font-mono">
                      مجموعة {qidx + 1} • {q.type}
                    </span>
                    {isAnswered && (
                      <div className="flex items-center gap-1">
                        {isCorrect ? (
                          <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-100/50 rounded-full px-2.5 py-0.5">
                            <CheckCircle className="h-3.5 w-3.5" /> إجابة صحيحة +10 نادِر
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-xs font-bold text-rose-700 bg-rose-100/50 rounded-full px-2.5 py-0.5">
                            <XCircle className="h-3.5 w-3.5" /> حاول البديل المناسب
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Question main prompts in Arabic and English */}
                  <div className="space-y-1.5 text-right">
                    {q.instructionAr && (
                      <p className="text-xs font-medium text-slate-800">
                        🔔 {q.instructionAr}
                      </p>
                    )}
                    {q.instruction && (
                      <p className="text-2xs text-gray-400 font-mono" style={{ direction: "ltr" }}>
                        {q.instruction}
                      </p>
                    )}
                    
                    {/* Render raw prompt text if it is MCQ or Binary or Dropdown structure */}
                    {(q.type === QuestionType.MCQ || q.type === QuestionType.BINARY || q.type === QuestionType.DROPDOWN) && (
                      <div className="rounded-xl border border-dashed border-gray-150 p-4 bg-slate-50/30 text-center my-3">
                        <p className="text-sm font-semibold text-gray-800 font-mono tracking-wide" style={{ direction: "ltr" }}>
                          {q.type === QuestionType.BINARY && q.sentenceBefore ? (
                            <span>
                              {q.sentenceBefore}{" "}
                              <span className="text-emerald-700 underline font-extrabold font-sans">
                                [ {currentAnswer?.selected || "؟"} ]
                              </span>{" "}
                              {q.sentenceAfter}
                            </span>
                          ) : q.type === QuestionType.DROPDOWN ? (
                            <span>
                              {q.sentenceParts[0]}
                              <span className="mx-2 px-3 py-0.5 rounded-lg border-b-2 border-emerald-500 bg-emerald-50 font-bold text-emerald-800">
                                {currentAnswer?.selected || "______________"}
                              </span>
                              {q.sentenceParts[1]}
                            </span>
                          ) : (
                            q.question || ""
                          )}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* CHOOSE RENDERER PATH ACCORDING TO QUESTION TYPE */}

                  {/* RENDERER 1: MCQ with 4 large selections */}
                  {q.type === QuestionType.MCQ && (
                    <div className="grid grid-cols-1 gap-3.5 pt-1 text-right" style={{ direction: "ltr" }}>
                      {q.options.map((opt, oIdx) => {
                        const isSelected = currentAnswer?.selected === opt;
                        const isOtpCorrect = opt === q.correctAnswer;
                        
                        let optStyle = "border-gray-200 hover:border-emerald-300 hover:bg-slate-50";
                        if (isAnswered) {
                          if (isSelected) {
                            optStyle = isCorrect
                              ? "border-emerald-500 bg-emerald-50 text-emerald-800 ring-2 ring-emerald-500/20"
                              : "border-rose-500 bg-rose-50 text-rose-800 ring-2 ring-rose-500/20";
                          } else if (isOtpCorrect) {
                            // Highlight correct answer if user got it wrong
                            optStyle = "border-emerald-500 bg-emerald-50/50 text-emerald-800 border-dashed";
                          } else {
                            optStyle = "opacity-60 border-gray-100";
                          }
                        }

                        return (
                          <button
                            key={oIdx}
                            disabled={isAnswered && isCorrect} // lock only when correct, allow retry on mistake
                            onClick={() => handleSingleChoiceSelect(q, opt)}
                            className={`flex items-center gap-3.5 rounded-xl border p-3.5 text-xs font-semibold text-left transition-all ${optStyle}`}
                          >
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-gray-300 bg-white text-xxs font-extrabold text-gray-500 font-mono">
                              {String.fromCharCode(65 + oIdx)}
                            </span>
                            <span className="leading-tight font-sans font-medium">{opt}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* RENDERER 2: BINARY (e.g. was/were or active/passive etc) */}
                  {q.type === QuestionType.BINARY && (
                    <div className="grid grid-cols-2 gap-4 pt-1" style={{ direction: "ltr" }}>
                      {q.options.map((opt, oIdx) => {
                        const isSelected = currentAnswer?.selected === opt;
                        const isTargetCorrect = opt === q.correctAnswer;

                        let optStyle = "border-gray-150 hover:bg-slate-50";
                        if (isAnswered) {
                          if (isSelected) {
                            optStyle = isCorrect
                              ? "border-emerald-500 bg-emerald-50 text-emerald-800 text-center font-bold"
                              : "border-rose-500 bg-rose-50 text-rose-800 text-center font-bold";
                          } else if (isTargetCorrect) {
                            optStyle = "border-emerald-500 bg-emerald-50/50 text-emerald-800 text-center border-dashed";
                          } else {
                            optStyle = "opacity-50 border-gray-100 text-center";
                          }
                        }

                        return (
                          <button
                            key={oIdx}
                            disabled={isAnswered && isCorrect}
                            onClick={() => handleSingleChoiceSelect(q, opt)}
                            className={`rounded-xl border p-4 text-xs font-bold text-center transition-all cursor-pointer ${optStyle}`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* RENDERER 3: DROPDOWN (Represented cleanly as choice pills below) */}
                  {q.type === QuestionType.DROPDOWN && (
                    <div className="flex flex-wrap items-center justify-center gap-3 pt-1" style={{ direction: "ltr" }}>
                      {q.options.map((opt, oIdx) => {
                        const isSelected = currentAnswer?.selected === opt;
                        const isOptCorrect = opt === q.correctAnswer;

                        let pillStyle = "border-gray-150 bg-white hover:border-emerald-400 hover:text-emerald-700";
                        if (isAnswered) {
                          if (isSelected) {
                            pillStyle = isCorrect
                              ? "border-emerald-500 bg-emerald-500 text-white font-bold"
                              : "border-rose-500 bg-rose-500 text-white font-bold";
                          } else if (isOptCorrect) {
                            pillStyle = "border-emerald-500 bg-emerald-50 text-emerald-800 border-dashed font-semibold";
                          } else {
                            pillStyle = "opacity-40 border-gray-100 bg-slate-50";
                          }
                        }

                        return (
                          <button
                            key={oIdx}
                            disabled={isAnswered && isCorrect}
                            onClick={() => handleSingleChoiceSelect(q, opt)}
                            className={`rounded-full border px-4 py-2 text-xs font-semibold shadow-xxs transition-all ${pillStyle}`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* RENDERER 4: WORD_ORDER (Scrambled Word Builder) */}
                  {q.type === QuestionType.WORD_ORDER && (
                    <div className="space-y-4 pt-1">
                      {/* Sub-label */}
                      <p className="text-xxs font-extrabold text-indigo-700 font-mono bg-indigo-50/50 rounded-lg p-2 inline-block">
                        الاصطلاح المستهدف: {q.idiomOrTerm}
                      </p>

                      {/* Sentence Builder Slate Box */}
                      <div className="min-h-[64px] rounded-xl border-2 border-dashed border-slate-200 bg-slate-50/60 p-4 transition-all">
                        {/* Selected Words Sequence */}
                        <div className="flex flex-wrap items-center gap-1.5 justify-center" style={{ direction: "ltr" }}>
                          {(wordOrderSelections[q.id] || []).length > 0 ? (
                            (wordOrderSelections[q.id] || []).map((w, idx) => {
                              return (
                                <button
                                  key={idx}
                                  disabled={isAnswered}
                                  onClick={() => handleRemoveWordClick(q.id, idx)}
                                  className="rounded-lg bg-emerald-600 text-white px-2.5 py-1.5 text-xs font-bold font-mono shadow-sm transition-transform hover:scale-95 flex items-center gap-1 cursor-pointer"
                                  title="انقر للإزالة"
                                >
                                  {w}
                                </button>
                              );
                            })
                          ) : (
                            <span className="text-xs text-gray-400 font-sans italic py-1">
                              انقر على الكلمات المبعثرة بالأسفل لتبني الجملة بالترتيب الصحيح
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Scrambled Word Pool */}
                      {!isAnswered && (
                        <div className="flex flex-wrap items-center gap-2 justify-center" style={{ direction: "ltr" }}>
                          {q.scrambledWords.map((word, wIdx) => {
                            // Check count used to allow duplicates if the word repeats in scramble
                            const timesUsed = (wordOrderSelections[q.id] || []).filter(x => x === word).length;
                            const timesInScramble = q.scrambledWords.filter(x => x === word).length;
                            const isExhausted = timesUsed >= timesInScramble;

                            return (
                              <button
                                key={wIdx}
                                disabled={isExhausted}
                                onClick={() => handleWordClick(q.id, word)}
                                className={`rounded-xl border px-3 py-1.8 text-xs font-semibold font-mono shadow-xxs cursor-pointer ${
                                  isExhausted
                                    ? "opacity-30 border-gray-100 bg-gray-50 text-gray-300 pointer-events-none"
                                    : "border-gray-200 bg-white text-gray-700 hover:border-indigo-400 hover:bg-indigo-50/40"
                                }`}
                              >
                                {word}
                              </button>
                            );
                          })}
                        </div>
                      )}

                      {/* Control buttons of the assembler */}
                      <div className="flex items-center justify-between pt-1">
                        <div className="flex items-center gap-2">
                          {!isAnswered && (
                            <>
                              <button
                                onClick={() => handleWordOrderSubmit(q)}
                                disabled={(wordOrderSelections[q.id] || []).length === 0}
                                className="rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 text-xs font-bold transition-all shadow-sm disabled:opacity-50"
                              >
                                تأكيد الإجابة
                              </button>
                              <button
                                onClick={() => handleWordOrderReset(q.id)}
                                className="rounded-xl border border-gray-200 hover:bg-slate-50 text-gray-500 px-3 py-2 text-xs font-semibold flex items-center gap-1"
                              >
                                <RefreshCw className="h-3.5 w-3.5" /> مسح
                              </button>
                            </>
                          )}
                        </div>

                        {isAnswered && !isCorrect && (
                          <button
                            onClick={() => {
                              onSaveAnswer(q.id, null, false);
                              handleWordOrderReset(q.id);
                            }}
                            className="rounded-xl border border-rose-200 text-rose-700 bg-rose-50/50 hover:bg-rose-50 px-3 py-2 text-xs font-bold flex items-center gap-1.5"
                          >
                            <RefreshCw className="h-3.5 w-3.5" /> حاول مرة أخرى
                          </button>
                        )}
                      </div>

                      {/* Correct sentence output card for corrective view */}
                      {isAnswered && (
                        <div className={`p-4 rounded-xl border text-right space-y-2 ${
                          isCorrect ? "bg-emerald-50/40 border-emerald-100" : "bg-rose-50/40 border-rose-100"
                        }`}>
                          <p className="text-xs font-bold text-gray-800">
                            {isCorrect ? "🎉 رائع! لقد ركبتها بشكل صحيح:" : "💡 الجملة الصحيحة المستهدفة:"}
                          </p>
                          <p className="text-xs text-indigo-900 font-mono font-bold select-all leading-relaxed" style={{ direction: "ltr" }}>
                            {q.correctSentence}
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* RENDERER 5: MATCHING (Pairs game) */}
                  {q.type === QuestionType.MATCHING && (
                    <div className="space-y-4 pt-1">
                      <div className="bg-emerald-50/60 rounded-xl p-3.5 border border-emerald-100/30 text-right">
                        <p className="text-xs text-emerald-800 leading-relaxed font-sans font-medium">
                          👈 <strong>كيفية التوصيل:</strong> اضغط على مصطلح من العمود الأيمن ومقابله في العمود الأيسر. عند تبيّن التطابق الصحيح، سيتحول لونهما إلى الأخضر ويرتبطان بنجاح!
                        </p>
                      </div>

                      {/* Matching Grid container */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2 text-right">
                        {/* Right column: Terms shuffled (or order as defined) */}
                        <div className="space-y-2.5">
                          <h4 className="text-xxs font-extrabold text-gray-400 font-mono tracking-wider block border-b border-gray-100 pb-1.5 text-right bg-slate-50/50 p-2 rounded-lg">
                            COLUMN A: FOOD TERMS / IDIOMS
                          </h4>
                          {q.pairs.map((p) => {
                            const isSolved = (matchingSuccesses[q.id] || []).includes(p.id);
                            const isSel = selectedLeft && selectedLeft.pairId === p.id && selectedLeft.qId === q.id;
                            
                            // Check error state for flash
                            const hasError = matchingError && matchingError.qId === q.id && matchingError.leftId === p.id;

                            let btnStyle = "border-gray-150 bg-white hover:border-emerald-300";
                            if (isSolved) {
                              btnStyle = "border-emerald-500 bg-emerald-50 text-emerald-800 ring-1 ring-emerald-500/20";
                            } else if (hasError) {
                              btnStyle = "border-rose-500 bg-rose-50 text-rose-800 animate-pulse";
                            } else if (isSel) {
                              btnStyle = "border-indigo-600 bg-indigo-50 text-indigo-900 ring-2 ring-indigo-500/30 font-bold";
                            }

                            return (
                              <button
                                key={p.id}
                                disabled={isSolved || isAnswered}
                                onClick={() => handleMatchingLeftClick(q.id, p.id, p.left)}
                                className={`w-full rounded-xl border p-3 text-xs text-left font-semibold font-mono leading-tight transition-all flex items-center justify-between cursor-pointer ${btnStyle}`}
                                style={{ direction: "ltr" }}
                              >
                                <span>{p.left}</span>
                                {isSolved && (
                                  <span className="rounded-full bg-emerald-500 p-0.5 text-white">
                                    <CheckCircle className="h-3.5 w-3.5 stroke-[2.5]" />
                                  </span>
                                )}
                              </button>
                            );
                          })}
                        </div>

                        {/* Left column: Meanings redefined */}
                        <div className="space-y-2.5">
                          <h4 className="text-xxs font-extrabold text-gray-400 font-mono tracking-wider block border-b border-gray-100 pb-1.5 text-right bg-slate-50/50 p-2 rounded-lg">
                            COLUMN B: DEFINITIONS / MEANINGS
                          </h4>
                          {/* Shuffle order of definitions so they have to look for them */}
                          {/* To keep it stable, we can map using the pairs but map right text. Let's list and display options.
                              Wait, to make it a puzzle, we should keep the same order or shuffle. We can pre-scramble options. 
                              Let's sort right column alphabetically or by dynamic seed so they aren't lined up next to left column!
                              This is brilliant! Shuffling right text makes it a real test! */}
                          {q.pairs
                            .map(p => ({ id: p.id, right: p.right }))
                            .sort((a, b) => b.right.localeCompare(a.right)) // Scramble with static string sort
                            .map((pRight) => {
                              const isSolved = (matchingSuccesses[q.id] || []).includes(pRight.id);
                              const isSel = selectedRight && selectedRight.pairId === pRight.id && selectedRight.qId === q.id;
                              
                              const hasError = matchingError && matchingError.qId === q.id && matchingError.rightId === pRight.id;

                              let btnStyle = "border-gray-150 bg-white hover:border-emerald-300";
                              if (isSolved) {
                                btnStyle = "border-emerald-500 bg-emerald-50 text-emerald-800 ring-1 ring-emerald-500/20";
                              } else if (hasError) {
                                btnStyle = "border-rose-500 bg-rose-50 text-rose-800 animate-pulse";
                              } else if (isSel) {
                                btnStyle = "border-indigo-600 bg-indigo-50 text-indigo-900 ring-2 ring-indigo-500/30 font-bold";
                              }

                              return (
                                <button
                                  key={pRight.id}
                                  disabled={isSolved || isAnswered}
                                  onClick={() => handleMatchingRightClick(q.id, pRight.id, pRight.right)}
                                  className={`w-full rounded-xl border p-3 text-xs text-left font-sans font-medium leading-tight transition-all flex items-center justify-between cursor-pointer ${btnStyle}`}
                                  style={{ direction: "ltr" }}
                                >
                                  <span>{pRight.right}</span>
                                  {isSolved && (
                                    <span className="rounded-full bg-emerald-500 p-0.5 text-white">
                                      <CheckCircle className="h-3.5 w-3.5 stroke-[2.5]" />
                                    </span>
                                  )}
                                </button>
                              );
                            })}
                        </div>
                      </div>

                      {/* Matching Stats and Resetter */}
                      <div className="flex items-center justify-between pt-2 border-t border-slate-50">
                        <span className="text-xs font-semibold text-gray-500">
                          الروابط المتطابقة:{" "}
                          <strong className="text-emerald-700">
                            {(matchingSuccesses[q.id] || []).length} من {q.pairs.length}
                          </strong>
                        </span>

                        <button
                          onClick={() => resetMatchingGame(q.id)}
                          className="rounded-xl border border-gray-200 hover:bg-slate-50 text-gray-500 px-3 py-1.8 text-xs font-semibold flex items-center gap-1.5"
                        >
                          <RefreshCw className="h-3.5 w-3.5" /> إعادة اللعبة
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Universal Instant Correction & Arabic Translation feedback cards */}
                  {isAnswered && (
                    <div className="mt-3.5 rounded-xl bg-slate-50 p-4 border border-slate-100 text-right space-y-2">
                      <div className="flex items-center gap-1.5">
                        <AlertCircle className={`h-4.5 w-4.5 ${isCorrect ? "text-emerald-600" : "text-amber-500"}`} />
                        <span className="text-xs font-bold text-gray-800 font-sans">
                          {isCorrect ? "أحسنت! إجابة دقيقة" : "تلميح التصحيح والشرح التوضيحي:"}
                        </span>
                      </div>
                      
                      {q.explanationAr && (
                        <p className="text-xs text-gray-600 leading-relaxed font-sans" id={`explanation-${q.id}`}>
                          {q.explanationAr}
                        </p>
                      )}

                      {!isCorrect && q.type !== QuestionType.WORD_ORDER && q.type !== QuestionType.MATCHING && (
                        <div className="pt-1.5 border-t border-slate-100/50 mt-1">
                          <p className="text-xxs font-mono font-extrabold text-indigo-700 tracking-wider">
                            CORRECT FORMAT TARGET:
                          </p>
                          <p className="text-xs font-bold font-mono text-emerald-800" style={{ direction: "ltr" }}>
                            {q.correctAnswer}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom celebration panel if exercise is achieved */}
          <div className="rounded-2xl border-2 border-dashed border-emerald-200 bg-emerald-500/5 p-6 text-center space-y-3" style={{ direction: "rtl" }}>
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
              <Sparkles className="h-6 w-6 animate-spin" />
            </div>
            <h4 className="text-md font-extrabold text-emerald-900 font-sans">
              انتهيت من التدقيق في أسئلة هذا التمرين؟ 🎉
            </h4>
            <p className="text-xs text-gray-650 max-w-md mx-auto leading-relaxed">
              يمكنك مراجعة كافة نقاطك وصحتك الكلية بانتظام من شريط الإنجاز. اضغط على التمارين الأخرى في الأعلى لاستكمال كامل الوحدات المطلوبة!
            </p>
            {activeExerciseIdx < lesson.exercises.length - 1 && (
              <button
                onClick={() => setActiveExerciseIdx(activeExerciseIdx + 1)}
                className="inline-flex items-center gap-1 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 text-xs font-bold transition-all shadow-md cursor-pointer"
              >
                انتقل للتمرين التالي
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
