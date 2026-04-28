export default function About() {
  return (
    <div className="h-full flex flex-col justify-center px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-10 max-w-3xl mx-auto w-full">
      <div className="fade-in-up">
        <span className="text-[#a3e635] text-xs sm:text-sm font-bold uppercase tracking-widest">Sobre mim</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 mb-6 leading-tight">
          Engenheiro de<br />
          <span className="text-[#a3e635]">Qualidade de Software</span>
        </h2>
      </div>

      <div className="fade-in-up fade-in-up-delay-1 space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
        <p>
          Meu foco é garantir a entrega de produtos de alta qualidade aos clientes.
          Tenho experiência em identificar e avaliar lacunas nos processos de desenvolvimento
          e implementar melhores práticas.
        </p>
        <p>
          Comprometido com a satisfação do cliente e trabalhando em equipe para alcançar
          o sucesso em projetos desafiadores. Forte liderança e ética de trabalho,
          sempre buscando aprender e crescer profissionalmente.
        </p>
        <p className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-4 mt-4">
          <span className="text-[#a3e635] font-bold">Especialista em Automação de Testes:</span>{" "}
          Ao longo da minha carreira, venho desenvolvendo automações tanto de API quanto E2E para
          aumentar a cobertura de testes do produto, garantindo qualidade e confiabilidade em
          todas as fases do desenvolvimento.
        </p>
        <p className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-4 mt-4">
          <span className="text-[#a3e635] font-bold">Automações Inteligentes com IA:</span>{" "}
          Utilizando{" "}
          <span className="text-white font-semibold">Playwright</span>{" "}
          e{" "}
          <span className="text-white font-semibold">MCP</span>{" "}
          para criar soluções inteligentes de teste que revolucionam a qualidade de software.
        </p>
      </div>

      <div className="fade-in-up fade-in-up-delay-2 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-10">
        {[
          { value: "6+", label: "Anos de experiência" },
          { value: "3", label: "Empresas lideradas" },
          { value: "100%", label: "Foco em qualidade" },
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
          href="./Jovani-Miguel-Custodio-CV.pdf"
          download
          className="px-6 py-3 border border-[#1f1f1f] text-white font-medium rounded-lg text-sm hover:border-[#a3e635] hover:text-[#a3e635] transition-colors text-center"
        >
          Baixar CV em PDF
        </a>
      </div>
    </div>
  );
}
