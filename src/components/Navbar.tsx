import { Music, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/contexts/I18nContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { t, locale, toggleLocale } = useI18n();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Music className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="font-heading text-lg font-bold text-foreground">
            My<span className="text-primary">Vibe</span>
          </span>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <a href="/hub/profile/" className="text-sm text-muted-foreground transition-colors hover:text-foreground">{t.nav.explore}</a>
          <a href="/hub/grid/" className="text-sm text-muted-foreground transition-colors hover:text-foreground">{t.nav.trends}</a>
          <a href="/hub/uploads/" className="text-sm text-muted-foreground transition-colors hover:text-foreground">{t.nav.community}</a>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleLocale}
            className="flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <Globe className="h-4 w-4" />
            {locale === "es" ? "EN" : "ES"}
          </button>
          <Link to="/hub/signin">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              {t.nav.login}
            </Button>
          </Link>
          <Link to="/hub/signup">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              {t.nav.register}
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
