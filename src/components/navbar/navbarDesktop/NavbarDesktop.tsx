import React, { FC } from "react";
import Link from "next/link";
import { quizRegistry } from "@/data/quizzes/registry";

const NavbarDesktop: FC = () => {
  const quizzes = Object.entries(quizRegistry).map(([id, quiz]) => ({
    id,
    title: quiz.title,
    description: quiz.description,
  }));

  return (
    <nav className="w-full h-full relative">
      <div className="h-full flex gap-x-[5dvw] justify-center items-center">
        <Link
          href="/"
          className="text-xl hover:text-(--font-color-menu-secondary)"
        >
          Inicio
        </Link>

        {quizzes.map((quiz) => (
          <Link
            key={quiz.id}
            href={`/tema/${quiz.id}`}
            className="text-xl hover:text-(--font-color-menu-secondary)"
          >
            Tema {quiz.id}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavbarDesktop;
