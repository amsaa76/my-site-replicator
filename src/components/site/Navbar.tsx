const Navbar = () => {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#how-to-buy", label: "How To Buy" },
    { href: "#tokenomics", label: "Tokenomics" },
    { href: "#roadmap", label: "Roadmap" },
  ];
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <nav className="container flex items-center justify-between h-16">
        <a href="#home" className="font-extrabold text-xl">Dolphin</a>
        <ul className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <li key={l.href}><a href={l.href} className="hover:text-primary transition-colors">{l.label}</a></li>
          ))}
        </ul>
        <a href="#how-to-buy" className="md:inline-block hidden text-sm font-medium text-primary hover:underline">Get Started</a>
      </nav>
    </header>
  );
};

export default Navbar;
