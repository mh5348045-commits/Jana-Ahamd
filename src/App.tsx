/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { lessonsData } from "./data";
import { NavBar } from "./components/NavBar";
import { Dashboard } from "./components/Dashboard";
import { LessonQuiz } from "./components/LessonQuiz";

export default function App() {
  // Navigation: activeLessonId directs to current lesson page, null goes to central dashboard
  const [activeLessonId, setActiveLessonId] = useState<string | null>(null);

  // States: persistently save user answers in client localStorage
  const [userAnswers, setUserAnswers] = useState<{
    [questionId: string]: { selected: any; isCorrect: boolean };
  }>(() => {
    const saved = localStorage.getItem("college_exams_unit1_answers");
    return saved ? JSON.parse(saved) : {};
  });

  // Sync state changes with localStorage
  useEffect(() => {
    localStorage.setItem("college_exams_unit1_answers", JSON.stringify(userAnswers));
  }, [userAnswers]);

  // Compute stats on fly
  let totalPoints = 0;
  let totalCorrect = 0;
  let totalQuestionsCount = 0;

  lessonsData.forEach((l) => {
    l.exercises.forEach((ex) => {
      ex.questions.forEach((q) => {
        totalQuestionsCount++;
        const ans = userAnswers[q.id];
        if (ans) {
          if (ans.isCorrect) {
            totalCorrect++;
            totalPoints += 10; // 10 points per correct answer
          }
        }
      });
    });
  });

  // Handle single question answers from any render modules
  const handleSaveAnswer = (questionId: string, selected: any, isCorrect: boolean) => {
    if (selected === null) {
      // Remove answer if reset
      const updated = { ...userAnswers };
      delete updated[questionId];
      setUserAnswers(updated);
    } else {
      setUserAnswers((prev) => ({
        ...prev,
        [questionId]: { selected, isCorrect }
      }));
    }
  };

  // Reset entire state callback
  const handleResetAll = () => {
    setUserAnswers({});
    localStorage.removeItem("college_exams_unit1_answers");
    setActiveLessonId(null);
  };

  const activeLessonObject = lessonsData.find((l) => l.id === activeLessonId);

  return (
    <div className="min-h-screen bg-slate-50/70 text-gray-800 selection:bg-emerald-500/10 selection:text-emerald-800">
      {/* Top Header */}
      <NavBar
        totalPoints={totalPoints}
        totalCorrect={totalCorrect}
        totalQuestions={totalQuestionsCount}
        onResetAll={handleResetAll}
      />

      {/* Main Content Pane */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {activeLessonObject ? (
          <LessonQuiz
            lesson={activeLessonObject}
            userAnswers={userAnswers}
            onSaveAnswer={handleSaveAnswer}
            onGoBack={() => setActiveLessonId(null)}
          />
        ) : (
          <Dashboard
            lessons={lessonsData}
            userAnswers={userAnswers}
            onSelectLesson={setActiveLessonId}
            totalPoints={totalPoints}
          />
        )}
      </main>

      {/* Humble credit line, keeping it beautiful and extremely clean without telemetry larping */}
      <footer className="w-full border-t border-gray-200/50 py-6 text-center text-xs text-gray-400 font-sans mt-12 bg-white/40">
        <p>© 2026 اختبارات كلية • جميع الحقوق محفوظة لطلاب الكليات الطبية والتغذية</p>
      </footer>
    </div>
  );
}
