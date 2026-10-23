// @ts-nocheck

// Shared data and components used across pages

export const services = [
  {
    title: "Hermoratahieronta",
    shortDescription: "Kokonaisvaltainen hoitomuoto, joka lievittää kipuja ja laukaisee jännityksiä tehokkaasti.",
    description: "Hermoratahieronta on kokonaisvaltainen hoitomuoto, joka vaikuttaa hermoston kautta koko kehoon. Se lievittää kipuja, laukaisee jännityksiä ja edistää kehon omaa paranemisprosessia. Hoito sopii erinomaisesti pitkäaikaisista kiputiloista tai stressistä kärsiville.",
    icon: "✦",
    img: "hermoratahieronta1.webp",
    imgAlt: "Hieronta kuumakivillä",
    id: "hermoratahieronta" /* TÄMÄ LISÄTTIIN */
  },
  {
    title: "Purentalihastenhieronta",
    shortDescription: "Helpotusta leuan alueen kireyksiin, päänsärkyyn ja hampaiden narskuttelusta johtuviin vaivoihin.",
    description: "Purentalihastenhieronta kohdistuu leuan, kasvojen ja niskan alueelle. Se helpottaa purentakipuja, päänsärkyä ja jännitystiloja, jotka voivat johtua stressistä tai hampaiden narskuttelusta. Käsittely rentouttaa koko pään aluetta ja parantaa unen laatua.",
    icon: "◈",
    img: "purentalihashieronta1.webp",
    imgAlt: "Kasvojen ja leuan alueen hieronta",
    id: "purentalihas" /* TÄMÄ LISÄTTIIN */
  },
  {
    title: "Psyykkinen valmennus",
    shortDescription: "Yhdistää ravitsemustiedon ja mielen hyvinvoinnin kohti kestäviä elämäntapoja.",
    description: "Psyykkinen ravintovalmennus yhdistää ravitsemustiedon ja mielen hyvinvoinnin. Tutkitaan syömisen taustalla olevia tunteita ja ajatusmalleja sekä rakennetaan kestävä suhde ruokaan. Tavoitteena on löytää tasapaino, jossa ruoka tuottaa iloa eikä ahdistusta.",
    icon: "❋",
    img: "psyykkinenvalmennus1.webp",
    imgAlt: "Terveellistä ruokaa lautasella",
    id: "psyykkinen" /* TÄMÄ LISÄTTIIN */
  },
  {
    title: "Cambridge-ohjelma",
    shortDescription: "Kliinisesti tutkittu ja selkeä painonhallintaohjelma, joka tuo pysyviä tuloksia.",
    description: "Cambridge-ohjelma on kliinisesti tutkittu painonhallintaohjelma, joka tarjoaa selkeän rakenteen ja ammattilaisen tuen matkan varrella. Tuloksia saavutetaan turvallisesti ja kestävästi laadukkaiden ateriankorvikkeiden ja henkilökohtaisen valmennuksen avulla.",
    icon: "◇",
    img: "cambridge1.webp",
    imgAlt: "Terveellistä hedelmää ja ravintoa",
    id: "cambridge" /* TÄMÄ LISÄTTIIN */
  },
];

// ... hinnasto (prices) ja arvostelut (testimonials) jatkuvat tästä normaalisti ...

export const prices = [
  { service: "Hermoratahieronta", duration: "120 min", price: "85 €" },
  { service: "Purentalihastenhieronta", duration: "60 min", price: "55 €" },
  { service: "Ravintovalmennus, alkukäynti", duration: "", price: "48 €" },
  { service: "Ravintovalmennus, seurantakäynti", duration: "", price: "32,50 €" },
  { service: "Psyykkinenvalmennus", duration: "60 min", price: "75 €" },
  { service: "Psyykkinenvalmennus", duration: "90 min", price: "100 €" },
];

export const testimonials = [
  {
    name: "Mies 50v",
    text: "Hoitaja ja olosuhteet olivat mukavat👍. Hermoratahieronta oli uusi kokemus minulle.",
    rating: 5,
  },
  {
    name: "Nainen 54v",
    text: "Aito ja välittävä sekä empaattinen ohjaaja. Suosittelen lämpimästi muillekkin.",
    rating: 5,
  },
  {
    name: "Nainen 34v",
    text: "Olipas kyllä ihana se purentalihashieronta, nyt kun kireys on vähän hellittänyt, hoksaa kuinka kireät purentalihakset on ollut.",
    rating: 5,
  },
  {
    name: "Nainen 29v",
    text: "Kiitos taas Maria purentalihashieronnasta! Itsellä taustalla monen vuoden narskuttamista ja hampaiden yhteen puremista. Hammaslääkärissä todettu purentalihasten olevan jumissa. oon nyt muutaman kerran käynyt hieronnassa ja apua on kylläkin ollut. Pään alueen kireys ja pääkivut helpottaneet sekä oon huomannut, että hieronnan jälkeen menee useampi yö jopa viikko ettei tuu narskutettua.",
    rating: 5,
  },
  {
    name: "Nainen 42v",
    text: "Olen oppinut, että ei saa antaa periksi ja ettö pienilläkin asioilla on suuri vaikutus elämään. Asioiden ei aina tarvitse olla helppoja ja omia tapoja voi muuttaa pieni askel kerrallaan. Tällä hetkellä olen tyytyväinen saavuttamiini asioihin ja olen oppinut haastamaan itseäni. Iso kiitos sinulle Maria!",
    rating: 5,
  },
];
