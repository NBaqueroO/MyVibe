import { Music } from "lucide-react";

const Footer = () => {
  const links = {
    Producto: ["Características", "API", "Precios"],
    Compañía: ["Acerca de", "Blog", "Carreras"],
    Legal: ["Privacidad", "Términos", "Cookies"],
  };

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
            <p className="text-sm leading-relaxed text-muted-foreground">
              La nueva forma de conectar a través de lo que escuchas. Hecho por y para amantes de la música.
            </p>
          </div>

          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="font-heading font-semibold text-foreground">{title}</h4>
              <ul className="mt-4 space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2024 MyVibe Inc. Todos los derechos reservados.
          </p>
          <p className="text-sm text-muted-foreground">Español (ES)</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
