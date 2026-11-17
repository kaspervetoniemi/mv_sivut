// @ts-nocheck

import { useState } from "react";
import Home from "./pages/Home";
import Palvelut from "./pages/Palvelut";
import Hinnasto from "./pages/Hinnasto";
import Yhteystiedot from "./pages/Yhteystiedot";
import Ajanvaraus from "./pages/Ajanvaraus";
import Nav from "./Nav";
import Footer from "./Footer";
import Ryhmavalmennukset from "./pages/Ryhmavalmennukset";

export type Page = "home" | "palvelut" | "hinnasto" | "yhteystiedot" | "ajanvaraus" | "ryhmavalmennukset";

export default function App() {
  const [page, setPage] = useState<Page>("home");

 function navigate(p: Page) {
    setPage(p);
    window.scrollTo(0, 0);
  }

  return (
    <div>
      <Nav page={page} navigate={navigate} />

      <main className="sivu">
        {page === "home"         && <Home          navigate={navigate} />}
        {page === "palvelut"     && <Palvelut       navigate={navigate} />}
        {page === "hinnasto"     && <Hinnasto        navigate={navigate} />}
        {page === "yhteystiedot" && <Yhteystiedot   navigate={navigate} />}
        {page === "ryhmavalmennukset" && <Ryhmavalmennukset navigate={navigate} />}
        {page === "ajanvaraus"   && <Ajanvaraus navigate={navigate} />}
      </main>
      <Footer navigate={navigate} />
    </div>
  );
}
