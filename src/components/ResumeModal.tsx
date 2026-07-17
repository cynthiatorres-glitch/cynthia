import { X, Award, MapPin, Phone, Mail, GraduationCap, Printer, Download } from "lucide-react";
import { motion } from "motion/react";

interface ResumeModalProps {
  onClose: () => void;
}

export default function ResumeModal({ onClose }: ResumeModalProps) {
  const handlePrint = () => {
    window.print();
  };

  const handleExportJSON = () => {
    const data = {
      nombre: "Cynthia Torres Delgado",
      profesion: "Especialista en Innovación Educativa, Diseño Curricular e Inclusión (DUA)",
      ubicacion: "Madrid, España",
      email: "hola@cynthiatorres.edu",
      linkedin: "linkedin.com/in/cynthiatorresd",
      estudios: [
        {
          titulo: "Máster en Tecnología Educativa y Competencias Digitales Docentes",
          institucion: "Universidad Internacional de Tecnología",
          año: "2018"
        },
        {
          titulo: "Grado Universitario en Educación y Pedagogía con Mención en Innovación",
          institucion: "Universidad Complutense de Madrid",
          año: "2016"
        }
      ],
      certificaciones: [
        "Certified Universal Design for Learning Specialist (CAST DUA)",
        "Google Certified Educator - Level 1 & 2",
        "Especialista Certificado en Gamificación y Aprendizaje Basado en Proyectos (ABP)"
      ],
      experiencia: [
        "Coordinadora de Innovación Pedagógica (2024-Presente)",
        "Especialista en Diseño Instruccional y LMS (2022-2024)",
        "Docente y Mentora de Aula de Integración (2020-2022)"
      ]
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "CV-Cynthia-Torres-Delgado.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto bg-brand-dark/50 backdrop-blur-xs">
      {/* Background click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="relative w-full max-w-4xl bg-white rounded-lg shadow-2xl border border-brand-border/40 z-10 flex flex-col max-h-[90vh]"
      >
        {/* Header toolbar */}
        <div className="p-4 bg-brand-surface border-b border-brand-border/30 flex justify-between items-center shrink-0">
          <div className="flex items-center gap-1.5 text-brand-primary">
            <Award className="w-5 h-5" />
            <span className="text-xs font-extrabold uppercase tracking-widest">Currículum Vitae Completo</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 rounded bg-white border border-brand-border/30 text-brand-muted hover:text-brand-primary hover:bg-brand-surface transition-colors flex items-center gap-1.5 text-xs font-bold"
              title="Imprimir o guardar en PDF"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Imprimir / PDF</span>
            </button>
            <button
              onClick={handleExportJSON}
              className="p-2 rounded bg-white border border-brand-border/30 text-brand-muted hover:text-brand-primary hover:bg-brand-surface transition-colors flex items-center gap-1.5 text-xs font-bold"
              title="Descargar datos en formato JSON"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Exportar JSON</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-brand-border/20 text-brand-dark transition-colors"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Curriculum content */}
        <div className="overflow-y-auto p-6 md:p-10 text-brand-dark space-y-8 print:p-0">
          {/* Resume Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 border-b border-brand-border/20">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-brand-primary">
                Cynthia Torres Delgado
              </h2>
              <p className="text-xs sm:text-sm font-bold text-brand-muted mt-1">
                Especialista en Innovación Educativa, Diseño Curricular e Inclusión (DUA)
              </p>
            </div>
            
            {/* Direct metadata list */}
            <div className="text-xs text-brand-muted space-y-1 bg-brand-surface/50 p-3.5 rounded border border-brand-border/15">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-brand-primary" />
                <span>Madrid, España (Disponibilidad global remota)</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-brand-primary" />
                <span>hola@cynthiatorres.edu</span>
              </p>
            </div>
          </div>

          {/* Academic Summary */}
          <div className="space-y-4">
            <h3 className="text-sm font-extrabold uppercase tracking-widest text-brand-primary border-b border-brand-border/10 pb-1">
              Perfil Profesional
            </h3>
            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
              Pedagoga e investigadora con más de 5 años coordinando la implementación de programas educativos con metodologías activas e integrando de manera ética la tecnoeducación. Experta en el marco del Diseño Universal para el Aprendizaje (DUA), garantizando accesibilidad cognitiva y metodológica. Creadora de múltiples programas interactivos y suites multimedia de alta satisfacción escolar.
            </p>
          </div>

          {/* Main sections layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left: Education & Certs */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xs font-extrabold uppercase tracking-widest text-brand-primary border-b border-brand-border/10 pb-1 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" />
                  Educación Formal
                </h3>

                <div className="space-y-4">
                  <div className="space-y-1">
                    <span className="text-[10px] bg-brand-primary/10 text-brand-primary font-bold px-2 py-0.5 rounded">
                      2018
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-brand-dark pt-1">
                      Máster en Tecnología Educativa y Competencias Digitales Docentes
                    </h4>
                    <p className="text-xs text-brand-muted">
                      Universidad Internacional de Tecnología
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] bg-brand-primary/10 text-brand-primary font-bold px-2 py-0.5 rounded">
                      2016
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-brand-dark pt-1">
                      Grado Universitario en Educación y Pedagogía con Mención en Innovación
                    </h4>
                    <p className="text-xs text-brand-muted">
                      Universidad Complutense de Madrid
                    </p>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="space-y-4">
                <h3 className="text-xs font-extrabold uppercase tracking-widest text-brand-primary border-b border-brand-border/10 pb-1 flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  Certificaciones Clave
                </h3>
                <ul className="space-y-2 text-xs text-brand-dark">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-1.5 shrink-0" />
                    <span>Certified Universal Design for Learning Specialist (CAST DUA)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-1.5 shrink-0" />
                    <span>Google Certified Educator - Nivel 1 & 2</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-1.5 shrink-0" />
                    <span>Especialista Certificado en Gamificación y ABP Avanzado</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right: Flagship Achievements */}
            <div className="space-y-4">
              <h3 className="text-xs font-extrabold uppercase tracking-widest text-brand-primary border-b border-brand-border/10 pb-1 flex items-center gap-2">
                <Award className="w-4 h-4" />
                Hitos de Liderazgo Pedagógico
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-brand-muted leading-relaxed">
                <div className="p-4 bg-brand-surface/40 rounded border border-brand-border/15 space-y-1">
                  <h4 className="font-bold text-brand-dark">Implementación DUA</h4>
                  <p className="text-xs">
                    Rediseño y adaptación proactiva de currículos para centros de educación diversa, logrando un ambiente de enseñanza equitativo y 100% inclusivo.
                  </p>
                </div>

                <div className="p-4 bg-brand-surface/40 rounded border border-brand-border/15 space-y-1">
                  <h4 className="font-bold text-brand-dark">Desarrollo Tecnológico</h4>
                  <p className="text-xs">
                    Dirección técnica y pedagógica del diseño de recursos interactivos multimedia utilizados por más de 12 colegios piloto nacionales.
                  </p>
                </div>

                <div className="p-4 bg-brand-surface/40 rounded border border-brand-border/15 space-y-1">
                  <h4 className="font-bold text-brand-dark">Investigación Publicada</h4>
                  <p className="text-xs">
                    Publicación de ensayos y guías metodológicas sobre accesibilidad e inclusión educativa en revistas internacionales indexadas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-brand-surface border-t border-brand-border/30 flex justify-between items-center shrink-0">
          <span className="text-[11px] font-bold text-brand-muted uppercase tracking-wider">
            © 2026 Cynthia Torres Delgado
          </span>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-brand-primary hover:bg-brand-secondary text-white font-bold text-xs rounded shadow-xs"
          >
            Cerrar Currículum
          </button>
        </div>
      </motion.div>
    </div>
  );
}
