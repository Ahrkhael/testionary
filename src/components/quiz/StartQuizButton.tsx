"use client";

import { useRouter } from "next/navigation";

interface StartQuizButtonProps {
  id: string;
}

export default function StartQuizButton({ id }: StartQuizButtonProps) {
  const router = useRouter();

  const handleStart = () => {
    const session = {
      seed: crypto.randomUUID(),
      startedAt: Date.now(),
    };

    localStorage.setItem(`quiz-${id}-session`, JSON.stringify(session));

    router.push(`${id}/test?seed=${session.seed}`);
  };

  return <button onClick={handleStart}>Comenzar test</button>;
}
