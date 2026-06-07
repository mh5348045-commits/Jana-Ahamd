/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Lesson, QuestionType } from "./types";

export const lessonsData: Lesson[] = [
  {
    id: "lesson1",
    title: "Lesson 1: Grammar - The Passive Voice",
    titleAr: "الدرس 1: القواعد - المبني للمجهول (The Passive Voice)",
    description: "Learn how to use passive voice in the context of nutrition science.",
    descriptionAr: "تعلم كيفية استخدام صيغة المبني للمجهول في سياق علوم التغذية.",
    exercises: [
      {
        id: "l1-ex1",
        name: "Exercise 1: Change into the passive voice",
        nameAr: "التمرين 1: تحويل الجمل إلى المبني للمجهول (اختر الإجابة الصحيحة)",
        questions: [
          {
            id: "l1ex1-q1",
            type: QuestionType.MCQ,
            instruction: "Identify the correct passive voice version of: 'Nutritionists recommend a balanced diet.'",
            instructionAr: "اختر الجملة الصحيحة بصيغة المبني للمجهول لـ: 'ينصح أخصائيو التغذية بنظام غذائي متوازن.'",
            question: "Nutritionists recommend a balanced diet.",
            options: [
              "A balanced diet is recommended by nutritionists.",
              "A balanced diet they recommend by nutritionists.",
              "A balanced diet recommend nutritionists.",
              "A balanced diet is recommending by nutritionists."
            ],
            correctAnswer: "A balanced diet is recommended by nutritionists.",
            explanationAr: "الحل الصحيح: المفعول به أتى في البداية 'A balanced diet' متبوعًا بـ 'is' والتصريف الثالث للمجهول 'recommended'."
          },
          {
            id: "l1ex1-q2",
            type: QuestionType.MCQ,
            instruction: "Identify the correct passive voice version of: 'Scientists study the effects of sugar.'",
            instructionAr: "اختر الجملة الصحيحة بصيغة المبني للمجهول لـ: 'يدرس العلماء تأثيرات السكر.'",
            question: "Scientists study the effects of sugar.",
            options: [
              "The effects of sugar are studied by scientists.",
              "The effects of sugar is studied by scientists.",
              "The effects of sugar was studied by scientists.",
              "The effects of sugar are study by scientists."
            ],
            correctAnswer: "The effects of sugar are studied by scientists.",
            explanationAr: "تأثيرات السكر جمع 'effects' لذا نستخدم 'are' ثم التصريف الثالث 'studied'."
          },
          {
            id: "l1ex1-q3",
            type: QuestionType.MCQ,
            instruction: "Identify the correct passive voice version of: 'Doctors prescribe dietary supplements.'",
            instructionAr: "اختر الجملة الصحيحة بصيغة المبني للمجهول لـ: 'يصف الأطباء المكملات الغذائية.'",
            question: "Doctors prescribe dietary supplements.",
            options: [
              "Dietary supplements is prescribed by doctors.",
              "Dietary supplements are prescribed by doctors.",
              "Dietary supplements prescribe by doctors.",
              "Dietary supplements were prescribing by doctors."
            ],
            correctAnswer: "Dietary supplements are prescribed by doctors.",
            explanationAr: "المكملات الغذائية جمع 'supplements' لذا نستخدم 'are' مع التصريف الثالث 'prescribed'."
          },
          {
            id: "l1ex1-q4",
            type: QuestionType.MCQ,
            instruction: "Identify the correct passive voice version of: 'Researchers conduct nutrition surveys.'",
            instructionAr: "اختر الجملة الصحيحة بصيغة المبني للمجهول لـ: 'يجري الباحثون استطلاعات التغذية.'",
            question: "Researchers conduct nutrition surveys.",
            options: [
              "Nutrition surveys are conducted by researchers.",
              "Nutrition surveys is conducted by researchers.",
              "Nutrition surveys conducted by researchers.",
              "Nutrition surveys were conducting by researchers."
            ],
            correctAnswer: "Nutrition surveys are conducted by researchers.",
            explanationAr: "الاستطلاعات جمع 'surveys' لذا تأخذ الفعل المساعد 'are' مع التصريف الثالث 'conducted'."
          },
          {
            id: "l1ex1-q5",
            type: QuestionType.MCQ,
            instruction: "Identify the correct passive voice version of: 'Chefs prepare healthy meals.'",
            instructionAr: "اختر الجملة الصحيحة بصيغة المبني للمجهول لـ: 'يعد الطهاة وجبات صحية.'",
            question: "Chefs prepare healthy meals.",
            options: [
              "Healthy meals was prepared by chefs.",
              "Healthy meals are prepared by chefs.",
              "Healthy meals are prepare by chefs.",
              "Healthy meals prepare by chefs."
            ],
            correctAnswer: "Healthy meals are prepared by chefs.",
            explanationAr: "الوجبات الصحية جمع 'meals' فترتكز على استخدام 'are' + 'prepared'."
          },
          {
            id: "l1ex1-q6",
            type: QuestionType.MCQ,
            instruction: "Identify the correct passive voice version of: 'Experts analyze food samples.'",
            instructionAr: "اختر الجملة الصحيحة بصيغة المبني للمجهول لـ: 'يحلل الخبراء عينات الأغذية.'",
            question: "Experts analyze food samples.",
            options: [
              "Food samples are analyzed by experts.",
              "Food samples is analyzed by experts.",
              "Food samples analyze by experts.",
              "Food samples were been analyzed by experts."
            ],
            correctAnswer: "Food samples are analyzed by experts.",
            explanationAr: "العينات جمع 'samples' فنأخذ الفعل المساعد 'are' وتصريف 'analyze' إلى 'analyzed'."
          },
          {
            id: "l1ex1-q7",
            type: QuestionType.MCQ,
            instruction: "Identify the correct passive voice version of: 'Companies fortify cereals with iron.'",
            instructionAr: "اختر الجملة الصحيحة بصيغة المبني للمجهول لـ: 'تدعم الشركات حبوب الإفطار بالحديد.'",
            question: "Companies fortify cereals with iron.",
            options: [
              "Cereals are fortified with iron by companies.",
              "Cereals is fortified with iron by companies.",
              "Cereals fortify with iron by companies.",
              "Cereals are fortifying with iron by companies."
            ],
            correctAnswer: "Cereals are fortified with iron by companies.",
            explanationAr: "الحبوب جمع 'cereals' فنستخدم 'are' مع التصريف الثالث لـ'fortify' وهو 'fortified'."
          },
          {
            id: "l1ex1-q8",
            type: QuestionType.MCQ,
            instruction: "Identify the correct passive voice version of: 'Dietitians design meal plans.'",
            instructionAr: "اختر الجملة الصحيحة بصيغة المبني للمجهول لـ: 'يصمم أخصائيو التغذية خطط الوجبات.'",
            question: "Dietitians design meal plans.",
            options: [
              "Meal plans are designed by dietitians.",
              "Meal plans is designed by dietitians.",
              "Meal plans designed by dietitians.",
              "Meal plans was designed by dietitians."
            ],
            correctAnswer: "Meal plans are designed by dietitians.",
            explanationAr: "خطط الوجبات جمع 'meal plans' فنستعمل 'are designed'."
          },
          {
            id: "l1ex1-q9",
            type: QuestionType.MCQ,
            instruction: "Identify the correct passive voice version of: 'Farmers produce organic vegetables.'",
            instructionAr: "اختر الجملة الصحيحة بصيغة المبني للمجهول لـ: 'ينتج المزارعون خضروات عضوية.'",
            question: "Farmers produce organic vegetables.",
            options: [
              "Organic vegetables is produced by farmers.",
              "Organic vegetables are produced by farmers.",
              "Organic vegetables are produce by farmers.",
              "Organic vegetables produced by farmers."
            ],
            correctAnswer: "Organic vegetables are produced by farmers.",
            explanationAr: "الخضروات جمع 'vegetables' لذلك تلائمها 'are' مع التصريف الثالث 'produced'."
          },
          {
            id: "l1ex1-q10",
            type: QuestionType.MCQ,
            instruction: "Identify the correct passive voice version of: 'Laboratories test food safety.'",
            instructionAr: "اختر الجملة الصحيحة بصيغة المبني للمجهول لـ: 'تختبر المختبرات سلامة الأغذية.'",
            question: "Laboratories test food safety.",
            options: [
              "Food safety is tested by laboratories.",
              "Food safety are tested by laboratories.",
              "Food safety tested by laboratories.",
              "Food safety is testing by laboratories."
            ],
            correctAnswer: "Food safety is tested by laboratories.",
            explanationAr: "سلامة الأغذية مفرد 'Food safety' نأخذ 'is' متبوعة بـ 'tested' وهو التصريف الثالث لفعل 'test'."
          }
        ]
      },
      {
        id: "l1-ex2",
        name: "Exercise 2: Choose the correct passive auxiliary",
        nameAr: "التمرين 2: اختر الفعل المساعد المناسب للمبني للمجهول",
        questions: [
          {
            id: "l1ex2-q1",
            type: QuestionType.BINARY,
            instruction: "Choose the correct form to complete: 'Vitamins _____ absorbed in the intestine.'",
            instructionAr: "اختر التكملة الصحيحة لـ: الفيتامينات تُمتص في الأمعاء.",
            sentenceBefore: "Vitamins",
            sentenceAfter: "absorbed in the intestine.",
            options: ["is", "are"],
            correctAnswer: "are",
            explanationAr: "كلمة 'Vitamins' جمع، ولذا تأخذ الفعل المساعد 'are'."
          },
          {
            id: "l1ex2-q2",
            type: QuestionType.BINARY,
            instruction: "Choose the correct form to complete: 'The diet plan _____ approved by the clinic.'",
            instructionAr: "اختر التكملة الصحيحة لـ: خطة التغذية تمت الموافقة عليها من العيادة.",
            sentenceBefore: "The diet plan",
            sentenceAfter: "approved by the clinic.",
            options: ["was", "were"],
            correctAnswer: "was",
            explanationAr: "كلمة 'diet plan' مفرد، لذا تأخذ الفعل المساعد في الماضي للمفرد 'was'."
          },
          {
            id: "l1ex2-q3",
            type: QuestionType.BINARY,
            instruction: "Choose the correct form to complete: 'Calories _____ counted daily.'",
            instructionAr: "اختر التكملة الصحيحة لـ: السعرات الحرارية تُحتسب يومياً.",
            sentenceBefore: "Calories",
            sentenceAfter: "counted daily.",
            options: ["is", "are"],
            correctAnswer: "are",
            explanationAr: "كلمة 'Calories' جمع، لذا يجب استخدام 'are'."
          },
          {
            id: "l1ex2-q4",
            type: QuestionType.BINARY,
            instruction: "Choose the correct form to complete: 'Food labels _____ checked carefully.'",
            instructionAr: "اختر التكملة الصحيحة لـ: ملصقات الأغذية فُحصت بعناية.",
            sentenceBefore: "Food labels",
            sentenceAfter: "checked carefully.",
            options: ["was", "were"],
            correctAnswer: "were",
            explanationAr: "كلمة 'Food labels' جمع في زمن الماضي، فنستخدم 'were'."
          },
          {
            id: "l1ex2-q5",
            type: QuestionType.BINARY,
            instruction: "Choose the correct form to complete: 'Proteins _____ needed for growth.'",
            instructionAr: "اختر التكملة الصحيحة لـ: البروتينات ضرورية (مطلوبة) للنمو.",
            sentenceBefore: "Proteins",
            sentenceAfter: "needed for growth.",
            options: ["is", "are"],
            correctAnswer: "are",
            explanationAr: "كلمة 'Proteins' جمع، فنستعمل 'are'."
          },
          {
            id: "l1ex2-q6",
            type: QuestionType.BINARY,
            instruction: "Choose the correct form to complete: 'The experiment _____ conducted last week.'",
            instructionAr: "اختر التكملة الصحيحة لـ: أُجريت التجربة الأسبوع الماضي.",
            sentenceBefore: "The experiment",
            sentenceAfter: "conducted last week.",
            options: ["is", "was"],
            correctAnswer: "was",
            explanationAr: "وجود 'last week' يدل على الزمن الماضي البسيط لفاعل مفرد، فنستخدم 'was'."
          },
          {
            id: "l1ex2-q7",
            type: QuestionType.BINARY,
            instruction: "Choose the correct form to complete: 'Nutrients _____ lost during cooking.'",
            instructionAr: "اختر التكملة الصحيحة لـ: العناصر الغذائية تُفقد أثناء الطهي.",
            sentenceBefore: "Nutrients",
            sentenceAfter: "lost during cooking.",
            options: ["are", "were"],
            correctAnswer: "are",
            explanationAr: "علاقة عامة علمية تناسب المضارع البسيط للجمع 'Nutrients'، فنختار 'are'."
          },
          {
            id: "l1ex2-q8",
            type: QuestionType.BINARY,
            instruction: "Choose the correct form to complete: 'A report _____ written by the researcher.'",
            instructionAr: "اختر التكملة الصحيحة لـ: كُتِب التقرير بواسطة الباحث.",
            sentenceBefore: "A report",
            sentenceAfter: "written by the researcher.",
            options: ["is", "are"],
            correctAnswer: "is",
            explanationAr: "كلمة 'A report' مفرد، لذا تأخذ 'is' وليس 'are'."
          },
          {
            id: "l1ex2-q9",
            type: QuestionType.BINARY,
            instruction: "Choose the correct form to complete: 'The meal _____ prepared this morning.'",
            instructionAr: "اختر التكملة الصحيحة لـ: أُعدت الوجبة هذا الصباح.",
            sentenceBefore: "The meal",
            sentenceAfter: "prepared this morning.",
            options: ["is", "was"],
            correctAnswer: "was",
            explanationAr: "عبر الصباح 'this morning' للماضي القريب المستكمل، فنختار 'was'."
          },
          {
            id: "l1ex2-q10",
            type: QuestionType.BINARY,
            instruction: "Choose the correct form to complete: 'Data _____ collected regularly.'",
            instructionAr: "اختر التكملة الصحيحة لـ: البيانات تُجمع بانتظام.",
            sentenceBefore: "Data",
            sentenceAfter: "collected regularly.",
            options: ["is", "are"],
            correctAnswer: "are",
            explanationAr: "تعتبر كلمة 'Data' جمعًا (مفردها datum) في المصطلحات الأكاديمية والعلمية، لذا تأخذ 'are'."
          }
        ]
      },
      {
        id: "l1-ex3",
        name: "Exercise 3: Rewrite (with agent omitted if possible)",
        nameAr: "التمرين 3: إعادة الصياغة للمجهول (مع حذف فاعل الجملة إن أمكن)",
        questions: [
          {
            id: "l1ex3-q1",
            type: QuestionType.MCQ,
            instruction: "Select the best passive sentence without an unnecessary agent for: 'The nutritionist explains the food pyramid.'",
            instructionAr: "اختر أفضل جملة للمجهول (دون فاعل زائد) لـ: 'يشرح خبير التغذية الهرم الغذائي.'",
            question: "The nutritionist explains the food pyramid.",
            options: [
              "The food pyramid is explained.",
              "The food pyramid explains.",
              "The food pyramid was explanation.",
              "The food pyramid are explained."
            ],
            correctAnswer: "The food pyramid is explained.",
            explanationAr: "الهرم الغذائي مفرد 'The food pyramid' ويتم شرحه بالمضارع البسيط للمجهول 'is explained'."
          },
          {
            id: "l1ex3-q2",
            type: QuestionType.MCQ,
            instruction: "Select the best passive sentence without an unnecessary agent for: 'The company adds vitamins to milk.'",
            instructionAr: "اختر أفضل جملة للمجهول لـ: 'تضيف الشركة الفيتامينات إلى الحليب.'",
            question: "The company adds vitamins to milk.",
            options: [
              "Vitamins are added to milk.",
              "Vitamins is added to milk.",
              "Milk is add with vitamins.",
              "Vitamins added to milk."
            ],
            correctAnswer: "Vitamins are added to milk.",
            explanationAr: "الفيتامينات جمع 'Vitamins' فنستخدم 'are added' وتكملة الجملة 'to milk' دون ذكر الشركة لأنها مفهومة."
          },
          {
            id: "l1ex3-q3",
            type: QuestionType.MCQ,
            instruction: "Select the best passive sentence without an unnecessary agent for: 'Researchers publish the results.'",
            instructionAr: "اختر أفضل جملة للمجهول لـ: 'ينشر الباحثون النتائج.'",
            question: "Researchers publish the results.",
            options: [
              "The results are published.",
              "The results is published.",
              "The results publishes.",
              "The results was published."
            ],
            correctAnswer: "The results are published.",
            explanationAr: "النتائج جمع 'The results' فنأخذ 'are' متبوعة بالتصريف الثالث 'published'."
          },
          {
            id: "l1ex3-q4",
            type: QuestionType.MCQ,
            instruction: "Select the best passive sentence without an unnecessary agent for: 'The chef cooks the vegetables.'",
            instructionAr: "اختر أفضل جملة للمجهول لـ: 'يطهو الطاهي الخضراوات.'",
            question: "The chef cooks the vegetables.",
            options: [
              "The vegetables are cooked.",
              "The vegetables is cooked.",
              "The vegetables cooked by chef.",
              "The vegetables were cooking."
            ],
            correctAnswer: "The vegetables are cooked.",
            explanationAr: "الخضروات جمع 'The vegetables' فنستعمل 'are cooked'."
          },
          {
            id: "l1ex3-q5",
            type: QuestionType.MCQ,
            instruction: "Select the best passive sentence without an unnecessary agent for: 'The lab measures fat content.'",
            instructionAr: "اختر أفضل جملة للمجهول لـ: 'يقيس المختبر محتوى الدهون.'",
            question: "The lab measures fat content.",
            options: [
              "Fat content is measured.",
              "Fat content measures.",
              "Fat content are measured.",
              "Fat content was been measured."
            ],
            correctAnswer: "Fat content is measured.",
            explanationAr: "محتوى الدهون مفرد 'Fat content' فنقول 'is measured'."
          },
          {
            id: "l1ex3-q6",
            type: QuestionType.MCQ,
            instruction: "Select the best passive sentence without an unnecessary agent for: 'The clinic monitors patients.'",
            instructionAr: "اختر أفضل جملة للمجهول لـ: 'تراقب العيادة المرضى.'",
            question: "The clinic monitors patients.",
            options: [
              "Patients are monitored.",
              "Patients is monitored.",
              "Patients monitors.",
              "Patients was monitored."
            ],
            correctAnswer: "Patients are monitored.",
            explanationAr: "المرضى جمع 'Patients' فنستخدم 'are monitored'."
          },
          {
            id: "l1ex3-q7",
            type: QuestionType.MCQ,
            instruction: "Select the best passive sentence without an unnecessary agent for: 'Experts evaluate dietary habits.'",
            instructionAr: "اختر أفضل جملة للمجهول لـ: 'يقيم الخبراء العادات الغذائية.'",
            question: "Experts evaluate dietary habits.",
            options: [
              "Dietary habits are evaluated.",
              "Dietary habits is evaluated.",
              "Dietary habits evaluates.",
              "Dietary habits was evaluated."
            ],
            correctAnswer: "Dietary habits are evaluated.",
            explanationAr: "العادات الغذائية 'Dietary habits' جمع، فنضع 'are evaluated'."
          },
          {
            id: "l1ex3-q8",
            type: QuestionType.MCQ,
            instruction: "Select the best passive sentence without an unnecessary agent for: 'Farmers grow whole grains.'",
            instructionAr: "اختر أفضل جملة للمجهول لـ: 'يزرع المزارعون الحبوب الكاملة.'",
            question: "Farmers grow whole grains.",
            options: [
              "Whole grains are grown.",
              "Whole grains is grown.",
              "Whole grains growing.",
              "Whole grains was grown."
            ],
            correctAnswer: "Whole grains are grown.",
            explanationAr: "الحبوب الكاملة جمع 'Whole grains' والتصريف الثالث لـ'grow' هو 'grown'، فنستخدم 'are grown'."
          },
          {
            id: "l1ex3-q9",
            type: QuestionType.MCQ,
            instruction: "Select the best passive sentence without an unnecessary agent for: 'Doctors recommend low-sodium diets.'",
            instructionAr: "اختر أفضل جملة للمجهول لـ: 'يوصي الأطباء بحمية منخفضة الصوديوم.'",
            question: "Doctors recommend low-sodium diets.",
            options: [
              "Low-sodium diets are recommended.",
              "Low-sodium diets is recommended.",
              "Low-sodium diets recommended.",
              "Low-sodium diets was recommend."
            ],
            correctAnswer: "Low-sodium diets are recommended.",
            explanationAr: "الوصفات الغذائية منخفضة الصوديوم جمع 'Low-sodium diets' فنستخدم 'are recommended'."
          },
          {
            id: "l1ex3-q10",
            type: QuestionType.MCQ,
            instruction: "Select the best passive sentence without an unnecessary agent for: 'Scientists discover new nutrients.'",
            instructionAr: "اختر أفضل جملة للمجهول لـ: 'يكتشف العلماء عناصر غذائية جديدة.'",
            question: "Scientists discover new nutrients.",
            options: [
              "New nutrients are discovered.",
              "New nutrients is discovered.",
              "New nutrients discover.",
              "New nutrients were discovering."
            ],
            correctAnswer: "New nutrients are discovered.",
            explanationAr: "العناصر الغذائية جمع 'New nutrients' فنستخدم 'are discovered' لحذف الفاعل غير الضروري."
          }
        ]
      },
      {
        id: "l1-ex4",
        name: "Exercise 4: Active or Passive Identification",
        nameAr: "التمرين 4: تحديد نوع الجملة (مبني للمعلوم أم مبني للمجهول)",
        questions: [
          {
            id: "l1ex4-q1",
            type: QuestionType.BINARY,
            instruction: "Identify if the sentence is Active or Passive: 'Calcium is needed for strong bones.'",
            instructionAr: "حدد ما إذا كانت الجملة مبنية للمعلوم (Active) أم للمجهول (Passive): 'Calcium is needed for strong bones.'",
            sentenceBefore: "Calcium is needed for strong bones.",
            sentenceAfter: "",
            options: ["Active (معلوم)", "Passive (مجهول)"],
            correctAnswer: "Passive (مجهول)",
            explanationAr: "الجملة تحتوي على 'is needed' (be + past participle) وهي للمجهول."
          },
          {
            id: "l1ex4-q2",
            type: QuestionType.BINARY,
            instruction: "Identify if the sentence is Active or Passive: 'The dietitian plans healthy meals.'",
            instructionAr: "حدد ما إذا كانت الجملة مبنية للمعلوم أم للمجهول: 'The dietitian plans healthy meals.'",
            sentenceBefore: "The dietitian plans healthy meals.",
            sentenceAfter: "",
            options: ["Active (معلوم)", "Passive (مجهول)"],
            correctAnswer: "Active (معلوم)",
            explanationAr: "الفاعل موجود في البداية 'The dietitian' وفعل مضارع بسيط 'plans'، لذا هي مسندة للمعلوم."
          },
          {
            id: "l1ex4-q3",
            type: QuestionType.BINARY,
            instruction: "Identify if the sentence is Active or Passive: 'Fiber is found in whole grains.'",
            instructionAr: "حدد ما إذا كانت الجملة مبنية للمعلوم أم للمجهول: 'Fiber is found in whole grains.'",
            sentenceBefore: "Fiber is found in whole grains.",
            sentenceAfter: "",
            options: ["Active (معلوم)", "Passive (مجهول)"],
            correctAnswer: "Passive (مجهول)",
            explanationAr: "الفعل 'is found' (مضارع مبني للمجهول)."
          },
          {
            id: "l1ex4-q4",
            type: QuestionType.BINARY,
            instruction: "Identify if the sentence is Active or Passive: 'The researcher analyzed the data.'",
            instructionAr: "حدد ما إذا كانت الجملة مبنية للمعلوم أم للمجهول: 'The researcher analyzed the data.'",
            sentenceBefore: "The researcher analyzed the data.",
            sentenceAfter: "",
            options: ["Active (معلوم)", "Passive (مجهول)"],
            correctAnswer: "Active (معلوم)",
            explanationAr: "الفاعل 'The researcher' قام بالفعل 'analyzed' في الماضي البسيط، فهي مبنية للمعلوم."
          },
          {
            id: "l1ex4-q5",
            type: QuestionType.BINARY,
            instruction: "Identify if the sentence is Active or Passive: 'Vitamins are destroyed by heat.'",
            instructionAr: "حدد ما إذا كانت الجملة مبنية للمعلوم أم للمجهول: 'Vitamins are destroyed by heat.'",
            sentenceBefore: "Vitamins are destroyed by heat.",
            sentenceAfter: "",
            options: ["Active (معلوم)", "Passive (مجهول)"],
            correctAnswer: "Passive (مجهول)",
            explanationAr: "الفعل 'are destroyed' متبوع بـ 'by heat'، وهو صريح في كونه مبنيًا للمجهول."
          },
          {
            id: "l1ex4-q6",
            type: QuestionType.BINARY,
            instruction: "Identify if the sentence is Active or Passive: 'People consume too much sugar.'",
            instructionAr: "حدد ما إذا كانت الجملة مبنية للمعلوم أم للمجهول: 'People consume too much sugar.'",
            sentenceBefore: "People consume too much sugar.",
            sentenceAfter: "",
            options: ["Active (معلوم)", "Passive (مجهول)"],
            correctAnswer: "Active (معلوم)",
            explanationAr: "الفاعل 'People' يقوم بفعل الاستهلاك 'consume'، لذا هي مبنية للمعلوم."
          },
          {
            id: "l1ex4-q7",
            type: QuestionType.BINARY,
            instruction: "Identify if the sentence is Active or Passive: 'Meals are prepared carefully.'",
            instructionAr: "حدد ما إذا كانت الجملة مبنية للمعلوم أم للمجهول: 'Meals are prepared carefully.'",
            sentenceBefore: "Meals are prepared carefully.",
            sentenceAfter: "",
            options: ["Active (معلوم)", "Passive (مجهول)"],
            correctAnswer: "Passive (مجهول)",
            explanationAr: "الفعل هو 'are prepared' مبني للمجهول لعدم ذكر الفاعل الصريح."
          },
          {
            id: "l1ex4-q8",
            type: QuestionType.BINARY,
            instruction: "Identify if the sentence is Active or Passive: 'Nutrition guidelines were updated.'",
            instructionAr: "حدد ما إذا كانت الجملة مبنية للمعلوم أم للمجهول: 'Nutrition guidelines were updated.'",
            sentenceBefore: "Nutrition guidelines were updated.",
            sentenceAfter: "",
            options: ["Active (معلوم)", "Passive (مجهول)"],
            correctAnswer: "Passive (مجهول)",
            explanationAr: "الفعل في الماضي المبني للمجهول 'were updated'."
          },
          {
            id: "l1ex4-q9",
            type: QuestionType.BINARY,
            instruction: "Identify if the sentence is Active or Passive: 'The study focuses on obesity.'",
            instructionAr: "حدد ما إذا كانت الجملة مبنية للمعلوم أم للمجهول: 'The study focuses on obesity.'",
            sentenceBefore: "The study focuses on obesity.",
            sentenceAfter: "",
            options: ["Active (معلوم)", "Passive (مجهول)"],
            correctAnswer: "Active (معلوم)",
            explanationAr: "الدراسة 'The study' هي الفاعل والفعل 'focuses' مبني للمعلوم."
          },
          {
            id: "l1ex4-q10",
            type: QuestionType.BINARY,
            instruction: "Identify if the sentence is Active or Passive: 'Minerals are absorbed slowly.'",
            instructionAr: "حدد ما إذا كانت الجملة مبنية للمعلوم أم للمجهول: 'Minerals are absorbed slowly.'",
            sentenceBefore: "Minerals are absorbed slowly.",
            sentenceAfter: "",
            options: ["Active (معلوم)", "Passive (مجهول)"],
            correctAnswer: "Passive (مجهول)",
            explanationAr: "المعادن 'Minerals' مفعول به يتبعه 'are absorbed' للمجهول."
          }
        ]
      }
    ]
  },
  {
    id: "lesson2",
    title: "Lesson 2: Nutrition Idioms (A, B, C)",
    titleAr: "الدرس 2: مصطلحات التغذية ومجازاتها (A, B, C)",
    description: "Connect common cultural idioms originating from food and eating habits to their real definitions.",
    descriptionAr: "تعلم المصطلحات المجازية الشائعة المرتبطة بالأغذية ومعانيها وطرق تركيبها.",
    exercises: [
      {
        id: "l2-ex1",
        name: "Exercise 1: Match Idioms with Meanings",
        nameAr: "التمرين 1: وصِّل المصطلحات المجازية بمعانيها الصحيحة",
        questions: [
          {
            id: "l2ex1-q1",
            type: QuestionType.MATCHING,
            instruction: "Match each Food/Nutrition Idiom with its corresponding meaning.",
            instructionAr: "قم بوصل كل مصطلح من الجهة اليمنى بالمعنى الأنسب له في الجهة اليسرى بالضغط عليهما بالتوالي.",
            pairs: [
              { id: "1", left: "Bite off more than you can chew", right: "Try to do something too difficult to handle" },
              { id: "2", left: "Cry over spilled milk", right: "Waste time worrying about past mistakes that cannot be undone" },
              { id: "3", left: "Bring home the bacon", right: "Earn a living or income to support the family" },
              { id: "4", left: "Cut down on", right: "Reduce the amount or consumption of something" },
              { id: "5", left: "Clean eating", right: "Adopting a diet based mostly on whole, unprocessed foods" },
              { id: "6", left: "Burn calories", right: "Expend energy through physical active exercise" },
              { id: "7", left: "Bread and butter", right: "Someone's main source of livelihood or an essential part" },
              { id: "8", left: "Cold turkey", right: "Suddenly and completely stopping a bad habit" },
              { id: "9", left: "Chew the fat", right: "Having a long, friendly, and leisurely chat" },
              { id: "10", left: "Back to basics", right: "Returning to fundamental principles or essential simple rules" }
            ]
          }
        ]
      },
      {
        id: "l2-ex2",
        name: "Exercise 2: Dropdown Blanks Fill",
        nameAr: "التمرين 2: املأ الفراغات بالاصطلاح المناسب (بدون كتابة)",
        questions: [
          {
            id: "l2ex2-q1",
            type: QuestionType.DROPDOWN,
            instruction: "Choose the correct idiom: 'To stay healthy, you should ___________.'",
            instructionAr: "اختر التكملة التعبيرية الملائمة للفراغ:",
            sentenceParts: ["To stay healthy, you should ", "."],
            options: ["clean eat", "cry over spilled milk", "chew the fat", "bring home the bacon"],
            correctAnswer: "clean eat",
            explanationAr: "ممارسة الأكل الصحي النظيف 'clean eat' (أو الأطعمة الطبيعية) هو الخيار الأنسب للصحة."
          },
          {
            id: "l2ex2-q2",
            type: QuestionType.DROPDOWN,
            instruction: "Choose the correct idiom: 'Walking daily helps you ___________.'",
            instructionAr: "اختر التكملة التعبيرية الملائمة لفوائد المشي اليومي:",
            sentenceParts: ["Walking daily helps you ", "."],
            options: ["burn calories", "bite off more than you can chew", "cold turkey", "bring home the bacon"],
            correctAnswer: "burn calories",
            explanationAr: "المشي اليومي يساهم في حرق السعرات الحرارية 'burn calories'."
          },
          {
            id: "l2ex2-q3",
            type: QuestionType.DROPDOWN,
            instruction: "Choose the correct idiom: 'Healthy food is the ___________ of nutrition.'",
            instructionAr: "اختر التكملة الملائمة لوصف الطعام الصحي في التغذية وطابعها البيئي:",
            sentenceParts: ["Healthy food is the ", " of nutrition."],
            options: ["bread and butter", "cold turkey", "chew the fat", "spilled milk"],
            correctAnswer: "bread and butter",
            explanationAr: "الغذاء الصحي هو الركيزة الأساسية 'bread and butter' لعلوم التغذية."
          },
          {
            id: "l2ex2-q4",
            type: QuestionType.DROPDOWN,
            instruction: "Choose the correct idiom: 'He quit junk food ___________.'",
            instructionAr: "اختر التكملة المعبرة عن الإقلاع المفاجئ عن الوجبات السريعة:",
            sentenceParts: ["He quit junk food ", "."],
            options: ["cold turkey", "clean eating", "cut down on", "bread and butter"],
            correctAnswer: "cold turkey",
            explanationAr: "التوقف فجأة وبشكل كامل عن شيء سيء يسمى 'cold turkey'."
          },
          {
            id: "l2ex2-q5",
            type: QuestionType.DROPDOWN,
            instruction: "Choose the correct idiom: 'There is no use to ___________ over spilled milk.'",
            instructionAr: "اختر التكملة التعبيرية للمثل الشهير (لا فائدة من البكاء على اللبن المسكوب):",
            sentenceParts: ["There is no use to ", " over spilled milk."],
            options: ["cry", "chew the fat", "bring home the bacon", "cut down on"],
            correctAnswer: "cry",
            explanationAr: "التعبير المكتمل هو 'cry over spilled milk' أي التحسر على الماضي."
          },
          {
            id: "l2ex2-q6",
            type: QuestionType.DROPDOWN,
            instruction: "Choose the correct idiom: 'Nutrition education should go ___________.'",
            instructionAr: "اختر التكملة الملائمة للعودة إلى المبادئ الأولية البسيطة:",
            sentenceParts: ["Nutrition education should go ", "."],
            options: ["back to basics", "cold turkey", "bring home the bacon", "chew the fat"],
            correctAnswer: "back to basics",
            explanationAr: "الذهاب إلى الأساسيات والتبسيط هو 'back to basics'."
          },
          {
            id: "l2ex2-q7",
            type: QuestionType.DROPDOWN,
            instruction: "Choose the correct idiom: 'They ___________ about healthy recipes.'",
            instructionAr: "اختر التكملة المناسبة للدردشة الودية وتداول الحديث الخفيف عن الوصفات:",
            sentenceParts: ["They ", " about healthy recipes."],
            options: ["chewed the fat", "cold turkey", "brought home the bacon", "cut down on"],
            correctAnswer: "chewed the fat",
            explanationAr: "يتداولون الحديث الودي والمسامرة 'chewed the fat' حول الوصفات الصحية."
          },
          {
            id: "l2ex2-q8",
            type: QuestionType.DROPDOWN,
            instruction: "Choose the correct idiom: 'A good job helps him ___________.'",
            instructionAr: "اختر التكملة الملائمة لكسب الرزق وتوفير الطعام للأسرة:",
            sentenceParts: ["A good job helps him ", "."],
            options: ["bring home the bacon", "back to basics", "chew the fat", "cold turkey"],
            correctAnswer: "bring home the bacon",
            explanationAr: "العمل الجيد يساعد في إعالة وتوفير احتياجات الأسرة 'bring home the bacon'."
          },
          {
            id: "l2ex2-q9",
            type: QuestionType.DROPDOWN,
            instruction: "Choose the correct idiom: 'She prefers ___________.'",
            instructionAr: "اختر التكملة المفضلة للتغذية العضوية النظيفة:",
            sentenceParts: ["She prefers ", "."],
            options: ["clean eating", "cold turkey", "chew the fat", "cry over spilled milk"],
            correctAnswer: "clean eating",
            explanationAr: "تفضيل الأكل الطبيعي غير المصنع يعرف بـ 'clean eating'."
          },
          {
            id: "l2ex2-q10",
            type: QuestionType.DROPDOWN,
            instruction: "Choose the correct idiom: 'Don't ___________ with an extreme diet.'",
            instructionAr: "اختر التكملة المعبرة عن الامتناع عن أخذ التزامات تفوق طاقتك:",
            sentenceParts: ["Don't ", " with an extreme diet."],
            options: ["bite off more than you can chew", "bring home the bacon", "chew the fat", "back to basics"],
            correctAnswer: "bite off more than you can chew",
            explanationAr: "التحذير من أخذ حميات مجهدة تفوق قدرة الشخص على التحمل 'bite off more than you can chew'."
          }
        ]
      },
      {
        id: "l2-ex3",
        name: "Exercise 3: Choose the correct idiom option",
        nameAr: "التمرين 3: اختر الاصطلاح والمجاز اللغوي الصحيح من بين القوسين",
        questions: [
          {
            id: "l2ex3-q1",
            type: QuestionType.BINARY,
            instruction: "Choose the logical idiom to complete: 'Eating fruits daily is like _____.'",
            instructionAr: "اختر الخيار التعبيري الصحيح: تناول الفواكه بانتظام...",
            sentenceBefore: "Eating fruits daily is like",
            sentenceAfter: ".",
            options: ["an apple a day", "cold turkey"],
            correctAnswer: "an apple a day",
            explanationAr: "المثل يقول 'an apple a day keeps the doctor away'."
          },
          {
            id: "l2ex3-q2",
            type: QuestionType.BINARY,
            instruction: "Choose the correct idiom context: 'He tried to avoid strict diets _____.'",
            instructionAr: "اختر المصطلح الملائم لـ تجنب الحميات القاسية كأنها وباء:",
            sentenceBefore: "He tried to avoid strict diets",
            sentenceAfter: ".",
            options: ["disease", "like the plague"],
            correctAnswer: "like the plague",
            explanationAr: "التجنب الشديد لشيء ما يوصف في الإنجليزية بـ 'like the plague'."
          },
          {
            id: "l2ex3-q3",
            type: QuestionType.BINARY,
            instruction: "Choose the correct idiom context: 'We must _____ it to its core.'",
            instructionAr: "اختر الخيار الأدق لاختصار الموضوع لتركيزه الأساسي وجوهره:",
            sentenceBefore: "We must",
            sentenceAfter: "it to its core.",
            options: ["boil down", "chew the fat"],
            correctAnswer: "boil down",
            explanationAr: "التلخيص الشديد والاختصار لعناصر جوهرية يعبر عنه بـ 'boil down'."
          },
          {
            id: "l2ex3-q4",
            type: QuestionType.BINARY,
            instruction: "Choose the correct idiom context: 'She _____ the dietitian to get advice.'",
            instructionAr: "اختر المصطلح المناسب لـ التملق أو التودد لشخص للحصول على ميزة أو نصيحة:",
            sentenceBefore: "She",
            sentenceAfter: "the dietitian to get advice.",
            options: ["buttered up", "cut down on"],
            correctAnswer: "buttered up",
            explanationAr: "'buttered up' تعني تملق وتودد بكلام جميل للحصول على منفعة."
          },
          {
            id: "l2ex3-q5",
            type: QuestionType.BINARY,
            instruction: "Choose the correct idiom context: 'The doctor said to _____ sugar.'",
            instructionAr: "اختر المصطلح المناسب لـ التقليل من استهلاك السكر:",
            sentenceBefore: "The doctor said to",
            sentenceAfter: "sugar.",
            options: ["cut down on", "burn calories"],
            correctAnswer: "cut down on",
            explanationAr: "التقليل من استهلاك مادة ما يوصف بـ 'cut down on'."
          },
          {
            id: "l2ex3-q6",
            type: QuestionType.BINARY,
            instruction: "Choose the correct idiom context: 'Healthy meals are served _____.'",
            instructionAr: "اختر المصطلح المناسب لتقديم الوجبات الصحية بضيافتها الطبيعية ومجالسها العامة:",
            sentenceBefore: "Healthy meals are served",
            sentenceAfter: ".",
            options: ["at the table", "back to basics"],
            correctAnswer: "at the table",
            explanationAr: "الجلوس وتقديم الطعام المنظم في المجالس السليمة يشار إليه بـ 'at the table'."
          },
          {
            id: "l2ex3-q7",
            type: QuestionType.BINARY,
            instruction: "Choose the correct idiom context: 'Quitting sugar _____ is hard.'",
            instructionAr: "اختر المصطلح للتوقف المفاجئ الكلي للتخلص من إدمان السكريات:",
            sentenceBefore: "Quitting sugar",
            sentenceAfter: "is hard.",
            options: ["cold turkey", "clean eating"],
            correctAnswer: "cold turkey",
            explanationAr: "'cold turkey' دلالة على الإقلاع النهائي السريع والمفاجئ."
          },
          {
            id: "l2ex3-q8",
            type: QuestionType.BINARY,
            instruction: "Choose the correct idiom context: 'Exercise helps _____.'",
            instructionAr: "اختر التكملة التعبيرية الحركية للتمارين الرياضية:",
            sentenceBefore: "Exercise helps",
            sentenceAfter: ".",
            options: ["burn calories", "cry over spilled milk"],
            correctAnswer: "burn calories",
            explanationAr: "التمارين الرياضية تساعد في حرق السعرات بشكل صريح 'burn calories'."
          },
          {
            id: "l2ex3-q9",
            type: QuestionType.BINARY,
            instruction: "Choose the correct idiom context: 'Don't _____ about past diet mistakes.'",
            instructionAr: "اختر المصطلح الذي يمنع الندم والتحسر على ما فات من أخطاء غذائية سابقًا:",
            sentenceBefore: "Don't",
            sentenceAfter: "about past diet mistakes.",
            options: ["cry over spilled milk", "bring home the bacon"],
            correctAnswer: "cry over spilled milk",
            explanationAr: "البكاء على اللبن المسكوب 'cry over spilled milk' هو الانزعاج على حوادث تمت وانتهت."
          },
          {
            id: "l2ex3-q10",
            type: QuestionType.BINARY,
            instruction: "Choose the correct idiom context: 'Nutrition is the _____ of our health.'",
            instructionAr: "اختر المصطلح المناسب لـ الركيزة والعمود الفقري لحياتنا الصحية كالتغذية:",
            sentenceBefore: "Nutrition is the",
            sentenceAfter: "of our health.",
            options: ["bread and butter", "chew the fat"],
            correctAnswer: "bread and butter",
            explanationAr: "الخبز والزبدة 'bread and butter' دلالة في السياق على ركيزة الشيء الأساسي."
          }
        ]
      },
      {
        id: "l2-ex4",
        name: "Exercise 4: Sentence Reconstruction Builder",
        nameAr: "التمرين 4: تركيب جمل التعبيرات التراثية (اضغط على الكلمات بالترتيب المناسب لتكوين الجملة)",
        questions: [
          {
            id: "l2ex4-q1",
            type: QuestionType.WORD_ORDER,
            instruction: "Build the correct sentence for the idiom: 'An apple a day keeps the doctor away.'",
            instructionAr: "قم بتركيب الجملة التعبيرية: تفاحة يومياً تغنيك عن الطبيب.",
            idiomOrTerm: "An apple a day",
            correctSentence: "An apple a day keeps the doctor away.",
            scrambledWords: ["keeps", "away", "doctor", "the", "a", "apple", "day", "An."],
            explanationAr: "المثل الإنكليزي الشهير هو: 'An apple a day keeps the doctor away.'"
          },
          {
            id: "l2ex4-q2",
            type: QuestionType.WORD_ORDER,
            instruction: "Build the correct sentence for: 'Burn calories'.",
            instructionAr: "قم بتركيب الجملة: الركض كل صباح يساعد في حرق السعرات.",
            idiomOrTerm: "Burn calories",
            correctSentence: "Running every morning helps to burn calories.",
            scrambledWords: ["burn", "every", "to", "helps", "morning", "calories.", "Running"],
            explanationAr: "الصياغة السليمة: 'Running every morning helps to burn calories.'"
          },
          {
            id: "l2ex4-q3",
            type: QuestionType.WORD_ORDER,
            instruction: "Build the correct sentence for: 'Cut down on'.",
            instructionAr: "قم بتركيب الجملة: أنت بحاجة للتقليل من الأطعمة المالحة.",
            idiomOrTerm: "Cut down on",
            correctSentence: "You need to cut down on salty foods.",
            scrambledWords: ["salty", "on", "need", "to", "foods.", "You", "cut", "down"],
            explanationAr: "تترتب الكلمات كالتالي: 'You need to cut down on salty foods.'"
          },
          {
            id: "l2ex4-q4",
            type: QuestionType.WORD_ORDER,
            instruction: "Build the correct sentence for: 'Bread and butter'.",
            instructionAr: "قم بتركيب الجملة: الوصفات الصحية هي مصدر عيشها الرئيسي.",
            idiomOrTerm: "Bread and butter",
            correctSentence: "Healthy recipes are her bread and butter.",
            scrambledWords: ["recipes", "butter.", "and", "bread", "Healthy", "are", "her"],
            explanationAr: "الجملة السليمة: 'Healthy recipes are her bread and butter.'"
          },
          {
            id: "l2ex4-q5",
            type: QuestionType.WORD_ORDER,
            instruction: "Build the correct sentence for: 'Clean eating'.",
            instructionAr: "قم بتركيب الجملة: تشعر بتحسن كبير بعد بدء تناول الأكل النظيف الطبيعي.",
            idiomOrTerm: "Clean eating",
            correctSentence: "She feels much better after starting clean eating.",
            scrambledWords: ["better", "clean", "She", "after", "starting", "feels", "eating.", "much"],
            explanationAr: "يتوافق البناء النحوي ليعطي: 'She feels much better after starting clean eating.'"
          },
          {
            id: "l2ex4-q6",
            type: QuestionType.WORD_ORDER,
            instruction: "Build the correct sentence for: 'Bite off more than you can chew'.",
            instructionAr: "قم بتركيب الجملة: لا تأخذ على عاتقك ما هو فوق طاقتك وقدرتك.",
            idiomOrTerm: "Bite off more than you can chew",
            correctSentence: "Do not bite off more than you can chew.",
            scrambledWords: ["more", "you", "not", "bite", "can", "chew.", "off", "than", "Do"],
            explanationAr: "بناء هذا التحذير السائد هو: 'Do not bite off more than you can chew.'"
          },
          {
            id: "l2ex4-q7",
            type: QuestionType.WORD_ORDER,
            instruction: "Build the correct sentence for: 'Cold turkey'.",
            instructionAr: "قم بتركيب الجملة: توقف عن التدخين وأقلع عنه فجأة تماسكاً.",
            idiomOrTerm: "Cold turkey",
            correctSentence: "He stopped smoking and quit cold turkey.",
            scrambledWords: ["stopped", "cold", "He", "and", "smoking", "turkey.", "quit"],
            explanationAr: "الكلمات تنضم لتكون: 'He stopped smoking and quit cold turkey.'"
          },
          {
            id: "l2ex4-q8",
            type: QuestionType.WORD_ORDER,
            instruction: "Build the correct sentence for: 'Chew the fat'.",
            instructionAr: "قم بتركيب الجملة: قرر الأصدقاء تبادل أطراف الحديث الودية معًا.",
            idiomOrTerm: "Chew the fat",
            correctSentence: "The friends decided to chew the fat.",
            scrambledWords: ["chew", "decided", "friends", "to", "the", "fat.", "The"],
            explanationAr: "ترتيب هذه الجملة يكون: 'The friends decided to chew the fat.'"
          },
          {
            id: "l2ex4-q9",
            type: QuestionType.WORD_ORDER,
            instruction: "Build the correct sentence for: 'Back to basics'.",
            instructionAr: "قم بتركيب الجملة: يجب علينا العودة إلى الأساسيات في الزراعة.",
            idiomOrTerm: "Back to basics",
            correctSentence: "We must go back to basics in agriculture.",
            scrambledWords: ["to", "basics", "must", "agriculture.", "go", "We", "in"],
            explanationAr: "الشكل النحوي الصحيح هو: 'We must go back to basics in agriculture.'"
          },
          {
            id: "l2ex4-q10",
            type: QuestionType.WORD_ORDER,
            instruction: "Build the correct sentence for: 'Bring home the bacon'.",
            instructionAr: "قم بتركيب الجملة: يعمل بجد كبير لإعالة أسرته وتوفير قوت عيشها.",
            idiomOrTerm: "Bring home the bacon",
            correctSentence: "He works hard to bring home the bacon.",
            scrambledWords: ["to", "home", "bacon.", "works", "bring", "the", "hard", "He"],
            explanationAr: "الترتيب يصح بـ: 'He works hard to bring home the bacon.'"
          }
        ]
      }
    ]
  },
  {
    id: "lesson3",
    title: "Lesson 3: Reading Passage - Nutrition and Health",
    titleAr: "الدرس 3: قطعة قراءة الفهم - التغذية والصحة",
    description: "Read the dynamic passage of health science and answer interactive questions logically.",
    descriptionAr: "اقرأ النص الطبي العلمي حول تفاصيل الغذاء والصحة، وأجب عن التساؤلات المتنوعة بدون لوحة كتابة.",
    passage: {
      title: "Nutrition and Health",
      paragraphs: [
        {
          id: 1,
          text: "Paragraph 1: Nutrition plays a vital role in maintaining overall health and preventing disease. A balanced diet provides the body with essential nutrients needed for growth, energy, and repair.",
          textAr: "الفقرة 1: تلعب التغذية دورًا حيويًا في الحفاظ على الصحة العامة والوقاية من الأمراض. يوفر النظام الغذائي المتوازن للجسم العناصر الغذائية الأساسية اللازمة للنمو والطاقة والإصلاح."
        },
        {
          id: 2,
          text: "Paragraph 2: Macronutrients such as carbohydrates, proteins, and fats supply energy and support bodily functions. Each nutrient has a specific role and must be consumed in appropriate amounts.",
          textAr: "الفقرة 2: توفر المغذيات الكبرى (Macronutrients) مثل الكربوهيدرات والبروتينات والدهون الطاقة وتدعم وظائف الجسم. لكل عنصر غذائي دور محدد ويجب استهلاكه بكميات مناسبة."
        },
        {
          id: 3,
          text: "Paragraph 3: Micronutrients, including vitamins and minerals, are required in smaller quantities but are equally important. Deficiencies can lead to serious health problems.",
          textAr: "الفقرة 3: المغذيات الصغرى (Micronutrients)، بما في ذلك الفيتامينات والمعادن، مطلوبة بكميات أقل ولكنها لا تقل أهمية. النقص يمكن أن يؤدي إلى مشاكل صحية خطيرة."
        },
        {
          id: 4,
          text: "Paragraph 4: Poor dietary habits are often linked to chronic diseases such as obesity, diabetes, and heart disease. Nutrition education helps individuals make healthier choices.",
          textAr: "الفقرة 4: غالبًا ما ترتبط العادات الغذائية السيئة بالأمراض المزمنة مثل السمنة والسكري وأمراض القلب. يساعد التثقيف في مجال التغذية الأفراد على اتخاذ خيارات أكثر صحة."
        },
        {
          id: 5,
          text: "Paragraph 5: By adopting healthy eating patterns and understanding nutrition science, people can improve their quality of life and long-term well-being.",
          textAr: "الفقرة 5: من خلال اعتماد أنماط أكل صحية وفهم علوم التغذية، يمكن للناس تحسين نوعية حياتهم ورفاهيتهم على المدى الطويل."
        }
      ]
    },
    exercises: [
      {
        id: "l3-ex1",
        name: "Exercise 1: Choose the correct answer according to the text",
        nameAr: "التمرين 1: أسئلة اختيار من متعدد حول قطعة القراءة",
        questions: [
          {
            id: "l3ex1-q1",
            type: QuestionType.MCQ,
            instruction: "In paragraph 1, why is nutrition important for health?",
            instructionAr: "وفقاً للفقرة الأولى، لماذا تعد التغذية بالغة الأهمية للصحة المنهجية؟",
            question: "Why is nutrition important for health?",
            options: [
              "It plays a vital role in maintaining overall health and preventing disease.",
              "It is only useful for professional athletes.",
              "It completely eliminates the sleep requirement of body cells.",
              "It increases reading speeds of clinical academic students."
            ],
            correctAnswer: "It plays a vital role in maintaining overall health and preventing disease.",
            explanationAr: "يصرح النص بوضوح: 'Nutrition plays a vital role in maintaining overall health and preventing disease.'"
          },
          {
            id: "l3ex1-q2",
            type: QuestionType.MCQ,
            instruction: "Based on Paragraph 2, what are macronutrients?",
            instructionAr: "بناءً على الفقرة الثانية، ما هي عناصر التغذية الكبرى؟",
            question: "What are macronutrients?",
            options: [
              "Nutrients required in small, negligible micro quantities.",
              "Nutrients like carbohydrates, proteins, and fats that supply energy and support bodily functions.",
              "Synthetic chemical compounds that replace vegetable diets.",
              "Industrial fiber materials found only in wood grains."
            ],
            correctAnswer: "Nutrients like carbohydrates, proteins, and fats that supply energy and support bodily functions.",
            explanationAr: "المغذيات الكبرى التي تشمل الكربوهيدرات والبروتينات والدهون توفر الطاقة وتدعم الجسم."
          },
          {
            id: "l3ex1-q3",
            type: QuestionType.MCQ,
            instruction: "Identify two examples of micronutrients in Paragraph 3.",
            instructionAr: "عين مثالين على المغذيات الصغرى حسب الفقرة الثالثة.",
            question: "Give two examples of micronutrients.",
            options: [
              "Carbohydrates and proteins",
              "Vitamins and minerals",
              "Fats and sugars",
              "Water and oxygen components"
            ],
            correctAnswer: "Vitamins and minerals",
            explanationAr: "تذكر الفقرة الثالثة 'Micronutrients, including vitamins and minerals...'"
          },
          {
            id: "l3ex1-q4",
            type: QuestionType.MCQ,
            instruction: "What health problems result from a poor diet based on Paragraph 4?",
            instructionAr: "ما هي المشاكل الصحية والجسدية الناتجة عن النظام الغذائي السيء وفقاً للفقرة الرابعة؟",
            question: "What problems result from poor diet?",
            options: [
              "Immediate bone breakage directly on touch.",
              "Chronic diseases such as obesity, diabetes, and heart disease.",
              "Severe asthma and allergy syndromes within minutes.",
              "Loss of memory within a few seconds."
            ],
            correctAnswer: "Chronic diseases such as obesity, diabetes, and heart disease.",
            explanationAr: "تربط الفقرة الرابعة العادات السيئة مباشرة بالسمنة والسكري وأمراض القلب."
          },
          {
            id: "l3ex1-q5",
            type: QuestionType.MCQ,
            instruction: "How does nutrition education assist individuals based on Paragraph 4?",
            instructionAr: "كيف يساعد التثقيف الغذائي وصحته الأفراد وفقاً للفقرة الرابعة؟",
            question: "How does nutrition education help?",
            options: [
              "It helps individuals make healthier choices.",
              "It forces people to buy expensive supplements.",
              "It prevents all infectious airborne bacteria automatically.",
              "It avoids the need for physical sports exercises."
            ],
            correctAnswer: "It helps individuals make healthier choices.",
            explanationAr: "تذكر النهاية الصريحة للفقرة الرابعة أن التثقيف يساعد الأفراد على اتخاذ قرارات صحية أفضل."
          },
          {
            id: "l3ex1-q6",
            type: QuestionType.MCQ,
            instruction: "What does a balanced diet provide the body (Paragraph 1)?",
            instructionAr: "ما الذي يقدمه النظام الغذائي المتوازن للجسد البشري (الفقرة الأولى)؟",
            question: "What does a balanced diet provide?",
            options: [
              "Essential nutrients needed for growth, energy, and repair.",
              "A high dose of toxins which must be cleaned.",
              "Infinite muscular powers with no limits.",
              "Mainly pure cholesterol molecules."
            ],
            correctAnswer: "Essential nutrients needed for growth, energy, and repair.",
            explanationAr: "الفقرة الأولى تنص على أن الوجبة المتوازنة تزود الجسم بالعناصر الهامة للنمو والطاقة والتجدد والترميم."
          },
          {
            id: "l3ex1-q7",
            type: QuestionType.MCQ,
            instruction: "Why are micronutrients important even in smaller quantities (Paragraph 3)?",
            instructionAr: "لماذا تعد المغذيات الصغرى ضرورية للجسم بالرغم من صغر مقاديرها (الفقرة الثالثة)؟",
            question: "Why are vitamins/micronutrients important?",
            options: [
              "They prevent serious health problems and deficiencies.",
              "They are the main direct source of physical muscular weight.",
              "They carry clean oxygen directly to the lungs.",
              "They allow individuals to work without needing sleep."
            ],
            correctAnswer: "They prevent serious health problems and deficiencies.",
            explanationAr: "نقص المغذيات الصغرى قد يتسبب في أعراض وأمراض وخيمة ومتاعب بليغة 'Deficiencies can lead to serious health problems.'"
          },
          {
            id: "l3ex1-q8",
            type: QuestionType.MCQ,
            instruction: "Which specific diseases are directly mentioned in the passage?",
            instructionAr: "ما هي قائمة الأمراض الدقيقة الوارد ذكرها بالاسم في القطعة الطبية؟",
            question: "What diseases are mentioned?",
            options: [
              "Influenza, malaria, and anemia.",
              "Obesity, diabetes, and heart disease.",
              "Asthma, stomach ulcers, and arthritis.",
              "Fever, dehydration, and bone fractures."
            ],
            correctAnswer: "Obesity, diabetes, and heart disease.",
            explanationAr: "ذكرت الفقرة الرابعة حرفياً: 'obesity, diabetes, and heart disease'."
          },
          {
            id: "l3ex1-q9",
            type: QuestionType.MCQ,
            instruction: "How can quality of life be systematically improved (Paragraph 5)?",
            instructionAr: "كيف يتسنى للإنسان النهوض بجودة حياته وصحته طويلاً (الفقرة الخامسة)؟",
            question: "How can quality of life be improved?",
            options: [
              "By adopting healthy eating patterns and understanding nutrition science.",
              "By ignoring macronutrients entirely.",
              "By eating only fats and doing zero activity.",
              "By relying solely on pharmacy supplements without healthy eating."
            ],
            correctAnswer: "By adopting healthy eating patterns and understanding nutrition science.",
            explanationAr: "الفقرة الخامسة تخلص إلى أن تبني أنماط معتدلة صحية وفهم هذا العلم يعززان مناحي الحياة السليمة."
          },
          {
            id: "l3ex1-q10",
            type: QuestionType.MCQ,
            instruction: "According to Paragraph 2, why must macronutrients be consumed appropriately?",
            instructionAr: "وفقاً للفقرة الثانية، لماذا يتوجب تناول المغذيات الكبرى بكميات مناسبة دقيقة؟",
            question: "What is the role of macronutrients?",
            options: [
              "Each has a specific role, supplies energy, and supports bodily functions.",
              "They are useless unless you take medicine.",
              "They are only needed to build body fat.",
              "They replace micronutrients entirely and remove their dependency."
            ],
            correctAnswer: "Each has a specific role, supplies energy, and supports bodily functions.",
            explanationAr: "النص يقول: 'supply energy and support bodily functions. Each nutrient has a specific role...'"
          }
        ]
      },
      {
        id: "l3-ex2",
        name: "Exercise 2: True or False",
        nameAr: "التمرين 2: صح وخطأ (بناءً على فهم النص)",
        questions: [
          {
            id: "l3ex2-q1",
            type: QuestionType.BINARY,
            instruction: "True or False: 'Nutrition has no effect on disease.'",
            instructionAr: "صح أم خطأ: 'التغذية ليس لها تأثير على الأمراض.'",
            sentenceBefore: "Nutrition has no effect on disease.",
            options: ["True", "False"],
            correctAnswer: "False",
            explanationAr: "خطأ. التغذية لها دور جوهري في الحفاظ على الصحة ومجابهة الأمراض والوقاية منها."
          },
          {
            id: "l3ex2-q2",
            type: QuestionType.BINARY,
            instruction: "True or False: 'Proteins are macronutrients.'",
            instructionAr: "صح أم خطأ: 'البروتينات تعتبر من المغذيات الحيوية الكبرى (Macronutrients).'",
            sentenceBefore: "Proteins are macronutrients.",
            options: ["True", "False"],
            correctAnswer: "True",
            explanationAr: "صحيح. تذكر الفقرة الثانية البروتينات كأحد الأمثلة على المغذيات الكبرى."
          },
          {
            id: "l3ex2-q3",
            type: QuestionType.BINARY,
            instruction: "True or False: 'Vitamins are needed in large amounts.'",
            instructionAr: "صح أم خطأ: 'يحتاج الجسم للفيتامينات بكميات هائلة ضخمة لتأدية وظائفه.'",
            sentenceBefore: "Vitamins are needed in large amounts.",
            options: ["True", "False"],
            correctAnswer: "False",
            explanationAr: "خطأ. تذكر الفقرة الثالثة أن الفيتامينات مغذيات صغرى مطلوبة بكميات ضئيلة لكنها محورية 'smaller quantities'."
          },
          {
            id: "l3ex2-q4",
            type: QuestionType.BINARY,
            instruction: "True or False: 'Poor diet causes chronic diseases.'",
            instructionAr: "صح أم خطأ: 'النظام المستمر والسيء للأغذية يؤدي إلى نشوء أمراض مزمنة.'",
            sentenceBefore: "Poor diet causes chronic diseases.",
            options: ["True", "False"],
            correctAnswer: "True",
            explanationAr: "صحيح. ترتبط العادات السيئة مباشرة بالسمنة والسكري والقلب."
          },
          {
            id: "l3ex2-q5",
            type: QuestionType.BINARY,
            instruction: "True or False: 'Nutrition education is useful.'",
            instructionAr: "صح أم خطأ: 'التثقيف والمعرفة بمجال التغذية أمر نافع ومفيد.'",
            sentenceBefore: "Nutrition education is useful.",
            options: ["True", "False"],
            correctAnswer: "True",
            explanationAr: "صحيح. حيث أنه يعين الناس على الموازنة وحسن الاختيار."
          },
          {
            id: "l3ex2-q6",
            type: QuestionType.BINARY,
            instruction: "True or False: 'Minerals are micronutrients.'",
            instructionAr: "صح أم خطأ: 'المعادن تندرج تحت مسمى المغذيات الصغرى.'",
            sentenceBefore: "Minerals are micronutrients.",
            options: ["True", "False"],
            correctAnswer: "True",
            explanationAr: "صحيح. ورد بالفقرة الثالثة أن المعادن والفيتامينات عناصر صغرى 'Micronutrients'."
          },
          {
            id: "l3ex2-q7",
            type: QuestionType.BINARY,
            instruction: "True or False: 'Balanced diet supports growth.'",
            instructionAr: "صح أم خطأ: 'النظام المتكامل المتوازن يدعم نمو أعضاء الأجسام.'",
            sentenceBefore: "Balanced diet supports growth.",
            options: ["True", "False"],
            correctAnswer: "True",
            explanationAr: "صحيح. يدعم النمو والطاقة وإصلاح الخلايا التالفة."
          },
          {
            id: "l3ex2-q8",
            type: QuestionType.BINARY,
            instruction: "True or False: 'Obesity is diet-related.'",
            instructionAr: "صح أم خطأ: 'السمنة مرض مرتبط بنوعيات وكميات طعام الشخص ونظامه الغذائي.'",
            sentenceBefore: "Obesity is diet-related.",
            options: ["True", "False"],
            correctAnswer: "True",
            explanationAr: "صحيح. أثبتت القطعة الطبية ارتباط السمنة المزمن بضعف جودة الأنماط الغذائية."
          },
          {
            id: "l3ex2-q9",
            type: QuestionType.BINARY,
            instruction: "True or False: 'Nutrition improves well-being.'",
            instructionAr: "صح أم خطأ: 'من شأن التغذية السليمة تحسين جودة وعيش وصحة الفرد.'",
            sentenceBefore: "Nutrition improves well-being.",
            options: ["True", "False"],
            correctAnswer: "True",
            explanationAr: "صحيح. تظهر هذه الفائدة بتبني السوكيات الرشيدة لراحة البدن طويلاً."
          },
          {
            id: "l3ex2-q10",
            type: QuestionType.BINARY,
            instruction: "True or False: 'Fats provide energy.'",
            instructionAr: "صح أم خطأ: 'الدهون تمد جسم الإنسان بالطاقة وتدعم الأجهزة.'",
            sentenceBefore: "Fats provide energy.",
            options: ["True", "False"],
            correctAnswer: "True",
            explanationAr: "صحيح. تندرج الدهون تحت المغذيات الكبرى التي يرتكز عليها استمداد الطاقة الحيوية."
          }
        ]
      },
      {
        id: "l3-ex3",
        name: "Exercise 3: Match words to their contextual meanings",
        nameAr: "التمرين 3: طابق الكلمات المستخرجة من القطعة بمعانيها اللغوية",
        questions: [
          {
            id: "l3ex3-q1",
            type: QuestionType.MATCHING,
            instruction: "Match each medical word from the passage with its definition.",
            instructionAr: "طابق المفردات الإنجليزية الواردة في قطعة التغذية بمعناها التفسيري المناسب بالضغط عليهما بالتوالي.",
            pairs: [
              { id: "v1", left: "Vital", right: "Extremely important or necessary for life" },
              { id: "v2", left: "Essential", right: "Required as a basic and fundamental part" },
              { id: "v3", left: "Macronutrients", right: "Large dietary components providing energy (carbohydrates, proteins, fats)" },
              { id: "v4", left: "Micronutrients", right: "Nutrients required in small amounts (vitamins and minerals)" },
              { id: "v5", left: "Deficiencies", right: "Lack or shortage of necessary vitamins or elements in the body" },
              { id: "v6", left: "Chronic", right: "Lasting for a long time or constantly recurring illness" },
              { id: "v7", left: "Education", right: "The process of receiving or giving systematic instruction or knowledge" },
              { id: "v8", left: "Improve", right: "To build up or make something better than before" },
              { id: "v9", left: "Energy", right: "The strength or power required for physical or mental activity" },
              { id: "v10", left: "Repair", right: "To restore body cells and tissues to a healthy state" }
            ]
          }
        ]
      },
      {
        id: "l3-ex4",
        name: "Exercise 4: Complete sentences from the passage",
        nameAr: "التمرين 4: أكمل الجمل المقتبسة بدقة من قطعة الفهم (من القوائم)",
        questions: [
          {
            id: "l3ex4-q1",
            type: QuestionType.DROPDOWN,
            instruction: "Complete: 'A balanced diet provides ____________.'",
            instructionAr: "أكمل الاقتباس من النص المكتوب في الأعلى:",
            sentenceParts: ["A balanced diet provides ", "."],
            options: ["essential nutrients for growth, energy, and repair", "nothing but extra fatty acids", "sugar compounds exclusively", "negligible values"],
            correctAnswer: "essential nutrients for growth, energy, and repair",
            explanationAr: "يتطابق مع نص الفقرة الأولى: 'provides the body with essential nutrients needed for growth, energy, and repair.'"
          },
          {
            id: "l3ex4-q2",
            type: QuestionType.DROPDOWN,
            instruction: "Complete: 'Macronutrients include ____________.'",
            instructionAr: "أقتبس من النص قائمة المغذيات الكبرى للكلمات المكملة:",
            sentenceParts: ["Macronutrients include ", "."],
            options: ["carbohydrates, proteins, and fats", "vitamins like K and minerals", "prescribed expensive supplements", "mainly pure water cells"],
            correctAnswer: "carbohydrates, proteins, and fats",
            explanationAr: "تذكر الفقرة الثانية صراحة: 'Macronutrients such as carbohydrates, proteins, and fats...'"
          },
          {
            id: "l3ex4-q3",
            type: QuestionType.DROPDOWN,
            instruction: "Complete: 'Micronutrients are required in ____________.'",
            instructionAr: "اختر اللفظ النصي المناسب للمغذيات الصغرى:",
            sentenceParts: ["Micronutrients are required in ", "."],
            options: ["smaller quantities but are equally important", "massive tons each single day", "gallons of chemical solution", "zero amounts because body produces them"],
            correctAnswer: "smaller quantities but are equally important",
            explanationAr: "الفقرة الثالثة تؤكد: 'required in smaller quantities but are equally important.'"
          },
          {
            id: "l3ex4-q4",
            type: QuestionType.DROPDOWN,
            instruction: "Complete: 'Poor habits are linked to ____________.'",
            instructionAr: "العادات الغذائية المتدنية ترتبط ارتباطًا وثيقًا بـ:",
            sentenceParts: ["Poor habits are linked to ", "."],
            options: ["chronic diseases such as obesity, diabetes, and heart disease", "respiratory problems during running", "low memory recalls in high school", "better physical fitness"],
            correctAnswer: "chronic diseases such as obesity, diabetes, and heart disease",
            explanationAr: "يتوافق مع مستهل الفقرة الرابعة: 'Poor dietary habits are often linked to chronic diseases...'"
          },
          {
            id: "l3ex4-q5",
            type: QuestionType.DROPDOWN,
            instruction: "Complete: 'Nutrition education helps people ____________.'",
            instructionAr: "التثقيف التغذوي يساعد الأفراد ويمهدهم لـ:",
            sentenceParts: ["Nutrition education helps people ", "."],
            options: ["make healthier choices", "avoid reading research reports", "spend more money on medical tablets", "sleep without eating dinner"],
            correctAnswer: "make healthier choices",
            explanationAr: "الفقرة الرابعة تحدد أن التعليم في هذا المجال 'helps individuals make healthier choices.'"
          },
          {
            id: "l3ex4-q6",
            type: QuestionType.DROPDOWN,
            instruction: "Complete: 'Vitamins prevent ____________.'",
            instructionAr: "الفيتامينات تمنع وتجتنب بشكل فعال:",
            sentenceParts: ["Vitamins prevent ", "."],
            options: ["serious health problems and deficiencies", "physical height increases", "normal water cycles of stomach", "fat storage processes"],
            correctAnswer: "serious health problems and deficiencies",
            explanationAr: "الفقرة الثالثة تصرح بأن عدم كفاية الفيتامينات 'Deficiencies can lead to serious health problems.'"
          },
          {
            id: "l3ex4-q7",
            type: QuestionType.DROPDOWN,
            instruction: "Complete: 'Health improves with ____________.'",
            instructionAr: "تتحسن صحة البدن مع قيام الفرد بـ:",
            sentenceParts: ["Health improves with ", "."],
            options: ["adopting healthy eating patterns", "consuming deep-fried foods", "taking antibiotics and medical pills", "avoiding minerals entirely"],
            correctAnswer: "adopting healthy eating patterns",
            explanationAr: "الفقرة الخامسة تركز على السلوك الإيجابي: 'adopting healthy eating patterns'."
          },
          {
            id: "l3ex4-q8",
            type: QuestionType.DROPDOWN,
            instruction: "Complete: 'Diet affects ____________.'",
            instructionAr: "نظام التغذية والوجبات يؤثران بوضوح ومباشرة على:",
            sentenceParts: ["Diet affects ", "."],
            options: ["overall health and preventing disease", "only the eye-color structures", "the typing speeds of students", "nothing in particular"],
            correctAnswer: "overall health and preventing disease",
            explanationAr: "كما ورد في مطلع الفقرة الأولى: 'Nutrition plays a vital role in maintaining overall health and preventing disease.'"
          },
          {
            id: "l3ex4-q9",
            type: QuestionType.DROPDOWN,
            instruction: "Complete: 'Energy comes from ____________.'",
            instructionAr: "تستمد الطاقة في الأجسام من التهام وهضم بؤرة:",
            sentenceParts: ["Energy comes from ", "."],
            options: ["macronutrients like carbohydrates, proteins, and fats", "medicaments and clinical pills", "air inhalation only", "vitamins in micro doses"],
            correctAnswer: "macronutrients like carbohydrates, proteins, and fats",
            explanationAr: "الفقرة الثانية تبرز أن المغذيات الشاملة الكبرى هي من 'supply energy'."
          },
          {
            id: "l3ex4-q10",
            type: QuestionType.DROPDOWN,
            instruction: "Complete: 'Well-being depends on ____________.'",
            instructionAr: "سر الرفاه والاتزان الجسدي طويل الأمد يعتمد على:",
            sentenceParts: ["Well-being depends on ", "."],
            options: ["understanding nutrition science and healthy habits", "eating whatever is available on the table", "fasting forever", "staying in clinic laboratories"],
            correctAnswer: "understanding nutrition science and healthy habits",
            explanationAr: "تختتم عريضة النص في الفقرة الخامسة: 'understanding nutrition science, people can improve their quality of life...'"
          }
        ]
      }
    ]
  },
  {
    id: "lesson4",
    title: "Lesson 4: Nutrition Terms (A, B, C)",
    titleAr: "الدرس 4: المصطلحات الطبية الغذائية الشاملة (A, B, C)",
    description: "Deep dive into 10 essential terminology markers for clinical and scientific dietary study.",
    descriptionAr: "دراسة وتدقيق المصطلحات التغذوية العشرة الأساسية وتعاريفها وسياقها في الأبحاث والكلية.",
    exercises: [
      {
        id: "l4-ex1",
        name: "Exercise 1: Match Terms with Definitions",
        nameAr: "التمرين 1: طابق المصطلحات بتعريفها الأكاديمي الدقيق",
        questions: [
          {
            id: "l4ex1-q1",
            type: QuestionType.MATCHING,
            instruction: "Match each academic terminology with its precise health definition.",
            instructionAr: "طابق المصطلح في العمود الأيمن مع ما يناسبه أكاديماً في العمود الأيسر بالضغط بالتوازي للتوصيل.",
            pairs: [
              { id: "t1", left: "Calorie", right: "A measurement unit of energy value in food substances" },
              { id: "t2", left: "Absorption", right: "The passage of nutrients from digestion into the bloodstream" },
              { id: "t3", left: "Balanced diet", right: "A daily diet that contains optimal proportions of all nutrient classes" },
              { id: "t4", left: "Cholesterol", right: "A waxy fat-like compound essential for cells but risky in excess" },
              { id: "t5", left: "Appetite", right: "The natural sensory desire to consume food and satisfy hunger" },
              { id: "t6", left: "Calcium", right: "A crucial raw mineral required for bone density and strength" },
              { id: "t7", left: "Anemia", right: "A serious condition marked by a deficiency of red blood cells" },
              { id: "t8", left: "Carbohydrate", right: "An organic compound class including starch and sugars for immediate energy" },
              { id: "t9", left: "Body mass index", right: "An index number measuring body weight relative to height" },
              { id: "t10", left: "Antioxidant", right: "A substance neutralizing harmful free radicals to protect body cells" }
            ]
          }
        ]
      },
      {
        id: "l4-ex2",
        name: "Exercise 2: Fill in the Blanks",
        nameAr: "التمرين 2: املأ الفراغات بالمطابقة المناسبة للفظ الصحيح (بدون كتابة)",
        questions: [
          {
            id: "l4ex2-q1",
            type: QuestionType.DROPDOWN,
            instruction: "Fill: 'Body Mass Index (BMI) measures ____________ relative to height.'",
            instructionAr: "اختر الكلمات التي يقيسها مؤشر كتلة الجسم (BMI):",
            sentenceParts: ["Body Mass Index (BMI) measures ", " relative to height."],
            options: ["weight", "blood sugar", "calorie intake", "vitamin counts"],
            correctAnswer: "weight",
            explanationAr: "مؤشر كتلة الجسم يقيس الوزن بالنسبة للطول لتصنيف البنية الجسدية."
          },
          {
            id: "l4ex2-q2",
            type: QuestionType.DROPDOWN,
            instruction: "Fill: 'Carbohydrates provide ____________ to the body.'",
            instructionAr: "اختر ما تزوده الكربوهيدرات للجسم بشكل رئيسي:",
            sentenceParts: ["Carbohydrates provide ", " to the body."],
            options: ["energy", "minerals", "antibodies", "iron deficiency"],
            correctAnswer: "energy",
            explanationAr: "تمثل الكربوهيدرات المصدر الفوري والأساسي للطاقة العضلية والدماغية."
          },
          {
            id: "l4ex2-q3",
            type: QuestionType.DROPDOWN,
            instruction: "Fill: 'Antioxidant protects ____________ from damage.'",
            instructionAr: "مضادات الأكسدة تحمي وبشكل كبير الـ:",
            sentenceParts: ["Antioxidant protects ", " from damage."],
            options: ["cells", "bone joints", "blood vessels", "stomach acid"],
            correctAnswer: "cells",
            explanationAr: "مضادات الأكسدة Antioxidants تحمي الخلايا من الخراب الفزيولوجي والشوارد الحرة."
          },
          {
            id: "l4ex2-q4",
            type: QuestionType.DROPDOWN,
            instruction: "Fill: 'Calcium is essential ____________ for bones.'",
            instructionAr: "الكالسيوم هو عنصر تغذوي أساسي يعتبر كـ:",
            sentenceParts: ["Calcium is essential ", " for bones."],
            options: ["mineral", "vitamin class", "enzyme", "acid compound"],
            correctAnswer: "mineral",
            explanationAr: "تصنيف الكالسيوم العلمي هو معدن أساسي متبلور مفيد للهيكل العظمي والأسنان."
          },
          {
            id: "l4ex2-q5",
            type: QuestionType.DROPDOWN,
            instruction: "Fill: 'Iron ____________ causes anemia.'",
            instructionAr: "اختر الكلمة المعبرة عن نقص الحديد المسبب لفقر الدم:",
            sentenceParts: ["Iron ", " causes anemia."],
            options: ["deficiency", "consumption", "absorption", "source"],
            correctAnswer: "deficiency",
            explanationAr: "نقص الحديد 'Iron deficiency' هو العامل الأكبر المحفز لمرض فقر الدم Anemia."
          },
          {
            id: "l4ex2-q6",
            type: QuestionType.DROPDOWN,
            instruction: "Fill: 'Consumption is the act of ____________.'",
            instructionAr: "الاستهلاك (Consumption) لغوياً يعني عملية:",
            sentenceParts: ["Consumption is the act of ", "."],
            options: ["eating or drinking", "measuring height", "filtering food safety", "explaining food lists"],
            correctAnswer: "eating or drinking",
            explanationAr: "الاستهلاك في التغذية هو عملية التناول والتلقي للأغذية والأشربة."
          },
          {
            id: "l4ex2-q7",
            type: QuestionType.DROPDOWN,
            instruction: "Fill: 'Absorption is the passage of nutrients into ____________.'",
            instructionAr: "الامتصاص (Absorption) يمثل انتقال العناصر إلى:",
            sentenceParts: ["Absorption is the passage of nutrients into ", "."],
            options: ["the bloodstream", "the stomach muscles", "the mouth glands", "external cells"],
            correctAnswer: "the bloodstream",
            explanationAr: "الامتصاص هو عبور وتغلغل المغذيات من الأمعاء فوصولها لمجرى الدم."
          },
          {
            id: "l4ex2-q8",
            type: QuestionType.DROPDOWN,
            instruction: "Fill: 'Calorie measures ____________.'",
            instructionAr: "السعر الحراري (Calorie) هو معيار مخصص لـ:",
            sentenceParts: ["Calorie measures ", "."],
            options: ["energy value in food", "blood pressure levels", "the density of minerals", "water weight"],
            correctAnswer: "energy value in food",
            explanationAr: "يقيس السعر كمية الطاقة المحتواة في الأكلات والمقادير المختلفة."
          },
          {
            id: "l4ex2-q9",
            type: QuestionType.DROPDOWN,
            instruction: "Fill: 'Chronic diseases ____________ last long.'",
            instructionAr: "الأمراض المزمنة (Chronic diseases) تتميز بطابعها بأنها:",
            sentenceParts: ["Chronic diseases ", " last long."],
            options: ["usually", "never", "only sometimes", "rarely"],
            correctAnswer: "usually",
            explanationAr: "الصفة المزمنة 'Chronic' تعني ملازمته للمريض وعادة ما تدوم طويلاً وعمره معقد."
          },
          {
            id: "l4ex2-q10",
            type: QuestionType.DROPDOWN,
            instruction: "Fill: 'Balanced diet ____________ all nutrients.'",
            instructionAr: "النظام الغذائي المتوازن الصحي يتميز بأنه:",
            sentenceParts: ["Balanced diet ", " all nutrients."],
            options: ["includes", "ignores", "eliminates", "destroys"],
            correctAnswer: "includes",
            explanationAr: "يجب أن يشمل النظام الغذائي المتوازن 'includes' كافة العناصر لدرء النقص والمرض."
          }
        ]
      },
      {
        id: "l4-ex3",
        name: "Exercise 3: Choose the correct academic term",
        nameAr: "التمرين 3: اختر اللفظ العلمي السليم والبديل الدقيق",
        questions: [
          {
            id: "l4ex3-q1",
            type: QuestionType.BINARY,
            instruction: "Choose the term: 'Excess _____ increases heart disease risk.'",
            instructionAr: "اختر المصطلح الطبي الأنسب: زيادة ... ترفع احتمالات مرض القلب.",
            sentenceBefore: "Excess",
            sentenceAfter: "increases heart disease risk.",
            options: ["cholesterol", "bulk"],
            correctAnswer: "cholesterol",
            explanationAr: "الكوليسترول الزائد يؤدي إلى انسدادات الشرايين ومشاكل بليغة في القلب."
          },
          {
            id: "l4ex3-q2",
            type: QuestionType.BINARY,
            instruction: "Choose the term: '_____ occurs in the intestine.'",
            instructionAr: "اختر العملية الحيوية التي تحدث أساساً في الأمعاء الدقيقة:",
            sentenceBefore: "",
            sentenceAfter: "occurs in the intestine.",
            options: ["Absorption", "Appetite"],
            correctAnswer: "Absorption",
            explanationAr: "تتم عملية امتصاص الغذاء (Absorption) بصورة رئيسية في الأمعاء."
          },
          {
            id: "l4ex3-q3",
            type: QuestionType.BINARY,
            instruction: "Choose the term: '_____ is the natural desire for food.'",
            instructionAr: "اختر الكلمة المعبرة عن الرغبة الطبيعية والنفسية لتناول الطعام:",
            sentenceBefore: "",
            sentenceAfter: "is the natural desire for food.",
            options: ["Appetite", "Anemia"],
            correctAnswer: "Appetite",
            explanationAr: "الشهية (Appetite) هي الرغبة الحسية الطبيعية لتناول الوجبات."
          },
          {
            id: "l4ex3-q4",
            type: QuestionType.BINARY,
            instruction: "Choose the term: '_____ are building blocks of protein.'",
            instructionAr: "اختر وحدة البناء الجزيئية الأساسية لتكوين البروتينات:",
            sentenceBefore: "",
            sentenceAfter: "are the building blocks of protein.",
            options: ["Amino acids", "Antioxidants"],
            correctAnswer: "Amino acids",
            explanationAr: "الأحماض الأمينية 'Amino acids' هي الحجارة الإنشائية والهياكل لبناء البروتين."
          },
          {
            id: "l4ex3-q5",
            type: QuestionType.BINARY,
            instruction: "Choose the term: '_____ regulates glucose levels in the bloodstream.'",
            instructionAr: "اختر اللفظ المنوط بتنظيم السكر في دماء المريض:",
            sentenceBefore: "",
            sentenceAfter: "regulates glucose levels in the bloodstream.",
            options: ["Blood sugar", "Basal metabolism"],
            correctAnswer: "Blood sugar",
            explanationAr: "مستوى سكر الدم 'Blood sugar' وتعديلاته يضبط استقرار الغلوكوز وحفظ الطاقة."
          },
          {
            id: "l4ex3-q6",
            type: QuestionType.BINARY,
            instruction: "Choose the term: '_____ nutrition deals directly with patients in clinics.'",
            instructionAr: "اختر فرع التغذية المختص بالمرضى في غرف العيادات الطبية:",
            sentenceBefore: "",
            sentenceAfter: "nutrition deals directly with patients in clinics.",
            options: ["Clinical", "Chronic"],
            correctAnswer: "Clinical",
            explanationAr: "التغذية العلاجية أو الإكلينيكية 'Clinical' ترعى احتياجات المرضى والمستشفى."
          },
          {
            id: "l4ex3-q7",
            type: QuestionType.BINARY,
            instruction: "Choose the term: '_____ improves digestion.'",
            instructionAr: "اختر العنصر المعبر عن الألياف والكتلة الغليظة المسؤولة عن تسيير الهضم:",
            sentenceBefore: "",
            sentenceAfter: "improves digestion.",
            options: ["Bulk", "Bacteria"],
            correctAnswer: "Bulk",
            explanationAr: "كتلة الألياف وحجمها (Bulk) يحرك عضلات الهضم ويسهل مرور الفضلات وينعم معويًا."
          },
          {
            id: "l4ex3-q8",
            type: QuestionType.BINARY,
            instruction: "Choose the term: '_____ provides energetic value to functions.'",
            instructionAr: "اختر ما يوفر مقادير جمة مركزة لطاقة البدن المعزز:",
            sentenceBefore: "",
            sentenceAfter: "provides energy to bodily functions.",
            options: ["Fat", "Fiber"],
            correctAnswer: "Fat",
            explanationAr: "الدهون (Fat) هي المصدر الممتلئ والغني لتوليد سعرات عالية وطاقة مخزنة."
          },
          {
            id: "l4ex3-q9",
            type: QuestionType.BINARY,
            instruction: "Choose the term: 'An _____ protects the cells from oxidation damage.'",
            instructionAr: "اختر ما يحمي ويقي الخلايا البنيوية من مضار التأكسد:",
            sentenceBefore: "An",
            sentenceAfter: "protects cells from oxidation damage.",
            options: ["Antioxidant", "Allergy"],
            correctAnswer: "Antioxidant",
            explanationAr: "مضادات الأكسدة Antioxidants لها دور مانع للتخريب الخلوي."
          },
          {
            id: "l4ex3-q10",
            type: QuestionType.BINARY,
            instruction: "Choose the term: 'A _____ is a long-lasting illness.'",
            instructionAr: "اختر الدلالة السليمة للعلل الممتدة لسنوات طوال دون شفاء تام فوري:",
            sentenceBefore: "A",
            sentenceAfter: "is a long-lasting illness.",
            options: ["chronic disease", "calorie indicator"],
            correctAnswer: "chronic disease",
            explanationAr: "المرض المزمن 'chronic disease' كالسكر يعاني منه الفرد لسنوات."
          }
        ]
      },
      {
        id: "l4-ex4",
        name: "Exercise 4: Sentence Reconstruction Builder for Terms",
        nameAr: "التمرين 4: تركيب جمل المصطلحات التغذوية (اضغط على الكلمات بالترتيب لتكوين عبارة أكاديمية)",
        questions: [
          {
            id: "l4ex4-q1",
            type: QuestionType.WORD_ORDER,
            instruction: "Assemble: 'A calorie is a unit of energy.'",
            instructionAr: "رتب كلمات تعريف السعر الحراري:",
            idiomOrTerm: "Calorie",
            correctSentence: "A calorie is a unit of energy.",
            scrambledWords: ["calorie", "of", "energy.", "is", "unit", "A", "a"],
            explanationAr: "التعريف يترتب كالتالي: 'A calorie is a unit of energy.'"
          },
          {
            id: "l4ex4-q2",
            type: QuestionType.WORD_ORDER,
            instruction: "Assemble: 'Eating a balanced diet maintains good health.'",
            instructionAr: "رتب الكلمات المعبرة عن جدوى التغذية المتوازنة:",
            idiomOrTerm: "Balanced diet",
            correctSentence: "Eating a balanced diet maintains good health.",
            scrambledWords: ["diet", "health.", "Eating", "a", "good", "balanced", "maintains"],
            explanationAr: "تنتظم بـ: 'Eating a balanced diet maintains good health.'"
          },
          {
            id: "l4ex4-q3",
            type: QuestionType.WORD_ORDER,
            instruction: "Assemble: 'Nutrient absorption mostly occurs in the intestine.'",
            instructionAr: "رتب الجملة: امتصاص الأغذية يحدث غالباً في الأمعاء.",
            idiomOrTerm: "Absorption",
            correctSentence: "Nutrient absorption mostly occurs in the intestine.",
            scrambledWords: ["absorption", "occurs", "Nutrient", "intestine.", "mostly", "in", "the"],
            explanationAr: "تتركب كالتالي: 'Nutrient absorption mostly occurs in the intestine.'"
          },
          {
            id: "l4ex4-q4",
            type: QuestionType.WORD_ORDER,
            instruction: "Assemble: 'A brisk walk can improve your appetite.'",
            instructionAr: "رتب الجملة: المشي السريع يمكنه تحسين الشهية لديك.",
            idiomOrTerm: "Appetite",
            correctSentence: "A brisk walk can improve your appetite.",
            scrambledWords: ["appetite.", "can", "brisk", "walk", "your", "improve", "A"],
            explanationAr: "الصياغة بـ: 'A brisk walk can improve your appetite.'"
          },
          {
            id: "l4ex4-q5",
            type: QuestionType.WORD_ORDER,
            instruction: "Assemble: 'High cholesterol can damage your heart health.'",
            instructionAr: "رتب الجملة: الكوليسترول المرتفع يضر صحة القلب لديك.",
            idiomOrTerm: "Cholesterol",
            correctSentence: "High cholesterol can damage your heart health.",
            scrambledWords: ["can", "High", "cholesterol", "heart", "health.", "your", "damage"],
            explanationAr: "تترابط كالتالي: 'High cholesterol can damage your heart health.'"
          },
          {
            id: "l4ex4-q6",
            type: QuestionType.WORD_ORDER,
            instruction: "Assemble: 'Milk is a rich source of calcium.'",
            instructionAr: "رتب الجملة: الحليب مصدر غني بعنصر الكالسيوم القوي.",
            idiomOrTerm: "Calcium",
            correctSentence: "Milk is a rich source of calcium.",
            scrambledWords: ["Milk", "calcium.", "rich", "source", "of", "is", "a"],
            explanationAr: "الترتيب الصحيح هو: 'Milk is a rich source of calcium.'"
          },
          {
            id: "l4ex4-q7",
            type: QuestionType.WORD_ORDER,
            instruction: "Assemble: 'Green tea contains a powerful antioxidant compound.'",
            instructionAr: "رتب الجملة: يحتوي الشاي الأخضر على مركب قوي مضاد للأكسدة.",
            idiomOrTerm: "Antioxidant",
            correctSentence: "Green tea contains a powerful antioxidant compound.",
            scrambledWords: ["contains", "antioxidant", "compound.", "a", "Green", "tea", "powerful"],
            explanationAr: "تنتظم بـ: 'Green tea contains a powerful antioxidant compound.'"
          },
          {
            id: "l4ex4-q8",
            type: QuestionType.WORD_ORDER,
            instruction: "Assemble: 'Rice is a healthy carbohydrate for energy.'",
            instructionAr: "رتب الجملة: الأرز كربوهيدرات صحية لمنح الجسم طاقة حركية.",
            idiomOrTerm: "Carbohydrate",
            correctSentence: "Rice is a healthy carbohydrate for energy.",
            scrambledWords: ["for", "Rice", "a", "is", "healthy", "carbohydrate", "energy."],
            explanationAr: "التركيبة هي: 'Rice is a healthy carbohydrate for energy.'"
          },
          {
            id: "l4ex4-q9",
            type: QuestionType.WORD_ORDER,
            instruction: "Assemble: 'Diabetes is a common chronic disease worldwide.'",
            instructionAr: "رتب الجملة: السكري داء مزمن شائع للغاية عبر العالم.",
            idiomOrTerm: "Chronic disease",
            correctSentence: "Diabetes is a common chronic disease worldwide.",
            scrambledWords: ["a", "chronic", "Diabetes", "disease", "common", "is", "worldwide."],
            explanationAr: "تترتب لتصبح: 'Diabetes is a common chronic disease worldwide.'"
          },
          {
            id: "l4ex4-q10",
            type: QuestionType.WORD_ORDER,
            instruction: "Assemble: 'Doctors use body mass index to assess weight.'",
            instructionAr: "رتب الجملة: يستخدم الأطباء مؤشر كتلة الجسم لتقييم الوزن وبنيته.",
            idiomOrTerm: "Body mass index",
            correctSentence: "Doctors use body mass index to assess weight.",
            scrambledWords: ["body", "mass", "index", "to", "Doctors", "use", "assess", "weight."],
            explanationAr: "البناء السليم: 'Doctors use body mass index to assess weight.'"
          }
        ]
      }
    ]
  }
];
