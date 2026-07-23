"use client";

import Link from "next/link";

export default function StartQuizButton({ id }: { id: string }) {
  function handleStart() {
    const seed = crypto.randomUUID();

    localStorage.setItem(`quiz-${id}-seed`, seed);
    localStorage.setItem(`quiz-${id}-startedAt`, Date.now().toString());
  }

  const seed =
    typeof window !== "undefined"
      ? localStorage.getItem(`quiz-${id}-seed`)
      : "";

  return (
    <Link href={`${id}/test?seed=${seed}`} onClick={handleStart}>
      Comenzar test
    </Link>
  );
}
