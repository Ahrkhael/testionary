import { notFound } from "next/navigation";
import { quizRegistry } from "@/data/quizzes/registry";
import Quiz from "@/components/quiz/Quiz";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function QuizPage({ params }: PageProps) {
  const { id } = await params;

  const quiz = quizRegistry[id as keyof typeof quizRegistry];

  if (!quiz) {
    notFound();
  }

  const quizData = (await quiz.load()).default;

  return (
    <main className="min-h-screen px-6 py-12">
      <section className="mx-auto flex w-full max-w-4xl flex-col gap-8">
        <header className="space-y-2 text-center">
          <p className="text-sm font-medium uppercase tracking-widest">
            Cuestionario
          </p>

          <h1 className="text-4xl font-bold">{quiz.title}</h1>

          <p className="">
            Pon a prueba tus conocimientos respondiendo las preguntas de este
            tema.
          </p>
        </header>

        <div className="rounded-xl border border-slate-200 p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold">Información</h2>

          <div className="space-y-2">
            <p>
              <span className="font-medium">Tema:</span> {quizData.title}
            </p>

            <p>
              <span className="font-medium">ID:</span> {quizData.id}
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-dashed border-slate-300 p-8 text-center">
          <Quiz quiz={quizData} />
        </div>
      </section>
    </main>
  );
}
