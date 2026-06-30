import { Link } from 'react-router';
import { DemoButton } from '../components/Layout';
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
      className="relative pt-12 pb-10 lg:pb-14 overflow-x-clip"
      style={{ background: '#0B0B0D', borderTop: '1px solid var(--border)' }}
    >
      <div className="grid lg:grid-cols-[minmax(0,540px)_1fr] lg:gap-8 lg:items-center">
        <div
          className="px-6 lg:pl-[max(1.5rem,calc((100vw-1200px)/2+1.5rem))] lg:pr-6 text-center lg:text-left reveal"
        >
          <div className="status-pill mb-5 mx-auto lg:mx-0 w-fit">
            <span className="status-pill__dot" aria-hidden="true" />
            Multi-Vendor Bid · Live
          </div>
          <h1
            className="type-hero-headline mb-5 text-balance"
          >
            Procurement Built for{' '}
            <span style={{ whiteSpace: 'nowrap' }}>Design and</span>{' '}
            Construction Teams
          </h1>
          <p
            className="type-lead max-w-[520px] mb-8 mx-auto lg:mx-0"
          >
            Notch connects your specs, documents, vendors, and orders in one place, so projects stay on track.
          </p>
          <DemoButton />
        </div>

        <div className="px-6 lg:pl-0 lg:pr-0 reveal relative w-full min-w-0 flex justify-end">
          <div
            className="pointer-events-none absolute inset-[-8%_0_-12%_20%] z-0 hidden lg:block"
            style={{
              background: 'radial-gradient(54% 56% at 88% 38%, rgba(224,165,107,.22), transparent 72%)',
              filter: 'blur(48px)',
            }}
            aria-hidden="true"
          />
          <div className="relative z-[1] w-full lg:w-[calc(100%+110px)] lg:max-w-none">
            <div className="relative overflow-hidden rounded-2xl lg:rounded-l-2xl lg:rounded-r-none">
              <img
                src="/hero-product-screenshot.png"
                alt="Notch products table showing Downtown PA Hotel bidding workflow"
                className="block w-full h-auto max-h-[60vh] object-contain object-right-top"
              />
              <div
                className="pointer-events-none absolute inset-0 hidden lg:block"
                style={{
                  background:
                    'linear-gradient(to bottom, transparent 0%, transparent 76%, rgba(11,11,13,.08) 86%, rgba(11,11,13,.30) 93%, rgba(11,11,13,.65) 98%, #0B0B0D 100%)',
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
              <div className="type-display-number mb-3">
                75%
              </div>
              <p
                className="type-section-heading mb-1.5"
                style={{ fontSize: '17px', lineHeight: 1.3 }}
              >
                less time spent bidding
              </p>
              <p className="type-body" style={{ fontSize: '15px' }}>
                60+ hours saved on large projects
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="type-body m-0">
                Learn how a large public university system cut their bidding time by over 75%, saving more than 60 hours on large projects after moving to Notch.
              </p>
              <span
                className="type-body font-semibold transition-colors duration-200 group-hover:text-[var(--accent)]"
                style={{ color: 'var(--accent)' }}
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
      <div className="max-w-[1200px] mx-auto">
        <div className="w-full max-w-[720px] mx-auto text-center">
          <p className="type-display-sentence text-center">
            Every FF&E procurement project moves through a long chain of hands: designers, buyers, vendors, logistics, warehousing, installers.
          </p>
          <p className="type-lead mt-5 text-center">
            Most teams manage that chain across email threads, shared folders, and manual processes that were not built for this work. Notch changes that.
          </p>
        </div>
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
      <h2 className="type-section-heading reveal text-center mb-0">
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
            <h3 className="type-section-heading mb-3" style={{ fontSize: '20px', lineHeight: 1.2 }}>
              {benefit.title}
            </h3>
            <p className="type-body">
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
      <h2 className="type-section-heading reveal text-center mb-0">
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
      <h2 className="type-cta-heading reveal mb-4">
        See It In Action
      </h2>
      <p className="type-lead reveal max-w-[560px] mx-auto mb-8">
        Book a walkthrough with our team and see how Notch fits your procurement workflow from spec import through bid-out.
      </p>
      <DemoButton className="reveal" />
    </section>
  );
}
