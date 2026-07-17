import { useState } from "react";
import { SPECIALIZATIONS } from "../data";
import { ArrowRight, ChevronRight, Check } from "lucide-react";

export default function Expertise() {
  const [selectedId, setSelectedId] = useState<string>("curricular");

  const selectedExpertise = SPECIALIZATIONS.find((s) => s.id === selectedId) || SPECIALIZATIONS[0];

  // Specific methodology/practical checklists for each area to offer dynamic pedagogical value
  const expertiseChecklists: Record<string, { subtitle: string; tools: string[]; frameworks: string[] }> = {
    curricular: {
      subtitle: "ABP Avanzado y Gamificación de Alto Impacto",
      tools: ["Clascraft", "Kahoot! Premium", "Genially", "Trello for Education"],
      frameworks: ["Aprendizaje Basado en Proyectos (Buck Institute)", "Octalysis Gamification Framework", "Taxonomía de Bloom Revisada"]
    },
    tecnoeducacion: {
      subtitle: "Ecosistemas Virtuales y Multimedia Interactiva",
      tools: ["Moodle LMS", "Canvas Catalog", "H5P Interactive Suite", "Articulate Storyline 360"],
      frameworks: ["Modelo ADDIE", "SAMR (Substitution, Augmentation, Modification, Redefinition)", "Teoría de la Carga Cognitiva de Sweller"]
    },
    inclusion: {
      subtitle: "Aulas Diversas y Accesibilidad Universal",
      tools: ["Lectores de pantalla integrados", "Subtitulado automatizado", "Microsoft Learning Tools"],
      frameworks: ["Diseño Universal para el Aprendizaje (DUA - CAST)", "Enfoque Socio-Afectivo de Integración", "Adaptación de Acceso Curricular Significativo"]
    },
    evaluacion: {
      subtitle: "Evaluación para el Aprendizaje y Retroalimentación Efectiva",
      tools: ["Google Forms Rubrics", "CoRubric", "Seesaw Digital Portfolios"],
      frameworks: ["Evaluación Formativa de Black & Wiliam", "Rúbricas de Desempeño por Niveles de Logro", "Autoevaluación Guiada y Portafolio de Evidencias"]
    }
  };

  const details = expertiseChecklists[selectedId] || expertiseChecklists.curricular;

  return (
    <section id="expertise" className="py-24 bg-brand-surface scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-dark mb-4">
            Áreas de Especialización
          </h2>
          <p className="text-sm md:text-base text-brand-muted leading-relaxed">
            Combinando rigor académico con creatividad estratégica para diseñar metodologías robustas que responden a los desafíos educativos contemporáneos.
          </p>
        </div>

        {/* Core Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Specialization Cards (Left/Top) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SPECIALIZATIONS.map((spec) => {
              const isSelected = selectedId === spec.id;
              return (
                <div
                  key={spec.id}
                  onClick={() => setSelectedId(spec.id)}
                  className={`cursor-pointer p-6 rounded border transition-all duration-300 ${
                    isSelected
                      ? "bg-white border-brand-primary shadow-sm ring-1 ring-brand-primary/20 scale-101"
                      : "bg-white/80 border-brand-border/30 hover:border-brand-primary/40 hover:shadow-xs"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                      <span className="material-symbols-outlined font-semibold text-xl">
                        {spec.icon}
                      </span>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 text-brand-muted transition-transform ${
                        isSelected ? "rotate-90 text-brand-primary" : ""
                      }`}
                    />
                  </div>

                  <h3 className="text-base font-bold text-brand-dark mb-2">
                    {spec.title}
                  </h3>
                  
                  <p className="text-xs text-brand-muted leading-relaxed mb-4 line-clamp-3">
                    {spec.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-brand-border/10">
                    {spec.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-brand-pink-soft text-brand-primary font-bold text-[10px] tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Practical Framework & Resources Panel (Right/Bottom) */}
          <div className="lg:col-span-5 bg-white border border-brand-border/40 rounded p-8 shadow-xs">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-brand-primary">
                <span className="material-symbols-outlined font-bold text-xl">
                  {selectedExpertise.icon}
                </span>
                <span className="text-xs font-extrabold uppercase tracking-widest">
                  Metodología Detallada
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-brand-dark leading-snug">
                  {selectedExpertise.title}
                </h3>
                <p className="text-xs font-semibold text-brand-primary mt-1">
                  {details.subtitle}
                </p>
              </div>

              <p className="text-xs text-brand-muted leading-relaxed">
                {selectedExpertise.description}
              </p>

              {/* Frameworks List */}
              <div className="space-y-3 pt-3 border-t border-brand-border/20">
                <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-brand-muted">
                  Bases Teóricas & Marcos
                </h4>
                <ul className="space-y-2">
                  {details.frameworks.map((framework, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-brand-dark">
                      <Check className="w-3.5 h-3.5 text-brand-primary shrink-0 mt-0.5" />
                      <span>{framework}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies / Tools list */}
              <div className="space-y-2 pt-2">
                <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-brand-muted">
                  Tecnologías & Recursos Clave
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {details.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-brand-surface border border-brand-border/35 rounded text-[10px] text-brand-muted font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
