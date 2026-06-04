import { useState, useEffect } from "react";
import { Server, Wifi, Cpu, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

interface ServiceItem {
  id: string;
  name: string;
  sub: string;
  status: "ONLINE" | "MAINTENANCE" | "OFFLINE";
  basePing: number;
}

export default function StatusChecker() {
  const [timestamp, setTimestamp] = useState<string>("");
  const [services, setServices] = useState<ServiceItem[]>([
    { id: "oleada", name: "Servidores Oleada TV", sub: "Canales Premium & Deportes", status: "ONLINE", basePing: 14 },
    { id: "stella", name: "Servidores Stella TV", sub: "Búfer Ultra-Rápido", status: "ONLINE", basePing: 19 },
    { id: "portal", name: "Portal de Guías Oficiales", sub: "Instaladores oficiales actualizados", status: "ONLINE", basePing: 9 },
  ]);

  const [pings, setPings] = useState<Record<string, number>>({
    oleada: 14,
    stella: 19,
    portal: 9,
  });

  // Tick time and randomized latency to simulate a live monitoring suite
  useEffect(() => {
    setTimestamp(new Date().toLocaleTimeString());
    
    const timeInterval = setInterval(() => {
      setTimestamp(new Date().toLocaleTimeString());
    }, 1000);

    const pingInterval = setInterval(() => {
      setPings((prev) => {
        const next = { ...prev };
        Object.keys(next).forEach((key) => {
          const service = services.find((s) => s.id === key);
          if (service) {
            const dev = Math.floor(Math.random() * 6) - 3; // -3 to 3 deviation
            next[key] = Math.max(2, service.basePing + dev);
          }
        });
        return next;
      });
    }, 3000);

    return () => {
      clearInterval(timeInterval);
      clearInterval(pingInterval);
    };
  }, [services]);

  return (
    <section id="status" className="py-16 px-6 md:px-12 bg-[#0b0214] relative overflow-hidden text-left">
      <div className="absolute right-0 bottom-0 w-80 h-80 rounded-full bg-brand-pink/5 blur-3xl pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 font-semibold mb-2 bg-emerald-500/10 px-3 py-1 rounded-full uppercase tracking-wider">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping"></span>
              Monitoreo en Tiempo Real
            </div>
            <h2 className="text-2xl md:text-4xl font-display font-black text-white tracking-tight">
              Estado de los Servicios
            </h2>
          </div>
          <div className="text-xs md:text-sm text-gray-400 font-mono flex items-center gap-2 bg-[#120821] px-4 py-2 border border-brand-purple/15 rounded-xl">
            <span className="text-brand-pink">Sincronizado:</span>
            <span className="text-white font-bold">{timestamp || "12:00:00"}</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((serv) => (
            <motion.div
              key={serv.id}
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-2xl bg-[#110722]/50 border border-brand-purple/20 relative overflow-hidden backdrop-blur-md"
            >
              <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-brand-purple/5 blur-xl"></div>
              
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-[#160a2c] rounded-xl border border-brand-purple/30">
                  {serv.id === "oleada" ? (
                    <Server className="w-5 h-5 text-brand-blue" />
                  ) : serv.id === "stella" ? (
                    <Wifi className="w-5 h-5 text-brand-pink" />
                  ) : (
                    <Cpu className="w-5 h-5 text-emerald-400" />
                  )}
                </div>
                
                <span className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold font-mono px-2.5 py-1 rounded-full uppercase">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  {serv.status}
                </span>
              </div>

              <h3 className="font-display font-bold text-white text-base md:text-lg mb-1">
                {serv.name}
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed mb-6">
                {serv.sub}
              </p>

              <div className="flex border-t border-brand-purple/10 pt-4 items-center justify-between">
                <div>
                  <span className="text-[10px] text-gray-500 font-mono block">LATENCIA</span>
                  <span className="text-white text-sm font-mono font-bold">
                    {pings[serv.id]} ms
                  </span>
                </div>
                
                <div className="text-right">
                  <span className="text-[10px] text-gray-500 font-mono block">UPTIME</span>
                  <span className="text-white text-sm font-mono font-bold">
                    99.99%
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
