// @ts-nocheck

import { useState, lazy, Suspense } from "react";
import Home from "./pages/Home";
import Nav from "./Nav";
import Footer from "./Footer";

const Palvelut = lazy(() => import("./pages/Palvelut"));
const Hinnasto = lazy(() => import("./pages/Hinnasto"));
const Yhteystiedot = lazy(() => import("./pages/Yhteystiedot"));
const Ajanvaraus = lazy(() => import("./pages/Ajanvaraus"));
const Ryhmavalmennukset = lazy(() => import("./pages/Ryhmavalmennukset"));
const Tietosuojaseloste = lazy(() => import("./pages/Tietosuojaseloste"));

export type Page =
  | "home"
  | "palvelut"
  | "hinnasto"
  | "yhteystiedot"
  | "ajanvaraus"
  | "ryhmavalmennukset"
  | "tietosuojaseloste";

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
        {page === "home" && <Home navigate={navigate} />}

        <Suspense fallback={null}>
          {page === "palvelut" && <Palvelut navigate={navigate} />}
          {page === "hinnasto" && <Hinnasto navigate={navigate} />}
          {page === "yhteystiedot" && <Yhteystiedot navigate={navigate} />}
          {page === "ryhmavalmennukset" && <Ryhmavalmennukset navigate={navigate} />}
          {page === "ajanvaraus" && <Ajanvaraus navigate={navigate} />}
          {page === "tietosuojaseloste" && <Tietosuojaseloste navigate={navigate} />}
        </Suspense>
      </main>

      <Footer navigate={navigate} />
    </div>
  );
}
