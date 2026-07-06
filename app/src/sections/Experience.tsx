import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface JobEntry {
  dateRange: string;
  title: string;
  company: string;
  points: string[];
}

const JOBS: JobEntry[] = [
  {
    dateRange: 'MAY 2025 — PRESENT',
    title: 'AUTOMATION SYSTEMS & SUPPORT ENGINEER',
    company: 'SK ON HUNGARY — IVÁNCSA, HUNGARY',
    points: [
      'Manage technical inquiries and analyze complex system behaviors on high-volume production lines to optimize equipment delivery and assembly uptime.',
      'Coordinate directly with cross-functional stakeholders and engineering teams to expedite troubleshooting and preserve strict design standards.',
      'Partner with global engineering departments on equipment commissioning and layout modifications to satisfy specific customer requirements.',
      'Utilize Oracle DB queries and technical documentation tracking systems to monitor material flow and map automated process solutions from concept to execution.'
    ],
  },
  {
    dateRange: 'AUG 2024 — APR 2025',
    title: 'TECHNICAL SUPPORT ENGINEER',
    company: 'DUNA NETWORKS (SAMSUNG SDI HU) — GÖD, HUNGARY',
    points: [
      'Tracked tight project timelines and eliminated engineering bottlenecks for complex electro-mechanical manufacturing setups.',
      'Reduced operational errors by 20% through data-driven Root Cause Analysis (RCA) and updated technical documentation for client review.',
      'Communicated across internal product groups and external technical teams to secure end-to-end system acceptance and peak operational readiness.',
      'Coordinated field deployments, suppliers, and engineering teams to systematically align heavy equipment with project specifications.'
    ],
  },
  {
    dateRange: '2020 — 2024',
    title: 'B.SC. MECHANICAL ENGINEERING',
    company: 'BUDAPEST UNIVERSITY OF TECHNOLOGY & ECONOMICS (BME)',
    points: [
      'Specialized in the Department of Machine and Product Design with a core focus on robust engineering structures, industrial automation, and manufacturing workflows.',
      'Key Project (Automated Electrospinning System Design): Engineered a functional mechanical prototype from initial concept to completion.',
      'Conducted precise fluid delivery calculations and analyzed material morphologic properties to validate prototype functionality.'
    ],
  },
];

export default function Experience() {
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
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative w-full"
      style={{ background: '#F0EBE3', padding: '120px 0' }}
    >
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        {/* Section label */}
        <span
          className="font-mono uppercase tracking-widest"
          style={{ fontSize: '0.65rem', letterSpacing: '0.25em', color: '#C4956A' }}
        >
          CAREER
        </span>
        <h2
          className="mt-3 mb-16"
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 400,
            color: '#1a1a1a',
            lineHeight: 1.1,
          }}
        >
          WHERE I'VE BEEN
        </h2>

        {/* Timeline entries */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-0 top-0 bottom-0 hidden md:block"
            style={{
              width: '1px',
              background: 'linear-gradient(to bottom, #C4956A 0%, rgba(196,149,106,0.1) 100%)',
            }}
          />

          <div className="flex flex-col" style={{ gap: '64px' }}>
            {JOBS.map((job, idx) => (
              <div
                key={idx}
                ref={(el) => { if (el) entriesRef.current[idx] = el; }}
                className="relative md:pl-10"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-0 top-2 hidden md:block"
                  style={{
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    background: '#C4956A',
                    transform: 'translateX(-3px)',
                  }}
                />

                <span
                  className="font-mono uppercase tracking-widest"
                  style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: '#8a8a8a' }}
                >
                  {job.dateRange}
                </span>

                <h3
                  className="mt-3 font-mono uppercase tracking-wider"
                  style={{
                    fontSize: '0.85rem',
                    letterSpacing: '0.12em',
                    color: '#1a1a1a',
                    fontWeight: 500,
                  }}
                >
                  {job.title}
                </h3>

                <p
                  className="mt-2 font-mono uppercase tracking-wider"
                  style={{
                    fontSize: '0.65rem',
                    letterSpacing: '0.15em',
                    color: '#C4956A',
                  }}
                >
                  {job.company}
                </p>

                {/* Bulleted Points List */}
                <ul
                  className="mt-4 font-sans list-disc pl-4"
                  style={{
                    fontSize: '0.85rem',
                    lineHeight: 1.75,
                    color: '#6a6a6a',
                    fontWeight: 300,
                    maxWidth: '650px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px'
                  }}
                >
                  {job.points.map((point, pIdx) => (
                    <li key={pIdx} className="pl-1">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
