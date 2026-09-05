import { ArrowUpRight, Navigation, Sparkles, Sun, Waves } from "lucide-react";
import { IconPill } from "./IconPill";

export function HeroSection() {
  return (
    <section className="hero container" aria-labelledby="hero-title">
      <div className="hero-copy reveal-up">
        <div className="eyebrow">
          <span className="eyebrow-line" /> Caderno de viagem · Andaluzia 2024
        </div>
        <h1 id="hero-title">
          Do sal ao sol
          <br />
          <em>sem perder o sul.</em>
        </h1>
        <p className="hero-lede">
          Um roteiro de cinco dias entre o Atlântico de Punta Umbría e as fachadas quentes de Sevilha — feito para andar, comer bem e deixar a luz decidir o caminho.
        </p>
        <div className="hero-actions">
          <button
            className="primary-button"
            type="button"
            onClick={() => document.getElementById("roteiro")?.scrollIntoView({ behavior: "smooth" })}
          >
            Explorar os dias <ArrowUpRight size={17} />
          </button>
          <a className="text-link" href="https://www.google.com/maps/dir/Punta+Umbria/Seville" target="_blank" rel="noreferrer">
            <Navigation size={15} /> Abrir no mapa
          </a>
        </div>
        <div className="hero-meta">
          <IconPill icon={Waves}>3 dias de costa</IconPill>
          <IconPill icon={Sparkles}>2 dias de cidade</IconPill>
          <IconPill icon={Sun}>104 km de transição</IconPill>
        </div>
      </div>

      <div className="hero-visual reveal-up delay-1" role="img" aria-label="Praia de Punta Umbría ao longo da costa atlântica">
        <div className="visual-grain" />
        <div className="visual-topline">
          <span>36° 57′ N</span>
          <span>MARÉ ALTA</span>
        </div>
        <div className="visual-sticker">
          <span>anotar</span>
          <strong>
            mais
            <br />
            mar.
          </strong>
        </div>
        <div className="hero-caption">
          <div>
            <span className="caption-kicker">Punta Umbría · Huelva</span>
            <strong>
              O roteiro começa
              <br />
              onde a terra afrouxa.
            </strong>
          </div>
          <span className="caption-mark">01</span>
        </div>
      </div>
    </section>
  );
}
