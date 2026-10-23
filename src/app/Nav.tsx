// @ts-nocheck

import { useState } from "react";
import type { Page } from "./App";

interface Props {
  page: Page;
  navigate: (p: Page) => void;
}

const links: { label: string; page: Page }[] = [
  { label: "Etusivu",      page: "home" },
  { label: "Palvelut",     page: "palvelut" },
  { label: "Hinnasto",     page: "hinnasto" },
  { label: "Yhteystiedot", page: "yhteystiedot" },
];

export default function Nav({ page, navigate }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleNav(p: Page) {
    navigate(p);
    setMenuOpen(false);
  }

  return (
    <nav className="nav">
      <div className="nav-sisalto">

        {/* Logo */}
        <button className="nav-logo" onClick={() => handleNav("home")}>
          Tmi Maria Viitasalo
        </button>

        {/* Desktop links */}
        <ul className="nav-linkit">
          {links.map(({ label, page: p }) => (
            <li key={p}>
              <button onClick={() => handleNav(p)} className={page === p ? "aktiivinen" : ""}>
                {label}
              </button>
            </li>
          ))}
          <li>
            <button onClick={() => handleNav("ajanvaraus")} className="nav-nappi">
              Ajanvaraus
            </button>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button className="nav-hampurilainen" onClick={() => setMenuOpen(!menuOpen)} aria-label="Valikko">
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {menuOpen
              ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
              : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
            }
          </svg>
        </button>

      </div>

      {/* Mobile menu */}
      <div className={`nav-mobiili ${menuOpen ? "auki" : ""}`}>
        {links.map(({ label, page: p }) => (
          <button key={p} onClick={() => handleNav(p)}>{label}</button>
        ))}
        <button onClick={() => handleNav("ajanvaraus")} className="nav-nappi">
          Ajanvaraus
        </button>
      </div>
    </nav>
  );
}
