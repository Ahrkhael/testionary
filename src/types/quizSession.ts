export interface QuizSession {
  seed: string;
  startedAt: number;
  finishedAt: number | null;
  elapsedTime: number | null;
}
