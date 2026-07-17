import { useState } from "react";
import { PROJECTS } from "../data";
import { Project } from "../types";
import { motion, AnimatePresence } from "motion/react";
import { X, Check, ArrowRight, Sparkles, Award } from "lucide-react";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-brand-card/30 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <div className="inline-block px-3 py-1 bg-brand-primary/10 text-brand-primary rounded font-semibold text-xs uppercase tracking-wider">
              Nuestros Éxitos
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-dark">
              Portafolio Destacado
            </h2>
            <p className="text-sm md:text-base text-brand-muted max-w-xl">
              Una muestra representativa de programas, investigaciones y tecnologías educativas aplicadas con éxito en entornos escolares reales.
            </p>
          </div>

          <a
            href="#diagnostic"
            className="group flex items-center gap-2 text-brand-primary font-bold text-sm hover:underline underline-offset-4"
          >
            <span>Probar Simulador Curricular</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-white border border-brand-border/30 rounded-lg overflow-hidden shadow-xs hover:shadow-md hover:border-brand-primary/40 transition-all duration-300 flex flex-col h-full"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] overflow-hidden bg-brand-surface">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-104"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-bold text-brand-primary border border-brand-border/20 shadow-xs uppercase tracking-wider">
                  {project.category}
                </div>
              </div>

              {/* Text Body */}
              <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-brand-dark group-hover:text-brand-primary transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-brand-muted leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-border/10 flex items-center justify-between text-xs font-bold text-brand-primary">
                  <span className="flex items-center gap-1.5 bg-brand-primary/5 px-2.5 py-1 rounded">
                    <Award className="w-3.5 h-3.5" />
                    <span>{project.impactMetric}</span>
                  </span>
                  <span className="text-xs font-bold text-brand-muted group-hover:text-brand-primary transition-colors flex items-center gap-1">
                    Ver Detalle
                    <span className="material-symbols-outlined text-sm font-semibold transition-transform group-hover:translate-x-0.5">
                      arrow_right_alt
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* High Fidelity Detail Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop blur with motion */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-brand-dark/40 backdrop-blur-xs"
            />

            {/* Modal Body Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-3xl bg-white rounded-lg overflow-hidden shadow-2xl border border-brand-border/40 z-10 max-h-[90vh] flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/95 backdrop-blur-md shadow-xs border border-brand-border/20 text-brand-dark hover:text-brand-primary hover:scale-105 transition-all z-20"
                aria-label="Cerrar"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Scrollable Modal Content */}
              <div className="overflow-y-auto">
                {/* Hero Banner inside Modal */}
                <div className="relative h-56 sm:h-64 bg-brand-surface flex items-end">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/40 to-transparent" />
                  <div className="relative p-6 sm:p-8 text-white space-y-2 w-full">
                    <span className="px-2.5 py-1 bg-brand-vibrant text-brand-primary text-[10px] font-bold rounded uppercase tracking-wider">
                      {selectedProject.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold leading-tight">
                      {selectedProject.title}
                    </h3>
                  </div>
                </div>

                {/* Info grids */}
                <div className="p-6 sm:p-8 space-y-6">
                  {/* Long descriptive text */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-extrabold uppercase tracking-widest text-brand-primary">
                      Introducción y Antecedentes
                    </h4>
                    <p className="text-xs sm:text-sm text-brand-dark leading-relaxed">
                      {selectedProject.longDescription}
                    </p>
                  </div>

                  {/* Cynthia's Role in project */}
                  <div className="p-4 rounded bg-brand-surface border border-brand-border/20 flex items-start gap-3">
                    <div className="p-2 bg-white rounded shadow-2xs text-brand-primary shrink-0">
                      <span className="material-symbols-outlined font-bold">assignment_ind</span>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] font-extrabold uppercase tracking-widest text-brand-muted">
                        Rol Profesional Desempeñado
                      </p>
                      <p className="text-xs font-bold text-brand-dark">
                        {selectedProject.role}
                      </p>
                    </div>
                  </div>

                  {/* Methodologies Tags */}
                  <div className="space-y-2">
                    <p className="text-[10px] font-extrabold uppercase tracking-widest text-brand-muted">
                      Metodologías e Innovaciones Aplicadas
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.methodologies.map((method, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-brand-pink-soft text-brand-primary rounded text-xs font-bold"
                        >
                          {method}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Concrete Outcomes / Metrics */}
                  <div className="space-y-3 pt-4 border-t border-brand-border/10">
                    <div className="flex items-center gap-2 text-brand-primary">
                      <Sparkles className="w-4 h-4" />
                      <h4 className="text-xs font-extrabold uppercase tracking-widest">
                        Impacto & Resultados Cuantificables
                      </h4>
                    </div>
                    <ul className="space-y-2.5">
                      {selectedProject.outcomes.map((outcome, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-brand-dark leading-relaxed">
                          <Check className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-6 bg-brand-surface border-t border-brand-border/30 flex justify-between items-center shrink-0">
                <span className="text-xs font-bold text-brand-muted">
                  Logro destacado de Cynthia Torres
                </span>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 bg-brand-primary hover:bg-brand-secondary text-white font-bold text-xs rounded shadow-xs"
                >
                  Cerrar Detalles
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
