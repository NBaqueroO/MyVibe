import "@/styles/hub.css";
import Sidebar from "@/components/hubComponents/SideBar";
import Topbar from "@/components/hubComponents/search/TopBar";
import UploadGrid from "@/components/hubComponents/search/UploadGrid";
import StatsCard from "@/components/hubComponents/search/StatsCard";
import { Song } from "@/types/Song";
import { useT } from "@/hooks/UseTranslations";

const songs: Song[] = [
  {
    id: "1",
    title: "Neon Dreams",
    genre: "Electro Pop",
    duration: "3:24",
    plays: 1200,
    likes: 450,
    status: "published",
    cover: "/placeholder1.png",
  },
  {
    id: "2",
    title: "Midnight Echoes",
    genre: "Lo-fi",
    duration: "4:15",
    plays: 0,
    likes: 0,
    status: "draft",
    cover: "/placeholder2.png",
  },
  {
    id: "3",
    title: "Cyber Horizon",
    genre: "Synthwave",
    duration: "4:15",
    plays: 8400,
    likes: 2100,
    status: "published",
    cover: "/placeholder3.png",
  },
  {
    id: "4",
    title: "Static Waves EP",
    genre: "Indie Rock",
    duration: "Album",
    plays: 540,
    likes: 112,
    status: "published",
    cover: "/placeholder4.png",
  },
];

export default function UploadsPage() {
  const t = useT();

  return (
    <div className="layout">
      <Sidebar />
      <main className="content">
        <Topbar />
        <section className="header">
          <h1>{t.hub.uploads.title}</h1>
          <p>{t.hub.uploads.subtitle}</p>
        </section>
        <UploadGrid songs={songs} />
        <section className="stats">
          <StatsCard label={t.hub.uploads.totalPlays}   value="10.5k" change="↑ 12% este mes" />
          <StatsCard label={t.hub.uploads.totalLikes}   value="2.6k"  change="↑ 5% este mes" />
          <StatsCard label={t.hub.uploads.filesUploaded} value="24" />
        </section>
      </main>
    </div>
  );
}