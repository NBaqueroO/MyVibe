import EventCard from "./EventCard";
import { Event } from "@/types/Event";

interface Props {
  events: Event[];
}

export default function UploadGrid({ events }: Props) {
  return (
    <div className="upload-grid">
      {events.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}