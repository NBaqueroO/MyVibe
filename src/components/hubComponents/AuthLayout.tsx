import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background">
      {/* Abstract Background Glows - utilizing theme primary color */}
      <div className="absolute left-[calc(50%-250px)] top-[calc(50%-250px)] z-0 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[60px]" />
      <div className="absolute bottom-0 right-0 z-0 h-[300px] w-[300px] rounded-full bg-primary/10 blur-[50px]" />

      {/* Overlay+Border+OverlayBlur Card */}
      <div className="z-10 w-full max-w-[480px] rounded-xl border border-white/10 bg-black/40 px-[41px] py-[41px] backdrop-blur-md shadow-2xl">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
