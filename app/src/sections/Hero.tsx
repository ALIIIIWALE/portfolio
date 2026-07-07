import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const [videoKey, setVideoKey] = useState(0); // State to force video reset when it ends
  const sectionRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      tl.from(nameRef.current?.querySelectorAll('.name-line') || [], {
        y: 80,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power3.out',
      })
        .from(subtitleRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
        }, '-=0.4')
        .from(taglineRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
        }, '-=0.5')
        .from(scrollRef.current, {
          opacity: 0,
          duration: 1,
          ease: 'power2.out',
        }, '-=0.3');
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ height: '100vh', minHeight: '600px' }}
    >
      {/* Video background */}
      <video
        key={videoKey} // Resets element on change
        autoPlay
        muted
        loop
        playsInline
        onEnded={() => setVideoKey(prev => prev + 1)} // Clears the browser memory buffer
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 1 }}
      >
        <source src="/videos/gear-video.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 2,
          background: 'linear-gradient(to bottom, rgba(17,17,17,0.7) 0%, rgba(17,17,17,0.85) 60%, rgba(17,17,17,0.95) 100%)',
        }}
      />

      {/* Content */}
      <div
        className="relative flex flex-col justify-center h-full px-6 md:px-12 lg:px-20"
        style={{ zIndex: 3, maxWidth: '1400px', margin: '0 auto' }}
      >
        <div ref={nameRef}>
          {['SYED', 'ASJAD', 'ALI', 'BUKHARI'].map((word, i) => (
            <div
              key={word}
              className="name-line font-serif text-cream leading-none"
              style={{
                fontSize: 'clamp(3.5rem, 10vw, 9rem)',
                fontWeight: 400,
                letterSpacing: '-0.02em',
                marginLeft: i === 3 ? '0' : undefined,
              }}
            >
              {word}
            </div>
          ))}
        </div>

        <div ref={subtitleRef} className="mt-8 md:mt-10">
          <div className="w-12 h-px bg-gold/60 mb-5" />
          <p
            className="font-mono text-cream/80 tracking-widest uppercase"
            style={{ fontSize: '0.7rem', letterSpacing: '0.2em' }}
          >
            Project Engineer — Mechanical Systems &amp; Process Equipment
          </p>
        </div>

        <p
          ref={taglineRef}
          className="font-sans text-cream/50 mt-4 max-w-md"
          style={{ fontSize: '0.85rem', lineHeight: 1.6, fontWeight: 300 }}
        >
          Industrial automation. Process equipment. Precision engineering.
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        style={{ zIndex: 3 }}
      >
        <div className="w-px h-10 bg-gradient-to-b from-transparent via-gold/50 to-gold" />
        <span
          className="font-mono text-gold/70 uppercase tracking-widest"
          style={{ fontSize: '0.6rem', letterSpacing: '0.25em' }}
        >
          SCROLL
        </span>
      </div>
    </section>
  );
}
