import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  Bookmark,
  CalendarDays,
  CarFront,
  Check,
  ChevronRight,
  Clock3,
  Compass,
  Copy,
  Heart,
  Hotel,
  MapPin,
  Menu,
  Navigation,
  Palmtree,
  Route,
  Sparkles,
  Sun,
  Utensils,
  Waves,
  X,
} from "lucide-react";

const images = {
  punta1: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
  punta2: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1600&q=80",
  punta3: "https://images.unsplash.com/photo-1493558103817-58b2924b5715?auto=format&fit=crop&w=1600&q=80",
  sevilla1: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?auto=format&fit=crop&w=1600&q=80",
  sevilla2: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1600&q=80",
};

const itinerary = [
  {
    id: 1,
    destination: "Punta Umbría",
    shortDestination: "Punta",
    date: "sexta-feira · 12 jul",
    kicker: "Dia 01 / 05",
    title: "Chegar ao sal",
    description:
      "Primeiro, baixar o ritmo. O plano é deixar as malas, sentir a areia entre os dedos e descobrir onde o Atlântico encontra a luz de fim de tarde.",
    image: images.punta1,
    imagePosition: "center",
    accent: "sea",
    mood: "maré alta",
    duration: "tarde lenta",
    distance: "a pé",
    activities: [
      {
        time: "15:30",
        title: "Check-in + passeio de reconhecimento",
        text: "Caminhada sem destino pela passarela de madeira até a praia.",
        icon: Hotel,
      },
      {
        time: "19:45",
        title: "Pôr do sol no espigão",
        text: "A primeira foto da viagem fica para a luz dourada, não para a chegada.",
        icon: Sun,
      },
      {
        time: "21:15",
        title: "Peixe grelhado no porto",
        text: "Mesa simples, vinho branco gelado e o som dos barcos voltando.",
        icon: Utensils,
      },
    ],
    note: "Não tente fazer muito hoje. O luxo é começar devagar.",
  },
  {
    id: 2,
    destination: "Punta Umbría",
    shortDestination: "Punta",
    date: "sábado · 13 jul",
    kicker: "Dia 02 / 05",
    title: "Entre pinheiros e maré",
    description:
      "Um dia inteiro para a costa: manhã de bicicleta pelos pinhais, almoço comprido e uma enseada para desaparecer até o sol baixar.",
    image: images.punta2,
    imagePosition: "right center",
    accent: "sea",
    mood: "vento norte",
    duration: "dia aberto",
    distance: "18 km",
    activities: [
      {
        time: "09:00",
        title: "Bicicleta pela flecha litoral",
        text: "Pedalar sem pressa, com paradas para miradouros e banho de mar.",
        icon: Palmtree,
      },
      {
        time: "13:30",
        title: "Almoço de conquilhas",
        text: "Reservar uma mesa externa e pedir o que chegou no barco hoje.",
        icon: Utensils,
      },
      {
        time: "18:10",
        title: "Praia de Los Enebrales",
        text: "Areia larga, sombra de zimbro e tempo suficiente para não olhar o relógio.",
        icon: Waves,
      },
    ],
    note: "A costa pede espaço: leve água, chapéu e zero pressa.",
  },
  {
    id: 3,
    destination: "Punta Umbría",
    shortDestination: "Punta",
    date: "domingo · 14 jul",
    kicker: "Dia 03 / 05",
    title: "A última maré",
    description:
      "Fechar a parte costeira com um passeio de barco pela ria e uma travessia bonita rumo ao interior. Sevilha entra quando o céu começa a ficar cor de laranja.",
    image: images.punta3,
    imagePosition: "left center",
    accent: "sea",
    mood: "último mergulho",
    duration: "manhã + estrada",
    distance: "104 km",
    activities: [
      {
        time: "08:30",
        title: "Pequeno-almoço com vista",
        text: "Café, tostada com tomate e a última caminhada junto à água.",
        icon: Sun,
      },
      {
        time: "10:00",
        title: "Barco pela ria",
        text: "Ver a paisagem de outra escala antes de dizer adeus à areia.",
        icon: Navigation,
      },
      {
        time: "14:00",
        title: "Estrada para Sevilha",
        text: "Paragem curta em Huelva e chegada ao centro no fim da tarde.",
        icon: CarFront,
      },
    ],
    note: "Deixe uma tote bag vazia: ela volta cheia de sal, areia e histórias.",
  },
  {
    id: 4,
    destination: "Sevilha",
    shortDestination: "Sevilha",
    date: "segunda-feira · 15 jul",
    kicker: "Dia 04 / 05",
    title: "Azulejos ao sol",
    description:
      "Sevilha se revela caminhando. Começar cedo no Alcázar, atravessar a Plaza de España e terminar a tarde entre azulejos, sombra e laranjeiras.",
    image: images.sevilla1,
    imagePosition: "center",
    accent: "terra",
    mood: "luz quente",
    duration: "dia a pé",
    distance: "7,4 km",
    activities: [
      {
        time: "08:45",
        title: "Real Alcázar, antes do calor",
        text: "Entrar na primeira faixa e guardar tempo para os jardins.",
        icon: Compass,
      },
      {
        time: "12:30",
        title: "Tapas em Santa Cruz",
        text: "Uma mesa pequena, duas ou três paragens e nenhum menu turístico.",
        icon: Utensils,
      },
      {
        time: "17:30",
        title: "Plaza de España + Parque María Luisa",
        text: "A luz lateral deixa os azulejos ainda mais cinematográficos.",
        icon: Sparkles,
      },
    ],
    note: "Em Sevilha, a sombra também faz parte do roteiro.",
  },
  {
    id: 5,
    destination: "Sevilha",
    shortDestination: "Sevilha",
    date: "terça-feira · 16 jul",
    kicker: "Dia 05 / 05",
    title: "A cidade em camadas",
    description:
      "Último dia para subir, provar e ouvir. Catedral, Metropol Parasol e uma despedida longa num balcão onde a cidade passa devagar.",
    image: images.sevilla2,
    imagePosition: "center",
    accent: "terra",
    mood: "última volta",
    duration: "dia aberto",
    distance: "5,8 km",
    activities: [
      {
        time: "09:30",
        title: "Catedral + Giralda",
        text: "Subir no horário fresco e olhar Sevilha de cima, sem pressa.",
        icon: Compass,
      },
      {
        time: "13:45",
        title: "Almoço no mercado",
        text: "Ir de banca em banca: jamón, queijo, fruta e algo doce para dividir.",
        icon: Utensils,
      },
      {
        time: "19:00",
        title: "Las Setas ao entardecer",
        text: "A última vista é urbana: terraços, telhados e o céu a mudar de cor.",
        icon: Sun,
      },
    ],
    note: "A melhor lembrança é um lugar para onde você ainda quer voltar.",
  },
];

const destinations = [
  { name: "Punta Umbría", days: "03 dias", range: [1, 3], color: "sea" },
  { name: "Sevilha", days: "02 dias", range: [4, 5], color: "terra" },
];

function IconPill({ icon: Icon, children }) {
  return (
    <span className="icon-pill">
      <Icon size={14} strokeWidth={1.8} />
      {children}
    </span>
  );
}

function Logo() {
  return (
    <a className="brand" href="#top" aria-label="Maré e Azulejo, início">
      <span className="brand-symbol">
        <span />
        <span />
      </span>
      <span className="brand-copy">
        <strong>Maré &amp; Azulejo</strong>
        <small>Andaluzia em 05 dias</small>
      </span>
    </a>
  );
}

export default function Home() {
  const [activeDay, setActiveDay] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);
  const [saved, setSaved] = useState(false);
  const [copied, setCopied] = useState(false);

  const currentDay = itinerary[activeDay - 1];
  const visibleDestinations = useMemo(
    () => destinations.map((destination) => ({ ...destination, active: activeDay >= destination.range[0] && activeDay <= destination.range[1] })),
    [activeDay],
  );

  const goToDay = (day) => {
    setActiveDay(day);
    window.setTimeout(() => document.getElementById("roteiro")?.scrollIntoView({ behavior: "smooth", block: "start" }), 20);
    setMenuOpen(false);
  };

  const copyRoute = async () => {
    const text = "Maré & Azulejo: 3 dias em Punta Umbría + 2 dias em Sevilha.";
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // A UI continua útil mesmo sem permissão de clipboard no preview.
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="app-shell" id="top">
      <header className="site-nav">
        <Logo />
        <nav className={`nav-links ${menuOpen ? "is-open" : ""}`} aria-label="Navegação principal">
          <a href="#roteiro" onClick={() => setMenuOpen(false)}>Roteiro</a>
          <a href="#ritmo" onClick={() => setMenuOpen(false)}>O ritmo</a>
          <a href="#notas" onClick={() => setMenuOpen(false)}>Notas de viagem</a>
        </nav>
        <div className="nav-actions">
          <span className="trip-counter"><span className="counter-dot" /> 03 + 02 dias</span>
          <button className="icon-button menu-toggle" type="button" onClick={() => setMenuOpen((value) => !value)} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}>
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
          <button className={`save-button ${saved ? "is-saved" : ""}`} type="button" onClick={() => setSaved((value) => !value)}>
            <Heart size={16} fill={saved ? "currentColor" : "none"} />
            {saved ? "Guardado" : "Guardar roteiro"}
          </button>
        </div>
      </header>

      <main>
        <section className="hero container" aria-labelledby="hero-title">
          <div className="hero-copy reveal-up">
            <div className="eyebrow"><span className="eyebrow-line" /> Caderno de viagem · Andaluzia 2024</div>
            <h1 id="hero-title">Do sal ao sol<br /><em>sem perder o sul.</em></h1>
            <p className="hero-lede">Um roteiro de cinco dias entre o Atlântico de Punta Umbría e as fachadas quentes de Sevilha — feito para andar, comer bem e deixar a luz decidir o caminho.</p>
            <div className="hero-actions">
              <button className="primary-button" type="button" onClick={() => document.getElementById("roteiro")?.scrollIntoView({ behavior: "smooth" })}>
                Explorar os dias <ArrowUpRight size={17} />
              </button>
              <a className="text-link" href="https://www.google.com/maps/dir/Punta+Umbria/Seville" target="_blank" rel="noreferrer">
                <Navigation size={15} /> Abrir no mapa
              </a>
            </div>
            <div className="hero-meta">
              <IconPill icon={Waves}>3 dias de costa</IconPill>
              <IconPill icon={Sparkles}>2 dias de cidade</IconPill>
              <IconPill icon={CarFront}>104 km de transição</IconPill>
            </div>
          </div>

          <div className="hero-visual reveal-up delay-1" role="img" aria-label="Praia de Punta Umbría ao longo da costa atlântica">
            <div className="visual-grain" />
            <div className="visual-topline"><span>36° 57′ N</span><span>MARÉ ALTA</span></div>
            <div className="visual-sticker"><span>anotar</span><strong>mais<br />mar.</strong></div>
            <div className="hero-caption">
              <div>
                <span className="caption-kicker">Punta Umbría · Huelva</span>
                <strong>O roteiro começa<br />onde a terra afrouxa.</strong>
              </div>
              <span className="caption-mark">01</span>
            </div>
          </div>
        </section>

        <section className="route-intro container" id="ritmo" aria-labelledby="route-title">
          <div className="section-label">01 <span /> a rota em duas paisagens</div>
          <div className="intro-grid">
            <div>
              <h2 id="route-title">Uma viagem,<br /><em>duas marés.</em></h2>
            </div>
            <div className="intro-copy">
              <p>Primeiro o corpo desacelera junto ao Atlântico. Depois, já com a pele salgada, a viagem sobe para o calor, os azulejos e as noites longas de Sevilha.</p>
              <button className="inline-link" type="button" onClick={copyRoute}>
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
                <div className="stop-marker"><Waves size={17} /></div>
                <span className="stop-number">01 — 03</span>
                <strong>Punta Umbría</strong>
                <small>sal · pinheiros · maré</small>
              </div>
              <div className="route-transfer">
                <span>104 km</span>
                <div className="route-dash"><i /><i /><i /><i /><i /></div>
                <CarFront size={15} />
              </div>
              <div className="route-stop city-stop">
                <div className="stop-marker"><Sparkles size={17} /></div>
                <span className="stop-number">04 — 05</span>
                <strong>Sevilha</strong>
                <small>azulejo · sombra · noite</small>
              </div>
            </div>
            <div className="route-footnote"><span className="mini-sun"><Sun size={14} /></span> O truque do roteiro: sair da costa no domingo à tarde, quando a cidade começa a dourar.</div>
          </div>
        </section>

        <section className="itinerary-section" id="roteiro" aria-labelledby="itinerary-title">
          <div className="container">
            <div className="itinerary-heading">
              <div>
                <div className="section-label light-label">02 <span /> o roteiro, dia a dia</div>
                <h2 id="itinerary-title">Escolha a próxima<br /><em>paragem.</em></h2>
              </div>
              <div className="heading-aside">
                <span className="current-index">0{activeDay} <i>/</i> 05</span>
                <p>Um plano leve, com espaço para improvisar quando a luz estiver boa.</p>
              </div>
            </div>

            <div className="destination-tabs" role="tablist" aria-label="Destinos">
              {visibleDestinations.map((destination) => (
                <button
                  key={destination.name}
                  className={`destination-tab ${destination.active ? "active" : ""} ${destination.color}`}
                  type="button"
                  role="tab"
                  aria-selected={destination.active}
                  onClick={() => goToDay(destination.range[0])}
                >
                  <span className="tab-symbol">{destination.color === "sea" ? <Waves size={17} /> : <Sparkles size={17} />}</span>
                  <span><strong>{destination.name}</strong><small>{destination.days}</small></span>
                  <ChevronRight size={17} />
                </button>
              ))}
            </div>

            <div className="day-selector" role="tablist" aria-label="Dias do roteiro">
              {itinerary.map((day) => (
                <button key={day.id} type="button" className={`day-button ${activeDay === day.id ? "active" : ""}`} onClick={() => setActiveDay(day.id)} role="tab" aria-selected={activeDay === day.id}>
                  <span>dia</span><strong>0{day.id}</strong>
                </button>
              ))}
            </div>

            <article className={`day-feature accent-${currentDay.accent}`} key={currentDay.id}>
              <div className="day-image" style={{ backgroundImage: `url(${currentDay.image})`, backgroundPosition: currentDay.imagePosition }}>
                <div className="day-image-overlay" />
                <div className="day-image-top"><span>{currentDay.kicker}</span><span>{currentDay.mood}</span></div>
                <div className="day-image-bottom"><span className="image-location"><MapPin size={14} /> {currentDay.destination}</span><span className="image-arrow"><ArrowUpRight size={18} /></span></div>
              </div>
              <div className="day-content">
                <div className="day-content-top"><span className="date-label"><CalendarDays size={15} /> {currentDay.date}</span><span className="day-accent-line" /></div>
                <h3>{currentDay.title}</h3>
                <p className="day-description">{currentDay.description}</p>
                <div className="day-facts">
                  <span><Clock3 size={15} /> {currentDay.duration}</span>
                  <span><Route size={15} /> {currentDay.distance}</span>
                </div>
                <div className="activity-list">
                  {currentDay.activities.map((activity) => {
                    const ActivityIcon = activity.icon;
                    return (
                      <div className="activity-row" key={activity.time}>
                        <time>{activity.time}</time>
                        <span className="activity-icon"><ActivityIcon size={15} /></span>
                        <div><strong>{activity.title}</strong><p>{activity.text}</p></div>
                      </div>
                    );
                  })}
                </div>
                <div className="day-note"><Sparkles size={14} /><span><strong>nota de ritmo</strong> {currentDay.note}</span></div>
              </div>
            </article>

            <div className="next-day-row">
              <button type="button" onClick={() => setActiveDay(activeDay === 5 ? 1 : activeDay + 1)}>
                <span>{activeDay === 5 ? "voltar ao início" : "próxima paragem"}</span>
                <strong>{activeDay === 5 ? "Dia 01 · Chegar ao sal" : `Dia 0${activeDay + 1} · ${itinerary[activeDay].title}`}</strong>
                <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
        </section>

        <section className="stay-section container" id="notas" aria-labelledby="stay-title">
          <div className="section-label">03 <span /> notas para levar</div>
          <div className="stay-grid">
            <div className="stay-copy">
              <h2 id="stay-title">O que cabe<br /><em>na mala.</em></h2>
              <p>O essencial para cinco dias de calor, sal, sombra e caminhadas longas.</p>
              <a className="inline-link" href="https://www.google.com/maps/dir/Punta+Umbria/Seville" target="_blank" rel="noreferrer"><MapPin size={15} /> Ver a rota completa</a>
            </div>
            <div className="packing-card">
              <div className="packing-card-heading"><span>checklist · 05 dias</span><Bookmark size={17} /></div>
              <ul>
                <li><span className="check-circle"><Check size={13} /></span> uma camisa de linho para as noites</li>
                <li><span className="check-circle"><Check size={13} /></span> sandálias que aguentem 7 km</li>
                <li><span className="check-circle"><Check size={13} /></span> garrafa de água sempre cheia</li>
                <li><span className="check-circle"><Check size={13} /></span> espaço para cerâmica e sal marinho</li>
              </ul>
              <div className="packing-footer"><span><Hotel size={14} /> 02 bases</span><span><Sun size={14} /> 31° previsto</span></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer container">
        <Logo />
        <span>feito para viajar devagar · 2024</span>
        <a href="#top">voltar ao topo <ArrowUpRight size={14} /></a>
      </footer>
    </div>
  );
}
