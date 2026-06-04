import { ShieldAlert, Cpu } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#06010d] border-t border-brand-purple/20 py-12 px-6 md:px-12 text-gray-400 text-xs md:text-sm text-left">
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-8 md:gap-12 items-start">
        {/* Company info (7 cols) */}
        <div className="md:col-span-7 space-y-4">
          <div className="flex items-center gap-2">
            <span className="font-display font-black text-xl tracking-tight text-white">
              Apps de TV
            </span>
            <span className="text-[9px] bg-brand-pink/15 text-brand-pink px-2 py-0.5 rounded-full font-mono font-bold">
              PORTAL SEGURO
            </span>
          </div>
          
          <p className="text-gray-400 text-xs leading-relaxed max-w-lg">
            Nuestra misión es asegurar que siempre tengas acceso inmediato a las guías oficiales para <strong>Oleada TV</strong> y <strong>Stella TV</strong>, protegiendo tu entrada frente a bloqueos o censuras de dominio.
          </p>
          
          <div className="flex items-center gap-2 text-[10px] text-gray-500 font-mono">
            <Cpu className="w-3.5 h-3.5 text-brand-purple" />
            <span>Infraestructura Segura & Servidores de Alta Velocidad</span>
          </div>
        </div>

        {/* Disclaimer Safety Note (5 cols) */}
        <div className="md:col-span-5 space-y-3">
          <h4 className="font-semibold text-white text-xs uppercase tracking-wider font-mono flex items-center gap-1.5">
            <ShieldAlert className="w-4 h-4 text-brand-pink shrink-0" />
            Aviso de Privacidad
          </h4>
          <p className="text-gray-500 text-[11px] leading-relaxed">
            Este sitio web no utiliza Cookies invasivas, rastreos externos ni almacena ningún tipo de información confidencial. No mantenemos hipervínculos salientes para blindar tu dirección IP de reportes.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-brand-purple/10 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500">
        <div>
          &copy; {new Date().getFullYear()} Apps de TV Portal Oficial. Todos los derechos reservados.
        </div>
        <div className="flex gap-6 font-mono">
          <span>Uptime: 99.99%</span>
          <span>Security: SSL Encrypted</span>
        </div>
      </div>
    </footer>
  );
}
