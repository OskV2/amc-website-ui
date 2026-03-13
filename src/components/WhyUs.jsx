const WhyUs = ({ data }) => {
  if (!data) return null;
  const { features, section_title, section_subtitle } = data;

  return (
    <section className="py-24 border-t border-zinc-800/40">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-amber-400/70 mb-3">
            {section_subtitle}
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight">
            {section_title}
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
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={feature.icon} />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-zinc-100">
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