// @ts-nocheck

import { useState } from "react";
import { services, testimonials } from "../shared";
import type { Page } from "../App";

interface Props {
  navigate: (p: Page) => void;
}

export default function Home({ navigate }: Props) {
  const [reviewIndex, setReviewIndex] = useState(0);
  const review = testimonials[reviewIndex];

  function prevReview() { setReviewIndex(i => i === 0 ? testimonials.length - 1 : i - 1); }
  function nextReview() { setReviewIndex(i => i === testimonials.length - 1 ? 0 : i + 1); }

  return (
    <div>

      {/* ── HERO ── */}
      <section className="hero">
        <video 
    className="hero-video" 
    autoPlay 
    muted 
    loop 
    playsInline 
    poster="/assets/hero-poster.jpg"
  >
    <source src="/public/herovideo.mp4" type="video/mp4" />
        </video>
        <div className="hero-peitto backdrop-blur-[4px]" />
        <div className="hero-peitto" />
        <div className="hero-sisalto">
          <span className="hero-ylateksti">Minä pystyn vaikuttamaan elämääni, ja minun hyvinvointini on huolenpidon arvoinen.</span>
          <h1 className="hero-otsikko">Yksilöllistä ravintovalmennusta, psyykkistä valmennusta ja hermoratahierontaa</h1>
          <p className="hero-alaotsikko">
            Sinun tilanteesi, tarpeesi ja tavoitteesi ovat työskentelyn lähtökohta.
          </p>
          <div className="hero-napit">
            <button onClick={() => navigate("ajanvaraus")} className="nappi nappi-pinkki">Varaa aika</button>
            <button onClick={() => navigate("palvelut")}   className="nappi nappi-valkoinen">Tutustu palveluihin</button>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="osio osio-pinkki">
        <div className="sisalto">
          <div className="ruudukko-2">
            <div className="minusta-teksti">
              <span className="ylateksti">Minusta</span>
              <h2 className="otsikko" style={{ marginBottom: "1.5rem" }}>Hei, olen Maria Hannele Viitasalo</h2>
              <p>Olen koulutettu hermoratahieroja ja ravintovalmentaja, jolla on intohimo auttaa ihmisiä voimaan paremmin. Uskon kokonaisvaltaiseen hyvinvointiin, jossa keho ja mieli toimivat yhdessä.</p>
              <p>Jokainen asiakas on minulle ainutlaatuinen yksilö, ja räätälöin palveluni aina juuri sinun tarpeisiisi sopiviksi.</p>
              <button onClick={() => navigate("yhteystiedot")} className="nappi nappi-pinkki" style={{ marginTop: "2rem" }}>
                Lue lisää
              </button>
            </div>
      <div className="kuva-45" style={{ background: 'transparent', maxWidth: '400px', margin: '0 auto' }}>
        <img 
          src="mariaesittely.webp" 
          alt="Maria Viitasalo" 
          style={{ objectFit: 'contain', width: '100%', height: '100%' }}
        />
      </div>
          </div>
        </div>
      </section>

   {/* ── SERVICES ── */}
<section className="osio osio-vaalea">
  <div className="sisalto">
    <div className="otsikkoalue">
      <span className="ylateksti">Palvelut</span>
      <h2 className="otsikko">Palvelut</h2>
    </div>

    <div className="ruudukko-2-palvelut">
      {services.map(service => (
        <div 
          key={service.title} 
          className="kortti"
          style={{ cursor: "pointer" }}
          onClick={() => {
            // 1. Vaihdetaan ensin Palvelut-sivulle (alkuperäinen komento)
            navigate("palvelut");
            
            // 2. Odotetaan pieni hetki, että sivu ehtii piirtyä ruudulle,
            // ja käsketään selainta rullaamaan pehmeästi oikeaan kohtaan
            setTimeout(() => {
              const kohde = document.getElementById(service.id);
              if (kohde) {
                kohde.scrollIntoView({ behavior: "auto" });
              }
            }, 10);
          }}
        >
          <div className="palvelukortti-kuva">
            <img src={service.img} alt={service.imgAlt} />
          </div>
          <div className="kortti-sisalto">
            <span className="palvelu-ikoni">{service.icon}</span>
            <h3 className="palvelu-otsikko">{service.title}</h3>
            <p className="palvelu-teksti">{service.shortDescription}</p>
          </div>
        </div>
      ))}
    </div>

    <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
      <button onClick={() => navigate("palvelut")} className="nappi nappi-reunus">
        Lue lisää palveluista
      </button>
    </div>
  </div>
</section>

      {/* ── TESTIMONIALS ── */}
      <section className="osio osio-pinkki">
        <div className="sisalto-keski">
          <div className="otsikkoalue">
            <span className="ylateksti">Asiakkaiden kertomaa</span>
            <h2 className="otsikko">Mitä asiakkaat sanovat</h2>
          </div>
          <div className="arvostelu-kortti">
            <div className="tahdet">{"★".repeat(review.rating)}</div>
            <blockquote className="lainaus">&ldquo;{review.text}&rdquo;</blockquote>
            <p className="asiakkaan-nimi">— {review.name}</p>
          </div>
          <div className="karuselli-napit">
            <button className="karuselli-nappi" onClick={prevReview} aria-label="Edellinen">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <div className="pisteet">
              {testimonials.map((_, i) => (
            <button key={i} className={`piste ${i === reviewIndex ? "aktiivinen" : ""}`} onClick={() => setReviewIndex(i)} aria-label={`Siirry arvosteluun ${i + 1}`} />
              ))}
            </div>
            <button className="karuselli-nappi" onClick={nextReview} aria-label="Seuraava">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>
        </div>
      </section>

{/* ── LOCATION ── */}
      <section className="osio osio-vaalea">
        <div className="sisalto">
          <div className="otsikkoalue">
            <span className="ylateksti">Sijainti</span>
            <h2 className="otsikko">Löydä minut</h2>
          </div>
          <div className="ruudukko-2">
            
            {/* KARTTA VASEMMALLA (korvasi aiemman kuvan) */}
            <div style={{ borderRadius: "1rem", overflow: "hidden", border: "1px solid var(--reuna)", height: "100%", minHeight: "350px" }}>
              <iframe 
                title="Sijainti kartalla"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1271.5337424636693!2d24.247866781552883!3d63.773878904606946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4686d37ec2b924f9%3A0x614da4bbba089ab4!2sLampintie%202%2C%2069300%20Toholampi!5e1!3m2!1sfi!2sfi!4v1792165390777!5m2!1sfi!2sfi" 
                width="100%" 
                height="100%" 
                style={{ border: 0, display: "block", minHeight: "350px" }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>

            {/* YHTEYSTIEDOT OIKEALLA */}
            <div className="yhteystiedot-lista">
              
              <div className="yhteystieto-rivi">
                <div className="yhteystieto-ikoni">
                  <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="yhteystieto-otsikko">Osoite</p>
                  <p className="yhteystieto-arvo">Lampintie 2<br />69300 Toholampi</p>
                </div>
              </div>
              
              <div className="yhteystieto-rivi">
                <div className="yhteystieto-ikoni">
                  <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81 19.79 19.79 0 012 2.18 2 2 0 014 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <div>
                  <p className="yhteystieto-otsikko">Puhelin</p>
                  <a href="tel:+358458402788" className="yhteystieto-arvo">045 840 2788</a>
                </div>
              </div>
              
              <div className="yhteystieto-rivi">
                <div className="yhteystieto-ikoni">
                  <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <p className="yhteystieto-otsikko">Sähköposti</p>
                  <a href="mailto:maria.viitasalo@cambridgeohjelma.fi" className="yhteystieto-arvo">maria.viitasalo@cambridgeohjelma.fi</a>
                </div>
              </div>

              {/* SOME-KOHTA */}
              <div className="yhteystieto-rivi">
                <div className="yhteystieto-ikoni">
                  <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
                <div>
                  <p className="yhteystieto-otsikko">Seuraa somessa</p>
                  <div className="some-linkit">
                    <a href="https://www.facebook.com/p/Hermoratahieroja-Ravintovalmentaja-Maria-Viitasalo-100094271881077/" target="_blank" rel="noreferrer" className="some-linkki">
                      <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                      </svg>
                      Facebook
                    </a>
                    <a href="https://www.instagram.com/ravintojahyvinvointi_maria/" target="_blank" rel="noreferrer" className="some-linkki">
                      <svg fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <rect x="2" y="2" width="20" height="20" rx="5" />
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                      Instagram
                    </a>
                  </div>
                </div>
              </div>

              <button onClick={() => navigate("ajanvaraus")} className="nappi nappi-pinkki" style={{ alignSelf: "flex-start", marginTop: "0.75rem" }}>
                Varaa aika
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}