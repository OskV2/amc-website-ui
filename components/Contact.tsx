import React from "react";

import { H2 } from "../components/ui/Typography";
import PhoneIcon from "../public/phone.svg";
import EnvelopeIcon from "../public/envelope.svg";
import ClockIcon from "../public/clock.svg";
import LocationIcon from "../public/location.svg";

const Contact = () => {
  const iconClasses: string = "w-5 h-5";
  const textClasses: string = "text-white/50";
  const informationClasses: string = "flex items-center gap-3 mb-4";

  return (
    <section className="container mb-12 flex gap-3" id="contact">
      <div className="w-1/3">
        <H2 className="mb-4">Skontaktuj się z nami!</H2>
        <div className={informationClasses}>
          <PhoneIcon className={iconClasses} />
          <p className={textClasses}>605 630 628</p>
        </div>
        <div className={informationClasses}>
          <EnvelopeIcon className={iconClasses} />
          <p className={textClasses}>amczg@biuro.pl</p>
        </div>
        <div className={informationClasses}>
          <ClockIcon className={iconClasses} />
          <p className={textClasses}>Poniedziałek - Piątek: 8:00 - 17:00</p>
        </div>
        <div className={informationClasses}>
          <LocationIcon className={iconClasses} />
          <p className={textClasses}>ul. Jodłowa 2, 65-120 Zielona Góra</p>
        </div>
      </div>
      <div className="w-2/3 h-80">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9586.661096370737!2d15.524713710663777!3d51.9654928169755!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470613a52b25bd5b%3A0x6847a5a2e07c7340!2sAuto-Moto!5e0!3m2!1spl!2spl!4v1718874737222!5m2!1spl!2spl"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
};

export default Contact;
