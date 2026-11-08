import Counter from "./ui/Counter";

const About = ({ heroImage = "/images/r107.jpg" }) => {
  const yearsOnMarket = new Date().getFullYear() - 1999;

  return (
    <section
      className="relative isolate grid w-full bg-zinc-950 lg:grid-cols-1"
      id="about"
      aria-labelledby="hero-heading"
    >
      {/* Keep the photograph's natural proportions at every screen size. */}
      <div className="relative order-2 min-w-0 self-end lg:col-start-1 lg:row-start-1">
        <img
          className="block h-auto w-full"
          src={heroImage}
          alt="Mercedes-Benz R107 SLC"
          width={2880}
          height={1000}
          fetchPriority="high"
        />
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-zinc-950 to-transparent lg:h-12" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-zinc-950 to-transparent lg:h-24" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden bg-[linear-gradient(90deg,#09090b_0%,rgba(9,9,11,0.88)_22%,rgba(9,9,11,0.45)_38%,transparent_58%)] lg:block" />
      </div>

      <div className="relative z-10 order-1 mx-auto w-full max-w-7xl px-6 pb-10 pt-32 sm:px-8 sm:pt-36 lg:col-start-1 lg:row-start-1 lg:self-center lg:px-12 lg:pb-24 lg:pt-40">
        <div className="max-w-lg lg:w-[40%] lg:max-w-md">
          <div aria-hidden="true" className="mb-6 h-0.5 w-12 bg-amber-400" />

          <p className="mb-4 text-xs uppercase leading-relaxed tracking-[0.22em] text-amber-300/80">
            Warsztat samochodowy · Zielona Góra
          </p>

          <h1
            id="hero-heading"
            className="mb-6 text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-[clamp(3rem,4.5vw,4.5rem)]"
          >
            Auto Moto
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-400">
              Centrum
            </span>
          </h1>

          <div className="mb-8 flex items-center gap-3">
            <span className="text-3xl font-bold tabular-nums text-amber-300 sm:text-4xl" style={{ fontFamily: "'Outfit', sans-serif" }}>
              <Counter from={0} to={yearsOnMarket} />
            </span>
            <span className="text-sm leading-snug text-zinc-400">
              lat doświadczenia
              <br />
              i pasji do motoryzacji
            </span>
          </div>

          <a
            href="#services"
            className="inline-flex items-center gap-3 rounded-full border border-amber-400/30 bg-amber-400/10 px-6 py-3.5 text-xs uppercase tracking-widest text-amber-300 transition-colors duration-300 hover:border-amber-400/50 hover:bg-amber-400/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300 sm:px-8"
          >
            Poznaj nasze usługi
            <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
