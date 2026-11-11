import { Link } from 'react-router';
import { DemoButton } from './Layout';

export const CASE_STUDY_PATH = '/customers/statewide-university';

export function ProofSection({ showQuote = true, alt = false }: { showQuote?: boolean; alt?: boolean }) {
  return (
    <section className={`n-section${alt ? ' n-section--alt' : ''}`} id="customers">
      <div className="n-wrap n-proof reveal">
        <div className="n-proof__stat">
          <span className="n-proof__num">75%</span>
          <strong>less time spent on bidding</strong>
          <p className="n-copy">60+ hours saved on large projects at a large public university system.</p>
          {!showQuote && (
            <Link to={CASE_STUDY_PATH} className="n-link">
              Read the case study
            </Link>
          )}
        </div>
        {showQuote && (
          <figure className="n-proof__quote">
            <blockquote>
              &ldquo;Notch transformed the way we manage FF&amp;E bidding. The platform is intuitive for both our team
              and our vendors, and it has saved us countless hours.&rdquo;
            </blockquote>
            <figcaption>
              <span>Interiors Project Manager, Statewide Public University System</span>
              <Link to={CASE_STUDY_PATH} className="n-link">
                Read the case study
              </Link>
            </figcaption>
          </figure>
        )}
      </div>
    </section>
  );
}

export function CtaBand({ title, text }: { title: string; text: string }) {
  return (
    <section className="n-cta" id="demo">
      <div className="n-wrap n-cta__inner reveal">
        <div className="n-cta__text">
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <DemoButton bright />
      </div>
    </section>
  );
}
