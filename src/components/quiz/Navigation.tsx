interface NavigationProps {
  currentIndex: number;
  totalQuestions: number;
  canGoNext: boolean;
  canGoPrevious: boolean;
  onNext: () => void;
  onPrevious: () => void;
}

export default function Navigation({
  currentIndex,
  totalQuestions,
  canGoNext,
  canGoPrevious,
  onNext,
  onPrevious,
}: NavigationProps) {
  return (
    <div className="mt-8 flex items-center justify-between">
      <button
        type="button"
        onClick={onPrevious}
        disabled={!canGoPrevious}
        className="rounded-lg border px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50"
      >
        ← Anterior
      </button>

      <span className="text-sm text-slate-500">
        Pregunta {currentIndex + 1} de {totalQuestions}
      </span>

      <button
        type="button"
        onClick={onNext}
        disabled={!canGoNext}
        className="rounded-lg border px-4 py-2 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Siguiente →
      </button>
    </div>
  );
}
