import { DOTS, type ImportPanel, type LevelPanel, type ListPanel, type Panel, type ProductTable } from '../data/buyers';

/** Notch products table, drawn in HTML so it stays sharp and can change per buyer type. */
export function ProductWindow({
  table,
  flat = false,
  animate = false,
}: {
  table: ProductTable;
  flat?: boolean;
  /** Plays the row selection once on load */
  animate?: boolean;
}) {
  const extra = table.columns.length - 4;
  const hasCheck = Boolean(table.selected);
  const cols = [
    hasCheck ? '44px' : '12px',
    '130px',
    '70px',
    '140px',
    'minmax(220px, 1fr)',
    ...Array.from({ length: extra }, () => (extra > 1 ? '150px' : '180px')),
  ].join(' ');
  let index = 0;

  return (
    <div className={`n-window${flat ? ' n-window--flat' : ''}${animate ? ' n-window--animate' : ''}`} aria-label={`Example: ${table.project} products in Notch`} role="img">
      <div className="n-window__bar" aria-hidden="true">
        <span className="is-faint">Projects</span>
        <span className="is-sep">/</span>
        <span>{table.project}</span>
        <span className="is-sep">/</span>
        <span>Products</span>
        <span className="n-pill">Bidding</span>
        {table.badge && <span className="n-pill n-pill--round">{table.badge}</span>}
        {table.count && <span className="is-right">{table.count}</span>}
      </div>
      <div className="n-scroll" aria-hidden="true">
        <div className={`n-table${hasCheck ? ' n-table--bar' : ''}`}>
          <div className="n-table__head" style={{ gridTemplateColumns: cols }}>
            <span />
            {table.columns.map((c) => (
              <span key={c}>{c}</span>
            ))}
          </div>
          {table.groups.map((g, gi) => (
            <div key={g.name ?? gi}>
              {g.name && (
                <div className="n-table__group">
                  {g.name}
                  <span>{g.count}</span>
                </div>
              )}
              {g.rows.map((row, ri) => {
                const on = hasCheck && index < (table.selected ?? 0);
                const order = index;
                index += 1;
                return (
                  <div
                    key={`${row.tag}-${ri}`}
                    className={`n-table__row${on ? ' is-selected' : ''}`}
                    style={{ gridTemplateColumns: cols, ['--i' as string]: order }}
                  >
                    <span>{hasCheck && <span className="n-check" />}</span>
                    <span className="n-tag">{row.tag}</span>
                    <span className="n-muted">{row.qty}</span>
                    <span className="n-cat">
                      <span className="n-dot" style={{ background: DOTS[row.dot] }} />
                      {row.cat}
                    </span>
                    <span className="n-ellipsis">{row.name}</span>
                    {row.extra.map((e, ei) => (
                      <span key={ei} className="n-muted n-ellipsis">
                        {e}
                      </span>
                    ))}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      {hasCheck && (
        <div className="n-actionbar" aria-hidden="true">
          <strong>{table.selectedLabel}</strong>
          <span className="is-dim">Actions</span>
          <span className="is-cta">Create bid</span>
        </div>
      )}
    </div>
  );
}

function money(v: string | null | undefined) {
  return v && v.startsWith('$') ? Number(v.replace(/[$,]/g, '')) : null;
}

function LevelGrid({ panel }: { panel: LevelPanel }) {
  const cols = `minmax(206px, 1.5fr) repeat(${panel.vendors.length}, minmax(116px, 1fr))`;
  const colsMobile = `minmax(0, 1.25fr) repeat(${panel.vendors.length}, minmax(0, 1fr))`;
  const cell = (i: number, extra = '') => `n-level__cell ${i === panel.picked ? 'is-picked' : ''} ${extra}`.trim();
  const totals = panel.totals.map(money);
  const full = totals.filter((t): t is number => t !== null);
  const lowTotal = full.length > 1 ? Math.min(...full) : null;
  const hasTags = panel.lines.some((l) => l.tag);
  const hasQty = panel.lines.some((l) => l.qty);

  return (
    <div className="n-window n-window--flat" role="img" aria-label={`Example: ${panel.title}, ${panel.sub}`}>
      <div className="n-window__bar" aria-hidden="true">
        <span className="is-faint">Bids</span>
        <span className="is-sep">/</span>
        <span>{panel.sub.split(',')[0]}</span>
        <span className="n-pill">Leveling</span>
      </div>
      <div className="n-scroll" aria-hidden="true">
        <div className="n-level" style={{ ['--cols-m' as string]: colsMobile }}>
          <div className="n-level__row n-level__row--vendors" style={{ gridTemplateColumns: cols }}>
            <div className="n-level__key" />
            {panel.vendors.map((v, i) => (
              <div key={v} className={cell(i, 'n-level__vendor')}>
                <strong>{v}</strong>
                <span className="n-level__view">View bid</span>
                {i === panel.picked && <span className="n-level__selected">Selected</span>}
              </div>
            ))}
          </div>
          <div className="n-level__row n-level__row--cols" style={{ gridTemplateColumns: cols }}>
            <div className={`n-level__item${hasTags ? '' : ' n-level__item--notag'}`}>
              {hasTags && <span>Tag</span>}
              <span>{panel.lineLabel === 'Product' ? 'Item name' : panel.lineLabel}</span>
              {hasQty && <span>Qty</span>}
            </div>
            {panel.vendors.map((v, i) => (
              <div key={v} className={cell(i)} />
            ))}
          </div>
          {panel.lines.map((line, li) => (
            <div key={line.name} className="n-level__row" style={{ gridTemplateColumns: cols }}>
              <div className={`n-level__item${hasTags ? '' : ' n-level__item--notag'}`}>
                {hasTags && <span className="n-chip">{line.tag}</span>}
                <span>{line.name}</span>
                {hasQty && <span className="n-level__qty">{line.qty}</span>}
              </div>
              {line.prices.map((p, i) => {
                const priced = money(p) !== null;
                const low = priced && i === line.low;
                return (
                  <div key={i} className={cell(i, !priced ? 'is-none' : low ? 'is-low' : '')}>
                    <span>{priced ? p : '–'}</span>
                    {low && <i className="n-mark n-mark--low" />}
                    {priced && line.outlier === i && <i className="n-mark n-mark--outlier" />}
                    {priced && line.sub === i && <i className="n-mark n-mark--sub" />}
                    {panel.callout && panel.callout.line === li && panel.callout.vendor === i && (
                      <span className="n-level__note">
                        <span className="n-level__status">
                          <i className="n-mark n-mark--sub" />
                          {panel.callout.status}
                        </span>
                        <span>{panel.callout.note}</span>
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
          <div className="n-level__row n-level__row--total" style={{ gridTemplateColumns: cols }}>
            <div className="n-level__item n-level__item--notag">
              <span>Total (all-in)</span>
            </div>
            {panel.totals.map((t, i) => {
              const n = totals[i];
              const low = n !== null && n === lowTotal;
              return (
                <div key={i} className={cell(i, n === null ? 'is-none' : low ? 'is-low' : '')}>
                  <span>{t}</span>
                  {low && <i className="n-mark n-mark--low" />}
                  {n !== null && lowTotal !== null && !low && (
                    <span className="n-level__delta">
                      +${(n - lowTotal).toLocaleString('en-US')} · +{Math.round(((n - lowTotal) / lowTotal) * 100)}%
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

const STATUS_TONE: Record<string, string> = {
  Open: 'peach',
  Submitted: 'green',
  Pending: 'neutral',
  Received: 'green',
  Review: 'peach',
  'In transit': 'blue',
  Acknowledged: 'peach',
  'Partial delivery': 'amber',
  Draft: 'neutral',
  Sent: 'blue',
  Awarded: 'green',
  Ready: 'green',
  'Needs review': 'amber',
};

function ListCard({ panel }: { panel: ListPanel }) {
  return (
    <div className="n-window n-window--flat" role="img" aria-label={`Example: ${panel.title}`}>
      <div aria-hidden="true">
        <div className="n-list__title">{panel.title}</div>
        {panel.rows.some((r) => r[2]) && (
          <div className="n-list__head">
            <span>{panel.head ?? 'Name'}</span>
            <span>Status</span>
          </div>
        )}
        {panel.rows.map(([a, b, status]) => (
          <div key={a} className="n-list__row">
            <span>{a}</span>
            <span className="n-list__end">
              {b && <span>{b}</span>}
              {status && <span className={`n-status n-status--${STATUS_TONE[status] ?? 'neutral'}`}>{status}</span>}
            </span>
          </div>
        ))}
        {panel.note && (
          <div className={`n-list__note${panel.note.tone === 'caution' ? ' n-list__note--caution' : ''}`}>
            <span>{panel.note.text}</span>
            {panel.note.action && <strong>{panel.note.action}</strong>}
          </div>
        )}
      </div>
    </div>
  );
}

/** Import progress: file, steps ticking off, then a success line. Plays once when scrolled into view. */
function ImportCard({ panel }: { panel: ImportPanel }) {
  return (
    <div className="n-window n-window--flat n-import" role="img" aria-label={`Example: ${panel.file}. ${panel.done}`}>
      <div aria-hidden="true">
        <div className="n-list__title">{panel.title}</div>
        <div className="n-import__file">
          <span className="n-import__icon">PDF</span>
          <span className="n-import__name">
            <strong>{panel.file}</strong>
            <span>{panel.meta}</span>
          </span>
          <span className="n-import__bar">
            <i />
          </span>
        </div>
        {panel.steps.map((step, i) => (
          <div key={step} className="n-import__step" style={{ ['--i' as string]: i }}>
            <i className="n-import__tick" />
            <span>{step}</span>
          </div>
        ))}
        <div className="n-import__done" style={{ ['--i' as string]: panel.steps.length }}>
          <i className="n-import__tick" />
          <span>{panel.done}</span>
        </div>
      </div>
    </div>
  );
}

export function PanelMock({ panel }: { panel: Panel }) {
  if (panel.kind === 'import') return <ImportCard panel={panel} />;
  return panel.kind === 'level' ? <LevelGrid panel={panel} /> : <ListCard panel={panel} />;
}
