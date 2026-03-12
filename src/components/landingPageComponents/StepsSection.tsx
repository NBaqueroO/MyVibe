import { Link2, Palette, Share2 } from "lucide-react";

const steps = [
  {
    icon: Link2,
    title: "1. Conecta",
    description: "Vincula tu cuenta de Spotify de forma segura. Nosotros analizamos tus hábitos de escucha para crear tu perfil único.",
  },
  {
    icon: Palette,
    title: "2. Personaliza",
    description: "Elige tus géneros y artistas favoritos para mostrar. Selecciona el esquema de colores que mejor combine con tu aura musical.",
  },
  {
    icon: Share2,
    title: "3. Comparte",
    description: "Envía tu MyVibe a tus amigos, añádelo a tu bio de Instagram o compártelo en tus redes sociales favoritas.",
  },
];

const StepsSection = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
            Tu perfil, en tres pasos.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Diseñado para que la música sea el centro de tu identidad digital sin complicaciones.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.title}
              className="group rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/40 hover:shadow-lg"
              style={{ transition: "box-shadow 0.3s, border-color 0.3s" }}
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
