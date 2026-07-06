import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  title: string;
  subtitle: string;
  description: string;
  tools: string[];
  achievements: string[];
}

const PROJECTS: Project[] = [
  {
    title: 'AUTOMATED ELECTROSPINNING SYSTEM',
    subtitle: 'BME UNIVERSITY — THESIS PROJECT',
    description:
      'Engineered a functional mechanical prototype from initial concept to completion for an automated electrospinning system. Conducted precise calculations for fluid delivery and material morphologic properties. Performed cost evaluations, reliability testing, and calibration to align system performance. Authored all technical manuals and documentation required for prototype deployment and user onboarding.',
    tools: ['SOLIDWORKS', 'DATA ANALYSIS', 'TECHNICAL MODELING', 'PROTOTYPING'],
    achievements: [
      'Full mechanical prototype from concept to completion',
      'Fluid delivery calculations & material property analysis',
      'Cost evaluation & reliability testing',
      'Complete technical documentation suite',
    ],
  },
  {
    title: 'HIGH-VOLUME PRODUCTION LINE OPTIMIZATION',
    subtitle: 'SK ON HUNGARY — IVÁNCSA',
    description:
      'Manage technical inquiries and perform rigorous system behavior analyses on high-volume production lines to optimize equipment delivery, assembly uptime, and layout performance. Partner with global engineering teams on commissioning and layout modifications to meet customer specifications.',
    tools: ['ORACLE DB', 'PROCESS OPTIMIZATION', 'COMMISSIONING', 'LAYOUT DESIGN'],
    achievements: [
      'System behavior analysis on high-volume lines',
      'Equipment delivery & assembly uptime optimization',
      'Global engineering coordination for commissioning',
      'Material flow mapping & process solutions',
    ],
  },
  {
    title: 'OPERATIONAL ERROR REDUCTION INITIATIVE',
    subtitle: 'DUNA NETWORKS / SAMSUNG SDI — GÖD',
    description:
      'Led a data-driven initiative that reduced operational errors by 20% through rigorous Root Cause Analysis. Refined technical documentation for client review and coordinated cross-functional teams including field operations, suppliers, and engineering to align equipment with project specifications.',
    tools: ['ROOT CAUSE ANALYSIS', 'TECHNICAL DOCS', 'CROSS-FUNCTIONAL', 'DATA-DRIVEN'],
    achievements: [
      '20% reduction in operational errors via RCA',
      'End-to-end system acceptance coordination',
      'Field team & supplier alignment',
      'Client-facing technical documentation',
    ],
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const entriesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      entriesRef.current.forEach((entry) => {
        if (!entry) return;
        gsap.from(entry, {
          y: 50,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: entry,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative w-full"
      style={{ background: '#F0EBE3', padding: '120px 0' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Header */}
        <span
          className="font-mono uppercase tracking-widest"
          style={{ fontSize: '0.65rem', letterSpacing: '0.25em', color: '#C4956A' }}
        >
          KEY PROJECTS
        </span>
        <h2
          className="mt-3 mb-20"
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 400,
            color: '#1a1a1a',
            lineHeight: 1.05,
          }}
        >
          WORK &amp; RESEARCH
        </h2>

        {/* Project entries */}
        <div className="flex flex-col" style={{ gap: '80px' }}>
          {PROJECTS.map((project, idx) => (
            <div
              key={idx}
              ref={(el) => { if (el) entriesRef.current[idx] = el; }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                {/* Left: project info */}
                <div>
                  <h3
                    className="font-mono uppercase tracking-wider"
                    style={{
                      fontSize: '0.8rem',
                      letterSpacing: '0.12em',
                      color: '#1a1a1a',
                      fontWeight: 500,
                      lineHeight: 1.4,
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="font-mono uppercase tracking-wider mt-2"
                    style={{
                      fontSize: '0.6rem',
                      letterSpacing: '0.15em',
                      color: '#C4956A',
                    }}
                  >
                    {project.subtitle}
                  </p>
                  <p
                    className="font-sans mt-5"
                    style={{
                      fontSize: '0.85rem',
                      lineHeight: 1.75,
                      color: '#6a6a6a',
                      fontWeight: 300,
                    }}
                  >
                    {project.description}
                  </p>
                  {/* Tool tags */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="font-mono uppercase tracking-wider"
                        style={{
                          fontSize: '0.55rem',
                          letterSpacing: '0.1em',
                          color: '#C4956A',
                          padding: '4px 10px',
                          border: '1px solid rgba(196, 149, 106, 0.3)',
                        }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: key achievements */}
                <div>
                  <span
                    className="font-mono uppercase tracking-widest"
                    style={{
                      fontSize: '0.6rem',
                      letterSpacing: '0.2em',
                      color: '#8a8a8a',
                    }}
                  >
                    KEY ACHIEVEMENTS
                  </span>
                  <ul className="flex flex-col gap-4 mt-5">
                    {project.achievements.map((achievement, aidx) => (
                      <li
                        key={aidx}
                        className="font-sans flex gap-3"
                        style={{
                          fontSize: '0.8rem',
                          lineHeight: 1.6,
                          color: '#4a4a4a',
                          fontWeight: 400,
                        }}
                      >
                        <span style={{ color: '#C4956A', fontWeight: 300 }}>+</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Divider between projects */}
              {idx < PROJECTS.length - 1 && (
                <div
                  className="mt-16"
                  style={{ height: '1px', background: 'rgba(26, 26, 26, 0.1)' }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
