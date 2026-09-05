import {
  ArrowUpRight,
  CalendarDays,
  ChevronRight,
  Clock3,
  MapPin,
  Route,
  Sparkles,
} from "lucide-react";

export function ItinerarySection({ itinerary, activeDay, visibleDestinations, onSelectDay, onSelectDestination, onAdvanceDay }) {
  const currentDay = itinerary[activeDay - 1];

  return (
    <section className="itinerary-section" id="roteiro" aria-labelledby="itinerary-title">
      <div className="container">
        <div className="itinerary-heading">
          <div>
            <div className="section-label light-label">02 <span /> o roteiro, dia a dia</div>
            <h2 id="itinerary-title">
              Escolha a próxima
              <br />
              <em>paragem.</em>
            </h2>
          </div>
          <div className="heading-aside">
            <span className="current-index">
              0{activeDay} <i>/</i> 05
            </span>
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
              onClick={() => onSelectDestination(destination.range[0])}
            >
              <span className="tab-symbol">{destination.color === "sea" ? <MapPin size={17} /> : <Sparkles size={17} />}</span>
              <span>
                <strong>{destination.name}</strong>
                <small>{destination.days}</small>
              </span>
              <ChevronRight size={17} />
            </button>
          ))}
        </div>

        <div className="day-selector" role="tablist" aria-label="Dias do roteiro">
          {itinerary.map((day) => (
            <button
              key={day.id}
              type="button"
              className={`day-button ${activeDay === day.id ? "active" : ""}`}
              onClick={() => onSelectDay(day.id)}
              role="tab"
              aria-selected={activeDay === day.id}
            >
              <span>dia</span>
              <strong>0{day.id}</strong>
            </button>
          ))}
        </div>

        <article className={`day-feature accent-${currentDay.accent}`} key={currentDay.id}>
          <div className="day-image" style={{ backgroundImage: `url(${currentDay.image})`, backgroundPosition: currentDay.imagePosition }}>
            <div className="day-image-overlay" />
            <div className="day-image-top">
              <span>{currentDay.kicker}</span>
              <span>{currentDay.mood}</span>
            </div>
            <div className="day-image-bottom">
              <span className="image-location">
                <MapPin size={14} /> {currentDay.destination}
              </span>
              <span className="image-arrow">
                <ArrowUpRight size={18} />
              </span>
            </div>
          </div>
          <div className="day-content">
            <div className="day-content-top">
              <span className="date-label">
                <CalendarDays size={15} /> {currentDay.date}
              </span>
              <span className="day-accent-line" />
            </div>
            <h3>{currentDay.title}</h3>
            <p className="day-description">{currentDay.description}</p>
            <div className="day-facts">
              <span>
                <Clock3 size={15} /> {currentDay.duration}
              </span>
              <span>
                <Route size={15} /> {currentDay.distance}
              </span>
            </div>
            <div className="activity-list">
              {currentDay.activities.map((activity) => {
                const ActivityIcon = activity.icon;
                return (
                  <div className="activity-row" key={activity.time}>
                    <time>{activity.time}</time>
                    <span className="activity-icon">
                      <ActivityIcon size={15} />
                    </span>
                    <div>
                      <strong>{activity.title}</strong>
                      <p>{activity.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="day-note">
              <Sparkles size={14} />
              <span>
                <strong>nota de ritmo</strong> {currentDay.note}
              </span>
            </div>
          </div>
        </article>

        <div className="next-day-row">
          <button type="button" onClick={onAdvanceDay}>
            <span>{activeDay === 5 ? "voltar ao início" : "próxima paragem"}</span>
            <strong>
              {activeDay === 5 ? "Dia 01 · Chegar ao sal" : `Dia 0${activeDay + 1} · ${itinerary[activeDay].title}`}
            </strong>
            <ArrowUpRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
