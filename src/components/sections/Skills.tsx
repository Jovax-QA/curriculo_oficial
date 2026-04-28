import { useEffect, useRef, useState } from "react";

interface Skill {
  name: string;
  level: number;
}

const skillGroups: { title: string; skills: Skill[] }[] = [
  {
    title: "Automação de Testes",
    skills: [
      { name: "Cypress", level: 92 },
      { name: "Playwright", level: 85 },
      { name: "Java + JUnit/TestNG", level: 80 },
      { name: "C# + NUnit", level: 75 },
      { name: "Robot Framework", level: 70 },
      { name: "Appium (Mobile)", level: 78 },
      { name: "UiPath (RPA)", level: 65 },
    ],
  },
  {
    title: "Testes de API",
    skills: [
      { name: "Postman", level: 95 },
      { name: "Swagger", level: 90 },
      { name: "RestAssured (Java)", level: 80 },
      { name: "RestSharp (C#)", level: 75 },
    ],
  },
  {
    title: "Testes de Carga & Performance",
    skills: [
      { name: "K6", level: 78 },
      { name: "Locust", level: 70 },
    ],
  },
  {
    title: "Automação com IA",
    skills: [
      { name: "Playwright", level: 85 },
      { name: "MCP", level: 75 },
      { name: "ADR", level: 70 },
      { name: "SDD", level: 72 },
      { name: "Agentes", level: 68 },
      { name: "Harness Engineering", level: 65 },
    ],
  },
  {
    title: "Ferramentas & Processos",
    skills: [
      { name: "Git / GitHub / GitLab", level: 88 },
      { name: "Jira / Azure DevOps", level: 90 },
      { name: "Jenkins (CI/CD)", level: 75 },
      { name: "Scrum / Kanban", level: 92 },
      { name: "C4 Model / BPMN", level: 80 },
    ],
  },
];

function SkillBar({ name, level, visible }: Skill & { visible: boolean }) {
  return (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <span className="text-gray-300 text-sm font-medium">{name}</span>
        <span className="text-[#a3e635] text-xs font-bold">{level}%</span>
      </div>
      <div className="h-2 bg-[#1a1a1a] rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#84cc16] to-[#a3e635] rounded-full transition-all duration-1000 ease-out"
          style={{ width: visible ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={ref} className="h-full overflow-y-auto px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-10">
      <div className="max-w-3xl mx-auto w-full">
        <span className="text-[#a3e635] text-xs sm:text-sm font-bold uppercase tracking-widest">Stack Técnico</span>
        <h2 className="text-3xl sm:text-4xl font-black text-white mt-2 mb-6 sm:mb-8">Habilidades</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {skillGroups.map((group, gi) => (
            <div
              key={gi}
              className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-4 sm:p-6 hover:border-[#a3e635]/20 transition-colors"
            >
              <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#a3e635]"></span>
                {group.title}
              </h3>
              {group.skills.map((skill) => (
                <SkillBar key={skill.name} {...skill} visible={visible} />
              ))}
            </div>
          ))}
        </div>

        <div className="mt-6 lg:mt-8 bg-[#111111] border border-[#1f1f1f] rounded-xl p-4 sm:p-6">
          <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#a3e635]"></span>
            Testes Manuais
          </h3>
          <div className="flex flex-wrap gap-2">
            {["Regressão", "Exploratório", "Funcional", "Aceitação", "Smoke Test", "Usabilidade", "Desempenho"].map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1.5 bg-[#a3e635]/10 border border-[#a3e635]/20 text-[#a3e635] text-xs font-medium rounded-lg"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
