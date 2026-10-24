// @ts-nocheck

import ScrollReveal from "../ScrollReveal"; // Tuodaan animaatiokomponentti

const BOOKING_URL =
  "https://bookings.cloud.microsoft/book/CambridgeValmentajaMariaViitasalo@cambridgeohjelma.fi/?ismsaljsauthenabled=true";

export default function Ajanvaraus() {
  return (
    <div>
      {/* ── PAGE HEADER ── (Ei animoida, jotta näkyy heti) */}
      <div className="sivu-hero">
        <span className="ylateksti">Ajanvaraus</span>
        <h1 className="otsikko">Ajanvaraus</h1>
        <p
          style={{
            color: "var(--harmaa)",
            maxWidth: "32rem",
            margin: "1rem auto 0",
            fontSize: "0.95rem",
          }}
        >
          Ajanvaraus tapahtuu turvallisesti ja helposti Microsoft Bookings -varausjärjestelmän kautta.
        </p>
      </div>

      {/* ── BOOKING CARD ── */}
      <section className="osio osio-vaalea">
        <ScrollReveal>
          <div className="sisalto-keski" style={{ textAlign: "center" }}>
            <div
              style={{
                backgroundColor: "#ffffff",
                padding: "3.5rem 2rem",
                borderRadius: "20px",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.06)",
                border: "1px solid rgba(0, 0, 0, 0.06)",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  backgroundColor: "var(--pinkki-vaalea, #fdf2f4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.5rem",
                  color: "var(--pinkki, #d946ef)",
                  fontSize: "1.75rem",
                }}
              >
                📅
              </div>

              <h2 className="otsikko" style={{ fontSize: "1.6rem", margin: "0 auto 1rem" }}>
                Siirry ajanvarauskalenteriin
              </h2>

              <p
                style={{
                  color: "var(--harmaa)",
                  lineHeight: "1.7",
                  marginBottom: "2rem",
                  fontSize: "0.95rem",
                }}
              >
                Varausjärjestelmästä näet ajantasaiset vapaat ajat kaikkiin palveluihin sekä saat heti vahvistuksen varauksestasi sähköpostiisi.
              </p>

              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="nappi nappi-pinkki"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  textDecoration: "none",
                  fontSize: "1.05rem",
                  padding: "0.9rem 2rem",
                }}
              >
                <span>Avaa varauskalenteri</span>
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>

            {/* Cancellation policy */}
            <div className="hinta-huomio">
              Hinnat sisältävät arvonlisäveron 25,5 %. Peruutukset tulee tehdä vähintään 24 tuntia ennen sovittua aikaa.
              Myöhäisestä peruutuksesta veloitetaan 50 % palvelun hinnasta.
            </div>

            {/* ── SUORA YHTEYDENOTTO ── */}
            <div className="suora-yhteys" style={{ marginTop: "3.5rem" }}>
              <p>Etkö löytänyt sopivaa aikaa tai haluatko kysyä lisää?</p>
              <div className="suora-linkit">
                <a href="tel:+358458402788" className="suora-linkki">
                  045 840 2788
                </a>
                <a href="mailto:maria.viitasalo@cambridgeohjelma.fi" className="suora-linkki">
                  maria.viitasalo@cambridgeohjelma.fi
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}