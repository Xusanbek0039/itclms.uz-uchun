import { useState, useEffect } from 'react';
import { Shield, Target, Play, ArrowRight, Crosshair, Star, X, PlayCircle, Terminal, Code2, Cpu, Medal, Trophy, UserCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AnimatedSection } from './AnimatedSection';
import { WatchDemoDialog } from './WatchDemoDialog';
import { Link } from 'react-router-dom';

function HolidayBanner() {
  const [isVisible, setIsVisible] = useState(true);
  if (!isVisible) return null;

  return (
    <div className="relative bg-[#0d1a0d] dark:bg-[#050a05] border-b border-primary/30 overflow-hidden z-[100] transition-colors duration-500">
      <div className="container mx-auto px-4 py-2 relative z-10 flex flex-col sm:flex-row items-center justify-between gap-3 text-white">
        <div className="flex items-center gap-3">
          <Star className="w-5 h-5 text-primary animate-pulse" />
          <p className="font-bold text-[10px] md:text-sm tracking-[0.2em] uppercase">
            14-Yanvar — Vatan Himoyachilari Kuni Muborak! 🇺🇿
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="text-[10px] md:text-xs font-bold text-black bg-primary px-4 py-1 hover:bg-white transition-all flex items-center rounded-sm"
            onClick={() => window.open('https://youtube.com/...', '_blank')}
          >
            <PlayCircle className="w-3 h-3 mr-1" /> ROLIK
          </button>

          {/* TO'G'RILANGAN QISM: Button ichiga olindi va padding qo'shildi */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setIsVisible(false);
            }}
            className="p-1 hover:bg-white/10 rounded-full transition-colors group"
            aria-label="Close banner"
          >
            <X className="w-5 h-5 text-gray-400 group-hover:text-white" />
          </button>
        </div>
      </div>

      {/* O'zbekiston bayrog'i chiziqlari */}
      <div className="h-[2px] w-full flex">
        <div className="w-1/3 bg-[#0099B5]" />
        <div className="w-1/3 bg-white" />
        <div className="w-1/3 bg-[#1EB53A]" />
      </div>
    </div>
  );
}
// --- 2. KIBER TERMINAL WIDGET ---
function CyberTerminal() {
  const commands = ["git commit -m 'secure'", "npm install knowledge", "decrypt --target:success", "sudo init", "python combat.py"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setIndex((p) => (p + 1) % commands.length), 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hidden lg:block absolute left-6 top-1/4 w-64 bg-white/90 dark:bg-black/70 border border-primary/20 p-4 font-mono text-[10px] backdrop-blur-md rounded-sm shadow-2xl z-20 transition-all duration-500 border-l-4 border-l-primary">
      <div className="flex gap-1.5 mb-3 border-b border-primary/10 pb-2">
        <div className="w-2 h-2 rounded-full bg-red-500/50" />
        <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
        <div className="w-2 h-2 rounded-full bg-primary/50" />
      </div>
      <div className="text-primary/70 mb-1">{`> guest@itca:~$`}</div>
      <div className="text-slate-800 dark:text-white animate-pulse">{`> ${commands[index]}`}</div>
      <div className="mt-4 text-[8px] text-slate-400 dark:text-gray-500 font-bold uppercase">System: Secure</div>
    </div>
  );
}

// --- 3. ASOSIY HEROSECTION ---
export function HeroSection() {
  const [typedText, setTypedText] = useState('');
  const [showDemoDialog, setShowDemoDialog] = useState(false);
  const fullText = 'IT CREATIVE: KELAJAK ASKARLARINI TABRIKLAYDI!';

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else clearInterval(timer);
    }, 60);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen font-mono selection:bg-primary selection:text-black transition-colors duration-500">
      <HolidayBanner />

      <section className="relative flex-grow flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-[#020502] py-20 transition-colors duration-500">

        {/* --- DASTURCHI FON ELEMENTLARI --- */}
        <div className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-30">
          <div className="absolute inset-0 flex justify-between px-10">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="animate-matrix-flow text-primary text-[10px]"
                style={{ animationDuration: `${12 + i}s`, animationDelay: `${i * 0.8}s` }}>
                {Array.from({ length: 40 }).map(() => "01").join("")}
              </div>
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 dark:via-primary/10 to-transparent h-40 w-full animate-scan-line" />
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(currentColor 0.8px, transparent 0.8px)', backgroundSize: '30px 30px' }}
            className="text-primary/20 dark:text-[#1a331a]" />
        </div>

        <CyberTerminal />

        {/* --- MARKAZIY KONTENT --- */}
        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection animation="fade-in-up" delay={200}>
            <Badge className="mb-8 px-6 py-2 bg-primary/10 dark:bg-green-950/50 text-primary border border-primary/40 rounded-none tracking-[0.4em] uppercase text-xs">
              <Code2 className="w-4 h-4 mr-2" />
              DevOps & Cyber Security Wing
            </Badge>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={400}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-[1.1] tracking-tighter italic">
              <span className="text-slate-900 dark:text-white drop-shadow-sm dark:drop-shadow-[0_0_35px_rgba(34,197,94,0.5)]">
                {typedText}
                <span className="animate-blink border-r-[6px] border-primary ml-2">&nbsp;</span>
              </span>
            </h1>
          </AnimatedSection>

          {/* --- BAYRAMONA ACHIEVEMENT KARTASI --- */}
          <AnimatedSection animation="zoom-in" delay={700}>
            <div className="max-w-4xl mx-auto my-12 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/40 to-blue-500/40 blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-white/80 dark:bg-black/80 border-2 border-primary/20 p-8 grid md:grid-cols-3 gap-6 items-center shadow-2xl backdrop-blur-sm transition-colors">

                <div className="flex flex-col items-center border-b md:border-b-0 md:border-r border-primary/10 pb-6 md:pb-0 md:pr-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 border border-primary/20">
                    <Medal className="w-8 h-8 text-primary animate-bounce" />
                  </div>
                  <h3 className="text-lg font-black text-slate-900 dark:text-white">COMMANDER</h3>
                  <p className="text-[10px] text-primary font-bold tracking-[0.2em]">IT_GRADE_01</p>
                </div>

                <div className="md:col-span-2 text-left">
                  <div className="flex items-center gap-2 mb-2 text-primary font-bold text-xs">
                    <Trophy className="w-4 h-4" />
                    <span>SYSTEM_ACHIEVEMENT_UNLOCKED</span>
                  </div>
                  <h2 className="text-2xl font-black mb-3 text-slate-900 dark:text-white leading-tight uppercase">
                    Vatan Himoyasi — Muqaddas Burch!
                  </h2>
                  <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed mb-4 font-sans font-medium">
                    Kiber-frontning mard o'g'lonlari! Sizning intellektual salohiyatingiz yurtimiz xavfsizligining qalqonidir. 14-yanvar bayrami muborak bo'lsin!
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["#Jasorat", "#Kiber_Kuch", "#G'alaba"].map(tag => (
                      <Badge key={tag} variant="outline" className="border-primary/30 text-primary text-[10px] rounded-none">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={900}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/courses">
                <Button size="lg" className="h-16 px-12 text-lg font-bold bg-primary hover:bg-slate-900 dark:hover:bg-white text-black hover:text-white dark:hover:text-black rounded-none shadow-[6px_6px_0px_0px_rgba(34,197,94,0.3)] transition-all active:translate-x-1 active:translate-y-1 active:shadow-none">
                  <UserCheck className="w-5 h-5 mr-2" /> SAFGA QO'SHILISH
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="h-16 px-12 text-lg font-bold border-2 border-primary text-primary bg-transparent hover:bg-primary/10 rounded-none transition-all"
                onClick={() => setShowDemoDialog(true)}>
                <PlayCircle className="w-5 h-5 mr-2" /> BRIIFINGNI KO'RISH
              </Button>
            </div>
          </AnimatedSection>

          {/* Statistika */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto border-t border-slate-200 dark:border-primary/20 pt-10 text-left">
            {[
              { label: "KURSANTLAR", val: "1024+", code: "KURSLAR" },
              { label: "UPTIME", val: "99.9%", code: "0x01" },
              { label: "DARAXT", val: "ROOT", code: "0x02" }
            ].map((stat, idx) => (
              <div key={idx} className="group cursor-crosshair">
                <div className="text-[10px] text-slate-400 dark:text-gray-500 mb-1 font-bold tracking-widest">{`KURSLAR`}</div>
                <div className="text-3xl md:text-5xl font-black text-primary font-mono tracking-tighter">{stat.val}</div>
                <div className="text-[10px] text-slate-500 dark:text-gray-400 mt-1 uppercase font-bold tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Dekorativ elementlar */}
        <div className="absolute top-10 left-10 text-slate-200 dark:text-primary/10 text-9xl font-black select-none pointer-events-none italic opacity-50 transition-colors">DEV</div>
        <div className="absolute bottom-10 right-10 text-slate-200 dark:text-primary/10 text-9xl font-black select-none pointer-events-none italic opacity-50 transition-colors">OPS</div>
        <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-5 hidden xl:block">
          <Crosshair className="w-96 h-96 text-primary animate-spin-slow" />
        </div>
      </section>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes matrix { 0% { transform: translateY(-100%); } 100% { transform: translateY(100vh); } }
        @keyframes scan { 0% { transform: translateY(-100%); } 100% { transform: translateY(100vh); } }
        .animate-matrix-flow { animation: matrix linear infinite; writing-mode: vertical-rl; }
        .animate-scan-line { animation: scan 8s linear infinite; }
        .animate-spin-slow { animation: spin 25s linear infinite; }
        .animate-blink { animation: blink 1s step-end infinite; }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
      `}} />

      <WatchDemoDialog open={showDemoDialog} onOpenChange={setShowDemoDialog} />
    </div>
  );
}