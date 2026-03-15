import { Event, EventStatus } from "@/types/Event";
import "@/styles/hub.css";

interface Props {
  event: Event;
}

const statusLabels: Record<EventStatus, string> = {
  upcoming:  "Próximamente",
  available: "Disponible",
  sold_out:  "Agotado",
  ongoing:   "En curso",
  past:      "Finalizado",
  cancelled: "Cancelado",
};

export default function EventCard({ event }: Props) {
  const coverPath = `/assets/images/${event.cover}`;

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("es-CO", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const handleAddToCalendar = () => {
    const [startHour, startMin] = event.startTime.split(":").map(Number);
    const [endHour, endMin] = event.endTime.split(":").map(Number);

    const startDate = new Date(event.date);
    startDate.setHours(startHour, startMin);

    const endDate = new Date(event.date);
    endDate.setHours(endHour, endMin);

    const format = (d: Date) => d.toISOString().replace(/-|:|\.\d{3}/g, "");

    const url =
      `https://calendar.google.com/calendar/render?action=TEMPLATE` +
      `&text=${encodeURIComponent(event.title)}` +
      `&dates=${format(startDate)}/${format(endDate)}` +
      `&location=${encodeURIComponent(event.location)}`;

    window.open(url, "_blank");
  };

  const canAddToCalendar = event.status === "upcoming" || event.status === "available";

  return (
    <div className="event-card">
      <div className="cover">
        <img src={coverPath} alt={event.title} />
        <span className={`status ${event.status}`}>
          {statusLabels[event.status]}
        </span>
      </div>

      <div className="info">
        <h3>{event.title}</h3>
        <p>{event.genre} • {event.startTime} - {event.endTime}</p>
        <div className="stats">
          <span>📍 {event.location}</span>
          <span>📅 {formatDate(event.date)}</span>
        </div>

        {canAddToCalendar && (
          <button className="add-to-calendar" onClick={handleAddToCalendar}>
            📅 Agregar al calendario
          </button>
        )}
      </div>
    </div>
  );
}