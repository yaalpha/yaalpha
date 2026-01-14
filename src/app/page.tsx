'use client';

import React, { useMemo, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { 
  SiReact, SiNextdotjs, SiTypescript, 
  SiNestjs, SiPrisma, SiRust,
  SiGithub, SiTelegram, SiDiscord 
} from 'react-icons/si';

import LogoLoop from '@/components/ui/LogoLoop';

const GlassSurface = dynamic(() => import('@/components/ui/GlassSurface'), { ssr: false });
const Prism = dynamic(() => import('@/components/ui/Prism'), { ssr: false });

const baseLogos = [
  { node: <SiTypescript />, title: "TypeScript" },
  { node: <SiReact />, title: "React" },
  { node: <SiNextdotjs />, title: "Next.js" },
  { node: <SiNestjs />, title: "NestJS" },
  { node: <SiPrisma />, title: "Prisma" },
  { node: <SiRust />, title: "Rust" },
];

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => window.innerWidth < 768;
    setIsMobile(checkMobile());
    window.addEventListener('resize', () => setIsMobile(checkMobile()));
    return () => window.removeEventListener('resize', () => setIsMobile(checkMobile()));
  }, []);

  const techLogos = useMemo(() => [
    ...baseLogos, ...baseLogos, ...baseLogos, ...baseLogos
  ], []);

  const CardWrapper = ({ children }: { children: React.ReactNode }) => {
    if (isMobile) {
      return (
        <div className="w-full max-w-[350px] min-h-[500px] rounded-[40px] bg-white/[0.03] border border-white/10 backdrop-blur-[30px] shadow-2xl overflow-hidden relative flex flex-col">
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none" />
          {children}
        </div>
      );
    }
    return (
      <GlassSurface
        width={440}
        height={600}
        borderRadius={40}
        brightness={35}
        distortionScale={-50}
        className="border border-white/10 shadow-2xl"
      >
        {children}
      </GlassSurface>
    );
  };

  return (
    <main className="relative h-[100dvh] w-full flex flex-col items-center justify-center bg-[#060606] overflow-hidden p-4">

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: mounted ? 1 : 0 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        {mounted && (
          <Prism
            animationType="3drotate"
            glow={isMobile ? 0.25 : 0.4}
            noise={0}
            scale={isMobile ? 2.8 : 3.5}
          />
        )}
      </motion.div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full h-full max-w-[1200px] gap-6 md:gap-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center items-center"
        >
          {mounted && (
            <CardWrapper>
              <div className="flex flex-col items-center w-full h-full p-6 md:p-10 relative">

                <div className="relative flex items-center justify-center w-full h-32 md:h-44 shrink-0">
                  <div
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    style={{
                      width: '100%',
                      maskImage: 'linear-gradient(to right, transparent 0%, black 35%, black 65%, transparent 100%)',
                      WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 35%, black 65%, transparent 100%)'
                    }}
                  >
                    <div className={`${isMobile ? 'opacity-20' : 'opacity-35'} grayscale blur-[0.3px]`} style={{ width: '180%' }}>
                      <LogoLoop
                        logos={techLogos}
                        speed={isMobile ? 12 : 20}
                        logoHeight={isMobile ? 40 : 65}
                        gap={isMobile ? 60 : 110}
                        fadeOut={false}
                      />
                    </div>
                  </div>

                  <div className="relative z-10 w-24 h-24 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl bg-[#0a0a0a]">
                    <img src="/avatar.png" alt="Alpha" className="w-full h-full object-cover" />
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center my-6 md:my-10">
                  <h1 className="text-3xl md:text-5xl font-black text-white/90 tracking-tight">
                    yaalpha
                  </h1>
                  <p className="text-white/20 text-[10px] md:text-[12px] font-mono tracking-[0.4em] uppercase mt-2">
                    Full-stack Developer
                  </p>
                </div>

                <div className="w-full bg-black/60 rounded-[32px] border border-white/5 p-5 md:p-6 backdrop-blur-md shadow-2xl mt-auto">
                  <div className="flex gap-1.5 mb-4 opacity-20">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  </div>

                  <div className="font-mono space-y-3">
                    <div className="flex items-center gap-2 text-[11px] md:text-[13px] opacity-70">
                      <span className="text-emerald-500 font-bold">root@yaalpha:</span>
                      <span className="text-blue-400">~#</span>
                      <span className="text-white/70">status</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-white/10 text-[9px] uppercase font-bold tracking-widest">Building</span>
                      <span className="text-[16px] md:text-[20px] text-white/90 font-black">
                        <span className="text-emerald-400/90 drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]">ΛΞИΩ</span>-SHELL
                      </span>
                      <motion.div
                        animate={{ opacity: [0, 1] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        className="w-1.5 h-4 bg-emerald-400/80"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CardWrapper>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: isMobile ? 0 : 20, y: isMobile ? 20 : 0 }}
          animate={{ opacity: mounted ? 1 : 0, x: 0, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-row md:flex-col gap-4 md:gap-5"
        >
          <SocialButton Icon={SiGithub} href="https://github.com/yaalpha" />
          <SocialButton Icon={SiTelegram} href="https://t.me/yaalpha" />
          <SocialButton Icon={SiDiscord} href="https://discord.gg/Wk7wSCCC2M" />
        </motion.div>

      </div>
    </main>
  );
}

function SocialButton({ Icon, href }: { Icon: any; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/5 bg-white/[0.03] flex items-center justify-center text-white/20 hover:text-white/80 hover:bg-white/[0.07] transition-all duration-300 backdrop-blur-md shadow-xl"
    >
      <Icon className="text-[22px] md:text-[24px]" />
    </a>
  );
}