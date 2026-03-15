import "@/styles/hub.css";
import Sidebar from "@/components/hubComponents/SideBar";
import Topbar from "@/components/hubComponents/search/TopBar";
import UploadGridEvent from "@/components/hubComponents/search/UploadGridEvent";
import { useT } from "@/hooks/useTranslations";
import { Event } from "@/types/Event";

const events: Event[] = [
  {
    id: "1",
    title: "Neon Night Festival",
    genre: "Electro Pop",
    startTime: "21:00",
    endTime: "23:00",
    location: "Bogotá Arena",
    date: "2026-03-20",
    cover: "neon-night.jpg",
    status: "upcoming"
  },
  {
    id: "2",
    title: "Lo-fi Chill Session",
    genre: "Lo-fi",
    startTime: "18:30",
    endTime: "20:00",
    location: "Café Cultural",
    date: "2026-03-22",
    cover: "lofi-chill.jpg",
    status: "past"
  },
  {
    id: "3",
    title: "Synthwave Universe",
    genre: "Synthwave",
    startTime: "20:00",
    endTime: "22:00",
    location: "Club Aurora",
    date: "2026-03-25",
    cover: "synthwave-universe.jpg",
    status: "upcoming"
  },
  {
    id: "4",
    title: "Indie Rock Live",
    genre: "Indie Rock",
    startTime: "19:30",
    endTime: "21:00",
    location: "Teatro Central",
    date: "2026-03-28",
    cover: "indie-rock-live.jpg",
    status: "cancelled"
  }
];

export default function UploadsPage() {
  const t = useT();

  return (
    <div className="layout">
      <Sidebar />
      <main className="content">
        <Topbar />
        <section className="header">
          <h1> Mis eventos </h1>
          <p> Gestiona y analiza tus eventos.</p>
        </section>
        <UploadGridEvent events={events} />
      </main>
    </div>
  );
}