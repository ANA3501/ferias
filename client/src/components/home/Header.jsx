import { Heart, Menu, X } from "lucide-react";
import { Logo } from "./Logo";

export function Header({ menuOpen, onToggleMenu, saved, onToggleSaved, onCloseMenu }) {
  return (
    <header className="site-nav">
      <Logo />
      <nav className={`nav-links ${menuOpen ? "is-open" : ""}`} aria-label="Navegação principal">
        <a href="#roteiro" onClick={onCloseMenu}>
          Roteiro
        </a>
        <a href="#ritmo" onClick={onCloseMenu}>
          O ritmo
        </a>
        <a href="#notas" onClick={onCloseMenu}>
          Notas de viagem
        </a>
      </nav>
      <div className="nav-actions">
        <span className="trip-counter">
          <span className="counter-dot" /> 03 + 02 dias
        </span>
        <button
          className="icon-button menu-toggle"
          type="button"
          onClick={onToggleMenu}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
        <button
          className={`save-button ${saved ? "is-saved" : ""}`}
          type="button"
          onClick={onToggleSaved}
        >
          <Heart size={16} fill={saved ? "currentColor" : "none"} />
          {saved ? "Guardado" : "Guardar roteiro"}
        </button>
      </div>
    </header>
  );
}
