import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { value: 'B.Sc.', label: 'MECH. ENGINEERING' },
  { value: '2+', label: 'YEARS EXPERIENCE' },
  { value: '5', label: 'LANGUAGES' },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        x: -40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      });

      gsap.from(imageRef.current, {
        x: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      });

      gsap.from(statsRef.current?.querySelectorAll('.stat-item') || [], {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full"
      style={{ background: '#111111', padding: '120px 0' }}
    >
      {/* Subtle decorative element - gear watermark */}
      <div
        className="absolute top-20 right-0 pointer-events-none select-none hidden lg:block"
        style={{ opacity: 0.02, fontSize: '500px', fontFamily: 'serif', color: '#C4956A', lineHeight: 1 }}
      >
        S
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-4">
          <span
            className="font-mono text-gold uppercase tracking-widest"
            style={{ fontSize: '0.65rem', letterSpacing: '0.25em' }}
          >
            ABOUT
          </span>
        </div>
        <h2
          className="font-serif text-cream mb-16"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 400, lineHeight: 1.15 }}
        >
          Engineering systems that move<br className="hidden md:block" /> industry forward.
        </h2>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Text column */}
          <div ref={textRef}>
            <p
              className="text-cream/60 font-sans leading-relaxed"
              style={{ fontSize: '0.9rem', lineHeight: 1.8, fontWeight: 300 }}
            >
              I'm a Project Engineer based in Budapest, Hungary, specializing in Mechanical Systems
              &amp; Process Equipment. With a B.Sc. in Mechanical Engineering from Budapest
              University of Technology and Economics (BME), I work at the intersection of industrial
              automation, process design, and precision engineering. Currently driving automation
              systems at SK On Hungary's high-volume manufacturing facility. Open to opportunities
              across Europe. Fluent in English, German A2, and native Urdu speaker.
            </p>
          </div>

          {/* Image column */}
          <div ref={imageRef} className="flex justify-center lg:justify-end">
            <div
              className="relative overflow-hidden"
              style={{ width: '100%', maxWidth: '420px', aspectRatio: '4/3' }}
            >
              <img
                src="/images/hero-portrait.jpg"
                alt="Syed Asjad Ali Bukhari"
                className="w-full h-full object-cover object-top"
                style={{ filter: 'brightness(0.85) contrast(1.05)' }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to top, rgba(17,17,17,0.4) 0%, transparent 40%)',
                }}
              />
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div
          ref={statsRef}
          className="grid grid-cols-3 gap-8 mt-20 pt-12"
          style={{ borderTop: '1px solid rgba(196, 149, 106, 0.15)' }}
        >
          {STATS.map((stat, i) => (
            <div key={i} className="stat-item">
              <div
                className="font-serif text-gold"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 400, lineHeight: 1 }}
              >
                {stat.value}
              </div>
              <div
                className="font-mono text-cream/50 mt-2 uppercase"
                style={{ fontSize: '0.6rem', letterSpacing: '0.15em' }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
