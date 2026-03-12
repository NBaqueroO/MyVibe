import React, { createContext, useContext, useState, ReactNode } from "react";

type Locale = "es" | "en";

const translations = {
  es: {
    nav: {
      explore: "Explorar",
      trends: "Tendencias",
      community: "Comunidad",
      login: "Iniciar Sesión",
      register: "Registrarse",
    },
    hero: {
      badge: "NUEVA EXPERIENCIA SOCIAL",
      titleStart: "Tu música ",
      titleAccent: "define quién eres.",
      description: "Crea tu perfil dinámico basado en tus gustos reales de Spotify y conecta con personas que vibran en tu misma sintonía.",
      connectSpotify: "Conectar con Spotify",
      viewDemo: "Ver Demo",
      joined: "+12k amantes de la música ya se han unido",
      topArtists: "Top Artistas",
      genre: "Género Predominante",
      listeningNow: "Escuchando ahora",
      proUser: "PRO USER",
    },
    steps: {
      title: "Tu perfil, en tres pasos.",
      subtitle: "Diseñado para que la música sea el centro de tu identidad digital sin complicaciones.",
      step1Title: "1. Conecta",
      step1Desc: "Vincula tu cuenta de Spotify de forma segura. Nosotros analizamos tus hábitos de escucha para crear tu perfil único.",
      step2Title: "2. Personaliza",
      step2Desc: "Elige tus géneros y artistas favoritos para mostrar. Selecciona el esquema de colores que mejor combine con tu aura musical.",
      step3Title: "3. Comparte",
      step3Desc: "Envía tu MyVibe a tus amigos, añádelo a tu bio de Instagram o compártelo en tus redes sociales favoritas.",
    },
    cta: {
      title: "Empieza tu viaje musical hoy mismo.",
      button: "Crear mi MyVibe Gratis",
    },
    footer: {
      tagline: "La nueva forma de conectar a través de lo que escuchas. Hecho por y para amantes de la música.",
      product: "Producto",
      features: "Características",
      api: "API",
      pricing: "Precios",
      company: "Compañía",
      about: "Acerca de",
      blog: "Blog",
      careers: "Carreras",
      legal: "Legal",
      privacy: "Privacidad",
      terms: "Términos",
      cookies: "Cookies",
      rights: "© 2024 MyVibe Inc. Todos los derechos reservados.",
      language: "Español (ES)",
    },
  },
  en: {
    nav: {
      explore: "Explore",
      trends: "Trends",
      community: "Community",
      login: "Log In",
      register: "Sign Up",
    },
    hero: {
      badge: "NEW SOCIAL EXPERIENCE",
      titleStart: "Your music ",
      titleAccent: "defines who you are.",
      description: "Create your dynamic profile based on your real Spotify tastes and connect with people who vibe on the same wavelength.",
      connectSpotify: "Connect with Spotify",
      viewDemo: "View Demo",
      joined: "+12k music lovers have already joined",
      topArtists: "Top Artists",
      genre: "Predominant Genre",
      listeningNow: "Listening now",
      proUser: "PRO USER",
    },
    steps: {
      title: "Your profile, in three steps.",
      subtitle: "Designed so music is the center of your digital identity without complications.",
      step1Title: "1. Connect",
      step1Desc: "Link your Spotify account securely. We analyze your listening habits to create your unique profile.",
      step2Title: "2. Customize",
      step2Desc: "Choose your favorite genres and artists to display. Select the color scheme that best matches your musical aura.",
      step3Title: "3. Share",
      step3Desc: "Send your MyVibe to your friends, add it to your Instagram bio, or share it on your favorite social networks.",
    },
    cta: {
      title: "Start your musical journey today.",
      button: "Create my MyVibe Free",
    },
    footer: {
      tagline: "The new way to connect through what you listen to. Made by and for music lovers.",
      product: "Product",
      features: "Features",
      api: "API",
      pricing: "Pricing",
      company: "Company",
      about: "About",
      blog: "Blog",
      careers: "Careers",
      legal: "Legal",
      privacy: "Privacy",
      terms: "Terms",
      cookies: "Cookies",
      rights: "© 2024 MyVibe Inc. All rights reserved.",
      language: "English (EN)",
    },
  },
} as const;

type Translations = typeof translations.es;

interface I18nContextType {
  locale: Locale;
  t: Translations;
  toggleLocale: () => void;
}

const I18nContext = createContext<I18nContextType | null>(null);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>("es");

  const toggleLocale = () => setLocale((l) => (l === "es" ? "en" : "es"));

  return (
    <I18nContext.Provider value={{ locale, t: translations[locale], toggleLocale }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
};
