import type { ReactNode } from 'react';
import { Link } from 'react-router';
import { DemoButton } from '../components/Layout';
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
  },
  {
    title: 'Streamlined bid creation',
    text: 'Structured bid packages built directly from imported specs, ready to send to vendors in minutes.',
  },
  {
    title: 'Automated data collection',
    text: 'Vendor responses captured in a standardized format, eliminating manual re-entry and comparison prep.',
  },
  {
    title: 'Real-time comparison & review',
    text: 'Side-by-side bid leveling gives procurement teams instant visibility into pricing across all vendors.',
  },
  {
    title: 'Established system controls',
    text: 'Role-based permissions and audit trails support state compliance requirements without slowing the team down.',
  },
];

const keyOutcomes = [
  'Reduced administrative burden on procurement staff',
  'Faster submittal-to-award turnaround on FF&E packages',
  'Pricing transparency and auditability across all bids',
  'Centralized price leveling and vendor comparison',
  'System controls aligned with state compliance requirements',
];

export default function CaseStudyPage() {
  useScrollReveal();

  return (
    <>
      <section
        className="pt-12 pb-16 px-6 lg:px-12"
        style={{ background: '#0B0B0D', borderTop: '1px solid var(--border)' }}
      >
        <div className="max-w-[820px] mx-auto reveal">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[15px] no-underline mb-8 transition-colors duration-200"
            style={{ color: 'var(--text-muted)' }}
            onMouseOver={(e) => { e.currentTarget.style.color = 'var(--accent)'; }}
            onMouseOut={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; }}
          >
            ← Back to home
          </Link>
          <p
            className="uppercase tracking-[0.1em] text-[0.75rem] font-semibold mb-4"
            style={{ color: 'var(--accent)' }}
          >
            Case Study
          </p>
          <h1
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
              color: 'var(--headline)',
              marginBottom: '1.25rem',
            }}
          >
            Statewide public university system streamlines FF&amp;E bidding with Notch
          </h1>
          <p
            style={{
              fontFamily: 'var(--sans)',
              fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
              lineHeight: 1.65,
              color: 'var(--text-muted)',
            }}
          >
            How a Texas higher-ed system replaced fragmented tools with a single procurement platform and cut bid processing time by 75%.
          </p>
        </div>
      </section>

      <section
        className="py-12 px-6 lg:px-12"
        style={{ background: '#0E0E11', borderTop: '1px solid var(--border)' }}
      >
        <div className="max-w-[820px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 reveal">
          <StatCell value="75%" label="reduction in FF&E bid processing time" />
          <StatCell value="60+" label="hours saved on large projects (estimated)" />
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

      <ContentSection title="The Challenge">
        <p className="mb-8">
          The team&apos;s existing workflow created friction at every stage of the bid process, slowing turnaround and increasing
          the risk of errors on high-stakes projects.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {challengeCards.map((card) => (
            <article
              key={card.title}
              className="p-6 rounded-2xl"
              style={{
                background: 'rgba(255,255,255,.03)',
                border: '1px solid rgba(255,255,255,.08)',
              }}
            >
              <h3
                className="mb-2"
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: '1.125rem',
                  color: 'var(--headline)',
                }}
              >
                {card.title}
              </h3>
              <p style={{ fontFamily: 'var(--sans)', fontSize: '0.9375rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                {card.text}
              </p>
            </article>
          ))}
        </div>
      </ContentSection>

      <ContentSection title="The Solution" alt>
        <p className="mb-8">
          Notch gave the team a single platform for the full bid lifecycle, replacing the patchwork of spreadsheets, email,
          and legacy tools they had relied on.
        </p>
        <div className="flex flex-col gap-0">
          {solutionRows.map((row, index) => (
            <article
              key={row.title}
              className="py-6 grid grid-cols-1 md:grid-cols-[240px_1fr] gap-3 md:gap-8"
              style={{
                borderTop: index === 0 ? '1px solid var(--border)' : undefined,
                borderBottom: '1px solid var(--border)',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: '1.125rem',
                  color: 'var(--headline)',
                }}
              >
                {row.title}
              </h3>
              <p style={{ fontFamily: 'var(--sans)', fontSize: '0.9375rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                {row.text}
              </p>
            </article>
          ))}
        </div>
      </ContentSection>

      <ContentSection title="Results">
        <p className="mb-8">
          After adopting Notch, the team reported a 75% reduction in FF&E bid processing time and an estimated 60+ hours saved
          on large projects, freeing staff to focus on vendor relationships and project delivery.
        </p>
        <blockquote
          className="rounded-2xl p-8 md:p-10"
          style={{
            border: '1px solid rgba(224,165,107,.25)',
            background: 'rgba(224,165,107,.05)',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(1.125rem, 1.5vw, 1.25rem)',
              fontStyle: 'italic',
              lineHeight: 1.75,
              color: 'var(--text)',
              marginBottom: '1.25rem',
            }}
          >
            &ldquo;Notch transformed the way we manage FF&amp;E bidding&hellip; a single source of truth for our bids. Intuitive for both our team and our vendors, and it has saved us countless hours.&rdquo;
          </p>
          <cite
            style={{
              fontFamily: 'var(--sans)',
              fontSize: '0.9375rem',
              fontStyle: 'normal',
              color: 'var(--text-muted)',
            }}
          >
            Interiors Project Manager, Statewide Public University System
          </cite>
        </blockquote>
      </ContentSection>

      <ContentSection title="Key Outcomes" alt>
        <ul className="flex flex-col gap-4">
          {keyOutcomes.map((outcome) => (
            <li key={outcome} className="flex items-start gap-3">
              <span
                className="mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[11px]"
                style={{ background: 'rgba(224,165,107,.15)', color: 'var(--accent)' }}
                aria-hidden="true"
              >
                ✓
              </span>
              <span style={{ fontFamily: 'var(--sans)', fontSize: '1rem', lineHeight: 1.6, color: 'var(--text)' }}>
                {outcome}
              </span>
            </li>
          ))}
        </ul>
      </ContentSection>

      <section
        className="py-20 px-6 lg:px-12 text-center"
        style={{ background: '#0B0B0D', borderTop: '1px solid var(--border)' }}
      >
        <h2
          className="reveal"
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
            fontWeight: 400,
            letterSpacing: '-0.02em',
            marginBottom: '1.5rem',
            color: 'var(--headline)',
          }}
        >
          See what Notch can do for your team
        </h2>
        <DemoButton className="reveal" />
      </section>
    </>
  );
}

function StatCell({ value, label }: { value: string; label: string }) {
  return (
    <div
      className="p-8 rounded-2xl text-center"
      style={{
        background: 'rgba(255,255,255,.03)',
        border: '1px solid rgba(255,255,255,.08)',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--serif)',
          fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
          fontWeight: 600,
          lineHeight: 1,
          color: 'var(--accent)',
          marginBottom: '0.75rem',
        }}
      >
        {value}
      </div>
      <p style={{ fontFamily: 'var(--sans)', fontSize: '0.9375rem', lineHeight: 1.5, color: 'var(--text-muted)' }}>
        {label}
      </p>
    </div>
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
        <h2
          className="mb-6"
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
            fontWeight: 400,
            letterSpacing: '-0.02em',
            color: 'var(--headline)',
          }}
        >
          {title}
        </h2>
        <div
          style={{
            fontFamily: 'var(--sans)',
            fontSize: '1rem',
            lineHeight: 1.7,
            color: 'var(--text-muted)',
          }}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
