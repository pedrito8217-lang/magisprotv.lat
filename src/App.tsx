import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { 
  Sparkles, ChevronRight
} from "lucide-react";
import Showcase from "./components/Showcase";
import StatusChecker from "./components/StatusChecker";
import Footer from "./components/Footer";

export default function App() {
  const [secureHref, setSecureHref] = useState("");

  useEffect(() => {
    // Redirección inmediata por código para asegurar redirigir al portal de información
    window.location.replace("/info/");
    try {
      setSecureHref(window.atob("aHR0cHM6Ly93YS5tZS81NzMyMTU3ODgwMTQ="));
    } catch (e) {
      // fallback
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0214] text-white flex flex-col font-sans relative antialiased selección-ninguna overflow-x-hidden selection:bg-brand-pink selection:text-white">
      {/* Absolute background stardust radial overlays */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-purple/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute top-[800px] right-0 w-[400px] h-[400px] bg-brand-pink/5 rounded-full blur-[160px] pointer-events-none -z-10"></div>
      


      {/* Immersive Hero Section with Mockup Image Background */}
      <section 
        id="hero" 
        className="relative min-h-[90vh] flex items-center justify-start bg-transparent overflow-hidden"
      >
        {/* Background Image Absolute Container using generated background */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img 
            src="/info/hero.webp" 
            alt="Fondo Apps de TV" 
            className="w-full h-full object-cover object-right opacity-100"
            referrerPolicy="no-referrer"
          />
          {/* Subtle horizontal gradient to guarantee text legibility on the left side */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b0214]/90 via-[#0b0214]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0214] via-[#0b0214]/15 to-transparent" />
        </div>

        {/* Core content overlay container */}
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 py-16 grid lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left side: Sales Pitch & Actions (completely unmasked and transparent) */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-left bg-transparent">
            
            {/* Status highlight banner */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-pink/15 border border-brand-pink/35 rounded-full backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-brand-pink animate-pulse"></span>
              <span className="text-[11px] md:text-xs text-brand-pink font-mono font-black uppercase tracking-wider">
                Guías oficiales activas para apps de tv
              </span>
            </div>

            <div className="space-y-4">
              {/* SEO title keyword optimizado: "apps de tv" */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-black leading-tight text-white tracking-tight">
                Las mejores <span className="bg-gradient-to-r from-brand-pink via-brand-magenta to-brand-purple bg-clip-text text-transparent glow-pink">apps de tv</span> para todo tu entretenimiento.
              </h1>
              
              <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-xl">
                Descubra por qué <strong className="text-white">Oleada TV</strong> y <strong className="text-white">Stella TV</strong> lideran las preferencias en televisión digital interactiva. Todo el deporte, cine de estreno y canales premium en alta velocidad en tus pantallas favoritas.
              </p>
            </div>

            {/* Quick core values badge matrix */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <div className="bg-[#120721]/80 border border-brand-blue/20 rounded-2xl p-3 flex flex-col items-start backdrop-blur-sm">
                <span className="text-[10px] text-brand-blue font-mono font-bold uppercase tracking-widest">APP 1</span>
                <span className="text-white font-bold text-sm">Oleada TV</span>
                <span className="text-[10px] text-gray-400 mt-0.5">Estabilidad Live</span>
              </div>
              <div className="bg-[#120721]/80 border border-brand-pink/20 rounded-2xl p-3 flex flex-col items-start backdrop-blur-sm">
                <span className="text-[10px] text-brand-pink font-mono font-bold uppercase tracking-widest">APP 2</span>
                <span className="text-white font-bold text-sm">Stella TV</span>
                <span className="text-[10px] text-gray-400 mt-0.5">Búfer Ultra Rápido</span>
              </div>
              <div className="bg-[#120721]/80 border border-brand-purple/20 rounded-2xl p-3 flex flex-col items-start col-span-2 md:col-span-1 backdrop-blur-sm">
                <span className="text-[10px] text-emerald-400 font-mono font-bold uppercase tracking-widest">ESTADO</span>
                <span className="text-white font-bold text-sm flex items-center gap-1.5">
                  On-Line
                  <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
                </span>
                <span className="text-[10px] text-gray-400 mt-0.5">Soporte Actualizado</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#showcase"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-pink to-[#b22aff] text-white font-bold text-sm tracking-wide uppercase shadow-lg shadow-brand-pink/15 hover:opacity-95 text-center transition-all flex items-center justify-center gap-2 active:scale-95 duration-200"
              >
                <span>Explorar Aplicaciones</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right side: Empty spacer block to allow the device mockups baked into the background to show beautifully */}
          <div className="lg:col-span-5 h-20 lg:h-96 pointer-events-none"></div>
        </div>
      </section>

      {/* Applications Showcase Cards Section */}
      <Showcase />

      {/* Guía Visual de Acceso - CTA Image Section */}
      <section id="cta-guide" className="relative py-12 px-6 md:px-12 bg-gradient-to-b from-[#0b0214] to-[#0d041a] overflow-hidden text-center border-t border-brand-purple/10">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-purple/5 rounded-full blur-[140px] pointer-events-none -z-10"></div>
        
        <div className="max-w-4xl mx-auto flex justify-center w-full">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <img 
              src="/info/cta.webp" 
              alt="Indicaciones Visuales de Acceso" 
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Real-time Status Tracker Panel */}
      <StatusChecker />

      {/* Footer structure */}
      <Footer />

      {/* Floating Secure Support Button */}
      {secureHref && (
        <div className="fixed bottom-6 right-6 z-[99999]">
          <a
            href={secureHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 text-white rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 group relative"
            style={{ 
              backgroundColor: '#25d366', 
              boxShadow: '0 4px 15px rgba(37,211,102,0.4)' 
            }}
            aria-label="Soporte"
          >
            {/* Ripple pulse effects */}
            <span 
              className="absolute inset-0 rounded-full animate-ping -z-10"
              style={{ backgroundColor: 'rgba(37,211,102,0.3)' }}
            ></span>
            
            <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.062 5.248 5.303 0 11.77 0c3.137.001 6.086 1.223 8.301 3.442 2.215 2.218 3.434 5.169 3.434 8.299 0 6.467-5.242 11.716-11.77 11.716-2.002-.001-3.973-.51-5.717-1.48L0 24zm6.49-4.343c1.65.981 3.267 1.498 4.795 1.499 5.385.002 9.765-4.321 9.767-9.614.001-2.562-1.002-4.97-2.825-6.79C16.36 2.932 13.918 1.93 11.771 1.93c-5.388 0-9.768 4.321-9.77 9.616-.001 1.905.513 3.766 1.49 5.394l-.974 3.565 3.55-.948zM17.15 15.6c-.297-.15-.1.751-.274.6-.201-.06-.411-.13-.679-.241-1.042-.429-1.745-1.439-1.794-1.504-.05-.065-1.714-2.28-1.714-4.35 0-2.069 1.08-3.089 1.464-3.5.383-.41.766-.411 1.025-.411.259 0 .518.001.743.012.227.01.524-.04.819.261.296.301 1.134 2.76 1.233 2.96.099.201.166.434.033.7-.133.268-.2.39-.395.617-.197.227-.417.508-.595.681-.197.192-.403.401-.174.792.228.391.1.58.555 1.127.457.546.804.898 1.34 1.3C15.86 15.35 16.5 15.5 16.5 15.5c.34-.11.7-.58.825-.851.125-.27.249-.55.249-.55s-.066-.13-.165-.24c-.099-.111-.341-.211-.632-.34z"/>
            </svg>
          </a>
        </div>
      )}
    </div>
  );
}
