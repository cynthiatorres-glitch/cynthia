import { useState } from "react";
import { GraduationCap, ExternalLink, ShieldCheck } from "lucide-react";

export default function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <footer className="bg-brand-dark text-white py-16 border-t border-brand-border/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-12 border-b border-brand-border/10">
          {/* Logo & Slogan */}
          <div className="space-y-3">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded bg-brand-primary flex items-center justify-center text-white">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-lg tracking-tight hover:text-brand-vibrant transition-colors">
                Cynthia Torres Delgado
              </span>
            </a>
            <p className="text-xs text-brand-border/70 max-w-sm leading-relaxed">
              Transformando la Educación a través de la Innovación, el Rigor Académico y la Empatía Humana.
            </p>
          </div>

          {/* Social Handles */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-xs font-semibold text-brand-border/90 uppercase tracking-wider">
            <a
              href="https://linkedin.com/in/cynthiatorresd"
              target="_blank"
              rel="noreferrer"
              className="hover:text-brand-vibrant transition-colors flex items-center gap-1.5"
            >
              <span>LinkedIn</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="mailto:hola@cynthiatorres.edu"
              className="hover:text-brand-vibrant transition-colors flex items-center gap-1.5"
            >
              <span>Email</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={() => setShowPrivacy(true)}
              className="hover:text-brand-vibrant transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span>Aviso de Privacidad</span>
              <ShieldCheck className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Lower footer copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-brand-border/50 font-medium">
          <p>© 2026 Cynthia Torres Delgado. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">
            <span>Creado con</span>
            <span className="text-brand-vibrant">♥</span>
            <span>para el Aula del Siglo XXI</span>
          </p>
        </div>
      </div>

      {/* Basic interactive Privacy modal block */}
      {showPrivacy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark/60 backdrop-blur-xs">
          <div className="bg-white text-brand-dark rounded-lg p-6 max-w-md border border-brand-border/40 space-y-4">
            <h4 className="text-sm font-bold text-brand-primary uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              Aviso de Privacidad Simplificado
            </h4>
            <p className="text-xs text-brand-muted leading-relaxed">
              Tus datos ingresados en el formulario de contacto o en el autodiagnóstico se guardan de forma estrictamente local en la memoria de tu navegador (LocalStorage). Cynthia Torres Delgado no recopila, vende ni procesa tus datos en servidores externos de manera encubierta.
            </p>
            <div className="flex justify-end pt-2">
              <button
                onClick={() => setShowPrivacy(false)}
                className="px-5 py-2 bg-brand-primary hover:bg-brand-secondary text-white font-bold text-xs rounded transition-all"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
