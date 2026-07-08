import Link from "next/link";
import { quizzes } from "@/data/quizzes";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
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
                    <h2>{quiz.title}</h2>
                    <p>{quiz.description}</p>
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
