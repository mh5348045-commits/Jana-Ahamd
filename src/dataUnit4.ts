/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Lesson, QuestionType } from "./types";

export const lessonsData: Lesson[] = [
  {
    id: "unit4-lesson1",
    title: "Lesson 1: Grammar - Phrasal Verbs in Nutrition Contexts",
    titleAr: "الدرس 1: القواعد - الأفعال الاصطلاحية في سياقات التغذية",
    description: "Learn how to use common phrasal verbs related to nutrition, cooking, bodily functions, and lifestyle adjustments.",
    descriptionAr: "تعلم كيفية استخدام الأفعال الاصطلاحية الشائعة المرتبطة بالتغذية وصحة الجسم والأنشطة البدنية اليومية.",
    exercises: [
      {
        id: "l4-l1-ex1",
        name: "Exercise 1: Complete sentences using suitable phrasal verbs",
        nameAr: "التمرين 1: أكمل الجمل باستخدام الأفعال الاصطلاحية المناسبة",
        questions: [
          {
            id: "u4-l1ex1-q1",
            type: QuestionType.DROPDOWN,
            instruction: "Complete: Patients should _____ sugary drinks.",
            instructionAr: "أكمل الجملة بما يناسب إرشاد المريض للحد من المشروبات المحلاة:",
            sentenceParts: ["Patients should ", " sugary drinks."],
            options: ["cut down on", "build up", "get over"],
            correctAnswer: "cut down on",
            explanationAr: "يعني الفعل الاصطلاحي 'cut down on' تقليص أو تقليل مقدار استهلاك مادة ما."
          },
          {
            id: "u4-l1ex1-q2",
            type: QuestionType.DROPDOWN,
            instruction: "Complete: The body _____ food into nutrients.",
            instructionAr: "أكمل لبيان وظيفة الجهاز الهضمي في تفكيك الطعام:",
            sentenceParts: ["The body ", " food into nutrients."],
            options: ["breaks down", "puts off", "carries out"],
            correctAnswer: "breaks down",
            explanationAr: "العبارة 'breaks down' تعني يفكك أو يهضم العناصر الغذائية الكبيرة كيميائياً."
          },
          {
            id: "u4-l1ex1-q3",
            type: QuestionType.DROPDOWN,
            instruction: "Complete: He is trying to _____ muscle strength.",
            instructionAr: "أكمل لزيادة وبناء القوة العضلية:",
            sentenceParts: ["He is trying to ", " muscle strength."],
            options: ["build up", "give up", "get over"],
            correctAnswer: "build up",
            explanationAr: "الفعل 'build up' يعني يطور، يبني، أو يزيد تدريجياً القوة أو المناعة."
          },
          {
            id: "u4-l1ex1-q4",
            type: QuestionType.DROPDOWN,
            instruction: "Complete: Doctors advise people to _____ junk food.",
            instructionAr: "أكمل لتعبر عن التوقف التام أو قطع الوجبات السريعة:",
            sentenceParts: ["Doctors advise people to ", " junk food."],
            options: ["give up", "take in", "work out"],
            correctAnswer: "give up",
            explanationAr: "يعني 'give up' الإقلاع أو التوقف التام عن عادة سيئة أو أكل ممرض."
          },
          {
            id: "u4-l1ex1-q5",
            type: QuestionType.DROPDOWN,
            instruction: "Complete: The diet plan helps _____ bad habits.",
            instructionAr: "أكمل للتعبير عن دور الخطة الغذائية في التخلص من العادات السلبية:",
            sentenceParts: ["The diet plan helps ", " bad habits."],
            options: ["get over", "carry out", "put off"],
            correctAnswer: "get over",
            explanationAr: "المصطلح 'get over' يُستخدم هنا بمعنى للتغلب والانتصار على العادات السيئة أو تخطي الصعاب."
          },
          {
            id: "u4-l1ex1-q6",
            type: QuestionType.DROPDOWN,
            instruction: "Complete: Vitamins help the body _____ illness.",
            instructionAr: "أكمل للتعبير عن تعافي الجسم بفضل الفيتامينات:",
            sentenceParts: ["Vitamins help the body ", " illness."],
            options: ["get over", "bring about", "work out"],
            correctAnswer: "get over",
            explanationAr: "يتم استخدام 'get over' للتعبير عن الاستشفاء والتعافي من الأمراض."
          },
          {
            id: "u4-l1ex1-q7",
            type: QuestionType.DROPDOWN,
            instruction: "Complete: She needs to _____ her calorie intake.",
            instructionAr: "أكمل لتعبر عن تقليص المدخول السعري اليومي:",
            sentenceParts: ["She needs to ", " her calorie intake."],
            options: ["cut down on", "take in", "build up"],
            correctAnswer: "cut down on",
            explanationAr: "تخفيض السعرات نستخدم له الفعل 'cut down on' دلالة على الترشيد."
          },
          {
            id: "u4-l1ex1-q8",
            type: QuestionType.DROPDOWN,
            instruction: "Complete: The program aims to _____ awareness.",
            instructionAr: "أكمل لبيان هدف البرنامج في زيادة الوعي القومي بفاعلية:",
            sentenceParts: ["The program aims to ", " awareness."],
            options: ["bring about", "give up", "break down"],
            correctAnswer: "bring about",
            explanationAr: "'bring about' يشير لـ 'إحداث' أو 'تسبب بحصول' طفرة أو نتائج إيجابية كالتوعية."
          },
          {
            id: "u4-l1ex1-q9",
            type: QuestionType.DROPDOWN,
            instruction: "Complete: Poor diet can _____ health problems.",
            instructionAr: "أكمل لتعبر عن تسبب الأكلات غير الصحية في الأمراض:",
            sentenceParts: ["Poor diet can ", " health problems."],
            options: ["bring about", "carry out", "work out"],
            correctAnswer: "bring about",
            explanationAr: "الفعل 'bring about' يفيد في السياق بالتسبب بحدوث أو جلب الاضطرابات الصحية."
          },
          {
            id: "u4-l1ex1-q10",
            type: QuestionType.DROPDOWN,
            instruction: "Complete: Water helps the body _____ toxins.",
            instructionAr: "أكمل لتعبر عن تفكيك أو معالجة السموم والتخلص منها بالسوائل:",
            sentenceParts: ["Water helps the body ", " toxins."],
            options: ["break down", "put off", "build up"],
            correctAnswer: "break down",
            explanationAr: "الماء يعزز عمليات الأيض ومساعدة الكبد وأجهزة الجسم على تفكيك الأجسام الضارة 'break down'."
          }
        ]
      },
      {
        id: "l4-l1-ex2",
        name: "Exercise 2: Match phrasal verbs with their meanings",
        nameAr: "التمرين 2: طابق الأفعال الاصطلاحية بالمعنى المناسب لها",
        questions: [
          {
            id: "u4-l1ex2-q1",
            type: QuestionType.MATCHING,
            instruction: "Match each phrasal verb to its contextual meaning in nutrition and healthcare science.",
            instructionAr: "قم بسحب الكلمات ومطابقتها للتوصيل الصحيح والمعنوي للفعل:",
            pairs: [
              { id: "v1", left: "Cut down on", right: "Reduce consumption of food (تقليل وتقنين استهلاك الطعام)" },
              { id: "v2", left: "Break down", right: "Digest or decompose compounds (تفتيت وتفكيك الغذاء لتسهيل هضمه)" },
              { id: "v3", left: "Build up", right: "Increase strength or accumulate (بناء وتدعيم المناعة أو الكتلة العضلية)" },
              { id: "v4", left: "Give up", right: "Stop or quit doing something (الامتناع والإقلاع كلياً عن عادة)" },
              { id: "v5", left: "Put off", right: "Postpone or delay to a later time (تأجيل تناول الطعام أو المواعيد)" },
              { id: "v6", left: "Take in", right: "Absorb or consume nutrients (امتصاص المغذيات واستهلاكها بالجسم)" },
              { id: "v7", left: "Work out", right: "Exercise physically (أداء تدريبات وتمارين اللياقة البدنية)" },
              { id: "v8", left: "Bring about", right: "Cause to happen or result in (التحفيز على حدوث تحول إيجابي)" },
              { id: "v9", left: "Get over", right: "Recover from sickness (التشافي وتجاوز الوعكات والأسقام)" },
              { id: "v10", left: "Carry out", right: "Execute a plan or experiment (مباشرة وإنجاز خطة طبية كالحمية)" }
            ]
          }
        ]
      },
      {
        id: "l4-l1-ex3",
        name: "Exercise 3: Rewrite sentences using phrasal verbs",
        nameAr: "التمرين 3: أعد كتابة الجمل مستخدماً الأفعال الاصطلاحية المقررة",
        questions: [
          {
            id: "u4-l1ex3-q1",
            type: QuestionType.MCQ,
            instruction: "Rewrite: 'Reduce salt consumption.'",
            instructionAr: "اختر الصياغة المقابلة لـ (تقليل استهلاك الملح):",
            question: "Reduce salt consumption.",
            options: [
              "We must cut down on salt.",
              "We must build up salt.",
              "We must give up salt completely.",
              "We must carry out salt."
            ],
            correctAnswer: "We must cut down on salt.",
            explanationAr: "'Reduce' (تقليل) تماثل الفعل الاصطلاحي 'cut down on'."
          },
          {
            id: "u4-l1ex3-q2",
            type: QuestionType.MCQ,
            instruction: "Rewrite: 'Digest food properly.'",
            instructionAr: "اختر الصياغة المقابلة للهضم والتمرير السليم للأغذية بالفراغ الحقيقي:",
            question: "Digest food properly.",
            options: [
              "The body should break down food properly.",
              "The body should run into food properly.",
              "The body should put off food properly.",
              "The body should take in food properly."
            ],
            correctAnswer: "The body should break down food properly.",
            explanationAr: "فعل 'Digest' (الهضم والتبسيط اللغوي والكيميائي) يقابل 'break down'."
          },
          {
            id: "u4-l1ex3-q3",
            type: QuestionType.MCQ,
            instruction: "Rewrite: 'Increase physical fitness.'",
            instructionAr: "اختر المرادف اللغوي لبناء اللياقة والصحة الحيوية:",
            question: "Increase physical fitness.",
            options: [
              "Regular exercise helps build up physical fitness.",
              "Regular exercise helps take in physical fitness.",
              "Regular exercise helps get over physical fitness.",
              "Regular exercise helps work out physical fitness."
            ],
            correctAnswer: "Regular exercise helps build up physical fitness.",
            explanationAr: "'Increase' (تعزيز/تنمية تدريجية) يناسبه بشدة 'build up'."
          },
          {
            id: "u4-l1ex3-q4",
            type: QuestionType.MCQ,
            instruction: "Rewrite: 'Stop unhealthy habits.'",
            instructionAr: "اختر الجملة المعبرة عن ترك العادات الغثة والسيئة:",
            question: "Stop unhealthy habits.",
            options: [
              "You need to give up unhealthy habits.",
              "You need to bring about unhealthy habits.",
              "You need to put off unhealthy habits.",
              "You need to break down unhealthy habits."
            ],
            correctAnswer: "You need to give up unhealthy habits.",
            explanationAr: "الفعل 'Stop' (الإنهاء التام للشيء والامتناع) يساويه مصطلح 'give up'."
          },
          {
            id: "u4-l1ex3-q5",
            type: QuestionType.MCQ,
            instruction: "Rewrite: 'Delay meals.'",
            instructionAr: "اختر الصياغة المكافئة لـ (عدم تأجيل وتأخير موعد الوجبات الأساسية):",
            question: "Don't delay meals.",
            options: [
              "Don't put off meals.",
              "Don't carry out meals.",
              "Don't take in meals.",
              "Don't give up meals."
            ],
            correctAnswer: "Don't put off meals.",
            explanationAr: "الفعل 'Delay' (تأجيل أو مماطلة لوقت متأخر) يرادفه الفعل 'put off'."
          },
          {
            id: "u4-l1ex3-q6",
            type: QuestionType.MCQ,
            instruction: "Rewrite: 'Recover from illness.'",
            instructionAr: "اختر التعبير الذي يفيد التماثل للشفاء بسلامة ولطف:",
            question: "Recover from illness.",
            options: [
              "It takes rest to get over illness.",
              "It takes rest to carry out illness.",
              "It takes rest to bring about illness.",
              "It takes rest to break down illness."
            ],
            correctAnswer: "It takes rest to get over illness.",
            explanationAr: "الفعل 'Recover from' (التعافي والنقاهة من السقم) يرادفه التركيب 'get over'."
          },
          {
            id: "u4-l1ex3-q7",
            type: QuestionType.MCQ,
            instruction: "Rewrite: 'Consume enough nutrients.'",
            instructionAr: "اختر للتعبير عن الاستهلاك اليومي المتكامل ومقدار التزويد السليم للجسم:",
            question: "Consume enough nutrients.",
            options: [
              "Remember to take in enough nutrients.",
              "Remember to put off enough nutrients.",
              "Remember to cut down on enough nutrients.",
              "Remember to build up enough nutrients."
            ],
            correctAnswer: "Remember to take in enough nutrients.",
            explanationAr: "'Consume' (امتصاص، بلع، أو تموين الجسم) يطابق الفعل 'take in'."
          },
          {
            id: "u4-l1ex3-q8",
            type: QuestionType.MCQ,
            instruction: "Rewrite: 'Perform the diet plan.'",
            instructionAr: "اختر الجملة للتعبير عن الالتزام وتطبيق التعليمات الغذائية بحذر:",
            question: "Perform the diet plan diligently.",
            options: [
              "The patient must carry out the diet plan diligently.",
              "The patient must break down the diet plan diligently.",
              "The patient must get over the diet plan diligently.",
              "The patient must work out the diet plan diligently."
            ],
            correctAnswer: "The patient must carry out the diet plan diligently.",
            explanationAr: "الفعل 'Perform' (تنفيذ، إجراء عمل، إتمام واجب) يقابل التعبير 'carry out'."
          },
          {
            id: "u4-l1ex3-q9",
            type: QuestionType.MCQ,
            instruction: "Rewrite: 'Cause health improvement.'",
            instructionAr: "اختر الجملة التي تعبر عن جلب التحسن الصحي وإحداث الفوارق المرجوة بالأمعاء:",
            question: "Our custom diet program will cause health improvement.",
            options: [
              "Our custom diet program will bring about health improvement.",
              "Our custom diet program will carry out health improvement.",
              "Our custom diet program will put off health improvement.",
              "Our custom diet program will give up health improvement."
            ],
            correctAnswer: "Our custom diet program will bring about health improvement.",
            explanationAr: "'Cause' (تسبب بـ، أو ولد بالتبعية نتائج ملموسة كالبناء والصحة) يساويه تفصيلاً 'bring about'."
          },
          {
            id: "u4-l1ex3-q10",
            type: QuestionType.MCQ,
            instruction: "Rewrite: 'Perform exercise at the gym.'",
            instructionAr: "اختر المرادف لـ (الانتظام على القيام بتمارين لياقة وحرق سعرات سعيدة):",
            question: "We should perform exercise three times a week.",
            options: [
              "We should work out three times a week.",
              "We should break down three times a week.",
              "We should put off three times a week.",
              "We should take in three times a week."
            ],
            correctAnswer: "We should work out three times a week.",
            explanationAr: "المصطلح الرياضي 'Work out' يعني ممارسة التمارين الرياضية أو التشييد البدني."
          }
        ]
      },
      {
        id: "l4-l1-ex4",
        name: "Exercise 4: Contextual practice with Phrasal Verbs",
        nameAr: "التمرين 4: التدريب التطبيقي والسياقي للأفعال الاصطلاحية",
        questions: [
          {
            id: "u4-l1ex4-q1",
            type: QuestionType.MCQ,
            instruction: "Choose the correct verb for: 'High blood pressure patients must ______ sodium.'",
            instructionAr: "اختر الإكمال الصحيح للجملة:",
            question: "High blood pressure patients must ______ sodium.",
            options: ["cut down on", "work out", "take in too much"],
            correctAnswer: "cut down on",
            explanationAr: "تقليل الملح متبوع دائماً بـ (cut down on) في النصائح الطبية والروتينية اليومية."
          },
          {
            id: "u4-l1ex4-q2",
            type: QuestionType.MCQ,
            instruction: "Choose: 'The stomach produces acid to ______ proteins during digestion.'",
            instructionAr: "اختر المصطلح الطبي الأنسب:",
            question: "The stomach produces acid to ______ proteins.",
            options: ["break down", "get over", "give up"],
            correctAnswer: "break down",
            explanationAr: "تفكيك وهضم البروتينات في بيئة المعدة الحامضية يسمى (break down)."
          },
          {
            id: "u4-l1ex4-q3",
            type: QuestionType.MCQ,
            instruction: "Choose: 'To avoid flu, you must focus on habits that ______ your immune system.'",
            instructionAr: "اختر لدعم وتقوية المناعة:",
            question: "To avoid flu, you must focus on habits that ______ your immune system.",
            options: ["build up", "put off", "carry out"],
            correctAnswer: "build up",
            explanationAr: "(build up) تعزز المناعة وتجعل الجسم أكثر مقاومة للفيروسات."
          },
          {
            id: "u4-l1ex4-q4",
            type: QuestionType.MCQ,
            instruction: "Choose: 'Smoking is hazardous; the cardiologist advised him to ______.'",
            instructionAr: "اختر التعبير المناسب لوقف السلوك الضار تماماً وعلاجه:",
            question: "The cardiologist advised him to ______ smoking immediately.",
            options: ["give up", "work out", "take in"],
            correctAnswer: "give up",
            explanationAr: "التوقف الحاد وكلياً لمركب سام كالدخان يستعان له بـ (give up)."
          },
          {
            id: "u4-l1ex4-q5",
            type: QuestionType.MCQ,
            instruction: "Choose: 'Since she was nauseated, she decided to ______ her heavy lunch.'",
            instructionAr: "اختر للتعبير عن تأجيل وجبة خفيفة نتيجة تعب مسبق:",
            question: "Since she was nauseated, she decided to ______ her dinner.",
            options: ["put off", "break down", "carry out"],
            correctAnswer: "put off",
            explanationAr: "تأجيل الوجبة لعدم الاستقرار الهضمي (put off)."
          },
          {
            id: "u4-l1ex4-q6",
            type: QuestionType.MCQ,
            instruction: "Choose: 'A healthy patient should ______ at least 2 liters of fluids daily.'",
            instructionAr: "اختر لوصف احتياج استهلاك السوائل بالجسم موازنة:",
            question: "A healthy patient should ______ at least 2 liters of fluids daily.",
            options: ["take in", "give up", "get over"],
            correctAnswer: "take in",
            explanationAr: "تناول أو تعبئة السوائل لترطيب الخلايا يستلزم (take in)."
          },
          {
            id: "u4-l1ex4-q7",
            type: QuestionType.MCQ,
            instruction: "Choose: 'If you want to shed extra weight, you need to ______ in the gym.'",
            instructionAr: "القيام بمجهود في الصالة وبذل العرق:",
            question: "To shed extra weight, you need to ______ regularly.",
            options: ["work out", "break down", "put off"],
            correctAnswer: "work out",
            explanationAr: "(work out) يعني حرق الطاقة وممارسة تمرينات الكارديو واللياقة."
          },
          {
            id: "u4-l1ex4-q8",
            type: QuestionType.MCQ,
            instruction: "Choose: 'A balanced nutrition program can ______ incredible wellness.'",
            instructionAr: "توليد نتائج وعيش العافية والحيوية:",
            question: "Balanced nutrition can ______ incredible wellness.",
            options: ["bring about", "give up", "break down"],
            correctAnswer: "bring about",
            explanationAr: "إحداث التطور والعافية التامة هو دلالة على صائب الاستهلاك (bring about)."
          },
          {
            id: "u4-l1ex4-q9",
            type: QuestionType.MCQ,
            instruction: "Choose: 'With proper supplements, children slowly ______ rickets.'",
            instructionAr: "النهوض ومغادرة مراحل المرض نحو الصحة:",
            question: "With proper supplements, children slowly ______ rickets.",
            options: ["get over", "carry out", "put off"],
            correctAnswer: "get over",
            explanationAr: "لتخطي الكساح أو الأمراض تدريجياً وبناء بنية صحيحة (get over)."
          },
          {
            id: "u4-l1ex4-q10",
            type: QuestionType.MCQ,
            instruction: "Choose: 'The lab technicians will ______ the food safety audit tomorrow.'",
            instructionAr: "القيام بالفحص المخبري والجولة الفنية الحية:",
            question: "The lab technicians will ______ the audit.",
            options: ["carry out", "take in", "build up"],
            correctAnswer: "carry out",
            explanationAr: "إتمام الاستقصاء العلمي أو الرقابة الميدانية تسمى (carry out)."
          }
        ]
      }
    ]
  },
  {
    id: "unit4-lesson2",
    title: "Lesson 2: Nutrition Idioms (J, K, L)",
    titleAr: "الدرس 2: كنايات ومصطلحات التغذية بحروف J, K, L",
    description: "Learn descriptive nutrition idioms regarding lifestyle, eating habits, energy states, and physical conditioning.",
    descriptionAr: "تعلم كنايات التغذية التخصصية التي تبدأ بالحروف J, K, L للتعبير عن أنماط معيشية ورتب النشاط البدني العام.",
    exercises: [
      {
        id: "l4-l2-ex1",
        name: "Exercise 1: Match the idioms with their meanings",
        nameAr: "التمرين 1: طابق التعبيرات الاصطلاحية بالمدلول العربي الدقيق",
        questions: [
          {
            id: "u4-l2ex1-q1",
            type: QuestionType.MATCHING,
            instruction: "Pair each English nutritional idiom with its literal translation and contextual clinical significance.",
            instructionAr: "طابق الكناية بوصفها الدقيق لتتحول اللعبة لتفاعلية كاملة:",
            pairs: [
              { id: "ki1", left: "Kick the habit", right: "Quit a bad routine like sugar addiction (الإقلاع نهائياً عن عادة سيئة كالأكل السريع)" },
              { id: "ki2", left: "Load up on", right: "Eat heavily of some food group beforehand (شحن وتعبئة مخازن الطاقة بنوع من الغذاء)" },
              { id: "ki3", left: "Keep fit", right: "Maintain good physical condition (الحفاظ على معالم الصحة المظهرية والبدنية)" },
              { id: "ki4", left: "Lose your appetite", right: "Have no desire for food (ضعف أو انقطاع الرغبة في الأكل)" },
              { id: "ki5", left: "Junk food", right: "Unhealthy convenience food high in calories (أغذية خالية القيمة مليئة بالزيوت والملح)" },
              { id: "ki6", left: "Just what the doctor ordered", right: "Exactly what is needed for healing (الشيء المطلوب بالضبط لتحقيق المنفعة الصحية)" },
              { id: "ki7", left: "Listen to your body", right: "Pay attention to hunger, pain, or fatigue signals (قراءة وفهم إشارات جسمك الداخلية)" },
              { id: "ki8", left: "Live off", right: "Survive eating only one class of items (الاعتماد في المعيشة على صنف غذائي واحد)" },
              { id: "ki9", left: "Low on energy", right: "Feeling sluggish, fatigued, or undernourished (دنو الحيوية والدخول في فتور)" },
              { id: "ki10", left: "Long-term benefits", right: "Enduring positive outcomes for years (مكاسب بعيدة المدى للاعتدال بالغذاء)" }
            ]
          }
        ]
      },
      {
        id: "l4-l2-ex2",
        name: "Exercise 2: Fill in the blanks with correct J, K, L idioms",
        nameAr: "التمرين 2: املأ الفراغات للتواصل بطلاقة مع المصطلحات اليومية",
        questions: [
          {
            id: "u4-l2ex2-q1",
            type: QuestionType.DROPDOWN,
            instruction: "Fill: Regular cardiovascular exercise helps you ______.",
            instructionAr: "اختر التعبير المناسب لوصف صيانة اللياقة وحرق الدهون:",
            sentenceParts: ["Regular cardiovascular exercise helps you ", "."],
            options: ["keep fit", "lose your appetite", "live off junk"],
            correctAnswer: "keep fit",
            explanationAr: "ممارسة الرياضة تساعد بصورة طبيعية على الحفاظ على اللياقة والقوام الممشوق (keep fit)."
          },
          {
            id: "u4-l2ex2-q2",
            type: QuestionType.DROPDOWN,
            instruction: "Fill: Broccoli and citrus fruits are ______ nutrients and antioxidants.",
            instructionAr: "اختر لتوضح أن هذه الخضروات والفواكه مشحونة ومليئة بشدة بالعناصر الحيوية:",
            sentenceParts: ["Broccoli and citrus fruits are ", " with nutrients."],
            options: ["jam-packed", "low on", "unhealthy"],
            correctAnswer: "jam-packed",
            explanationAr: "يعني تعبير 'jam-packed' أنه مكدس أو ملغّم بمقادير غنية وممتازة."
          },
          {
            id: "u4-l2ex2-q3",
            type: QuestionType.DROPDOWN,
            instruction: "Fill: The diabetic patient successfully managed to ______ sugary snacks.",
            instructionAr: "الإقلاع التمكيني للتخلص السريع والناجح من التهام البسكويت والحلويات:",
            sentenceParts: ["The diabetic patient successfully managed to ", " sugary snacks."],
            options: ["kick the habit of", "load up on", "listen to his body on"],
            correctAnswer: "kick the habit of",
            explanationAr: "ترك العادات الدورية والانتصار على الشراهة يقابله كناية (kick the habit)."
          },
          {
            id: "u4-l2ex2-q4",
            type: QuestionType.DROPDOWN,
            instruction: "Fill: Marathon runners usually ______ carbs before the big race.",
            instructionAr: "تخزين كميات عالية من النشويات كعجائن الخبز لزيادة الطاقة للعدائين قبل السباق:",
            sentenceParts: ["Marathon runners usually ", " carbs before the big race."],
            options: ["load up on", "live off", "lose appetite for"],
            correctAnswer: "load up on",
            explanationAr: "الشحن الغذائي المفرط عمداً لمركب يسمى (load up on)."
          },
          {
            id: "u4-l2ex2-q5",
            type: QuestionType.DROPDOWN,
            instruction: "Fill: Potato chips and candies are considered ______.",
            instructionAr: "المصطلح لتصنيف المأكولات الترفيهية الفارغة والزيوت المهدرجة:",
            sentenceParts: ["Potato chips and candies are considered ", "."],
            options: ["junk food", "just what the doctor ordered", "light meals"],
            correctAnswer: "junk food",
            explanationAr: "تعرف الوجبات عديمة أو رديئة القمية الغذائية بـ (junk food)."
          },
          {
            id: "u4-l2ex2-q6",
            type: QuestionType.DROPDOWN,
            instruction: "Fill: This hot lemon elderberry tea is ______ to cure your cough.",
            instructionAr: "عندما تصف مشروباً ساخناً نفع حنجرتك تماماً كدواء واصف ومثالي:",
            sentenceParts: ["This hot lemon elderberry tea is ", " to cure your cough."],
            options: ["just what the doctor ordered", "jam-packed", "low on energy"],
            correctAnswer: "just what the doctor ordered",
            explanationAr: "كناية عن ملائمة المادة تماماً لاحتياج المريض للاستشفاء (just what the doctor ordered)."
          },
          {
            id: "u4-l2ex2-q7",
            type: QuestionType.DROPDOWN,
            instruction: "Fill: If you skip breakfast, you will feel ______ by noon.",
            instructionAr: "عند الإعياء وخفوت همة الجسم بعد حرمان الصباح من الإفطار:",
            sentenceParts: ["If you skip breakfast, you will feel ", " by noon."],
            options: ["low on energy", "healthy as a horse", "jam-packed with nutrients"],
            correctAnswer: "low on energy",
            explanationAr: "الشعور بهبوط النشاط أو فقد الكفاءة البدنية يقال له (low on energy)."
          },
          {
            id: "u4-l2ex2-q8",
            type: QuestionType.DROPDOWN,
            instruction: "Fill: To avoid stomach aches, you must learn to ______.",
            instructionAr: "أكمل بمعنى قراءة المنبهات الجسدية للشبع والتعب:",
            sentenceParts: ["To avoid stomach aches, you must learn to ", "."],
            options: ["listen to your body", "live off processed food", "lose your appetite"],
            correctAnswer: "listen to your body",
            explanationAr: "'Listen to your body' تعني العناية التامة بمكتشفات الألم والانصياع له."
          },
          {
            id: "u4-l2ex2-q9",
            type: QuestionType.DROPDOWN,
            instruction: "Fill: Cutting salt and sugar from your daily meals brings great ______.",
            instructionAr: "النتائج الرائعة بعيدة وممتدة الأثر على أجهزة ومفاصل الجسم:",
            sentenceParts: ["Cutting salt and sugar from your daily meals brings great ", "."],
            options: ["long-term benefits", "hunger pangs", "sudden lifestyle changes"],
            correctAnswer: "long-term benefits",
            explanationAr: "تحتاج العادات الصالحة لزمن لتبدي فوائدها، وتدعى تلك النتائج بـ (long-term benefits)."
          },
          {
            id: "u4-l2ex2-q10",
            type: QuestionType.DROPDOWN,
            instruction: "Fill: For dinner, it is highly recommended to have a ______ like spinach salad.",
            instructionAr: "أكل مكونات متواضعة السعرات خفيفة الهضم قبل الخلود للنوم:",
            sentenceParts: ["For dinner, it is highly recommended to have a ", " like spinach salad."],
            options: ["light meal", "heavy intake", "junk food basket"],
            correctAnswer: "light meal",
            explanationAr: "الوجبة السهلة والمحدودة السعرات مساء تسمى (light meal)."
          }
        ]
      },
      {
        id: "l4-l2-ex3",
        name: "Exercise 3: Choose the correct idiom in daily scenarios",
        nameAr: "التمرين 3: اختر الكناية الدقيقة التي تلائم الموقف والسيناريو",
        questions: [
          {
            id: "u4-l2ex3-q1",
            type: QuestionType.MCQ,
            instruction: "Choose: 'Avoiding processed snacks and embracing whole food is the ______.'",
            instructionAr: "أكمل الجملة:",
            question: "Avoiding processed snacks and embracing whole food is the ______.",
            options: ["key to good health", "junk food trend", "lifestyle threat"],
            correctAnswer: "key to good health",
            explanationAr: "تعبير (key to good health) يعني حجر الأساس والمفتاح الذهبي للسلامة الجسدية."
          },
          {
            id: "u4-l2ex3-q2",
            type: QuestionType.MCQ,
            instruction: "Choose: 'A customized beet juice smoothie can help ______ stagnant energy levels.'",
            instructionAr: "المساعد لتنشيط الدورة الدموية وتدفق الطاقات بامتياز:",
            question: "A customized beet juice smoothie can help ______ energy levels.",
            options: ["juice up", "kick the habit of", "keep fit to"],
            correctAnswer: "juice up",
            explanationAr: "المصطلح 'juice up' يعني حث وزيادة الحيوية أو النشاط بقوة."
          },
          {
            id: "u4-l2ex3-q3",
            type: QuestionType.MCQ,
            instruction: "Choose: 'Under severe psychological stress, patients often ______.'",
            instructionAr: "امتناع رغبة الإطعام عند توتر المزاج والعصاب الشديد:",
            question: "Under severe psychological stress, patients often ______.",
            options: ["lose their appetite", "keep fit", "get a sweet tooth"],
            correctAnswer: "lose their appetite",
            explanationAr: "الامتناع أو النفور النفسي عن لقمة العيش طوعاً أو كرهاً هو (lose their appetite)."
          },
          {
            id: "u4-l2ex3-q4",
            type: QuestionType.MCQ,
            instruction: "Choose: 'Eating at the dining table with family is a great way to start a ______.'",
            instructionAr: "جلسة العشاء العائلي الحيوية لتبادل خطط العافية وترك المنغصات:",
            question: "Eating at the dining table with family supports ______.",
            options: ["kitchen table talk", "heavy eating behaviors", "sweet craving habits"],
            correctAnswer: "kitchen table talk",
            explanationAr: "'Kitchen table talk' يدل على المداولات والأحشية التي يديرها أفراد الأسرة بتلقائية."
          },
          {
            id: "u4-l2ex3-q5",
            type: QuestionType.MCQ,
            instruction: "Choose: 'Wild salmon combined with quinoa forms an absolute meal ______.'",
            instructionAr: "الوجبة التي تعج بفيض هائل من الأحماض الدهنية والفيتامينات المقررة:",
            question: "Wild salmon combined with quinoa forms a meal ______.",
            options: ["jam-packed with nutrients", "low on health", "hard to digest"],
            correctAnswer: "jam-packed with nutrients",
            explanationAr: "وجبة السالمون والكينوا غنية للغاية ولذا يقال عنها (jam-packed with nutrients)."
          },
          {
            id: "u4-l2ex3-q6",
            type: QuestionType.MCQ,
            instruction: "Choose: 'For safe portion control, weightlifters must ______.'",
            instructionAr: "إدراك عتبة القبعات أو الحد السعري المناسب لكي لا تفرط في السمنة:",
            question: "For safe portion control, weightlifters must ______.",
            options: ["know their limits", "live off sweets", "lose their power"],
            correctAnswer: "know their limits",
            explanationAr: "إدراك حدود اللياقة والأمتار المخصصة للمعدة يعني (know your limits)."
          },
          {
            id: "u4-l2ex3-q7",
            type: QuestionType.MCQ,
            instruction: "Choose: 'Overcoming obesity fundamentally requires a lifelong ______.'",
            instructionAr: "حاجة الخلاص المضمون للبدانة بتعديل أفكارك وأطباعك الروتينية مدى العمر:",
            question: "Overcoming obesity fundamentally requires a ______.",
            options: ["lifestyle change", "light meal", "sweet cravings diet"],
            correctAnswer: "lifestyle change",
            explanationAr: "الحل للمشكلات المزمنة هو تدشين نمط حياة وقائي ممتد وصحي (lifestyle change)."
          },
          {
            id: "u4-l2ex3-q8",
            type: QuestionType.MCQ,
            instruction: "Choose: 'Her teeth started decaying so her mother forced her to ______ processed candies.'",
            instructionAr: "أن تسقط عادة بلع السكاكر والشوكولا لتنقذ فمك من التسوس الكلي:",
            question: "To save her teeth, she had to ______ candies.",
            options: ["kick the habit of eating", "load up on", "listen to the flavor of"],
            correctAnswer: "kick the habit of eating",
            explanationAr: "يقال للإقلاع والتخلّص التام للعادة التي تؤذي الأعضاء (kick the habit)."
          },
          {
            id: "u4-l2ex3-q9",
            type: QuestionType.MCQ,
            instruction: "Choose: 'Drinking clean spring water early in the morning ______ your kidneys.'",
            instructionAr: "رفع كفاءة ونضح غسيل خلايا المسالك وتحسين وتيرتها البولية:",
            question: "Drinking clean spring water helps to ______ digestion and toxin removal.",
            options: ["juice up", "kick of", "live off"],
            correctAnswer: "juice up",
            explanationAr: "إنعاش وتسهيل السوائل والتخلص من سموم الجسم يدعى لغوياً ولطيفاً (juice up)."
          },
          {
            id: "u4-l2ex3-q10",
            type: QuestionType.MCQ,
            instruction: "Choose: 'Investing extra time in preparing home food presents significant ______.'",
            instructionAr: "جدوى غلي الخضراوات وإقلال السمن البلدي ومنافعه الخالدة الكبرى:",
            question: "Preparing fresh home food presents great ______.",
            options: ["long-term benefits", "instant sodium rushes", "stomach discomforts"],
            correctAnswer: "long-term benefits",
            explanationAr: "تدخر جهود الطهي النظيف بالرعاية لاحقاً بهيئة طاقة وعمر صحي مديد (long-term benefits)."
          }
        ]
      },
      {
        id: "l4-l2-ex4",
        name: "Exercise 4: Practice sentences with Idioms (J, K, L)",
        nameAr: "التمرين 4: صياغة الجمل التطبيقية مع الكنايات والمصطلحات المقررة",
        questions: [
          {
            id: "u4-l2ex4-q1",
            type: QuestionType.MCQ,
            instruction: "Which sentence uses 'Junk food' correctly in a health advice context?",
            instructionAr: "أي الجمل تستعمل مصطلح (Junk food) للتوعية الطبية بشكل سليم؟",
            question: "Select the sentence with proper usage of 'Junk food':",
            options: [
              "Hospitals should exclude junk food from patient diet sheets.",
              "Junk food is highly rich in essential amino acids and iron.",
              "To improve physical fitness, you must load up on junk food.",
              "Doctors recommend junk food for nursing mothers."
            ],
            correctAnswer: "Hospitals should exclude junk food from patient diet sheets.",
            explanationAr: "الوجبات السريعة الضارة (junk food) مجمع على وجوب إنقاصها واستبعادها تماماً من المشافي."
          },
          {
            id: "u4-l2ex4-q2",
            type: QuestionType.MCQ,
            instruction: "Which represents correct semantic use of the idiom 'keep fit'?",
            instructionAr: "اختر الجملة التي تبين تطبيق (keep fit) للإفادة عن اللياقة:",
            question: "Select the correct use of 'keep fit':",
            options: [
              "We run daily and perform cardio sessions to keep fit.",
              "Sleeping all day is the best way to keep fit.",
              "They eat chips with processed cheese to keep fit.",
              "Eating white sugar keeps you fit."
            ],
            correctAnswer: "We run daily and perform cardio sessions to keep fit.",
            explanationAr: "المحافظة على قوام رشيق معافى (keep fit) مرده الجري اليومي وكارديو السلامة."
          },
          {
            id: "u4-l2ex4-q3",
            type: QuestionType.MCQ,
            instruction: "Which represents the proper use of 'just what the doctor ordered'?",
            instructionAr: "ما الجملة التي تستخدم الكناية (الظفر بالدواء المناسب تماماً وحاجة الطبيب):",
            question: "Choose correct use of 'just what the doctor ordered':",
            options: [
              "This cold compression on my swollen knee is just what the doctor ordered.",
              "Drinking boiling coffee is just what the doctor ordered for sore throat.",
              "Staying up till dawn is just what the doctor ordered for chronic fatigue.",
              "Skipping clean water is just what the doctor ordered."
            ],
            correctAnswer: "This cold compression on my swollen knee is just what the doctor ordered.",
            explanationAr: "تطبيق كمادة باردة يسهل زوال الانتفاخ كلياً وهو المتطلب الطبي الروتيني المثالي."
          },
          {
            id: "u4-l2ex4-q4",
            type: QuestionType.MCQ,
            instruction: "Which sentence relates properly to the idiom 'listen to your body'?",
            instructionAr: "اختر الجملة المناسبة للوعي بنداء وآلام البدن والرضوخ لها:",
            question: "Which of the following uses 'listen to your body' correctly?",
            options: [
              "Instead of ignoring this severe chest pain, you must listen to your body and rest.",
              "She prefers to ignore her stomach ulcers because she listens to her body.",
              "To test muscle endurance, always ignore pain and never listen to your body.",
              "Listening to your body means drinking excessive amounts of caffeinated soda."
            ],
            correctAnswer: "Instead of ignoring this severe chest pain, you must listen to your body and rest.",
            explanationAr: "عند تعب العضلة ينصح الطبيب بالتوقف التام والجلوس لضمان بقاء العروق سليمة."
          },
          {
            id: "u4-l2ex4-q5",
            type: QuestionType.MCQ,
            instruction: "Which represents proper clinical usage of 'long-term benefits'?",
            instructionAr: "اختر الجملة التي تبرز الفوائد بعيدة الأمد (long-term benefits):",
            question: "Which represents a sound health fact regarding 'long-term benefits'?",
            options: [
              "Regular exercise and moderate sugar restriction yield immense long-term benefits.",
              "High sodium intake in early youth brings exceptional long-term benefits.",
              "Fast food diets show long-term benefits for diabetic groups.",
              "Avoiding physical movement during high-stress exams gives long-term benefits."
            ],
            correctAnswer: "Regular exercise and moderate sugar restriction yield immense long-term benefits.",
            explanationAr: "سير الأقدام يومياً مع خفض كنز الشوكولا يعود بفوائد وعمر نضر ممتد الأثر."
          }
        ]
      }
    ]
  },
  {
    id: "unit4-lesson3",
    title: "Lesson 3: Reading - Nutrition in Everyday Life",
    titleAr: "الدرس 3: القراءة - التغذية في ممارسات الحياة اليومية",
    description: "Read about the practical intersection of nutrition with modern lifestyles, work productivity, and prevention of fatigue.",
    descriptionAr: "قطعة قراءة غنية تبرز الارتباط الوثيق للتغذية مع كفاءة العمل والدراسة والوقاية الروتينية من الكسل.",
    passage: {
      title: "Nutrition in Everyday Life",
      paragraphs: [
        {
          id: 1,
          text: "Modern nutrition is not merely about managing the quantity of calories we consume; it has become an essential pillar of everyday productivity, mental focus, and disease prevention. Our rapid daily routines often lead to poor convenience food choices, resulting in sluggishness, physical fatigue, and sometimes chronic ailments.",
          textAr: "ليست التغذية المعاصرة مجرد إدارة لأرقام السعرات المستهلكة؛ بل تحولت لتغدو ركيزة أساسية لكفاءة العمل والإنتاج والتركيز الوقائي من العلل. إن عجلة الأيام المتسارعة تسوق الفرد نحو وجبات الشوارع والمأكولات الجاهزة مما يسفر عن تعب مزمن وفتور بالذاكرة."
        },
        {
          id: 2,
          text: "Healthcare professionals emphasize that making incremental changes to daily habits—such as packing a fresh lunch, opting for high-fiber whole foods, and keeping properly hydrated—can tremendously elevate energy levels. Nutritional education and community awareness programs have proved critical in helping families read food labels accurately and prioritize wholesome organic ingredients for long-term health span.",
          textAr: "ويشير خبراء الرعاية الطبية إلى أن الخطوات المتواضعة المتتابعة -كحمل صندوق غذاء منزلي طازج، وتفضيل حبوب الشوفان الكاملة، والمواظبة على السوائل- ترفع مستويات الحيوية بامتياز. لقد أثبتت برامج التوعية بالأحياء دورها الرائد في تمكين الأسر من مراجعة ملصق التغذية وفرز السعرات المضافة."
        }
      ]
    },
    exercises: [
      {
        id: "l4-l3-ex1",
        name: "Exercise 1: Comprehension Questions on the Passage",
        nameAr: "التمرين 1: أسئلة استيعاب وفهم النص العلمي",
        questions: [
          {
            id: "u4-l3ex1-q1",
            type: QuestionType.MCQ,
            instruction: "According to paragraph 1, what is modern nutrition NOT limited to?",
            instructionAr: "بناء على الفقرة الأولى، التغذية الحديثة لا تقتصر فقط على ماذا؟",
            question: "What is modern nutrition not merely limited to?",
            options: [
              "Managing the sheer quantity of calories consumed.",
              "Elevating mental focus.",
              "Improving work productivity.",
              "Treating emergency symptoms."
            ],
            correctAnswer: "Managing the sheer quantity of calories consumed.",
            explanationAr: "يذكر الكاتب بصراحة بالسطر الأول أنها 'not merely about managing the quantity of calories' (ليست فقط للتحكم بالسعرات الحسابية الجافة)."
          },
          {
            id: "u4-l3ex1-q2",
            type: QuestionType.MCQ,
            instruction: "What physiological consequence is linked to poor convenience food choices?",
            instructionAr: "ما الأثر البدني المذكور جراء الاعتماد على مأكولات الشوارع الجاهزة؟",
            question: "What negative outcome results from convenience food choices?",
            options: [
              "Sluggishness, physical fatigue, and chronic illness.",
              "Increased bone density.",
              "Improved respiratory rate.",
              "Immediate mental focus."
            ],
            correctAnswer: "Sluggishness, physical fatigue, and chronic illness.",
            explanationAr: "تؤدي وجبات الراحة والسرعة الكسولة هذه لتعب جسدي وخمول مزمن وأمراض بالأمعاء والقلب كما بالفقرة الأولى."
          },
          {
            id: "u4-l3ex1-q3",
            type: QuestionType.MCQ,
            instruction: "What minor change to habits is recommended by healthcare specialists?",
            instructionAr: "أي العادات البسيطة والذكية يوصي بها الأطباء للعمل بها يومياً؟",
            question: "Which positive habit change is explicitly listed in paragraph 2?",
            options: [
              "Packing a fresh home lunch and opting for fiber-rich whole foods.",
              "Excluding all meals and drinking black coffee exclusively.",
              "Taking heavy medical supplements with soda.",
              "Exercising for five uninterrupted hours."
            ],
            correctAnswer: "Packing a fresh home lunch and opting for fiber-rich whole foods.",
            explanationAr: "إعداد اللنش بوكس واختيار الحبوب الغنية بالألياف الطبيعية هو الحل السلوكي السلس الذي طرحته الفقرة الثانية."
          },
          {
            id: "u4-l3ex1-q4",
            type: QuestionType.MCQ,
            instruction: "What role do community awareness programs fulfill for local families?",
            instructionAr: "ما الخدمة الجليلة التي تقدمها برامج التثقيف للأسر بالحي؟",
            question: "How do community awareness programs help families?",
            options: [
              "They teach them to read food labels and prioritize organic ingredients.",
              "They supply free organic meals to all residents.",
              "They prescribe pharmaceutical tablets.",
              "They enforce strict weight-reduction targets by law."
            ],
            correctAnswer: "They teach them to read food labels and prioritize organic ingredients.",
            explanationAr: "توجيه الأسرة لقراءة بطاقة التغذية لفرز كمية السكر المضاف ومعرفة المكون الصحي قبل الشراء."
          },
          {
            id: "u4-l3ex1-q5",
            type: QuestionType.MCQ,
            instruction: "What represents the ultimate target of incorporating wholesome nutrition?",
            instructionAr: "ما المكسب والهدف الأكبر بعيد الأثر من تعديل الروتين للأكل الخالص؟",
            question: "What does wholesome nutrition enhance in the long run?",
            options: [
              "Long-term health span and daily vitality.",
              "Instant spike in high blood sugar.",
              "Reliance on emergency medical attention.",
              "Stomach discomfort and rapid pulse rate."
            ],
            correctAnswer: "Long-term health span and daily vitality.",
            explanationAr: "الترقي بجودة الحياة وضمان العجوزية النضرة الصحيحة هو لب وغاية الغباء الفطري المعتدل."
          }
        ]
      },
      {
        id: "l4-l3-ex2",
        name: "Exercise 2: True or False questions on the Reading piece",
        nameAr: "التمرين 2: أسئلة صح أم خطأ حول مضامين المقال الطبي المرفق",
        questions: [
          {
            id: "u4-l3ex2-q1",
            type: QuestionType.BINARY,
            instruction: "True or False: Modern nutrition is strictly and only about counting calories.",
            instructionAr: "صح أم خطأ: التغذية الحديثة تهتم فقط وحصرياً بحساب السعرات السطحية الكسيرة.",
            sentenceBefore: "Modern nutrition is solely confined to calorie calculation:",
            options: ["True", "False"],
            correctAnswer: "False",
            explanationAr: "خطأ. بل تهتم التغذية أيضاً بجودة المغذيات والألياف للوقاية وزيادة مستوى التركيز والدورة الدموية بصفة عامة."
          },
          {
            id: "u4-l3ex2-q2",
            type: QuestionType.BINARY,
            instruction: "True or False: Poor food choices lead directly to fatigue and sluggishness in humans.",
            instructionAr: "صح أم خطأ: الاختيارات الغذائية الهزيلة تسبب مباشرة الفتور والكسل الجسدي بالمهام.",
            sentenceBefore: "Sluggishness is a documented outcome of poor convenience diets:",
            options: ["True", "False"],
            correctAnswer: "True",
            explanationAr: "صحيح. فالأغذية الرديئة المعدومة القيمة تخفض مستويات القوة وحيوية النسيج وتزيد الخجل المعوي."
          },
          {
            id: "u4-l3ex2-q3",
            type: QuestionType.BINARY,
            instruction: "True or False: Packing a clean lunch from home is dismissed as a waste of time by specialists.",
            instructionAr: "صح أم خطأ: إرجاء وإعداد علبة الأكل المنزلية الخالصة يعتبر جهداً لا نفع له بالدراسات.",
            sentenceBefore: "Healthcare professionals discourage taking custom home-prepared lunches:",
            options: ["True", "False"],
            correctAnswer: "False",
            explanationAr: "خطأ. الأطباء يحثون على إعداد الغداء منزلياً للتحكم السلس بنقاء ومقادير وطاقة الزيت النباتي."
          },
          {
            id: "u4-l3ex2-q4",
            type: QuestionType.BINARY,
            instruction: "True or False: Nutritional literacy helps people make organic and balanced selections.",
            instructionAr: "صح أم خطأ: محو الأمية الغذائية والتثقيف يدفع للشراء العضوي النقي المعتدل.",
            sentenceBefore: "Knowledge of food metrics supports better choice selection:",
            options: ["True", "False"],
            correctAnswer: "True",
            explanationAr: "صحيح. التوعية تجعل الإنسان قادراً على تفضيل المكون الطازج الروتيني المعتدل."
          },
          {
            id: "u4-l3ex2-q5",
            type: QuestionType.BINARY,
            instruction: "True or False: Incremental small modifications are ineffective for sustainable energy levels.",
            instructionAr: "صح أم خطأ: التغييرات والخطوات الطفيفة الروتينية غير مجدية للنشاط المستمر.",
            sentenceBefore: "Small changes do not create measurable clinical benefits:",
            options: ["True", "False"],
            correctAnswer: "False",
            explanationAr: "خطأ. بل إن هذه التراكمات المتواضعة كشرب كوب إضافي تمنع حصوات الكلى وترفع طاقة الخلايا بنقاء."
          }
        ]
      },
      {
        id: "l4-l3-ex3",
        name: "Exercise 3: Vocabulary and Synonyms from Reading",
        nameAr: "التمرين 3: معاني المفردات والمرادفات التخصصية للمقال",
        questions: [
          {
            id: "u4-l3ex3-q1",
            type: QuestionType.MCQ,
            instruction: "Find a word meaning: 'Highly important, crucial, or necessary for life'.",
            instructionAr: "ابحث عن اللفظ بالنص الذي يعني (هام للغاية وحيوي للبقاء):",
            question: "Crucial or vital element:",
            options: ["Essential", "Sluggish", "Organic", "Incremental"],
            correctAnswer: "Essential",
            explanationAr: "'Essential' تدل لغوياً وعلمياً على الشأن البالغ الأهمية والواجب توفيره باستمرار (أساسي)."
          },
          {
            id: "u4-l3ex3-q2",
            type: QuestionType.MCQ,
            instruction: "Find a word meaning: 'Sluggishness, lack of energy, or chronic tiredness'.",
            instructionAr: "الكلمة الدالة على الفتور وهبوط الطاقة المزمن المسبب للكساد البنيوي والجهد المعطل:",
            question: "Sluggishness or chronic lack of energy:",
            options: ["Fatigue", "Health span", "Productivity", "Nutrition"],
            correctAnswer: "Fatigue",
            explanationAr: "مصطلح (Fatigue) يشرح التعب السريري العام والكلال الذي يخفض معنويات البدن."
          },
          {
            id: "u4-l3ex3-q3",
            type: QuestionType.MCQ,
            instruction: "Find a word meaning: 'Medical specialists who have deep training and certification'.",
            instructionAr: "العلماء وحاملي شهادات التشخيص ذوي الدربة والمراس الطبيين المعتمدين:",
            question: "Medical experts of a scientific field:",
            options: ["Professionals", "Patients", "Lab audit", "Toxins"],
            correctAnswer: "Professionals",
            explanationAr: "(Professionals) هم الممارسون المحترفون المختصون بمعرفة خبايا ووظائف تخصصهم وقوانينه."
          },
          {
            id: "u4-l3ex3-q4",
            type: QuestionType.MCQ,
            instruction: "Find a word meaning: 'Increasing step-by-step or in small quantities slowly'.",
            instructionAr: "اللفظ الذي يبين الكسب المتواضع التدريجي المتمرحل خطوة بخطوة لمنع الانتكاسة السريعة:",
            question: "Proceeding in gradual steps:",
            options: ["Incremental", "Organic", "Chronic", "Essential"],
            correctAnswer: "Incremental",
            explanationAr: "'Incremental' يعني التدريج أو التقدم عبر خطوات طفيفة ومتسلسلة آمنة."
          },
          {
            id: "u4-l3ex3-q5",
            type: QuestionType.MCQ,
            instruction: "Find a word meaning: 'The total duration of a person's life spent in healthy status'.",
            instructionAr: "المصطلح الدال على حصاد سنين العمر التي يعيشها الفرد بتمتع تام بصحته وعافيته كاملة:",
            question: "Years lived in robust, healthy condition:",
            options: ["Health span", "Calorie", "Fast food", "Nutritionism"],
            correctAnswer: "Health span",
            explanationAr: "(Health span) يختص ببيان مدى ما تمضيه من سنوات العمر في عافية مثمرة ووقاية من العجز والخرق."
          }
        ]
      },
      {
        id: "l4-l3-ex4",
        name: "Exercise 4: Complete sentences using context clues",
        nameAr: "التمرين 4: أكمل الجمل والتجانس السياقي للنظام الصحي",
        questions: [
          {
            id: "u4-l3ex4-q1",
            type: QuestionType.MCQ,
            instruction: "Complete: 'A chronic state of tiredness and listlessness is medically called ______.'",
            instructionAr: "أكمل الجملة بمصطلح التعب الحاد الدائم:",
            question: "Persistent listlessness and tiredness represents ______.",
            options: ["chronic fatigue", "health span", "awareness programs"],
            correctAnswer: "chronic fatigue",
            explanationAr: "الشعور بالتعب والارتخاء المستمر لأجهزة الجسم يدعى بالأوساط العيادية 'chronic fatigue'."
          },
          {
            id: "u4-l3ex4-q2",
            type: QuestionType.MCQ,
            instruction: "Complete: 'To prevent dehydration in summer heat, maintaining constant ______ is mandatory.'",
            instructionAr: "العمل على إمداد الشرايين والخلايا بالتدفق المائي لإنقاذ الكلية الصامدة صيفاً:",
            question: "Embracing sufficient daily liquid quantity is called ______.",
            options: ["hydration", "sluggishness", "organic food production"],
            correctAnswer: "hydration",
            explanationAr: "(Hydration) يعني ترطيب الخلايا وحفظ توازن المياه داخل وخارج النسيج لوظائف الهضم المتسارع."
          },
          {
            id: "u4-l3ex4-q3",
            type: QuestionType.MCQ,
            instruction: "Complete: 'Buying whole foods instead of processed ones improves the ______ of your diet.'",
            instructionAr: "تفضيل الخضروات النضرة بدل العبوات الصناعية من شأنه ترقية ماذا؟",
            question: "Fresh food items raise the overall ______.",
            options: ["nutritional quality", "calorie waste", "food inflammation risk"],
            correctAnswer: "nutritional quality",
            explanationAr: "الوجبة الطازجة الغنية تساهم في الارتقاء بمجمل القيمة الغذائية والجودة (nutritional quality)."
          },
          {
            id: "u4-l3ex4-q4",
            type: QuestionType.MCQ,
            instruction: "Complete: 'Analyzing the print on the back of products allows consumers to read ______.'",
            instructionAr: "قراءة البنود الموضحة بمؤخرة علبة الجبن لمعرفة نسبة الدهون والشحوم المضافة:",
            question: "The back of food packaging lists the ______.",
            options: ["nutrition labels", "hospital locations", "exercise lists"],
            correctAnswer: "nutrition labels",
            explanationAr: "تلقب البيانات الإلزامية التي تشرح محتويات المواد والجرام الحقيقي باسم ورقة (nutrition labels)."
          },
          {
            id: "u4-l3ex4-q5",
            type: QuestionType.MCQ,
            instruction: "Complete: 'Replacing white carbohydrates with whole grains represents a healthy ______.'",
            instructionAr: "استبدال الخبز الفينو بالخبز الأسمر الكامل يمثل أي نوع من التطوير الوقائي بالمنزل؟",
            question: "Choosing whole grains represents a crucial ______.",
            options: ["lifestyle change", "fatigue source", "nutritional ailment"],
            correctAnswer: "lifestyle change",
            explanationAr: "تعديل المكونات الحياتية وبناء حمية معافاة نظيفة يدخل تحت باب تبديل نمط الحياة الهادئ (lifestyle change)."
          }
        ]
      }
    ]
  },
  {
    id: "unit4-lesson4",
    title: "Lesson 4: Nutrition Terms",
    titleAr: "الدرس 4: المصطلحات الطبية وعلم وظائف الأعضاء الخاص بالتغذية",
    description: "Learn essential clinical terms starting with L and K, detailing biochemical structures, digestive enzymes, and longevity.",
    descriptionAr: "دراسة مصطلحات دقيقة متمثلة بالدهنيات، إنزيم تفتيت سكر اللاكتوز، الكتلة اللحمية الخالية من الدهون، والعمر الحيوي الطويل.",
    exercises: [
      {
        id: "l4-l4-ex1",
        name: "Exercise 1: Match the terms with definitions",
        nameAr: "التمرين 1: طابق المصطلح الفسيولوجي بالتعريف العلمي الدقيق له",
        questions: [
          {
            id: "u4-l4ex1-q1",
            type: QuestionType.MATCHING,
            instruction: "Connect each specialized biochemical and physiological term with its standard biological definition.",
            instructionAr: "قم بسحب العبارة وتركيبها مع ما يعادلها في العلوم والتغذية:",
            pairs: [
              { id: "t1", left: "Lipid", right: "Fat or fat-like organic compound essential for building cell membranes (الدهون والشموع غير الذوابة بالماء)" },
              { id: "t2", left: "Lactose", right: "Natural sugar present in animal milk (سكر اللاكتوز الذي يعطي اللبن والجبن حلو المذاق)" },
              { id: "t3", left: "Lean protein", right: "Protein source with minimal fat like turkey breast (بروتينات تفتقر للشحم غنية بلياقة النواة العضلية)" },
              { id: "t4", left: "Ketosis", right: "Metabolic state where body burns fat for fuel instead of glucose (توليد الطاقة بأكل الشحم لتعديل حرارة الدم)" },
              { id: "t5", left: "Kilocalorie", right: "Unit of measurement indicating energy value of food (الكيلو كالوري المعتمد لحساب مقادير الاحتراق)" },
              { id: "t6", left: "Longevity", right: "Long duration of life maintained in excellent health (العمر العضوي والصحي الطويل بعيداً عن أمراض العجزة)" },
              { id: "t7", left: "Lean body mass", right: "Total weight of body muscles, bones, and organs without adipose fat (كتلة اللياقة العضلية والهضمية الصافية)" },
              { id: "t8", left: "Lactase", right: "Enzyme that splits milk sugar into glucose and galactose (إنزيم اللاكتيز المسؤول الأول عن تكسير سكر الألبان)" },
              { id: "t9", left: "Low-sodium diet", right: "Restricting salt to protect blood pressure and kidney filtration (حمية إنقاص الملح لتسريع تخفيض ضغط الدم)" },
              { id: "t10", left: "Lifestyle disease", right: "Ailment caused by poor daily choices like diabetes type 2 (المرض السلوكي الذي تولده شراهة الأكل والكسل)" }
            ]
          }
        ]
      },
      {
        id: "l4-l4-ex2",
        name: "Exercise 2: Fill in the blanks with correct terms",
        nameAr: "التمرين 2: املأ الفراغات لاختبار قوة الذاكرة ومفاهيم ممرضي المستقبل",
        questions: [
          {
            id: "u4-l4ex2-q1",
            type: QuestionType.DROPDOWN,
            instruction: "Fill: The chemical calorie metric is termed a ______.",
            instructionAr: "أكمل الجملة مع وحدة طاقة الغذاء الحقيقية بالصيدلة والتغذية:",
            sentenceParts: ["The physiological energy value of any meal is calculated in ", "."],
            options: ["kilocalories", "lipids", "lactase"],
            correctAnswer: "kilocalories",
            explanationAr: "الكيلو سعر الحراري (Kilocalorie) هو الأداة العالمية لحساب مخزون احتراق المواد الغذائية."
          },
          {
            id: "u4-l4ex2-q2",
            type: QuestionType.DROPDOWN,
            instruction: "Fill: To prevent lactose intolerance, the intestine needs ______.",
            instructionAr: "أكمل بالإجراء لإنزيم تفكيك حليب الضأن والأبقار بالمعد الصامتة:",
            sentenceParts: ["To digest milk correctly, the juvenile small intestine must produce ", "."],
            options: ["lactase", "lactose", "longevity"],
            correctAnswer: "lactase",
            explanationAr: "إنزيم اللاكتيز (Lactase) يعالج ويفكك سكر الحليب لتفادي تشنج القولون المعيب."
          },
          {
            id: "u4-l4ex2-q3",
            type: QuestionType.DROPDOWN,
            instruction: "Fill: Athletes consume egg whites to obtain ______.",
            instructionAr: "أكمل للغذاء الصفي ذو القدر المصغر جداً من الشحوم المستوردة:",
            sentenceParts: ["Athletes consume egg whites to obtain high quality ", "."],
            options: ["lean protein", "ketosis", "lifestyle disease"],
            correctAnswer: "lean protein",
            explanationAr: "بياض البيض يسوق (lean protein) بروتين عضلي ناصع النقاء قليل الكوليسترول."
          },
          {
            id: "u4-l4ex2-q4",
            type: QuestionType.DROPDOWN,
            instruction: "Fill: Low carbohydrate diets force muscles into a state of ______.",
            instructionAr: "أكمل بالعملية للأ أيض الدهون وحرق حويصلات البطن:",
            sentenceParts: ["Low carb intakes eventually force the liver to initialize ", "."],
            options: ["ketosis", "lactase deficiency", "sodium accumulation"],
            correctAnswer: "ketosis",
            explanationAr: "الحالة الكيتونية (Ketosis) تطرأ لإنتاج وقود دهني عاجل للدماغ عند نقص السكر والخبز."
          },
          {
            id: "u4-l4ex2-q5",
            type: QuestionType.DROPDOWN,
            instruction: "Fill: Congestive heart failure patients must follow a strict ______.",
            instructionAr: "أكمل لأهم سبل السيطرة على سوائل الأوردة والضغط العالي:",
            sentenceParts: ["Congestive heart failure patients must follow a ", "."],
            options: ["low-sodium diet", "high lipid intake", "fast-food regimen"],
            correctAnswer: "low-sodium diet",
            explanationAr: "تقليل الملح (low-sodium diet) يحميك من تراكم المياه بالجسم وتوسع الصمام المنهك."
          },
          {
            id: "u4-l4ex2-q6",
            type: QuestionType.DROPDOWN,
            instruction: "Fill: Consuming extra polyphenols is associated with promoting ______.",
            instructionAr: "أكمل لحصاد كسب حيوية خلايا المخ والتعمر النضر الوقور:",
            sentenceParts: ["Consuming extra polyphenols is associated with promoting ", "."],
            options: ["longevity", "ketosis", "lactose indigestion"],
            correctAnswer: "longevity",
            explanationAr: "مفاهيم طول العمر (longevity) ترتبط باعتدال استهلاك المغذيات المحاربة للضمور العضوي."
          },
          {
            id: "u4-l4ex2-q7",
            type: QuestionType.DROPDOWN,
            instruction: "Fill: Cholesterol is an essential type of ______ found in our cell membrane.",
            instructionAr: "أكمل مع تصنيف الكوليسترول النسيجي الهام للأعصاب:",
            sentenceParts: ["Cholesterol is an essential type of ", " found in our cell membrane."],
            options: ["lipid", "lactase", "lean protein"],
            correctAnswer: "lipid",
            explanationAr: "الكوليسترول عبارة عن دهن (lipid) شمعي هام للترميم الغشائي وصناعة هرمونات الجسم."
          },
          {
            id: "u4-l4ex2-q8",
            type: QuestionType.DROPDOWN,
            instruction: "Fill: Healthy lifestyle choices help prevent type 2 diabetes which is a ______.",
            instructionAr: "أكمل بمعلم لمرض ينجم عن تفريط عادات الرياضة وطعام العبوات البلاستيكية المكرر:",
            sentenceParts: ["Healthy lifestyle choices help prevent type 2 diabetes which is a ", "."],
            options: ["lifestyle disease", "longevity factor", "metabolic ketosis"],
            correctAnswer: "lifestyle disease",
            explanationAr: "أمراض العصر والسلوك المخجل للأكل المفرط تدعى جميعاً بـ (lifestyle disease)."
          },
          {
            id: "u4-l4ex2-q9",
            type: QuestionType.DROPDOWN,
            instruction: "Fill: The weight of muscles and raw bones is denoted as ______.",
            instructionAr: "الوزن الحقيقي للإطارات الخلية من نسيج الشحم المعوق بالتمرين:",
            sentenceParts: ["The weight of muscles and raw bones is denoted as ", "."],
            options: ["lean body mass", "lipid index", "kilocalorie rate"],
            correctAnswer: "lean body mass",
            explanationAr: "تسمى كتلة الجسم عدا الشحوم والدهون بـ (lean body mass) وهي المؤشر الرياضي الأبرز."
          },
          {
            id: "u4-l2ex2-q10",
            type: QuestionType.DROPDOWN,
            instruction: "Fill: Kidney filtration rates are heavily impacted by daily ______.",
            instructionAr: "التعبئة المائية التي تحمي غسيل وتصفية قوالب فلاتر الكليتين والمسالك:",
            sentenceParts: ["Kidney filtration rates are heavily impacted by daily ", "."],
            options: ["liquid intake", "sugar rush", "lifestyle disease"],
            correctAnswer: "liquid intake",
            explanationAr: "نضح وشرب المياه والقدر السائل النظيف المتكرر (liquid intake) يحمي نسيج الكلية من التصلب."
          }
        ]
      },
      {
        id: "l4-l4-ex3",
        name: "Exercise 3: Choose correct terms for metabolic functions",
        nameAr: "التمرين 3: اختر المصطلحات المناسبة للبيان الوظيفي والهدمي بالجسم",
        questions: [
          {
            id: "u4-l4ex3-q1",
            type: QuestionType.MCQ,
            instruction: "Which term denotes excess fat compounds stored under the skin as adipose cells?",
            instructionAr: "ما المصطلح الدال على تراكم المواد الشحمية كمركبات معقدة بالأنسجة؟",
            question: "Excess fat is stored as a ______.",
            options: ["lipid", "ketosis", "lactase"],
            correctAnswer: "lipid",
            explanationAr: "تخزن السعرات الزائدة في فصيلة الدهون (lipids) تحت أدمة الجلد للحماية والعزل."
          },
          {
            id: "u4-l4ex3-q2",
            type: QuestionType.MCQ,
            instruction: "Identify the category of ailment linked to habit patterns rather than infections:",
            instructionAr: "ما القسم للمرض الذي ينشأ عن دناءة العادات اليومية وغياب الركض وليس بسبب جرثومة؟",
            question: "An ailment linked to modern human behaviors is a ______.",
            options: ["lifestyle disease", "kilocalorie density", "longevity trend"],
            correctAnswer: "lifestyle disease",
            explanationAr: "المرض الناجم عن الكسل ومأكولات السعرات الفارغة يدمر الأوعية وهو (lifestyle disease)."
          },
          {
            id: "u4-l4ex3-q3",
            type: QuestionType.MCQ,
            instruction: "What sugar in animal milk is difficult to digest if lactase is absent?",
            instructionAr: "ما السكر المتولد بحليب الضرع والمسبب للانتفاخ لمرضى الحساسية اللبنية؟",
            question: "Milk digestion requires specific enzymes for ______.",
            options: ["lactose", "longevity", "insulin"],
            correctAnswer: "lactose",
            explanationAr: "سكر اللبن (lactose) يحتاج إنزيم اللاكتيز لتفتيت جزيئات الجلوكوز داخله."
          },
          {
            id: "u4-l4ex3-q4",
            type: QuestionType.MCQ,
            instruction: "What dietary regimen helps reduce water retention and lowers high blood pressure?",
            instructionAr: "ما النظام الذي يفرضه أخصائي القلب للتخلص من عبء الجلطات الوريدية وتنفخ القدَم؟",
            question: "To improve cardiovascular health, embrace a ______.",
            options: ["low-sodium diet", "lifestyle disease", "ketosis regime"],
            correctAnswer: "low-sodium diet",
            explanationAr: "حميمة الإقلال الشديد لملح الطعام (low-sodium diet) تساعد في سلامة المرشحات البولية."
          },
          {
            id: "u4-l4ex3-q5",
            type: QuestionType.MCQ,
            instruction: "What metrics are utilized to measure the kinetic energy stored in foods?",
            instructionAr: "ما المعايرة الفيزيائية المطبوعة بجدول المكونات لحساب الوقود المنطلق بالجسم؟",
            question: "Calories are scientifically represented as ______.",
            options: ["kilocalories", "lipids", "enzymes"],
            correctAnswer: "kilocalories",
            explanationAr: "وحدة القياس الحقيقية بالأوراق البحثية وتعبئة الأطعمة هي الـ (kilocalories)."
          },
          {
            id: "u4-l4ex3-q6",
            type: QuestionType.MCQ,
            instruction: "Where do metabolic processes of vitamins, sugars, and proteins finalize in our torso?",
            instructionAr: "أين تقع غرف التحكم الأيضي لتأمين طاقة الجسم وتطهيره من سموم الدواء المهلك؟",
            question: "Nutrients are mainly processed during ______.",
            options: ["liver metabolism", "lactase deficiency", "ketosis states"],
            correctAnswer: "liver metabolism",
            explanationAr: "يتلقى الكبد الأغذية لفرزها ووقاية الدورة الدموية، وهي ما يطلق عليها (liver metabolism)."
          },
          {
            id: "u4-l4ex3-q7",
            type: QuestionType.MCQ,
            instruction: "What metabolic state is triggered during fasts or very low-carbohydrate intakes?",
            instructionAr: "ما هي الآلية الحيوية البديلة التي يحثها الكبد لعمل الطاقة من الأحماض الدهنية صيفاً وشتاءً؟",
            question: "Fasting triggers a high-efficiency status termed ______.",
            options: ["ketosis", "longevity", "lifestyle disease"],
            correctAnswer: "ketosis",
            explanationAr: "توظيف الأجسام الكيتونية (ketosis) كمدد للطاقة للدماغ ينشط بحرمان الجسم من السكريات."
          },
          {
            id: "u4-l4ex3-q8",
            type: QuestionType.MCQ,
            instruction: "Which foods reduce risk of stroke and preserve artery wellness by lowering sodium levels?",
            instructionAr: "ما هي نوعية الأغذية التي تعزز ترشيح السوائل وتحفظ توازن الصوديوم للأوعية الدموية؟",
            question: "The food items that control sodium levels in the blood are ______.",
            options: ["low-sodium", "high carbohydrate", "lipid dense"],
            correctAnswer: "low-sodium",
            explanationAr: "(low-sodium) تمنع تصلب ورونق جدران الأوردة وتحمي عضلة الضخ القلبية."
          },
          {
            id: "u4-l4ex3-q9",
            type: QuestionType.MCQ,
            instruction: "What type of nutrient is recommended to repair tissues without adding excess body fat?",
            instructionAr: "ما هو المحتوى الغذائي المطلوب لترميم العضل في الرياضة دون تشحيم الكبد؟",
            question: "To rebuild tissues efficiently with zero excess fat, use ______.",
            options: ["lean protein", "saturated lipid", "lactose sugar"],
            correctAnswer: "lean protein",
            explanationAr: "البروتين الخالص كالصدر والسمك (lean protein) يساعد البناء اللحمي الصافي للغدد."
          },
          {
            id: "u4-l4ex3-q10",
            type: QuestionType.MCQ,
            instruction: "What term describes the target of preventive medicine in extending a pain-free life?",
            instructionAr: "ما هي غاية ومبتغى الطب المعاصر في تحصين المتقدمين في السن لعيش عافيتهم كاملة؟",
            question: "Extending robust, functional years in old age is termed ______.",
            options: ["longevity", "lifestyle disease", "lactose tolerance"],
            correctAnswer: "longevity",
            explanationAr: "يربط الأطباء بين الغذاء الصالح والوقاية والظفر بـ (longevity) التي تضمن كفاءة الشيخوخة النضرة."
          }
        ]
      },
      {
        id: "l4-l4-ex4",
        name: "Exercise 4: Context and utilization of physiological terms",
        nameAr: "التمرين 4: صياغة الجمل المحكمة لتوظيف المصطلحات الفسيولوجية",
        questions: [
          {
            id: "u4-l4ex4-q1",
            type: QuestionType.MCQ,
            instruction: "Choose correct usage of 'Lipid' in scientific research:",
            instructionAr: "اختر الجملة البحثية الرصينة التي توظف (Lipid) لبيان أثره بالخلايا:",
            question: "Select proper lipid science statement:",
            options: [
              "Lipid bilayer structures form the basic protective boundary of animal cells.",
              "Lipid is a crystalline carbohydrate dissolved during respiration.",
              "Lipid is a stomach enzyme that speeds up the conversion of calcium.",
              "Lipid deficiency is the main driver of lactose intolerance symptoms."
            ],
            correctAnswer: "Lipid bilayer structures form the basic protective boundary of animal cells.",
            explanationAr: "الطبقة الدهنية الثنائية (lipid bilayer) هي الهيكل الدعامي المصافي لجدار كافة الخلايا الحية."
          },
          {
            id: "u4-l4ex4-q2",
            type: QuestionType.MCQ,
            instruction: "Choose correct usage of 'Lean protein' in bodybuilders education:",
            instructionAr: "اختر الوصف الحكيم لبروتين اللياقة النقي (lean protein) لبيان أثره:",
            question: "Select proper application of 'Lean protein':",
            options: [
              "Embracing lean protein like cod fish speeds up muscle recovery without packing extra fat.",
              "Lean protein should be heavily limited for diabetic individuals.",
              "Lean protein is a type of dense triglyceride found in margarine.",
              "Lean protein causes lactose intolerance."
            ],
            correctAnswer: "Embracing lean protein like cod fish speeds up muscle recovery without packing extra fat.",
            explanationAr: "البروتينات منزوعة الشحوم (lean protein) تدعم الخلايا العصبية لإعادة التشييد النسيجي."
          },
          {
            id: "u4-l4ex4-q3",
            type: QuestionType.MCQ,
            instruction: "Choose correct explanation statement about 'Lactase' enzyme:",
            instructionAr: "اختر الجملة التوضيحية الدالة على أهمية اللاكتيز لحساسية الألبان السطحية:",
            question: "Select proper fact about the enzyme Lactase:",
            options: [
              "Lactase splits lactose sugar into simpler forms to alleviate bloat.",
              "Lactase is a high-density lipoprotein causing liver ailments.",
              "Lactase is a lifestyle disease found in old age.",
              "Lactase deficiency causes low-sodium blood pressure."
            ],
            correctAnswer: "Lactase splits lactose sugar into simpler forms to alleviate bloat.",
            explanationAr: "اللاكتيز (Lactase) هو الإنزيم المقسم للاكتوز لتفادي التمدد والآلام بالأمعاء."
          },
          {
            id: "u4-l4ex4-q4",
            type: QuestionType.MCQ,
            instruction: "Choose sound clinical advice regarding 'Low-sodium diet':",
            instructionAr: "اختر التوصية الطبية السديدة لتقنين ملح الطعام لتفادي جلطات العروق:",
            question: "Select proper cardiology advice context:",
            options: [
              "Following a low-sodium diet is fundamental to decrease vascular pressure and kidney stress.",
              "Hypertensive individuals are prohibited from obeying low-sodium diet boundaries.",
              "Low-sodium diet means consuming extra processed pickles and cheese.",
              "Low-sodium diet induces severe lactose deficiency."
            ],
            correctAnswer: "Following a low-sodium diet is fundamental to decrease vascular pressure and kidney stress.",
            explanationAr: "خفض الصوديوم (low-sodium diet) ينعش عضلة الفتح القلبية ويريح الكوريتين لترشيح سليم."
          },
          {
            id: "u4-l4ex4-q5",
            type: QuestionType.MCQ,
            instruction: "Choose the proper statement explaining a 'Lifestyle disease':",
            instructionAr: "ما هي الجملة التي تبين ماهية وأصل داء العصر السلوكي (lifestyle disease):",
            question: "Select proper definition statement of 'Lifestyle disease':",
            options: [
              "Lifestyle disease outcomes like diabetes type 2 are triggered by inactivity and caloric excess.",
              "Lifestyle disease is an infectious fever passed by droplets.",
              "Lifestyle disease acts as a catalyst to increase healthy longevity.",
              "Lifestyle disease is resolved by drinking high lipid drinks daily."
            ],
            correctAnswer: "Lifestyle disease outcomes like diabetes type 2 are triggered by inactivity and caloric excess.",
            explanationAr: "أمراض المظهر والعصر (lifestyle disease) تنشأ من فائض سكر العلب وغياب الرياضة اليومية."
          }
        ]
      }
    ]
  }
];
