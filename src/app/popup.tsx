// @ts-nocheck

import { useState, useEffect } from "react";
import { etusivuPopup } from "./shared";

function onkoKelvollinenPuhelin(numero) {
  const siistitty = numero.trim();
  if (!/^[+\d\s\-()]+$/.test(siistitty)) return false;
  const numerot = siistitty.replace(/\D/g, "");
  return numerot.length >= 7 && numerot.length <= 15;
}

export default function Popup({ navigate }) {
  const [tila, setTila] = useState("piilossa");
  const [sulkeutuu, setSulkeutuu] = useState(false);

  const [valmennus] = useState(etusivuPopup.valmennuksenNimi);
  const [nimi, setNimi] = useState("");
  const [sahkoposti, setSahkoposti] = useState("");
  const [puhelin, setPuhelin] = useState("");
  const [puhelinVirhe, setPuhelinVirhe] = useState("");
  const [viesti, setViesti] = useState("");
  const [ilmoittaudun, setIlmoittaudun] = useState(false);
  const [lahetetaan, setLahetetaan] = useState(false);
  const [lahetetty, setLahetetty] = useState(false);

  useEffect(() => {
    if (!etusivuPopup || !etusivuPopup.aktiivinen) return;

    const tallennettuTila = sessionStorage.getItem("etusivuPopupTila");
    if (tallennettuTila === "suljettu") {
      setTila("suljettu");
      return;
    }
    if (tallennettuTila === "pienennetty") {
      setTila("pienennetty");
      return;
    }

    const ajastin = setTimeout(() => {
      setTila("auki");
    }, etusivuPopup.viiveMs || 4000);

    return () => clearTimeout(ajastin);
  }, []);

  useEffect(() => {
    if (tila !== "auki") return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") pienennaPopup();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [tila, sulkeutuu]);

  function avaaPopup() {
    setSulkeutuu(false);
    setTila("auki");
    sessionStorage.setItem("etusivuPopupTila", "auki");
  }

  function pienennaPopup() {
    if (sulkeutuu) return;
    setSulkeutuu(true);
    setTimeout(() => {
      setSulkeutuu(false);
      setTila("pienennetty");
      sessionStorage.setItem("etusivuPopupTila", "pienennetty");
    }, 320);
  }

  function suljeKokonaan() {
    if (tila === "auki") {
      if (sulkeutuu) return;
      setSulkeutuu(true);
      setTimeout(() => {
        setSulkeutuu(false);
        setTila("suljettu");
        sessionStorage.setItem("etusivuPopupTila", "suljettu");
      }, 320);
    } else {
      setTila("suljettu");
      sessionStorage.setItem("etusivuPopupTila", "suljettu");
    }
  }

  function siirryRyhmavalmennuksiin() {
    sessionStorage.setItem("etusivuPopupTila", "pienennetty");
    setTila("pienennetty");
    if (navigate) navigate("ryhmavalmennukset");
  }

  function handlePuhelinChange(arvo) {
    setPuhelin(arvo);
    if (puhelinVirhe && onkoKelvollinenPuhelin(arvo)) {
      setPuhelinVirhe("");
    }
  }

  function tarkistaPuhelin() {
    if (!puhelin.trim()) {
      setPuhelinVirhe("Puhelinnumero on pakollinen.");
      return false;
    }
    if (!onkoKelvollinenPuhelin(puhelin)) {
      setPuhelinVirhe("Tarkista puhelinnumero (esim. 040 123 4567).");
      return false;
    }
    setPuhelinVirhe("");
    return true;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!tarkistaPuhelin() || !ilmoittaudun) return;

    setLahetetaan(true);

    try {
      if (etusivuPopup.lomakeUrl) {
        await fetch(etusivuPopup.lomakeUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            valmennus,
            nimi,
            sahkoposti,
            puhelin,
            viesti,
          }),
        });
      }
      setLahetetty(true);
    } finally {
      setLahetetaan(false);
    }
  }

  if (tila === "piilossa" || tila === "suljettu") return null;

  /* ── PIENENNETTY KUVIO SIVUN OIKEASSA LAIDASSA ── */
  if (tila === "pienennetty") {
    return (
      <div className="popup-kieleke-wrap">
        <button
          type="button"
          className="popup-kieleke-sulje"
          onClick={suljeKokonaan}
          aria-label="Sulje ilmoitus kokonaan"
          title="Sulje kokonaan"
        >
          <svg
            width="11"
            height="11"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <button
          type="button"
          className="popup-kieleke"
          onClick={avaaPopup}
          aria-label="Avaa ilmoittautumisikkuna"
          title={etusivuPopup.otsikko}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        </button>
      </div>
    );
  }

  /* ── AVOIN POPUP-IKKUNA ── */
  return (
    <div
      className={`popup-tausta ${sulkeutuu ? "popup-sulkeutuu" : ""}`}
      onClick={pienennaPopup}
    >
      <div
        className={`popup-laatikko ${sulkeutuu ? "popup-sulkeutuu" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="popup-sulje"
          onClick={pienennaPopup}
          aria-label="Pienennä sivuun"
          title="Pienennä sivun reunaan"
        >
          ✕
        </button>

        <h2 className="otsikko popup-otsikko">{etusivuPopup.otsikko}</h2>
        <p className="popup-teksti">{etusivuPopup.teksti}</p>

        <button
          type="button"
          className="popup-lue-lisaa"
          onClick={siirryRyhmavalmennuksiin}
        >
          {etusivuPopup.lueLisaaTeksti}
        </button>

        {lahetetty ? (
          <div className="popup-kiitos">
            <p className="popup-kiitos-otsikko">{etusivuPopup.kiitosTeksti}</p>
            <button type="button" className="nappi nappi-pinkki" onClick={suljeKokonaan}>
              Sulje
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="popup-lomake">
            <div className="popup-kentta">
              <label htmlFor="popup-valmennus">Valmennuksen nimi</label>
              <input id="popup-valmennus" type="text" value={valmennus} readOnly />
            </div>

            <div className="popup-kentta">
              <label htmlFor="popup-nimi">Etunimi ja sukunimi *</label>
              <input
                id="popup-nimi"
                type="text"
                required
                value={nimi}
                onChange={(e) => setNimi(e.target.value)}
                placeholder="Etunimi Sukunimi"
              />
            </div>

            <div className="popup-kentta">
              <label htmlFor="popup-sposti">Sähköposti *</label>
              <input
                id="popup-sposti"
                type="email"
                required
                value={sahkoposti}
                onChange={(e) => setSahkoposti(e.target.value)}
                placeholder="nimi@esimerkki.fi"
              />
            </div>

            <div className="popup-kentta">
              <label htmlFor="popup-puh">Puhelinnumero *</label>
              <input
                id="popup-puh"
                type="tel"
                required
                value={puhelin}
                onChange={(e) => handlePuhelinChange(e.target.value)}
                onBlur={tarkistaPuhelin}
                placeholder="040 123 4567"
                className={puhelinVirhe ? "input-virhe" : ""}
              />
              {puhelinVirhe && <span className="popup-virhe">{puhelinVirhe}</span>}
            </div>

            <div className="popup-kentta">
              <label htmlFor="popup-viesti">Viesti (valinnainen)</label>
              <textarea
                id="popup-viesti"
                rows={2}
                value={viesti}
                onChange={(e) => setViesti(e.target.value)}
                placeholder="Lisätietoja tai kysyttävää..."
              />
            </div>

            <label className="popup-checkbox">
              <input
                type="checkbox"
                checked={ilmoittaudun}
                onChange={(e) => setIlmoittaudun(e.target.checked)}
                required
              />
              <span>{etusivuPopup.valintaruutuTeksti}</span>
            </label>

            <button
              type="submit"
              className="nappi nappi-pinkki popup-nappi"
              disabled={lahetetaan}
            >
              {lahetetaan ? "Lähetetään..." : etusivuPopup.nappiTeksti}
            </button>
          </form>
        )}

        {!lahetetty && (
          <button
            type="button"
            className="popup-sulje-kokonaan"
            onClick={suljeKokonaan}
          >
            {etusivuPopup.suljeKokonaanTeksti}
          </button>
        )}
      </div>
    </div>
  );
}