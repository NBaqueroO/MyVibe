import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import UploadsPage from "./pages/Hub/UploadPage.tsx";
import MusicPage from "./pages/Hub/musicPage.tsx"
import { I18nProvider } from "./contexts/I18nContext.tsx";


const queryClient = new QueryClient();

const App = () => (
  <I18nProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner
          position="top-center"
          toastOptions={{
            style: {
              fontSize: "16px",
              padding: "16px 24px",
              fontWeight: "600",
              minWidth: "320px",
              textAlign: "center",
            },
          }}
        />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />

            {/* /hub redirige a /hub/uploads por default */}
            <Route path="/hub" element={<Navigate to="/hub/uploads" replace />} />

            {/* Páginas del hub */}
            <Route path="/hub/uploads"   element={<UploadsPage />} />
            {/* Aquí pongan sus páginas solo cambien el elemento de uploads a lo que les corresponda */}
            <Route path="/hub/music"   element={<MusicPage />} />
            {/* DEJAR ESTO AL FINAL NO PONER NADA DEBAJO*/}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </I18nProvider>
);

export default App;
