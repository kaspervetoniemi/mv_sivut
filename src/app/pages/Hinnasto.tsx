// @ts-nocheck

import { prices } from "../shared";
import type { Page } from "../App";
import ScrollReveal from "../ScrollReveal"; // 1. Tuodaan animaatiokomponentti

interface Props {
  navigate: (p: Page) => void;
}

export default function Hinnasto({ navigate }: Props) {
  return (
    <div>

      {/* ── PAGE HEADER ── (Ei animoida, jotta näkyy heti sivun latautuessa) */}
      <div className="sivu-hero">
        <span className="ylateksti">Hinnasto</span>
        <h1 className="otsikko">Hinnasto</h1>
      </div>

      {/* ── PRICE LIST ── */}
      <section className="osio osio-vaalea">
        <ScrollReveal> {/* 2. Kääritään alue animaation sisään */}
          <div className="sisalto-keski">

            <div>
              {prices.map((item, index) => (
                <div key={index} className="hinta-rivi"> {/* Vaihdettiin avaimeksi index, koska listassa on kaksi samaa palvelunimeä */}
                  <div>
                    <span className="hinta-palvelu">{item.service}</span>
                    {item.duration && <span className="hinta-kesto">{item.duration}</span>}
                  </div>
                  <span className="hinta-hinta">{item.price}</span>
                </div>
              ))}
            </div>

            {/* Cancellation policy */}
            <div className="hinta-huomio">
              Hinnat sisältävät arvonlisäveron 25,5 %. Peruutukset tulee tehdä vähintään 24 tuntia ennen sovittua aikaa.
              Myöhäisestä peruutuksesta veloitetaan 50 % palvelun hinnasta.
            </div>

            <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
              <button onClick={() => navigate("ajanvaraus")} className="nappi nappi-pinkki">Varaa aika nyt</button>
            </div>

          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}