import { DOTS, type LevelPanel, type ListPanel, type Panel, type ProductTable } from '../data/buyers';

/** Notch products table, drawn in HTML so it stays sharp and can change per buyer type. */
export function ProductWindow({ table, flat = false }: { table: ProductTable; flat?: boolean }) {
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
    <div className={`n-window${flat ? ' n-window--flat' : ''}`} aria-label={`Example: ${table.project} products in Notch`} role="img">
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
                index += 1;
                return (
                  <div
                    key={`${row.tag}-${ri}`}
                    className={`n-table__row${on ? ' is-selected' : ''}`}
                    style={{ gridTemplateColumns: cols }}
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

function LevelGrid({ panel }: { panel: LevelPanel }) {
  const cols = `minmax(170px, 1.5fr) repeat(${panel.vendors.length}, minmax(112px, 1fr))`;
  const cell = (i: number, extra = '') => `${i === panel.picked ? 'is-picked' : ''} ${extra}`.trim();
  const isPrice = (v: string | null) => Boolean(v && v.startsWith('$'));

  return (
    <div className="n-window n-window--flat" role="img" aria-label={`Example: ${panel.title}, ${panel.sub}`}>
      <div className="n-window__bar" aria-hidden="true">
        <span style={{ fontWeight: 600 }}>{panel.title}</span>
        <span className="is-faint" style={{ fontWeight: 400, fontSize: 13 }}>
          {panel.sub}
        </span>
      </div>
      <div className="n-scroll" aria-hidden="true">
        <div className="n-level">
          <div className="n-level__row n-level__row--head" style={{ gridTemplateColumns: cols }}>
            <span>{panel.lineLabel}</span>
            {panel.vendors.map((v, i) => (
              <span key={v} className={cell(i)}>
                {v}
              </span>
            ))}
          </div>
          {panel.lines.map((line) => (
            <div key={line.name} className="n-level__row" style={{ gridTemplateColumns: cols }}>
              <span className="n-level__line">
                {line.tag && <span className="n-tag">{line.tag}</span>}
                <span>{line.name}</span>
              </span>
              {line.prices.map((p, i) => (
                <span key={i} className={cell(i, !isPrice(p) ? 'is-none' : i === line.low ? 'is-low' : '')}>
                  {p ?? '–'}
                </span>
              ))}
            </div>
          ))}
          <div className="n-level__row n-level__row--total" style={{ gridTemplateColumns: cols }}>
            <span>Total</span>
            {panel.totals.map((t, i) => (
              <span key={i} className={cell(i, !isPrice(t) ? 'is-none' : '')}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="n-legend" aria-hidden="true">
        <span>
          <b>Bold green</b> is the lowest price on the line
        </span>
        <span>
          <i />
          Selected vendor
        </span>
      </div>
    </div>
  );
}

function ListCard({ panel }: { panel: ListPanel }) {
  return (
    <div className="n-window n-window--flat" role="img" aria-label={`Example: ${panel.title}`}>
      <div aria-hidden="true">
        <div className="n-list__title">{panel.title}</div>
        {panel.rows.map(([a, b]) => (
          <div key={a} className="n-list__row">
            <span>{a}</span>
            <span>{b}</span>
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

export function PanelMock({ panel }: { panel: Panel }) {
  return panel.kind === 'level' ? <LevelGrid panel={panel} /> : <ListCard panel={panel} />;
}
