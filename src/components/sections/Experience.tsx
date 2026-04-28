const experiences = [
  {
    company: "QA Enable",
    role: "Engenheiro de Qualidade",
    period: "2025 — Atualmente",
    current: true,
    tasks: [
      "Criar testes automatizados para os times darem seguimento",
      "Testes E2E, Testes de API e Load Tests",
    ],
  },
  {
    company: "Attus",
    role: "Líder Técnico de Qualidade",
    period: "2023 — 2025",
    current: false,
    tasks: [
      "Liderança técnica da equipe de qualidade",
      "Qualidade de produto e processos",
    ],
  },
  {
    company: "Casting",
    role: "Líder Técnico de Qualidade",
    period: "2022 — 2023",
    current: false,
    tasks: [
      "Implantação do setor de QA",
      "Realização de testes manuais e automatizados",
      "Documentação de bugs, cenários de teste e produto",
      "Gerenciamento de atividades com o PO",
    ],
  },
  {
    company: "DQR Tech",
    role: "Analista de Qualidade",
    period: "2021 — 2022",
    current: false,
    tasks: [
      "Analista de testes no BTG Pactual (segmento financeiro)",
      "Homologação de demandas e report de bugs",
      "Levantamento de cenários de testes",
    ],
  },
  {
    company: "Sistema Info",
    role: "Analista de Testes",
    period: "2020 — 2021",
    current: false,
    tasks: [
      "Testes funcionais, regressão e exploratórios",
      "Testes de Integração / API e desempenho",
      "Testes automatizados",
    ],
  },
];

export default function Experience() {
  return (
    <div className="h-full overflow-y-auto px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-10">
      <div className="max-w-2xl mx-auto w-full">
        <span className="text-[#a3e635] text-xs sm:text-sm font-bold uppercase tracking-widest">Trajetória</span>
        <h2 className="text-3xl sm:text-4xl font-black text-white mt-2 mb-6 sm:mb-8">Experiência Profissional</h2>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-[#1f1f1f]" />

          <div className="space-y-6 sm:space-y-8 pl-6 sm:pl-8">
            {experiences.map((exp, i) => (
              <div key={i} className="relative fade-in-up" style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}>
                <div className={`absolute -left-[33px] top-1.5 w-3 h-3 rounded-full border-2 ${
                  exp.current ? "bg-[#a3e635] border-[#a3e635]" : "bg-[#0a0a0a] border-[#1f1f1f]"
                }`} />

                <div className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-4 sm:p-5 hover:border-[#a3e635]/30 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-1 gap-2">
                    <div>
                      <h3 className="text-white font-bold text-sm sm:text-base">{exp.role}</h3>
                      <p className="text-[#a3e635] font-semibold text-xs sm:text-sm">{exp.company}</p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-md font-medium whitespace-nowrap ${
                      exp.current
                        ? "bg-[#a3e635]/10 text-[#a3e635] border border-[#a3e635]/20"
                        : "bg-[#1a1a1a] text-gray-500"
                    }`}>
                      {exp.period}
                    </span>
                  </div>
                  <ul className="mt-3 space-y-1">
                    {exp.tasks.map((t, j) => (
                      <li key={j} className="text-gray-400 text-xs sm:text-sm flex items-start gap-2">
                        <span className="text-[#a3e635] mt-0.5">›</span>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
