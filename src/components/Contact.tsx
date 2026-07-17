import React, { useState, useEffect } from "react";
import { Mail, Link2, MapPin, Send, Check, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ContactMessage } from "../types";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Load message history from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("cynthia_contact_msgs");
    if (saved) {
      try {
        setMessages(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "El nombre es obligatorio.";
    if (!formData.email.trim()) {
      newErrors.email = "El correo es obligatorio.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Introduce un correo válido.";
    }
    if (!formData.subject.trim()) newErrors.subject = "El asunto es obligatorio.";
    if (!formData.message.trim()) newErrors.message = "El mensaje no puede estar vacío.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const newMsg: ContactMessage = {
      id: "msg_" + Date.now(),
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      timestamp: new Date().toLocaleString("es-ES")
    };

    const updated = [newMsg, ...messages];
    setMessages(updated);
    localStorage.setItem("cynthia_contact_msgs", JSON.stringify(updated));

    // Clear form and show success
    setFormData({ name: "", email: "", subject: "", message: "" });
    setErrors({});
    setShowSuccess(true);

    // Auto close success panel after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  const deleteMessage = (id: string) => {
    const updated = messages.filter((m) => m.id !== id);
    setMessages(updated);
    localStorage.setItem("cynthia_contact_msgs", JSON.stringify(updated));
  };

  return (
    <section id="contact" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Direct Info & Socials */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 bg-brand-primary/10 text-brand-primary rounded font-semibold text-xs uppercase tracking-wider">
                Contacto
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-dark">
                Construyamos el futuro de la educación
              </h2>
              <p className="text-sm md:text-base text-brand-muted leading-relaxed">
                ¿Tienes una propuesta de colaboración, asesoría docente, diseño curricular o deseas impartir un taller tecnológico? Estaré encantada de conversar contigo sobre tus metas académicas.
              </p>
            </div>

            {/* Direct Contact Handles */}
            <div className="space-y-4 pt-4">
              {/* Email */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-300 shadow-3xs shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-widest text-brand-muted">
                    Correo Electrónico
                  </p>
                  <a
                    href="mailto:hola@cynthiatorres.edu"
                    className="text-sm font-semibold text-brand-dark hover:text-brand-primary transition-colors"
                  >
                    hola@cynthiatorres.edu
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-300 shadow-3xs shrink-0">
                  <Link2 className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-widest text-brand-muted">
                    LinkedIn
                  </p>
                  <a
                    href="https://linkedin.com/in/cynthiatorresd"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-brand-dark hover:text-brand-primary transition-colors"
                  >
                    linkedin.com/in/cynthiatorresd
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-300 shadow-3xs shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-widest text-brand-muted">
                    Ubicación Principal
                  </p>
                  <p className="text-sm font-semibold text-brand-dark">
                    Madrid, España (Servicio Global Virtual)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-brand-surface/40 p-8 md:p-10 rounded border border-brand-border/30 relative">
              
              {/* Success Message overlay banner */}
              <AnimatePresence>
                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 bg-brand-primary text-white text-xs rounded font-medium flex items-center justify-between"
                  >
                    <span className="flex items-center gap-2">
                      <Check className="w-4 h-4 shrink-0" />
                      ¡Mensaje enviado con éxito! Cynthia te contactará pronto.
                    </span>
                    <button
                      onClick={() => setShowSuccess(false)}
                      className="underline font-bold text-[10px] uppercase ml-2"
                    >
                      Entendido
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wide text-brand-muted">
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full bg-white border ${
                        errors.name ? "border-red-500" : "border-brand-border/40"
                      } focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/10 rounded py-2.5 px-3.5 text-xs sm:text-sm text-brand-dark transition-all`}
                    />
                    {errors.name && <p className="text-[10px] font-semibold text-red-500">{errors.name}</p>}
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wide text-brand-muted">
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full bg-white border ${
                        errors.email ? "border-red-500" : "border-brand-border/40"
                      } focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/10 rounded py-2.5 px-3.5 text-xs sm:text-sm text-brand-dark transition-all`}
                    />
                    {errors.email && <p className="text-[10px] font-semibold text-red-500">{errors.email}</p>}
                  </div>
                </div>

                {/* Subject field */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wide text-brand-muted">
                    Asunto de Colaboración
                  </label>
                  <input
                    type="text"
                    placeholder="¿En qué puedo ayudarte?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={`w-full bg-white border ${
                      errors.subject ? "border-red-500" : "border-brand-border/40"
                    } focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/10 rounded py-2.5 px-3.5 text-xs sm:text-sm text-brand-dark transition-all`}
                  />
                  {errors.subject && <p className="text-[10px] font-semibold text-red-500">{errors.subject}</p>}
                </div>

                {/* Message field */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wide text-brand-muted">
                    Mensaje Detallado
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Escribe tu propuesta o mensaje aquí..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full bg-white border ${
                      errors.message ? "border-red-500" : "border-brand-border/40"
                    } focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/10 rounded py-2.5 px-3.5 text-xs sm:text-sm text-brand-dark transition-all resize-none`}
                  />
                  {errors.message && <p className="text-[10px] font-semibold text-red-500">{errors.message}</p>}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 bg-brand-primary hover:bg-brand-secondary text-white font-bold text-xs uppercase tracking-wider rounded shadow-sm hover:shadow active:scale-99 transition-all cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Enviar Mensaje</span>
                </button>
              </form>
            </div>

            {/* Sent Messages History Tracker - local persistence demonstration */}
            {messages.length > 0 && (
              <div className="bg-white p-5 rounded border border-brand-border/30 space-y-3">
                <button
                  onClick={() => setShowHistory(!showHistory)}
                  className="w-full flex items-center justify-between text-xs font-bold text-brand-primary uppercase tracking-wide hover:underline cursor-pointer"
                >
                  <span>{showHistory ? "Ocultar Historial" : "Ver Historial"} de Mensajes Enviados ({messages.length})</span>
                  <span className="material-symbols-outlined text-sm">
                    {showHistory ? "keyboard_arrow_up" : "keyboard_arrow_down"}
                  </span>
                </button>

                {showHistory && (
                  <div className="space-y-3 pt-2 divide-y divide-brand-border/15 max-h-[220px] overflow-y-auto">
                    {messages.map((msg) => (
                      <div key={msg.id} className="pt-3 first:pt-0 space-y-1 relative group">
                        <button
                          onClick={() => deleteMessage(msg.id)}
                          className="absolute right-1 top-3 p-1 rounded hover:bg-red-50 text-brand-muted hover:text-red-500 transition-colors"
                          title="Eliminar mensaje"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                        <div className="flex items-center gap-2 text-[10px] font-bold text-brand-muted">
                          <span>{msg.timestamp}</span>
                          <span className="w-1 h-1 bg-brand-border rounded-full" />
                          <span className="text-brand-primary truncate max-w-[120px]">{msg.name}</span>
                        </div>
                        <h4 className="text-xs font-bold text-brand-dark pr-6">{msg.subject}</h4>
                        <p className="text-[11px] text-brand-muted leading-relaxed line-clamp-2 italic">
                          "{msg.message}"
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
