import { Button } from "@/components/ui/button";
import heroDolphin from "@/assets/hero-dolphin.png";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-16">
        <div>
          <h1 className="hero-title">
            Welcome to Dolphin Meme Tokens – The Future of Real World Utility Memes on Solana!
          </h1>
          <p className="hero-subtitle mt-4">
            Why just surf when you can ride the wave with Dolphin Meme Tokens, the pinnacle of meme
            coin evolution on Solana! Connect, trade, and shop with the freedom and fun only a true
            utility meme coin can offer.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button variant="hero" size="lg">Buy Now</Button>
            <a href="#whitepaper" className="inline-flex">
              <Button variant="outline" size="lg">Whitepaper</Button>
            </a>
          </div>
        </div>
        <div className="relative">
          <img
            src={heroDolphin}
            alt="Dolphin Meme Token hero illustration"
            className="w-full max-w-xl mx-auto drop-shadow-xl"
            loading="eager"
          />
        </div>
      </div>
      {/* Wave divider */}
      <svg className="absolute bottom-0 left-0 right-0" viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path fill="hsl(var(--secondary))" d="M0,64L48,74.7C96,85,192,107,288,106.7C384,107,480,85,576,74.7C672,64,768,64,864,69.3C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" />
      </svg>
    </section>
  );
};

export default Hero;
