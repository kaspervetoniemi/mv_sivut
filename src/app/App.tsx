// @ts-nocheck

import { useState, useEffect, lazy, Suspense } from "react";
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

const VALID_PAGES: Page[] = [
  "palvelut",
  "hinnasto",
  "yhteystiedot",
  "ajanvaraus",
  "ryhmavalmennukset",
  "tietosuojaseloste",
];

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

function getPageFromUrl(): Page {
  const path = window.location.pathname;
  const withoutBase = path.startsWith(BASE) ? path.slice(BASE.length) : path;
  const slug = withoutBase.replace(/^\/+|\/+$/g, "") as Page;
  return VALID_PAGES.includes(slug) ? slug : "home";
}

export default function App() {
  const [page, setPage] = useState<Page>(getPageFromUrl);

  useEffect(() => {
    const handlePopState = () => setPage(getPageFromUrl());
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  function navigate(p: Page) {
    setPage(p);
    const nextUrl = `${BASE}/${p === "home" ? "" : p}`;
    window.history.pushState({}, "", nextUrl);
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