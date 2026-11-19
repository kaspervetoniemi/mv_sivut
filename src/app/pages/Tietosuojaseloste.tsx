// @ts-nocheck

import ScrollReveal from "../ScrollReveal";

export default function Tietosuojaseloste() {
  return (
    <div>
      {/* ── PAGE HEADER ── */}
      <div className="sivu-hero">
        <h1 className="otsikko">Tietosuojaseloste</h1>
      </div>

      {/* ── SISÄLTÖ ── */}
      <section className="osio">
        <ScrollReveal>
          <div className="sisalto">
            <div className="minusta-teksti tietosuoja-palsta">
              <p>
                Tämä on Tmi. Maria Hannele Viitasalon tietosuojaseloste. Tähän
                johdantokappaleeseen kuvataan lyhyesti, miten asiakkaiden ja
                verkkosivuston kävijöiden henkilötietoja käsitellään.
              </p>

              <h2 className="otsikko">1. Rekisterinpitäjä</h2>
              <p>
                Täytetekstiä ensimmäisen väliotsikon alle. Tähän kirjataan
                yrityksen nimi, Y-tunnus sekä yhteystiedot rekisteriasioita
                varten.
              </p>

              <h2 className="otsikko">2. Henkilötietojen käsittelyn tarkoitus</h2>
              <p>
                Täytetekstiä toisen väliotsikon alle. Tässä osiossa kuvataan,
                mitä tietoja asiakkaista kerätään ajanvarauksen ja
                yhteydenottojen yhteydessä.
              </p>

              <h2 className="otsikko">3. Tietojen säilytys ja suojaus</h2>
              <p>
                Täytetekstiä kolmannen väliotsikon alle. Tähän lisätään kuvaus
                tietojen säilytysajoista sekä tietoturvakäytännöistä.
              </p>

              <h2 className="otsikko">4. Evästeet ja rekisteröidyn oikeudet</h2>
              <p>
                Täytetekstiä neljännen väliotsikon alle. Tähän kirjataan tiedot
                evästeistä sekä asiakkaan oikeudesta tarkastaa ja pyytää
                poistamaan omat tietonsa.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}