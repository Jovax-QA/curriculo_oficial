const contacts = [
  {
    label: "Telefone",
    value: "(48) 998026299",
    href: "tel:+5548998026299",
    icon: "📞",
  },
  {
    label: "E-mail",
    value: "jovani.criciuma@hotmail.com",
    href: "mailto:jovani.criciuma@hotmail.com",
    icon: "✉️",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/inspector-qa",
    href: "https://www.linkedin.com/in/inspector-qa/",
    icon: "🔗",
  },
  {
    label: "GitHub (QA)",
    value: "github.com/Jovani-QA",
    href: "https://github.com/Jovani-QA",
    icon: "💻",
  },
  {
    label: "GitHub (Testing)",
    value: "github.com/Jovani-Testing",
    href: "https://github.com/Jovani-Testing",
    icon: "🧪",
  },
  {
    label: "Localização",
    value: "Bairro Ana Maria, Criciúma — SC",
    href: "https://maps.google.com/?q=Criciuma,SC,Brazil",
    icon: "📍",
  },
];

export default function Contact() {
  return (
    <div className="h-full flex flex-col justify-center px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-10 max-w-2xl mx-auto w-full">
      <div className="fade-in-up">
        <span className="text-[#a3e635] text-xs sm:text-sm font-bold uppercase tracking-widest">Fale comigo</span>
        <h2 className="text-3xl sm:text-4xl font-black text-white mt-2 mb-3">Contato</h2>
        <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8">
          Estou disponível para novas oportunidades e desafios. Entre em contato!
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {contacts.map((c, i) => (
          <a
            key={i}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="flex items-center gap-3 sm:gap-4 bg-[#111111] border border-[#1f1f1f] rounded-xl p-3 sm:p-4 hover:border-[#a3e635]/50 hover:bg-[#141414] transition-all group fade-in-up"
            style={{ animationDelay: `${i * 0.08}s`, opacity: 0 }}
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#a3e635]/10 flex items-center justify-center text-lg sm:text-xl flex-shrink-0 group-hover:bg-[#a3e635]/20 transition-colors">
              {c.icon}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-gray-500 text-xs uppercase tracking-wider">{c.label}</p>
              <p className="text-white text-xs sm:text-sm font-medium truncate group-hover:text-[#a3e635] transition-colors">
                {c.value}
              </p>
            </div>
            <span className="text-gray-600 group-hover:text-[#a3e635] transition-colors">›</span>
          </a>
        ))}
      </div>
    </div>
  );
}
