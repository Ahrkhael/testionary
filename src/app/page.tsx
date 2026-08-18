import Link from "next/link";
import { quizRegistry } from "@/data/quizzes/registry";

export default function Home() {
  const quizzes = Object.entries(quizRegistry).map(([id, quiz]) => ({
    id,
    title: quiz.title,
    description: quiz.description,
  }));

  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-lg text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Bienvenido/a a tu plataforma de test de confianza
          </h1>
          <p className="max-w-lg text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Por favor, selecciona un test
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <nav>
            <ul>
              {quizzes.map((quiz) => (
                <li key={quiz.id}>
                  <Link href={`tema/${quiz.id}`}>
                    <div className="rounded-xl border border-slate-200 p-6 m-6 shadow-sm">
                      <h2>
                        Tema {quiz.id}: {quiz.title}
                      </h2>
                      <p>{quiz.description}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </main>
    </div>
  );
}
