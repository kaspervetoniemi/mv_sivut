// @ts-nocheck

import { services } from "../shared";
import type { Page } from "../App";
import ScrollReveal from "../ScrollReveal"; // Tuodaan animaatiokomponentti

interface Props {
  navigate: (p: Page) => void;
}

export default function Palvelut({ navigate }: Props) {
  return (
    <div>

      {/* ── PAGE HEADER ── */}
      <div className="sivu-hero">
        <h1 className="otsikko">Palvelut</h1>
      </div>

   {/* ── SERVICE LIST — alternating image sides ── */}
      <section className="osio osio-vaalea">
        <div className="sisalto">
          {services.map((service, i) => {
            const onLisalistoja = Boolean(service.listItems || service.contraindications);
            const onViimeinen = i === services.length - 1;
           const paaTeksti = (
  <div>
    <h2 className="otsikko">{service.title}</h2>
    <p className="palvelu-kuvaus">{service.description}</p>
    
   {service.id === "cambridge" && (
      <p className="palvelu-kuvaus" style={{ marginTop: "1rem" }}>
        Voit lukea onnistumistarinoita ja Cambridge-valmennuksesta lisää{" "}
        <a
          href="https://one2onediet.fi/onnistujat/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "inherit",
            fontWeight: 600,
            textDecoration: "underline",
            textUnderlineOffset: "3px",
          }}
        >
          täältä
        </a>
        .
      </p>
    )}
                {!onLisalistoja && (
                  <div className="palvelu-toiminnot">
                    <button onClick={() => navigate("ajanvaraus")} className="nappi nappi-pinkki">
                      Varaa aika
                    </button>
                  </div>
                )}
              </div>
            );

            return (
              <ScrollReveal key={service.title}>
                <div
                  id={service.id}
                  className={`palvelu-lohko ${onViimeinen ? "palvelu-lohko--viimeinen" : ""}`}
                >
                  <div className={`ruudukko-2 ${i % 2 === 0 ? "kaanna-mobiilissa" : ""}`}>
                    {i % 2 === 0 ? (
                      <>
                        <div className="kuva-45">
                          <img src={service.paaKuva} alt={service.imgAlt} />
                        </div>
                        {paaTeksti}
                      </>
                    ) : (
                      <>
                        {paaTeksti}
                        <div className="kuva-45">
                          <img src={service.paaKuva} alt={service.imgAlt} />
                        </div>
                      </>
                    )}
                  </div>

                  {onLisalistoja && (
                    <>
                      <div className="ruudukko-2 palvelu-lisatiedot">
                        {service.listItems && (
                          <div>
                            {service.listTitle && (
                              <h3 className="otsikko palvelu-alaotsikko">{service.listTitle}</h3>
                            )}
                            <ul className="palvelu-lista">
                              {service.listItems.map((item, idx) => (
                                <li key={idx}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {service.contraindications && (
                          <div>
                            {service.contraindicationsTitle && (
                              <h3 className="otsikko palvelu-alaotsikko">
                                {service.contraindicationsTitle}
                              </h3>
                            )}
                            <ul className="palvelu-lista">
                              {service.contraindications.map((item, idx) => (
                                <li key={idx}>{item}</li>
                              ))}
                            </ul>
                            {service.note && <p className="palvelu-huomio">{service.note}</p>}
                          </div>
                        )}
                      </div>

                      <div className="palvelu-toiminnot">
                        <button onClick={() => navigate("ajanvaraus")} className="nappi nappi-pinkki">
                          Varaa aika
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="osio osio-pinkki" style={{ textAlign: "center" }}>
        <ScrollReveal>
          <div>
            <h2 className="otsikko" style={{ marginBottom: "1.25rem" }}>Valmis aloittamaan?</h2>
            <p style={{ color: "var(--harmaa)", maxWidth: "28rem", margin: "0 auto 2rem" }}>
              Ota yhteyttä tai varaa aika suoraan — olen täällä auttamassa sinua kohti parempaa hyvinvointia.
            </p>
            <button onClick={() => navigate("ajanvaraus")} className="nappi nappi-pinkki">Varaa aika nyt</button>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}