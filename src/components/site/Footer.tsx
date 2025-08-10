const Footer = () => {
  return (
    <footer className="mt-16 border-t">
      <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <p>
          © {new Date().getFullYear()} Dolphin Meme Token • All rights reserved
        </p>
        <div className="flex items-center gap-4">
          <a href="#twitter" aria-label="Twitter" className="hover:text-primary">Twitter</a>
          <a href="#instagram" aria-label="Instagram" className="hover:text-primary">Instagram</a>
          <a href="#telegram" aria-label="Telegram" className="hover:text-primary">Telegram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
