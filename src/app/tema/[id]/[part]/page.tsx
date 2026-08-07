import { notFound } from "next/navigation";
import { quizRegistry } from "@/data/quizzes/registry";

import StartQuizButton from "@/components/quiz/StartQuizButton";

type PageProps = {
  params: Promise<{
    id: string;
    part: string;
  }>;
};

export default async function QuizPage({ params }: PageProps) {
  const { id, part } = await params;

  const theme = quizRegistry[id as keyof typeof quizRegistry];

  if (!theme) {
    notFound();
  }

  const quiz = theme.parts[part as keyof typeof theme.parts];

  if (!quiz) {
    notFound();
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <main className="min-h-screen flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-20 px-16 sm:items-start">
        <section className="mx-auto flex w-full max-w-4xl flex-col gap-8">
          <header className="space-y-2 text-center">
            <p className="text-sm font-medium uppercase tracking-widest">
              Cuestionario
            </p>

            <h1 className="text-4xl font-bold">{quiz.title}</h1>

            <p>
              Pon a prueba tus conocimientos respondiendo las preguntas de este
              tema.
            </p>
          </header>

          <div className="rounded-xl border border-slate-200 p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold">Información</h2>

            <div className="space-y-2">
              <p>
                <span className="font-medium">Tema: </span>
                {quiz.title}
              </p>

              <p>
                <span className="font-medium">Parte: </span>
                {part}
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-dashed border-slate-300 p-8 text-center">
            <StartQuizButton id={id} />
          </div>
        </section>
      </main>
    </div>
  );
}
