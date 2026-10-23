// @ts-nocheck

import type { Page } from "./App";

interface Props {
  navigate: (p: Page) => void;
}

const links: { label: string; page: Page }[] = [
  { label: "Etusivu",      page: "home" },
  { label: "Palvelut",     page: "palvelut" },
  { label: "Hinnasto",     page: "hinnasto" },
  { label: "Yhteystiedot", page: "yhteystiedot" },
  { label: "Ajanvaraus",   page: "ajanvaraus" },
];

export default function Footer({ navigate }: Props) {
  return (
    <footer className="footer">
      <div className="footer-sisalto">
        <div className="footer-ruudukko">

          {/* Column 1 — branding */}
          <div>
            <p className="footer-logo">Tmi Maria Viitasalo</p>
            <p className="footer-tagline">
              Hermoratahieronnan mestari,<br/>
              ravintovalmentaja &amp; <br/>
              psyykkinen valmentaja
            </p>
          </div>

          {/* Column 2 — contact */}
          <div>
            <p className="footer-otsikko">Yhteystiedot</p>
            <div className="footer-yhteystiedot">
              <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.85rem" }}>Lampintie 2, 69300 Toholampi</p>
              <p><a href="mailto:maria.viitasalo@cambridgeohjelma.fi">maria.viitasalo@cambridgeohjelma.fi</a></p>
              <p><a href="tel:+358458402788">045 840 2788</a></p>
            </div>
          </div>

{/* Column 3 — links + social */}
          <div>
            <p className="footer-otsikko">Linkit</p>
            <div className="for-linkit-some">
              <ul className="footer-linkit">
                {links.map(({ label, page }) => (
                  <li key={page}>
                    <button onClick={() => navigate(page)}>{label}</button>
                  </li>
                ))}
              </ul>
              <div className="footer-some">
                <a 
                  href="https://www.facebook.com/p/Hermoratahieroja-Ravintovalmentaja-Maria-Viitasalo-100094271881077/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="footer-some-nappi" 
                  aria-label="Facebook"
                >
                  <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.instagram.com/ravintojahyvinvointi_maria/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="footer-some-nappi" 
                  aria-otelabel="Instagram"
                >
                  <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="footer-pohja">
          <p className="footer-copyright">Tmi Maria Hannele Viitasalo | Made by Kasper Vetoniemi</p>
          <div className="footer-lait">
            <a href="#">Tietosuojaseloste</a>
            <a href="#">Evästeasetukset</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
