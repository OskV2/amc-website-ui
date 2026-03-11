import Service from "./Service";

const Services = ({ services = [] }) => {
  return (
    <section className="py-24" id="services">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-amber-400/70 mb-3">
            Czym się zajmujemy
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-4">
            Nasze usługi
          </h2>
          <div className="w-16 h-0.5 bg-amber-400/30" />
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-4">
          {services.map((service) => (
            <Service
              key={service.id}
              icon={service.icon}
              name={service.name}
              items={service.items}
            />
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 pt-8 border-t border-zinc-800/60">
          <p className="text-zinc-500 text-sm leading-relaxed">
            Jeżeli poszukiwana przez Ciebie usługa nie została wymieniona w żadnej z powyższych kategorii{" "}
            — <a className="text-amber-400/80 hover:text-amber-300 transition-colors" href="#contact">skontaktuj się z nami</a>.
            Ceny ustalane są indywidualnie w zależności od złożoności problemu.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;