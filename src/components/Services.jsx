import Service from "./Service";
import { H2 } from "./ui/Typography";

const Services = ({ services = [] }) => {
  return (
    <section className="container my-12 px-12 sm:px-0" id="services">
      <H2 className="flex mb-5 gap-5 items-center">
        Sprawdź nasze usługi
        <img src="/images/screwdriver-wrench.svg" alt="" className="w-10 h-10" />
      </H2>

      <div className="grid grid-cols-1 min-[520px]:grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-3 mb-8">
        {services.map((service) => (
          <Service
            key={service.id}
            icon={service.icon}
            name={service.name}
            items={service.items}
          />
        ))}
      </div>

      <p className="text-white/50">
        Jeżeli poszukiwana przez Ciebie usługa nie została wymieniona w żadnej z powyższych kategorii{" "}
        <a className="text-white hover:text-amber-100" href="#contact">
          skontaktuj się z nami.
        </a>
      </p>
      <p className="text-white/50">
        Ceny poszczególnych usług ustalane są indywidualnie w zależności od złożoności problemu.
      </p>
    </section>
  );
};

export default Services;
