/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Lesson } from "../types";
import { BookOpen, Award, CheckCircle2, LayoutGrid, Clock, Lock, Send } from "lucide-react";

interface DashboardProps {
  lessons: Lesson[];
  userAnswers: { [questionId: string]: { selected: any; isCorrect: boolean } };
  onSelectLesson: (lessonId: string) => void;
  totalPoints: number;
}

interface Unit {
  id: string;
  number: number;
  titleAr: string;
  titleEn: string;
  status: "active" | "locked";
  description: string;
}

export const Dashboard: React.FC<DashboardProps> = ({
  lessons,
  userAnswers,
  onSelectLesson,
  totalPoints
}) => {
  // State to manage selected Unit
  const [selectedUnitId, setSelectedUnitId] = useState<string>("unit1");

  const handleUnitSelect = (unitId: string) => {
    setSelectedUnitId(unitId);
    
    // Smooth scroll to lessons section instantly
    setTimeout(() => {
      const element = document.getElementById("lessons-section");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 60);
  };

  // Define the units database - extremely easy to add more units in the future!
  const units: Unit[] = [
    {
      id: "unit1",
      number: 1,
      titleAr: "قواعد ومصطلحات التغذية",
      titleEn: "Nutrition & Health Science",
      status: "active",
      description: "صيغ المبني للمجهول، تعابير المجاز، قطعة فهم القراءة، والمصطلحات الطبية للتخصيص."
    },
    {
      id: "unit2",
      number: 2,
      titleAr: "السببية والمصطلحات المتقدمة",
      titleEn: "Causative & Medical Vocab",
      status: "active",
      description: "قواعد السببية Have & Get، كنايات التغذية (D, E, F)، قطعة الممارسة السريرية، والمصطلحات المتقدمة."
    },
    {
      id: "unit3",
      number: 3,
      titleAr: "التمنيات وكنايات الغذاء التخصصية",
      titleEn: "Wish Patterns & Nutrition Idioms",
      status: "active",
      description: "قواعد التمني Wish، كنايات التغذية (G, H, I)، قطعة قراءة التوعية الصحية، والمصطلحات والسيناريوهات الفسيولوجية."
    },
    {
      id: "unit4",
      number: 4,
      titleAr: "الممارسات اليومية والتواصل التخصصي",
      titleEn: "Daily Practice & Professional Comm",
      status: "active",
      description: "الأفعال الاصطلاحية بالتغذية، الكنايات والمصطلحات (J, K, L)، قطعة القراءة اليومية، والبيولوجيا والدراسة السريرية."
    }
  ];

  // Filter lessons based on active unit
  const currentUnitLessons = lessons.filter((lesson) => {
    if (selectedUnitId === "unit2") {
      return lesson.id.startsWith("unit2-");
    }
    if (selectedUnitId === "unit3") {
      return lesson.id.startsWith("unit3-");
    }
    if (selectedUnitId === "unit4") {
      return lesson.id.startsWith("unit4-");
    }
    // Default to Unit 1 (excludes unit 2, unit 3 and unit 4 lessons)
    return !lesson.id.startsWith("unit2-") && !lesson.id.startsWith("unit3-") && !lesson.id.startsWith("unit4-");
  });

  return (
    <div className="space-y-10" style={{ direction: "rtl" }}>

      {/* Elegant Unit Navigation Cards */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-slate-800 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            اختر الوحدة الدراسية المحددة (Select Unit)
          </h3>
          <span className="text-xs text-gray-400">انقر للتنقل بين الوحدات</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {units.map((unit) => {
            const isActive = unit.status === "active";
            const isSelected = selectedUnitId === unit.id;

            return (
              <button
                key={unit.id}
                onClick={() => handleUnitSelect(unit.id)}
                className={`relative overflow-hidden text-right p-5 rounded-2xl border transition-all text-sm outline-none ${
                  isSelected
                    ? "bg-emerald-950/5 border-emerald-300 shadow-sm ring-1 ring-emerald-400/25"
                    : isActive
                    ? "bg-white border-slate-200/80 hover:border-emerald-200 hover:bg-slate-50/50 cursor-pointer"
                    : "bg-slate-100/60 border-slate-200 opacity-60 hover:opacity-85 cursor-pointer"
                }`}
              >
                {/* Visual state icon */}
                <div className="absolute top-4 left-4">
                  {unit.status === "active" ? (
                    <span className="flex px-2 py-1 items-center justify-center rounded-md bg-emerald-100/80 text-emerald-700 text-[10px] font-extrabold leading-none font-mono tracking-wider uppercase">
                      Unit {unit.number}
                    </span>
                  ) : (
                    <Lock className="h-4 w-4 text-slate-400" />
                  )}
                </div>

                <div className="space-y-1 pl-6">
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-semibold ${
                      isSelected ? "text-emerald-700" : "text-slate-400"
                    }`}>
                      الوحدة {unit.number}
                    </span>
                    {unit.status === "active" && (
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    )}
                  </div>
                  <h4 className={`text-base font-bold transition-colors ${
                    isSelected ? "text-emerald-950" : "text-slate-800"
                  }`}>
                    {unit.titleAr}
                  </h4>
                  <p className="text-[11px] text-slate-400 font-mono tracking-wide">
                    {unit.titleEn}
                  </p>
                  <p className="text-[11px] text-slate-500 leading-normal line-clamp-2 pt-1 font-sans">
                    {unit.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Display Grid of Lessons if selected unit is active */}
      <div id="lessons-section" className="scroll-mt-24 transition-all duration-350">
        {selectedUnitId === "unit1" || selectedUnitId === "unit2" || selectedUnitId === "unit3" || selectedUnitId === "unit4" ? (
          <div className="space-y-5">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3 font-sans">
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                {selectedUnitId === "unit1" && "دروس واختبارات الوحدة الأولى"}
                {selectedUnitId === "unit2" && "دروس واختبارات الوحدة الثانية"}
                {selectedUnitId === "unit3" && "دروس واختبارات الوحدة الثالثة"}
                {selectedUnitId === "unit4" && "دروس واختبارات الوحدة الرابعة"}
              </h3>
              <p className="text-xs text-slate-400">انقر على أي درس لبدء حل الأسئلة الممتعة فوراً</p>
            </div>
            <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full font-semibold font-mono">
              {currentUnitLessons.length} دروس جاهزة
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {currentUnitLessons.map((lesson, idx) => {
              // Compute individual lesson stats
              let lessonQuestionsCount = 0;
              let lessonAnsweredCount = 0;

              lesson.exercises.forEach((ex) => {
                ex.questions.forEach((q) => {
                  lessonQuestionsCount++;
                  if (userAnswers[q.id]) {
                    lessonAnsweredCount++;
                  }
                });
              });

              const prog = lessonQuestionsCount
                ? Math.round((lessonAnsweredCount / lessonQuestionsCount) * 100)
                : 0;

              return (
                <div
                  key={lesson.id}
                  onClick={() => onSelectLesson(lesson.id)}
                  className="group flex flex-col justify-between bg-white rounded-2xl border border-slate-150 p-6 shadow-xxs hover:shadow-xs hover:border-emerald-250 transition-all cursor-pointer hover:-translate-y-0.5"
                >
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] uppercase font-bold text-emerald-600 font-mono tracking-wider bg-emerald-50/50 px-2 py-0.5 rounded">
                        LESSON {idx + 1}
                      </span>
                      {prog === 100 ? (
                        <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
                          كامل <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                        </span>
                      ) : prog > 0 ? (
                        <span className="text-xs font-semibold text-amber-600">
                          جاري الحل ({prog}%)
                        </span>
                      ) : (
                        <span className="text-xs text-slate-400 font-medium font-sans">
                          لم يبدأ
                        </span>
                      )}
                    </div>

                    <h4 className="text-base font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                      {lesson.titleAr}
                    </h4>
                    <p className="text-xs text-slate-400 font-mono leading-none">{lesson.title}</p>
                    <p className="text-xs text-slate-500 leading-relaxed mt-2 line-clamp-2">
                      {lesson.descriptionAr}
                    </p>
                  </div>

                  {/* Progress indicator bar inside card */}
                  <div className="mt-5 pt-4 border-t border-slate-50 space-y-2">
                    <div className="flex justify-between text-[11px] text-slate-400">
                      <span>الأسئلة المُجابة: {lessonAnsweredCount} من {lessonQuestionsCount}</span>
                      <span className="font-mono font-bold text-slate-700">{prog}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                        style={{ width: `${prog}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* If other Units are selected, show a beautiful, friendly, welcoming Arabic message encouraging the user to send their files */
        <div className="bg-slate-50 rounded-2xl border border-dashed border-slate-200 p-8 md:p-12 text-center max-w-2xl mx-auto space-y-4">
          <div className="mx-auto h-12 w-12 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-150">
            <Send className="h-5 w-5 animate-bounce" />
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-bold text-slate-800">بانتظار ملفات الوحدات القادمة 📁</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              هذه الواجهة جاهزة ومعدة تماماً لاستقبال الأسئلة القادمة. بمجرد أن ترسل لي في المحادثة نصوص أو سلايدات أو أسئلة اليونتين الثالث أو الرابع سأقوم بدمجها وبرمجتها لك في هذه القائمة تلقائياً فوراً!
            </p>
          </div>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => handleUnitSelect("unit1")}
              className="inline-flex items-center gap-2 rounded-full bg-slate-600 px-4 py-1.5 text-xs font-semibold text-white hover:bg-slate-700 transition"
            >
              الذهاب لليونت الأول
            </button>
            <button
              onClick={() => handleUnitSelect("unit2")}
              className="inline-flex items-center gap-2 rounded-full bg-slate-600 px-4 py-1.5 text-xs font-semibold text-white hover:bg-slate-700 transition"
            >
              الذهاب لليونت الثاني
            </button>
            <button
              onClick={() => handleUnitSelect("unit3")}
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-1.5 text-xs font-semibold text-white hover:bg-emerald-700 transition"
            >
              الذهاب لليونت الثالث الجديد
            </button>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};
