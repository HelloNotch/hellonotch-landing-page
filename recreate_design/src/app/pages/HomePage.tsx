import { Link } from 'react-router';
import { DemoButton } from '../components/Layout';
import { PanelMock, ProductWindow } from '../components/ProductMock';
import { CtaBand, ProofSection } from '../components/Sections';
import { buyers, homeLevel } from '../data/buyers';
import { usePageMeta } from '../hooks/usePageMeta';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function HomePage() {
  usePageMeta();
  useScrollReveal();

  return (
    <>
      <HeroSection />
      <LogosSection />
      <WhoSection />
      <HowSection />
      <ProofSection />
      <CtaBand
        title="Start with a project you already have."
        text="Send us a spec book or a plan set and we will show you how Notch can transform your bid process."
      />
    </>
  );
}

function HeroSection() {
  const buyer = buyers[0];

  return (
    <section className="n-hero">
      <div className="n-wrap n-hero__inner">
        <div className="n-hero__top reveal">
          <h1 className="n-h1">Modern procurement tools for teams that build and furnish spaces.</h1>
          <div className="n-hero__side">
            <p className="n-lead">
              Notch turns spec books and plan sets into quote requests, puts vendor pricing side by side, and keeps
              every order on track through delivery.
            </p>
            <div className="n-actions">
              <DemoButton />
              <a href="#how" className="n-link">
                See how it works
              </a>
            </div>
          </div>
        </div>

        <div className="reveal">
          <ProductWindow table={buyer.table} animate />
        </div>
      </div>
    </section>
  );
}

function LogosSection() {
  const logos = [
    { src: '/Lightstone-logo-cmyk-red-LRG.png', alt: 'Lightstone Group', height: 20 },
    { src: '/Moxy_Hotels_logo.svg', alt: 'Moxy Hotels', height: 30 },
    { src: '/waterloo-logo.png', alt: 'Waterloo', height: 13 },
    { src: '/sway-logo.png', alt: 'Sway', height: 24 },
  ];

  return (
    <section className="n-logos">
      <div className="n-wrap n-logos__inner">
        <p className="n-logos__label">Trusted by the teams behind great spaces</p>
        <div className="n-logos__row">
          {logos.map((logo) => (
            <img key={logo.alt} src={logo.src} alt={logo.alt} style={{ height: logo.height }} loading="lazy" />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhoSection() {
  return (
    <section className="n-section" id="who">
      <div className="n-wrap">
        <div className="n-head reveal">
          <p className="n-eyebrow">Who it&rsquo;s for</p>
          <h2 className="n-h2">One platform, set up for the way your team buys.</h2>
        </div>
        <div className="n-cards">
          {buyers.map((b) => (
            <Link key={b.slug} to={`/for/${b.slug}`} className="n-card reveal">
              <h3 className="n-card__title">{b.name}</h3>
              <p className="n-copy">{b.card.text}</p>
              <span className="n-card__more">Notch for {b.tab.toLowerCase()}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowSection() {
  const steps = [
    {
      title: 'Import in minutes, not days',
      text: 'Drop in a spec book or plan set. Notch reads it page by page and builds the product list, with the source page behind every line.',
    },
    {
      title: 'Quote requests out to every vendor at once',
      text: 'Vendors price line by line in their own portal. When specs change, every vendor is notified automatically.',
    },
    {
      title: 'Side by side comparison',
      text: 'Review pricing in a leveled view that shows the low number on each line, plus any comments or substitutions.',
    },
    {
      title: 'Award, order and track',
      text: 'Award by each line, issue purchase orders and track shipments from the warehouse to installation.',
    },
  ];

  return (
    <section className="n-section n-section--alt" id="how">
      <div className="n-wrap n-split">
        <div className="n-split__text reveal">
          <div className="n-head" style={{ marginBottom: 0 }}>
            <p className="n-eyebrow">How it works</p>
            <h2 className="n-h2">Built for the way procurement projects actually work.</h2>
          </div>
          <ol className="n-steps">
            {steps.map((s, i) => (
              <li key={s.title}>
                <span className="n-num">0{i + 1}</span>
                <div>
                  <h3 className="n-h3">{s.title}</h3>
                  <p className="n-copy">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="n-split__visual reveal">
          <PanelMock panel={homeLevel} />
        </div>
      </div>
    </section>
  );
}
