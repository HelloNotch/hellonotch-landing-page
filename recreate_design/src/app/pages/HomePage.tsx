import { Link } from 'react-router';
import { DemoButton, TextLink } from '../components/Layout';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function HomePage() {
  useScrollReveal();

  return (
    <>
      <HeroSection />
      <CaseStudyCardSection />
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
      className="relative pt-12 pb-10 lg:pb-14 overflow-hidden"
      style={{ background: '#0B0B0D', borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-10 items-center lg:items-center justify-between reveal overflow-visible">
          <div className="flex-1 lg:min-w-0 text-center lg:text-left lg:max-w-[540px] lg:flex-shrink-0">
            <h1
              className="hero-headline"
              style={{
                fontFamily: 'var(--serif)',
                fontSize: 'clamp(2.25rem, 4vw, 3.125rem)',
                fontWeight: 600,
                lineHeight: 1.08,
                letterSpacing: '-0.025em',
                color: 'var(--headline)',
                marginBottom: '1.25rem',
                textWrap: 'balance',
              }}
            >
              Procurement Built for{' '}
              <span style={{ whiteSpace: 'nowrap' }}>Design and</span>{' '}
              Construction Teams
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
              <TextLink href="#features">See how it works ↓</TextLink>
            </div>
          </div>

          <div className="reveal relative w-full lg:flex-shrink-0 lg:w-[calc(52%+110px)]">
            <div
              className="pointer-events-none absolute inset-[-8%_-5%_-12%_5%] z-0 hidden lg:block"
              style={{
                background: 'radial-gradient(54% 56% at 64% 38%, rgba(224,165,107,.22), transparent 72%)',
                filter: 'blur(48px)',
              }}
              aria-hidden="true"
            />
            <div className="relative z-[1] w-full">
              <div
                className="relative overflow-hidden rounded-2xl lg:rounded-l-2xl lg:rounded-r-none max-h-[60vh] min-h-[200px] sm:min-h-[240px]"
              >
                <img
                  src="/hero-product-screenshot.png"
                  alt="Notch products table showing Downtown PA Hotel bidding workflow"
                  className="absolute inset-0 block h-full w-full max-h-[60vh] object-cover object-left-top scale-[1.12] lg:scale-[1.18] origin-top-left"
                />
                <div
                  className="pointer-events-none absolute inset-0 hidden lg:block"
                  style={{
                    background: `
                      linear-gradient(to right, transparent 0%, transparent 54%, rgba(11,11,13,.06) 66%, rgba(11,11,13,.20) 76%, rgba(11,11,13,.42) 85%, rgba(11,11,13,.70) 92%, rgba(11,11,13,.90) 97%, #0B0B0D 100%),
                      linear-gradient(to bottom, transparent 0%, transparent 58%, rgba(11,11,13,.07) 70%, rgba(11,11,13,.24) 81%, rgba(11,11,13,.50) 90%, rgba(11,11,13,.80) 96%, #0B0B0D 100%)
                    `,
                  }}
                  aria-hidden="true"
                />
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0B0B0D] to-transparent lg:hidden"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CaseStudyCardSection() {
  return (
    <section
      className="py-12 lg:py-16 px-6 lg:px-12"
      style={{ background: '#0E0E11', borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-[1200px] mx-auto">
        <Link
          to="/customers/statewide-university"
          className="reveal block no-underline rounded-2xl p-8 md:p-10 transition-all duration-200 hover:-translate-y-1 hover:border-[rgba(224,165,107,.35)]"
          style={{
            background: 'rgba(255,255,255,.03)',
            border: '1px solid rgba(255,255,255,.10)',
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
                className="transition-colors duration-200 group-hover:text-[var(--accent)]"
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
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section
      className="py-20 px-6 lg:px-12 reveal"
      style={{ background: '#0B0B0D', borderTop: '1px solid var(--border)' }}
    >
      <div className="max-w-[720px] mx-auto text-center">
        <p
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(1.5rem, 2vw, 1.75rem)',
            fontWeight: 400,
            lineHeight: 1.5,
            color: 'var(--text)',
          }}
        >
          Every FF&E procurement project moves through a long chain of hands: designers, buyers, vendors, logistics, warehousing, installers.
        </p>
        <p
          className="mt-5"
          style={{
            fontFamily: 'var(--sans)',
            fontSize: '1.0625rem',
            lineHeight: 1.7,
            color: 'var(--text-muted)',
          }}
        >
          Most teams manage that chain across email threads, shared folders, and manual processes that were not built for this work.{' '}
          <strong style={{ color: 'var(--headline)', fontWeight: 600 }}>Notch changes that.</strong>
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
      style={{ background: '#0E0E11', borderTop: '1px solid var(--border)' }}
    >
      <h2
        className="reveal"
        style={{
          fontFamily: 'var(--serif)',
          fontSize: 'clamp(1.75rem, 3vw, 2rem)',
          fontWeight: 400,
          letterSpacing: '-0.02em',
          textAlign: 'center',
          marginBottom: '0',
          color: 'var(--headline)',
        }}
      >
        Built for the Way Procurement Projects Actually Work
      </h2>
      <div className="section-accent-rule mx-auto mb-12" aria-hidden="true" />
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {benefits.map((benefit, i) => (
          <article
            key={benefit.title}
            className={`reveal ${i < 2 ? 'rd1' : 'rd2'} h-full flex flex-col p-8 transition-shadow duration-200 hover:shadow-[0_4px_24px_rgba(224,165,107,.08)]`}
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
    { src: 'Lightstone-logo-cmyk-red-LRG.png', alt: 'Lightstone Group', scale: 0.9 },
    { src: 'Moxy_Hotels_logo.svg', alt: 'Moxy Hotels', scale: 1.05 },
    {
      src: 'https://images.squarespace-cdn.com/content/v1/684c783fe4aa632916db4c47/e84d0f9e-a423-4a51-b93c-b788e1b5d6cb/Logo_AC_Master_RGB.png?format=1500w',
      alt: 'AC Hotel',
      scale: 0.98,
    },
    { src: 'waterloo-logo.png', alt: 'Waterloo', scale: 1.15 },
    { src: 'sway-logo.png', alt: 'Sway', scale: 0.95 },
  ];

  return (
    <section
      className="py-20 px-6 lg:px-12"
      style={{ background: '#0B0B0D', borderTop: '1px solid var(--border)' }}
    >
      <h2
        className="reveal"
        style={{
          fontFamily: 'var(--serif)',
          fontSize: 'clamp(1.75rem, 3vw, 2rem)',
          fontWeight: 400,
          letterSpacing: '-0.02em',
          textAlign: 'center',
          marginBottom: '0',
          color: 'var(--headline)',
        }}
      >
        Trusted by the Teams Behind Great Spaces
      </h2>
      <div className="section-accent-rule mx-auto mb-12" aria-hidden="true" />

      <div className="max-w-[1200px] mx-auto flex flex-wrap items-center justify-center gap-x-12 gap-y-10 reveal">
        {logos.map((logo) => (
          <div
            key={logo.alt}
            className="h-10 w-[140px] flex items-center justify-center shrink-0"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="max-h-9 max-w-[140px] w-auto object-contain"
              style={{
                filter: 'brightness(0) invert(1)',
                opacity: 0.55,
                transform: `scale(${logo.scale})`,
              }}
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
      style={{ background: '#0E0E11', borderTop: '1px solid var(--border)' }}
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
