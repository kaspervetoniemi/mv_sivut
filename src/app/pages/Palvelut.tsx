// @ts-nocheck

import { services } from "../shared";
import type { Page } from "../App";

interface Props {
  navigate: (p: Page) => void;
}

export default function Palvelut({ navigate }: Props) {
  return (
    <div>

      {/* ── PAGE HEADER ── */}
      <div className="sivu-hero">
        <span className="ylateksti">Palvelut</span>
        <h1 className="otsikko">Palvelut</h1>
      </div>

   {/* ── SERVICE LIST — alternating image sides ── */}
      <section className="osio osio-vaalea">
        <div className="sisalto">
          {services.map((service, i) => (
            <div
              key={service.title}
              id={service.id} /* LISÄÄ TÄMÄ RIVI TÄHÄN */
              /* TÄSSÄ ON MUUTOS: Lisätään kaanna-mobiilissa vain jos kuva on koodissa ensin */
              className={`ruudukko-2 ${i % 2 === 0 ? 'kaanna-mobiilissa' : ''}`}
              style={{ marginBottom: i < services.length - 1 ? "5rem" : "0" }}
            >
              {i % 2 === 0 ? (
                /* Even: image left */
                <>
                  <div className="kuva-45"><img src={service.img} alt={service.imgAlt} /></div>
                  <div>
                    <span className="palvelu-ikoni" style={{ fontSize: "2rem", marginBottom: "1.25rem" }}>{service.icon}</span>
                    <h2 className="otsikko" style={{ marginBottom: "1.25rem" }}>{service.title}</h2>
                    <p style={{ color: "var(--harmaa)", lineHeight: "1.8", marginBottom: "2rem" }}>{service.description}</p>
                    <button onClick={() => navigate("ajanvaraus")} className="nappi nappi-pinkki">Varaa aika</button>
                  </div>
                </>
              ) : (
                /* Odd: image right */
                <>
                  <div>
                    <span className="palvelu-ikoni" style={{ fontSize: "2rem", marginBottom: "1.25rem" }}>{service.icon}</span>
                    <h2 className="otsikko" style={{ marginBottom: "1.25rem" }}>{service.title}</h2>
                    <p style={{ color: "var(--harmaa)", lineHeight: "1.8", marginBottom: "2rem" }}>{service.description}</p>
                    <button onClick={() => navigate("ajanvaraus")} className="nappi nappi-pinkki">Varaa aika</button>
                  </div>
                  <div className="kuva-45"><img src={service.img} alt={service.imgAlt} /></div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="osio osio-pinkki" style={{ textAlign: "center" }}>
        <h2 className="otsikko" style={{ marginBottom: "1.25rem" }}>Valmis aloittamaan?</h2>
        <p style={{ color: "var(--harmaa)", maxWidth: "28rem", margin: "0 auto 2rem" }}>
          Ota yhteyttä tai varaa aika suoraan — olen täällä auttamassa sinua kohti parempaa hyvinvointia.
        </p>
        <button onClick={() => navigate("ajanvaraus")} className="nappi nappi-pinkki">Varaa aika nyt</button>
      </section>

    </div>
  );
}