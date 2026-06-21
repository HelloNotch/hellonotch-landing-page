import { Link } from 'react-router';
import { DemoButton } from '../components/Layout';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function HomePage() {
  useScrollReveal();

  return (
    <>
      <HeroSection />
      <ProblemSection />
      <BenefitsSection />
      <SocialProofSection />
      <FinalCTASection />
    </>
  );
}

function HeroSection() {
  return (
    <section
      className="relative pt-12 pb-16 overflow-hidden"
      style={{ background: '#0B0B0D', borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-8 items-center lg:items-start justify-between reveal overflow-visible">
          <div className="flex-1 lg:min-w-0 text-center lg:text-left lg:max-w-[520px] lg:flex-shrink-0">
            <h1
              style={{
                fontFamily: 'var(--serif)',
                fontSize: 'clamp(2.5rem, 5vw, 4.25rem)',
                fontWeight: 600,
                lineHeight: 1.06,
                letterSpacing: '-0.025em',
                color: 'var(--headline)',
                marginBottom: '1.25rem',
              }}
            >
              Procurement Built for Design and Construction Teams
            </h1>
            <p
              style={{
                fontFamily: 'var(--sans)',
                fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
                color: 'var(--text-muted)',
                maxWidth: '520px',
                marginBottom: '2rem',
                lineHeight: 1.65,
              }}
              className="mx-auto lg:mx-0"
            >
              Notch connects your specs, documents, vendors, and orders in one place, so projects stay on track.
            </p>
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4">
              <DemoButton />
              <a
                href="#features"
                className="inline-flex items-center text-[15px] font-medium no-underline transition-colors duration-200"
                style={{ color: 'var(--text-muted)' }}
                onMouseOver={(e) => { e.currentTarget.style.color = 'var(--accent)'; }}
                onMouseOut={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; }}
              >
                See how it works ↓
              </a>
            </div>
          </div>

          <div className="reveal relative w-full lg:w-[55%] lg:flex-shrink-0 lg:mr-[-240px]">
            <div
              className="pointer-events-none absolute inset-[-10%_-5%_-20%_10%] z-0"
              style={{
                background: 'radial-gradient(54% 56% at 64% 38%, rgba(224,165,107,.22), transparent 72%)',
                filter: 'blur(48px)',
              }}
              aria-hidden="true"
            />
            <div className="relative z-[1]">
              <div className="relative overflow-hidden rounded-l-2xl rounded-r-none">
                <img
                  src="/hero-product-screenshot.png"
                  alt="Notch products table showing Downtown PA Hotel bidding workflow"
                  className="block w-full min-w-[640px] max-w-none h-auto"
                  style={{ width: 'calc(100% + 80px)', maxWidth: 'none' }}
                />
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background: `
                      linear-gradient(to right, transparent 0%, transparent 54%, rgba(11,11,13,.06) 66%, rgba(11,11,13,.20) 76%, rgba(11,11,13,.42) 85%, rgba(11,11,13,.70) 92%, rgba(11,11,13,.90) 97%, #0B0B0D 100%),
                      linear-gradient(to bottom, transparent 0%, transparent 58%, rgba(11,11,13,.07) 70%, rgba(11,11,13,.24) 81%, rgba(11,11,13,.50) 90%, rgba(11,11,13,.80) 96%, #0B0B0D 100%)
                    `,
                  }}
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>

        <CaseStudyCard />
      </div>
    </section>
  );
}

function CaseStudyCard() {
  return (
    <Link
      to="/customers/statewide-university"
      className="reveal mt-14 block no-underline rounded-2xl p-8 md:p-10 transition-all duration-200 hover:-translate-y-1"
      style={{
        background: 'rgba(255,255,255,.03)',
        border: '1px solid rgba(255,255,255,.10)',
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.borderColor = 'rgba(224,165,107,.35)';
        e.currentTarget.style.background = 'rgba(255,255,255,.05)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,.10)';
        e.currentTarget.style.background = 'rgba(255,255,255,.03)';
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8 md:gap-12 items-start">
        <div>
          <div
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(3rem, 6vw, 4.5rem)',
              fontWeight: 600,
              lineHeight: 1,
              letterSpacing: '-0.03em',
              color: 'var(--accent)',
              marginBottom: '0.75rem',
            }}
          >
            75%
          </div>
          <p
            style={{
              fontFamily: 'var(--sans)',
              fontSize: '1rem',
              fontWeight: 600,
              color: 'var(--headline)',
              marginBottom: '0.35rem',
            }}
          >
            less time spent bidding
          </p>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.9375rem', color: 'var(--text-muted)' }}>
            60+ hours saved on large projects
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <p
            style={{
              fontFamily: 'var(--sans)',
              fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
              lineHeight: 1.65,
              color: 'var(--text)',
              margin: 0,
            }}
          >
            Learn how a large public university system cut their bidding time by over 75%, saving more than 60 hours on large projects after moving to Notch.
          </p>
          <span
            style={{
              fontFamily: 'var(--sans)',
              fontSize: '0.9375rem',
              fontWeight: 600,
              color: 'var(--accent)',
            }}
          >
            Read the case study →
          </span>
        </div>
      </div>
    </Link>
  );
}

function ProblemSection() {
  return (
    <section
      className="py-20 px-6 lg:px-12 reveal"
      style={{ background: '#0E0E11', borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-[720px]">
        <p
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(1.15rem, 1.5vw, 1.3rem)',
            fontWeight: 400,
            lineHeight: 1.75,
            color: 'var(--text)',
          }}
        >
          Every FF&E procurement project moves through a long chain of hands: designers, buyers, vendors, logistics, warehousing, installers.
        </p>
        <p
          className="mt-4"
          style={{
            fontFamily: 'var(--sans)',
            fontSize: '1rem',
            lineHeight: 1.7,
            color: 'var(--text-muted)',
          }}
        >
          Most teams manage that chain across email threads, shared folders, and manual processes that were not built for this work.{' '}
          <span style={{ color: 'var(--headline)', fontWeight: 500 }}>Notch changes that.</span>
        </p>
      </div>
    </section>
  );
}

function BenefitsSection() {
  const benefits = [
    {
      icon: (
        <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#E0A56B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 17H7A5 5 0 0 1 7 7h2" />
          <path d="M15 7h2a5 5 0 1 1 0 10h-2" />
          <line x1="8" x2="16" y1="12" y2="12" />
        </svg>
      ),
      title: 'One connected system',
      text: 'One connected system for every team, every document, and every decision across the life of a project.',
    },
    {
      icon: (
        <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#E0A56B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="17 8 12 3 7 8" />
          <line x1="12" x2="12" y1="3" y2="15" />
        </svg>
      ),
      title: 'Spec import in minutes, not days',
      text: 'Spec packages are imported directly into Notch using AI-powered document parsing. What used to take days of manual data entry happens in minutes.',
    },
    {
      icon: (
        <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#E0A56B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m22 2-7 20-4-9-9-4Z" />
          <path d="M22 2 11 13" />
        </svg>
      ),
      title: 'Quote requests out to all vendors at once',
      text: 'Send requests to multiple vendors simultaneously. When specs change, every vendor is notified automatically.',
    },
    {
      icon: (
        <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#E0A56B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" x2="18" y1="20" y2="10" />
          <line x1="12" x2="12" y1="20" y2="4" />
          <line x1="6" x2="6" y1="20" y2="14" />
        </svg>
      ),
      title: 'Side-by-side bid comparison',
      text: 'Review vendor pricing in a structured, leveled view built for fast, confident decisions.',
    },
  ];

  return (
    <section
      id="features"
      className="py-20 px-6 lg:px-12"
      style={{ background: '#0B0B0D', borderTop: '1px solid var(--border)' }}
    >
      <h2
        className="reveal"
        style={{
          fontFamily: 'var(--serif)',
          fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
          fontWeight: 400,
          letterSpacing: '-0.02em',
          textAlign: 'center',
          marginBottom: '3rem',
          color: 'var(--headline)',
        }}
      >
        Built for the Way Procurement Projects Actually Work
      </h2>
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((benefit, i) => (
          <article
            key={benefit.title}
            className={`reveal ${i < 2 ? 'rd1' : 'rd2'} p-8 transition-shadow duration-200 hover:shadow-[0_4px_24px_rgba(224,165,107,.08)]`}
            style={{
              background: 'rgba(255,255,255,.04)',
              border: '1px solid rgba(255,255,255,.08)',
              borderRadius: '16px',
            }}
          >
            <div
              className="w-14 h-14 rounded-[14px] flex items-center justify-center mb-4"
              style={{
                background: 'rgba(224,165,107,.1)',
                border: '1px solid rgba(224,165,107,.2)',
              }}
            >
              {benefit.icon}
            </div>
            <h3
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '1.2rem',
                fontWeight: 400,
                marginBottom: '.75rem',
                color: 'var(--headline)',
              }}
            >
              {benefit.title}
            </h3>
            <p
              style={{
                fontFamily: 'var(--sans)',
                fontSize: '.9375rem',
                lineHeight: 1.6,
                color: 'var(--text-muted)',
              }}
            >
              {benefit.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function SocialProofSection() {
  const logos = [
    { src: 'Lightstone-logo-cmyk-red-LRG.png', alt: 'Lightstone Group' },
    { src: 'Moxy_Hotels_logo.svg', alt: 'Moxy Hotels' },
    {
      src: 'https://images.squarespace-cdn.com/content/v1/684c783fe4aa632916db4c47/e84d0f9e-a423-4a51-b93c-b788e1b5d6cb/Logo_AC_Master_RGB.png?format=1500w',
      alt: 'AC Hotel',
    },
    { src: 'waterloo-logo.png', alt: 'Waterloo' },
    { src: 'sway-logo.png', alt: 'Sway' },
  ];

  return (
    <section
      className="py-20 px-6 lg:px-12"
      style={{ background: '#0E0E11', borderTop: '1px solid var(--border)' }}
    >
      <h2
        className="reveal"
        style={{
          fontFamily: 'var(--serif)',
          fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
          fontWeight: 400,
          letterSpacing: '-0.02em',
          textAlign: 'center',
          marginBottom: '3rem',
          color: 'var(--headline)',
        }}
      >
        Trusted by the Teams Behind Great Spaces
      </h2>

      <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 items-center justify-items-center reveal">
        {logos.map((logo) => (
          <div key={logo.alt} className="h-10 flex items-center justify-center px-2">
            <img
              src={logo.src}
              alt={logo.alt}
              className="max-h-10 w-auto object-contain"
              style={{ filter: 'brightness(0) invert(1)', opacity: 0.55 }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function FinalCTASection() {
  return (
    <section
      id="demo"
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
          marginBottom: '1rem',
          color: 'var(--headline)',
        }}
      >
        See It In Action
      </h2>
      <p
        className="reveal max-w-[560px] mx-auto mb-8"
        style={{
          fontFamily: 'var(--sans)',
          fontSize: 'clamp(1rem, 1.25vw, 1.125rem)',
          color: 'var(--text-muted)',
          lineHeight: 1.6,
        }}
      >
        Book a walkthrough with our team and see how Notch fits your procurement workflow from spec import through bid-out.
      </p>
      <DemoButton className="reveal" />
    </section>
  );
}
