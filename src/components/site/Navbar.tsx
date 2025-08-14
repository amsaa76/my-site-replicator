const Navbar = () => {
  const links = [
    { href: "#home", label: "الرئيسية" },
    { href: "#features", label: "المميزات" },
    { href: "#how-to-buy", label: "كيفية الشراء" },
    { href: "#tokenomics", label: "التوكينوميكس" },
    { href: "#roadmap", label: "خارطة الطريق" },
  ];
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/10">
      <nav className="container flex items-center justify-between h-16">
        <a href="#home" className="font-extrabold text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          🐬 Dolphin
        </a>
        <ul className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <li key={l.href}><a href={l.href} className="hover:text-primary transition-colors">{l.label}</a></li>
          ))}
        </ul>
        <a href="#how-to-buy" className="md:inline-block hidden text-sm font-medium px-4 py-2 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors">
          ابدأ الآن
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
