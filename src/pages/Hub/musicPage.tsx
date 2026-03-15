import "@/styles/hub.css";
import Sidebar from "@/components/hubComponents/SideBar";
import { useT } from "@/hooks/useTranslations";

export default function TestMusicPage() {
  const t = useT();

  return (
    <div className="layout">
      <Sidebar />
      <main className="content">
      </main>
    </div>
  );
}