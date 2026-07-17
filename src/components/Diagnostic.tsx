import { useState } from "react";
import { PEDAGOGICAL_QUIZ_QUESTIONS, PEDAGOGICAL_PROFILES } from "../data";
import { ClipboardCheck, RotateCcw, Sparkles, BookOpen, Check, ThumbsUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Diagnostic() {
  const [stage, setStage] = useState<"intro" | "quiz" | "result">("intro");
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [resultProfile, setResultProfile] = useState<keyof typeof PEDAGOGICAL_PROFILES>("curricular");

  const startQuiz = () => {
    setAnswers([]);
    setCurrentQuestionIdx(0);
    setStage("quiz");
  };

  const handleAnswerSelect = (type: string) => {
    const updatedAnswers = [...answers, type];
    setAnswers(updatedAnswers);

    if (currentQuestionIdx < PEDAGOGICAL_QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIdx((prev) => prev + 1);
    } else {
      // Calculate profile results (most frequent type)
      const counts: Record<string, number> = {};
      let maxType: keyof typeof PEDAGOGICAL_PROFILES = "curricular";
      let maxCount = 0;

      updatedAnswers.forEach((ans) => {
        counts[ans] = (counts[ans] || 0) + 1;
        if (counts[ans] > maxCount) {
          maxCount = counts[ans];
          maxType = ans as keyof typeof PEDAGOGICAL_PROFILES;
        }
      });

      setResultProfile(maxType);
      setStage("result");
    }
  };

  return (
    <section id="diagnostic" className="py-24 bg-brand-surface scroll-mt-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Module Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-brand-primary/10 border border-brand-primary/15 text-brand-primary font-bold text-xs uppercase tracking-wider">
            <ClipboardCheck className="w-3.5 h-3.5" />
            <span>Herramienta Interactiva</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-dark">
            Autodiagnóstico Pedagógico
          </h2>
          <p className="text-sm text-brand-muted max-w-xl mx-auto">
            ¿Cuál es tu enfoque educativo predominante? Responde nuestro breve test interactivo y descubre tu perfil de enseñanza junto con recomendaciones prácticas.
          </p>
        </div>

        {/* Diagnostic Card Container */}
        <div className="bg-white border border-brand-border/40 rounded shadow-xs p-8 md:p-12 relative overflow-hidden min-h-[380px] flex flex-col justify-between">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-primary via-brand-vibrant to-brand-pink" />

          <AnimatePresence mode="wait">
            {stage === "intro" && (
              <motion.div
                key="intro"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6 flex flex-col items-center text-center justify-center py-6"
              >
                <div className="w-16 h-16 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                  <span className="material-symbols-outlined text-4xl font-semibold">psychology</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-brand-dark">
                    Descubre tu Estilo de Enseñanza del Siglo XXI
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-muted max-w-lg leading-relaxed">
                    Este autodiagnóstico analiza tus prioridades instruccionales basadas en las pautas del Aprendizaje Basado en Proyectos (ABP), la tecnoeducación interactiva y el Diseño Universal para el Aprendizaje (DUA).
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-brand-muted border-t border-brand-border/20 pt-6 w-full max-w-md">
                  <span className="flex items-center gap-1">
                    <Check className="w-3.5 h-3.5 text-brand-primary" /> 4 Preguntas Rápidas
                  </span>
                  <span className="flex items-center gap-1">
                    <Check className="w-3.5 h-3.5 text-brand-primary" /> Sin Registro Requerido
                  </span>
                  <span className="flex items-center gap-1">
                    <Check className="w-3.5 h-3.5 text-brand-primary" /> Reporte Inmediato
                  </span>
                </div>

                <button
                  onClick={startQuiz}
                  className="px-8 py-3.5 bg-brand-primary hover:bg-brand-secondary text-white font-bold text-sm rounded shadow-sm transition-all hover:translate-y-[-1px]"
                >
                  Iniciar Autodiagnóstico
                </button>
              </motion.div>
            )}

            {stage === "quiz" && (
              <motion.div
                key="quiz"
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                className="space-y-6"
              >
                {/* Question progress and tracker */}
                <div className="flex justify-between items-center text-xs font-bold text-brand-muted uppercase tracking-wider">
                  <span>Pregunta {currentQuestionIdx + 1} de {PEDAGOGICAL_QUIZ_QUESTIONS.length}</span>
                  <span className="text-brand-primary">
                    {Math.round(((currentQuestionIdx) / PEDAGOGICAL_QUIZ_QUESTIONS.length) * 100)}% Completado
                  </span>
                </div>

                {/* Question Progress bar */}
                <div className="w-full bg-brand-surface h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-brand-primary h-full transition-all duration-300"
                    style={{
                      width: `${((currentQuestionIdx + 1) / PEDAGOGICAL_QUIZ_QUESTIONS.length) * 100}%`
                    }}
                  />
                </div>

                <h3 className="text-base sm:text-lg font-bold text-brand-dark pt-2 leading-snug">
                  {PEDAGOGICAL_QUIZ_QUESTIONS[currentQuestionIdx].question}
                </h3>

                {/* Options List */}
                <div className="space-y-3 pt-2">
                  {PEDAGOGICAL_QUIZ_QUESTIONS[currentQuestionIdx].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(option.type)}
                      className="w-full text-left p-4 rounded border border-brand-border/30 bg-brand-surface/40 hover:bg-white hover:border-brand-primary hover:shadow-xs text-xs sm:text-sm text-brand-dark transition-all duration-250 flex items-center gap-3 active:scale-99"
                    >
                      <span className="w-6 h-6 rounded-full bg-brand-primary/10 flex items-center justify-center font-bold text-xs text-brand-primary shrink-0">
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span>{option.text}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {stage === "result" && (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="space-y-6"
              >
                {/* Profile Badge Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-brand-border/20">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0">
                      <span className="material-symbols-outlined text-2xl font-semibold">
                        {PEDAGOGICAL_PROFILES[resultProfile].icon}
                      </span>
                    </div>
                    <div>
                      <p className="text-[10px] font-extrabold uppercase tracking-widest text-brand-muted">
                        Tu Estilo Pedagógico Principal es
                      </p>
                      <h3 className="text-lg font-bold text-brand-dark">
                        {PEDAGOGICAL_PROFILES[resultProfile].title}
                      </h3>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded bg-brand-vibrant/20 border border-brand-vibrant/40 text-brand-primary font-bold text-[10px] tracking-wider uppercase">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Perfil Innovador</span>
                  </span>
                </div>

                {/* Profile description */}
                <div className="space-y-4">
                  <p className="text-xs sm:text-sm text-brand-dark leading-relaxed">
                    {PEDAGOGICAL_PROFILES[resultProfile].description}
                  </p>

                  {/* Recommendations */}
                  <div className="p-5 bg-brand-surface rounded border border-brand-border/20 space-y-2.5">
                    <h4 className="text-xs font-bold text-brand-primary flex items-center gap-1.5 uppercase tracking-wide">
                      <BookOpen className="w-4 h-4" />
                      Plan de Acción Recomendado por Cynthia:
                    </h4>
                    <p className="text-xs text-brand-muted leading-relaxed">
                      {PEDAGOGICAL_PROFILES[resultProfile].recommendation}
                    </p>
                  </div>
                </div>

                {/* Action steps */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-brand-border/20">
                  <div className="flex items-center gap-2 text-xs text-brand-muted">
                    <ThumbsUp className="w-4 h-4 text-brand-primary" />
                    <span>¡Gran diagnóstico! Agenda cita para profundizar.</span>
                  </div>

                  <div className="flex gap-3 w-full sm:w-auto">
                    <button
                      onClick={startQuiz}
                      className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 border border-brand-border/40 hover:bg-brand-surface text-brand-muted font-bold text-xs rounded transition-all"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Repetir Test</span>
                    </button>
                    <a
                      href="#contact"
                      className="flex-1 sm:flex-initial text-center px-6 py-2.5 bg-brand-primary hover:bg-brand-secondary text-white font-bold text-xs rounded shadow-xs transition-all"
                    >
                      Consultar con Cynthia
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
