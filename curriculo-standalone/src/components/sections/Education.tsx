const education = [
  {
    degree: "Pós-Graduação",
    field: "Engenharia de Software",
    institution: "Vincit",
    period: "2023 — 2024",
    icon: "🎓",
  },
  {
    degree: "Graduação",
    field: "Análise e Desenvolvimento de Sistemas",
    institution: "Unicesumar",
    period: "2020 — 2023",
    icon: "📘",
  },
  {
    degree: "Técnico",
    field: "Análise e Desenvolvimento de Sistemas",
    institution: "SESI SENAI",
    period: "2020 — 2022",
    icon: "🛠️",
  },
];

const certifications = [
  { name: "One Touch QA", desc: "Consultoria de Qualidade para empresas e Mentorias sobre Qualidade de Software", year: "2023" },
  { name: "Alexandre Desenvolvimento", desc: "Análise de fluxos de sistema de Frota", year: "2023" },
  { name: "Cassol", desc: "Criação de um app de prestação de serviços", year: "2022" },
];

export default function Education() {
  return (
    <div className="h-full overflow-y-auto px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-10">
      <div className="max-w-2xl mx-auto w-full">
        <span className="text-[#a3e635] text-xs sm:text-sm font-bold uppercase tracking-widest">Formação</span>
        <h2 className="text-3xl sm:text-4xl font-black text-white mt-2 mb-6 sm:mb-8">Educação</h2>

        <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
          {education.map((edu, i) => (
            <div
              key={i}
              className="flex gap-3 sm:gap-5 bg-[#111111] border border-[#1f1f1f] rounded-xl p-4 sm:p-5 hover:border-[#a3e635]/30 transition-colors fade-in-up"
              style={{ animationDelay: `${i * 0.15}s`, opacity: 0 }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#a3e635]/10 flex items-center justify-center text-xl sm:text-2xl flex-shrink-0">
                {edu.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h3 className="text-white font-bold text-sm sm:text-base">{edu.degree}</h3>
                  <span className="text-xs text-gray-500 bg-[#1a1a1a] px-2 py-1 rounded-md whitespace-nowrap">{edu.period}</span>
                </div>
                <p className="text-[#a3e635] text-xs sm:text-sm font-medium mt-0.5">{edu.field}</p>
                <p className="text-gray-400 text-xs sm:text-sm">{edu.institution}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-white font-bold text-base sm:text-lg mb-3 sm:mb-4">Projetos & Consultorias</h3>
        <div className="space-y-3">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="flex items-start gap-3 sm:gap-4 bg-[#111111] border border-[#1f1f1f] rounded-xl p-3 sm:p-4 hover:border-[#a3e635]/20 transition-colors fade-in-up"
              style={{ animationDelay: `${(i + 3) * 0.1}s`, opacity: 0 }}
            >
              <span className="text-[#a3e635] font-bold text-xs sm:text-sm w-8 sm:w-10 flex-shrink-0">{cert.year}</span>
              <div className="min-w-0 flex-1">
                <p className="text-white text-xs sm:text-sm font-semibold">{cert.name}</p>
                <p className="text-gray-400 text-xs mt-0.5">{cert.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
