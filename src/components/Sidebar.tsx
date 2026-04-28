import type { Section } from "../App";

interface Props {
  active: Section;
  setActive: (s: Section) => void;
  isMobile?: boolean;
}

const navItems: { id: Section; label: string; icon: string }[] = [
  { id: "sobre", label: "Sobre", icon: "👤" },
  { id: "experiencia", label: "Experiência", icon: "💼" },
  { id: "educacao", label: "Educação", icon: "🎓" },
  { id: "habilidades", label: "Habilidades", icon: "⚡" },
  { id: "contato", label: "Contato", icon: "📬" },
];

export default function Sidebar({ active, setActive, isMobile = false }: Props) {
  return (
    <aside className={`
      ${isMobile 
        ? 'w-80 min-w-[320px] h-screen' 
        : 'w-64 min-w-[256px] h-full'
      } flex flex-col bg-[#111111] border-r border-[#1f1f1f] lg:border-r-0 lg:border-b lg:h-auto lg:min-h-0
    `}>
      {/* Profile */}
      <div className={`border-b border-[#1f1f1f] ${isMobile ? 'p-6' : 'p-8'}`}>
        <div className={`
          rounded-full bg-[#a3e635] flex items-center justify-center mb-4 text-black select-none
          ${isMobile ? 'w-16 h-16 text-2xl' : 'w-20 h-20 text-3xl'}
        `}>
          JM
        </div>
        <h1 className={`text-white font-bold leading-tight ${isMobile ? 'text-base' : 'text-lg'}`}>
          Jovani Miguel
        </h1>
        <h2 className={`text-white font-bold leading-tight ${isMobile ? 'text-base' : 'text-lg'}`}>
          Custódio
        </h2>
        <p className={`text-[#a3e635] font-medium mt-2 ${isMobile ? 'text-xs' : 'text-sm'}`}>
          QA Engineer
        </p>
        <div className="mt-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#a3e635] animate-pulse"></span>
          <span className="text-gray-400 text-xs">Disponível</span>
        </div>
      </div>

      {/* Nav */}
      <nav className={`flex-1 space-y-1 ${isMobile ? 'p-3' : 'p-4'}`}>
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`
              w-full flex items-center gap-3 rounded-lg font-medium transition-all duration-200 text-left
              ${isMobile 
                ? 'px-3 py-3 text-sm' 
                : 'px-4 py-3 text-sm'
              }
              ${
                active === item.id
                  ? "bg-[#a3e635] text-black font-bold"
                  : "text-gray-400 hover:bg-[#1a1a1a] hover:text-white"
              }
            `}
          >
            <span className="text-base">{item.icon}</span>
            {item.label}
            {active === item.id && (
              <span className="ml-auto text-black font-bold">›</span>
            )}
          </button>
        ))}
      </nav>

      {/* Footer */}
      <div className={`border-t border-[#1f1f1f] ${isMobile ? 'p-4' : 'p-6'}`}>
        <p className="text-xs text-gray-600 leading-relaxed italic">
          "Qualidade não é um acidente. É sempre o resultado de um esforço de inteligência."
        </p>
      </div>
    </aside>
  );
}
