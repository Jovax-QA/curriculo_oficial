import { useState } from "react";
import Sidebar from "./components/Sidebar";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Education from "./components/sections/Education";
import Skills from "./components/sections/Skills";
import Contact from "./components/sections/Contact";
import Projects from "./components/sections/Projects";

export type Section = "sobre" | "experiencia" | "educacao" | "habilidades" | "projetos" | "contato";

export default function App() {
  const [active, setActive] = useState<Section>("sobre");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderSection = () => {
    switch (active) {
      case "sobre": return <About />;
      case "experiencia": return <Experience />;
      case "educacao": return <Education />;
      case "habilidades": return <Skills />;
      case "projetos": return <Projects />;
      case "contato": return <Contact />;
    }
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#0a0a0a]">
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed lg:relative lg:translate-x-0 z-50 transition-transform duration-300 ease-in-out
        ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <Sidebar 
          active={active} 
          setActive={(section) => {
            setActive(section);
            setMobileMenuOpen(false);
          }} 
          isMobile={true}
        />
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto overflow-x-hidden relative">
        {/* Mobile Header */}
        <div className="lg:hidden sticky top-0 z-30 bg-[#0a0a0a] border-b border-[#1f1f1f] p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-lg bg-[#111111] border border-[#1f1f1f] text-white"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <div>
                <h1 className="text-white font-bold text-sm">Jovani Miguel</h1>
                <p className="text-[#a3e635] text-xs">QA Engineer</p>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-[#a3e635] flex items-center justify-center text-black font-black text-xs">
              JM
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="lg:ml-0 pb-20 lg:pb-0">
          {renderSection()}
        </div>
      </main>
    </div>
  );
}
