import { Bookmark, Check, Hotel, MapPin, Sun } from "lucide-react";

export function StaySection() {
  return (
    <section className="stay-section container" id="notas" aria-labelledby="stay-title">
      <div className="section-label">03 <span /> notas para levar</div>
      <div className="stay-grid">
        <div className="stay-copy">
          <h2 id="stay-title">
            O que cabe
            <br />
            <em>na mala.</em>
          </h2>
          <p>O essencial para cinco dias de calor, sal, sombra e caminhadas longas.</p>
          <a className="inline-link" href="https://www.google.com/maps/dir/Punta+Umbria/Seville" target="_blank" rel="noreferrer">
            <MapPin size={15} /> Ver a rota completa
          </a>
        </div>
        <div className="packing-card">
          <div className="packing-card-heading">
            <span>checklist · 05 dias</span>
            <Bookmark size={17} />
          </div>
          <ul>
            <li>
              <span className="check-circle">
                <Check size={13} />
              </span>
              uma camisa de linho para as noites
            </li>
            <li>
              <span className="check-circle">
                <Check size={13} />
              </span>
              sandálias que aguentem 7 km
            </li>
            <li>
              <span className="check-circle">
                <Check size={13} />
              </span>
              garrafa de água sempre cheia
            </li>
            <li>
              <span className="check-circle">
                <Check size={13} />
              </span>
              espaço para cerâmica e sal marinho
            </li>
          </ul>
          <div className="packing-footer">
            <span>
              <Hotel size={14} /> 02 bases
            </span>
            <span>
              <Sun size={14} /> 31° previsto
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
