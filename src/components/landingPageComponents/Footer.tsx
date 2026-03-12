import { Music, Globe } from "lucide-react";
import { useI18n } from "@/contexts/I18nContext";

const Footer = () => {
  const { t, toggleLocale } = useI18n();

  const linkGroups = [
    { title: t.footer.product, items: [t.footer.features, t.footer.api, t.footer.pricing] },
    { title: t.footer.company, items: [t.footer.about, t.footer.blog, t.footer.careers] },
    { title: t.footer.legal, items: [t.footer.privacy, t.footer.terms, t.footer.cookies] },
  ];

  return (
    <footer className="border-t border-border py-16">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Music className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-heading text-lg font-bold text-foreground">
                My<span className="text-primary">Vibe</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">{t.footer.tagline}</p>
          </div>

          {linkGroups.map((group) => (
            <div key={group.title}>
              <h4 className="font-heading font-semibold text-foreground">{group.title}</h4>
              <ul className="mt-4 space-y-3">
                {group.items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">{t.footer.rights}</p>
          <button
            onClick={toggleLocale}
            className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
          >
            <Globe className="h-4 w-4" />
            {t.footer.language}
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
