import Counter from "./ui/Counter";

const About = ({ yearsOnMarket = 25, heroImage = "/images/r107.jpg", heroImagePosition = "center 30%" }) => {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center" id="about">
      {/* Background image */}
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src={heroImage}
        alt="Mercedes Benz R107 SLC"
        style={{ objectPosition: heroImagePosition }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/30" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-2xl">
          {/* Gold accent line */}
          <div className="w-12 h-0.5 bg-amber-400 mb-8" />

          <p className="text-sm tracking-[0.3em] uppercase text-amber-400/80 mb-4">
            Warsztat samochodowy · Zielona Góra
          </p>

          <h1
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight mb-6"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Auto Moto
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-400">
              Centrum
            </span>
          </h1>

          <div className="flex items-baseline gap-4 mb-8">
            <span
              className="text-5xl lg:text-8xl font-black text-amber-300/90"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <Counter from={0} to={yearsOnMarket} />
            </span>
            <span className="text-lg lg:text-xl text-zinc-400 tracking-wide">
              lat na rynku
            </span>
          </div>

          <a
            href="#services"
            className="inline-flex items-center gap-3 px-8 py-3.5 bg-amber-400/10 border border-amber-400/30 rounded-full text-amber-300 text-sm tracking-widest uppercase hover:bg-amber-400/20 hover:border-amber-400/50 transition-all duration-300"
          >
            Poznaj nasze usługi
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent" />
    </section>
  );
};

export default About;