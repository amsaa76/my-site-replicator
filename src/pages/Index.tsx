import { useEffect } from "react";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import HowToBuy from "@/components/sections/HowToBuy";
import Tokenomics from "@/components/sections/Tokenomics";
import Roadmap from "@/components/sections/Roadmap";
import Footer from "@/components/site/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "Dolphin Meme Token – Solana Utility Meme";
  }, []);

  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowToBuy />
        <Tokenomics />
        <Roadmap />
      </main>
      <Footer />
      {/* SEO structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Dolphin Meme Token",
          url: "/",
          sameAs: ["https://x.com/", "https://instagram.com/", "https://t.me/"]
        })
      }} />
    </div>
  );
};

export default Index;
