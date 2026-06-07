/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { lessonsData as unit1Lessons } from "./dataUnit1";
import { lessonsData as unit2Lessons } from "./dataUnit2";
import { lessonsData as unit3Lessons } from "./dataUnit3";
import { lessonsData as unit4Lessons } from "./dataUnit4";
import { Lesson } from "./types";

export const lessonsData: Lesson[] = [
  ...unit1Lessons,
  ...unit2Lessons,
  ...unit3Lessons,
  ...unit4Lessons
];
