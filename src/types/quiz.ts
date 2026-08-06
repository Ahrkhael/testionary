export interface Answer {
  id: number;
  text: string;
  isCorrect: boolean;
}

export type AnswerState = "default" | "selected" | "correct" | "incorrect";

export interface Question {
  id: number;
  text: string;
  answers: Answer[];
}

export interface Quiz {
  id: number;
  questions: Question[];
}
