const features = [
  {
    title: "Doświadczenie",
    description: "Ponad 25 lat w branży motoryzacyjnej. Setki naprawionych pojazdów — od aut codziennych po klasyki.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    title: "Kompleksowa obsługa",
    description: "Mechanika, elektryka, układ hamulcowy, wydechowy, zawieszenie — wszystko w jednym miejscu.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1m0 0L11.42 4.97m-5.1 5.1H21M3 21h18" />
      </svg>
    ),
  },
  {
    title: "Renowacja klasyków",
    description: "Specjalizujemy się w przywracaniu do życia pojazdów zabytkowych — z pasją i dbałością o detale.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: "Indywidualne podejście",
    description: "Każdy pojazd i problem traktujemy indywidualnie. Uczciwa wycena, bez ukrytych kosztów.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

const WhyUs = () => {
  return (
    <section className="py-24 border-t border-zinc-800/40">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-amber-400/70 mb-3">
            Dlaczego my
          </p>
          <h2
            className="text-3xl lg:text-5xl font-bold tracking-tight"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Zaufaj profesjonalistom
          </h2>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800/40 hover:border-amber-400/20 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-amber-400/5 border border-amber-400/10 flex items-center justify-center mb-5 text-amber-400/70 group-hover:text-amber-400 group-hover:bg-amber-400/10 transition-all duration-300">
                {feature.icon}
              </div>
              <h3
                className="text-lg font-semibold mb-2 text-zinc-100"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {feature.title}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;