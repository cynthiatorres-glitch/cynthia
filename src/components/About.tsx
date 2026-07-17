import { useState } from "react";
import { motion } from "motion/react";
import { Sparkles, Heart, Users, GraduationCap } from "lucide-react";

export default function About() {
  const [activePillar, setActivePillar] = useState<"innovacion" | "empatia" | "inclusion">("innovacion");

  const pillars = {
    innovacion: {
      title: "Tecnología con Propósito",
      icon: Sparkles,
      color: "text-brand-primary bg-brand-primary/10 border-brand-primary/20",
      quote: "La innovación no es llenar el aula de pantallas, sino transformar el rol del alumno de consumidor pasivo a creador activo. Usamos IA y recursos interactivos como andamios cognitivos, no como atajos cognitivos.",
      stat: "15+ recursos gamificados creados"
    },
    empatia: {
      title: "El Vínculo Humano",
      icon: Heart,
      color: "text-brand-pink-soft bg-brand-pink/20 border-brand-pink/30",
      quote: "Ningún aprendizaje significativo ocurre sin una conexión emocional previa. Mi rol es escuchar las dudas, celebrar el error como el primer paso del descubrimiento y fomentar un clima de confianza mutua.",
      stat: "100% de retención en proyectos"
    },
    inclusion: {
      title: "Diseño Universal (DUA)",
      icon: Users,
      color: "text-brand-secondary bg-brand-vibrant/10 border-brand-vibrant/20",
      quote: "Un aula inclusiva no simplifica la tarea, sino que diversifica los caminos para resolverla. Aplicar el Diseño Universal para el Aprendizaje asegura que cada mente brillante encuentre su canal ideal para brillar.",
      stat: "Adaptaciones curriculares para +500 alumnos"
    }
  };

  return (
    <section id="about" className="py-24 bg-brand-card/70 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual block with classroom photo and 5+ badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-lg overflow-hidden border border-brand-border/40 shadow-sm transition-transform duration-500 hover:scale-[1.01]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKncNGlRNRMkGioNoVMDyL5_269JyYfYMJ0p283UHgkjYi1oem22bazl-VNHcOOzaegxTMWe_pMtcWiffS-Tn12AcUmydVkoBHi7wpT54ba0D2niATaf6gea854cGSmdPfIhsaHa38z-tDVvTId7ZZ_9Q93h753avTVtH7xOvtNr-RLpFrFqNg4kNM4VLFSskLjOLZ6WC5pgQR53sIbiGBx7moHuJSGl36iseFtRGeJLbXNHNGfJX9CbaAvPve5ecmJQ"
                alt="Cynthia Torres Delgado interactuando con estudiantes en el aula"
                className="w-full h-auto object-cover max-h-[480px]"
                referrerPolicy="no-referrer"
              />
              {/* Overlay shading to match Academic Clarity style */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/10 to-transparent" />
            </div>

            {/* Float badge for Años de Votación/Experiencia */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute -bottom-6 -right-4 md:right-4 bg-white border border-brand-border/50 p-5 rounded shadow-md z-20 flex flex-col items-center text-center min-w-[140px]"
            >
              <span className="text-3xl font-extrabold text-brand-primary leading-none">5+</span>
              <span className="text-[11px] font-bold text-brand-muted tracking-wider uppercase mt-1">Años de Votación</span>
              <span className="text-[9px] text-brand-muted/70 font-semibold mt-0.5">y Consultoría Docente</span>
            </motion.div>
          </div>

          {/* Vision and Narrative Block */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block px-3 py-1 bg-brand-primary/10 text-brand-primary rounded font-semibold text-xs uppercase tracking-wider">
              Nuestra Visión
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-dark">
              Mi Vocación por la Enseñanza
            </h2>

            <p className="text-sm md:text-base text-brand-muted leading-relaxed">
              Desde mis primeros pasos en la educación, entendí que el aula no es solo un espacio físico, sino un ecosistema vibrante donde la curiosidad debe ser alimentada con herramientas precisas y una guía empática. Mi compromiso reside en diseñar puentes entre el conocimiento teórico y la práctica transformadora.
            </p>

            <p className="text-sm md:text-base text-brand-muted leading-relaxed">
              Me especializo en humanizar la tecnología educativa, asegurando que cada recurso digital o estrategia pedagógica sirva como un habilitador de inclusión y crecimiento personal para cada estudiante.
            </p>

            {/* Interactive Manifiesto Pedagógico tabs */}
            <div className="mt-8 pt-4 border-t border-brand-border/20">
              <h3 className="text-xs font-extrabold tracking-widest text-brand-muted uppercase mb-4">
                Manifiesto Pedagógico (Haz clic para explorar)
              </h3>

              {/* Tab headers */}
              <div className="flex gap-2">
                {(Object.keys(pillars) as Array<keyof typeof pillars>).map((pillarKey) => {
                  const Icon = pillars[pillarKey].icon;
                  const isActive = activePillar === pillarKey;
                  return (
                    <button
                      key={pillarKey}
                      onClick={() => setActivePillar(pillarKey)}
                      className={`flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded border text-xs font-bold transition-all ${
                        isActive
                          ? "bg-brand-primary text-white border-brand-primary shadow-sm scale-102"
                          : "bg-white text-brand-muted border-brand-border/30 hover:bg-brand-surface/30 hover:text-brand-primary"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="hidden sm:inline capitalize">{pillarKey}</span>
                    </button>
                  );
                })}
              </div>

              {/* Tab Content with Animation */}
              <div className="mt-4 p-5 bg-brand-surface/50 border border-brand-border/20 rounded min-h-[140px] flex flex-col justify-between">
                <p className="text-xs md:text-sm text-brand-dark italic leading-relaxed">
                  "{pillars[activePillar].quote}"
                </p>
                <div className="mt-4 flex items-center justify-between text-[11px] font-bold text-brand-muted tracking-wider uppercase border-t border-brand-border/10 pt-3">
                  <span className="flex items-center gap-1">
                    <GraduationCap className="w-3.5 h-3.5 text-brand-primary" />
                    <span>Pilar de Acción</span>
                  </span>
                  <span className="text-brand-primary">{pillars[activePillar].stat}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
