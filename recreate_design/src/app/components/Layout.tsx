import { useEffect, useState, type ReactNode } from 'react';
import { Link } from 'react-router';
import { Logo } from './Logo';
import { ensureCalendlyAssets, openCalendlyPopup } from '../../lib/calendly';

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
      <nav
        className="fixed top-0 left-0 right-0 z-[999] h-16 flex items-center px-6 lg:px-12"
        style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}
      >
        <Link to="/" className="no-underline flex items-center shrink-0">
          <Logo />
        </Link>

        <div className="flex items-center gap-4 lg:gap-6 ml-auto">
          <a
            href="https://platform.hellonotch.com/auth/sign-in"
            className="text-[15px] no-underline hidden sm:inline"
            style={{ color: 'var(--gray-mid)' }}
            onMouseOver={(e) => { e.currentTarget.style.color = 'var(--text)'; }}
            onMouseOut={(e) => { e.currentTarget.style.color = 'var(--gray-mid)'; }}
          >
            Sign In
          </a>
          <DemoButton size="sm" />
        </div>
      </nav>

      <main>{children}</main>

      <Footer />

      {showCookieBanner && (
        <div
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[998] max-w-[600px] w-[calc(100%-48px)]"
          style={{
            background: 'rgba(20,20,20,.95)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,.1)',
            borderRadius: '12px',
            padding: '16px 24px',
            boxShadow: '0 8px 32px rgba(0,0,0,.4)',
          }}
        >
          <div className="flex items-center gap-6">
            <p className="m-0 text-[.85rem] flex-1" style={{ color: 'var(--text-muted)' }}>
              We use cookies to ensure the best experience on our site. By continuing to browse you agree to our{' '}
              <a href="/privacy-policy.html" className="no-underline" style={{ color: 'var(--accent)' }}>
                Privacy Policy
              </a>
              .
            </p>
            <button
              onClick={handleAcceptCookies}
              className="border-none rounded-lg px-5 py-2 text-[.85rem] font-semibold cursor-pointer whitespace-nowrap"
              style={{
                background: 'linear-gradient(135deg, var(--cta-start), var(--cta-end))',
                color: '#000',
              }}
            >
              Accept
            </button>
          </div>
        </div>
      )}
    </div>
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
}: {
  className?: string;
  size?: 'default' | 'sm';
}) {
  const sizeClasses = size === 'sm'
    ? 'px-4 py-2 text-[14px]'
    : 'px-7 py-[14px] text-[15px]';

  return (
    <button
      type="button"
      onClick={() => void openCalendlyPopup()}
      className={`inline-flex items-center justify-center font-semibold text-[#1A1A1A] border-none rounded-[10px] cursor-pointer transition-all duration-200 hover:-translate-y-px hover:brightness-105 ${sizeClasses} ${className}`}
      style={{
        background: 'linear-gradient(135deg, var(--cta-start), var(--cta-end))',
        boxShadow: '0 4px 20px rgba(214,157,118,0)',
      }}
      onMouseOver={(e) => { e.currentTarget.style.boxShadow = '0 4px 20px rgba(214,157,118,.4)'; }}
      onMouseOut={(e) => { e.currentTarget.style.boxShadow = '0 4px 20px rgba(214,157,118,0)'; }}
    >
      Schedule a Demo
    </button>
  );
}

function Footer() {
  return (
    <footer
      className="py-10 px-6 lg:px-12 flex flex-wrap items-center justify-between gap-4"
      style={{
        background: 'var(--bg)',
        borderTop: '1px solid var(--border)',
        color: 'var(--text-muted)',
      }}
    >
      <Link to="/" className="no-underline flex items-center">
        <Logo className="h-[18px] w-auto" />
      </Link>
      <span className="text-[.8125rem] font-light">
        © 2026 Notch Procurement, Inc. All rights reserved.
      </span>
      <nav className="flex items-center gap-6">
        <a
          href="/privacy-policy.html"
          className="text-[.875rem] no-underline hover:text-[var(--text)]"
          style={{ color: 'var(--text-muted)' }}
        >
          Privacy
        </a>
        <a
          href="/terms-of-service.html"
          className="text-[.875rem] no-underline hover:text-[var(--text)]"
          style={{ color: 'var(--text-muted)' }}
        >
          Terms
        </a>
        <a
          href="mailto:team@hellonotch.com"
          className="text-[.875rem] no-underline hover:text-[var(--text)]"
          style={{ color: 'var(--text-muted)' }}
        >
          Contact
        </a>
      </nav>
    </footer>
  );
}
