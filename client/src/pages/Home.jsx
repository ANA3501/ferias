import { useMemo, useState } from "react";
import {
  CarFront,
  Compass,
  Hotel,
  MapPin,
  Navigation,
  Palmtree,
  Sparkles,
  Sun,
  Utensils,
  Waves,
} from "lucide-react";
import { Header } from "../components/home/Header";
import { HeroSection } from "../components/home/HeroSection";
import { RouteIntro } from "../components/home/RouteIntro";
import { ItinerarySection } from "../components/home/ItinerarySection";
import { StaySection } from "../components/home/StaySection";
import { Footer } from "../components/home/Footer";

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
    date: "dia 1 · sexta-feira",
    kicker: "Dia 01 / 05",
    title: "Chegada e descanso na costa",
    description:
      "Primeiro dia para entrar no ritmo da viagem: chegar, deixar malas e deixar o corpo desacelerar junto ao mar. O plano é aproveitar a praia e a tarde com calma, antes de se abrir para a cidade.",
    image: images.punta1,
    imagePosition: "center",
    accent: "sea",
    mood: "chegada lenta",
    duration: "tarde inteira",
    distance: "a pé",
    activities: [
      {
        time: "15:30",
        title: "Chegada e check-in",
        text: "Caminhada sem destino pela passarela de madeira até a praia.",
        icon: Hotel,
      },
      {
        time: "17:00",
        title: "Tarde inteira na praia",
        text: "Tempo livre para descansar, tomar sol e deixar a maré marcar o ritmo do dia.",
        icon: Waves,
      },
      {
        time: "20:30",
        title: "Passeio pelo centro ao fim da tarde",
        text: "Dar uma volta pelo centro e sentir a vila sem pressa antes do jantar.",
        icon: Compass,
      },
      {
        time: "21:30",
        title: "Jantar económico",
        text: "Opção simples e barata para começar a viagem sem gastar muito e sem perder tempo.",
        icon: Utensils,
      },
    ],
    note: "O melhor começo é leve: praia, descanso e pouco plano.",
  },
  {
    id: 2,
    destination: "Punta Umbría",
    shortDestination: "Punta",
    date: "dia 2 · sábado",
    kicker: "Dia 02 / 05",
    title: "Praia, almoço e pôr do sol",
    description:
      "Um dia de praia sem pressa: manhã tranquila, almoço sem compromisso e uma tarde para descansar ou ir até Los Enebrales antes do sol desaparecer.",
    image: images.punta2,
    imagePosition: "right center",
    accent: "sea",
    mood: "mar serena",
    duration: "dia livre",
    distance: "18 km",
    activities: [
      {
        time: "09:30",
        title: "Manhã de praia",
        text: "Tempo livre na areia, com água, chapéu e um ritmo sem agenda.",
        icon: Sun,
      },
      {
        time: "13:00",
        title: "Almoço",
        text: "Paragem de comida calma, sem pressa e com vista para a costa.",
        icon: Utensils,
      },
      {
        time: "16:00",
        title: "Tarde tranquila na praia ou Los Enebrales",
        text: "Escolher entre descansar na praia ou ir para uma zona mais calma e menos movimentada.",
        icon: Palmtree,
      },
      {
        time: "20:00",
        title: "Pôr do sol",
        text: "O melhor momento do dia é quando a luz desce e a praia fica mais silenciosa.",
        icon: Sun,
      },
      {
        time: "21:30",
        title: "Jantar",
        text: "Um jantar simples, sem agenda, para fechar o dia como se fosse uma pausa de férias.",
        icon: Utensils,
      },
    ],
    note: "Na costa, o melhor mesmo é não programar demais.",
  },
  {
    id: 3,
    destination: "Punta Umbría → Sevilha",
    shortDestination: "Punta → Sevilha",
    date: "dia 3 · domingo",
    kicker: "Dia 03 / 05",
    title: "Última praia e chegada à cidade",
    description:
      "Aproveitar a manhã na praia, almoçar e seguir para Sevilha com a tarde livre para explorar o centro e jantar pelos azulejos.",
    image: "/images/dia-3-nao-encontrada.jpg",
    imagePosition: "left center",
    accent: "sea",
    mood: "transição",
    duration: "manhã + estrada",
    distance: "104 km",
    activities: [
      {
        time: "09:00",
        title: "Aproveitar a manhã para praia",
        text: "Último momento de mar e areia antes de deixar Punta Umbría.",
        icon: Waves,
      },
      {
        time: "13:00",
        title: "Almoço",
        text: "Comer sem pressa e preparar a saída para a cidade.",
        icon: Utensils,
      },
      {
        time: "15:00",
        title: "Partir para Sevilha",
        text: "A estrada rumo à cidade com a tarde a ganhar cor e a luz a mudar de tom.",
        icon: CarFront,
      },
      {
        time: "18:30",
        title: "Check-in",
        text: "Descansar, guardar as malas e preparar a primeira noite na cidade.",
        icon: Hotel,
      },
      {
        time: "21:00",
        title: "Passeio noturno por Santa Cruz + centro",
        text: "Andar pelas ruas mais bonitas da cidade antes de jantar e sentir o clima de Sevilha.",
        icon: Navigation,
      },
      {
        time: "22:30",
        title: "Tapas",
        text: "Uma mesa pequena, petiscos e uma noite de cidade sem agenda rígida.",
        icon: Utensils,
      },
    ],
    note: "Hoje é a mudança de mar para cidade: sair da costa e entrar no calor urbano.",
  },
  {
    id: 4,
    destination: "Sevilha",
    shortDestination: "Sevilha",
    date: "dia 4 · segunda-feira",
    kicker: "Dia 04 / 05",
    title: "Conhecer a cidade",
    description:
      "Um dia para ver o essencial da cidade: Plaza de España, Parque María Luisa, Santa Cruz, Catedral e Giralda, com a tarde a abrir para Triana e o rio.",
    image: images.sevilla1,
    imagePosition: "center",
    accent: "terra",
    mood: "cidade em movimento",
    duration: "dia inteiro",
    distance: "7,4 km",
    activities: [
      {
        time: "09:30",
        title: "Plaza de España",
        text: "Começar pela grande vista de Sevilha e pelo ritmo das ruas mais emblemáticas.",
        icon: Sparkles,
      },
      {
        time: "11:00",
        title: "Parque María Luisa",
        text: "Pausar no parque para descansar e ver a cidade com ar mais espaçoso.",
        icon: Compass,
      },
      {
        time: "13:00",
        title: "Santa Cruz",
        text: "Andar pelos bairros históricos, rua por rua, com pequenos momentos de pausa.",
        icon: MapPin,
      },
      {
        time: "15:30",
        title: "Catedral / Giralda",
        text: "Aproveitar a parte histórica e subir para ver a cidade de cima.",
        icon: Compass,
      },
      {
        time: "18:30",
        title: "Triana + rio Guadalquivir",
        text: "À tarde, vale a pena ir para a zona de Triana e ver o rio no fim do dia.",
        icon: Navigation,
      },
      {
        time: "22:00",
        title: "Noite livre",
        text: "Luz, música e cidade até tarde sem um plano fixo.",
        icon: Sparkles,
      },
    ],
    note: "Sevilha pede andar, parar e olhar cada esquina como se fosse um cenário.",
  },
  {
    id: 5,
    destination: "Sevilha",
    shortDestination: "Sevilha",
    date: "dia 5 · terça-feira",
    kicker: "Dia 05 / 05",
    title: "Compras e última noite",
    description:
      "Último dia com ritmo mais calmo: manhã tranquila, almoço e tarde dedicada às compras antes da última noite na cidade.",
    image: images.sevilla2,
    imagePosition: "center",
    accent: "terra",
    mood: "última noite",
    duration: "dia leve",
    distance: "5,8 km",
    activities: [
      {
        time: "10:00",
        title: "Manhã mais tranquila",
        text: "Sem pressa para começar, com tempo para aproveitar a cidade e a última manhã sem agenda.",
        icon: Sun,
      },
      {
        time: "13:00",
        title: "Almoço",
        text: "Paragem para comer bem antes de dedicar a tarde às compras.",
        icon: Utensils,
      },
      {
        time: "15:30",
        title: "Tarde dedicada às compras",
        text: "Calle Sierpes, Tetuán ou um centro comercial/outlet para aproveitar o último dia.",
        icon: Sparkles,
      },
      {
        time: "20:30",
        title: "Última noite em Sevilha",
        text: "Fechar a viagem com um passeio tranquilo, um jantar e o sabor da cidade sem pressa.",
        icon: Sun,
      },
    ],
    note: "A melhor lembrança não é o checklist — é a última noite em que tudo ficou em paz.",
  },
];

const destinations = [
  { name: "Punta Umbría", days: "03 dias", range: [1, 3], color: "sea" },
  { name: "Sevilha", days: "02 dias", range: [4, 5], color: "terra" },
];

export default function Home() {
  const [activeDay, setActiveDay] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);
  const [saved, setSaved] = useState(false);
  const [copied, setCopied] = useState(false);

  const visibleDestinations = useMemo(
    () =>
      destinations.map((destination) => ({
        ...destination,
        active: activeDay >= destination.range[0] && activeDay <= destination.range[1],
      })),
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
      <Header
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((value) => !value)}
        saved={saved}
        onToggleSaved={() => setSaved((value) => !value)}
        onCloseMenu={() => setMenuOpen(false)}
      />

      <main>
        <HeroSection />
        <RouteIntro copied={copied} onCopyRoute={copyRoute} />
        <ItinerarySection
          itinerary={itinerary}
          activeDay={activeDay}
          visibleDestinations={visibleDestinations}
          onSelectDay={setActiveDay}
          onSelectDestination={goToDay}
          onAdvanceDay={() => setActiveDay((current) => (current === 5 ? 1 : current + 1))}
        />
        <StaySection />
      </main>

      <Footer />
    </div>
  );
}
