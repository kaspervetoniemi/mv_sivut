// @ts-nocheck

import ScrollReveal from "../ScrollReveal";
import { ryhmavalmennukset } from "../shared";

const BOOKING_URL =
  "https://bookings.cloud.microsoft/book/CambridgeValmentajaMariaViitasalo@cambridgeohjelma.fi/?ismsaljsauthenabled=true";

export default function Ryhmavalmennukset() {
  return (
    <div>
      <div className="sivu-hero">
        <h1 className="otsikko">Ryhmävalmennukset</h1>
      </div>

      <section className="osio osio-vaalea">
        <ScrollReveal>
          <div className="sisalto">
            <div className="ruudukko-2 ryhma-ruudukko">
              <div>
                {ryhmavalmennukset.length === 0 ? (
                  <div>
                    <h2 className="otsikko">Tulevat ryhmävalmennukset</h2>
                    <p className="palvelu-kuvaus">
                      Tällä hetkellä ei ole avoimia ryhmävalmennuksia. Ota yhteyttä sähköpostitse{" "}
                      <a href="mailto:maria.viitasalo@cambridgeohjelma.fi" className="ryhma-linkki">
                        maria.viitasalo@cambridgeohjelma.fi
                      </a>
                      .
                    </p>
                  </div>
                ) : (
                  ryhmavalmennukset.map((ryhma) => (
                    <div key={ryhma.id} className="ryhma-kortti">
                      <h2 className="otsikko">{ryhma.title}</h2>
                      <p className="palvelu-kuvaus">{ryhma.text}</p>

                      {ryhma.dates.length > 0 && (
                        <>
                          <h3 className="otsikko palvelu-alaotsikko">
                            {ryhma.datesTitle || "Aloitusajankohdat"}
                          </h3>
                          <ul className="palvelu-lista">
                            {ryhma.dates.map((pvm, idx) => (
                              <li key={idx}>
                                <strong>{pvm}</strong>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}

                      <p className="palvelu-kuvaus">
                        {ryhma.infoUrl ? (
                          <>
                            Lisätietoja voit lukea{" "}
                            <a
                              href={ryhma.infoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="ryhma-linkki"
                            >
                              täältä
                            </a>{" "}
                            tai laittamalla minulle sähköpostia:{" "}
                          </>
                        ) : (
                          "Lisätietoja saat laittamalla minulle sähköpostia: "
                        )}
                        <a href="mailto:maria.viitasalo@cambridgeohjelma.fi" className="ryhma-linkki">
                          maria.viitasalo@cambridgeohjelma.fi
                        </a>
                      </p>
                    </div>
                  ))
                )}
              </div>

              <div className="varaus-kortti">
                <div className="varaus-ikoni">📅</div>
                <h2 className="otsikko varaus-otsikko">Siirry ajanvarauskalenteriin</h2>
                <p className="varaus-teksti">
                  Ilmoittaudu ryhmävalmennukseen helposti Microsoft Bookings -varausjärjestelmän kautta. Saat vahvistuksen ilmoittautumisestasi heti sähköpostiisi.
                </p>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nappi nappi-pinkki varaus-nappi"
                >
                  <span>Avaa varauskalenteri</span>
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}