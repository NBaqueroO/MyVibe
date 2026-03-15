import React from "react";
import AuthLayout from "@/components/hubComponents/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

const SignUpPage = () => {
  return (
    <AuthLayout>
      <div className="flex flex-col gap-3 text-center mb-8">
        <h1 className="text-[30px] font-bold leading-9 tracking-tight text-white">
          Crea una cuenta
        </h1>
        <p className="text-sm text-slate-400">
          Por favor completa tus datos para registrarte
        </p>
      </div>

      <Button
        variant="outline"
        className="relative flex h-[50px] w-full items-center justify-center gap-3 rounded-lg border-slate-200 bg-white text-base font-semibold text-black hover:bg-slate-50 mb-6"
      >
        <img
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png"
          alt="Spotify"
          className="h-5 w-5"
        />
        Registrarse con Spotify
      </Button>

      <div className="flex items-center gap-4 mb-6">
        <Separator className="flex-1 bg-white/10" />
        <span className="text-xs font-medium uppercase tracking-widest text-slate-500">
          O
        </span>
        <Separator className="flex-1 bg-white/10" />
      </div>

      <form className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <Label className="text-sm font-medium text-slate-300">
            Nombre de usuario
          </Label>
          <Input
            type="text"
            placeholder="tu_usuario"
            className="h-[49px] border-white/10 bg-white/5 pl-4 text-white placeholder:text-slate-600 focus-visible:ring-1 focus-visible:ring-white/20"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="text-sm font-medium text-slate-300">
            Correo electrónico
          </Label>
          <Input
            type="email"
            placeholder="nombre@ejemplo.com"
            className="h-[49px] border-white/10 bg-white/5 pl-4 text-white placeholder:text-slate-600 focus-visible:ring-1 focus-visible:ring-white/20"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="text-sm font-medium text-slate-300">
            Contraseña
          </Label>
          <Input
            type="password"
            placeholder="••••••••"
            className="h-[49px] border-white/10 bg-white/5 pl-4 text-white placeholder:text-slate-600 focus-visible:ring-1 focus-visible:ring-white/20"
          />
        </div>

        <Button className="h-[52px] w-full rounded-lg bg-primary text-base font-bold text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 mt-2">
          Registrarse
        </Button>
      </form>

      <div className="mt-6 flex items-center justify-center gap-1 border-t border-white/10 pt-6 text-sm text-slate-400">
        ¿Ya tienes una cuenta?
        <Link to="/hub/signin" className="font-semibold text-white hover:underline">
          Inicia sesión
        </Link>
      </div>
    </AuthLayout>
  );
};

export default SignUpPage;
