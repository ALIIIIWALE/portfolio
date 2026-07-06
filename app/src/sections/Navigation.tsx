import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'ABOUT', href: '#about' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'CONTACT', href: '#contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(17, 17, 17, 0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(196, 149, 106, 0.08)' : '1px solid transparent',
        }}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between h-16 px-6 md:px-12">
          {/* Logo */}
          <a
            href="#hero"
            className="font-serif text-cream text-lg tracking-wider"
            style={{ fontWeight: 600, textDecoration: 'none' }}
          >
            SAB
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-xs tracking-widest text-cream/70 hover:text-gold transition-colors duration-300"
                style={{ textDecoration: 'none' }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Email Me button */}
          <a
            href="mailto:asjadak336@gmail.com"
            className="hidden md:block font-mono text-xs tracking-widest text-gold border border-gold/40 px-5 py-2 hover:bg-gold/10 hover:border-gold/60 transition-all duration-300"
            style={{ textDecoration: 'none' }}
          >
            EMAIL ME
          </a>

          {/* Hamburger button */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className="block w-5 h-px bg-cream transition-transform duration-300"
              style={{ transform: mobileOpen ? 'rotate(45deg) translate(2px, 2px)' : 'none' }}
            />
            <span
              className="block w-5 h-px bg-cream transition-opacity duration-300"
              style={{ opacity: mobileOpen ? 0 : 1 }}
            />
            <span
              className="block w-5 h-px bg-cream transition-transform duration-300"
              style={{ transform: mobileOpen ? 'rotate(-45deg) translate(2px, -2px)' : 'none' }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 md:hidden"
          style={{ background: 'rgba(17, 17, 17, 0.98)', backdropFilter: 'blur(20px)' }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-sm tracking-widest text-cream/80 hover:text-gold"
              style={{ textDecoration: 'none' }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:asjadak336@gmail.com"
            className="font-mono text-xs tracking-widest text-gold border border-gold/40 px-6 py-3 mt-4"
            style={{ textDecoration: 'none' }}
          >
            EMAIL ME
          </a>
        </div>
      )}
    </>
  );
}
