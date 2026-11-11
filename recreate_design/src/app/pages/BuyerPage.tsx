import { Navigate, useParams } from 'react-router';
import { DemoButton } from '../components/Layout';
import { PanelMock, ProductWindow } from '../components/ProductMock';
import { CtaBand, ProofSection } from '../components/Sections';
import { buyerBySlug } from '../data/buyers';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { usePageMeta } from '../hooks/usePageMeta';

export default function BuyerPage() {
  const { slug } = useParams();
  const buyer = buyerBySlug(slug);

  usePageMeta(buyer ? `${buyer.metaTitle} | Notch` : undefined, buyer?.metaDescription);
  useScrollReveal(slug);

  if (!buyer) return <Navigate to="/" replace />;

  return (
    <>
      <section className="n-hero">
        <div className="n-wrap n-hero__inner">
          <div className="n-hero__stack reveal">
            <p className="n-eyebrow">{buyer.eyebrow}</p>
            <h1 className="n-h1">{buyer.headline}</h1>
            <p className="n-lead">{buyer.lead}</p>
            <div className="n-actions">
              <DemoButton />
              <a href="#how" className="n-link">
                See how it works
              </a>
            </div>
          </div>
          <div className="reveal">
            <ProductWindow table={buyer.table} />
            <p className="n-caption">Example data. {buyer.tableCaption}</p>
          </div>
        </div>
      </section>

      <section className="n-section n-section--alt n-section--tight">
        <div className="n-wrap">
          <h2 className="n-h2 reveal">{buyer.pointsTitle}</h2>
          <div className="n-points">
            {buyer.points.map((p) => (
              <div key={p.title} className="n-point reveal">
                <h3 className="n-h3">{p.title}</h3>
                <p className="n-copy">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="n-section" id="how">
        <div className="n-wrap n-features">
          {buyer.features.map((f, i) => (
            <div key={f.title} className="n-feature reveal">
              <div className="n-feature__text">
                <span className="n-num">0{i + 1}</span>
                <h3 className="n-feature__title">{f.title}</h3>
                <p>{f.text}</p>
              </div>
              <div className="n-feature__visual">
                <PanelMock panel={f.panel} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <ProofSection showQuote={buyer.showQuote} alt />
      <CtaBand title={buyer.cta.title} text={buyer.cta.text} />
    </>
  );
}
