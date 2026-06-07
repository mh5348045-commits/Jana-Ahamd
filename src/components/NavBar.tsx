/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { GraduationCap, RotateCcw, Award, CheckCircle } from "lucide-react";

interface NavBarProps {
  totalPoints: number;
  totalCorrect: number;
  totalQuestions: number;
  onResetAll: () => void;
}

export const NavBar: React.FC<NavBarProps> = ({
  totalPoints,
  totalCorrect,
  totalQuestions,
  onResetAll
}) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/85 shadow-xs backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo / Brand Title with Academic Accent */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-md shadow-emerald-200">
            <GraduationCap className="h-6 w-6" id="logo-icon" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-gray-900 font-sans" id="brand-title">
              اختبارات كلية
            </h1>
            <p className="text-xxs font-mono text-emerald-600 uppercase tracking-widest leading-none">
              College Exams • Unit 1
            </p>
          </div>
        </div>

        {/* Global Stats and Action Buttons */}
        <div className="flex items-center gap-3 sm:gap-6">
          {/* Cumulative Score Pill */}
          <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 border border-emerald-150 text-emerald-800 shadow-xxs">
            <Award className="h-4.5 w-4.5 text-emerald-600 animate-pulse" />
            <div className="text-right">
              <span className="block text-xs font-mono font-bold leading-none">
                {totalPoints} Pts
              </span>
              <span className="hidden sm:inline text-xxs text-emerald-600 font-sans leading-none">
                النقاط الكلية
              </span>
            </div>
          </div>

          {/* Quick Progress Badge */}
          <div className="flex items-center gap-1.5 rounded-full bg-slate-50 px-3 py-1.5 border border-slate-200 text-slate-700">
            <CheckCircle className="h-4 w-4 text-emerald-500" />
            <span className="font-mono text-xs font-semibold">
              {totalCorrect}/{totalQuestions}
            </span>
          </div>

          {/* Elegant Reset Button */}
          <button
            onClick={() => {
              if (window.confirm("هل أنت متأكد من إعادة تعيين جميع الاختبارات والدرجات إلى الصفر؟")) {
                onResetAll();
              }
            }}
            id="reset-state-btn"
            className="group flex h-9 w-9 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 shadow-xs transition-all hover:border-rose-200 hover:bg-rose-50 hover:text-rose-600 focus:outline-hidden"
            title="إعادة تعيين كافة البيانات"
          >
            <RotateCcw className="h-4.5 w-4.5 transition-transform group-hover:rotate-[-45deg]" />
          </button>
        </div>
      </div>
    </header>
  );
};
