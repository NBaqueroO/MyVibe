import lightningIcon from "@/assets/lightning-icon.png";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-secondary to-primary/10 p-12 md:p-16">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <h2 className="font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
                Empieza tu viaje musical hoy mismo.
              </h2>
              <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 px-8">
                Crear mi MyVibe Gratis
              </Button>
            </div>
            <div className="flex justify-center">
              <div className="relative h-40 w-40 animate-float">
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl" />
                <img
                  src={lightningIcon}
                  alt="Lightning bolt"
                  className="relative h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
