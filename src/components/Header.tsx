import { useState, useEffect } from "react";
import { Menu, X, Download, GraduationCap } from "lucide-react";

interface HeaderProps {
  onDownloadCV: () => void;
}

export default function Header({ onDownloadCV }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Sobre Mí", href: "#about" },
    { label: "Especialización", href: "#expertise" },
    { label: "Portafolio", href: "#portfolio" },
    { label: "Trayectoria", href: "#trajectory" },
    { label: "Autodiagnóstico", href: "#diagnostic" },
    { label: "Contacto", href: "#contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-surface/90 backdrop-blur-md shadow-sm border-b border-brand-border/30 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-lg bg-brand-primary flex items-center justify-center text-brand-surface transition-transform group-hover:scale-105">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg md:text-xl tracking-tight text-brand-primary leading-none">
              Cynthia Torres
            </span>
            <span className="text-[10px] uppercase tracking-widest text-brand-muted font-semibold mt-0.5">
              Delgado
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brand-muted hover:text-brand-primary transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-primary after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={onDownloadCV}
            className="flex items-center gap-2 px-5 py-2.5 bg-brand-primary hover:bg-brand-secondary text-white font-medium text-sm rounded transition-all shadow-sm hover:shadow active:scale-98"
          >
            <Download className="w-4 h-4" />
            <span>Descargar CV</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={onDownloadCV}
            className="sm:hidden p-2 rounded-lg bg-brand-primary text-white"
            title="Descargar CV"
          >
            <Download className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg hover:bg-brand-border/20 text-brand-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-brand-card/95 backdrop-blur-md shadow-lg border-b border-brand-border/40 py-6 px-6 transition-all duration-300">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-semibold text-brand-muted hover:text-brand-primary py-2 border-b border-brand-border/10 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setIsOpen(false);
                onDownloadCV();
              }}
              className="mt-2 w-full flex items-center justify-center gap-2 py-3 bg-brand-primary hover:bg-brand-secondary text-white font-bold rounded shadow-sm"
            >
              <Download className="w-4 h-4" />
              <span>Descargar Currículum Vitae</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
