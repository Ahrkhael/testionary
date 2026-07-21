"use client";

import Link from "next/link";

export default function StartQuizButton({ id }: { id: string }) {
  const seed = crypto.randomUUID();

  localStorage.setItem(`quiz-${id}-seed`, seed);

  return <Link href={`${id}/test?seed=${seed}`}>Comenzar test</Link>;
}
