const Roadmap = () => {
  const phases = [
    { phase: "Phase 1", items: ["Launch website & socials", "Initial token distribution", "Community airdrops"] },
    { phase: "Phase 2", items: ["DEX listings", "Partnerships", "Marketing push"] },
    { phase: "Phase 3", items: ["CEX outreach", "Utility integrations", "Merch & events"] },
  ];

  return (
    <section id="roadmap" className="container py-16">
      <header className="mb-8">
        <h2 className="text-3xl font-bold">Roadmap</h2>
        <p className="hero-subtitle mt-2">Milestones to grow the pod.</p>
      </header>
      <div className="grid gap-6 md:grid-cols-3">
        {phases.map((p) => (
          <div key={p.phase} className="glass-card p-6">
            <h3 className="text-xl font-semibold text-primary">{p.phase}</h3>
            <ul className="mt-3 list-disc list-inside text-sm text-muted-foreground space-y-1">
              {p.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Roadmap;
