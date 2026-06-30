import type { ReactNode } from 'react';
import { useRef } from 'react';
import { DemoButton, TextLink } from '../components/Layout';
import { useCountUp } from '../hooks/useCountUp';
import { useScrollReveal } from '../hooks/useScrollReveal';

const challengeCards = [
  {
    title: 'Disparate tools & manual data entry',
    text: 'Project data lived across spreadsheets, email threads, and legacy systems with no single source of truth.',
  },
  {
    title: 'Fragmented communication',
    text: 'Vendors, designers, and procurement staff exchanged updates through disconnected channels that were hard to track.',
  },
  {
    title: 'Manual data entry & review',
    text: 'Teams re-keyed spec data and manually reconciled bid responses, adding hours of administrative work to every project.',
  },
  {
    title: 'Document chaos',
    text: 'Spec packages, revisions, and vendor submissions were scattered across shared drives with no version control.',
  },
];

const solutionRows = [
  {
    title: 'Single point of access',
    text: 'All project specs, bids, and vendor communications centralized in one platform accessible to the full team.',
    icon: (
      <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#E0A56B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 17H7A5 5 0 0 1 7 7h2" />
        <path d="M15 7h2a5 5 0 1 1 0 10h-2" />
        <line x1="8" x2="16" y1="12" y2="12" />
      </svg>
    ),
  },
  {
    title: 'Streamlined bid creation',
    text: 'Structured bid packages built directly from imported specs, ready to send to vendors in minutes.',
    icon: (
      <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#E0A56B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="12" x2="12" y1="18" y2="12" />
        <line x1="9" x2="15" y1="15" y2="15" />
      </svg>
    ),
  },
  {
    title: 'Automated data collection',
    text: 'Vendor responses captured in a standardized format, eliminating manual re-entry and comparison prep.',
    icon: (
      <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#E0A56B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" x2="12" y1="3" y2="15" />
      </svg>
    ),
  },
  {
    title: 'Real-time comparison & review',
    text: 'Side-by-side bid leveling gives procurement teams instant visibility into pricing across all vendors.',
    icon: (
      <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#E0A56B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" x2="18" y1="20" y2="10" />
        <line x1="12" x2="12" y1="20" y2="4" />
        <line x1="6" x2="6" y1="20" y2="14" />
      </svg>
    ),
  },
  {
    title: 'Established system controls',
    text: 'Role-based permissions and audit trails support state compliance requirements without slowing the team down.',
    icon: (
      <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#E0A56B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

const keyOutcomes = [
  'Reduced administrative burden on procurement staff',
  'Faster submittal-to-award turnaround on FF&E packages',
  'Pricing transparency and auditability across all bids',
  'Centralized price leveling and vendor comparison',
  'System controls aligned with state compliance requirements',
];

const staggerDelays = ['', 'rd1', 'rd2', 'rd3', 'rd4', 'rd5'];

export default function CaseStudyPage() {
  useScrollReveal();

  return (
    <>
      <section
        className="pt-12 pb-8 px-6 lg:px-12"
        style={{ background: '#0B0B0D', borderTop: '1px solid var(--border)' }}
      >
        <div className="max-w-[820px] mx-auto reveal">
          <TextLink to="/" className="mb-8">
            ← Back to home
          </TextLink>
          <p className="type-eyebrow mb-4">
            Case Study
          </p>
          <h1 className="type-page-headline mb-5 text-balance">
            Statewide public university system streamlines FF&amp;E bidding with Notch
          </h1>
          <p className="type-lead">
            How a Texas higher-ed system replaced fragmented tools with a single procurement platform and cut bid processing time by 75%.
          </p>
        </div>
      </section>

      <ContentSection title="Overview">
        <p>
          A statewide public university system in Texas manages FF&E procurement across dozens of campus projects each year.
          With high project volume and strict compliance requirements, the interiors team needed a platform that could keep pace
          without adding administrative overhead.
        </p>
        <p className="mt-4">
          After years of relying on disconnected legacy tools, the team turned to Notch to centralize their bidding workflow
          from spec import through vendor comparison and award.
        </p>
      </ContentSection>

      <ContentSection title="The Challenge" alt>
        <p className="mb-8">
          The team&apos;s existing workflow created friction at every stage of the bid process, slowing turnaround and increasing
          the risk of errors on high-stakes projects.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
          {challengeCards.map((card) => (
            <article
              key={card.title}
              className="p-6 rounded-2xl h-full"
              style={{
                background: 'rgba(130, 145, 165, 0.06)',
                border: '1px solid rgba(130, 145, 165, 0.14)',
              }}
            >
              <h3 className="type-section-heading mb-2" style={{ fontSize: '20px', lineHeight: 1.2 }}>
                {card.title}
              </h3>
              <p className="type-body">
                {card.text}
              </p>
            </article>
          ))}
        </div>
      </ContentSection>

      <ContentSection title="The Solution">
        <p className="mb-8">
          Notch gave the team a single platform for the full bid lifecycle, replacing the patchwork of spreadsheets, email,
          and legacy tools they had relied on.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {solutionRows.slice(0, 4).map((row) => (
            <SolutionCard key={row.title} {...row} />
          ))}
          <SolutionCard {...solutionRows[4]} className="md:col-span-2" />
        </div>
      </ContentSection>

      <CombinedResultsSection />

      <section
        className="py-20 px-6 lg:px-12 text-center"
        style={{ background: '#0B0B0D', borderTop: '1px solid var(--border)' }}
      >
        <h2 className="type-cta-heading reveal mb-0">
          See what Notch can do for your team
        </h2>
        <div className="section-accent-rule mx-auto mb-8" aria-hidden="true" />
        <DemoButton className="reveal" />
      </section>
    </>
  );
}

function CombinedResultsSection() {
  const resultsRef = useRef<HTMLElement>(null);
  const percentCount = useCountUp(75, { suffix: '%', triggerRef: resultsRef });
  const hoursCount = useCountUp(60, { suffix: '+', triggerRef: resultsRef });

  return (
    <section
      ref={resultsRef}
      className="py-20 px-6 lg:px-12"
      style={{
        background: 'radial-gradient(130% 85% at 50% 0%, rgba(224,165,107,.11), #0B0B0D 56%)',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div className="max-w-[820px] mx-auto">
        <p className="type-eyebrow mb-4">
          Results
        </p>

        <p className="type-display-sentence mb-10 max-w-[680px]" style={{ fontSize: 'clamp(24px, 3vw, 32px)' }}>
          After adopting Notch, the team reported a{' '}
          <span style={{ color: 'var(--accent)' }}>{percentCount.display}</span> reduction in FF&amp;E bid
          processing time and an estimated{' '}
          <span style={{ color: 'var(--accent)' }}>{hoursCount.display}</span> hours saved on large
          projects, freeing staff to focus on vendor relationships and project delivery.
        </p>

        <blockquote
          className="quote-reveal rounded-2xl p-8 md:p-10 text-left md:text-center mb-12"
          style={{
            border: '1px solid rgba(224,165,107,.25)',
            background: 'rgba(224,165,107,.05)',
          }}
        >
          <p className="type-body mb-5" style={{ fontSize: '18.5px', lineHeight: 1.55, color: 'var(--section-heading)' }}>
            &ldquo;Notch transformed the way we manage FF&amp;E bidding&hellip; a single source of truth for our bids. Intuitive for both our team and our vendors, and it has saved us countless hours.&rdquo;
          </p>
          <cite className="type-body not-italic" style={{ color: 'var(--text-muted)' }}>
            Interiors Project Manager, Statewide Public University System
          </cite>
        </blockquote>

        <p className="type-eyebrow mb-4">
          What Changed
        </p>
        <div className="section-accent-rule mb-6" aria-hidden="true" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {keyOutcomes.map((outcome, i) => (
            <article
              key={outcome}
              className={`reveal-stagger ${staggerDelays[i + 1]} p-5 rounded-2xl flex items-start gap-3 ${i === 4 ? 'md:col-span-2' : ''}`}
              style={{
                background: 'rgba(255,255,255,.04)',
                border: '1px solid rgba(255,255,255,.08)',
              }}
            >
              <span
                className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-semibold"
                style={{ background: 'rgba(224,165,107,.18)', color: 'var(--accent)' }}
                aria-hidden="true"
              >
                ✓
              </span>
              <span className="type-body">
                {outcome}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionCard({
  icon,
  title,
  text,
  className = '',
}: {
  icon: ReactNode;
  title: string;
  text: string;
  className?: string;
}) {
  return (
    <article
      className={`p-6 md:p-8 rounded-2xl h-full ${className}`}
      style={{
        background: 'rgba(255,255,255,.03)',
        border: '1px solid rgba(255,255,255,.08)',
      }}
    >
      <div
        className="w-14 h-14 rounded-[14px] flex items-center justify-center mb-4"
        style={{
          background: 'rgba(224,165,107,.1)',
          border: '1px solid rgba(224,165,107,.2)',
        }}
      >
        {icon}
      </div>
      <h3 className="type-section-heading mb-2" style={{ fontSize: '20px', lineHeight: 1.2 }}>
        {title}
      </h3>
      <p className="type-body">
        {text}
      </p>
    </article>
  );
}

function ContentSection({
  title,
  children,
  alt = false,
}: {
  title: string;
  children: ReactNode;
  alt?: boolean;
}) {
  return (
    <section
      className="py-16 px-6 lg:px-12 reveal"
      style={{
        background: alt ? '#0E0E11' : '#0B0B0D',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div className="max-w-[820px] mx-auto">
        <h2 className="type-section-heading text-left mb-0">
          {title}
        </h2>
        <div className="section-accent-rule" aria-hidden="true" />
        <div className="type-body">
          {children}
        </div>
      </div>
    </section>
  );
}
