import { Sparkles, Check, Play, Tv2, Smartphone, Shield, Zap } from "lucide-react";
import { motion } from "motion/react";

export default function Showcase() {
  const oleadaFeatures = [
    "Deportes: Enfocada en Fútbol Regional Latinoamericano",
    "Uso de Red: Puede requerir el uso de VPN según tu proveedor de internet",
    "Compatibilidad: Optimizado para Android, Android TV y dispositivos compatibles",
    "Películas taquilleras y series completas con audio y subtítulos en español latino",
    "Estabilidad de Señal: Canales HD premium para disfrutar en pantalla gigante"
  ];

  const stellaFeatures = [
    "Fútbol Completo: Todos los canales y eventos internacionales de este deporte",
    "Gran Ventaja: No requiere el uso de VPN para reproducir sus contenidos",
    "Compatibilidad: Diseñado especialmente para Android, Android TV y emuladores compatibles",
    "Servidores redundantes de última tecnología para evitar cualquier corte",
    "Interfaz fluida optimizada para el mando de tu Smart TV"
  ];

  return (
    <section id="showcase" className="relative py-20 px-6 md:px-12 bg-gradient-to-b from-[#0b0214] via-[#10031d] to-[#0b0214]">
      {/* Background decor lights */}
      <div className="absolute right-10 top-1/4 w-80 h-80 rounded-full bg-brand-pink/5 blur-3xl pointer-events-none"></div>
      <div className="absolute left-10 bottom-1/4 w-80 h-80 rounded-full bg-brand-purple/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-pink/10 border border-brand-pink/20 rounded-full text-brand-pink text-xs font-mono tracking-wider uppercase mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 animate-spin" />
            <span>Las Dos Grandes Aplicaciones de Entretenimiento</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight"
          >
            Oleada TV & Stella TV
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 mt-4 text-base md:text-lg max-w-2xl mx-auto"
          >
            Descubre las características exclusivas que las convierten en las herramientas de streaming predilectas de miles de usuarios.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Oleada TV Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -8 }}
            className="relative group overflow-hidden rounded-3xl bg-[#120820]/60 border border-brand-blue/20 hover:border-brand-blue/50 p-8 md:p-10 transition-all duration-300 backdrop-blur-md shadow-2xl flex flex-col justify-between"
          >
            {/* Top right ambient circle */}
            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-brand-blue/20 blur-2xl group-hover:bg-brand-blue/30 transition-all"></div>
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center border border-brand-blue/35">
                    <Play className="w-5 h-5 text-brand-blue fill-brand-blue/20" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-white group-hover:text-brand-blue transition-colors">
                      Oleada TV
                    </h3>
                    <span className="text-[10px] bg-brand-blue/20 text-brand-blue font-semibold px-2 py-0.5 rounded-full font-mono uppercase tracking-wider">
                      Premium Live TV
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-brand-blue font-mono">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-blue animate-pulse"></span>
                  <span>99.9% Estabilidad</span>
                </div>
              </div>

              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8">
                La plataforma ideal para televisión en vivo y entretenimiento en dispositivos Android. Explora una amplia parrilla de televisión con énfasis en el fútbol regional latinoamericano, películas de estreno y una señal sumamente estable.
              </p>

              <div className="space-y-4 mb-8">
                {oleadaFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-brand-blue" />
                    </div>
                    <span className="text-sm text-gray-300 leading-tight">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-brand-blue/10 flex items-center justify-between mt-auto">
              <div className="flex items-center gap-2 text-xs text-gray-400 font-mono">
                <Tv2 className="w-4 h-4 text-brand-blue" />
                <span>Compatible Smart TV | Firestick</span>
              </div>
              <div className="h-2 w-2 rounded-full bg-brand-blue"></div>
            </div>
          </motion.div>

          {/* Stella TV Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -8 }}
            className="relative group overflow-hidden rounded-3xl bg-[#0e071c]/60 border border-brand-pink/20 hover:border-brand-pink/50 p-8 md:p-10 transition-all duration-300 backdrop-blur-md shadow-2xl flex flex-col justify-between"
          >
            {/* Top right ambient circle */}
            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-brand-pink/20 blur-2xl group-hover:bg-brand-pink/30 transition-all"></div>
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-brand-pink/10 flex items-center justify-center border border-brand-pink/35">
                    <Zap className="w-5 h-5 text-brand-pink" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-white group-hover:text-brand-pink transition-colors">
                      Stella TV
                    </h3>
                    <span className="text-[10px] bg-brand-pink/20 text-brand-pink font-semibold px-2 py-0.5 rounded-full font-mono uppercase tracking-wider">
                      Ultra Fast Engine
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-brand-pink font-mono">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-pink animate-pulse"></span>
                  <span>Televisión Inteligente</span>
                </div>
              </div>

              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8">
                La opción definitiva de entretenimiento y deportes globales para Android. Stella TV te ofrece acceso directo a todos los canales de fútbol premium y cobertura completa de torneos internacionales sin necesidad de usar conexiones VPN.
              </p>

              <div className="space-y-4 mb-8">
                {stellaFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-brand-pink/15 border border-brand-pink/30 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-brand-pink" />
                    </div>
                    <span className="text-sm text-gray-300 leading-tight">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-brand-pink/10 flex items-center justify-between mt-auto">
              <div className="flex items-center gap-2 text-xs text-gray-400 font-mono">
                <Smartphone className="w-4 h-4 text-brand-pink" />
                <span>Compatible Celular | Android TV</span>
              </div>
              <div className="h-2 w-2 rounded-full bg-brand-pink"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
