import { useNavigate, useLocation } from "react-router-dom";
import { useI18n } from "@/contexts/I18nContext"
import { toast } from "sonner";



type NavItem = {
  id: string;
  href: string;
  icon: React.ReactNode;
  label: string;
  position?: "top" | "bottom";
};

const MusicIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18V5l12-2v13" />
    <circle cx="6" cy="18" r="3" />
    <circle cx="18" cy="16" r="3" />
  </svg>
);

const UserIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const RssIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 11a9 9 0 0 1 9 9" />
    <path d="M4 4a16 16 0 0 1 16 16" />
    <circle cx="5" cy="19" r="1" />
  </svg>
);

const GridIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
  </svg>
);

const SettingsIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
  </svg>
);

const BackIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5" />
    <path d="M12 19l-7-7 7-7" />
  </svg>
);

const NAV_ITEMS: NavItem[] = [
  { id: "music",   href: "/hub/music",   icon: <MusicIcon />, label: "Music",   position: "top" },
  { id: "profile", href: "/hub/profile", icon: <UserIcon />,  label: "Profile", position: "top" },
  { id: "feed",    href: "/hub/uploads", icon: <RssIcon />,   label: "Feed",    position: "top" },
  { id: "grid",    href: "/hub/grid",    icon: <GridIcon />,  label: "Grid",    position: "top" },
];

const BOTTOM_ITEMS: NavItem[] = [
  { id: "account",  href: "/hub/account",  icon: <UserIcon />,     label: "Account",  position: "bottom" },
  { id: "settings", href: "/hub/settings", icon: <SettingsIcon />, label: "Settings", position: "bottom" },
];

const btnStyle = (active = false): React.CSSProperties => ({
  width: 36,
  height: 36,
  borderRadius: 8,
  border: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: active ? "#00bfa5" : "transparent",
  color: active ? "#ffffff" : "#5a7a75",
  transition: "background-color 0.15s ease, color 0.15s ease",
  fontSize: 11,
  fontWeight: 600,
  letterSpacing: 0.3,
});

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { locale, toggleLocale } = useI18n();

  const isActive = (href: string) => location.pathname === href;

  const handleHover = (e: React.MouseEvent<HTMLButtonElement>, entering: boolean, active = false) => {
    if (active) return;
    e.currentTarget.style.backgroundColor = entering ? "#1a3330" : "transparent";
    e.currentTarget.style.color = entering ? "#ffffff" : "#5a7a75";
  };

  return (
    <nav
      style={{
        width: 56,
        height: "100%",
        backgroundColor: "#0d1f1e",
        borderRadius: 12,
        margin: 8,
        padding: "8px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        flexShrink: 0,
      }}
    >
      {/* Botón volver */}
      <button
        onClick={() => navigate("/")}
        title="Volver al inicio"
        aria-label="Volver al inicio"
        style={{ ...btnStyle(), marginBottom: 8 }}
        onMouseEnter={(e) => handleHover(e, true)}
        onMouseLeave={(e) => handleHover(e, false)}
      >
        <BackIcon />
      </button>

      {/* Items superiores */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
        {NAV_ITEMS.map((item) => (
          <NavButton
            key={item.id}
            item={item}
            isActive={isActive(item.href)}
            onClick={() => navigate(item.href)}
          />
        ))}
      </div>

      <div style={{ flex: 1 }} />

      {/* Botón de idioma */}
      <button
        onClick={toggleLocale}
        title={locale === "es" ? "Switch to English" : "Cambiar a Español"}
        aria-label="Toggle language"
        style={{ ...btnStyle(), marginBottom: 4 }}
        onMouseEnter={(e) => handleHover(e, true)}
        onMouseLeave={(e) => handleHover(e, false)}
      >
        {locale === "es" ? "ES" : "EN"}
      </button>

      {/* Items inferiores */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
        {BOTTOM_ITEMS.map((item) => (
          <NavButton
            key={item.id}
            item={item}
            isActive={isActive(item.href)}
            onClick={() => navigate(item.href)}
          />
        ))}
      </div>
    </nav>
  );
}

type NavButtonProps = {
  item: NavItem;
  isActive: boolean;
  onClick: () => void;
};

function NavButton({ item, isActive, onClick }: NavButtonProps) {
  return (
    <button
      onClick={onClick}
      title={item.label}
      aria-label={item.label}
      aria-current={isActive ? "page" : undefined}
      style={btnStyle(isActive)}
      onMouseEnter={(e) => {
        if (!isActive) {
          e.currentTarget.style.backgroundColor = "#1a3330";
          e.currentTarget.style.color = "#8ab8b2";
        }
      }}
      onMouseLeave={(e) => {
        if (!isActive) {
          e.currentTarget.style.backgroundColor = "transparent";
          e.currentTarget.style.color = "#5a7a75";
        }
      }}
    >
      {item.icon}
    </button>
  );
}