/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Lesson, QuestionType } from "./types";

export const lessonsData: Lesson[] = [
  {
    id: "unit2-lesson1",
    title: "Lesson 1: Grammar - The Causative Have / Get",
    titleAr: "الدرس 1: القواعد - السببية (The Causative Have / Get)",
    description: "Learn how to use causative verbs (have and get) in active and passive patterns.",
    descriptionAr: "تعلم كيفية التعبير عن التكليف أو توكيل المهام لشخص آخر باستخدام صيغ السببية.",
    exercises: [
      {
        id: "l2-l1-ex1",
        name: "Exercise 1: Complete the sentences using have or get",
        nameAr: "التمرين 1: أكمل الجمل باستخدام الصيغة المناسبة لـ Have أو Get",
        questions: [
          {
            id: "u2-l1ex1-q1",
            type: QuestionType.BINARY,
            instruction: "Complete: 'The nutritionist had _____ the diet plan reviewed.'",
            instructionAr: "أكمل الجملة بالخيار القواعدي الصحيح لصيغة السببية:",
            sentenceBefore: "The nutritionist had",
            sentenceAfter: "the diet plan reviewed.",
            options: ["to have", "to get"],
            correctAnswer: "to have",
            explanationAr: "نقول 'had to have' لبيان الإلزام بالتكليف في الماضي: كان على أخصائي التغذية أن يُعين من يُراجع الخطة."
          },
          {
            id: "u2-l1ex1-q2",
            type: QuestionType.BINARY,
            instruction: "Complete: 'Patients should have _____ their cholesterol checked.'",
            instructionAr: "أكمل الجملة بالخيار القواعدي الصحيح:",
            sentenceBefore: "Patients should have",
            sentenceAfter: "their cholesterol checked.",
            options: ["had", "get"],
            correctAnswer: "had",
            explanationAr: "الصيغة التامة مع الفعل الناقص: 'should have had' أي كان ينبغي أن يُفحص لديهم الكوليسترول."
          },
          {
            id: "u2-l1ex1-q3",
            type: QuestionType.BINARY,
            instruction: "Complete: 'She had _____ her blood pressure measured yesterday.'",
            instructionAr: "أكمل الجملة بالخيار القواعدي الصحيح للفترة الزمنية المنتهية البارحة:",
            sentenceBefore: "She had",
            sentenceAfter: "her blood pressure measured yesterday.",
            options: ["to get", "getting"],
            correctAnswer: "to get",
            explanationAr: "مصحوبة بـ 'had': 'had to get' تعني اضطرت أو توجب عليها فحص ضغط الدم."
          },
          {
            id: "u2-l1ex1-q4",
            type: QuestionType.BINARY,
            instruction: "Complete: 'The clinic had _____ the reports printed.'",
            instructionAr: "أكمل الجملة:",
            sentenceBefore: "The clinic had",
            sentenceAfter: "the reports printed.",
            options: ["to get", "gotten"],
            correctAnswer: "to get",
            explanationAr: "الاستعمال النموذجي هو 'had to get/have' للتعبير عن الاضطرار للطباعة السببية."
          },
          {
            id: "u2-l1ex1-q5",
            type: QuestionType.BINARY,
            instruction: "Complete: 'He had _____ his meals prepared professionally.'",
            instructionAr: "أكمل الجملة:",
            sentenceBefore: "He had",
            sentenceAfter: "his meals prepared professionally.",
            options: ["to have", "having"],
            correctAnswer: "to have",
            explanationAr: "نستخدم 'had to have' للإشارة إلى وجوب جعل وجباته تُعد بواسطة طهاة مهنيين."
          },
          {
            id: "u2-l1ex1-q6",
            type: QuestionType.BINARY,
            instruction: "Complete: 'We had _____ the food samples analyzed.'",
            instructionAr: "أكمل الجملة بتركيبة صحيحة للتعبير عن توكيل المهمة:",
            sentenceBefore: "We had",
            sentenceAfter: "the food samples analyzed.",
            options: ["to get", "get"],
            correctAnswer: "to get",
            explanationAr: "النمط الصحيح: 'We had to get' تعني كان لزامًا علينا إرسال العينات للتحليل المخبري."
          },
          {
            id: "u2-l1ex1-q7",
            type: QuestionType.BINARY,
            instruction: "Complete: 'The doctor had _____ the test results explained.'",
            instructionAr: "أكمل للتعبير عن توكيل شرح النتائج:",
            sentenceBefore: "The doctor had",
            sentenceAfter: "the test results explained.",
            options: ["to have", "have"],
            correctAnswer: "to have",
            explanationAr: "نقول 'had to have' لبيان ضرورة قيام الطبيب بتكليف الفريق بتفسير النتائج."
          },
          {
            id: "u2-l1ex1-q8",
            type: QuestionType.BINARY,
            instruction: "Complete: 'They had _____ their weight recorded weekly.'",
            instructionAr: "أكمل الجملة بالتعبير الملائم لقواعد التكليف والالتزام:",
            sentenceBefore: "They had",
            sentenceAfter: "their weight recorded weekly.",
            options: ["to get", "gets"],
            correctAnswer: "to get",
            explanationAr: "العبارة 'had to get' تجعل الجملة تفيد وجوب أخذ قياساتهم بانتظام."
          },
          {
            id: "u2-l1ex1-q9",
            type: QuestionType.BINARY,
            instruction: "Complete: 'The hospital had _____ the equipment sterilized.'",
            instructionAr: "أكمل الجملة السليمة في التعقيم الإلزامي:",
            sentenceBefore: "The hospital had",
            sentenceAfter: "the equipment sterilized.",
            options: ["to have", "has"],
            correctAnswer: "to have",
            explanationAr: "استخدام 'had to have' يؤكد الالتزام المهني للمستشفى بتعقيم الأجهزة الطبيّة."
          },
          {
            id: "u2-l1ex1-q10",
            type: QuestionType.BINARY,
            instruction: "Complete: 'She had _____ her vitamin levels tested.'",
            instructionAr: "أكمل لقياس مستويات الفيتامينات:",
            sentenceBefore: "She had",
            sentenceAfter: "her vitamin levels tested.",
            options: ["to get", "got"],
            correctAnswer: "to get",
            explanationAr: "تكتمل بـ 'to get' لإكمال الهيكل المصدري للسببية لعمل فحص معملي."
          }
        ]
      },
      {
        id: "l2-l1-ex2",
        name: "Exercise 2: Rewrite the sentences using the causative form",
        nameAr: "التمرين 2: تحويل الجمل النشطة إلى صيغة السببية (Causative Form)",
        questions: [
          {
            id: "u2-l1ex2-q1",
            type: QuestionType.MCQ,
            instruction: "Rewrite: 'The lab analyzed the blood samples.'",
            instructionAr: "أعد كتابة العبارة لتفيد أن الطبيب وظف المعمل للقيام بالفحص:",
            question: "The lab analyzed the blood samples.",
            options: [
              "The doctor had the blood samples analyzed.",
              "The doctor analyzed the blood samples.",
              "The blood samples had analyzed the doctor.",
              "The doctor had to analyze the blood samples by the lab."
            ],
            correctAnswer: "The doctor had the blood samples analyzed.",
            explanationAr: "الصيغة السببية السليمة: 'had + object (samples) + past participle (analyzed)'."
          },
          {
            id: "u2-l1ex2-q2",
            type: QuestionType.MCQ,
            instruction: "Rewrite: 'The chef prepared the meals.'",
            instructionAr: "أعد كتابة الجملة لتصبح سببية (حصل على الوجبات مُعدَّة):",
            question: "The chef prepared the meals.",
            options: [
              "He got the meals prepared by the chef.",
              "The meals got prepare by the chef.",
              "The chef had got the meals prepared.",
              "He prepared the meals by the chef."
            ],
            correctAnswer: "He got the meals prepared by the chef.",
            explanationAr: "نحتاج أداة السببية 'get' في الماضي 'got' + المفعول 'the meals' + التصريف الثالث 'prepared'."
          },
          {
            id: "u2-l1ex2-q3",
            type: QuestionType.MCQ,
            instruction: "Rewrite: 'The technician measured body fat.'",
            instructionAr: "حول الجملة لبيان أن المريضة كلفت الفني بقياس نسبة الدهون:",
            question: "The technician measured body fat.",
            options: [
              "She had her body fat measured.",
              "She has measured her body fat.",
              "Her body fat measured the technician.",
              "The technician had measured her body fat."
            ],
            correctAnswer: "She had her body fat measured.",
            explanationAr: "الهيكل: الفاعل 'She' + الفعل 'had' + الشيء المستهدف 'her body fat' + التصريف الثالث 'measured'."
          },
          {
            id: "u2-l1ex2-q4",
            type: QuestionType.MCQ,
            instruction: "Rewrite: 'The clinic checked blood sugar levels.'",
            instructionAr: "أعد صياغتها لتفيد أن المرضى فحصوا سكرهم عبر العيادة:",
            question: "The clinic checked blood sugar levels.",
            options: [
              "Patients had their blood sugar levels checked.",
              "The clinic checked patients have sugar levels.",
              "Patients checked blood sugar levels for the clinic.",
              "Patients had checked their sugar clinic."
            ],
            correctAnswer: "Patients had their blood sugar levels checked.",
            explanationAr: "الاستعمال 'had their blood sugar levels checked' يعبر عن الإنابة للفحص الإكلينيكي."
          },
          {
            id: "u2-l1ex2-q5",
            type: QuestionType.MCQ,
            instruction: "Rewrite: 'The printer printed the nutrition charts.'",
            instructionAr: "حول الجملة لتوضح أن الأخصائي استلم الرسوم جاهزة ومطبوعة من المطبعة:",
            question: "The printer printed the nutrition charts.",
            options: [
              "The dietitian got the nutrition charts printed.",
              "The dietitian printed the nutrition charts.",
              "The nutrition charts got printed by the dietitian.",
              "The printer had the dietitian print the charts."
            ],
            correctAnswer: "The dietitian got the nutrition charts printed.",
            explanationAr: "الصياغة 'got the charts printed' تعبر عن تفويض مطبعة لعملية السحب."
          },
          {
            id: "u2-l1ex2-q6",
            type: QuestionType.MCQ,
            instruction: "Rewrite: 'The nurse recorded the patient's weight.'",
            instructionAr: "أعد كتابتها بصيغة السببية:",
            question: "The nurse recorded the patient's weight.",
            options: [
              "The patient had his weight recorded.",
              "The patient recorded his weight by the nurse.",
              "The weight had recorded the patient.",
              "The nurse had the weight of the patient recorded."
            ],
            correctAnswer: "The patient had his weight recorded.",
            explanationAr: "الصيغة الأمثل: 'had' + المفعول 'his weight' + المفعول به الثاني في التصريف الثالث 'recorded'."
          },
          {
            id: "u2-l1ex2-q7",
            type: QuestionType.MCQ,
            instruction: "Rewrite: 'The company fortified the food.'",
            instructionAr: "حول الجملة لتفيد أن المستهلك يحصل على طعام معزز ومحسّن تكنولوجياً:",
            question: "The company fortified the food.",
            options: [
              "We got the food fortified.",
              "We fortified the food by the company.",
              "The food got fortify by the company.",
              "We get to fortify the food."
            ],
            correctAnswer: "We got the food fortified.",
            explanationAr: "تتوفر السببية بـ 'got' + 'the food' + التصريف الثالث 'fortified'."
          },
          {
            id: "u2-l1ex2-q8",
            type: QuestionType.MCQ,
            instruction: "Rewrite: 'The expert reviewed the diet plan.'",
            instructionAr: "أعد الصياغة بالشكل السببي:",
            question: "The expert reviewed the diet plan.",
            options: [
              "She had the diet plan reviewed.",
              "She reviewed the diet plan with the expert.",
              "The expert had reviewed her diet plan.",
              "The diet plan had reviewed by her."
            ],
            correctAnswer: "She had the diet plan reviewed.",
            explanationAr: "تأتي 'had' ثم الشيء الموظف تعليقاً عليه 'the diet plan' متبوعة بالتعديل لاسم المفعول 'reviewed'."
          },
          {
            id: "u2-l1ex2-q9",
            type: QuestionType.MCQ,
            instruction: "Rewrite: 'The staff cleaned the kitchen.'",
            instructionAr: "حول لبيان أن المدير نال مطبخاً نظيفاً عبر تشكيل فريق العمل:",
            question: "The staff cleaned the kitchen.",
            options: [
              "The manager had the kitchen cleaned.",
              "The manager cleaned the kitchen with staff.",
              "The staff had the kitchen cleaned by the manager.",
              "The kitchen got to clean by staff."
            ],
            correctAnswer: "The manager had the kitchen cleaned.",
            explanationAr: "الفعل 'had' مع المفعول والنعوت المكملة 'cleaned' تعبر عن تسيير النظافة سببيّاً."
          },
          {
            id: "u2-l1ex2-q10",
            type: QuestionType.MCQ,
            instruction: "Rewrite: 'The lab tested the supplements.'",
            instructionAr: "حول الجملة:",
            question: "The lab tested the supplements.",
            options: [
              "The dietitian got the supplements tested.",
              "The dietitian tested the supplements at the lab.",
              "The supplements got test at the lab.",
              "The lab had the supplements tested by the dietitian."
            ],
            correctAnswer: "The dietitian got the supplements tested.",
            explanationAr: "الهيكل المعتمد والمثالي هو: 'got the supplements tested'."
          }
        ]
      },
      {
        id: "l2-l1-ex3",
        name: "Exercise 3: Choose the correct answer",
        nameAr: "التمرين 3: ميز الأداة السببية السليمة مقارنة بصيغ التشتيت (Choose Option)",
        questions: [
          {
            id: "u2-l1ex3-q1",
            type: QuestionType.BINARY,
            instruction: "Choose correct form: 'She had her diet reviewed yesterday.'",
            instructionAr: "اختر أداة السببية المناسبة للسياق التمليكي:",
            sentenceBefore: "She",
            sentenceAfter: "her diet reviewed yesterday.",
            options: ["had", "did"],
            correctAnswer: "had",
            explanationAr: "'had' هي الفعل المساعد الملائم للسببية لبناء الجمل المستعينة بخدمات المهنيين."
          },
          {
            id: "u2-l1ex3-q2",
            type: QuestionType.BINARY,
            instruction: "Choose correct form: 'The patient got his blood tested.'",
            instructionAr: "اختر الشكل الصحيح للتجريب المعملي:",
            sentenceBefore: "The patient",
            sentenceAfter: "his blood tested.",
            options: ["got", "was"],
            correctAnswer: "got",
            explanationAr: "'got' تعبر عن الحركة والسببية، بينما 'was' ستحول الجملة إلى مجهول اعتيادي لا تدبر شخصي فيه."
          },
          {
            id: "u2-l1ex3-q3",
            type: QuestionType.BINARY,
            instruction: "Choose correct form: 'We had the food labels checked.'",
            instructionAr: "اختر الفعل السببي الصحيح للتحليل التغذوي:",
            sentenceBefore: "We",
            sentenceAfter: "the food labels checked.",
            options: ["had", "made"],
            correctAnswer: "had",
            explanationAr: "الفعل 'had' يستعمل للاستعانة بمدقق الملصقات بخلاف 'made' التي تفيد الإكراه والتحفيز الجبري."
          },
          {
            id: "u2-l1ex3-q4",
            type: QuestionType.BINARY,
            instruction: "Choose correct form: 'He got his meals delivered daily.'",
            instructionAr: "اختر اللفظ القواعدي المناسب لخدمة التوصيل:",
            sentenceBefore: "He",
            sentenceAfter: "his meals delivered daily.",
            options: ["got", "did"],
            correctAnswer: "got",
            explanationAr: "'got' هنا تعبر بشكل سليم وصحيح عن خدمات مأجورة دورية."
          },
          {
            id: "u2-l1ex3-q5",
            type: QuestionType.BINARY,
            instruction: "Choose correct form: 'The clinic had the equipment repaired.'",
            instructionAr: "اختر الصيغة السليمة لصيانة الأجهزة الطبيّة والغذائية:",
            sentenceBefore: "The clinic",
            sentenceAfter: "the equipment repaired.",
            options: ["had", "was"],
            correctAnswer: "had",
            explanationAr: "استعمل 'had' لإظهار التكليف المهني والإصلاح الخارجي."
          },
          {
            id: "u2-l1ex3-q6",
            type: QuestionType.BINARY,
            instruction: "Choose correct form: 'They got the reports submitted.'",
            instructionAr: "اختر الصيغة السببية السليمة للمستندات العلمية:",
            sentenceBefore: "They",
            sentenceAfter: "the reports submitted.",
            options: ["got", "did"],
            correctAnswer: "got",
            explanationAr: "تضفي 'got' معنى النجاح في تسليم التقارير عبر فريق العمل الموكل."
          },
          {
            id: "u2-l1ex3-q7",
            type: QuestionType.BINARY,
            instruction: "Choose correct form: 'She had her BMI calculated.'",
            instructionAr: "اختر اللفظ المناسب لحساب مؤشر كتلة الجسم:",
            sentenceBefore: "She",
            sentenceAfter: "her BMI calculated.",
            options: ["had", "made"],
            correctAnswer: "had",
            explanationAr: "تتوظف 'had' لتوكيل طبيب الصحة لحساب البنية الجسدية."
          },
          {
            id: "u2-l1ex3-q8",
            type: QuestionType.BINARY,
            instruction: "Choose correct form: 'The nutritionist got the menu changed.'",
            instructionAr: "اختر اللفظ لعملية تحديث قائمة الأغذية:",
            sentenceBefore: "The nutritionist",
            sentenceAfter: "the menu changed.",
            options: ["got", "was"],
            correctAnswer: "got",
            explanationAr: "'got' تجسد القدرة على ترتيب التعديلات في نظام الطهي بالتعاون مع المطبخ."
          },
          {
            id: "u2-l1ex3-q9",
            type: QuestionType.BINARY,
            instruction: "Choose correct form: 'The hospital had the kitchen inspected.'",
            instructionAr: "اختر اللفظ الملائم للتفتيش الصحي والرقابة:",
            sentenceBefore: "The hospital",
            sentenceAfter: "the kitchen inspected.",
            options: ["had", "did"],
            correctAnswer: "had",
            explanationAr: "'had' هي الخيار الصحيح للسببية مع صيغة اسم المفعول المنتظمة 'inspected'."
          },
          {
            id: "u2-l1ex3-q10",
            type: QuestionType.BINARY,
            instruction: "Choose correct form: 'He got his allergy diagnosed.'",
            instructionAr: "اختر لتشخيص وعلاج الحساسية التغذوية:",
            sentenceBefore: "He",
            sentenceAfter: "his allergy diagnosed.",
            options: ["got", "was"],
            correctAnswer: "got",
            explanationAr: "يقال 'got his allergy diagnosed' أي نال تشخيصاً لحساسيته من مستشار المستشفى."
          }
        ]
      },
      {
        id: "l2-l1-ex4",
        name: "Exercise 4: Make sentences using the causative form",
        nameAr: "التمرين 4: تركيب جمل التكليف والسببية (Drag and Drop / Tap Words to Build)",
        questions: [
          {
            id: "u2-l1ex4-q1",
            type: QuestionType.WORD_ORDER,
            instruction: "Assemble: 'She had her blood pressure measured.'",
            instructionAr: "ركب جملة: قامت بقياس ضغط الدم لديها بمساعدة الممرضة.",
            idiomOrTerm: "blood pressure / measure",
            correctSentence: "She had her blood pressure measured.",
            scrambledWords: ["pressure", "had", "measured.", "her", "blood", "She"],
            explanationAr: "تترتب الجملة: 'She had her blood pressure measured.'"
          },
          {
            id: "u2-l1ex4-q2",
            type: QuestionType.WORD_ORDER,
            instruction: "Assemble: 'He got his diet plan designed.'",
            instructionAr: "ركب جملة: حصل على خطة الغذاء مصممة وصحية.",
            idiomOrTerm: "diet plan / design",
            correctSentence: "He got his diet plan designed.",
            scrambledWords: ["got", "designed.", "diet", "plan", "his", "He"],
            explanationAr: "التركيب الأفضل: 'He got his diet plan designed.'"
          },
          {
            id: "u2-l1ex4-q3",
            type: QuestionType.WORD_ORDER,
            instruction: "Assemble: 'The patient had her vitamin levels tested.'",
            instructionAr: "ركب جملة: أجرت المريضة الفحوصات الطبية لمستويات الفيتامين.",
            idiomOrTerm: "vitamin levels / test",
            correctSentence: "The patient had her vitamin levels tested.",
            scrambledWords: ["patient", "tested.", "levels", "vitamin", "had", "her", "The"],
            explanationAr: "تترتب لتصبح: 'The patient had her vitamin levels tested.'"
          },
          {
            id: "u2-l1ex4-q4",
            type: QuestionType.WORD_ORDER,
            instruction: "Assemble: 'They got their healthy meals prepared.'",
            instructionAr: "ركب جملة: قاموا بإعداد وجباتهم الصحية بواسطة طاهٍ متمرس.",
            idiomOrTerm: "meals / prepare",
            correctSentence: "They got their healthy meals prepared.",
            scrambledWords: ["healthy", "prepared.", "their", "got", "meals", "They"],
            explanationAr: "تترتب: 'They got their healthy meals prepared.'"
          },
          {
            id: "u2-l1ex4-q5",
            type: QuestionType.WORD_ORDER,
            instruction: "Assemble: 'We should have our cholesterol checked.'",
            instructionAr: "ركب جملة: ينبغي علينا فحص مستويات الكوليسترول دورياً.",
            idiomOrTerm: "cholesterol / check",
            correctSentence: "We should have our cholesterol checked.",
            scrambledWords: ["cholesterol", "should", "our", "checked.", "We", "have"],
            explanationAr: "التركيب الصحيح: 'We should have our cholesterol checked.'"
          },
          {
            id: "u2-l1ex4-q6",
            type: QuestionType.WORD_ORDER,
            instruction: "Assemble: 'The clinic had the kitchen sanitized.'",
            instructionAr: "ركب جملة تعقيم المطبخ الطبي بمساعدة خدمات الرش والتعقيم:",
            idiomOrTerm: "kitchen / sanitize",
            correctSentence: "The clinic had the kitchen sanitized.",
            scrambledWords: ["had", "clinic", "sanitized.", "kitchen", "the", "The"],
            explanationAr: "تنتظم بـ: 'The clinic had the kitchen sanitized.'"
          },
          {
            id: "u2-l1ex4-q7",
            type: QuestionType.WORD_ORDER,
            instruction: "Assemble: 'The nutritionist got the menu revised.'",
            instructionAr: "ركب جملة: مراجعة وتعديل جدول الوجبات من خلال مراجعين خارجيين.",
            idiomOrTerm: "menu / revise",
            correctSentence: "The nutritionist got the menu revised.",
            scrambledWords: ["nutritionist", "revised.", "menu", "the", "got", "The"],
            explanationAr: "التركيب: 'The nutritionist got the menu revised.'"
          },
          {
            id: "u2-l1ex4-q8",
            type: QuestionType.WORD_ORDER,
            instruction: "Assemble: 'We had the herbal supplements analyzed.'",
            instructionAr: "ركب جملة: كلفنا المعمل بتحليل الأعشاب والمكملات العلاجية.",
            idiomOrTerm: "supplements / analyze",
            correctSentence: "We had the herbal supplements analyzed.",
            scrambledWords: ["supplements", "herbal", "analyzed.", "had", "the", "We"],
            explanationAr: "تتراص لتشكل: 'We had the herbal supplements analyzed.'"
          },
          {
            id: "u2-l1ex4-q9",
            type: QuestionType.WORD_ORDER,
            instruction: "Assemble: 'She got her body fat calculated.'",
            instructionAr: "ركب جملة: تفويض المستشفى لحساب وتقدير مؤشرات الكتل الدهنية:",
            idiomOrTerm: "body fat / calculate",
            correctSentence: "She got her body fat calculated.",
            scrambledWords: ["body", "calculated.", "got", "her", "fat", "She"],
            explanationAr: "الترتيب البنيوي السليم: 'She got her body fat calculated.'"
          },
          {
            id: "u2-l1ex4-q10",
            type: QuestionType.WORD_ORDER,
            instruction: "Assemble: 'The hospital had the final reports reviewed.'",
            instructionAr: "ركب جملة التدقيق الخارجي لملخصات وتقارير المستشفى:",
            idiomOrTerm: "reports / review",
            correctSentence: "The hospital had the final reports reviewed.",
            scrambledWords: ["had", "final", "reviewed.", "reports", "the", "The", "hospital"],
            explanationAr: "تنتظم بـ: 'The hospital had the final reports reviewed.'"
          }
        ]
      }
    ]
  },
  {
    id: "unit2-lesson2",
    title: "Lesson 2: Nutrition Idioms (D, E, F)",
    titleAr: "الدرس 2: مصطلحات التغذية المجازية (D, E, F)",
    description: "Master expressions and colorful idioms starting with letters D, E, and F.",
    descriptionAr: "شرح ومعرفة الاصطلاحات التعبيرية في الثقافة الإنجليزية والخاصة بالتغذية للحروف D, E, F.",
    exercises: [
      {
        id: "l2-l2-ex1",
        name: "Exercise 1: Match the idioms with their meanings",
        nameAr: "التمرين 1: صل المصطلح المجازي بالترجمة والمعنى العلمي الدقيق له",
        questions: [
          {
            id: "u2-l2ex1-q1",
            type: QuestionType.MATCHING,
            instruction: "Match the following idioms with their definitions:",
            instructionAr: "قم بجر الخيارات الصحيحة لتوصيل العمودين (Match pairs):",
            pairs: [
              { id: "p1", left: "Digest the information", right: "To process and fully understand new details" },
              { id: "p2", left: "Food for thought", right: "Something that makes you think seriously" },
              { id: "p3", left: "Fit as a fiddle", right: "In excellent physical health and condition" },
              { id: "p4", left: "Fill up on", right: "To eat until you are completely full of something" },
              { id: "p5", left: "Eat like a horse", right: "To eat a very large amount of food" },
              { id: "p6", left: "Easy as pie", right: "Very simple and easy to do" },
              { id: "p7", left: "Daily bread", right: "Livelihood or essential daily food needed to survive" },
              { id: "p8", left: "Fuel the body", right: "To provide energy and nutrition for active functions" },
              { id: "p9", left: "Drop like flies", right: "To fall ill or pass away in large numbers quickly" },
              { id: "p10", left: "Eat like a bird", right: "To eat very small portions of food" }
            ]
          }
        ]
      },
      {
        id: "l2-l2-ex2",
        name: "Exercise 2: Fill in the blanks using suitable idioms",
        nameAr: "التمرين 2: املأ الفراغات بالاصطلاحات المناسبة للتناول والغذاء",
        questions: [
          {
            id: "u2-l2ex2-q1",
            type: QuestionType.DROPDOWN,
            instruction: "Fill the blank in the culture description sentence.",
            instructionAr: "اختر المصطلح المناسب للجملة التالية:",
            sentenceParts: ["Whole grains are the ", " of many cultures."],
            options: ["daily bread", "easy as pie", "drop like flies", "eat like a bird"],
            correctAnswer: "daily bread",
            explanationAr: "الحبوب الكاملة تمثل 'daily bread' (الغذاء الرئيسي أو الخبز اليومي المنشود) للعديد من الثقافات."
          },
          {
            id: "u2-l2ex2-q2",
            type: QuestionType.DROPDOWN,
            instruction: "Fill the blank in the athletic energy sentence.",
            instructionAr: "اختر اللفظ التعبيري السليم لطاقة البطل الرياضي:",
            sentenceParts: ["Athletes need food to ", "."],
            options: ["fuel the body", "eat like a bird", "digest the info", "easy as pie"],
            correctAnswer: "fuel the body",
            explanationAr: "يحتاج اللاعبون للغذاء لشحن البدن بالطاقة وتنشيط الحركة 'fuel the body'."
          },
          {
            id: "u2-l2ex2-q3",
            type: QuestionType.DROPDOWN,
            instruction: "Fill the blank: 'She doesn't eat much; she _____.'",
            instructionAr: "اختر التعبير الدال على قلة كميات الأكل المأخوذة:",
            sentenceParts: ["She doesn't eat much; she ", "."],
            options: ["eats like a bird", "eats like a horse", "fuels the body", "drops like flies"],
            correctAnswer: "eats like a bird",
            explanationAr: "تأكل قليلاً جداً وببطء وتوصف بأنها 'eats like a bird' (تتناول كالعصفور)."
          },
          {
            id: "u2-l2ex2-q4",
            type: QuestionType.DROPDOWN,
            instruction: "Fill the blank inside regular training report.",
            instructionAr: "اختر الوصف الدال على الصحة الجسدية العالية والنماء العضلي:",
            sentenceParts: ["Exercise made him feel ", "."],
            options: ["fit as a fiddle", "easy as pie", "daily bread", "food for thought"],
            correctAnswer: "fit as a fiddle",
            explanationAr: "الرياضة المتواصلة تمنح البدن مرونة ولياقة وصحة عالية 'fit as a fiddle'."
          },
          {
            id: "u2-l2ex2-q5",
            type: QuestionType.DROPDOWN,
            instruction: "Fill the blank inside the education feedback.",
            instructionAr: "اختر العبارة المعبرة عن المعلومات الملهمة للأفكار:",
            sentenceParts: ["Nutrition lectures give students ", "."],
            options: ["food for thought", "easy as pie", "daily bread", "dirty habit"],
            correctAnswer: "food for thought",
            explanationAr: "المحاضرات الغنية بالتغذية والتحذيرات تعطي الطلاب 'food for thought' (مادة ملهمة ومحفزة على التفكير)."
          },
          {
            id: "u2-l2ex2-q6",
            type: QuestionType.DROPDOWN,
            instruction: "Fill the blank inside the healthy eating encouragement.",
            instructionAr: "أكمل بالتعبير الدال على المنفعة العضوية المثالية:",
            sentenceParts: ["Healthy food can really ", "."],
            options: ["fuel the body", "drop like flies", "eat like a horse", "be dirty habit"],
            correctAnswer: "fuel the body",
            explanationAr: "الغذاء المتكامل والحيوي يستطيع بلا شك أن يمد الخلايا ويشحنها بالنشاط والحيوية 'fuel the body'."
          },
          {
            id: "u2-l2ex2-q7",
            type: QuestionType.DROPDOWN,
            instruction: "Fill the blank inside exam completion evaluation:",
            instructionAr: "اختر الاصطلاح الدال على فرط السهولة:",
            sentenceParts: ["The exam was ", "."],
            options: ["easy as pie", "daily bread", "food for thought", "eat like a bird"],
            correctAnswer: "easy as pie",
            explanationAr: "'easy as pie' تعبير مجازي شائع يدل على السهولة البالغة وعدم وجود أي تعقيدات."
          },
          {
            id: "u2-l2ex2-q8",
            type: QuestionType.DROPDOWN,
            instruction: "Fill the blank for high morbidity conditions:",
            instructionAr: "أكمل بلفظ التساقط المتتابع والمناعة الضعيفة:",
            sentenceParts: ["People ", " when health conditions are poor."],
            options: ["drop like flies", "fit as a fiddle", "eat like a bird", "fuel the body"],
            correctAnswer: "drop like flies",
            explanationAr: "عند انتشار الأوبئة وتدني معايير Hygiene يتساقط الأفراد مرضى بسرعة شديدة وكثيفة 'drop like flies'."
          },
          {
            id: "u2-l2ex2-q9",
            type: QuestionType.DROPDOWN,
            instruction: "Fill the blank for weight loss strategy:",
            instructionAr: "صياغة الشبع على وجبات الخضار الورقية المفيدة:",
            sentenceParts: ["Try to ", " vegetables before meals."],
            options: ["fill up on", "drop like flies", "eat like a bird", "digest"],
            correctAnswer: "fill up on",
            explanationAr: "'fill up on' تعني أن يشغل المرء حيزاً واسعاً من معدته للامتلاء بالخضار لتجنب المأكولات السكرية."
          },
          {
            id: "u2-l2ex2-q10",
            type: QuestionType.DROPDOWN,
            instruction: "Fill the blank: 'He needs time to _____.'",
            instructionAr: "اختر لتبيان استيعاب وتحليل الشروحات المعقدة الصعبة:",
            sentenceParts: ["He needs time to ", "."],
            options: ["digest the information", "fill up on", "easy as pie", "daily bread"],
            correctAnswer: "digest the information",
            explanationAr: "تحتاج العقول وقتاً لهضم واستيعاب المعرفة الجديدة وهو ما يعبر عنه بـ 'digest the information'."
          }
        ]
      },
      {
        id: "l2-l2-ex3",
        name: "Exercise 3: Choose the correct idiom",
        nameAr: "التمرين 3: حدد الخيار الدلالي المتناسق مع العبادة الطبية والنفسية",
        questions: [
          {
            id: "u2-l2ex3-q1",
            type: QuestionType.BINARY,
            instruction: "Choose: 'Nutrition advice should be (down to earth / dirty habit).'",
            instructionAr: "اختر النصيحة الملائمة للواقعية والتبسيط المتناهي لعامة الناس:",
            sentenceBefore: "Nutrition advice should be",
            sentenceAfter: "",
            options: ["down to earth", "dirty habit"],
            correctAnswer: "down to earth",
            explanationAr: "النصائح الغذائية يلزم أن تكون واقعية وبسيطة ومبنية على أسس عملية في متناول اليد 'down to earth'."
          },
          {
            id: "u2-l2ex3-q2",
            type: QuestionType.BINARY,
            instruction: "Choose: 'Junk food is a (dirty habit / daily bread).'",
            instructionAr: "صنف الوجبات السريعة الضارة بالجسم:",
            sentenceBefore: "Junk food is a",
            sentenceAfter: "",
            options: ["dirty habit", "daily bread"],
            correctAnswer: "dirty habit",
            explanationAr: "تناول المقليات السريعة والأطعة والزيوت المهدرجة يصنف كأنه عادة سيئة قذرة في حق العضوية 'dirty habit'."
          },
          {
            id: "u2-l2ex3-q3",
            type: QuestionType.BINARY,
            instruction: "Choose: 'After illness, she became (fresh as a daisy / fast food nation).'",
            instructionAr: "صف عودة الحيوية والنضارة بعد النقاهة والاستشفاء:",
            sentenceBefore: "After illness, she became",
            sentenceAfter: "",
            options: ["fresh as a daisy", "fast food nation"],
            correctAnswer: "fresh as a daisy",
            explanationAr: "الاستيقاظ والنشاط والحيوية الصحية السليمة تشبه نضارة زهرة اللؤلؤ البرية 'fresh as a daisy'."
          },
          {
            id: "u2-l2ex3-q4",
            type: QuestionType.BINARY,
            instruction: "Choose: 'Balanced meals (fuel the body / eat like a horse).'",
            instructionAr: "ما الذي تقدمه حمية متوازنة للجسم البشري وحركته؟",
            sentenceBefore: "Balanced meals",
            sentenceAfter: "",
            options: ["fuel the body", "eat like a horse"],
            correctAnswer: "fuel the body",
            explanationAr: "الوجبات الغنية بشتى العناصر تعيد إمداد وشحن الأجهزة بالوقود اللازم 'fuel the body'."
          },
          {
            id: "u2-l2ex3-q5",
            type: QuestionType.BINARY,
            instruction: "Choose: 'He promised change but had to (eat his words / eat like a bird).'",
            instructionAr: "اختر المصطلح الملائم للاعتراف بالخطأ والرجوع في القول:",
            sentenceBefore: "He promised change but had to",
            sentenceAfter: "",
            options: ["eat his words", "eat like a bird"],
            correctAnswer: "eat his words",
            explanationAr: "عندما تظهر حجة تفند الادعاءات الطبية السابقة يضطر المرء للرجوع وابتلاع رأيه 'eat his words'."
          },
          {
            id: "u2-l2ex3-q6",
            type: QuestionType.BINARY,
            instruction: "Choose: 'The athlete uses food as an (energy booster / easy as pie).'",
            instructionAr: "ما هو تصنيف الغذاء والموز والشوفان للاعب قبل المباراة؟",
            sentenceBefore: "The athlete uses food as an",
            sentenceAfter: "",
            options: ["energy booster", "easy as pie"],
            correctAnswer: "energy booster",
            explanationAr: "محفز ومقوي للطاقة العضلية الفورية لرفع معدلات الأداء والمحايدة 'energy booster'."
          },
          {
            id: "u2-l2ex3-q7",
            type: QuestionType.BINARY,
            instruction: "Choose: 'Vegetables help (fight an appetite / food for thought).'",
            instructionAr: "ما الفائدة التي تقدمها الألياف الشاغلة للمعدة تجاه الرغبة الهستيرية للطعام؟",
            sentenceBefore: "Vegetables help",
            sentenceAfter: "",
            options: ["fight an appetite", "food for thought"],
            correctAnswer: "fight an appetite",
            explanationAr: "تساعد في كبح الجموح ومكافحة شهية الطعام المفاجئة عبر الإشعار المعوي المبكر بالامتلاء."
          },
          {
            id: "u2-l2ex3-q8",
            type: QuestionType.BINARY,
            instruction: "Choose: 'Processed food gives a short (energy booster / drop like flies) effect.'",
            instructionAr: "اختر ما تقدمه المشروبات الغازية المليئة بالسكر من دفعة نشاط مؤقت يعقبه هبوط حاد:",
            sentenceBefore: "Processed food gives a short",
            sentenceAfter: "effect.",
            options: ["energy booster", "drop like flies"],
            correctAnswer: "energy booster",
            explanationAr: "تولد سكريات التصنيع السريع طاقة لحظية عالية 'energy booster' سرعان ما تتبخر."
          },
          {
            id: "u2-l2ex3-q9",
            type: QuestionType.BINARY,
            instruction: "Choose: 'Too much sugar can (do you no good / daily bread).'",
            instructionAr: "اختر المآل المتوقع لفرط استهلاك الحلويات المركزة والسكريات المعدلة:",
            sentenceBefore: "Too much sugar can",
            sentenceAfter: "",
            options: ["do you no good", "daily bread"],
            correctAnswer: "do you no good",
            explanationAr: "لا تعود بالجدوى أو المنفعة أبداً بل تتلف جدران الشرايين وتقود للتصلب والسكري 'do you no good'."
          },
          {
            id: "u2-l2ex3-q10",
            type: QuestionType.BINARY,
            instruction: "Choose: 'Healthy eating is (easy as pie / eat like a horse) to understand.'",
            instructionAr: "اختر البساطة والمفهومية السهلة لمفهوم ترشيد الغذاء:",
            sentenceBefore: "Healthy eating is",
            sentenceAfter: "to understand.",
            options: ["easy as pie", "eat like a horse"],
            correctAnswer: "easy as pie",
            explanationAr: "القواعد الغذائية بسيطة ومباشرة ومستساغة للفهم السريع كالفطيرة المستطابة 'easy as pie'."
          }
        ]
      },
      {
        id: "l2-l2-ex4",
        name: "Exercise 4: Write sentences using the following idioms",
        nameAr: "التمرين 4: صياغة الجمل بالاصطلاحات الشائعة (Drag and Drop directly to complete)",
        questions: [
          {
            id: "u2-l2ex4-q1",
            type: QuestionType.WORD_ORDER,
            instruction: "Assemble: 'Give me a minute to digest the information.'",
            instructionAr: "رتب الجملة التعبيرية: أمهلني برهة أستوعب المعارف والنصائح الطبية الطازجة.",
            idiomOrTerm: "Digest the information",
            correctSentence: "Give me a minute to digest the information.",
            scrambledWords: ["minute", "digest", "to", "information.", "the", "Give", "a", "me"],
            explanationAr: "الجملة تترتب: 'Give me a minute to digest the information.'"
          },
          {
            id: "u2-l2ex4-q2",
            type: QuestionType.WORD_ORDER,
            instruction: "Assemble: 'His lecture provided much food for thought.'",
            instructionAr: "رتب الجملة: قدمت كلمته محفزاً عميقاً للتأمل العلمي والفكري.",
            idiomOrTerm: "Food for thought",
            correctSentence: "His lecture provided much food for thought.",
            scrambledWords: ["lecture", "food", "Much", "thought.", "provided", "for", "His"],
            explanationAr: "المنطوق الصحيح هو: 'His lecture provided much food for thought.'"
          },
          {
            id: "u2-l2ex4-q3",
            type: QuestionType.WORD_ORDER,
            instruction: "Assemble: 'Healthy diet makes you fit as a fiddle.'",
            instructionAr: "رتب الجملة: الغذاء الصحي الطبيعي يعزز لياقتك ونشاطك القوي.",
            idiomOrTerm: "Fit as a fiddle",
            correctSentence: "Healthy diet makes you fit as a fiddle.",
            scrambledWords: ["diet", "as", "fiddle.", "makes", "you", "Healthy", "fit", "a"],
            explanationAr: "البناء: 'Healthy diet makes you fit as a fiddle.'"
          },
          {
            id: "u2-l2ex4-q4",
            type: QuestionType.WORD_ORDER,
            instruction: "Assemble: 'I like to fill up on water.'",
            instructionAr: "رتب الجملة: أفضّل ملء بطني بالماء لتهدئة الشعور بالجوع المتقطع.",
            idiomOrTerm: "Fill up on",
            correctSentence: "I like to fill up on water.",
            scrambledWords: ["water.", "fill", "to", "up", "I", "on", "like"],
            explanationAr: "صياغة الجملة: 'I like to fill up on water.'"
          },
          {
            id: "u2-l2ex4-q5",
            type: QuestionType.WORD_ORDER,
            instruction: "Assemble: 'Carbohydrates are essential to fuel the body.'",
            instructionAr: "رتب الجملة: الكربوهيدرات ضرورية وعلاجية لشحن وإعداد طاقة البدن.",
            idiomOrTerm: "Fuel the body",
            correctSentence: "Carbohydrates are essential to fuel the body.",
            scrambledWords: ["to", "fuel", "are", "Carbohydrates", "essential", "body.", "the"],
            explanationAr: "تنتظم بـ: 'Carbohydrates are essential to fuel the body.'"
          },
          {
            id: "u2-l2ex4-q6",
            type: QuestionType.WORD_ORDER,
            instruction: "Assemble: 'Agriculture provides their daily bread.'",
            instructionAr: "رتب الجملة: الزراعة المحلية تكفل لهم خبزهم اليومي وقوت عامهم.",
            idiomOrTerm: "Daily bread",
            correctSentence: "Agriculture provides their daily bread.",
            scrambledWords: ["Agriculture", "daily", "bread.", "provides", "their"],
            explanationAr: "الترتيب هو: 'Agriculture provides their daily bread.'"
          },
          {
            id: "u2-l2ex4-q7",
            type: QuestionType.WORD_ORDER,
            instruction: "Assemble: 'She eats like a bird during exams.'",
            instructionAr: "رتب الجملة: تتناول كميات هزيلة تعادل نقر العصفور أيام التوتر والامتحان.",
            idiomOrTerm: "Eat like a bird",
            correctSentence: "She eats like a bird during exams.",
            scrambledWords: ["bird", "like", "eats", "during", "She", "a", "exams."],
            explanationAr: "تترتب لتكوين: 'She eats like a bird during exams.'"
          },
          {
            id: "u2-l2ex4-q8",
            type: QuestionType.WORD_ORDER,
            instruction: "Assemble: 'He can eat like a horse after gym.'",
            instructionAr: "رتب الجملة: يلتهم كميات وفيرة بعد الانتهاء من التمارين العنيفة كالحصان الجائع.",
            idiomOrTerm: "Eat like a horse",
            correctSentence: "He can eat like a horse after gym.",
            scrambledWords: ["eat", "can", "horse", "like", "He", "after", "gym.", "a"],
            explanationAr: "تكتمل كـ: 'He can eat like a horse after gym.'"
          },
          {
            id: "u2-l2ex4-q9",
            type: QuestionType.WORD_ORDER,
            instruction: "Assemble: 'Preparing a green salad is easy as pie.'",
            instructionAr: "رتب الجملة: تجهيز خضراوات السلطة الورقية غاية في السهولة والبساطة البينة.",
            idiomOrTerm: "Easy as pie",
            correctSentence: "Preparing a green salad is easy as pie.",
            scrambledWords: ["is", "easy", "salad", "Preparing", "a", "green", "pie.", "as"],
            explanationAr: "تركيبها: 'Preparing a green salad is easy as pie.'"
          },
          {
            id: "u2-l2ex4-q10",
            type: QuestionType.WORD_ORDER,
            instruction: "Assemble: 'After sleeping she felt fresh as a daisy.'",
            instructionAr: "رتب الجملة: بعد نوم عميق استفاقت وبدا وجهها مفعماً بالبشاشة والتغذية والجمال.",
            idiomOrTerm: "Fresh as a daisy",
            correctSentence: "After sleeping she felt fresh as a daisy.",
            scrambledWords: ["felt", "as", "she", "sleeping", "fresh", "After", "daisy.", "a"],
            explanationAr: "تنتظم بـ: 'After sleeping she felt fresh as a daisy.'"
          }
        ]
      }
    ]
  },
  {
    id: "unit2-lesson3",
    title: "Lesson 3: Reading - Nutrition in Professional Practice",
    titleAr: "الدرس 3: القراءة والفهم - التغذية في الممارسة المهنية والمستشفى",
    description: "Read the clinical guidance rules and practice comprehension on professional dietitian operations.",
    descriptionAr: "اقرأ عن مهنة أخصائي التغذية العلاجية، أساليب النظافة والتعقيم، وحل التمارين التفاعلية التابعة للمقال.",
    passage: {
      title: "Nutrition in Professional Practice (التغذية في الممارسة السريرية والعيادات)",
      paragraphs: [
        {
          id: 1,
          text: "In healthcare, nutrition plays a preventative and therapeutic role. Registered dietitians are clinical professionals responsible for conducting a thorough nutritional status assessment of patients. They rely heavily on patient medical records, dietary histories, and biometric parameters including the body mass index (BMI). Overcoming deficiencies of essential vitamins reduces chronic diseases, speeds up wound healing, and preserves long-term organ health in clinical wards.",
          textAr: "في مجال الرعاية الصحية، تلعب التغذية دوراً وقائياً وعلاجياً هاماً. وأخصائيو التغذية المسجلون هم مهنيون سريريون مسؤولون عن إجراء تقييم شامل للحالة التغذوية للمرضى. وهم يعتمدون بشكل صريح على السجلات الطبية للمريض، والتاريخ الغذائي، والمؤشرات الحيوية بما في ذلك مؤشر كتلة الجسم (BMI). إن معالجة وتفادي نقص الفيتامينات الأساسية يقلل من الأمراض المزمنة، ويعجل بالتئام الجروح، ويحافظ على صحة الأعضاء على المدى الطويل في المستشفيات."
        },
        {
          id: 2,
          text: "Hygiene and food safety are absolute prerequisites in professional practice. Cleanliness in storage, cold preserves, and meal preparation areas prevents pathogenic infections and foodborne illness outbreak. Standard public health educational guidelines encourage communities and families to adopt proper handwashing and storage techniques. Public education is highly beneficial as it empowers patients to make informed nutritional selections and improve general well-being.",
          textAr: "تعتبر السلامة الصحية ونظافة وجودة الأغذية شروطاً أساسية مطلقة للممارسة المهنية. فالنظافة التامة في مستودعات التخزين ومكان إعداد الوجبات تقي من الإصابات والتهابات المعدية الغذائية وتمنع تفشي مسببات الغثيان والسموم. وتشجع المبادئ الصحية الموجهة للعموم على اعتماد تقنيات سليمة للغسل والتطهير والطهي والتبريد والتشوين المنزلي للغذاء مما يخدم كفاءة المعيشة وصحة المريض."
        },
        {
          id: 3,
          text: "Nutritionists must undertake continuous professional training. Scientific research rapidly advances clinical practice, updating rules regarding macronutrient metabolisms and allergen control. Standardized records facilitate tracking individual progress and managing clinical assessments efficiently. Ultimately, continuous education allows professionals to provide effective, scientifically proven guidance on weight reduction, diabetic diets, and maternal nutrition programs.",
          textAr: "من الضروري أن يخضع المتخصصون لبرامج تدريب وتدريس مهني متواصل ومستمر. فالأبحاث العلمية الموثوقة تطور وتحدث الطب العلاجي بنحو سريع وباهر، وتعيد تعريف استقلاب المغذيات الكبرى وطرق حصر الحساسية والتأثيرات المناعية. وتسهل السجلات الطبية تتبع مسار تحسن المريض وتوفر أساساً متيناً للنقاش الفعال. وفي نهاية المطاف، يكفل التعليم المستمر إرساء إرشادات مثبتة مبنية على الأدلة الساطعة لحميات السكري والسمنة وصحة الطفل."
        }
      ]
    },
    exercises: [
      {
        id: "l2-l3-ex1",
        name: "Exercise 1: Passage Comprehension - Q&A",
        nameAr: "التمرين 1: فهم واستيعاب المقال العلمي واللوائح السريرية والغذائية",
        questions: [
          {
            id: "u2-l3ex1-q1",
            type: QuestionType.MCQ,
            instruction: "Answer: 'What is the role of nutrition in healthcare?'",
            instructionAr: "ما هو دور التغذية الأساسي في الخدمات الصحية ومكافحة العلل حسب المقال؟",
            question: "What is the primary role of nutrition in healthcare based on the text?",
            options: [
              "It plays a preventative and therapeutic role in clinics.",
              "It purely serves as a secondary cosmetic enhancement.",
              "It has no scientific backing in clinical medicine.",
              "It is limited strictly to fast weight loss."
            ],
            correctAnswer: "It plays a preventative and therapeutic role in clinics.",
            explanationAr: "توطئة النص تبرز دور التغذية المزدوج: الوقائي (preventative) والعلاجي (therapeutic) لحماية الأجسام."
          },
          {
            id: "u2-l3ex1-q2",
            type: QuestionType.MCQ,
            instruction: "Answer: 'How do dietitians assess nutritional status?'",
            instructionAr: "كيف يقيم أخصائي التغذية الوضع البنيوي للمريض؟",
            question: "How do clinical dietitians assess patient nutritional status?",
            options: [
              "By using computer games and eye exams.",
              "By relying on patient medical records, dietary histories, and BMI.",
              "By asking the patient to run on the track for an hour.",
              "By analyzing the blood pressure only."
            ],
            correctAnswer: "By relying on patient medical records, dietary histories, and BMI.",
            explanationAr: "تنص الفقرة على استعانتهم بالسجلات والملفات واستقراء تاريخ الحميات ومؤشر السمنة 'BMI'."
          },
          {
            id: "u2-l3ex1-q3",
            type: QuestionType.MCQ,
            instruction: "Answer: 'Why is food safety important?'",
            instructionAr: "لماذا تعد جودة وسلامة الغذاء ضرورة أساسية فائقة؟",
            question: "Why is food safety considered an absolute prerequisite?",
            options: [
              "It lowers food prices globally.",
              "It makes the meals look colorful and expensive.",
              "It prevents pathogenic infections and foodborne illnesses.",
              "It helps in calculating the body mass index."
            ],
            correctAnswer: "It prevents pathogenic infections and foodborne illnesses.",
            explanationAr: "الهدف والغاية وراء السلامة والصحة هي الحد من الأوبئة والتسمم بالبكتيريا 'foodborne illness'."
          },
          {
            id: "u2-l3ex1-q4",
            type: QuestionType.MCQ,
            instruction: "Answer: 'What do public nutrition programs focus on?'",
            instructionAr: "على ماذا تركز برامج التثقيف التغذوي العامة؟",
            question: "What do public nutrition guidelines and education programs focus on?",
            options: [
              "Encouraging communities to adopt proper handwashing and storage techniques.",
              "Forcing communities to eat meat only.",
              "Restricting food imports from foreign countries.",
              "Replacing water intake with fruit juices."
            ],
            correctAnswer: "Encouraging communities to adopt proper handwashing and storage techniques.",
            explanationAr: "ترتكز برامج التنمية والتثقيف على تعليم غسيل اليدين وحفظ الغذاء بالشروط السلمية الواقية."
          },
          {
            id: "u2-l3ex1-q5",
            type: QuestionType.MCQ,
            instruction: "Answer: 'Why is continuous training necessary?'",
            instructionAr: "لماذا يعتبر استيفاء برامج التعليم المستمر للمتخصصين لزاماً؟",
            question: "Why must nutrition professionals receive continuous training?",
            options: [
              "Because clinical research and practice guidelines advance rapidly.",
              "To learn how to run a kitchen machine.",
              "Because patient records are deleted and need rewriting.",
              "To obtain driver licenses."
            ],
            correctAnswer: "Because clinical research and practice guidelines advance rapidly.",
            explanationAr: "لأن الأبحاث الطبية تتجدد باستمرار وتكشف عن آليات فيزيولوجية وحميات مبتكرة."
          },
          {
            id: "u2-l3ex1-q6",
            type: QuestionType.MCQ,
            instruction: "Answer: 'What biometric measurements are mentioned?'",
            instructionAr: "ما هو المقاس الحيوي المشار إليه لتقييم السمنة؟",
            question: "Which specific biometric indicator is highlighted in paragraph one?",
            options: [
              "Body Mass Index (BMI).",
              "Hearing range.",
              "Muscle density metric.",
              "Caloric burn speed indicator."
            ],
            correctAnswer: "Body Mass Index (BMI).",
            explanationAr: "مؤشر كتلة الجسم البشري 'Body mass index (BMI)' هو المقاس الطبي الدلالي المذكور."
          },
          {
            id: "u2-l3ex1-q7",
            type: QuestionType.MCQ,
            instruction: "Answer: 'Who benefits from nutrition education?'",
            instructionAr: "من الذي يستفيد من حصص التثقيف والإرشاد الغذائي؟",
            question: "According to the passage, who benefits from nutrition education?",
            options: [
              "Only the food manufacturing factories.",
              "Individual patients, families, and the general community.",
              "Only children under five years old.",
              "No one, since it is purely theoretical."
            ],
            correctAnswer: "Individual patients, families, and the general community.",
            explanationAr: "التعليم التغذوي يحقق منفعة مزدوجة تحسن نمط معيشة المريض ورخاء وتكامل المجتمع ككل."
          },
          {
            id: "u2-l3ex1-q8",
            type: QuestionType.MCQ,
            instruction: "Answer: 'What conditions reduce disease?'",
            instructionAr: "ما الشروط الطبية الهامة لتقليل حدة الأمراض المزمنة؟",
            question: "How can communities reduce chronic illness and promote healing?",
            options: [
              "By avoiding hygiene and safety standards.",
              "By overcoming basic vitamin deficiencies through healthy balanced intake.",
              "By skipping breakfast and drinking tea only.",
              "By depending strictly on medicine without diet regulation."
            ],
            correctAnswer: "By overcoming basic vitamin deficiencies through healthy balanced intake.",
            explanationAr: "شرح المقال أن التغذية الغنية المتوازنة تحول دون إصابات السكري والأمراض المزمنة بفعالية."
          },
          {
            id: "u2-l3ex1-q9",
            type: QuestionType.MCQ,
            instruction: "Answer: 'How are diet plans created?'",
            instructionAr: "كيف يصمم الأخصائيون خطط التغذية حسب الشروح؟",
            question: "Diet plans are created and updated clinically by:",
            options: [
              "Making generic plans that are the same for everyone.",
              "Conducting systematic nutritional checks and reviewing patient histories.",
              "Asking the chef to choose any random meal.",
              "Following social media influencer trends."
            ],
            correctAnswer: "Conducting systematic nutritional checks and reviewing patient histories.",
            explanationAr: "تصمم بالاستناد إلى السير المرضية التفصيلية والمعطيات المعملية الدقيقة المتطورة لكل مريض."
          },
          {
            id: "u2-l3ex1-q10",
            type: QuestionType.MCQ,
            instruction: "Answer: 'What supports effective guidance?'",
            instructionAr: "ما هو الركيزة والأساس الذي يستند عليه الإرشاد التغذوي الفعال؟",
            question: "What directly supports dietitians in providing effective, proven dietary advice?",
            options: [
              "Scientific research and continuous professional training.",
              "Personal feelings and preferences of the kitchen staff.",
              "Traditional ancient stories.",
              "Ignoring previous case evaluation archives."
            ],
            correctAnswer: "Scientific research and continuous professional training.",
            explanationAr: "الأبحاث الأكاديمية الصارمة والتعلم السريري المستدام هما القاعدة القوية للإرشاد المفلح."
          }
        ]
      },
      {
        id: "l2-l3-ex2",
        name: "Exercise 2: True or False",
        nameAr: "التمرين 2: فحص صحة العبارات التثقيفية والطبية (True or False)",
        questions: [
          {
            id: "u2-l3ex2-q1",
            type: QuestionType.BINARY,
            instruction: "Evaluate: 'Nutrition only treats disease.'",
            instructionAr: "هل التغذية تقتصر على معالجة المشاكل عقب حدوثها دون وقاية المريض؟",
            sentenceBefore: "Nutrition only treats disease.",
            sentenceAfter: "",
            options: ["True", "False"],
            correctAnswer: "False",
            explanationAr: "خطأ، التغذية لها دور وقائي هام جداً (preventative) يحمي البدن من الابتلاء بالأمراض في الأساس."
          },
          {
            id: "u2-l3ex2-q2",
            type: QuestionType.BINARY,
            instruction: "Evaluate: 'BMI is used in assessment.'",
            instructionAr: "هل يُعتمد على قياس كتلة الجسم كمدخل رئيسي في الفحص الطبي؟",
            sentenceBefore: "BMI is used in assessment.",
            sentenceAfter: "",
            options: ["True", "False"],
            correctAnswer: "True",
            explanationAr: "صحيح، مؤشر كتلة الجسم 'BMI' معيار معتمد لتقييم الوزن السريري واختبار ملامح السمنية والنحافة."
          },
          {
            id: "u2-l3ex2-q3",
            type: QuestionType.BINARY,
            instruction: "Evaluate: 'Food safety is unimportant.'",
            instructionAr: "هل يمكن إغفال سلامة الأغذية وسلاسل تجميد المشروبات؟",
            sentenceBefore: "Food safety is unimportant.",
            sentenceAfter: "",
            options: ["True", "False"],
            correctAnswer: "False",
            explanationAr: "خطأ قطعي! السلامة الحيوية 'food safety' هي دعامة جوهرية لمنع التسممات والعدوى الفيروسية المهلكة."
          },
          {
            id: "u2-l3ex2-q4",
            type: QuestionType.BINARY,
            instruction: "Evaluate: 'Education improves choices.'",
            instructionAr: "هل يعمل نشر العلم والتوعية التغذوية على ترشيد القرارات؟",
            sentenceBefore: "Education improves choices.",
            sentenceAfter: "",
            options: ["True", "False"],
            correctAnswer: "True",
            explanationAr: "صحيح، التوعية 'education' تمكن الأفراد وتدعوهم لمطالعة المكونات واقتناء الأفضل."
          },
          {
            id: "u2-l3ex2-q5",
            type: QuestionType.BINARY,
            instruction: "Evaluate: 'Professionals need training.'",
            instructionAr: "هل يحتاج علماء الأغذية المعنيين إلى دورات ترقية ودروس مستمرة؟",
            sentenceBefore: "Professionals need training.",
            sentenceAfter: "",
            options: ["True", "False"],
            correctAnswer: "True",
            explanationAr: "صحيح تماماً، لامتلاك أحدث مستجدات البحث وتوفير حلول طبية مواكبة للمقاييس العالمية."
          },
          {
            id: "u2-l3ex2-q6",
            type: QuestionType.BINARY,
            instruction: "Evaluate: 'Nutrition plans are general.'",
            instructionAr: "هل تكون خطط التغذية موحدة ومشتركة حرفياً لكل الفئات؟",
            sentenceBefore: "Nutrition plans are general.",
            sentenceAfter: "",
            options: ["True", "False"],
            correctAnswer: "False",
            explanationAr: "خطأ، خطط الغذاء تفصل وتعد بصورة فردية (individualized) متوائمة مع ملف كل مريض على حدة."
          },
          {
            id: "u2-l3ex2-q7",
            type: QuestionType.BINARY,
            instruction: "Evaluate: 'Hygiene affects food quality.'",
            instructionAr: "هل ترتبط النظافة وتطهير الأدوات بجودة وصلاحية الأكلات؟",
            sentenceBefore: "Hygiene affects food quality.",
            sentenceAfter: "",
            options: ["True", "False"],
            correctAnswer: "True",
            explanationAr: "صحيح، المعايير الصحية العالية تطيل بقاء الأغذية طيبة وتحميها من طفرات العفن المحتملة."
          },
          {
            id: "u2-l3ex2-q8",
            type: QuestionType.BINARY,
            instruction: "Evaluate: 'Research updates practice.'",
            instructionAr: "هل تحدث الأبحاث الطبية العلمية طرائق العلاج السريرية المطبقة؟",
            sentenceBefore: "Research updates practice.",
            sentenceAfter: "",
            options: ["True", "False"],
            correctAnswer: "True",
            explanationAr: "صحيح، البحوث والتحاليل تكتشف الأنماط الجيدة وتنقي القواعد الطبية السائدة من المغالطات القديمة."
          },
          {
            id: "u2-l3ex2-q9",
            type: QuestionType.BINARY,
            instruction: "Evaluate: 'Communities benefit from awareness.'",
            instructionAr: "هل تتأثر المجتمعات بإيجابية جراء ورش العمل والمحاضرات ومطويات الصحة؟",
            sentenceBefore: "Communities benefit from awareness.",
            sentenceAfter: "",
            options: ["True", "False"],
            correctAnswer: "True",
            explanationAr: "صحيح، تزداد صحة المجتمع وتنخفض ميزانيات مواجهة الأمراض الوبائية عند شيوع الوعي الوبائي."
          },
          {
            id: "u2-l3ex2-q10",
            type: QuestionType.BINARY,
            instruction: "Evaluate: 'Dietitians ignore records.'",
            instructionAr: "هل من صفات أخصائي التغذية الناجح الماهر تجاهل تدوينات وأرشيف الأطباء السابقين؟",
            sentenceBefore: "Dietitians ignore records.",
            sentenceAfter: "",
            options: ["True", "False"],
            correctAnswer: "False",
            explanationAr: "خطأ فادح ومضر! السجلات والتحاليل الطبية 'medical records' هي البوصلة لكتابة توصية معافاة."
          }
        ]
      },
      {
        id: "l2-l3-ex3",
        name: "Exercise 3: Vocabulary - Find Words Meaning",
        nameAr: "التمرين 3: معاني المفردات والاصطلاحات الطبية (Pair Matching)",
        questions: [
          {
            id: "u2-l3ex3-q1",
            type: QuestionType.MATCHING,
            instruction: "Match each word from the clinical text with its definition:",
            instructionAr: "قم بتوصيل اللفظ الصحيح بترجمته ومعناه الطبي:",
            pairs: [
              { id: "v1", left: "Prevention", right: "Actions taken to stop illnesses before they start" },
              { id: "v2", left: "Evaluation", right: "The clinical assessment or appraisal of a patient" },
              { id: "v3", left: "Cleanliness", right: "Hygiene practice to ensure purity and safety" },
              { id: "v4", left: "Control", right: "Regulation or management of health conditions" },
              { id: "v5", left: "Society", right: "The community or public sphere" },
              { id: "v6", left: "Guidance", right: "Professional advice and instruction" },
              { id: "v7", left: "Records", right: "Documented clinical files or histories" },
              { id: "v8", left: "Awareness", right: "Public knowledge or consciousness" },
              { id: "v9", left: "Training", right: "Continuous education and instruction for staff" },
              { id: "v10", left: "Research", right: "Scientific studies and investigation" }
            ]
          }
        ]
      },
      {
        id: "l2-l3-ex4",
        name: "Exercise 4: Complete the sentences",
        nameAr: "التمرين 4: إتمام البناء الجملي للمفاهيم الطبية والغذائية للعيادات",
        questions: [
          {
            id: "u2-l3ex4-q1",
            type: QuestionType.DROPDOWN,
            instruction: "Complete: 'Nutrition reduces _____.'",
            instructionAr: "اختر ما تسهم النصائح الغذائية الذكية في تقليله وتقهقره:",
            sentenceParts: ["Nutrition reduces ", "."],
            options: ["disease", "metabolism", "hygiene", "evaluation"],
            correctAnswer: "disease",
            explanationAr: "التغذية الوقائية تسهم بشكل فعال في حصر وتقليل انتشار الأمراض 'disease' والأوبئة المزمنة."
          },
          {
            id: "u2-l3ex4-q2",
            type: QuestionType.DROPDOWN,
            instruction: "Complete: 'Assessments guide _____.'",
            instructionAr: "ما الذي توجهه وتقوده المقاييس والتحليلات الطبية للكتل البدنية؟",
            sentenceParts: ["Assessments guide ", "."],
            options: ["diet plans", "fast food", "cleanliness", "awareness"],
            correctAnswer: "diet plans",
            explanationAr: "نتائج الفحوصات والقياسات ترشد الأخصائي وتساعد في تخطيط الحميات 'diet plans' بدقة بالغة."
          },
          {
            id: "u2-l3ex4-q3",
            type: QuestionType.DROPDOWN,
            instruction: "Complete: 'Food must be _____.'",
            instructionAr: "ما هي الصفة الأهم والأشمل للأطعمة لتدارك إصابة معوية ميكروبية؟",
            sentenceParts: ["Food must be ", "."],
            options: ["safe", "harmful", "expensive", "deficient"],
            correctAnswer: "safe",
            explanationAr: "السلامة التغذوية تعني بالضرورة أن يكون الغذاء آمناً وصحياً 'safe' معقماً قبل الطهي والاستهلاك."
          },
          {
            id: "u2-l3ex4-q4",
            type: QuestionType.DROPDOWN,
            instruction: "Complete: 'Programs focus on _____.'",
            instructionAr: "على ماذا تحث برامج ورعاية الشأن العام للتثقيف؟",
            sentenceParts: ["Programs focus on ", "."],
            options: ["awareness", "deficiency", "dietitians", "illness"],
            correctAnswer: "awareness",
            explanationAr: "تهدف للتوسع وزيادة وتيرة المعرفة الصحية بين ربات البيوت والأفراد وعامة المجتمع 'awareness'."
          },
          {
            id: "u2-l3ex4-q5",
            type: QuestionType.DROPDOWN,
            instruction: "Complete: 'Training keeps _____.'",
            instructionAr: "ما الذي يكفله التدريب المتواتر للممرضين وعيادات طب الأسرة؟",
            sentenceParts: ["Training keeps ", "."],
            options: ["professionals updated", "supplements old", "patients lazy", "kitchen dirty"],
            correctAnswer: "professionals updated",
            explanationAr: "يجعل الكوادر والباحثين مواكبين للعلم والحميات السريرية الجديدة 'professionals updated'."
          },
          {
            id: "u2-l3ex4-q6",
            type: QuestionType.DROPDOWN,
            instruction: "Complete: 'BMI measures _____.'",
            instructionAr: "ما الدلالة البنيوية والوزنية التي يقيسها فحص نسبة BMI؟",
            sentenceParts: ["BMI measures ", "."],
            options: ["body mass index", "vitamin intake", "blood pressure", "cleanliness"],
            correctAnswer: "body mass index",
            explanationAr: "هو اختصار شهير لمصطلح مؤشر كتلة الموازنة البدنية 'body mass index'."
          },
          {
            id: "u2-l3ex4-q7",
            type: QuestionType.DROPDOWN,
            instruction: "Complete: 'Records help _____.'",
            instructionAr: "من الذي يدعمه تدقيق سجل الحسابات والأصناف الطبية السابقة؟",
            sentenceParts: ["Records help ", "."],
            options: ["dietitians", "pathogens", "illnesses", "allergies"],
            correctAnswer: "dietitians",
            explanationAr: "تدعم وتؤيد الخاتمة لعمل مستشاري الحمية والمعالجين 'dietitians'."
          },
          {
            id: "u2-l3ex4-q8",
            type: QuestionType.DROPDOWN,
            instruction: "Complete: 'Hygiene ensures _____.'",
            instructionAr: "ما النتيجة الثمينة التي تجنيها كفاءة Hygiene وسير النظافة؟",
            sentenceParts: ["Hygiene ensures ", "."],
            options: ["food safety", "dehydration", "energy loss", "deficiency"],
            correctAnswer: "food safety",
            explanationAr: "النظام البيئي المطهر والصحي يؤمن ويضمن سلامة وامتياز الغذاء المعد 'food safety'."
          },
          {
            id: "u2-l3ex4-q9",
            type: QuestionType.DROPDOWN,
            instruction: "Complete: 'Education improves _____.'",
            instructionAr: "ما الشيء الذي تنهض التوعية والبحوث الغذائية بمستواه وترقيه؟",
            sentenceParts: ["Education improves ", "."],
            options: ["lifestyle choices", "pathogenic bacteria", "vitamin deficiency", "dehydration"],
            correctAnswer: "lifestyle choices",
            explanationAr: "التوعية تثمن وتطور الخيارات والأنماط المعيشية وقدرة انتقاء الأغذية 'lifestyle choices'."
          },
          {
            id: "u2-l3ex4-q10",
            type: QuestionType.DROPDOWN,
            instruction: "Complete: 'Research advances _____.'",
            instructionAr: "ما الشيء الذي ينال دفعات وتطويراً زاخراً بفضل تضافر الأبحاث السريرية الأكاديمية؟",
            sentenceParts: ["Research advances ", "."],
            options: ["practice", "illness", "pathogens", "boredom"],
            correctAnswer: "practice",
            explanationAr: "الأبحاث تصنع تقدماً ملموساً للممارسات الطبية والعلاجات التطبيقية بالمستشفى 'practice'."
          }
        ]
      }
    ]
  },
  {
    id: "unit2-lesson4",
    title: "Lesson 4: Nutrition Terms (D, E, F)",
    titleAr: "الدرس 4: المصطلحات الطبية المتخصصة كالغذاء والتغذية (D, E, F)",
    description: "Learn essential vocabulary including Deficiency, Enzyme, Fiber, Diabetes, and Fortification.",
    descriptionAr: "دراسة شاملة لتعاريف المصطلحات الأكاديمية الهامة للتغذية والتحاليل من الحروف D, E, F.",
    exercises: [
      {
        id: "l2-l4-ex1",
        name: "Exercise 1: Match the terms with their definitions",
        nameAr: "التمرار 1: صل المصطلحات والرموز الطبيّة بالتعاريف والخصائص السريرية له",
        questions: [
          {
            id: "u2-l4ex1-q1",
            type: QuestionType.MATCHING,
            instruction: "Match the following academic terms with their definitions:",
            instructionAr: "صل المصطلح في اليسار بالتعريف الأكاديمي المقابل في اليمين:",
            pairs: [
              { id: "t1", left: "Deficiency", right: "A lack or shortage of an essential nutrient in the body" },
              { id: "t2", left: "Enzyme", right: "A protein catalyst that accelerates digestion chemical reactions" },
              { id: "t3", left: "Fiber", right: "Indigestible plant material that supports bowel movement" },
              { id: "t4", left: "Dietitian", right: "A registered nutrition professional who manages meal plans" },
              { id: "t5", left: "Fortification", right: "The action of adding essential nutrients to food products" },
              { id: "t6", left: "Dehydration", right: "A state of extreme water loss and lack of fluid in the body" },
              { id: "t7", left: "Energy", right: "The strength and fuel required for active bodily functions" },
              { id: "t8", left: "Diabetes", right: "A chronic metabolic disease affecting blood sugar regulation" },
              { id: "t9", left: "Food safety", right: "The preservation practice to prevent foodborne illness" },
              { id: "t10", left: "Functional food", right: "A food enriched with ingredients that improve medical health" }
            ]
          }
        ]
      },
      {
        id: "l2-l4-ex2",
        name: "Exercise 2: Fill in the blanks with correct verbs",
        nameAr: "التمرين 2: املأ الفراغات بالفعل التفسيري والوصفي السليم تركيبياً",
        questions: [
          {
            id: "u2-l4ex2-q1",
            type: QuestionType.DROPDOWN,
            instruction: "Fill the blank with the enzymatic action:",
            instructionAr: "اختر الفعل الذي تقوم به الإنزيمات تجاه الهضم الكوكبي للأكل:",
            sentenceParts: ["Enzymes ", " chemical reactions in digestion."],
            options: ["catalyze", "prevent", "inject", "harm"],
            correctAnswer: "catalyze",
            explanationAr: "الإنزيمات عبارة عن بروتينات وسيطة تحفز وتسرع (catalyze) وتسهل تحليل جزيئات الغذاء."
          },
          {
            id: "u2-l4ex2-q2",
            type: QuestionType.DROPDOWN,
            instruction: "Fill the blank depicting Deficiency meaning:",
            instructionAr: "اختر الكلمة المعبرة عن النقص لخواص العناصر والحديد:",
            sentenceParts: ["Deficiency indicates a ", " of nutrients."],
            options: ["lack", "excess", "bulk", "safety"],
            correctAnswer: "lack",
            explanationAr: "'Deficiency' تعني على الصعيد الطبي شح أو نقص أو عدم كفاية (lack) في مخزون المعادن."
          },
          {
            id: "u2-l4ex2-q3",
            type: QuestionType.DROPDOWN,
            instruction: "Fill the blank with dynamic enrichment action:",
            instructionAr: "اختر أثر تدعيم الألبان بالحديد وفيتامينات النمو:",
            sentenceParts: ["Fortification ", " the nutritional value of food."],
            options: ["enhances", "reduces", "damages", "stops"],
            correctAnswer: "enhances",
            explanationAr: "التدعيم الصناعي بالفيتامينات يثمن ويعزز ويرتقي (enhances) بالفوائد المعروضة للأسر."
          },
          {
            id: "u2-l4ex2-q4",
            type: QuestionType.DROPDOWN,
            instruction: "Fill the blank regarding Energy benefit for muscles:",
            instructionAr: "ما الذي تجلبه الطاقة للجسد والنشاط والتمارين؟",
            sentenceParts: ["Energy ", " strength and capacity for physical activity."],
            options: ["provides", "reduces", "absorbs", "damages"],
            correctAnswer: "provides",
            explanationAr: "الوقود والطاقة (Energy) تمنح وتزود (provides) العضلات بالقدرة على إتمام النشاط الرياضي."
          },
          {
            id: "u2-l4ex2-q5",
            type: QuestionType.DROPDOWN,
            instruction: "Fill the blank describing Food Safety goals:",
            instructionAr: "ما الفائدة التي تحققها إدارة الرقابة وجودة التغذية؟",
            sentenceParts: ["Food safety ", " foodborne illness outbreaks."],
            options: ["prevents", "causes", "speeds up", "requires"],
            correctAnswer: "prevents",
            explanationAr: "معايير النقاء وسلامة الغذاء تمنع وتعيق (prevents) انتشار البكتيريا والتسمم والميكروب."
          },
          {
            id: "u2-l4ex2-q6",
            type: QuestionType.DROPDOWN,
            instruction: "Fill the blank describing Fiber benefits for active stomach:",
            instructionAr: "اختر ما تسويه الألياف الورقية والملفوف الهضمي مع الإمساك والقولون:",
            sentenceParts: ["Dietary fiber ", " with healthy bowel movement."],
            options: ["helps", "interferes", "stops", "damages"],
            correctAnswer: "helps",
            explanationAr: "إن استهلاك النخالة والألياف ييسر ويسهل (helps) الهضم السليم ويقي من تراكم الفضلات المعوية."
          },
          {
            id: "u2-l4ex2-q7",
            type: QuestionType.DROPDOWN,
            instruction: "Fill the blank for Dehydration cause:",
            instructionAr: "بماذا ينتج ويستقر الظمأ الشديد ونوبات الجفاف الشائعة بالصيام؟",
            sentenceParts: ["Dehydration is ", " by severe water loss."],
            options: ["caused", "healed", "prevented", "improved"],
            correctAnswer: "caused",
            explanationAr: "الجفاف 'dehydration' يصاب به البدن نتيجة (caused by) الفقد العالي للسوائل والتعرق بلا استعواض."
          },
          {
            id: "u2-l4ex2-q8",
            type: QuestionType.DROPDOWN,
            instruction: "Fill the blank depicting dietitian professional task:",
            instructionAr: "اختر الفعل الذي يصف عمل مستشاري الأغذية لملخصات الحمية:",
            sentenceParts: ["A registered dietitian ", " clinical nutrition plans."],
            options: ["manages", "ignores", "breaks", "spoils"],
            correctAnswer: "manages",
            explanationAr: "يقوم الأخصائي المرخص بصياغة ومتابعة وتوجيه وتوثيق (manages) جداول الحصص والبروتوكولات."
          },
          {
            id: "u2-l4ex2-q9",
            type: QuestionType.DROPDOWN,
            instruction: "Fill the blank for Functional Foods value:",
            instructionAr: "ما الذي تجلبه وتصنعه الأغذية الوظيفية المعززة لصحة الأمعاء والجسد؟",
            sentenceParts: ["Functional foods contain ingredients that ", " overall health."],
            options: ["improve", "harm", "destroy", "disrupt"],
            correctAnswer: "improve",
            explanationAr: "تحوي منافع وغذاءً متكاملاً يرفع ويطور ويحسن (improve) الكفاءة المناعية."
          },
          {
            id: "u2-l4ex2-q10",
            type: QuestionType.DROPDOWN,
            instruction: "Fill the blank describing Diabetes disease trait:",
            instructionAr: "صف تأثير داء السكري وتذبذبه على توازنات السكر المجرى دمويا للوالد:",
            sentenceParts: ["Diabetes ", " blood sugar regulation."],
            options: ["affects", "cures", "improves", "cleans"],
            correctAnswer: "affects",
            explanationAr: "مرض السكري يسبب خللاً تذبذبياً ويؤثر (affects) سلبياً على اتزان الأنسولين وسكر الدم."
          }
        ]
      },
      {
        id: "l2-l4-ex3",
        name: "Exercise 3: Choose the correct term",
        nameAr: "التمرين 3: تمييز الكلمات العلمية من البدائل المعقدة المشتتة (Binary Choose Group)",
        questions: [
          {
            id: "u2-l4ex3-q1",
            type: QuestionType.BINARY,
            instruction: "Choose: 'Long exercise improves (Endurance / Enzyme).'",
            instructionAr: "ما الخاصية الطبية للتحمل وطول النفَس البدني التي ترقاها الرياضة؟",
            sentenceBefore: "Long exercise improves",
            sentenceAfter: ".",
            options: ["Endurance", "Enzyme"],
            correctAnswer: "Endurance",
            explanationAr: "التأقلم مع المشي يرفع طاقات التحمل والبقاء 'Endurance' لدى الرئتين وعضلة القلب."
          },
          {
            id: "u2-l4ex3-q2",
            type: QuestionType.BINARY,
            instruction: "Choose: 'An (Enzyme / Essential nutrient) is necessary for digestion.'",
            instructionAr: "ما البروتين العضوي النشط المسؤول مباشرة عن تفكيك جزيئات المعدة لتصفيتها؟",
            sentenceBefore: "An",
            sentenceAfter: "is necessary for digestion.",
            options: ["Enzyme", "Essential nutrient"],
            correctAnswer: "Enzyme",
            explanationAr: "العامل والوسيط المحفز لتسريع كيمياء تصفية المعدة هو الإنزيم 'Enzyme' الهاضم."
          },
          {
            id: "u2-l4ex3-q3",
            type: QuestionType.BINARY,
            instruction: "Choose: 'Our (Daily intake / Deficiency) should be balanced.'",
            instructionAr: "ما اللفظ الذي يعبر عن المقدار المستهلك اليومي من مأكولات ومشروبات؟",
            sentenceBefore: "Our",
            sentenceAfter: "should be balanced.",
            options: ["Daily intake", "Deficiency"],
            correctAnswer: "Daily intake",
            explanationAr: "يجب أن تكون الحصة الغذائية والوجبات المأخوذة يومياً 'Daily intake' متزنة وكافية."
          },
          {
            id: "u2-l4ex3-q4",
            type: QuestionType.BINARY,
            instruction: "Choose: 'A (Diabetes / Dehydration) patient must watch insulin levels.'",
            instructionAr: "اختر المسمى والمصطلح المرضي للخلل الهرموني للأنسولين المفرز بنكرياسياً:",
            sentenceBefore: "A",
            sentenceAfter: "patient must watch insulin levels.",
            options: ["Diabetes", "Dehydration"],
            correctAnswer: "Diabetes",
            explanationAr: "مريض داء السكري 'Diabetes' هو من يلزمه مراقبة وفحص نسب الأنسولين وغلوكوز الدم بصورة يومية."
          },
          {
            id: "u2-l4ex3-q5",
            type: QuestionType.BINARY,
            instruction: "Choose: 'The (Fortification / Fiber) of milk with Vitamin D is common.'",
            instructionAr: "اختر العملية الصناعية المعززة بدمج الفيتامينات بالأطعمة لحماية الرضع:",
            sentenceBefore: "The",
            sentenceAfter: "of milk with Vitamin D is common.",
            options: ["Fortification", "Fiber"],
            correctAnswer: "Fortification",
            explanationAr: "إثراء ودعم وحشو الحليب بمركبات فيتامينية إضافية هو عملية تدعيم 'Fortification'."
          },
          {
            id: "u2-l4ex3-q6",
            type: QuestionType.BINARY,
            instruction: "Choose: 'Watch out for (Dehydration / Deficiency) during fasting.'",
            instructionAr: "احذر وتجنب التعارض الحاد مع جفاف الأنسجة ونقص المياه صيفاً بالصيام:",
            sentenceBefore: "Watch out for",
            sentenceAfter: "during fasting.",
            options: ["Dehydration", "Deficiency"],
            correctAnswer: "Dehydration",
            explanationAr: "أهم محذور يجب تلافيه أثناء الصيام هو الجفاف الشديد 'Dehydration' بنقص تكرير المياه."
          },
          {
            id: "u2-l4ex3-q7",
            type: QuestionType.BINARY,
            instruction: "Choose: 'Proper (Food safety / Functional food) protects consumers.'",
            instructionAr: "ما البروتوكول الضروري الذي يقي الأسر والزبائن من التسمم والعدوى بالبكتيريا؟",
            sentenceBefore: "Proper",
            sentenceAfter: "protects consumers.",
            options: ["Food safety", "Functional food"],
            correctAnswer: "Food safety",
            explanationAr: "سلامة الأغذية وتعقيم المطابخ وحفظ اللحوم تقع تحت بند 'Food safety' المانع للأمراض."
          },
          {
            id: "u2-l4ex3-q8",
            type: QuestionType.BINARY,
            instruction: "Choose: 'Adding (Fiber / Fat) to your breakfast prevents constipation.'",
            instructionAr: "ما المادة التي تحفز المعدة وتجرف الفضلات وتنعش الهضم ضد الإمساك الصلب؟",
            sentenceBefore: "Adding",
            sentenceAfter: "to your breakfast prevents constipation.",
            options: ["Fiber", "Fat"],
            correctAnswer: "Fiber",
            explanationAr: "تساعد النخالة وحبوب القمح الكامل والخضروات الغنية بالألياف 'Fiber' كثيراً في معالجة القولون المغلق الإمساكي."
          },
          {
            id: "u2-l4ex3-q9",
            type: QuestionType.BINARY,
            instruction: "Choose: 'Vitamins are an (Essential nutrient / Energy) for body functions.'",
            instructionAr: "بماذا نطلق على العناصر الصغرى التي لا غنى عنها في الإنزيمات الحركية ويصعب تصنيعها ذاتياً؟",
            sentenceBefore: "Vitamins are an",
            sentenceAfter: "for body functions.",
            options: ["Essential nutrient", "Energy"],
            correctAnswer: "Essential nutrient",
            explanationAr: "تعد الفيتامينات مركبًا ومغذيًا أساسيًا صميمًا لا بد منه 'Essential nutrient' لحفظ الحياة."
          },
          {
            id: "u2-l4ex3-q10",
            type: QuestionType.BINARY,
            instruction: "Choose: 'A severe iron (Deficiency / Dietitian) causes weakness.'",
            instructionAr: "ما الاختلال الذي يقترن بنقص وفقدان المنسوب الآمن للحديد بالجسم مسبباً الإرهاق؟",
            sentenceBefore: "A severe iron",
            sentenceAfter: "causes weakness.",
            options: ["Deficiency", "Dietitian"],
            correctAnswer: "Deficiency",
            explanationAr: "نقص عنصر الحديد الكبتي بالدماء هو فقر دم تسبب به فجوة العوز 'Deficiency' الحيوية."
          }
        ]
      },
      {
        id: "l2-l4-ex4",
        name: "Exercise 4: Use terms in sentences",
        nameAr: "التمرين 4: تركيب جمل المفردات العلمية (Scrambled Sentence Reconstruction Builders)",
        questions: [
          {
            id: "u2-l4ex4-q1",
            type: QuestionType.WORD_ORDER,
            instruction: "Assemble: 'Iron deficiency causes extreme fatigue and weakness.'",
            instructionAr: "رتب كلمات التحذير الطبي من عوارض فقر الدم الحاد وعوز الحديد للبدن:",
            idiomOrTerm: "Deficiency",
            correctSentence: "Iron deficiency causes extreme fatigue and weakness.",
            scrambledWords: ["extreme", "deficiency", "weakness.", "and", "fatigue", "causes", "Iron"],
            explanationAr: "الجملة الإرشادية تترتب: 'Iron deficiency causes extreme fatigue and weakness.'"
          },
          {
            id: "u2-l4ex4-q2",
            type: QuestionType.WORD_ORDER,
            instruction: "Assemble: 'Enzymes play a key role in digestion.'",
            instructionAr: "رتب الكلمات لتوضيح مساهمة إنزيمات الجسم الحية تجاه عمليات تذويب اللحوم:",
            idiomOrTerm: "Digestion",
            correctSentence: "Enzymes play a key role in digestion.",
            scrambledWords: ["digestion.", "key", "Enzymes", "play", "role", "in", "a"],
            explanationAr: "البناء اللغوي القويم: 'Enzymes play a key role in digestion.'"
          },
          {
            id: "u2-l4ex4-q3",
            type: QuestionType.WORD_ORDER,
            instruction: "Assemble: 'Carbohydrates provide quick energy for active muscles.'",
            instructionAr: "رتب صياغة إمداد الشوفان بالسكريات والنشويات الصافية عضلاتنا بالوقود المنشط:",
            idiomOrTerm: "Energy",
            correctSentence: "Carbohydrates provide quick energy for active muscles.",
            scrambledWords: ["provide", "energy", "quick", "muscles.", "Carbohydrates", "for", "active"],
            explanationAr: "التنظيم الصحيح: 'Carbohydrates provide quick energy for active muscles.'"
          },
          {
            id: "u2-l4ex4-q4",
            type: QuestionType.WORD_ORDER,
            instruction: "Assemble: 'Saliva contains an enzyme that breaks down starch.'",
            instructionAr: "رتب كلمات تفكيك لعاب الفم للجزيئات النشوية العقدية كيمائياً أثناء تذوق العقد:",
            idiomOrTerm: "Enzyme",
            correctSentence: "Saliva contains an enzyme that breaks down starch.",
            scrambledWords: ["an", "starch.", "breaks", "contains", "enzyme", "that", "Saliva", "down"],
            explanationAr: "الترابط العلمي المناسب: 'Saliva contains an enzyme that breaks down starch.'"
          },
          {
            id: "u2-l4ex4-q5",
            type: QuestionType.WORD_ORDER,
            instruction: "Assemble: 'Apples are a great source of soluble fiber.'",
            instructionAr: "رتب الجملة: يعتبر التفاح الممتع مصدراً كبيراً وممتازاً للألياف القابلة للذوبان بالدم:",
            idiomOrTerm: "Fiber",
            correctSentence: "Apples are a great source of soluble fiber.",
            scrambledWords: ["soluble", "fiber.", "are", "a", "Apples", "source", "of", "great"],
            explanationAr: "أثمار التفاح غنية بالألياف 'Apples are a great source of soluble fiber.'"
          },
          {
            id: "u2-l4ex4-q6",
            type: QuestionType.WORD_ORDER,
            instruction: "Assemble: 'Food fortification helps eliminate widespread nutrient deficiencies.'",
            instructionAr: "رتب ميزة تدعيم الأغذية بالمعادن للقضاء على شح الدماء بالجوع الصامت بمقاطعاتنا:",
            idiomOrTerm: "Fortification",
            correctSentence: "Food fortification helps eliminate widespread nutrient deficiencies.",
            scrambledWords: ["fortification", "nutrient", "helps", "deficiencies.", "eliminate", "widespread", "Food"],
            explanationAr: "تحل الجملة هكذا: 'Food fortification helps eliminate widespread nutrient deficiencies.'"
          },
          {
            id: "u2-l4ex4-q7",
            type: QuestionType.WORD_ORDER,
            instruction: "Assemble: 'Drinking water prevents dehydration during heavy exercise.'",
            instructionAr: "رتب الجملة القيمة: تناول المياه العذبة أثناء التدريبات المنهكة يحمي الخلايا من الجفاف:",
            idiomOrTerm: "Dehydration",
            correctSentence: "Drinking water prevents dehydration during heavy exercise.",
            scrambledWords: ["prevents", "heavy", "Drinking", "dehydration", "during", "exercise.", "water"],
            explanationAr: "إتمام التركيب: 'Drinking water prevents dehydration during heavy exercise.'"
          },
          {
            id: "u2-l4ex4-q8",
            type: QuestionType.WORD_ORDER,
            instruction: "Assemble: 'A balanced low sugar diet helps manage diabetes.'",
            instructionAr: "رتب الجملة: تسهم الحميات المهذبة قليلة المنبهات السكرية في تذليل داء السكري وتعديلات الأنسولين:",
            idiomOrTerm: "Diabetes",
            correctSentence: "A balanced low sugar diet helps manage diabetes.",
            scrambledWords: ["helps", "low", "sugar", "diet", "manage", "diabetes.", "balanced", "A"],
            explanationAr: "تنتظم بـ: 'A balanced low sugar diet helps manage diabetes.'"
          },
          {
            id: "u2-l4ex4-q9",
            type: QuestionType.WORD_ORDER,
            instruction: "Assemble: 'Strict food safety standards prevent toxic infections.'",
            instructionAr: "رتب الجملة: تطبيق اللوائح الصارمة للسلامة يعيق ويعزل النزلات والالتهابات السامة بالأمعاء:",
            idiomOrTerm: "Food safety",
            correctSentence: "Strict food safety standards prevent toxic infections.",
            scrambledWords: ["safety", "food", "standards", "prevent", "infections.", "toxic", "Strict"],
            explanationAr: "تترتب لتصبح: 'Strict food safety standards prevent toxic infections.'"
          },
          {
            id: "u2-l4ex4-q10",
            type: QuestionType.WORD_ORDER,
            instruction: "Assemble: 'Yogurt is a functional food that supports gut health.'",
            instructionAr: "رتب جملة: اللبن والزبادي المقرون بالخمائر الحيوية يدعم بقوة وظائف الأمعاء والبكتريا المفيدة:",
            idiomOrTerm: "Functional food",
            correctSentence: "Yogurt is a functional food that supports gut health.",
            scrambledWords: ["gut", "functional", "is", "a", "food", "that", "health.", "Yogurt", "supports"],
            explanationAr: "تنساق الجملة لتكون: 'Yogurt is a functional food that supports gut health.'"
          }
        ]
      }
    ]
  }
];
