import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Contact Section */}
      <section
        id="contact"
        ref={sectionRef}
        className="relative w-full"
        style={{ background: '#111111', padding: '120px 0 80px' }}
      >
        <div ref={contentRef} className="max-w-[800px] mx-auto px-6 md:px-12 text-center">
          <span
            className="font-mono text-gold uppercase tracking-widest"
            style={{ fontSize: '0.65rem', letterSpacing: '0.25em' }}
          >
            GET IN TOUCH
          </span>

          <h2
            className="font-serif text-cream mt-5"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 400,
              lineHeight: 1.15,
            }}
          >
            Let's engineer something<br />together.
          </h2>

          <p
            className="font-sans text-cream/50 mt-6 mx-auto"
            style={{ fontSize: '0.85rem', lineHeight: 1.75, fontWeight: 300, maxWidth: '520px' }}
          >
            I'm currently based in Budapest, Hungary, and open to relocation. If you have a project
            in industrial automation, process equipment, or mechanical systems, I'd welcome the
            conversation.
          </p>

          {/* Email */}
          <a
            href="mailto:asjadak336@gmail.com"
            className="inline-block font-serif text-gold mt-10 hover:text-gold-light transition-colors duration-300"
            style={{
              fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
              textDecoration: 'none',
              letterSpacing: '0.02em',
            }}
          >
            asjadak336@gmail.com
          </a>

          {/* Divider */}
          <div
            className="mx-auto mt-8"
            style={{ width: '40px', height: '1px', background: '#C4956A' }}
          />

          {/* Social links */}
          <div className="flex items-center justify-center gap-8 mt-8">
            {[
              { label: 'LINKEDIN', href: 'https://linkedin.com/in/asjaddd' },
              { label: 'GRABCAD', href: 'https://grabcad.com/asjad-bukhari' },
              { label: 'EMAIL', href: 'mailto:asjadak336@gmail.com' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="font-mono text-cream/60 hover:text-gold transition-colors duration-300 uppercase tracking-widest"
                style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textDecoration: 'none' }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Phone & location */}
          <p
            className="font-mono text-cream/40 mt-8 uppercase tracking-wider"
            style={{ fontSize: '0.6rem', letterSpacing: '0.15em' }}
          >
            +36-703600869
          </p>
          <p
            className="font-mono text-cream/40 mt-2 uppercase tracking-wider"
            style={{ fontSize: '0.6rem', letterSpacing: '0.15em' }}
          >
            Budapest, Hungary — Open to relocation
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="w-full"
        style={{
          background: '#111111',
          borderTop: '1px solid rgba(196, 149, 106, 0.1)',
          padding: '32px 0',
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
              <span
                className="font-serif text-cream"
                style={{ fontSize: '1.1rem', fontWeight: 600, letterSpacing: '0.05em' }}
              >
                SAB
              </span>
              <span
                className="font-sans text-cream/40 hidden md:block"
                style={{ fontSize: '0.75rem', fontWeight: 300 }}
              >
                Mechanical Systems &amp; Process Equipment Engineering.
              </span>
            </div>

            <div className="flex items-center gap-6">
              {[
                { label: 'LINKEDIN', href: 'https://linkedin.com/in/asjaddd' },
                { label: 'GRABCAD', href: 'https://grabcad.com/asjad-bukhari' },
                { label: 'EMAIL', href: 'mailto:asjadak336@gmail.com' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="font-mono text-cream/50 hover:text-gold transition-colors duration-300 uppercase tracking-widest"
                  style={{ fontSize: '0.55rem', letterSpacing: '0.15em', textDecoration: 'none' }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div
            className="flex flex-col md:flex-row items-center justify-between mt-6 pt-4"
            style={{ borderTop: '1px solid rgba(196, 149, 106, 0.08)' }}
          >
            <span
              className="font-mono text-cream/30 uppercase tracking-wider"
              style={{ fontSize: '0.55rem', letterSpacing: '0.15em' }}
            >
              BUDAPEST, HU
            </span>
            <span
              className="font-mono text-cream/30 uppercase tracking-wider mt-1 md:mt-0"
              style={{ fontSize: '0.55rem', letterSpacing: '0.15em' }}
            >
              2025
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
