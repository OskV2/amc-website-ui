const Contact = ({ settings }) => {
  if (!settings) return null;

  const contactItems = [
    {
      icon: "/images/phone.svg",
      label: "Telefon",
      value: settings.phone,
      href: settings.phone ? `tel:+48${settings.phone.replace(/\s/g, "")}` : null,
    },
    {
      icon: "/images/envelope.svg",
      label: "Email",
      value: settings.email,
      href: settings.email ? `mailto:${settings.email}` : null,
    },
    {
      icon: "/images/clock.svg",
      label: "Godziny",
      value: settings.hours,
      href: null,
    },
    {
      icon: "/images/location.svg",
      label: "Adres",
      value: settings.address,
      href: settings.maps_url || (settings.address
        ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(settings.address)}`
        : null),
      external: true,
    },
  ].filter((item) => item.value);

  return (
    <section className="py-24 border-t border-zinc-800/40" id="contact">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-amber-400/70 mb-3">
            Zapraszamy
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-4">
            Kontakt
          </h2>
          <div className="w-16 h-0.5 bg-amber-400/30" />
        </div>

        <div>
          {/* Contact info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactItems.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-amber-400/5 border border-amber-400/10 flex items-center justify-center shrink-0">
                  <img src={item.icon} alt="" className="w-4 h-4 opacity-60" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider mb-0.5">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="text-zinc-200 hover:text-amber-300 transition-colors"
                    >
                      {item.value}
                      {item.external && (
                        <span className="sr-only"> (otwiera się w nowej karcie)</span>
                      )}
                    </a>
                  ) : (
                    <p className="text-zinc-200">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {settings.maps_url && (
            <a
              href={settings.maps_url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-3 rounded-lg border border-amber-400/30 bg-amber-400/10 px-6 py-3 font-medium text-amber-300 transition-colors hover:bg-amber-400/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400"
            >
              Otwórz w Mapach Google
              <span aria-hidden="true">↗</span>
              <span className="sr-only">(otwiera się w nowej karcie)</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
