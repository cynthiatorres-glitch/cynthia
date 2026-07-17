import { motion } from "motion/react";
import { ArrowRight, BookOpen } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-28 pb-16 bg-gradient-to-b from-brand-surface via-brand-surface/70 to-brand-card/30">
      {/* Decorative floating blur spheres for the 'Academic Clarity' mood */}
      <div className="absolute top-24 right-1/4 w-72 h-72 bg-brand-vibrant/10 rounded-full filter blur-3xl -z-10" />
      <div className="absolute bottom-12 left-1/4 w-96 h-96 bg-brand-pink/20 rounded-full filter blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Text Content Block */}
        <div className="lg:col-span-7 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-primary/10 border border-brand-primary/15 text-brand-primary font-semibold text-xs tracking-wider uppercase"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Portafolio Docente & Tecnológico</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brand-dark leading-tight"
          >
            Transformando la Educación a través de la{" "}
            <span className="text-brand-primary relative inline-block">
              Innovación
              <span className="absolute bottom-1 left-0 w-full h-1 bg-brand-vibrant/60 -z-10"></span>
            </span>{" "}
            y la <span className="text-brand-secondary font-extrabold italic">Empatía</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-brand-muted leading-relaxed max-w-xl"
          >
            Comprometida con el desarrollo de experiencias de aprendizaje significativas que integren tecnología instruccional, inclusión universal y un enfoque profundamente humano en el aula del siglo XXI.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a
              href="#portfolio"
              className="group flex items-center gap-2 px-6 py-3.5 bg-brand-primary hover:bg-brand-secondary text-white font-semibold text-sm rounded shadow transition-all hover:translate-y-[-1px] active:translate-y-0"
            >
              <span>Ver mis Proyectos</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#trajectory"
              className="px-6 py-3.5 border-2 border-brand-primary/20 hover:border-brand-primary/50 text-brand-primary font-semibold text-sm rounded transition-all hover:bg-brand-primary/5"
            >
              Mi Experiencia
            </a>
          </motion.div>
        </div>

        {/* Profile Image with organic decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-5 relative flex justify-center"
        >
          <div className="relative w-72 h-72 sm:w-85 sm:h-85 lg:w-96 lg:h-96">
            {/* Soft Pink decorative backplate */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-pink/50 to-brand-vibrant/30 rounded-xl transform rotate-3 scale-102 -z-10 shadow-sm" />

            {/* Main Image Frame with Ambient Shadow */}
            <div className="w-full h-full rounded-lg overflow-hidden border-4 border-white bg-white shadow-md relative z-10 transition-transform duration-500 hover:rotate-[-1deg]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNMrd7E93FQ8b1iYMm_MCZ-JB-meMPqjVLlFWaanM2MCDKrMqKO2eHI0XizBJXZxM-kwMYBGSp_hlGKyJTlZVF3ALP0I9VEnpOLE20Ryi7IgE9IOtUyepa2SxdL_EVqRc9RA8nawg4PrliA0TQI3HdHXzury0yAjFV5FDIqg0pqVJsimk50nIEfWEudYEVkp_JRXPyFoNS7rcso9X1h-kOHcDOjml7txTEfImvpJ1OUzfogD5AnC-jvaJdMY4EVtC7iQ"
                alt="Retrato profesional de Cynthia Torres Delgado"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Quick Micro-Credentials floating card */}
            <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-md p-4 rounded border border-brand-border/40 shadow-sm z-20 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-vibrant flex items-center justify-center text-brand-primary">
                <span className="material-symbols-outlined font-bold">verified</span>
              </div>
              <div>
                <p className="text-xs font-bold text-brand-dark">Cynthia Torres D.</p>
                <p className="text-[10px] text-brand-muted font-medium">Asesora de Innovación</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
