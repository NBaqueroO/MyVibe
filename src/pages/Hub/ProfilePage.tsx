import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Sidebar from "@/components/hubComponents/SideBar";
import { 
  Music, 
  User, 
  Settings, 
  Home, 
  Disc, 
  LayoutTemplate, 
  Palette, 
  Image as ImageIcon,
  Check,
  Search,
  Play,
  Pause
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function ProfilePage() {
  const [selectedColor, setSelectedColor] = useState<string>("primary");
  const [layout, setLayout] = useState<"standard" | "minimal" | "compact">("standard");

  return (
    <div className="flex flex-row h-screen min-h-[1024px] w-full bg-[#102217] text-[#F3F4F6] overflow-hidden font-body">
      
      {/* Aside - Slim Global Sidebar */}
      <Sidebar />

      {/* Main - Configuration Panel */}
      <section className="flex flex-col w-[400px] h-full bg-[#162B1E]/40 border-r border-primary/10 shrink-0 overflow-y-auto z-10 backdrop-blur-sm">
        <div className="p-6 gap-1 border-b border-primary/10 shrink-0">
          <h1 className="text-xl font-bold text-[#F3F4F6]">Personalize Profile</h1>
          <p className="text-xs font-semibold text-slate-500 tracking-widest uppercase">MusicID Dashboard</p>
        </div>

        <div className="flex flex-col p-6 gap-8 flex-1">
          
          {/* Section - Background Selector */}
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <ImageIcon className="w-3 h-3 text-primary" />
                <span className="text-sm font-semibold">Background</span>
              </div>
              <div className="flex p-1 bg-[#0A140E] rounded-lg">
                <button className="px-3 py-1 bg-primary rounded text-xs font-medium text-primary-foreground">Image</button>
                <button className="px-3 py-1 rounded text-xs font-medium text-slate-400">Color</button>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="relative w-full h-[100px] border-2 border-primary rounded-lg overflow-hidden group cursor-pointer">
                <img src="https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=347&auto=format&fit=crop" alt="Background" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 flex items-end justify-between p-3 bg-gradient-to-t from-[#102217]/80 to-transparent">
                  <span className="text-xs font-medium text-white">Custom Upload</span>
                  <div className="w-3 h-3 bg-primary rounded-full border border-primary-foreground" />
                </div>
              </div>
              <p className="text-[11px] text-slate-500">Automatically syncs background colors with your current top artist's album aesthetic.</p>
            </div>
          </div>

          {/* Section - Color Palette Selector */}
          <div className="flex flex-col gap-4">
             <div className="flex items-center gap-2">
                <Palette className="w-[10px] h-[10px] text-primary" />
                <span className="text-sm font-semibold">Color Palette</span>
              </div>
              
              <div className="grid grid-cols-4 gap-3 relative h-[170px]">
                {[
                  { color: "hsl(var(--primary))", id: "primary" },
                  { color: "#A855F7", id: "purple" },
                  { color: "#3B82F6", id: "blue" },
                  { color: "#F97316", id: "orange" },
                  { color: "#F43F5E", id: "pink" },
                  { color: "#22D3EE", id: "cyan" },
                  { color: "#FACC15", id: "yellow" },
                  { color: "custom", id: "custom" }
                ].map((item) => (
                  <button 
                    key={item.id}
                    onClick={() => setSelectedColor(item.id)}
                    className={cn(
                      "w-[78px] h-[78px] rounded-lg relative transition-all",
                      item.id === "custom" ? "border-2 border-dashed border-slate-600 flex items-center justify-center hover:border-slate-400" : "",
                      selectedColor === item.id ? "ring-2 ring-white/20 scale-105 z-10" : "hover:scale-105"
                    )}
                    style={{ backgroundColor: item.id !== "custom" ? item.color : "transparent" }}
                  >
                     {selectedColor === item.id && item.id !== "custom" && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Check className="w-6 h-6 text-black/50" />
                        </div>
                     )}
                     {item.id === "custom" && <Settings className="w-4 h-4 text-slate-500" />}
                  </button>
                ))}
              </div>
          </div>

          {/* Section - Featured Song Selection */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
                <Music className="w-3 h-3 text-primary" />
                <span className="text-sm font-semibold">Featured Song</span>
            </div>

            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-500" />
              <input 
                type="text" 
                placeholder="Search song or artist..." 
                className="w-full h-[38px] bg-[#0A140E] border border-primary/20 rounded-lg pl-10 pr-4 text-sm text-slate-300 placeholder:text-slate-600 focus:outline-none focus:border-primary"
              />
            </div>

            <div className="flex items-center p-2 gap-3 bg-primary/10 border border-primary/20 rounded-lg">
              <img src="https://upload.wikimedia.org/wikipedia/en/c/c1/The_Weeknd_-_After_Hours.png" alt="Album" className="w-10 h-10 rounded shrink-0" />
              <div className="flex flex-col overflow-hidden">
                <span className="text-xs font-bold text-[#F3F4F6] truncate">After Hours</span>
                <span className="text-[10px] text-slate-400 truncate">The Weeknd</span>
              </div>
              <Check className="ml-auto w-3 h-3 text-primary" />
            </div>
          </div>

          {/* Section - Layout Options */}
          <div className="flex flex-col gap-4">
             <div className="flex items-center gap-2">
                <LayoutTemplate className="w-[10px] h-[10px] text-primary" />
                <span className="text-sm font-semibold">Layout</span>
              </div>

              <div className="flex gap-3">
                 <button 
                  onClick={() => setLayout("standard")}
                  className={cn(
                    "flex-1 h-[61px] bg-[#0A140E] border rounded flex flex-col p-2 gap-1 transition-all",
                    layout === "standard" ? "border-primary" : "border-transparent opacity-60 hover:opacity-100"
                  )}
                 >
                    <div className="flex gap-1 items-center w-full">
                       <div className={cn("w-1/3 h-1 rounded-full", layout === "standard" ? "bg-primary" : "bg-slate-700")} />
                       <div className="w-2/3 h-1 bg-slate-700 rounded-full" />
                    </div>
                    <div className="w-1/2 h-1 bg-slate-700 rounded-full" />
                    <span className={cn("mt-auto text-[10px] w-full text-center", layout === "standard" ? "text-primary" : "text-slate-500")}>Standard</span>
                 </button>

                 <button 
                  onClick={() => setLayout("minimal")}
                  className={cn(
                    "flex-1 h-[61px] bg-[#0A140E] border rounded flex flex-col p-2 gap-1 transition-all",
                    layout === "minimal" ? "border-primary" : "border-transparent opacity-60 hover:opacity-100"
                  )}
                 >
                    <div className="flex gap-1 items-center w-full">
                       <div className="w-4 h-3 bg-slate-700 rounded-sm" />
                       <div className="flex flex-col gap-1 w-full">
                         <div className={cn("w-full h-1 rounded-full", layout === "minimal" ? "bg-primary" : "bg-slate-700")} />
                         <div className="w-2/3 h-1 bg-slate-700 rounded-full" />
                       </div>
                    </div>
                    <span className={cn("mt-auto text-[10px] w-full text-center", layout === "minimal" ? "text-primary" : "text-slate-500")}>Compact</span>
                 </button>
              </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-primary/10 bg-[#0A140E] flex gap-3 mt-auto">
          <Button variant="ghost" className="flex-1 text-slate-400 hover:text-white hover:bg-white/5">Cancel</Button>
          <Button className="flex-[2] bg-primary text-primary-foreground hover:bg-primary/90 font-bold shadow-lg shadow-primary/20">Save Changes</Button>
        </div>
      </section>

      {/* Section - Preview Canvas */}
      <main className="flex-1 relative flex items-center justify-center bg-[#102217]">
        {/* Background Glows */}
        <div className="absolute top-0 left-0 right-0 bottom-0 opacity-20 pointer-events-none overflow-hidden">
           <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
           <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 opacity-50" />
        </div>

        {/* Profile Card */}
        <div className="relative w-full max-w-[512px] h-[680px] rounded-3xl border border-white/10 bg-white/[0.002] shadow-2xl backdrop-blur-sm overflow-hidden z-10 flex flex-col">
            
            {/* Card Header / Banner */}
            <div className="relative h-[240px] w-full">
               <img src="https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=347&auto=format&fit=crop" alt="Banner" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#102217] via-[#102217]/40 to-transparent" />
               
               <div className="absolute bottom-0 left-0 w-full p-8 flex items-end gap-4">
                  <div className="relative w-16 h-16 rounded-full border-2 border-primary p-0.5 shadow-lg">
                    <img src="https://github.com/shadcn.png" alt="Avatar" className="w-full h-full rounded-full object-cover" />
                  </div>
                  <div className="flex flex-col mb-1">
                    <h2 className="text-2xl font-bold text-white tracking-tight">Username</h2>
                    <div className="flex items-center gap-1 text-primary text-sm font-medium">
                      <Music className="w-3 h-3" />
                      <span>Music Enthusiast</span>
                    </div>
                  </div>
               </div>
            </div>

            {/* Card Content */}
            <div className="flex-1 p-8 flex flex-col gap-6 bg-[#162B1E]/40 backdrop-blur-md border-t border-white/5">
               
               {/* Stats / Genres Pills */}
               <div className="flex gap-2">
                 <div className="px-3 py-1.5 rounded-full bg-[#162B1E]/60 border border-primary/10 backdrop-blur text-[10px] font-bold uppercase tracking-wider text-white">
                   Electro Pop
                 </div>
                 <div className="px-3 py-1.5 rounded-full bg-[#162B1E]/60 border border-primary/10 backdrop-blur text-[10px] font-bold uppercase tracking-wider text-white">
                   Synthwave
                 </div>
                 <div className="px-3 py-1.5 rounded-full bg-[#162B1E]/60 border border-primary/10 backdrop-blur text-[10px] font-bold uppercase tracking-wider text-white">
                   Indie
                 </div>
               </div>

               {/* Artist Insights */}
               <div className="p-4 rounded-2xl bg-[#162B1E]/40 border border-primary/10 backdrop-blur flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <Disc className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase text-slate-400">Top Artist</div>
                    <div className="text-sm font-bold text-white">The Weeknd</div>
                  </div>
               </div>

               {/* Featured Track */}
               <div className="mt-auto p-0 rounded-2xl border border-primary/10 bg-[#162B1E]/40 backdrop-blur overflow-hidden relative group">
                  <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-5 transition-opacity" />
                  <div className="absolute top-0 left-0 h-1 bg-primary w-1/2 shadow-[0_0_8px_var(--primary-glow)] z-20" />
                  
                  <div className="p-4 flex items-center gap-4 relative z-10">
                     <div className="w-14 h-14 rounded-lg shadow-lg relative overflow-hidden group-cursor-pointer">
                        <img src="https://upload.wikimedia.org/wikipedia/en/c/c1/The_Weeknd_-_After_Hours.png" alt="Album" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                           <Play className="w-6 h-6 text-white fill-current" />
                        </div>
                     </div>
                     <div className="flex flex-col gap-0.5">
                        <div className="text-[10px] font-bold uppercase text-primary tracking-wider">Featured Track</div>
                        <div className="text-base font-bold text-white leading-tight">After Hours</div>
                        <div className="text-xs text-slate-400">The Weeknd</div>
                     </div>
                  </div>
                  
                  <div className="px-4 pb-3 flex justify-between text-[10px] text-slate-500 font-mono">
                     <span>0:00</span>
                     <span>6:01</span>
                  </div>
               </div>

            </div>
        </div>

        {/* Hint Tooltip */}
        <div className="absolute bottom-12 flex items-center gap-2 text-slate-500 text-xs animate-pulse">
           <LayoutTemplate className="w-4 h-4" />
           <span>Hover over elements to see editing options</span>
        </div>

        {/* Top Label */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 flex items-center justify-center px-4 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest">
           Live Preview
        </div>

      </main>

    </div>
  );
}
