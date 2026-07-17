import { useState } from "react";
import { EXPERIENCE_TIMELINE } from "../data";
import { motion } from "motion/react";
import { Calendar, Briefcase, GraduationCap, ChevronRight } from "lucide-react";

export default function Trajectory() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string>("exp1");

  return (
    <section id="trajectory" className="py-24 bg-brand-surface/20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-block px-3 py-1 bg-brand-primary/10 text-brand-primary rounded font-semibold text-xs uppercase tracking-wider mb-3">
            Trayectoria Profesional
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-dark mb-4">
            Evolución y Liderazgo Pedagógico
          </h2>
          <p className="text-sm md:text-base text-brand-muted leading-relaxed">
            Cronología de mi carrera impulsando metodologías activas, adaptaciones curriculares exitosas y coordinaciones tecnológicas escolares.
          </p>
        </div>

        {/* Vertical Stepper Timeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Timeline track (Left/Top) */}
          <div className="lg:col-span-7 relative pl-8 md:pl-12">
            {/* The vertical Forest Green line */}
            <div className="absolute left-[19px] md:left-[27px] top-4 bottom-4 w-1.5 bg-brand-primary rounded-full" />

            <div className="space-y-12">
              {EXPERIENCE_TIMELINE.map((item, index) => {
                const isSelected = selectedId === item.id;
                const isHovered = hoveredId === item.id;

                return (
                  <div
                    key={item.id}
                    className="relative cursor-pointer group"
                    onClick={() => setSelectedId(item.id)}
                    onMouseEnter={() => setHoveredId(item.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    {/* Stepper node: Vibrant Green (#58ec03) outer ring with inner Forest Green core */}
                    <div className="absolute left-[-26px] md:left-[-34px] top-1.5 z-10">
                      <div
                        className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isSelected
                            ? "bg-brand-vibrant ring-4 ring-brand-primary/30 scale-110"
                            : "bg-white border-2 border-brand-primary"
                        }`}
                      >
                        <div
                          className={`w-2.5 h-2.5 md:w-3.5 md:h-3.5 rounded-full transition-colors duration-300 ${
                            isSelected ? "bg-brand-primary" : "bg-brand-vibrant"
                          }`}
                        />
                      </div>
                    </div>

                    {/* Step Card */}
                    <div
                      className={`p-6 rounded border transition-all duration-300 ml-4 ${
                        isSelected
                          ? "bg-white border-brand-primary shadow-xs ring-1 ring-brand-primary/10"
                          : "bg-white/40 border-brand-border/25 hover:bg-white hover:border-brand-primary/30"
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-primary uppercase tracking-wider">
                          <Calendar className="w-3.5 h-3.5" />
                          {item.year}
                        </span>
                        <span className="text-[10px] bg-brand-primary/5 text-brand-primary font-extrabold px-2.5 py-0.5 rounded tracking-wide uppercase">
                          {item.institution.split(" ")[0]}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-brand-dark group-hover:text-brand-primary transition-colors">
                        {item.role}
                      </h3>
                      
                      <p className="text-xs text-brand-muted font-semibold mt-1">
                        {item.institution}
                      </p>

                      <p className="text-xs text-brand-muted leading-relaxed mt-3 line-clamp-2 sm:line-clamp-none">
                        {item.description}
                      </p>

                      {/* Display quick pills for mobile, hidden when selected detail panel is visible on desktop */}
                      <div className="flex flex-wrap gap-1 mt-4 lg:hidden">
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-[9px] bg-brand-surface px-2 py-0.5 rounded text-brand-muted font-semibold border border-brand-border/10"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Detailed Skill & Experience Inspector (Right/Bottom) */}
          <div className="lg:col-span-5 bg-white border border-brand-border/40 rounded p-8 sticky top-28 shadow-xs">
            {(() => {
              const currentItem = EXPERIENCE_TIMELINE.find((i) => i.id === selectedId) || EXPERIENCE_TIMELINE[0];
              return (
                <div className="space-y-6">
                  <div className="flex items-center gap-2.5 text-brand-primary">
                    <Briefcase className="w-5 h-5" />
                    <span className="text-xs font-extrabold uppercase tracking-widest">
                      Detalle de Gestión
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-brand-dark leading-snug">
                      {currentItem.role}
                    </h3>
                    <p className="text-xs text-brand-primary font-bold mt-1">
                      {currentItem.institution}
                    </p>
                  </div>

                  <p className="text-xs text-brand-muted leading-relaxed">
                    {currentItem.description}
                  </p>

                  <div className="pt-4 border-t border-brand-border/15 space-y-3">
                    <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-brand-muted flex items-center gap-1">
                      <GraduationCap className="w-3.5 h-3.5 text-brand-primary" />
                      Competencias y Habilidades Consolidadas
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {currentItem.skills.map((skill, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-1.5 p-2 rounded bg-brand-surface/60 border border-brand-border/15 text-xs text-brand-dark"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                          <span className="font-medium truncate">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* High Fidelity Visual Quote reflecting the Cynthia's pedagogical persona */}
                  <div className="mt-4 p-4 rounded bg-brand-pink-soft/20 border-l-4 border-brand-primary italic text-xs text-brand-muted leading-relaxed">
                    "Durante mi estancia en {currentItem.institution}, logramos articular nuevas tecnologías bajo un rigor académico inalterado."
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </div>
    </section>
  );
}
