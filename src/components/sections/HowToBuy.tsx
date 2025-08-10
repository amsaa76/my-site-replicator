import { Card } from "@/components/ui/card";

const HowToBuy = () => {
  const steps = [
    { title: "Create Wallet", desc: "Install a Solana wallet like Phantom and secure your seed phrase." },
    { title: "Fund Wallet", desc: "Buy SOL on an exchange and transfer it to your wallet." },
    { title: "Connect & Swap", desc: "Connect your wallet to a DEX and swap SOL for DOLPHIN." },
  ];

  return (
    <section id="how-to-buy" className="container py-16">
      <header className="mb-8">
        <h2 className="text-3xl font-bold">How to Buy</h2>
        <p className="hero-subtitle mt-2">Three simple steps to ride the wave.</p>
      </header>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((s, i) => (
          <Card key={s.title} className="p-6 glass-card">
            <div className="text-3xl font-extrabold text-primary">{i + 1}</div>
            <h3 className="mt-2 text-xl font-semibold">{s.title}</h3>
            <p className="mt-1 text-muted-foreground">{s.desc}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default HowToBuy;
