export default function About() {
  return (
    <div className="h-full flex flex-col justify-center px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-10 max-w-3xl mx-auto w-full">
      <div className="fade-in-up">
        <span className="text-[#a3e635] text-xs sm:text-sm font-bold uppercase tracking-widest">Sobre mim</span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mt-3 mb-6 leading-tight max-w-3xl">
          <span className="block">Quality Engineering Lead</span>
          <span className="mt-2 block text-lg sm:text-xl lg:text-2xl font-semibold text-[#a3e635] leading-snug">
            Tech Lead | AI Automation & Software Engineering
          </span>
        </h2>
      </div>

      <div className="fade-in-up fade-in-up-delay-1 space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
        <p>
          Profissional de tecnologia com graduação em Análise e Desenvolvimento de Sistemas e pós-graduação em Engenharia de Software, atuando na liderança técnica de equipes, engenharia de qualidade, automação de processos e implementação de soluções baseadas em Inteligência Artificial.
        </p>
        <p>
          Minha atuação está focada em construir soluções que aceleram a entrega de software, aumentam a produtividade dos times e reduzem atividades operacionais por meio da automação inteligente. Desenvolvo agentes de IA, automações para análise de requisitos, geração de documentação, apoio à tomada de decisão, automação de testes e otimização do ciclo de desenvolvimento.
        </p>
        <p>
          Além da atuação técnica, exerço um papel estratégico voltado para eficiência e aceleração do fluxo de entrega entre Qualidade, Desenvolvimento e Produto, com foco em gestão de prazos, estimativas, facilitação de impedimentos, comunicação assertiva e alinhamento entre negócio e engenharia.
        </p>
        <p className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-4 mt-4">
          <span className="text-[#a3e635] font-bold">Especialização:</span>{" "}
          Delivery Lead, liderança técnica de QA, gestão de equipes, facilitação ágil, qualidade em todo o ciclo de desenvolvimento e AI-Powered QA.
        </p>
        <p className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-4 mt-4">
          <span className="text-[#a3e635] font-bold">Automação Inteligente com IA:</span>{" "}
          Utilizando{" "}
          <span className="text-white font-semibold">Playwright</span>{" "}
          e{" "}
          <span className="text-white font-semibold">MCP</span>{" "}
          para criar soluções que aumentam a produtividade, reduzem retrabalho e fortalecem a qualidade de software.
        </p>
      </div>

      <div className="fade-in-up fade-in-up-delay-2 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-10">
        {[
          { value: "6+", label: "Anos de experiência" },
          { value: "10+", label: "Equipes e entregas conduzidas" },
          { value: "100%", label: "Foco em eficiência e qualidade" },
        ].map((stat) => (
          <div key={stat.label} className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-4 sm:p-5 text-center">
            <div className="text-2xl sm:text-3xl font-black text-[#a3e635]">{stat.value}</div>
            <div className="text-gray-400 text-xs mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="fade-in-up fade-in-up-delay-3 flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
        <a
          href="https://www.linkedin.com/in/inspector-qa/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-[#a3e635] text-black font-bold rounded-lg text-sm hover:bg-[#bef264] transition-colors text-center"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/Jovani-QA"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-[#1f1f1f] text-white font-medium rounded-lg text-sm hover:border-[#a3e635] hover:text-[#a3e635] transition-colors text-center"
        >
          GitHub
        </a>
        <a
          href="https://github.com/Jovani-Testing"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-[#1f1f1f] text-white font-medium rounded-lg text-sm hover:border-[#a3e635] hover:text-[#a3e635] transition-colors text-center"
        >
          GitHub Testing
        </a>
        <a
          href="./cv-pdf.html"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-[#1f1f1f] text-white font-medium rounded-lg text-sm hover:border-[#a3e635] hover:text-[#a3e635] transition-colors text-center"
        >
          Ver CV em PDF
        </a>
      </div>
    </div>
  );
}
