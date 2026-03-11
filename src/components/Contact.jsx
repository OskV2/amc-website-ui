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
      href: null,
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

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
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
                      className="text-zinc-200 hover:text-amber-300 transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-zinc-200">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Map */}
          {settings.maps_embed_url && (
            <div className="lg:col-span-3 rounded-xl overflow-hidden border border-zinc-800/40 h-80 lg:h-auto min-h-[320px]">
              <iframe
                className="w-full h-full"
                src={settings.maps_embed_url}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokalizacja warsztatu"
                style={{ filter: "invert(0.9) hue-rotate(180deg) brightness(0.8) contrast(1.1)" }}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;