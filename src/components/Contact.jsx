import { H2 } from "./ui/Typography";

const Contact = ({ settings }) => {
  if (!settings) return null;

  const iconClasses = "w-5 h-5";
  const textClasses = "text-white/50";
  const informationClasses = "flex items-center gap-3 mb-4";

  return (
    <section
      className="container mb-12 flex flex-col lg:flex-row gap-3 px-12 sm:px-0"
      id="contact"
    >
      <div className="w-full lg:w-1/3">
        <H2 className="mb-4">Skontaktuj się z nami!</H2>

        {settings.phone && (
          <div className={informationClasses}>
            <img src="/images/phone.svg" alt="" className={iconClasses} />
            <p className={textClasses}>
              <a href={`tel:+48${settings.phone.replace(/\s/g, "")}`}>
                {settings.phone}
              </a>
            </p>
          </div>
        )}

        {settings.email && (
          <div className={informationClasses}>
            <img src="/images/envelope.svg" alt="" className={iconClasses} />
            <p className={textClasses}>
              <a href={`mailto:${settings.email}`}>{settings.email}</a>
            </p>
          </div>
        )}

        {settings.hours && (
          <div className={informationClasses}>
            <img src="/images/clock.svg" alt="" className={iconClasses} />
            <p className={textClasses}>{settings.hours}</p>
          </div>
        )}

        {settings.address && (
          <div className={informationClasses}>
            <img src="/images/location.svg" alt="" className={iconClasses} />
            <p className={textClasses}>{settings.address}</p>
          </div>
        )}
      </div>

      {settings.maps_embed_url && (
        <div className="w-full lg:w-2/3 h-80">
          <iframe
            className="w-full h-full"
            src={settings.maps_embed_url}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa lokalizacji warsztatu"
          />
        </div>
      )}
    </section>
  );
};

export default Contact;
