import { useEffect, useState } from 'react';
import { Logo } from './components/Logo';
import { useScrollReveal } from './hooks/useScrollReveal';
import heroImage from '../assets/a917b0da6e43abb492dc03d7126e4b7e7ce53771.png';

export default function App() {
  const [showCookieBanner, setShowCookieBanner] = useState(true);
  
  useScrollReveal();
  
  useEffect(() => {
    if (localStorage.getItem('cookies-accepted')) {
      setShowCookieBanner(false);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem('cookies-accepted', 'true');
    setShowCookieBanner(false);
  };

  const handleScheduleDemo = () => {
    alert('Demo scheduling would open here (Calendly integration)');
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[999] h-16 flex items-center justify-between px-6 lg:px-12" style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}>
        <a href="/" className="no-underline flex items-center">
          <Logo />
        </a>
        <div className="flex items-center gap-6">
          <a href="https://app.hellonotch.com/login" className="text-[15px] no-underline" style={{ color: 'var(--gray-mid)' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--text)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--gray-mid)'}>
            Sign In
          </a>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <HeroSection onScheduleDemo={handleScheduleDemo} />
        
        {/* Problem */}
        <ProblemSection />
        
        {/* Benefits */}
        <BenefitsSection />
        
        {/* Social Proof */}
        <SocialProofSection />
        
        {/* Final CTA */}
        <FinalCTASection onScheduleDemo={handleScheduleDemo} />
      </main>

      {/* Footer */}
      <Footer />
      
      {/* Cookie Banner */}
      {showCookieBanner && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[998] max-w-[600px] w-[calc(100%-48px)]"
          style={{
            background: 'rgba(20,20,20,.95)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,.1)',
            borderRadius: '12px',
            padding: '16px 24px',
            boxShadow: '0 8px 32px rgba(0,0,0,.4)'
          }}>
          <div className="flex items-center gap-6">
            <p className="m-0 text-[.85rem] flex-1" style={{ color: '#B9B9B9' }}>
              We use cookies to ensure the best experience on our site. By continuing to browse you agree to our{' '}
              <a href="/privacy-policy" className="no-underline" style={{ color: 'var(--accent)' }}>Privacy Policy</a>.
            </p>
            <button 
              onClick={handleAcceptCookies}
              className="border-none rounded-lg px-5 py-2 text-[.85rem] font-semibold cursor-pointer whitespace-nowrap"
              style={{
                background: 'linear-gradient(135deg, var(--cta-start), var(--cta-end))',
                color: '#000'
              }}>
              Accept
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function HeroSection({ onScheduleDemo }: { onScheduleDemo: () => void }) {
  return (
    <section className="relative pt-9 pb-0 overflow-hidden" style={{
      background: 'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(255,255,255,.15) 0%, transparent 70%), #080808',
      borderTop: '1px solid #222'
    }}>
      {/* Background Pattern */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <pattern id="hero-dots" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1.2" fill="white"/>
          </pattern>
          <radialGradient id="hero-edge-fade" cx="50%" cy="100%" r="50%" gradientUnits="objectBoundingBox">
            <stop offset="0%" stopColor="white" stopOpacity="1"/>
            <stop offset="60%" stopColor="white" stopOpacity="0.35"/>
            <stop offset="100%" stopColor="white" stopOpacity="0"/>
          </radialGradient>
          <mask id="hero-dot-mask">
            <rect width="100%" height="100%" fill="url(#hero-edge-fade)"/>
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-dots)" fillOpacity="0.18" mask="url(#hero-dot-mask)"/>
      </svg>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-2 items-center reveal">
        <div className="text-center md:text-left">
          {/* Green chip — "Multi-Vendor Bid Feature Live" */}
          <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full" style={{
            background: 'rgba(119,251,116,0.10)',
            border: '1px solid rgba(119,251,116,0.25)'
          }}>
            {/* Pulsing dot */}
            <span className="relative flex items-center justify-center w-2 h-2 flex-shrink-0">
              <span className="absolute inset-0 rounded-full bg-[#77FB74] animate-[pulse-ring_2.4s_ease-out_infinite]" />
              <span className="relative w-[7px] h-[7px] rounded-full bg-[#77FB74]" />
            </span>
            <span style={{
              fontFamily: 'var(--sans)',
              fontSize: '0.7rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: '#77FB74'
            }}>
              Multi-Vendor Bid Feature Live
            </span>
          </div>

          <h1 style={{ 
            fontFamily: 'var(--serif)', 
            fontSize: 'clamp(2.5rem, 5vw, 4.25rem)',
            fontWeight: 600,
            lineHeight: 1.06,
            letterSpacing: '-0.025em',
            color: 'var(--headline)',
            marginBottom: '1.25rem'
          }}>
            Procurement Tools for Design and Construction Teams
          </h1>
          <p style={{
            fontFamily: 'var(--sans)',
            fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
            color: 'var(--gray-mid)',
            maxWidth: '520px',
            marginBottom: '2.5rem',
            lineHeight: 1.65
          }} className="mx-auto md:mx-0">
            Notch connects your specs, documents, vendors, and orders in one place, so projects stay on track.
          </p>
          <button 
            onClick={onScheduleDemo}
            className="inline-flex items-center justify-center px-7 py-[14px] text-[15px] font-semibold text-[#1A1A1A] border-none rounded-[10px] cursor-pointer transition-all duration-200 hover:-translate-y-px"
            style={{
              background: 'linear-gradient(135deg, var(--cta-start), var(--cta-end))',
              boxShadow: '0 4px 20px rgba(214,157,118,0)'
            }}
            onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 4px 20px rgba(214,157,118,.4)'}
            onMouseOut={(e) => e.currentTarget.style.boxShadow = '0 4px 20px rgba(214,157,118,0)'}
          >
            Schedule a Demo
          </button>
        </div>
        
        <div className="-ml-24">
          <img src={heroImage} alt="Hero Floor Plan" className="w-[120%] h-auto" />
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="py-20 px-6 lg:px-12 reveal" style={{ background: '#101010', borderTop: '1px solid #222' }}>
      <div className="max-w-[720px] mx-auto text-center">
        <p style={{
          fontFamily: 'var(--serif)',
          fontSize: 'clamp(1.15rem, 1.5vw, 1.35rem)',
          fontWeight: 300,
          fontStyle: 'italic',
          lineHeight: 1.85,
          color: 'var(--text)'
        }}>
          Every FF&E procurement project moves through a long chain of hands: designers, buyers, vendors, logistics, warehousing, installers. Every handoff is a chance for information to get lost, re-entered, or delayed. Most teams are managing that chain across email threads, shared folders, and manual processes that were not purpose built for this kind of work. Notch changes that.
        </p>
      </div>
    </section>
  );
}

function BenefitsSection() {
  const benefits = [
    {
      icon: (
        <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FFBF8F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 17H7A5 5 0 0 1 7 7h2"/>
          <path d="M15 7h2a5 5 0 1 1 0 10h-2"/>
          <line x1="8" x2="16" y1="12" y2="12"/>
        </svg>
      ),
      title: 'One connected system',
      text: 'One connected system for every team, every document, and every decision across the life of a project.'
    },
    {
      icon: (
        <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FFBF8F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="17 8 12 3 7 8"/>
          <line x1="12" x2="12" y1="3" y2="15"/>
        </svg>
      ),
      title: 'Spec import in minutes, not days',
      text: 'Spec packages are imported directly into Notch using AI-powered document parsing. What used to take days of manual data entry happens in minutes.'
    },
    {
      icon: (
        <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FFBF8F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m22 2-7 20-4-9-9-4Z"/>
          <path d="M22 2 11 13"/>
        </svg>
      ),
      title: 'Quote requests out to all vendors at once',
      text: 'Send requests to multiple vendors simultaneously. When specs change, every vendor is notified automatically.'
    },
    {
      icon: (
        <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FFBF8F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" x2="18" y1="20" y2="10"/>
          <line x1="12" x2="12" y1="20" y2="4"/>
          <line x1="6" x2="6" y1="20" y2="14"/>
        </svg>
      ),
      title: 'Side-by-side bid comparison',
      text: 'Review vendor pricing in a structured, leveled view built for fast, confident decisions.'
    }
  ];

  return (
    <section className="py-20 px-6 lg:px-12" style={{ background: '#0C0C0C', borderTop: '1px solid #222' }}>
      <h2 className="reveal" style={{
        fontFamily: 'var(--serif)',
        fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
        fontWeight: 400,
        letterSpacing: '-0.02em',
        textAlign: 'center',
        marginBottom: '3rem',
        color: 'var(--headline)'
      }}>
        Built for the Way Procurement Projects Actually Work
      </h2>
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((benefit, i) => (
          <article key={i} className={`reveal ${i < 2 ? 'rd1' : 'rd2'} p-8 transition-shadow duration-200 hover:shadow-[0_4px_24px_rgba(255,191,143,.08)]`} style={{
            background: 'rgba(255,255,255,.04)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,.08)',
            borderRadius: '16px',
            boxShadow: '0 20px 40px rgba(0,0,0,.4), inset 0 1px 0 rgba(255,255,255,.06)'
          }}>
            <div className="w-14 h-14 rounded-[14px] flex items-center justify-center mb-4" style={{
              background: 'rgba(255,191,143,.1)',
              border: '1px solid rgba(255,191,143,.2)'
            }}>
              {benefit.icon}
            </div>
            <h3 style={{
              fontFamily: 'var(--serif)',
              fontSize: '1.2rem',
              fontWeight: 400,
              marginBottom: '.75rem',
              color: 'var(--headline)'
            }}>
              {benefit.title}
            </h3>
            <p style={{
              fontFamily: 'var(--sans)',
              fontSize: '.9375rem',
              lineHeight: 1.6,
              color: 'var(--text)'
            }}>
              {benefit.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function SocialProofSection() {
  return (
    <section className="relative py-20 px-6 lg:px-12 overflow-hidden" style={{ 
      background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(255,255,255,.12) 0%, transparent 70%), #0A0A0A',
      borderTop: '1px solid #222' 
    }}> 
      {/* Background Pattern */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <pattern id="social-dots" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1.2" fill="white"/>
          </pattern>
          <radialGradient id="social-edge-fade" cx="50%" cy="0%" r="55%" gradientUnits="objectBoundingBox">
            <stop offset="0%" stopColor="white" stopOpacity="1"/>
            <stop offset="60%" stopColor="white" stopOpacity="0.3"/>
            <stop offset="100%" stopColor="white" stopOpacity="0"/>
          </radialGradient>
          <mask id="social-dot-mask">
            <rect width="100%" height="100%" fill="url(#social-edge-fade)"/>
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#social-dots)" fillOpacity="0.15" mask="url(#social-dot-mask)"/>
      </svg>
      
      <div className="relative z-10">
        <h2 className="reveal" style={{
          fontFamily: 'var(--serif)',
          fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
          fontWeight: 400,
          letterSpacing: '-0.02em',
          textAlign: 'center',
          marginBottom: '3rem',
          color: 'var(--headline)'
        }}>
          Trusted by the Teams Behind Great Spaces
        </h2>
        
        <div className="max-w-[1200px] mx-auto mb-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center reveal">
          {/* Logo files live in project root — Cursor: ./Lightstone-logo-cmyk-red-LRG.png etc. */}
          <div className="w-40 h-16 flex items-center justify-center rounded-lg" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
            <img src="Lightstone-logo-cmyk-red-LRG.png" alt="Lightstone Group" style={{ maxWidth: '120px', maxHeight: '40px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
          </div>
          <div className="w-40 h-16 flex items-center justify-center rounded-lg" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
            <img src="Moxy_Hotels_logo.svg" alt="Moxy Hotels" style={{ maxWidth: '120px', maxHeight: '40px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
          </div>
          <div className="w-40 h-16 flex items-center justify-center rounded-lg" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
            <img src="https://images.squarespace-cdn.com/content/v1/684c783fe4aa632916db4c47/e84d0f9e-a423-4a51-b93c-b788e1b5d6cb/Logo_AC_Master_RGB.png?format=1500w" alt="AC Hotel" style={{ height: '32px', width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)', opacity: 0.8 }} />
          </div>
          <div className="w-40 h-16 flex items-center justify-center rounded-lg" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
            <img src="waterloo-logo.png" alt="Waterloo" style={{ maxWidth: '120px', maxHeight: '40px', objectFit: 'contain' }} />
          </div>
          <div className="w-40 h-16 flex items-center justify-center rounded-lg" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
            <img src="sway-logo.png" alt="Sway" style={{ maxWidth: '120px', maxHeight: '40px', objectFit: 'contain' }} />
          </div>
        </div>
        
        <blockquote className="max-w-[720px] mx-auto text-center rounded-2xl p-12 reveal" style={{
          border: '1px solid rgba(255,191,143,.2)',
          background: 'rgba(255,191,143,.04)'
        }}>
          <p style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(1.125rem, 1.5vw, 1.25rem)',
            fontWeight: 300,
            fontStyle: 'italic',
            lineHeight: 1.75,
            color: 'var(--text)',
            marginBottom: '1.5rem'
          }}>
            Notch transformed the way we manage FF&E bidding. We went from juggling emails and spreadsheets to having a single source of truth for our bids. The platform is intuitive for both our team and our vendors, and it has saved us countless hours.
          </p>
          <cite style={{
            fontFamily: 'var(--sans)',
            fontSize: '.9375rem',
            fontWeight: 300,
            fontStyle: 'normal',
            color: 'var(--headline)'
          }}>
            Procurement Lead, Public University System
          </cite>
        </blockquote>
      </div>
    </section>
  );
}

function FinalCTASection({ onScheduleDemo }: { onScheduleDemo: () => void }) {
  return (
    <section className="py-20 px-6 lg:px-12 text-center" style={{ background: '#161616', borderTop: '1px solid #222' }}>
      <h2 className="reveal" style={{
        fontFamily: 'var(--serif)',
        fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
        fontWeight: 400,
        letterSpacing: '-0.02em',
        marginBottom: '1rem',
        color: 'var(--headline)'
      }}>
        See It In Action
      </h2>
      <p className="reveal max-w-[560px] mx-auto mb-8" style={{
        fontFamily: 'var(--sans)',
        fontSize: 'clamp(1rem, 1.25vw, 1.125rem)',
        color: 'var(--text)',
        lineHeight: 1.6
      }}>
        Upload a spec package and see how Notch structures it into a quote request ready to go out to vendors.
      </p>
      <button 
        onClick={onScheduleDemo}
        className="reveal inline-flex items-center justify-center px-7 py-[14px] text-[15px] font-semibold text-[#1A1A1A] border-none rounded-[10px] cursor-pointer transition-all duration-200 hover:-translate-y-px"
        style={{
          background: 'linear-gradient(135deg, var(--cta-start), var(--cta-end))',
          boxShadow: '0 4px 20px rgba(214,157,118,0)'
        }}
        onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 4px 20px rgba(214,157,118,.4)'}
        onMouseOut={(e) => e.currentTarget.style.boxShadow = '0 4px 20px rgba(214,157,118,0)'}
      >
        Schedule a Demo
      </button>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 px-6 lg:px-12 flex flex-wrap items-center justify-between gap-4" style={{
      background: '#080808',
      borderTop: '1px solid #222',
      color: 'var(--gray-dark)'
    }}>
      <a href="/" className="no-underline flex items-center">
        <Logo className="h-[18px] w-auto" />
      </a>
      <span className="text-[.8125rem] font-light">
        © 2026 Notch Procurement, Inc. All rights reserved.
      </span>
      <nav className="flex items-center gap-6">
        <a href="/privacy-policy" className="text-[.875rem] no-underline hover:text-[var(--text)]" style={{ color: 'var(--gray-dark)' }}>Privacy</a>
        <a href="/terms-of-service" className="text-[.875rem] no-underline hover:text-[var(--text)]" style={{ color: 'var(--gray-dark)' }}>Terms</a>
        <a href="mailto:team@hellonotch.com" className="text-[.875rem] no-underline hover:text-[var(--text)]" style={{ color: 'var(--gray-dark)' }}>Contact</a>
      </nav>
    </footer>
  );
}