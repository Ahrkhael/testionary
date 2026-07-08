import { notFound } from "next/navigation";
import { quizzes } from "@/data/quizzes";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function QuizPage({ params }: PageProps) {
  const { id } = await params;

  const quiz = quizzes.find((quiz) => quiz.id === Number(id));

  if (!quiz) {
    notFound();
  }

  return (
    <main>
      <h1>{quiz.title}</h1>

      <p>Aquí irá el cuestionario.</p>

      <p>ID del tema: {quiz.id}</p>
    </main>
  );
}
