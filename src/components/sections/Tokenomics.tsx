import { Card } from "@/components/ui/card";

const Tokenomics = () => {
  const data = [
    { title: "Total Supply", value: "1,000,000,000 DOLPHIN" },
    { title: "Liquidity", value: "50%" },
    { title: "Marketing", value: "20%" },
    { title: "Ecosystem & Rewards", value: "20%" },
    { title: "Team", value: "10% (Vested)" },
  ];

  return (
    <section id="tokenomics" className="container py-16">
      <header className="mb-8">
        <h2 className="text-3xl font-bold">Tokenomics</h2>
        <p className="hero-subtitle mt-2">A transparent breakdown for long-term growth.</p>
      </header>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <Card key={item.title} className="p-6 glass-card">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-2xl font-bold text-primary">{item.value}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Tokenomics;
