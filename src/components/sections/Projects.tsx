export default function Projects() {
  const projects = [
    {
      title: "Integração Jira/YouTrack com MCP",
      description: "Sistema de automação que lê cards de gerenciadores de tarefas (Jira/YouTrack) via MCP e gera automaticamente cenários de testes baseados nos requisitos descritos.",
      tech: ["MCP", "Jira API", "YouTrack API", "TypeScript"],
      icon: "📋"
    },
    {
      title: "Chrome MCP - Análise de Páginas",
      description: "Ferramenta de análise automatizada de páginas web usando Chrome MCP para identificar elementos, padrões de navegação e oportunidades de automação de testes.",
      tech: ["Chrome MCP", "Puppeteer", "TypeScript", "Web Scraping"],
      icon: "🌐"
    },
    {
      title: "Playwright MCP - Automação Inteligente",
      description: "Solução completa de automação que levanta cenários de testes, planeja, executa e automatiza utilizando boas práticas como TDD, BDD, Arquitectura de Testes e Agents.",
      tech: ["Playwright", "MCP", "TDD", "BDD", "Agents", "TypeScript"],
      icon: "🤖"
    }
  ];

  const workflows = [
    "Consulta e automação com IA para acelerar análises de requisitos",
    "Construção de aplicações com IA-first em todo o ciclo de desenvolvimento",
    "Análise de incidentes e suporte à decisão com agentes inteligentes",
    "Levantamento de cenários, planejamento de tarefas e execução assistida por IA",
    "Revisão de código e validação de entregas com apoio de inteligência artificial",
    "Criação de agentes autônomos para testes, substituindo parte do trabalho manual"
  ];

  return (
    <div className="h-full flex flex-col justify-center px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-10 max-w-4xl mx-auto w-full">
      <div className="fade-in-up">
        <span className="text-[#a3e635] text-xs sm:text-sm font-bold uppercase tracking-widest">Projetos</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mt-3 mb-6 leading-tight">
          Automação com<br />
          <span className="text-[#a3e635]">IA e MCP</span>
        </h2>
      </div>

      <div className="space-y-6 fade-in-up fade-in-up-delay-1">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-6 hover:border-[#a3e635] transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="text-4xl">{project.icon}</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#1f1f1f] text-[#a3e635] text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-[#111111] border border-[#1f1f1f] rounded-xl p-6 fade-in-up fade-in-up-delay-2">
        <h3 className="text-xl font-bold text-white mb-4">Workflows com IA</h3>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
          Abordagem IA-first para acelerar o ciclo completo de desenvolvimento, desde a compreensão do problema até a validação da entrega.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {workflows.map((workflow) => (
            <div key={workflow} className="flex items-start gap-2 rounded-lg border border-[#1f1f1f] bg-[#0d0d0d] p-3">
              <span className="text-[#a3e635] mt-0.5">›</span>
              <span className="text-sm text-gray-300">{workflow}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
