import { Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/contexts/I18nContext";

const HeroSection = () => {
  const { t } = useI18n();

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {t.hero.badge}
            </div>

            <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {t.hero.titleStart}
              <span className="text-primary">{t.hero.titleAccent}</span>
            </h1>

            <p className="max-w-md text-muted-foreground leading-relaxed">{t.hero.description}</p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
                {t.hero.connectSpotify}
              </Button>
              <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary">
                {t.hero.viewDemo}
              </Button>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-8 w-8 rounded-full border-2 border-background bg-muted" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">{t.hero.joined}</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-lg" style={{ boxShadow: "var(--glow-primary)" }}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-muted" />
                  <div>
                    <p className="font-heading font-semibold text-foreground">Alex Rivera</p>
                    <p className="text-sm text-primary">@alex_vibes</p>
                  </div>
                </div>
                <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {t.hero.proUser}
                </span>
              </div>

              <div className="mt-6">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{t.hero.topArtists}</p>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 rounded-lg bg-secondary px-3 py-2">
                    <div className="h-8 w-8 rounded bg-muted" />
                    <span className="text-sm text-foreground">Arctic Monkeys</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-secondary px-3 py-2">
                    <div className="h-8 w-8 rounded bg-muted" />
                    <span className="text-sm text-foreground">Tame Impala</span>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{t.hero.genre}</p>
                <div className="mt-3">
                  <div className="h-3 w-full overflow-hidden rounded-full bg-secondary">
                    <div className="flex h-full">
                      <div className="h-full bg-primary" style={{ width: "65%" }} />
                      <div className="h-full bg-primary/40" style={{ width: "20%" }} />
                    </div>
                  </div>
                  <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                    <span>INDIE ROCK 65%</span>
                    <span>SYNTH POP 20%</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-3 rounded-lg bg-secondary px-4 py-3">
                <Headphones className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">{t.hero.listeningNow}</p>
                  <p className="text-sm font-medium text-foreground">"Borderline" – Tame Impala</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
