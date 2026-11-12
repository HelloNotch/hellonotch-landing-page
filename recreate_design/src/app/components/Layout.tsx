import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Link, useLocation } from 'react-router';
import { Logo } from './Logo';
import { buyers } from '../data/buyers';
import { ensureCalendlyAssets, openCalendlyPopup } from '../../lib/calendly';

const CASE_STUDY_PATH = '/customers/statewide-university';
const SIGN_IN_URL = 'https://platform.hellonotch.com/auth/sign-in';

export function Layout({ children }: { children: ReactNode }) {
  const [showCookieBanner, setShowCookieBanner] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('cookies-accepted')) {
      setShowCookieBanner(false);
    }
  }, []);

  useEffect(() => {
    ensureCalendlyAssets();
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem('cookies-accepted', 'true');
    setShowCookieBanner(false);
  };

  return (
    <div className="min-h-screen">
      <Nav />

      <main>{children}</main>

      <Footer />

      {showCookieBanner && (
        <div className="n-cookie">
          <p>
            We use cookies to ensure the best experience on our site. By continuing to browse you agree to our{' '}
            <a href="/privacy-policy.html">Privacy Policy</a>.
          </p>
          <button type="button" onClick={handleAcceptCookies} className="n-btn n-btn--sm">
            Accept
          </button>
        </div>
      )}
    </div>
  );
}

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    setDrawerOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onDown = (e: MouseEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) setMenuOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  return (
    <header className="n-nav">
      <div className="n-nav__bar">
        <Link to="/" className="no-underline flex items-center shrink-0 py-1" aria-label="Notch home">
          <Logo />
        </Link>

        <nav className="n-nav__links" aria-label="Main">
          <div className="n-menu" ref={menuRef}>
            <button
              type="button"
              className="n-nav__link"
              aria-expanded={menuOpen}
              aria-controls="who-menu"
              onClick={() => setMenuOpen((v) => !v)}
            >
              Who it&rsquo;s for
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2.5 4.5 6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {menuOpen && (
              <div className="n-menu__panel" id="who-menu">
                {buyers.map((b) => (
                  <Link key={b.slug} to={`/for/${b.slug}`} className="n-menu__item">
                    <strong>{b.name}</strong>
                    <span>{b.navBlurb}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="n-nav__right">
          <a href={SIGN_IN_URL} className="n-nav__link n-nav__signin">
            Sign in
          </a>
          <DemoButton size="sm" compactLabel />
          <button
            type="button"
            className="n-nav__toggle"
            aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={drawerOpen}
            onClick={() => setDrawerOpen((v) => !v)}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              {drawerOpen ? (
                <path d="M4 4l10 10M14 4 4 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              ) : (
                <path d="M3 5h12M3 9h12M3 13h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {drawerOpen && (
        <nav className="n-drawer" aria-label="Mobile">
          <p className="n-drawer__label">Who it&rsquo;s for</p>
          {buyers.map((b) => (
            <Link key={b.slug} to={`/for/${b.slug}`}>
              {b.name}
            </Link>
          ))}
          <p className="n-drawer__label">Notch</p>
          <a href={SIGN_IN_URL}>Sign in</a>
        </nav>
      )}
    </header>
  );
}

export function TextLink({
  to,
  href,
  children,
  className = '',
}: {
  to?: string;
  href?: string;
  children: ReactNode;
  className?: string;
}) {
  const classes = `inline-flex items-center text-[15px] font-medium no-underline transition-colors duration-200 hover:text-[var(--accent)] ${className}`;
  const style = { color: 'var(--text-muted)' } as const;

  if (to) {
    return (
      <Link to={to} className={classes} style={style}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={classes} style={style}>
      {children}
    </a>
  );
}

export function DemoButton({
  className = '',
  size = 'default',
  compactLabel = false,
  bright = false,
}: {
  className?: string;
  size?: 'default' | 'sm';
  compactLabel?: boolean;
  bright?: boolean;
}) {
  const label = compactLabel ? (
    <>
      <span className="sm:hidden">Demo</span>
      <span className="hidden sm:inline">Schedule a demo</span>
    </>
  ) : (
    'Schedule a demo'
  );

  return (
    <button
      type="button"
      onClick={() => void openCalendlyPopup()}
      className={`n-btn${size === 'sm' ? ' n-btn--sm' : ''}${bright ? ' n-btn--bright' : ''} ${className}`}
    >
      {label}
    </button>
  );
}

function Footer() {
  return (
    <footer className="n-footer">
      <div className="n-wrap n-footer__inner">
        <div className="n-footer__brand">
          <Link to="/" className="no-underline flex items-center" aria-label="Notch home">
            <Logo className="h-[18px] w-auto" />
          </Link>
          <span>© 2026 Notch Procurement, Inc. All rights reserved.</span>
        </div>
        <nav className="n-footer__col" aria-label="Who it's for">
          <strong>Who it&rsquo;s for</strong>
          {buyers.map((b) => (
            <Link key={b.slug} to={`/for/${b.slug}`}>
              {b.name}
            </Link>
          ))}
        </nav>
        <nav className="n-footer__col" aria-label="Company">
          <strong>Company</strong>
          <Link to={CASE_STUDY_PATH}>Case study</Link>
          <a href="mailto:team@hellonotch.com">Contact</a>
          <a href="/privacy-policy.html">Privacy</a>
          <a href="/terms-of-service.html">Terms</a>
        </nav>
      </div>
    </footer>
  );
}
