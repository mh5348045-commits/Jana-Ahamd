/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Lesson, QuestionType } from "./types";

export const lessonsData: Lesson[] = [
  {
    id: "unit3-lesson1",
    title: "Lesson 1: Grammar - Constructions after Wish",
    titleAr: "الدرس 1: القواعد - صياغة التمنيات باستخدام (Wish)",
    description: "Learn how to express wishes or regrets about the present/future (using Past Simple/Would) and the past (using Past Perfect).",
    descriptionAr: "تعلم كيفية صياغة التمنيات والندم للوقت الحاضر أو المستقبل (باستخدام الماضي البسيط) والماضي (باستخدام الماضي التام).",
    exercises: [
      {
        id: "l3-l1-ex1",
        name: "Exercise 1: Complete the sentences using the correct form after wish",
        nameAr: "التمرين 1: أكمل الجمل بالصيغة الصحيحة للفعل بعد Wish",
        questions: [
          {
            id: "u3-l1ex1-q1",
            type: QuestionType.BINARY,
            instruction: "Complete: 'I wish I ____ more water daily.' (regret about present)",
            instructionAr: "أكمل الجملة لقصد التمني في الحاضر:",
            sentenceBefore: "I wish I",
            sentenceAfter: "more water daily.",
            options: ["drank", "drink"],
            correctAnswer: "drank",
            explanationAr: "للتعبير عن تمنّي شيء في الوقت الحاضر مغاير للواقع، نستخدم مع Wish زمن الماضي البسيط (drank) وليس المضارع."
          },
          {
            id: "u3-l1ex1-q2",
            type: QuestionType.BINARY,
            instruction: "Complete: 'She wishes she ____ so much sugar.' (regret about present)",
            instructionAr: "أكمل التمني بعدم تناول الكثير من السكر:",
            sentenceBefore: "She wishes she",
            sentenceAfter: "so much sugar.",
            options: ["didn't eat", "doesn't eat"],
            correctAnswer: "didn't eat",
            explanationAr: "تمني نفي حدث في المضارع يتطلب استخدام الماضي البسيط المنفي (didn't eat)."
          },
          {
            id: "u3-l1ex1-q3",
            type: QuestionType.BINARY,
            instruction: "Complete: 'They wish they ____ nutrition labels better.'",
            instructionAr: "أكمل الجملة بما يناسب التعبير عن رغبتهم في الفهم الحالي:",
            sentenceBefore: "They wish they",
            sentenceAfter: "nutrition labels better.",
            options: ["understood", "understand"],
            correctAnswer: "understood",
            explanationAr: "نستخدم الفعل بالماضي البسيط (understood) للتعبير عن الرغبة في معرفة أو فهم شيء في الحاضر."
          },
          {
            id: "u3-l1ex1-q4",
            type: QuestionType.BINARY,
            instruction: "Complete: 'He wishes he ____ regularly.'",
            instructionAr: "أكمل التمني لممارسة الرياضة بانتظام:",
            sentenceBefore: "He wishes he",
            sentenceAfter: "regularly.",
            options: ["exercised", "exercises"],
            correctAnswer: "exercised",
            explanationAr: "يتم استخدام الماضي البسيط (exercised) للتعبير عن رغبة حالية غير متحققة."
          },
          {
            id: "u3-l1ex1-q5",
            type: QuestionType.BINARY,
            instruction: "Complete: 'We wish patients ____ dietary advice.'",
            instructionAr: "أكمل للتعبير عن الرغبة في التزام المرضى بالنصائح في المستقبل أو الحاضر:",
            sentenceBefore: "We wish patients",
            sentenceAfter: "dietary advice.",
            options: ["would follow", "will follow"],
            correctAnswer: "would follow",
            explanationAr: "نستخدم (would follow) للتعبير عن رغبتنا أو تمنّينا لتغير سلوك شخص آخر في المستقبل."
          },
          {
            id: "u3-l1ex1-q6",
            type: QuestionType.BINARY,
            instruction: "Complete: 'She wishes she ____ meals earlier.'",
            instructionAr: "أكمل للتعبير عن التمني في الماضي (تمنّي لو كانت خططت مسبقًا):",
            sentenceBefore: "She wishes she",
            sentenceAfter: "meals earlier.",
            options: ["had planned", "plans"],
            correctAnswer: "had planned",
            explanationAr: "للتعبير عن ندم أو تمني شيء في الماضي خلاف ما حدث، نستخدم الماضي التام (had planned)."
          },
          {
            id: "u3-l1ex1-q7",
            type: QuestionType.BINARY,
            instruction: "Complete: 'I wish I ____ breakfast yesterday.' (regret about yesterday)",
            instructionAr: "أكمل للتعبير عن الندم لعدم تناول الإفطار أمس:",
            sentenceBefore: "I wish I",
            sentenceAfter: "breakfast yesterday.",
            options: ["hadn't skipped", "didn't skip"],
            correctAnswer: "hadn't skipped",
            explanationAr: "بما أن الحدث أمس (yesterday) أي في الماضي، يجب استخدام الماضي التام المنفي (hadn't skipped)."
          },
          {
            id: "u3-l1ex1-q8",
            type: QuestionType.BINARY,
            instruction: "Complete: 'He wishes his diet ____ healthier.' (present state)",
            instructionAr: "أكمل التمني للحالة الصحية للوجبات الحالية:",
            sentenceBefore: "He wishes his diet",
            sentenceAfter: "healthier.",
            options: ["were", "is"],
            correctAnswer: "were",
            explanationAr: "مع Wish يفضّل قواعدياً استخدام (were) بدلاً من (was) لكل الضمائر في التمني الحاضر لإظهار عدم الواقعية."
          },
          {
            id: "u3-l1ex1-q9",
            type: QuestionType.BINARY,
            instruction: "Complete: 'They wish food companies ____ salt.' (desired change)",
            instructionAr: "أكمل التمنّي لتغيير تقوم به الشركات لتقليل الملح في الأطعمة:",
            sentenceBefore: "They wish food companies",
            sentenceAfter: "salt.",
            options: ["would reduce", "reduces"],
            correctAnswer: "would reduce",
            explanationAr: "نستعمل 'would + infinitive' (would reduce) لبيان الاحتجاج على سلوك أو تمنّي تغييره مستقبلاً."
          },
          {
            id: "u3-l1ex1-q10",
            type: QuestionType.BINARY,
            instruction: "Complete: 'I wish I ____ nutrition earlier.' (past regret)",
            instructionAr: "أكمل للتعبير عن تمني لو كنت تعلمت التغذية مسبقاً:",
            sentenceBefore: "I wish I",
            sentenceAfter: "nutrition earlier.",
            options: ["had learned", "learn"],
            correctAnswer: "had learned",
            explanationAr: "كلمة 'earlier' تدل على الماضي، لذا نستخدم صيغة الماضي التام (had learned)."
          }
        ]
      },
      {
        id: "l3-l1-ex2",
        name: "Exercise 2: Rewrite the sentences using wish",
        nameAr: "التمرين 2: أعد كتابة الجمل باستخدام صيغة التمنّي (Wish)",
        questions: [
          {
            id: "u3-l1ex2-q1",
            type: QuestionType.MCQ,
            instruction: "Rewrite: 'I do not eat enough fiber.'",
            instructionAr: "أعد كتابة الجملة لتفيد التمني (بشأن نقص الألياف الحالي):",
            question: "I do not eat enough fiber.",
            options: [
              "I wish I ate enough fiber.",
              "I wish I do eat enough fiber.",
              "I wish I had eaten enough fiber yesterday.",
              "I wish I can eat enough fiber."
            ],
            correctAnswer: "I wish I ate enough fiber.",
            explanationAr: "بما أن الجملة الأصلية منفيّة في المضارع البسيط، يعبر عنها تمنياً بماضي بسيط مثبت ليدل على الرغبة الحالية."
          },
          {
            id: "u3-l1ex2-q2",
            type: QuestionType.MCQ,
            instruction: "Rewrite: 'She did not follow the diet plan.'",
            instructionAr: "أعد كتابة الجملة للتعبير عن الندم لعدم اتباع الخطة المسبقة في الماضي:",
            question: "She did not follow the diet plan.",
            options: [
              "She wishes she had followed the diet plan.",
              "She wishes she followed the diet plan now.",
              "She wishes she has followed the diet plan.",
              "She wishes she would follow the diet plan."
            ],
            correctAnswer: "She wishes she had followed the diet plan.",
            explanationAr: "الفعل الأصلي في الماضي المنفي (did not follow)، لذا نرفعه تمنّياً لدرجة الماضي التام المثبت (had followed)."
          },
          {
            id: "u3-l1ex2-q3",
            type: QuestionType.MCQ,
            instruction: "Rewrite: 'Patients ignore nutrition advice.'",
            instructionAr: "أعد كتابة الجملة للتعبير عن رغبتنا في أن يتوقف المرضى عن تجاهل النصائح:",
            question: "Patients ignore nutrition advice.",
            options: [
              "We wish patients wouldn't ignore nutrition advice.",
              "We wish patients ignored nutrition advice.",
              "We wish patients ignore nutrition advice.",
              "We wish patients had ignored nutrition advice."
            ],
            correctAnswer: "We wish patients wouldn't ignore nutrition advice.",
            explanationAr: "لطلب وقف سلوك مزعج أو تغييره حالاً/مستقبلاً، نستخدم: 'wouldn't + infinitive'."
          },
          {
            id: "u3-l1ex2-q4",
            type: QuestionType.MCQ,
            instruction: "Rewrite: 'He lacks knowledge about calories.'",
            instructionAr: "أعد كتابة الجملة:",
            question: "He lacks knowledge about calories.",
            options: [
              "He wishes he didn't lack knowledge about calories.",
              "He wishes he lacks knowledge about calories.",
              "He wishes he had lacked knowledge about calories.",
              "He wishes he will have knowledge about calories."
            ],
            correctAnswer: "He wishes he didn't lack knowledge about calories.",
            explanationAr: "في تمني المضارع، يعوض الفعل المثبت 'lacks' بـ 'didn't lack' لنفي النقص بالماضي البسيط التخيلي."
          },
          {
            id: "u3-l1ex2-q5",
            type: QuestionType.MCQ,
            instruction: "Rewrite: 'We wasted food last week.'",
            instructionAr: "أعد كتابة التعبير تعبيراً عن الندم لهدر الطعام الأسبوع الماضي:",
            question: "We wasted food last week.",
            options: [
              "We wish we hadn't wasted food last week.",
              "We wish we didn't waste food last week.",
              "We wish we wouldn't waste food last week.",
              "We wish we haven't wasted food last week."
            ],
            correctAnswer: "We wish we hadn't wasted food last week.",
            explanationAr: "حدث في الماضي 'last week'، وبالتالي الندم يستدعي صيغة الماضي التام المنفي 'hadn't wasted'."
          },
          {
            id: "u3-l1ex2-q6",
            type: QuestionType.MCQ,
            instruction: "Rewrite: 'They do not exercise daily.'",
            instructionAr: "أعد كتابة الجملة لتصبح تمني بالرياضة اليومية:",
            question: "They do not exercise daily.",
            options: [
              "They wish they exercised daily.",
              "They wish they had exercised daily yesterday.",
              "They wish they don't exercise daily.",
              "They wish they would exercise daily next month."
            ],
            correctAnswer: "They wish they exercised daily.",
            explanationAr: "المضارع المنفي 'do not exercise' يتحول إلى ماضي بسيط مثبت 'exercised' للتمني الحاضر."
          },
          {
            id: "u3-l1ex2-q7",
            type: QuestionType.MCQ,
            instruction: "Rewrite: 'The meals are unhealthy.'",
            instructionAr: "أعد تركيب الجملة باستخدام تمني كون الوجبات صحية أو ليست غير صحية:",
            question: "The meals are unhealthy.",
            options: [
              "I wish the meals were healthy / weren't unhealthy.",
              "I wish the meals are healthy.",
              "I wish the meals have been healthy.",
              "I wish the meals will be healthy."
            ],
            correctAnswer: "I wish the meals were healthy / weren't unhealthy.",
            explanationAr: "المضارع 'are' يتحول في التمني التخيلي إلى 'were' أو 'weren't'."
          },
          {
            id: "u3-l1ex2-q8",
            type: QuestionType.MCQ,
            instruction: "Rewrite: 'She forgot to drink water.'",
            instructionAr: "أعمل جملة تمني ندمية لنسيان شرب الماء:",
            question: "She forgot to drink water.",
            options: [
              "She wishes she hadn't forgotten to drink water.",
              "She wishes she didn't forget to drink water.",
              "She wishes she forgot not to drink water.",
              "She wishes she would not forget to drink water."
            ],
            correctAnswer: "She wishes she hadn't forgotten to drink water.",
            explanationAr: "بما أنها نسيت وانتهى 'forgot' بالماضي، فإن تمني عدم حدوث ذلك بالماضي يتطلب 'hadn't forgotten'."
          },
          {
            id: "u3-l1ex2-q9",
            type: QuestionType.MCQ,
            instruction: "Rewrite: 'People eat too much fast food.'",
            instructionAr: "كيف نتمنى أن الناس لا يتناولون الكثير من الوجبات السريعة؟",
            question: "People eat too much fast food.",
            options: [
              "I wish people didn't eat so much fast food.",
              "I wish people had eaten fast food.",
              "I wish people eat less fast food today.",
              "I wish people wouldn't have eaten fast food."
            ],
            correctAnswer: "I wish people didn't eat so much fast food.",
            explanationAr: "لبيان تمني تغيير الواقع الحالي حيث يتناول الناس الكثير، نستخدم 'didn't eat' في تمني الحاضر."
          },
          {
            id: "u3-l1ex2-q10",
            type: QuestionType.MCQ,
            instruction: "Rewrite: 'The program is ineffective.'",
            instructionAr: "أعد كتابة وتمني أن البرنامج كان فعالاً ومؤثراً:",
            question: "The program is ineffective.",
            options: [
              "They wish the program were effective.",
              "They wish the program is effective.",
              "They wish the program has been effective.",
              "They wish the program would be effective next year."
            ],
            correctAnswer: "They wish the program were effective.",
            explanationAr: "المضارع 'is ineffective' يعبر عنه بـ 'wish... were effective' دلالة على تمني نقيض واقع الحاضر."
          }
        ]
      },
      {
        id: "l3-l1-ex3",
        name: "Exercise 3: Choose the correct form",
        nameAr: "التمرين 3: اختر الصيغة الصحيحة للتمني حسب المعنى والزمن",
        questions: [
          {
            id: "u3-l1ex3-q1",
            type: QuestionType.MCQ,
            instruction: "Choose: 'I wish I ____ better now.'",
            instructionAr: "اختر الصيغة المناسبة مع 'now':",
            question: "I wish I ____ better now.",
            options: ["ate", "eat", "had eaten"],
            correctAnswer: "ate",
            explanationAr: "مع وجود 'now' (الآن)، نستخدم الماضي البسيط للتعبير عن التمني في الحاضر."
          },
          {
            id: "u3-l1ex3-q2",
            type: QuestionType.MCQ,
            instruction: "Choose: 'She wishes she ____ about fiber.'",
            instructionAr: "اختر الصيغة للمعلومة الحالية التخيلية:",
            question: "She wishes she ____ about fiber.",
            options: ["knew", "knows", "had known"],
            correctAnswer: "knew",
            explanationAr: "تتمنى لو أنها 'تعرف' الآن، وهو تمنٍ في الحاضر يستعمل صيغة الماضي البسيط 'knew'."
          },
          {
            id: "u3-l1ex3-q3",
            type: QuestionType.MCQ,
            instruction: "Choose: 'He wishes he ____ meals.' (general regret)",
            instructionAr: "اختر الخيار المناسب:",
            question: "He wishes he ____ meals.",
            options: ["didn't skip", "doesn't skip", "hadn't skipped"],
            correctAnswer: "didn't skip",
            explanationAr: "يتمنى بصفة عامة في حاضره عدم تفويت الوجبات 'didn't skip'."
          },
          {
            id: "u3-l1ex3-q4",
            type: QuestionType.MCQ,
            instruction: "Choose: 'We wish food labels ____ clearer.'",
            instructionAr: "اختر للتعبير عن أمنية التوضيح لبطاقات الأغذية:",
            question: "We wish food labels ____ clearer.",
            options: ["were", "are", "had been"],
            correctAnswer: "were",
            explanationAr: "نستعمل 'were' للاستحالة والافتراضية لتمني تعديل الحاضر."
          },
          {
            id: "u3-l1ex3-q5",
            type: QuestionType.MCQ,
            instruction: "Choose: 'They wish they ____ yesterday.' (regret on past action)",
            instructionAr: "اختر الصيغة لحدث تم مسبقاً بالأمس 'yesterday':",
            question: "They wish they ____ yesterday.",
            options: ["had exercised", "exercise", "exercised"],
            correctAnswer: "had exercised",
            explanationAr: "بما أنه تمنٍ للفترة الفائتة بالأمس، يتوجب اختيار الماضي التام 'had exercised'."
          },
          {
            id: "u3-l1ex3-q6",
            type: QuestionType.MCQ,
            instruction: "Choose: 'I wish patients ____ advice.' (hope for human behavior change)",
            instructionAr: "تمني إبداء النية والتجاوب مستقبلاً:",
            question: "I wish patients ____ advice.",
            options: ["would follow", "follow", "followed"],
            correctAnswer: "would follow",
            explanationAr: "نستخدم 'would follow' عندما نتمنى أن يستجيب الأشخاص ويعدلوا سلوكهم بانتظام."
          },
          {
            id: "u3-l1ex3-q7",
            type: QuestionType.MCQ,
            instruction: "Choose: 'She wishes sugar ____ reduced.'",
            instructionAr: "التمني لتقليص كميات السكر الإجمالية بالمنتجات حالياً:",
            question: "She wishes sugar ____ reduced.",
            options: ["was", "is", "would be"],
            correctAnswer: "was",
            explanationAr: "الماضي التخيلي المبني للمجهول 'was reduced' (أو 'were reduced') يطابق تمني الحاضر."
          },
          {
            id: "u3-l1ex3-q8",
            type: QuestionType.MCQ,
            instruction: "Choose: 'He wishes he ____ more water.' (daily habit)",
            instructionAr: "اختر الفعل:",
            question: "He wishes he ____ more water.",
            options: ["drank", "drinks", "had drunk"],
            correctAnswer: "drank",
            explanationAr: "تمني زيادة كمية المياه كعادة يومية يتطلب ماضياً بسيطاً 'drank'."
          },
          {
            id: "u3-l1ex3-q9",
            type: QuestionType.MCQ,
            instruction: "Choose: 'We wish nutrition education ____.' (improvement hope)",
            instructionAr: "اختر للتعبير عن تمني تحسن التثقيف مستقبلاً:",
            question: "We wish nutrition education ____.",
            options: ["would improve", "improves", "improved"],
            correctAnswer: "would improve",
            explanationAr: "للتمني المستقبلي أو التحفيز الإيجابي على التغيير نستخدم 'would improve'."
          },
          {
            id: "u3-l1ex3-q10",
            type: QuestionType.MCQ,
            instruction: "Choose: 'I wish I ____ this earlier.' (past statement)",
            instructionAr: "التمني لحدث سابق ومبكر 'earlier':",
            question: "I wish I ____ this earlier.",
            options: ["had known", "know", "knew"],
            correctAnswer: "had known",
            explanationAr: "الندم في الماضي 'earlier' يتطابق نحوياً مع صيغة الماضي التام 'had known'."
          }
        ]
      },
      {
        id: "l3-l1-ex4",
        name: "Exercise 4: Write sentences using wish about nutrition and health",
        nameAr: "التمرين 4: صياغة تمنّيات دقيقة ومفيدة حول التغذية والحياة الصحية",
        questions: [
          {
            id: "u3-l1ex4-q1",
            type: QuestionType.MCQ,
            instruction: "Form a wish about: 'eating habits' (present dissatisfaction)",
            instructionAr: "صياغة تمنٍّ حول عادات تناول الأكل الحالية:",
            question: "Which of the following is a grammatically correct present wish about eating habits?",
            options: [
              "I wish my family had healthier eating habits.",
              "I wish my family has healthier eating habits.",
              "I wish my family will have healthier eating habits.",
              "I wish my family have had healthier eating habits tomorrow."
            ],
            correctAnswer: "I wish my family had healthier eating habits.",
            explanationAr: "نستعمل 'had' (الماضي البسيط) للتعبير عن رغبة حالية مغايرة للواقع عن العادات الغذائية الحالية."
          },
          {
            id: "u3-l1ex4-q2",
            type: QuestionType.MCQ,
            instruction: "Form a wish about: 'water intake'",
            instructionAr: "صياغة تمنٍّ لزيادة كميات شرب مياه اليوم:",
            question: "Which represents a wish for increased water intake?",
            options: [
              "I wish I drank more water throughout the day.",
              "I wish I drink more water in the evening.",
              "I wish I will drink more water eventually.",
              "I wish I have been drinking water right now."
            ],
            correctAnswer: "I wish I drank more water throughout the day.",
            explanationAr: "التمني بـ 'drank' (ماضي بسيط) يحقق الصحة اللغوية لقصد كميات المياه الحالية."
          },
          {
            id: "u3-l1ex4-q3",
            type: QuestionType.MCQ,
            instruction: "Form a wish about: 'physical activity'",
            instructionAr: "صياغة تمنٍّ لمزيد من النشاط البدني والحيوية:",
            question: "Identify the correct wish statement about physical activity:",
            options: [
              "He wishes he were more physically active.",
              "He wishes he is more physically active.",
              "He wishes he will be physically active last week.",
              "He wishes he had been physically active now."
            ],
            correctAnswer: "He wishes he were more physically active.",
            explanationAr: "نستخدم 'were' للتعبير الافتراضي الخيالي عن رغبته الحالية بكونه أكثر نشاطاً وحركة."
          },
          {
            id: "u3-l1ex4-q4",
            type: QuestionType.MCQ,
            instruction: "Form a wish about: 'sugar consumption'",
            instructionAr: "صياغة تمنٍّ لتقنين السكريات وتفضيل الصحة:",
            question: "Choose the proper wish regarding sugar reduction:",
            options: [
              "They wish they consumed less refined sugar.",
              "They wish they consume less refined sugar.",
              "They wish they would consume sugar yesterday.",
              "They wish they had sugar is consumed."
            ],
            correctAnswer: "They wish they consumed less refined sugar.",
            explanationAr: "'consumed' بالماضي يعطي الدلالة على تمني تقليل نسبة السكر اليوم."
          },
          {
            id: "u3-l1ex4-q5",
            type: QuestionType.MCQ,
            instruction: "Form a wish about: 'meal planning'",
            instructionAr: "تمنّي تحسن تخطيط وإعداد وجبات الطعام:",
            question: "Select the correct wish about planning meals ahead:",
            options: [
              "She wishes she planned her weekly meals on Sunday.",
              "She wishes she plans her weekly meals.",
              "She wishes she had planned meals tomorrow.",
              "She wishes she is planning her weekly meals."
            ],
            correctAnswer: "She wishes she planned her weekly meals on Sunday.",
            explanationAr: "الفعل 'planned' ماضي بسيط يعبر عن أمنيتها الحالية في التخطيط الأسبوعي المنتظم الـ Sunday وحالياً."
          },
          {
            id: "u3-l1ex4-q6",
            type: QuestionType.MCQ,
            instruction: "Form a wish about: 'food choices'",
            instructionAr: "صياغة تمني بشأن جودة وصحة اختيارات الأكل:",
            question: "Which sentence expresses a desire for better food choices?",
            options: [
              "We wish we made healthier food choices in the cafeteria.",
              "We wish we make healthier food choices in the cafeteria.",
              "We wish we will make healthier food choices in the cafeteria.",
              "We wish we had made healthier food choices tomorrow."
            ],
            correctAnswer: "We wish we made healthier food choices in the cafeteria.",
            explanationAr: "استعمال 'made' بصيغة الماضي لبيان التمني لواقع راهن ومستمر."
          },
          {
            id: "u3-l1ex4-q7",
            type: QuestionType.MCQ,
            instruction: "Form a wish about: 'past diet mistakes'",
            instructionAr: "صياغة تمنّي حول أخطاء غذائية ارتكبت في الماضي:",
            question: "Which is a correct regret about past diet mistakes?",
            options: [
              "I wish I hadn't made those poor eating decisions when I was a teenager.",
              "I wish I didn't make those poor eating decisions back then.",
              "I wish I don't make those poor eating decisions back then."
            ],
            correctAnswer: "I wish I hadn't made those poor eating decisions when I was a teenager.",
            explanationAr: "لأحداث الطفولة أو الماضي البعيد للمكلف أو المريض، نلجأ حصرياً للماضي التام 'hadn't made' للندم."
          },
          {
            id: "u3-l1ex4-q8",
            type: QuestionType.MCQ,
            instruction: "Form a wish about: 'nutrition education'",
            instructionAr: "تمني إدخال مادة تعليم التغذية في المدارس للبراعم:",
            question: "Which sentence expresses an aspiration for better nutrition education?",
            options: [
              "Educators wish schools included nutrition education in the core curriculum.",
              "Educators wish schools include nutrition education in the core curriculum.",
              "Educators wish schools had included nutrition education tomorrow.",
              "Educators wish schools will include nutrition education last year."
            ],
            correctAnswer: "Educators wish schools included nutrition education in the core curriculum.",
            explanationAr: "تحويل الفعل إلى 'included' يحاكي تمني حصول هذا التطوير للمناهج بشكل فوري في الحاضر."
          },
          {
            id: "u3-l1ex4-q9",
            type: QuestionType.MCQ,
            instruction: "Form a wish about: 'food prices'",
            instructionAr: "أمنية لرفع القدرة الشرائية عن طريق تخفيض أسعار الغذاء العضوي:",
            question: "Choose the proper statement about organic food prices:",
            options: [
              "Consumers wish organic food were more affordable.",
              "Consumers wish organic food is more affordable.",
              "Consumers wish organic food had been more affordable tomorrow.",
              "Consumers wish organic food was more cheap last week ago."
            ],
            correctAnswer: "Consumers wish organic food were more affordable.",
            explanationAr: "استعمال 'were' يثبت الأمنية الحالية لتخفيض تكاليف الغذاء الصحي العضوي."
          },
          {
            id: "u3-l1ex4-q10",
            type: QuestionType.MCQ,
            instruction: "Form a wish about: 'healthy lifestyle'",
            instructionAr: "تمني العيش بأسلوب حياة نشط ومثالي:",
            question: "What is the best wish for acquiring a healthy lifestyle?",
            options: [
              "I wish I led a healthier and more balanced lifestyle.",
              "I wish I lead a healthier and more balanced lifestyle.",
              "I wish I have led a healthier and more balanced lifestyle now.",
              "I wish I will lead a healthier and more balanced lifestyle yesterday."
            ],
            correctAnswer: "I wish I led a healthier and more balanced lifestyle.",
            explanationAr: "الفعل 'led' (الماضي من lead) يمثل تمني نمط الحياة الصحي عالي كفاءة العافية."
          }
        ]
      }
    ]
  },
  {
    id: "unit3-lesson2",
    title: "Lesson 2: Nutrition Idioms (G, H, I)",
    titleAr: "الدرس 2: كنايات ومصطلحات التغذية بحروف G , H , I",
    description: "Master descriptive phrases and healthcare idioms related to diets, hunger, and digestive capacities.",
    descriptionAr: "إتقان الكنايات والتعبيرات الاصطلاحية المستخدمة لوصف الحميات والجوع وقدرة المعدة على الهضم.",
    exercises: [
      {
        id: "l3-l2-ex1",
        name: "Exercise 1: Match the idioms with their meanings",
        nameAr: "التمرين 1: طابق المصطلح الإنجليزي بمعناه العربي والمدلول الدقيق له",
        questions: [
          {
            id: "u3-l2ex1-q1",
            type: QuestionType.MATCHING,
            instruction: "Match the following healthcare vocabulary and idioms with their clinical or cultural meanings.",
            instructionAr: "قم بسحب وإسقاط التعبيرات الاصطلاحية لمطابقتها مع المعاني الصحيحة:",
            pairs: [
              { id: "p1", left: "Go cold turkey", right: "Suddenly stop a bad habit completely (الإقلاع فجأة وكلياً عن عادة سيئة كالسكر)" },
              { id: "p2", left: "In moderation", right: "Sensibly and in controlled portions (بتعقل واعتدال تجنباً للإفراط)" },
              { id: "p3", left: "Have a sweet tooth", right: "Strong craving/liking for sugary foods (حب شديد وولع بتناول السكريات)" },
              { id: "p4", left: "Hit the spot", right: "Satisfies a clinical craving or hunger perfectly (يسد الحاجة الغذائية تماماً)" },
              { id: "p5", left: "Grain of salt", right: "Accept information with skepticism (تقبل النصائح بتحفظ وتفحص ذكي)" },
              { id: "p6", left: "Grab a bite", right: "Get a quick and simple meal (الحصول على وجبة سريعة وخفيفة على عجل)" },
              { id: "p7", left: "In a nutshell", right: "Briefly and concisely summarized (باختصار شديد وبإيجاز مفيد)" },
              { id: "p8", left: "Healthy as a horse", right: "In pristine physical health and strength (في صحة ممتازة وبنية معافاة وقوية)" },
              { id: "p9", left: "Hunger pangs", right: "Sharp, sudden spasms of hunger (آلام أو قرصات الجوع المفاجئة)" },
              { id: "p10", left: "Iron stomach", right: "Ability to digest anything without discomfort (معدة حديدية قوية الهضم)" }
            ]
          }
        ]
      },
      {
        id: "l3-l2-ex2",
        name: "Exercise 2: Fill in the blanks using suitable idioms",
        nameAr: "التمرين 2: املأ الفراغات بالعبارات والكنايات الغذائية المناسبة",
        questions: [
          {
            id: "u3-l2ex2-q1",
            type: QuestionType.DROPDOWN,
            instruction: "Fill in the gap for dietary moderation.",
            instructionAr: "اختر الكناية الأنسب لملء الفراغ:",
            sentenceParts: ["To stay fit, doctors advise consumers to eat fats and carbs ", "."],
            options: ["in moderation", "go cold turkey", "grain of salt"],
            correctAnswer: "in moderation",
            explanationAr: "إرشاد الطبيب بالاعتدال في الكربوهيدرات والدهون يناسبه دائماً مصطلح 'in moderation'."
          },
          {
            id: "u3-l2ex2-q2",
            type: QuestionType.DROPDOWN,
            instruction: "Fill in the gap for painful hunger after fasting.",
            instructionAr: "اختر لقرصات الجوع المنتظمة بعد فترات طويلة:",
            sentenceParts: ["He skipped lunch, and by 4 PM, he started having strong ", "."],
            options: ["hunger pangs", "iron stomachs", "sweet teeth"],
            correctAnswer: "hunger pangs",
            explanationAr: "تسمى التقلصات والآلام الناجمة عن فراغ المعدة لفترات طويلة بـ 'hunger pangs'."
          },
          {
            id: "u3-l2ex2-q3",
            type: QuestionType.DROPDOWN,
            instruction: "Fill in the gap for absolute sudden cessation.",
            instructionAr: "عندما قرر المريض ترك المشروبات الغازية فوراً وبلا تدريج:",
            sentenceParts: ["The patient quit drinking soda. He decided to ", " on sugar."],
            options: ["go cold turkey", "grab a bite", "hit the spot"],
            correctAnswer: "go cold turkey",
            explanationAr: "المصطلح 'go cold turkey' يرمز للإقلاع الفوري والكامل والمباشر عن مادة مسببة للإدمان أو العادة السيئة."
          },
          {
            id: "u3-l2ex2-q4",
            type: QuestionType.DROPDOWN,
            instruction: "Fill in the gap for satisfying food.",
            instructionAr: "اختيار التعبير الدال على تلبية الوجبة للحاجة الغذائية تماماً:",
            sentenceParts: ["After the intense workout, that warm vegetable broth really ", "."],
            options: ["hit the spot", "went cold turkey", "had an iron stomach"],
            correctAnswer: "hit the spot",
            explanationAr: "عندما يفي الطعام أو الشراب بالطلب تماماً ويشعر الشخص بالراحة، نستخدم 'hit the spot'."
          },
          {
            id: "u3-l2ex2-q5",
            type: QuestionType.DROPDOWN,
            instruction: "Fill in the gap for candy/sweet lovers.",
            instructionAr: "أكمل لوصف الشخص المحب للحلويات والكراميل:",
            sentenceParts: ["She cannot resist cakes because she has such a ", "."],
            options: ["sweet tooth", "grain of salt", "iron stomach"],
            correctAnswer: "sweet tooth",
            explanationAr: "الشخص المحب للحلويات يسمى في اللغة الإنجليزية بـ 'has a sweet tooth'."
          },
          {
            id: "u3-l2ex2-q6",
            type: QuestionType.DROPDOWN,
            instruction: "Fill in the gap for quick meals.",
            instructionAr: "تناول وجبة سريعة لضيق الوقت بين المحاضرات والعيادات:",
            sentenceParts: ["Let's find a nearby healthy diner to ", " before the seminar begins."],
            options: ["grab a bite", "go cold turkey", "hit the spot"],
            correctAnswer: "grab a bite",
            explanationAr: "المصطلح 'grab a bite' يعني الحصول على وجبة وتناولها بسرعة وببساطة لضيق الوقت."
          },
          {
            id: "u3-l2ex2-q7",
            type: QuestionType.DROPDOWN,
            instruction: "Fill in the gap for careful filtering of advice.",
            instructionAr: "أخذ بعض المقالات الصحفية غير المتخصصة بنوع من التحفظ والشك السليم:",
            sentenceParts: ["You should take online diet trends with a ", "."],
            options: ["grain of salt", "sweet tooth", "sugar rush"],
            correctAnswer: "grain of salt",
            explanationAr: "العبارة 'with a grain of salt' تعني عدم أخذ التوصيات العشوائية كحقيقة قطعية بل بنوع من التفكر الذكي والتحفظ."
          },
          {
            id: "u3-l2ex2-q8",
            type: QuestionType.DROPDOWN,
            instruction: "Fill in the gap for excellent and strong physical body state.",
            instructionAr: "العلامات الحيوية والقوة البدنية لشخص بطل:",
            sentenceParts: ["He runs five miles every morning; he is as ", "."],
            options: ["healthy as a horse", "hard to digest", "high in sodium"],
            correctAnswer: "healthy as a horse",
            explanationAr: "التعبير 'healthy as a horse' يعني متمع بصحة نموذجية فائقة وشديد المقاومة للأمراض."
          },
          {
            id: "u3-l2ex2-q9",
            type: QuestionType.DROPDOWN,
            instruction: "Fill in the gap for summarizing briefly.",
            instructionAr: "توضيح خلاصة الكلام بإيجاز وبراعة:",
            sentenceParts: ["The medical report explains our nutrition strategy ", "."],
            options: ["in a nutshell", "in moderation", "grab a bite"],
            correctAnswer: "in a nutshell",
            explanationAr: "نستخدم 'in a nutshell' لإفادة تلخيص الفكرة بأوجز الكلمات وأسرعها للفهم."
          },
          {
            id: "u3-l2ex2-q10",
            type: QuestionType.DROPDOWN,
            instruction: "Fill in the gap for digestive durability.",
            instructionAr: "قدرة تحمل الهضم ومقاومة اضطرابات الأمعاء للمأكولات الغريبة والبهارات:",
            sentenceParts: ["He can eat spicy street food with no issues; he has an ", "."],
            options: ["iron stomach", "intake limit", "icebreaker meal"],
            correctAnswer: "iron stomach",
            explanationAr: "المعدة المقاومة للانتفاخات والآلام والتي تهضم البهارات والمواد الصلبة بسهولة توصف بـ 'iron stomach'."
          }
        ]
      },
      {
        id: "l3-l2-ex3",
        name: "Exercise 3: Choose the correct idiom or medical concept",
        nameAr: "التمرين 3: اختر الكناية أو المفهوم الطبي المناسب للتعبير عن المعنى",
        questions: [
          {
            id: "u3-l2ex3-q1",
            type: QuestionType.BINARY,
            instruction: "Choose: 'The diet plan finally got _____.' (approved to start)",
            instructionAr: "اختر العبارة الملائمة لبدء تصنيع أو تطبيق نظام الحمية والبدء فيه بضوء أخضر:",
            sentenceBefore: "The diet plan finally got",
            sentenceAfter: ".",
            options: ["the green light", "hard to digest"],
            correctAnswer: "the green light",
            explanationAr: "الحصول على 'the green light' (الضوء الأخضر) تعني نيل الموافقة والاعتماد الرسمي للبدء بالخطة."
          },
          {
            id: "u3-l2ex3-q2",
            type: QuestionType.BINARY,
            instruction: "Choose: 'Dates provide high, _____ to athletes.'",
            instructionAr: "القدرة التنشيطية الفورية للتمور والأغذية السكرية السريعة الذوبان:",
            sentenceBefore: "Dates provide high,",
            sentenceAfter: "to athletes.",
            options: ["instant energy", "intake limit"],
            correctAnswer: "instant energy",
            explanationAr: "السكريات الطبيعية البسيطة تمنح 'instant energy' (طاقة فورية) يمتصها الدم بسرعة لتدعيم اللياقة في التو."
          },
          {
            id: "u3-l2ex3-q3",
            type: QuestionType.BINARY,
            instruction: "Choose: 'The complex medical textbook was _____.'",
            instructionAr: "صعوبة الفهم أو الاستيعاب العقلي للمواضيع العلمية الجافة:",
            sentenceBefore: "The complex medical textbook was",
            sentenceAfter: ".",
            options: ["hard to digest", "in a nutshell"],
            correctAnswer: "hard to digest",
            explanationAr: "مصطلح 'hard to digest' لا يقتصر على الأمعاء، بل يطلق مجازياً على المواد العلمية صعبة الاستيعاب والفهم العصي."
          },
          {
            id: "u3-l2ex3-q4",
            type: QuestionType.BINARY,
            instruction: "Choose: 'He eats exceptionally large portions; he behaves as a _____.'",
            instructionAr: "اللقب للمأكول الكبير الذي يتناول كميات هائلة من الحصص الغذائية:",
            sentenceBefore: "He eats exceptionally large portions; he behaves as a",
            sentenceAfter: ".",
            options: ["heavy eater", "healthy as a horse"],
            correctAnswer: "heavy eater",
            explanationAr: "الشخص الذي يأكل كميات ضخمة ومستمرة يسمى لغوياً 'heavy eater' (آكل نَهم)."
          },
          {
            id: "u3-l2ex3-q5",
            type: QuestionType.BINARY,
            instruction: "Choose: 'Green leafy vegetables are indeed _____.'",
            instructionAr: "مقولة الفواكه والخضروات للصحة العامة والوقاية:",
            sentenceBefore: "Green leafy vegetables are indeed",
            sentenceAfter: ".",
            options: ["good for you", "grab a bite"],
            correctAnswer: "good for you",
            explanationAr: "'good for you' تعني مفيدة جداً وجالبة للعافية لجسم الإنسان."
          },
          {
            id: "u3-l2ex3-q6",
            type: QuestionType.BINARY,
            instruction: "Choose: 'The initial soup was served as an _____ to comfort patients.'",
            instructionAr: "الوجبات التي تُقدم للقاء الأول أو لطاقم التمريض بهدف كسر الحواجز والتقارب الاجتماعي:",
            sentenceBefore: "The initial soup was served as an",
            sentenceAfter: "to comfort patients.",
            options: ["icebreaker meal", "iron stomach"],
            correctAnswer: "icebreaker meal",
            explanationAr: "'icebreaker meal' هي وجبة لكسر الجمود والتردد وخلق مناخ مريح في العيادة أو في الاجتماع الترحيبي الأول."
          },
          {
            id: "u3-l2ex3-q7",
            type: QuestionType.BINARY,
            instruction: "Choose: 'Light exercise is known to _____.'",
            instructionAr: "دور المشي والرياضة الخفيفة لتنشيط المعدة والجسم لطلب الطعام:",
            sentenceBefore: "Light exercise is known to",
            sentenceAfter: ".",
            options: ["improve his appetite", "hit the spot"],
            correctAnswer: "improve his appetite",
            explanationAr: "'improve his appetite' تعني تحسين وفتح شهية الفرد لتقبل الأكل والهضم بسلامة."
          },
          {
            id: "u3-l2ex3-q8",
            type: QuestionType.BINARY,
            instruction: "Choose: 'She requested to _____ of the new clinic-designed meal.'",
            instructionAr: "الحصول على لقمة تذوق سريعة للتحقق من المذاق:",
            sentenceBefore: "She requested to",
            sentenceAfter: "of the new clinic-designed meal.",
            options: ["get a taste", "grab a bite"],
            correctAnswer: "get a taste",
            explanationAr: "العبارة 'get a taste' تعني الحصول على عينة تذوق لاكتشاف جودة ونكهة الطعام والمكونات."
          },
          {
            id: "u3-l2ex3-q9",
            type: QuestionType.BINARY,
            instruction: "Choose: 'High blood pressure patients must observe a strict _____ on sodium.'",
            instructionAr: "الحد الأقصى أو الحصص اليومية القصوى لمرضى الضغط المرتفع لمكعبات الملح:",
            sentenceBefore: "High blood pressure patients must observe a strict",
            sentenceAfter: "on sodium.",
            options: ["intake limit", "instant energy"],
            correctAnswer: "intake limit",
            explanationAr: "'intake limit' تعني الحد المسموح به علمياً للمدخول الغذائي اليومي لتجنب تدهور الضغط."
          },
          {
            id: "u3-l2ex3-q10",
            type: QuestionType.BINARY,
            instruction: "Choose: 'Adhering to nutritional feedback keeps you _____.'",
            instructionAr: "أثر التغذية والامتثال لتوجيهات الأطباء على اللياقة والقوام والمظهر:",
            sentenceBefore: "Adhering to nutritional feedback keeps you",
            sentenceAfter: ".",
            options: ["in good shape", "in a nutshell"],
            correctAnswer: "in good shape",
            explanationAr: "المصطلح 'in good shape' يعني بكامل لياقتك البدنية وقوامك الممشوق والصحي الرفيع."
          }
        ]
      },
      {
        id: "l3-l2-ex4",
        name: "Exercise 4: Construct and apply nutrition sentences appropriately",
        nameAr: "التمرين 4: صياغة الجمل وتطبيقها في السياق الطبي المناسب للكنايات",
        questions: [
          {
            id: "u3-l2ex4-q1",
            type: QuestionType.MCQ,
            instruction: "Apply 'in moderation' in a medical advice text:",
            instructionAr: "اختر الجملة الطبية التي تطبق مصطلح 'in moderation' بشكل فصيح وعلمي:",
            question: "Choose the correct advice for patient diet plans:",
            options: [
              "We must emphasize that fats and simple sugars should be consumed only in moderation.",
              "We must emphasize that you should avoid drinking water in moderation daily.",
              "In moderation is a disease related to blood insulin and thyroid regulation.",
              "Doctors wish patients go cold turkey in moderation for all their hydration goals."
            ],
            correctAnswer: "We must emphasize that fats and simple sugars should be consumed only in moderation.",
            explanationAr: "يتوافق 'in moderation' (بحدود واعتدال) مع تناول السكريات والدهون ليتناسب مع الوقاية من أمراض القلب."
          },
          {
            id: "u3-l2ex4-q2",
            type: QuestionType.MCQ,
            instruction: "Apply 'go cold turkey' in treating addiction/bad habits:",
            instructionAr: "أفضل تطبيق لأسلوب الحسم السريع للتخلص من الإدمان أو الشره الزائد:",
            question: "Which represents an accurate usage of 'go cold turkey'?",
            options: [
              "Some patients prefer to go cold turkey, stopping nicotine use instantly on Monday.",
              "The doctor cooked cold turkey to keep the patient happy while on the diet.",
              "Going cold turkey refers to taking iron supplements daily in moderation.",
              "She wishes she was a cold turkey during the hospital checkup."
            ],
            correctAnswer: "Some patients prefer to go cold turkey, stopping nicotine use instantly on Monday.",
            explanationAr: "تطبيق المصطلح لقطع مادة ضارة فجأة (كالنيكوتين أو التدخين) هو الاستخدام العلمي والمجازي الصحيح."
          },
          {
            id: "u3-l2ex4-q3",
            type: QuestionType.MCQ,
            instruction: "Apply 'have a sweet tooth' in describing pediatric or diabetic risks:",
            instructionAr: "تطبيق لوصف مخاطر الإقبال المفرط للأطفال على المأكولات المغلفة:",
            question: "Identify the correct usage context of 'have a sweet tooth':",
            options: [
              "Because the child has a sweet tooth, the mother struggles to maintain pediatric glycemic index limits.",
              "My tooth is sweet and hurts because of poor fluoride hydration.",
              "Having a sweet tooth is cured by taking thyroid hormone injections in moderation.",
              "Nutritionists had a sweet tooth analyzed inside the biochemistry laboratory."
            ],
            correctAnswer: "Because the child has a sweet tooth, the mother struggles to maintain pediatric glycemic index limits.",
            explanationAr: "العلاقة السببية بين عشق الحلوى (sweet tooth) وبين التحكم في جودة سكر الدم والـ glycemic index ملائمة طبياً."
          },
          {
            id: "u3-l2ex4-q4",
            type: QuestionType.MCQ,
            instruction: "Apply 'in a nutshell' to clarify a diagnosis:",
            instructionAr: "تطبيق الكناية لتسهيل الشرح وإيجاز المشكلة للمريض:",
            question: "Which sentence perfectly exhibits 'in a nutshell'?",
            options: [
              "In a nutshell, insulin sensitivity dictates how effectively glucose energizes your cells.",
              "The nurse placed the prescription drugs inside a nutshell to shield them.",
              "If you want to live healthy, you should eat a nutshell daily to get your iron.",
              "They wish they had the diagnosis written inside a nutshell."
            ],
            correctAnswer: "In a nutshell, insulin sensitivity dictates how effectively glucose energizes your cells.",
            explanationAr: "استعمال 'in a nutshell' كافتتاحية لشرح خلاصة الحساسية وخلايا الطاقة بشكل بسيط ومرتب للمريض."
          },
          {
            id: "u3-l2ex4-q5",
            type: QuestionType.MCQ,
            instruction: "Apply 'grab a bite' safely in a busy clinical routine:",
            instructionAr: "اختر الاستخدام الأصح لـ 'grab a bite' في الروتين الطبي:",
            question: "Choose the proper sentence utilizing 'grab a bite':",
            options: [
              "The surgical team has only fifteen minutes to grab a healthy bite before the next operation.",
              "A dangerous bacteria can grab a bite from the patient's wounded arm.",
              "Please grab a bite of the raw medicine with a grain of salt.",
              "He wish he grabs a bite inside the glucose fluid directly."
            ],
            correctAnswer: "The surgical team has only fifteen minutes to grab a healthy bite before the next operation.",
            explanationAr: "المصطلح يشير للحصول على وجبة سريعة وصحية خلال الاستراحات الشاقة والقصيرة للأطباء."
          },
          {
            id: "u3-l2ex4-q6",
            type: QuestionType.MCQ,
            instruction: "Apply 'hit the spot' to satisfy critical sodium/sugar levels:",
            instructionAr: "الكناية لوصف شراب أو علاج مهدئ ومغذٍ ومروٍ:",
            question: "Find the sentence using 'hit the spot' correctly:",
            options: [
              "For a dehydrated hiker in summer, a cold glass of electrolyte fluid really hits the spot.",
              "The hospital needle must hit the spot of the bone exactly to inject insulin.",
              "She wishes the food poisoning did not hit the spot of her stomach.",
              "The medical report had hit the spot of the file cabinet."
            ],
            correctAnswer: "For a dehydrated hiker in summer, a cold glass of electrolyte fluid really hits the spot.",
            explanationAr: "كوب بارد من الأملاح والشوارد يعوض الهيدرات ويروي الجسد المنهك تماماً ويرضيه، لذا 'hits the spot' هنا دقيقة للغاية."
          },
          {
            id: "u3-l2ex4-q7",
            type: QuestionType.MCQ,
            instruction: "Apply 'healthy as a horse' in physical assessment:",
            instructionAr: "الدلالة على اللياقة التامة للترشح للمسابقات والعمل الشاق:",
            question: "Which sentence contains 'healthy as a horse' in a clinical evaluation?",
            options: [
              "After completing the cardiovascular fitness tests, the athlete was declared as healthy as a horse.",
              "The veterinary doctor had a horse analyzed because of stomach inflammation.",
              "To protect the horse, they vaccinated it because it is healthy as a horse.",
              "She wish she was healthy as a horse when she skipped breakfast yesterday."
            ],
            correctAnswer: "After completing the cardiovascular fitness tests, the athlete was declared as healthy as a horse.",
            explanationAr: "يوصف الشخص بالصحة الممتازة وبنية مقاومة للأمراض كالخيل 'healthy as a horse' بعد الفحوصات المقارنة."
          },
          {
            id: "u3-l2ex4-q8",
            type: QuestionType.MCQ,
            instruction: "Apply 'hunger pangs' regarding gastric bypass surgery consequences:",
            instructionAr: "قرصات الجوع المؤلمة من تبعات صغر جدار المعدة لمرضى التكميم والسمنة:",
            question: "Determine the correct medical application of 'hunger pangs':",
            options: [
              "Gastric bypass patients experience a massive reduction in hunger pangs because the stomach volume is reduced.",
              "Hunger pangs are chemical hormones manufactured by the liver to eliminate glucose.",
              "Drinking too much soda creates hunger pangs that sterilize the intestinal tract.",
              "The patient had hunger pangs on the left foot during the clinical test."
            ],
            correctAnswer: "Gastric bypass patients experience a massive reduction in hunger pangs because the stomach volume is reduced.",
            explanationAr: "تقليل حجم المعدة يحد من آلام واهتزازات الجوع المفاجئة 'hunger pangs' وهو المعنى الطبي الفسيولوجي المنسجم."
          },
          {
            id: "u3-l2ex4-q9",
            type: QuestionType.MCQ,
            instruction: "Apply 'grain of salt' for unofficial medical blogging:",
            instructionAr: "تحفظ المتلقي على أي ادعاء لم تؤكده مجلة علمية محكمة:",
            question: "Which is the proper usage of 'grain of salt'?",
            options: [
              "Read fitness blogs with a grain of salt until you verify the biochemistry with a registered pediatrician.",
              "Add a heavy grain of salt to your salad if you have chronic hypertension.",
              "The doctor wishes sugar was replaced with a grain of salt in hospital drinks.",
              "Anemia is treated effectively by swallowing a small grain of salt twice a day."
            ],
            correctAnswer: "Read fitness blogs with a grain of salt until you verify the biochemistry with a registered pediatrician.",
            explanationAr: "عدم تصديق النصائح الصحية المبتذلة دون التحقق العلمي يجسده تماماً تعبير 'grain of salt'."
          },
          {
            id: "u3-l2ex4-q10",
            type: QuestionType.MCQ,
            instruction: "Apply 'in good shape' in promoting health programs:",
            instructionAr: "أجمل سياق لتشجيع المجتمع على التدرب والوعي للحفاظ على القوام الرشيق:",
            question: "Identify the correct usage of 'in good shape':",
            options: [
              "A balanced combination of resistance training and fiber-rich meals keeps your body in good shape.",
              "The red blood cell is in good shape because it has an iron stomach.",
              "The doctor wish his medical bag were in good shape when visiting patients.",
              "To keep the glucose in good shape, we must boil the blood samples in moderation."
            ],
            correctAnswer: "A balanced combination of resistance training and fiber-rich meals keeps your body in good shape.",
            explanationAr: "بقاء الجسم في مظهر صحي وقوة عضلية ممتازة يعبر عنه بـ'in good shape' في التثقيف الطبي التوعوي."
          }
        ]
      }
    ]
  },
  {
    id: "unit3-lesson3",
    title: "Lesson 3: Reading - Nutrition, Lifestyle, and Health Awareness",
    titleAr: "الدرس 3: القراءة والفهم - التغذية، نمط الحياة، والتوعية الصحية",
    description: "Read about the modern paradigm shift in nutrition and the importance of lifestyle awareness campaigns.",
    descriptionAr: "اقرأ عن التحول الحديث في نموذج التغذية الوقائية والسريرية وأهمية حملات التوعية بنمط الحياة الصحي.",
    passage: {
      title: "Nutrition, Lifestyle, and Health Awareness",
      paragraphs: [
        {
          id: 1,
          text: "Modern nutrition has shifted from simply preventing deficiencies to optimizing overall health and wellness. What we consume directly influences our energy levels, immune response, and susceptibility to chronic conditions. In today's fast-paced society, maintaining a science-backed understanding of food quality is crucial for building a strong physical defense mechanism.",
          textAr: "انتقلت التغذية الحديثة من مجرد السعي للوقاية من نقص الغذاء والمغذيات الأساسية إلى السعي نحو تحسين الصحة العامة والعافية البدنية والذهنية. فما نستهلكه ونشربه يؤثر مباشرة على مستويات الطاقة والنشاط لدينا، وعلى قدرة استجابة جهاز المناعة ضد الأخطار، وعلى مدى قابليتنا للإصابة بالأمراض والاضطرابات المزمنة. وفي ظل إيقاع العصر الحديث المتسارع، يغدو الحفاظ على الوعي المدعوم علمياً بجودة الغذاء أمراً بالغ الأهمية لتشييد آلية دفاع بدني متينة وقادرة."
        },
        {
          id: 2,
          text: "Poor habits, such as sedentary behavior, high sugar intake, and a lack of essential fiber, significantly increase long-term disease risk like diabetes and cardiovascular issues. In contrast, clinical dietitians and physicians emphasize portion control, whole foods, and regular hydration as critical lifestyle pillars that promote metabolic efficiency and prevent premature cell aging.",
          textAr: "إن العادات اليومية السيئة، مثل الخمول وقلصة الحركة الطويلة، والإفراط في استهلاك السكر المضاف، ونقص الألياف الطبيعية المهمة للأمعاء، تساهم جميعها في رفع مخاطر الإصابة بالعلل على المدى البعيد كالسكري واضطرابات القلب والأوعية. وعلى العكس من ذلك، يدعم أخصائيو التغذية السريرية والأطباء أهمية التحكم في حصص وكميات الوجبات، وتناول الأطعمة الطبيعية غير المصنعة، والالتزام بشرب المياه النظيفة بانتظام كأركان حيوية لنمط الحياة لزيادة كفاءة التمثيل الغذائي ومقاومة شيخوخة الخلايا."
        },
        {
          id: 3,
          text: "Health awareness campaigns play a vital role in educating community members of all generations. They encourage individuals to make informed, healthier dietary choices and learn the glycemic indexes of their meals. This proactive approach leads to improved longevity, better mental clarity, and elevated overall productivity at work and within daily family life.",
          textAr: "تلعب حملات التوعية الطبية والصحية دوراً فائق الأهمية في تثقيف أفراد المجمتع والارتقاء بوعيهم بكافة الأجيال. فهي تشجع النفوس على اتخاذ خيارات طعام واعية وذكية والتعرف على مؤشرات السكر للمأكولات الشائعة لدرء الأخطار الصحية. ويسفر هذا النهج الاستباقي والوقائي عن تحسين متوسط العمر المتوقع للأفراد، والتمتع بصفاء ذهني وعقلي فائق، ناهيك عن رفع معدلات الإنتاجية والتحصيل في العمل اليومي ونطاق الأسرة."
        }
      ]
    },
    exercises: [
      {
        id: "l3-l3-ex1",
        name: "Exercise 1: Answer the comprehension questions",
        nameAr: "التمرين 1: أجب عن الأسئلة الاستيعابية للنص الطبي السابق",
        questions: [
          {
            id: "u3-l3ex1-q1",
            type: QuestionType.MCQ,
            instruction: "Based on Paragraph 1, what is the new focus of modern nutrition?",
            instructionAr: "وفقاً للفقرة الأولى، ما هو التركيز الجديد لعلوم التغذية المعاصرة؟",
            question: "Modern nutrition shifted focus from preventing deficiencies to:",
            options: [
              "Optimizing overall health and wellness.",
              "Manufacturing artificial sweeteners for restaurants.",
              "Decreasing the intake of natural water completely.",
              "Encouraging extreme sedentary behavior."
            ],
            correctAnswer: "Optimizing overall health and wellness.",
            explanationAr: "انتقل التركيز من مجرد الوقاية من النقص التقليدي إلى رفع جودة الصحة والعافية الشاملة لأقصى مستوياتها."
          },
          {
            id: "u3-l3ex1-q2",
            type: QuestionType.MCQ,
            instruction: "According to the text, what is directly influenced by what we consume?",
            instructionAr: "ما الذي يتأثر مباشرة وبشكل فوري بما نأكله ونستهلكه من غذاء؟",
            question: "Our diet directly influences:",
            options: [
              "Our energy levels, immune response, and susceptibility to chronic conditions.",
              "Only the types of vitamins sold in local drug stores.",
              "The physical size of the hospital cafeteria buildings.",
              "Nothing significant because and nutrition doesn't have a long-term impact."
            ],
            correctAnswer: "Our energy levels, immune response, and susceptibility to chronic conditions.",
            explanationAr: "يؤثر الغذاء مباشرة على مستويات طاقتنا، الاستجابة المناعية، ومدى استعداد الجسم للأمراض المزمنة."
          },
          {
            id: "u3-l3ex1-q3",
            type: QuestionType.MCQ,
            instruction: "Why is a science-backed understanding of food quality crucial?",
            instructionAr: "لماذا يعد الفهم المبني على الأدلة العلمية لجودة الغذاء أمراً لازماً؟",
            question: "A science-backed understanding is crucial for:",
            options: [
              "Building a strong physical defense mechanism.",
              "Earning certificates of attendance for medical conferences.",
              "Increasing the sugar rush inside high cholesterol junk food.",
              "Avoiding physical exercise completely on Sundays."
            ],
            correctAnswer: "Building a strong physical defense mechanism.",
            explanationAr: "تذكر الفقرة الأولى أنه بالغ الأهمية لتدعيم وبناء آلية الدفاع والمقاومة الطبيعية لجسد الإنسان."
          },
          {
            id: "u3-l3ex1-q4",
            type: QuestionType.MCQ,
            instruction: "Which poor habits are explicitly listed as increasing disease risk?",
            instructionAr: "ما هي العادات السيئة التي ذكر النص المكتوب أنها تسبب أمراض العصر؟",
            question: "The risk factors highlighted in Paragraph 2 include:",
            options: [
              "Sedentary behavior, high sugar intake, and a lack of essential fiber.",
              "Drinking pure water, sleeping eight hours, and portion control.",
              "Regular clinical checkups and visiting qualified dietitians.",
              "Avoiding processed foods with an iron stomach."
            ],
            correctAnswer: "Sedentary behavior, high sugar intake, and a lack of essential fiber.",
            explanationAr: "ذكر النص بنص العبارة: الخمول البدني (الجلوس الطويل)، كثرة السكريات، وقلة الألياف الغذائية."
          },
          {
            id: "u3-l3ex1-q5",
            type: QuestionType.MCQ,
            instruction: "What common dangerous long-term diseases are referenced in Paragraph 2?",
            instructionAr: "ما هي العلل المزمنة التي جرت تسميتها وتعد تهديداً كبيراً؟",
            question: "The diseases mentioned are:",
            options: [
              "Diabetes and cardiovascular issues.",
              "Influenza and mild skin allergies.",
              "Anemia and iodine deficiency thyroid issues only.",
              "Headaches caused by low sodium hydration."
            ],
            correctAnswer: "Diabetes and cardiovascular issues.",
            explanationAr: "ذكر النص صراحة مرض السكري (Diabetes) والمشاكل والاعتلالات القلبية الوعائية (cardiovascular issues)."
          },
          {
            id: "u3-l3ex1-q6",
            type: QuestionType.MCQ,
            instruction: "What do clinical dietitians and physicians emphasize as critical lifestyle pillars?",
            instructionAr: "ما هي ركائز الحياة الصحية التي ينصح بها الأطباء بحماس بحسب النص؟",
            question: "Critical pillars emphasized are:",
            options: [
              "Portion control, whole foods, and regular hydration.",
              "Eating white sugar quickly and sitting for ten hours.",
              "Skipping both breakfast and lunch every single day.",
              "Taking medical drugs with a sweet tooth."
            ],
            correctAnswer: "Portion control, whole foods, and regular hydration.",
            explanationAr: "الأركان الثلاثة هي: التحكم في كميات الحصص، تفضيل الطعام الطبيعي (غير المصنع)، والمحافظة على رطوبة الجسد بالماء."
          },
          {
            id: "u3-l3ex1-q7",
            type: QuestionType.MCQ,
            instruction: "What are the physiological benefits of these critical lifestyle pillars?",
            instructionAr: "ما هي المنافع الأيضية والخلوية لتطبيق تلك الركائز الهامة؟",
            question: "These dietary habits are said to promote:",
            options: [
              "Metabolic efficiency and prevent premature cell aging.",
              "Extreme insulin spikes and immediate inflammation.",
              "Chronic dehydration and iron deficiency in the cells.",
              "Low thyroid levels and a high glycemic index."
            ],
            correctAnswer: "Metabolic efficiency and prevent premature cell aging.",
            explanationAr: "إن الحفاظ على هذه المقومات يدعم بقاء الخلايا فتية ويقوي معدلات الاستقلاب والتحويل الغذائي بكفاءة."
          },
          {
            id: "u3-l3ex1-q8",
            type: QuestionType.MCQ,
            instruction: "What role do health awareness campaigns play?",
            instructionAr: "ما السلوك الحميد والمهمة التي تنجزها ورش وحملات التوعية؟",
            question: "Health awareness campaigns play a vital role in:",
            options: [
              "Educating community members of all generations.",
              "Selling imported weight-loss drugs to the patients.",
              "Promising a cure without changing diet habits.",
              "Increasing the cost of organic food in hypermarkets."
            ],
            correctAnswer: "Educating community members of all generations.",
            explanationAr: "مهمتها العظمى هي تثقيف وإرشاد أفراد المجتمع لجميع الفئات والأعمار لتبني الوقاية كمسار حياة."
          },
          {
            id: "u3-l3ex1-q9",
            type: QuestionType.MCQ,
            instruction: "What proactive learning action is encouraged for individuals in Paragraph 3?",
            instructionAr: "ما هو الشيء العلمي الذي يشجع النص كل فرد على تعلمه يخص طعامه؟",
            question: "Individuals are encouraged to learn the:",
            options: [
              "Glycemic indexes of their meals.",
              "Names of all pharmaceutical factories.",
              "Formula of organic glucose chemicals.",
              "History of hospital architecture designs."
            ],
            correctAnswer: "Glycemic indexes of their meals.",
            explanationAr: "يتم حث المواطنين على دراسة وإدراك مؤشر السكر (glycemic index) لمأكولاتهم للسيطرة على داء السكري."
          },
          {
            id: "u3-l3ex1-q10",
            type: QuestionType.MCQ,
            instruction: "What are the ultimate lifetime outcomes of a proactive healthcare approach?",
            instructionAr: "ما هي الثمرات النهائية التي يجنيها الإنسان الملتزم بالوقاية الاستباقية؟",
            question: "This proactive approach leads to:",
            options: [
              "Improved longevity, better mental clarity, and elevated overall productivity.",
              "Higher risk of cardiovascular complications and exhaustion.",
              "Frequent hunger pangs and lack of physical stamina.",
              "Decreased work interest due to strict eating plans."
            ],
            correctAnswer: "Improved longevity, better mental clarity, and elevated overall productivity.",
            explanationAr: "يتوج هذا الالتزام بإطالة سنوات الصحة (Longevity)، وتثبيت الصفاء العقلي، وبالتالي مضاعفة الإنتاجية والجودة الحياتية."
          }
        ]
      },
      {
        id: "l3-l3-ex2",
        name: "Exercise 2: True or False Statements",
        nameAr: "التمرين 2: حدد مصداقية الجمل التالية بـ صواب (True) أو خطأ (False)",
        questions: [
          {
            id: "u3-l3ex2-q1",
            type: QuestionType.BINARY,
            instruction: "Is the statement true or false? 'Nutrition only concerns food quantity.'",
            instructionAr: "هل التغذية تركز فقط على حجم وكميات الأكل دون اعتبار للقيمة الغذائية؟",
            sentenceBefore: "Nutrition only concerns food quantity: ",
            sentenceAfter: ".",
            options: ["False", "True"],
            correctAnswer: "False",
            explanationAr: "خطأ بالتأكيد، فالتغذية الحديثة تولي اهتماماً قصوى لنوعية وجودة الأكل (Food quality) ومكوناته."
          },
          {
            id: "u3-l3ex2-q2",
            type: QuestionType.BINARY,
            instruction: "Is this correct? 'Lifestyle heavily affects long-term health outcomes.'",
            instructionAr: "نمط وأسلوب العيش يؤثر بقوة على المصير الصحي البعيد للمريض:",
            sentenceBefore: "Lifestyle affects health outcomes: ",
            sentenceAfter: ".",
            options: ["True", "False"],
            correctAnswer: "True",
            explanationAr: "صحيح، لأن قرارات الحياة من حركة، وتغذية متميزة تلعب الدور الأكبر في صد أمراض الضغط والسكر."
          },
          {
            id: "u3-l3ex2-q3",
            type: QuestionType.BINARY,
            instruction: "Is this true? 'Physical inactivity is globally harmful to metabolism.'",
            instructionAr: "الكسل والخمول البدني مضر للغاية بكفاءة وحرق المواد الغذائية:",
            sentenceBefore: "Physical inactivity is harmful: ",
            sentenceAfter: ".",
            options: ["True", "False"],
            correctAnswer: "True",
            explanationAr: "صحيح، الخمول والجلوس المديد يعطل حرق السعرات الحرارية ويهيئ لمشكلات في كفاءة هرمون الإنسولين."
          },
          {
            id: "u3-l3ex2-q4",
            type: QuestionType.BINARY,
            instruction: "Is it correct? 'Portion control is considered unimportant by modern dietitians.'",
            instructionAr: "يصنف التحكم في منسوب وتوازن الحصص الغذائية كأمر قليل الأهمية اليوم:",
            sentenceBefore: "Portion control is unimportant: ",
            sentenceAfter: ".",
            options: ["False", "True"],
            correctAnswer: "False",
            explanationAr: "بل إن 'portion control' هو أحد المرتكزات الجوهرية (critical lifestyle pillars) التي يوصي بها الجميع لتعديل اللياقة."
          },
          {
            id: "u3-l3ex2-q5",
            type: QuestionType.BINARY,
            instruction: "Does the text support this? 'Awareness campaigns successfully help communities avoid obesity.'",
            instructionAr: "حملات الوعي تلعب دوراً إيجابياً وتثقف أفراد المجتمع ضد مخاطر زيادة الوزن والمقليات:",
            sentenceBefore: "Awareness campaigns help communities: ",
            sentenceAfter: ".",
            options: ["True", "False"],
            correctAnswer: "True",
            explanationAr: "صواب، فهي تزودهم بخيارات واعية، والتقليل من تناول السكر المضاف عبر ورش الإرشاد."
          },
          {
            id: "u3-l3ex2-q6",
            type: QuestionType.BINARY,
            instruction: "Is this statement right? 'Processed and refined foods are highly encouraged to build cells.'",
            instructionAr: "الأغذية مفرطة المعالجة والمحفوظة يُنصح بتناولها بكثرة لبناء دفاعات جدار الأمعاء الصامدة:",
            sentenceBefore: "Processed foods are encouraged: ",
            sentenceAfter: ".",
            options: ["False", "True"],
            correctAnswer: "False",
            explanationAr: "خطأ بالكامل، فالصناعة المصنعة تفتقد للألياف الطبيعية وتحمل كم كبير من الملح والسكر الضارين بالتمثيل الأيضي."
          },
          {
            id: "u3-l3ex2-q7",
            type: QuestionType.BINARY,
            instruction: "Is it true? 'Food quality really matters for physical immunity.'",
            instructionAr: "نوع وجودة الأكل هما المحرك الأساس لجهاز المناعة البشري المقاوم للالتهابات:",
            sentenceBefore: "Food quality matters: ",
            sentenceAfter: ".",
            options: ["True", "False"],
            correctAnswer: "True",
            explanationAr: "صحيح، فالمأكولات الغنية بمضادات الأكسدة والمعززات الفيتامينية العضوية هي وقود جهاز المناعة وحمايته."
          },
          {
            id: "u3-l3ex2-q8",
            type: QuestionType.BINARY,
            instruction: "Test: 'Healthy dietary choices directly improve longevity and brain health.'",
            instructionAr: "مراعاة الغذاء الصحي يؤخر علامات الفناء الطبيعي والشيخوخة ويكسب ذكاء وصفاء:",
            sentenceBefore: "Healthy choices improve life: ",
            sentenceAfter: ".",
            options: ["True", "False"],
            correctAnswer: "True",
            explanationAr: "صحيح تماماً، الغذاء الجيد يمنع تلف الخلايا ويمنح الدماغ طاقة نقية مستمرة خالية من ترسب السكر العنيف."
          },
          {
            id: "u3-l3ex2-q9",
            type: QuestionType.BINARY,
            instruction: "Does this make sense? 'Nutrition strongly affects work productivity.'",
            instructionAr: "تؤثر الحالة التغذوية للفرد على دافعيته وجودة إنتاجه الوظيفي واليومي:",
            sentenceBefore: "Nutrition affects productivity: ",
            sentenceAfter: ".",
            options: ["True", "False"],
            correctAnswer: "True",
            explanationAr: "نعم، الغذاء المتوازن يمنع الخمول وفقدان الانتباه، مما يزيد الحضور الإيجابي والنشاط الفكري في المصانع والشركات."
          },
          {
            id: "u3-l3ex2-q10",
            type: QuestionType.BINARY,
            instruction: "Final test: 'Diet choices have absolutely no long-term impact on our genes or heart.'",
            instructionAr: "ليس للخيارات التغذوية أي أثر ملموس ومستقبلي على المدى الطويل للقلب أو الضغط:",
            sentenceBefore: "Diet has no long-term impact: ",
            sentenceAfter: ".",
            options: ["False", "True"],
            correctAnswer: "False",
            explanationAr: "كذب علمي صريح! فالأبحاث تؤكد بصلابة أن الحميات لها الأثر التراكمي في منع الجلطات أو تشييد بيئة ممرضة."
          }
        ]
      },
      {
        id: "l3-l3-ex3",
        name: "Exercise 3: Vocabulary definitions - Find the words which mean",
        nameAr: "التمرين 3: معاني المفردات - طابق الكلمة الإنجليزية بمرادفها الدقيق",
        questions: [
          {
            id: "u3-l3ex3-q1",
            type: QuestionType.MCQ,
            instruction: "Find the medical or behavior equivalent of: 'Behavior or way of living'",
            instructionAr: "اختر الكلمة التي تعني: 'سلوك الفرد الاجتماعي في الملبس، المأكل، والرياضة اليومية':",
            question: "What word corresponds to 'way of living / conduct'?",
            options: [
              "Lifestyle (نمط الحياة)",
              "Inflammation (الالتهاب)",
              "Insulin (الإنسولين)",
              "Hydration (شرب المياه)"
            ],
            correctAnswer: "Lifestyle (نمط الحياة)",
            explanationAr: "كلمة 'Lifestyle' تطلق على التشكيلة المتكاملة للممارسات والسلوكيات اليومية المعتادة للإنسان."
          },
          {
            id: "u3-l3ex3-q2",
            type: QuestionType.MCQ,
            instruction: "Find the word meaning: 'The chance of injury, damage, or disease'",
            instructionAr: "ما الكلمة التي تفيد بـ: 'احتمالية وقوع الضرر البدني أو التعرض لوعكة أو داء'؟",
            question: "Select the word for 'danger / hazard / chance of harm':",
            options: [
              "Risk (الخطر)",
              "Wellness (العافية الشاملة)",
              "Portion (الحصة الغذائية)",
              "Iodine (اليود الطبي)"
            ],
            correctAnswer: "Risk (الخطر)",
            explanationAr: "كلمة 'Risk' تدل على وجود عامل يزيد من فرص الإصابة بالاعتلالات أو المضاعفات."
          },
          {
            id: "u3-l3ex3-q3",
            type: QuestionType.MCQ,
            instruction: "Find the word meaning: 'Experts who are qualified inside a specific scientific line'",
            instructionAr: "مرادف لـ: 'الأخصائيين أو الكوادر المؤهلة أكاديمياً وعلمياً في حقل محدد':",
            question: "Which of the following describes scientific experts?",
            options: [
              "Professionals (المهنيون /الأخصائيون)",
              "Sedentary (الخاملون)",
              "Grains (الحبيبات والمكسرات)",
              "Pangs (آلام متشنجة)"
            ],
            correctAnswer: "Professionals (المهنيون /الأخصائيون)",
            explanationAr: "'Professionals' تشير إلى الأشخاص الذين يحملون ترخيصاً وتكويناً علمياً لمزاولة المهنة بجدارة."
          },
          {
            id: "u3-l3ex3-q4",
            type: QuestionType.MCQ,
            instruction: "Find the word meaning: 'Absolutely essential and extremely important'",
            instructionAr: "ما الكلمة التي تعني: 'شيء غاية في الأهمية والضرورة ولا يمكن الاستغناء عنه بالكامل'؟",
            question: "Find the synonym for 'necessary / extremely important':",
            options: [
              "Critical (حاسم /جوهري)",
              "Ineffective (عديم الجدوى)",
              "Moderate (معتدل)",
              "Spicy (بهاري وحار)"
            ],
            correctAnswer: "Critical (حاسم /جوهري)",
            explanationAr: "الكلمة 'Critical' تعني جوهري أو حرج، وهو عنصر وجودي للنمط السليم."
          },
          {
            id: "u3-l3ex3-q5",
            type: QuestionType.MCQ,
            instruction: "Find the word meaning: 'To make smaller in size, amount, or limit'",
            instructionAr: "ما المعادل لكلمة: 'يعمل على تخفيض الكميات، الأحجام، أو التقليل منها'؟",
            question: "Select the word meaning 'to decrease / diminish':",
            options: [
              "Reduce (يقلل /يقلص)",
              "Optimize (يحسّن بالكامل)",
              "Enhance (يعزز القوة)",
              "Prescribe (يصف دواء)"
            ],
            correctAnswer: "Reduce (يقلل /يقلص)",
            explanationAr: "الفعل 'Reduce' يشير لتقليص المنسوب أو خفض الجرعات والمواد من الوجبة كالملح مثلاً."
          },
          {
            id: "u3-l3ex3-q6",
            type: QuestionType.MCQ,
            instruction: "Find the word meaning: 'In possession of intelligence and information'",
            instructionAr: "وصف للشخص العاقل والفاهم والمسلح بالحقائق التثقيفية:",
            question: "The descriptive term for being wise and well-educated is:",
            options: [
              "Informed (مستنير /واعٍ مطلع)",
              "Dehydrated (مصاب بالجفاف)",
              "Sweet (حلو المذاق)",
              "Heavy (ثقيل ونهم)"
            ],
            correctAnswer: "Informed (مستنير /واعٍ مطلع)",
            explanationAr: "الشخص الـ 'Informed' هو الذي يتخذ قراره بناءً على دراسة وبصيرة بالفوائد والمحاذير."
          },
          {
            id: "u3-l3ex3-q7",
            type: QuestionType.MCQ,
            instruction: "Find the word meaning: 'To make something better, stronger, or extra efficient'",
            instructionAr: "العمل على: 'ترقية جودة الشيء وزيادة كفاءته لأعلى نقطة ممتازة':",
            question: "To improve or make as perfect as possible is to:",
            options: [
              "Optimize (يحسن /يصل للذروة)",
              "Wastage (يهدر ويضيع)",
              "Ignore (يتجاهل عمداً)",
              "Sterilize (يعقم بالكامل)"
            ],
            correctAnswer: "Optimize (يحسن /يصل للذروة)",
            explanationAr: "الفعل 'Optimize' يعني استغلال الموارد الغذائية للحصول على ذروة العافية والطاقة الصحية."
          },
          {
            id: "u3-l3ex3-q8",
            type: QuestionType.MCQ,
            instruction: "Find the word meaning: 'Comprehensive, general, and whole-picture view'",
            instructionAr: "كلمة تعني: 'شامل، كُلّي، وينظر للصورة والمنظومة العامة بغير تجزيء':",
            question: "The word representing total or holistic is:",
            options: [
              "Overall (الشامل /العام كلياً)",
              "Specific (المحدد والخاص)",
              "Sedentary (الخامل الراكد)",
              "Spidery (عنكبوتي)"
            ],
            correctAnswer: "Overall (الشامل /العام كلياً)",
            explanationAr: "'Overall' تشير لكامل المعاني مجتمعة، كالصحة العامة الشاملة للجسم والنظام الهرموني والبدني."
          },
          {
            id: "u3-l3ex3-q9",
            type: QuestionType.MCQ,
            instruction: "Find the word meaning: 'Structured, organized social activities aiming to raise attention'",
            instructionAr: "المصطلح المقابل لـ: 'الأنشطة الاجتماعية والمساعي المنظمة لنشر قضية أو زيادة التوعية لمسألة صحية':",
            question: "Organized programs for community teaching are called:",
            options: [
              "Campaigns (حملات توعوية)",
              "Allergies (حالات تحسسية)",
              "Pills (أقراص علاجية)",
              "Decisions (القرارات الإدارية)"
            ],
            correctAnswer: "Campaigns (حملات توعوية)",
            explanationAr: "تدعى الأنشطة الجماعية الساعية للترويج للتغذية الصحيحة ومكافحة الجلوتين بـ 'Campaigns'."
          },
          {
            id: "u3-l3ex3-q10",
            type: QuestionType.MCQ,
            instruction: "Find the word meaning: 'Consequences, final results, or clinical endpoint'",
            instructionAr: "مرادف لـ: 'العواقب، والمحصلات والنهايات والنتائج السريرية لحالة المريض':",
            question: "Final, observable results are called:",
            options: [
              "Outcomes (النتائج والمحصلات الأخيرة)",
              "Ingredients (المكونات والمقادير)",
              "Deficiencies (مواضع النقص والوهن)",
              "Instructions (الإرشادات والتعليمات)"
            ],
            correctAnswer: "Outcomes (النتائج والمحصلات الأخيرة)",
            explanationAr: "تعرف النتائج الصحية المترتبة على النظام الغذائي بـ 'Outcomes' (المخرجات والمحصلات المرضية)."
          }
        ]
      },
      {
        id: "l3-l3-ex4",
        name: "Exercise 4: Complete the sentences based on the reading text",
        nameAr: "التمرين 4: أكمل الجمل والعبارات بالبنية السليمة المتسقة مع النص",
        questions: [
          {
            id: "u3-l3ex4-q1",
            type: QuestionType.MCQ,
            instruction: "Complete: 'Lifestyle influences...'",
            instructionAr: "أكمل المعنى بما يتسق مع الفقرات:",
            question: "Lifestyle influences our daily bodily functions because:",
            options: [
              "what we consume directly impacts metabolic efficiency and defense machinery.",
              "only wealthy patient families can understand simple calories.",
              "exercise makes our body require high artificial sweets.",
              "it has absolutely zero clinical relevance to insulin sensitivity."
            ],
            correctAnswer: "what we consume directly impacts metabolic efficiency and defense machinery.",
            explanationAr: "يتوافق السلوك ونمط التغذية طردياً مع دقة عمل الأعضاء ومناعة الجسم كمنظومة دفاع متماسكة."
          },
          {
            id: "u3-l3ex4-q2",
            type: QuestionType.MCQ,
            instruction: "Complete: 'Poor habits increase...'",
            instructionAr: "أكمل التلازم السببي للعادات الرديئة:",
            question: "Poor daily habits increase:",
            options: [
              "the long-term threat of contracting chronic issues like diabetes.",
              "hydration efficiency automatically inside red blood cells.",
              "the quality of medical guidelines printed inside local hospitals.",
              "the overall longevity of our body cells and bone joints."
            ],
            correctAnswer: "the long-term threat of contracting chronic issues like diabetes.",
            explanationAr: "إهمال الحركة وتناول الطعام المعالج يرفع من فرص الإصابة ومواجهة مرض السكري على مدى السنين."
          },
          {
            id: "u3-l3ex4-q3",
            type: QuestionType.MCQ,
            instruction: "Complete: 'Professionals emphasize...'",
            instructionAr: "أكمل بما يركز عليه أهل الاختصاص الطبي بالعيادات:",
            question: "Clinical professionals emphasize that patients must pay attention to:",
            options: [
              "portion control, eating whole foods, and keeping their tissues hydrated.",
              "skipping breakfast to avoid insulin problems completely.",
              "purchasing expensive supplements and avoid eating vegetables.",
              "swallowing iodine tablets to cure all forms of stomach inflammation."
            ],
            correctAnswer: "portion control, eating whole foods, and keeping their tissues hydrated.",
            explanationAr: "توجيهات المتخصصين تنص على التحكم بالوجبات، شرب المائيات، واللجوء للمغذيات الكاملة."
          },
          {
            id: "u3-l3ex4-q4",
            type: QuestionType.MCQ,
            instruction: "Complete: 'Campaigns encourage...'",
            instructionAr: "أكمل دور نشاط حملات المجتمع المدني والصحي:",
            question: "Awareness campaigns encourage community members to: ",
            options: [
              "make informed dietary choices and learn glycemic indexes of food.",
              "consume fast food in big size once a day.",
              "quit active labor and practice sedentary living to rest the heart.",
              "limit their water intake strictly during summer months."
            ],
            correctAnswer: "make informed dietary choices and learn glycemic indexes of food.",
            explanationAr: "ترقية سلوك المجتمع ترتكز على حثهم لخيارات صحية واعية ومطالعة معدل السكر للأغذية."
          },
          {
            id: "u3-l3ex4-q5",
            type: QuestionType.MCQ,
            instruction: "Complete: 'Food quality affects...'",
            instructionAr: "جودة ما يعبر البلعوم باتجاه الأمعاء يؤثر بالدرجة الأولى على:",
            question: "High food quality affects human biological cells by:",
            options: [
              "providing clean energy, building defense systems, and preserving longevity.",
              "raising metabolic waste and triggering inflammation.",
              "causing sharp anemia due to low refined glucose levels.",
              "stimulating an immediate need to go cold turkey on vegetables."
            ],
            correctAnswer: "providing clean energy, building defense systems, and preserving longevity.",
            explanationAr: "الطاقة الصافية، وتدعيم الحماية المناعية، ومكافحة الشيخوخة هي نتائج مباشرة للأكل النبيل والطبيعي."
          },
          {
            id: "u3-l3ex4-q6",
            type: QuestionType.MCQ,
            instruction: "Complete: 'Healthy diets reduce...'",
            instructionAr: "أكمل الأثر الإيجابي للحمية النقية:",
            question: "Maintaining a healthy diet reduces our:",
            options: [
              "susceptibility to cardiovascular risks and cellular degradation.",
              "ability to achieve mental clarity at work.",
              "thyroid capacity and metabolic rate in the morning.",
              "desire to drink clean water to maintain healthy hydration."
            ],
            correctAnswer: "susceptibility to cardiovascular risks and cellular degradation.",
            explanationAr: "الوقاية من الجلطات وحراسة الشرايين وأوعية القلب هي أهم مكاسب النظام الغذائي العضوي."
          },
          {
            id: "u3-l3ex4-q7",
            type: QuestionType.MCQ,
            instruction: "Complete: 'Awareness improves...'",
            instructionAr: "نشر العلم والتنوير الصحي للمجتمع يحسن بدوره:",
            question: "Elevated health awareness improves:",
            options: [
              "the population's ability to live longer and minimize obesity risks.",
              "the amount of sweet tooth problems in dentist clinics.",
              "the cost of hiring clinical healthcare workers.",
              "the sedentary speed of high pressure patients."
            ],
            correctAnswer: "the population's ability to live longer and minimize obesity risks.",
            explanationAr: "عندما يعي الناس كيفية اختيار وجباتهم تقل معدلات البدانة ومرض السكري تلقائياً في البيئة الاجتماعية."
          },
          {
            id: "u3-l3ex4-q8",
            type: QuestionType.MCQ,
            instruction: "Complete: 'Nutrition enhances...'",
            instructionAr: "الغذاء المتزن والتحكم المتناسق بالحصص ينهض بـ:",
            question: "Proper clinical nutrition enhances:",
            options: [
              "mental clarity, physical wellness, and everyday work productivity.",
              "heart rates to reach extreme dangerous points during sleep.",
              "the concentration of harmful trans-fats in liver tissues.",
              "hunger pangs that prevent normal patient sleep."
            ],
            correctAnswer: "mental clarity, physical wellness, and everyday work productivity.",
            explanationAr: "الصفاء الفكري والتركيز العميق في المهام والعمل هو ثمرة مباشرة لجودة المغذيات التي يستهلكها العقل."
          },
          {
            id: "u3-l3ex4-q9",
            type: QuestionType.MCQ,
            instruction: "Complete: 'Processed foods should be...'",
            instructionAr: "الموقف الطبي الصحيح حيال المعلبات الحاوية على مواد حافظة عالية وصوديوم:",
            question: "To safeguard cardiovascular wellness, processed foods should be:",
            options: [
              "strictly avoided or reduced to the minimum in our meals.",
              "consumed in large portions to get instant glucose energy.",
              "given to small children with a sweet tooth as a healthy reward.",
              "stored in moderation to replace organic green vegetables."
            ],
            correctAnswer: "strictly avoided or reduced to the minimum in our meals.",
            explanationAr: "لتحصين سلامة القلب والأوعية ينبغي إبعاد تلك الوجبات الكثيفة الصوديوم والمحافظات عن السفرة."
          },
          {
            id: "u3-l3ex4-q10",
            type: QuestionType.MCQ,
            instruction: "Complete: 'Informed choices improve...'",
            instructionAr: "اتخاذ القرار بناءً على معطيات دقيقة يقود بالضرورة إلى:",
            question: "Making informed dietary choices improves:",
            options: [
              "the quality of life, prevent diabetes, and boost energetic longevity.",
              "the chemical side effects of high dose laboratory drugs.",
              "the necessity to have a sweet tooth diagnosed weekly.",
              "the cost of processed food production."
            ],
            correctAnswer: "the quality of life, prevent diabetes, and boost energetic longevity.",
            explanationAr: "تتكامل جودة الحياة، وتختفي احتمالية السكري، ويدوم النشاط لأزمان متقدمة بنمط التفكير والانتخاب الاستباقي."
          }
        ]
      }
    ]
  },
  {
    id: "unit3-lesson4",
    title: "Lesson 4: Nutrition Terms",
    titleAr: "الدرس 4: المصطلحات والتعاريف الفسيولوجية والطبية للتغذية",
    description: "Learn specialized nouns, clinical indicators, and key biochemically active components regulating physical stamina.",
    descriptionAr: "دراسة مصطلحات التغذية المتخصصة، الكواشف الكيميائية، والمركبات الهرمونية المنظمة لطاقة وعافية البدن.",
    exercises: [
      {
        id: "l3-l4-ex1",
        name: "Exercise 1: Match the terms with their definitions",
        nameAr: "التمرين 1: طابق المصطلح الطبي والحيوي بتعريفه الدقيق بالإنجليزية",
        questions: [
          {
            id: "u3-l4ex1-q1",
            type: QuestionType.MATCHING,
            instruction: "Match each scientific or hormonal term to its respective healthcare definition.",
            instructionAr: "قم بمطابقة المصطلحات التالية:",
            pairs: [
              { id: "m1", left: "Glucose", right: "A simple sugar that is an indispensable energy source for physical cells (سكر الغلوكوز المغذي والمصدر الرئيسي للطاقة)" },
              { id: "m2", left: "Hydration", right: "The process of maintaining optimal water balance in bodily fluids and organs (الهيدرات أو عملية المحافظة على رطوبة وتوازن سوائل الجسم)" },
              { id: "m3", left: "Insulin", right: "A key metabolic hormone made by the pancreas to control glucose levels (هرمون الإنسولين المنظم لمستويات السكر بالدم)" },
              { id: "m4", left: "Immunity", right: "The body's protective defense shield against dangerous infections and viruses (درع المناعة الداخلي لحماية خلايا الجسم ومقاومة الجراثيم)" },
              { id: "m5", left: "Glycemic index", right: "A system rating how fast food products raise glucose levels (مؤشر الجهد السكري لتصنيف الأغذية حسب سرعة رفع السكر)" },
              { id: "m6", left: "Iron", right: "An absolute essential mineral needed by blood hemoglobin to carry oxygen (معدن الحديد الناقل للأكسجين لخلايا وأجهزة الجسم)" },
              { id: "m7", left: "Intake", right: "The overall volume of foods, liquids, or nutrients consumed daily (المدخول الكلي للمواد الغذائية والمشروبات المستهلكة)" },
              { id: "m8", left: "Inflammation", right: "A biological defense response showing painful swelling or tissue heat (الالتهاب كاستجابة بيولوجية دفاعية للأنسجة المتضررة)" },
              { id: "m9", left: "Iodine", right: "A key chemical trace mineral required for proper thyroid gland function (عنصر اليود الضروري للعمل المتزن للغدة الدرقية ومستقبلاتها)" },
              { id: "m10", left: "Ideal body weight", right: "A healthy Target Weight range based on client height and physical frame (الوزن البدني المثالي والمستهدف لنمط صحي ممتاز)" }
            ]
          }
        ]
      },
      {
        id: "l3-l4-ex2",
        name: "Exercise 2: Fill in the blanks with correct terms",
        nameAr: "التمرين 2: املأ الفراعات بالاسم أو المصطلح الطبي الصحيح",
        questions: [
          {
            id: "u3-l4ex2-q1",
            type: QuestionType.DROPDOWN,
            instruction: "Fill in the blank for glucose control.",
            instructionAr: "اختر لملء الفراغ بما يطابق التحكم الطبي الهرموني بسكر الدم:",
            sentenceParts: ["Disruptions in the manufacture of ", " lead directly to chronic diabetes mellitus."],
            options: ["insulin", "iron", "iodine"],
            correctAnswer: "insulin",
            explanationAr: "هرمون الأنسولين (insulin) تفرزه غدة البنكرياس للسيطرة على معدل الجلوكوز، والخلل في إفرازه يسبب السكري."
          },
          {
            id: "u3-l4ex2-q2",
            type: QuestionType.DROPDOWN,
            instruction: "Fill in the blank for cellular energy.",
            instructionAr: "اختر لما يمثل وقود الخلية والسكر المغذي لشرارة النشاط:",
            sentenceParts: ["The human nervous system relies almost exclusively on ", " to maintain cognitive function."],
            options: ["glucose", "inflammation", "iron"],
            correctAnswer: "glucose",
            explanationAr: "يتلقى الدماغ والجهاز العصبي طاقته ونشاطه الكهروبي بالاعتماد الأساسي على سكر الجلوكوز (glucose) بالدرجة الأولى."
          },
          {
            id: "u3-l4ex2-q3",
            type: QuestionType.DROPDOWN,
            instruction: "Fill in the blank for defense mechanisms.",
            instructionAr: "اختر للمصطلح المعبر عن حماية الخلايا ضد الغزاة:",
            sentenceParts: ["Consuming diverse vitamin-rich fruits is excellent for beefing up your overall ", "."],
            options: ["immunity", "glycemic index", "intake"],
            correctAnswer: "immunity",
            explanationAr: "تؤدي الفواكه الحمضية والألوان المتعددة بالوجبات لترقية وتدعيم مناعة الجسم (immunity) ضد الفيروسات."
          },
          {
            id: "u3-l4ex2-q4",
            type: QuestionType.DROPDOWN,
            instruction: "Fill in the blank for preventing dryness.",
            instructionAr: "اختر لمكافحة الجفاف وحفظ الليونة التامة للمفاصل والدم الكافي:",
            sentenceParts: ["Optimal physical performance during marathons is impossible without strict, continuous ", "."],
            options: ["hydration", "intake", "inflammation"],
            correctAnswer: "hydration",
            explanationAr: "الهيدرات أو كفاية شرب المياه (hydration) تحمي العضلات والكليتين من الجفاف والقصور الحاد في الطقس اللاهب."
          },
          {
            id: "u3-l4ex2-q5",
            type: QuestionType.DROPDOWN,
            instruction: "Fill in the blank for starch and sugar rate classification.",
            instructionAr: "اختر لنظام تصنيف سرعة امتصاص المواد النشوية ومقدار تأثيرها:",
            sentenceParts: ["Low carb planners inspect the ", " of food items to choose slowly-digested meals."],
            options: ["glycemic index", "ideal body weight", "glucose"],
            correctAnswer: "glycemic index",
            explanationAr: "المؤشر السكري (glycemic index) يساعد في معرفة السرعة التي ترفع بها الكربوهيدرات نسب السكر بالدورة."
          },
          {
            id: "u3-l4ex2-q6",
            type: QuestionType.DROPDOWN,
            instruction: "Fill in the blank for blood hemoglobin trace element.",
            instructionAr: "اختر للمعدن الأساس في مكافحة فقر الدم والأنيميا الدائرية:",
            sentenceParts: ["A serious and chronic deficiency in ", " decreases blood capability to transport oxygen."],
            options: ["iron", "iodine", "insulin"],
            correctAnswer: "iron",
            explanationAr: "يعمل معدن الحديد (iron) كذرة مركزية في بروتين الهيموجلوبين الحامل والناقل للأكسجين إلى كافة الخلايا."
          },
          {
            id: "u3-l4ex2-q7",
            type: QuestionType.DROPDOWN,
            instruction: "Fill in the blank for thyroid trace element.",
            instructionAr: "اختر للمعدن الفائق لغدة العنق والتمثيل الأيضي:",
            sentenceParts: ["The human thyroid gland requires trace amounts of ", " to construct energy-controlling hormones."],
            options: ["iodine", "iron", "glucose"],
            correctAnswer: "iodine",
            explanationAr: "اليود (iodine) ضروري جداً لتخريج هرمونات الغدة الدرقية المنظمة لحرارة الجسد والحرق الكلي للدهون."
          },
          {
            id: "u3-l4ex2-q8",
            type: QuestionType.DROPDOWN,
            instruction: "Fill in the blank for body protecting inflammation.",
            instructionAr: "اختر للمصطلح الدال على تفاعل الجسم ضد الجروح والعدوى:",
            sentenceParts: ["Chronic cellular ", " is a silent driver for several joint issues and metabolic disorders."],
            options: ["inflammation", "hydration", "ideal body weight"],
            correctAnswer: "inflammation",
            explanationAr: "الالتهاب المزمن (inflammation) يعد سبباً أساسياً للآلام الروماتيزمية وتصلب الشرايين وخسارة التناسق الخلوي للهضم."
          },
          {
            id: "u3-l4ex2-q9",
            type: QuestionType.DROPDOWN,
            instruction: "Fill in the blank for dietary volume of consumption.",
            instructionAr: "اختر لما يصف الحجم والوزن الكلي للمواد المستهلكة:",
            sentenceParts: ["To reduce chronic high blood pressure, patients must curtail their sodium ", "."],
            options: ["intake", "insulin", "immunity"],
            correctAnswer: "intake",
            explanationAr: "معدل الاستهلاك أو المدخول الغذائي (intake) المرتفع من الصوديوم يجب العمل على ضبطه وتخفيضه لصون الشرايين."
          },
          {
            id: "u3-l4ex2-q10",
            type: QuestionType.DROPDOWN,
            instruction: "Fill in the blank for target weight range.",
            instructionAr: "اختر لما يمثل الوزن المرجعي الذي يتطلع له الطبيب ليعافى المريض:",
            sentenceParts: ["A personal fitness calculator computes the ", " based on age, skeletal density, and height."],
            options: ["ideal body weight", "glycemic index", "diet plan"],
            correctAnswer: "ideal body weight",
            explanationAr: "الوزن المثالي الطبي (ideal body weight) هو المؤشر المستهدف لتفادي أخطار السمنة ومشاكل المفاصل الفخرية."
          }
        ]
      },
      {
        id: "l3-l4-ex3",
        name: "Exercise 3: Clinical Terms Scenarios & Choice",
        nameAr: "التمرين 3: سيناريوهات فسيولوجية وعلمية للمذاكرة المتقدمة",
        questions: [
          {
            id: "u3-l4ex3-q1",
            type: QuestionType.MCQ,
            instruction: "Scenario: A patient shows severe fatigue, pale skin, and low red blood counts. What element is lacking?",
            instructionAr: "سيناريو: مريض يشكو من شحوب شديد، تعب متواصل مع خفقان وتساقط شعر. ما المادة الناقصة؟",
            question: "This clinical presentation strongly points to a deficiency in:",
            options: [
              "Iron (الحديد الناقل للأكسجين)",
              "Insulin (الإنسولين)",
              "Glucose (سكر الدم)",
              "Inflammation (الالتهاب الخلوي)"
            ],
            correctAnswer: "Iron (الحديد الناقل للأكسجين)",
            explanationAr: "يتسبب نقص الحديد (Iron) في وهن كفاءة تسليم الأكسجين مما يحدث فقر دم وأنيميا وإعياء دائم بالخلايا."
          },
          {
            id: "u3-l4ex3-q2",
            type: QuestionType.MCQ,
            instruction: "Scenario: A doctor wants to review how fast white bread spikes blood sugar compared to whole oats. What index is used?",
            instructionAr: "سيناريو: يرغب الطبيب في إيضاح سرعة تدفق السكر للدم عند تناول خبر أبيض مقارنة بيول الشوفان البري:",
            question: "The standard tool for this evaluation is:",
            options: [
              "Glycemic index (مؤشر السكر الغذائي)",
              "Ideal body weight equation (معادلة الوزن)",
              "Iodine solution test (كاشف اليود)",
              "Insulin injection count (جرعة الإنسولين)"
            ],
            correctAnswer: "Glycemic index (مؤشر السكر الغذائي)",
            explanationAr: "يصنف 'glycemic index' الأطعمة حسب صعود سكر الدم، ويفضل دائماً الأطعمة ذات المؤشر المنخفض لمرضى السكر."
          },
          {
            id: "u3-l4ex3-q3",
            type: QuestionType.MCQ,
            instruction: "Scenario: A patient is sweating and dizzy because their blood sugar has dropped below 60 mg/dL. What substance is needed?",
            instructionAr: "سيناريو: مريض مصاب بدوار شديد وتعرق بارد وصداع بسبب نقص السكر الحاد بالدم تحت معدل الطبيعي:",
            question: "To reverse hypoglycemia, the patient needs immediate:",
            options: [
              "Glucose (الغلوكوز سريع الامتصاص)",
              "Insulin injection (حقنة إنسولين)",
              "Iodine mineral (يود طبيعي)",
              "Iron tablet (كبسولة حديد)"
            ],
            correctAnswer: "Glucose (الغلوكوز سريع الامتصاص)",
            explanationAr: "عند الهبوط الحاد لسكر الدم (Hypoglycemia)، يحتاج الجسم لمد عاجل من سكر الجلوكوز (Glucose) لاستعادة الوعي وحماية الدماغ."
          },
          {
            id: "u3-l4ex3-q4",
            type: QuestionType.MCQ,
            instruction: "Scenario: An endocrinologist is treating a clinical swelling of the neck (goiter) and slow body metabolism.",
            instructionAr: "سيناريو: طبيب غدد يشخص تضخم أسفل الحنجرة ومعدلات تبلد وهبوط كفاءة الجسم للأيض والنشاط:",
            question: "This issue commonly results from insufficient intake of:",
            options: [
              "Iodine (اليود المسؤول عن الغدة الدرقية)",
              "Insulin (الإنسولين)",
              "Iron (الحديد الطبي)",
              "Hydration (شرب المياه)"
            ],
            correctAnswer: "Iodine (اليود المسؤول عن الغدة الدرقية)",
            explanationAr: "يعمل اليود (Iodine) كحجر أساس لهرمونات الدرقية، وبدونه تتضخم الغدة (Goiter) ويختل الحرق الأيضي."
          },
          {
            id: "u3-l4ex3-q5",
            type: QuestionType.MCQ,
            instruction: "Scenario: After a minor knee injury, the joint becomes red, warm, and swollen to begin repairing.",
            instructionAr: "سيناريو: انتفاخ وإحمرار وتدفق دموي دافئ بمفصل الركبة كاستجابة فورية لبدء مكافحة إصابة وإصلاح التلف الأنسيجي:",
            question: "This physiological repair and defense response is known as:",
            options: [
              "Inflammation (الالتهاب)",
              "Hydration (الهيدرات وسوائل الأنسجة)",
              "Immunity (المناعة التلقائية)",
              "Glycemic index (مؤشر السكر)"
            ],
            correctAnswer: "Inflammation (الالتهاب)",
            explanationAr: "الالتهاب (Inflammation) هو آلية تحذير ودفاع ضرورية من الجسم لجمع الخلايا المناعية المصلحة لموضع الضرر."
          },
          {
            id: "u3-l4ex3-q6",
            type: QuestionType.MCQ,
            instruction: "Scenario: A dietitian establishes a target weight ranges of 70kg for a patient who currently weighs 110kg.",
            instructionAr: "سيناريو: تحديد وزن مستهدف مثالي ومثبت علمياً لمريض سمنة مفرطة لتقليل المضاعفات على الركبتين والقلب:",
            question: "This 70kg target is known inside nutrition clinics as the patient's:",
            options: [
              "Ideal body weight (الوزن المثالي المستهدف)",
              "Intake limit (الحد الأقصى اليومي)",
              "Glycemic index level (المؤشر السكري)",
              "Hydration status (مستوى الرطوبة بالأطراف)"
            ],
            correctAnswer: "Ideal body weight (الوزن المثالي المستهدف)",
            explanationAr: "يسمى هذا الوزن المرجعي المستند للطول والعمر 'ideal body weight' لرفع جودة حياة العميل."
          },
          {
            id: "u3-l4ex3-q7",
            type: QuestionType.MCQ,
            instruction: "Scenario: During medical screening, a client is found to produce insufficient hormone levels to pull glucose into body cells.",
            instructionAr: "سيناريو: فحص سريري يظهر عجز خلايا الجسم عن امتصاص السكر بسبب قلة الهرمون المحفز لبوابات الخلايا:",
            question: "This hormone that is lacking or ineffective is called:",
            options: [
              "Insulin (الإنسولين البنكرياسي)",
              "Go cold turkey (الإقلاع الكلي)",
              "Thyroid helper (مساعد الدرقية)",
              "Iron transport (حديد الدم)"
            ],
            correctAnswer: "Insulin (الإنسولين البنكرياسي)",
            explanationAr: "يبدأ سكر الدم بالارتفاع والخطورة عند غياب أو ضعف استجابة المستقبلات لهرمون الإنسولين (Insulin)."
          },
          {
            id: "u3-l4ex3-q8",
            type: QuestionType.MCQ,
            instruction: "Scenario: After recovering from a seasonal viral flu, a student is resistant to the same virus upon secondary exposure.",
            instructionAr: "سيناريو: طالب تعافى من نزلة برد فيروسية، فأصبح جسمه مقاوماً تماماً ورافضاً لنفس العدوى عند التماس الثاني:",
            question: "This learned bodily resistance is termed:",
            options: [
              "Immunity (المناعة المكتسبة)",
              "Inflammation (الالتهاب الخلوي)",
              "Hydration (رطوبة الخلايا)",
              "Glucose (سكر الوقاية)"
            ],
            correctAnswer: "Immunity (المناعة المكتسبة)",
            explanationAr: "المناعة (Immunity) تعتمد على خلايا ذاكرة بيولوجية تعزز خطوط الدفاع ضد العدوى لمنع تجدد المرض."
          },
          {
            id: "u3-l4ex3-q9",
            type: QuestionType.MCQ,
            instruction: "Scenario: An athlete complains of cramps, dry tongue, and dark concentration in urine output.",
            instructionAr: "سيناريو: رياضي يشكو من آلام عضلية جافة، لسان خشن، وتركيز بول غامق للغاية:",
            question: "The doctor prescribes immediate treatment to adjust their:",
            options: [
              "Hydration (الهيدرات وتوازن سوائل الخلايا)",
              "Iron levels (الحديد بالدم)",
              "Ideal body weight ratio (الوزن المثالي)",
              "Iodine content (نسب اليود بالدرقية)"
            ],
            correctAnswer: "Hydration (الهيدرات وتوازن سوائل الخلايا)",
            explanationAr: "الأعراض السابقة هي مؤشرات جفاف حرجة تتطلب معالجة طارئة بالترطيب وشرب سوائل إلكتروليتية (Hydration)."
          },
          {
            id: "u3-l4ex3-q10",
            type: QuestionType.MCQ,
            instruction: "Scenario: A pediatric study reviews the overall milliliters of milk and grams of food a child eats in 24 hours.",
            instructionAr: "سيناريو: دراسة تتبع كلي لعدد المليلترات من السوائل وجرامات الفيتامينات التي يستهلكها الطفل طيلة اليوم:",
            question: "This total daily measure of nutrients is the child's daily:",
            options: [
              "Intake (المدخول والاستهلاك الغذائي اليومي)",
              "Insulin dosage (جرعة الإنسولين)",
              "Glycemic index status (المؤشر النشوي)",
              "Go cold turkey program (البرنامج الفجائي)"
            ],
            correctAnswer: "Intake (المدخول والاستهلاك الغذائي اليومي)",
            explanationAr: "تعبّر كلمة 'Intake' الطبية عن كامل الحصص والكميات والسوائل التي عبرت جهاز المريض ووقعت في موازنته."
          }
        ]
      }
    ]
  }
];
