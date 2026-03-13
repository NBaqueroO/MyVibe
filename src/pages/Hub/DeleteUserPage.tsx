import AuthLayout from "@/components/hubComponents/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ShieldAlert } from "lucide-react";

const DeleteUserPage = () => {
  const navigate = useNavigate();

  return (
    <AuthLayout>
      <div className="flex flex-col items-center text-center">
        <ShieldAlert className="h-16 w-16 text-destructive mb-4" />
        <h1 className="text-[30px] font-bold leading-9 tracking-tight text-red-400">
          Eliminar Cuenta
        </h1>
        <p className="text-sm text-slate-400 mt-3 max-w-sm">
          Esta acción es irreversible y eliminará permanentemente todos tus datos, incluyendo tus canciones, estadísticas y configuración.
        </p>
      </div>

      <form className="flex flex-col gap-5 mt-8">
        <div className="flex flex-col gap-2 text-left">
          <Label htmlFor="confirm" className="text-sm font-medium text-slate-300">
            Para confirmar, escribe "eliminar mi cuenta" a continuación:
          </Label>
          <Input
            id="confirm"
            type="text"
            placeholder='eliminar mi cuenta'
            className="h-[49px] border-white/10 bg-white/5 pl-4 text-white placeholder:text-slate-600 focus-visible:ring-1 focus-visible:ring-destructive"
          />
        </div>

        <Button
          variant="destructive"
          className="h-[52px] w-full rounded-lg text-base font-bold mt-2"
          // disabled={true} // This should be controlled by the input value
        >
          Eliminar mi cuenta permanentemente
        </Button>
      </form>

      <div className="mt-6 flex items-center justify-center gap-1 border-t border-white/10 pt-6 text-sm text-slate-400">
        <Link to="/hub/profile" className="flex items-center gap-2 font-semibold text-white hover:underline">
          <ArrowLeft className="h-4 w-4" />
          No, volver a mi perfil
        </Link>
      </div>
    </AuthLayout>
  );
};

export default DeleteUserPage;
