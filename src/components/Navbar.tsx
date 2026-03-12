import { Music } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
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
          <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Explorar</a>
          <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Tendencias</a>
          <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Comunidad</a>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
            Iniciar Sesión
          </Button>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Registrarse
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
