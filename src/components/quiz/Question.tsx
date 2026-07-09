import type { Question, Answer } from "@/types/quiz";

interface QuestionProps {
  question: Question;
}

export default function Question({ question }: QuestionProps) {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">{question.text}</h2>

      <ul className="space-y-3">
        {question.answers.map((answer: Answer) => (
          <li key={answer.id}>
            <button className="w-full rounded-lg border p-4 text-left hover:bg-zinc-100">
              {answer.text}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
