import React from "react";
import AuthLayout from "@/components/hubComponents/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ForgotPasswordPage = () => {
  return (
    <AuthLayout>
      <div className="flex flex-col gap-3 text-center mb-8">
        <h1 className="text-[30px] font-bold leading-9 tracking-tight text-white">
          Recuperar contraseña
        </h1>
        <p className="text-sm text-slate-400">
          Ingresa tu correo electrónico y te enviaremos instrucciones para restablecer tu contraseña.
        </p>
      </div>

      <form className="flex flex-col gap-5">
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

        <Button className="h-[52px] w-full rounded-lg bg-primary text-base font-bold text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 mt-2">
          Enviar instrucciones
        </Button>
      </form>

      <div className="mt-6 flex items-center justify-center gap-1 border-t border-white/10 pt-6 text-sm text-slate-400">
        <Link to="/hub/signin" className="flex items-center gap-2 font-semibold text-white hover:underline">
          <ArrowLeft className="h-4 w-4" />
          Volver a iniciar sesión
        </Link>
      </div>
    </AuthLayout>
  );
};

export default ForgotPasswordPage;
