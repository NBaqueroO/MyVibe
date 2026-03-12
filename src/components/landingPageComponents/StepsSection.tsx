import { Link2, Palette, Share2 } from "lucide-react";
import { useI18n } from "@/contexts/I18nContext";

const StepsSection = () => {
  const { t } = useI18n();

  const steps = [
    { icon: Link2, title: t.steps.step1Title, description: t.steps.step1Desc },
    { icon: Palette, title: t.steps.step2Title, description: t.steps.step2Desc },
    { icon: Share2, title: t.steps.step3Title, description: t.steps.step3Desc },
  ];

  return (
    <section className="py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">{t.steps.title}</h2>
          <p className="mt-4 text-muted-foreground">{t.steps.subtitle}</p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.title}
              className="group rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/40 hover:shadow-lg"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <step.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
