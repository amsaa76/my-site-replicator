import { Button } from "@/components/ui/button";
import heroDolphin from "@/assets/hero-dolphin-purple.png";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden min-h-screen flex items-center">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-gradient-to-bl from-accent/15 to-primary/15 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20 relative z-10">
        <div className="text-center lg:text-left">
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-6">
            🐬 Dolphin Solana مشروع
          </div>
          <h1 className="hero-title bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            مرحباً بك في مستقبل العملات الرقمية مع Dolphin
          </h1>
          <p className="hero-subtitle mt-6 text-lg leading-relaxed">
            انضم إلى ثورة Web3 مع مشروع Dolphin على شبكة Solana. 
            استكشف عالم NFTs و DAO والتداللامركزي بطريقة آمنة ومبتكرة.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
            <Button variant="hero" size="lg" className="px-8 py-3 text-lg">
              ابدأ الآن
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 text-lg border-primary/30 hover:border-primary">
              تعرف أكثر
            </Button>
          </div>
          
          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-6 text-center lg:text-left">
            <div>
              <div className="text-2xl font-bold text-primary">1M+</div>
              <div className="text-sm text-muted-foreground">المستخدمين</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">50K+</div>
              <div className="text-sm text-muted-foreground">NFTs</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">آمان</div>
            </div>
          </div>
        </div>
        <div className="relative">
          {/* Floating animation container */}
          <div className="relative animate-bounce-slow">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-2xl scale-110"></div>
            <img
              src={heroDolphin}
              alt="Dolphin mascot representing blockchain innovation"
              className="relative w-full max-w-lg mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              loading="eager"
            />
          </div>
          
          {/* Floating elements */}
          <div className="absolute top-10 right-10 w-16 h-16 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-12 h-12 bg-accent/20 rounded-full blur-lg animate-ping"></div>
        </div>
      </div>
      
      {/* Modern wave divider */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
        <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.1"/>
              <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.2"/>
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.1"/>
            </linearGradient>
          </defs>
          <path 
            fill="url(#waveGradient)" 
            d="M0,64L48,74.7C96,85,192,107,288,106.7C384,107,480,85,576,74.7C672,64,768,64,864,69.3C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" 
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
