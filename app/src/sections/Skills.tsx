import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SkillCategory {
  title: string;
  items: string[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'PROJECT MANAGEMENT',
    items: [
      'End-to-End Lifecycle',
      'Stakeholder Coordination',
      'Supplier Communications',
      'Cost Estimations',
      'Technical Proposals',
      'Progress Tracking',
      'Customer Acceptance',
    ],
  },
  {
    title: 'MECHANICAL DESIGN',
    items: [
      'Industrial Process Equipment',
      'Material Flow Planning',
      '3D Layout Implementation',
      'Steel Structures',
      'Technical Drawing Interpretation',
      'Plant Design',
    ],
  },
  {
    title: 'ENGINEERING SOFTWARE',
    items: [
      'SOLIDWORKS (Advanced)',
      'Autodesk Inventor',
      'AutoCAD',
      '3D CAD Systems',
      'Oracle DB',
      'Technical Calculations',
    ],
  },
  {
    title: 'TESTING & IMPROVEMENT',
    items: [
      'Assembly Optimization',
      'Factory Commissioning',
      'Root Cause Analysis (RCA)',
      'Technical Documentation',
      'Cross-Functional Alignment',
      'System Behavior Analysis',
    ],
  },
];

const CERTIFICATIONS = [
  'Advanced SOLIDWORKS',
  'Autodesk Inventor',
  'AutoCAD',
  'Root Cause Analysis (RCA)',
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.from(card, {
          y: 30,
          opacity: 0,
          duration: 0.7,
          delay: i * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative w-full"
      style={{ background: '#111111', padding: '120px 0' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Header */}
        <span
          className="font-mono text-gold uppercase tracking-widest"
          style={{ fontSize: '0.65rem', letterSpacing: '0.25em' }}
        >
          CAPABILITIES
        </span>
        <h2
          className="font-serif text-cream mt-3"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 400, lineHeight: 1.1 }}
        >
          SKILLS
        </h2>
        <p
          className="font-sans text-cream/50 mt-5 max-w-2xl"
          style={{ fontSize: '0.9rem', lineHeight: 1.7, fontWeight: 300 }}
        >
          From 3D CAD modeling to factory floor commissioning — a toolkit refined through hands-on
          industrial manufacturing and academic rigor at BME.
        </p>

        {/* Certifications */}
        <div className="mt-10 mb-14">
          <span
            className="font-mono text-cream/40 uppercase tracking-widest"
            style={{ fontSize: '0.6rem', letterSpacing: '0.2em' }}
          >
            CERTIFICATIONS
          </span>
          <div className="flex flex-wrap gap-3 mt-4">
            {CERTIFICATIONS.map((cert) => (
              <span
                key={cert}
                className="font-mono text-gold border border-gold/25 px-4 py-2 uppercase tracking-wider"
                style={{ fontSize: '0.65rem', letterSpacing: '0.1em' }}
              >
                {cert}
              </span>
            ))}
          </div>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {SKILL_CATEGORIES.map((category, idx) => (
            <div
              key={idx}
              ref={(el) => { if (el) cardsRef.current[idx] = el; }}
            >
              <h3
                className="font-mono text-cream uppercase tracking-wider"
                style={{ fontSize: '0.65rem', letterSpacing: '0.15em', fontWeight: 500 }}
              >
                {category.title}
              </h3>
              <div
                className="my-4"
                style={{ height: '1px', background: 'rgba(196, 149, 106, 0.2)' }}
              />
              <ul className="flex flex-col gap-2">
                {category.items.map((item, iidx) => (
                  <li
                    key={iidx}
                    className="font-sans text-cream/60"
                    style={{ fontSize: '0.8rem', lineHeight: 1.6, fontWeight: 300 }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
