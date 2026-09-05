import { CarFront, Check, Copy, Sun, Waves, Sparkles } from "lucide-react";

export function RouteIntro({ copied, onCopyRoute }) {
  return (
    <section className="route-intro container" id="ritmo" aria-labelledby="route-title">
      <div className="section-label">01 <span /> a rota em duas paisagens</div>
      <div className="intro-grid">
        <div>
          <h2 id="route-title">
            Uma viagem,
            <br />
            <em>duas marés.</em>
          </h2>
        </div>
        <div className="intro-copy">
          <p>
            Primeiro o corpo desacelera junto ao Atlântico. Depois, já com a pele salgada, a viagem sobe para o calor, os azulejos e as noites longas de Sevilha.
          </p>
          <button className="inline-link" type="button" onClick={onCopyRoute}>
            {copied ? <Check size={15} /> : <Copy size={15} />}
            {copied ? "Roteiro copiado" : "Copiar resumo do roteiro"}
          </button>
        </div>
      </div>

      <div className="route-card">
        <div className="route-card-heading">
          <span>Da água à arquitetura</span>
          <span>05 dias · 02 bases</span>
        </div>
        <div className="route-mapline" aria-label="Percurso de Punta Umbría a Sevilha">
          <div className="route-stop active-stop">
            <div className="stop-marker">
              <Waves size={17} />
            </div>
            <span className="stop-number">01 — 03</span>
            <strong>Punta Umbría</strong>
            <small>sal · pinheiros · maré</small>
          </div>
          <div className="route-transfer">
            <span>104 km</span>
            <div className="route-dash">
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
            <CarFront size={15} />
          </div>
          <div className="route-stop city-stop">
            <div className="stop-marker">
              <Sparkles size={17} />
            </div>
            <span className="stop-number">04 — 05</span>
            <strong>Sevilha</strong>
            <small>azulejo · sombra · noite</small>
          </div>
        </div>
        <div className="route-footnote">
          <span className="mini-sun">
            <Sun size={14} />
          </span>{" "}
          O truque do roteiro: sair da costa no domingo à tarde, quando a cidade começa a dourar.
        </div>
      </div>
    </section>
  );
}
