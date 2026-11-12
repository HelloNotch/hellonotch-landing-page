/**
 * Content for the buyer type pages ("Notch for ...") and the homepage switcher.
 * Add a buyer type by adding an entry here and its slug to scripts/postbuild.mjs.
 * Table rows are example data, not customer data.
 */

export type DotColor = 'amber' | 'blue' | 'slate' | 'violet' | 'pink';

export const DOTS: Record<DotColor, string> = {
  amber: '#b45309',
  blue: '#2563eb',
  slate: '#64748b',
  violet: '#7c3aed',
  pink: '#db2777',
};

export type TableRow = {
  tag: string;
  qty: string;
  cat: string;
  dot: DotColor;
  name: string;
  extra: string[];
};

export type ProductTable = {
  project: string;
  count?: string;
  badge?: string;
  /** Tag, Qty, Category, Name, then one heading per extra column */
  columns: string[];
  groups: { name?: string; count?: string; rows: TableRow[] }[];
  /** Number of leading rows shown as selected, with the action bar */
  selected?: number;
  selectedLabel?: string;
};

export type LevelPanel = {
  kind: 'level';
  title: string;
  sub: string;
  lineLabel: string;
  vendors: string[];
  picked: number;
  /** null = no price submitted, string 'No bid' etc. shown muted */
  lines: { tag?: string; qty?: string; name: string; prices: (string | null)[]; low: number; outlier?: number }[];
  totals: string[];
};

export type ListPanel = {
  kind: 'list';
  title: string;
  rows: [string, string][];
  note?: { text: string; action?: string; tone?: 'peach' | 'caution' };
};

export type ImportPanel = {
  kind: 'import';
  title: string;
  file: string;
  meta: string;
  steps: string[];
  done: string;
};

export type Panel = LevelPanel | ListPanel | ImportPanel;

export type Buyer = {
  slug: string;
  /** Short label used on the homepage cards */
  tab: string;
  name: string;
  navBlurb: string;
  card: { kicker: string; text: string };
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  headline: string;
  lead: string;
  table: ProductTable;
  tableCaption: string;
  pointsTitle: string;
  points: { title: string; text: string }[];
  features: { title: string; text: string; panel: Panel }[];
  showQuote: boolean;
  cta: { title: string; text: string };
};

const r = (tag: string, qty: string, cat: string, dot: DotColor, name: string, ...extra: string[]): TableRow => ({
  tag,
  qty,
  cat,
  dot,
  name,
  extra,
});

const DASH = '–';

const hotelLevel: LevelPanel = {
  kind: 'level',
  title: 'Bid leveling',
  sub: 'Guestroom casegoods, 3 responses',
  lineLabel: 'Product',
  vendors: ['Harbor Contract', 'Northline', 'Kestrel and Co.'],
  picked: 1,
  lines: [
    { tag: 'K-200', qty: '120', name: 'King headboard', prices: ['$1,480', '$1,395', '$1,540'], low: 1 },
    { tag: 'K-201', qty: '120', name: 'King nightstands, pair', prices: ['$920', '$905', '$870'], low: 2 },
    { tag: 'K-211', qty: '8', name: 'Accessible king platform bed', prices: ['$2,210', '$2,040', null], low: 1 },
    { tag: 'X-202', qty: '64', name: 'Cocktail table', prices: ['$640', '$665', '$710'], low: 0 },
    { tag: 'Q-200', qty: '56', name: 'Queen headboards, pair', prices: ['$2,380', '$2,190', '$2,450'], low: 1 },
  ],
  totals: ['$7,630', '$7,195', 'Partial, 4 of 5'],
};

export const homeLevel = hotelLevel;

export const buyers: Buyer[] = [
  {
    slug: 'design-and-purchasing',
    tab: 'Design and purchasing',
    name: 'Design and purchasing teams',
    navBlurb: 'FF&E and OS&E for hotels, multifamily and branded spaces',
    card: {
      kicker: 'Spec book to purchase order',
      text: 'Notch helps design and purchasing teams turn a spec book into quote requests, compare vendor pricing line by line, and track every order through delivery.',
    },
    metaTitle: 'Notch for design and purchasing teams',
    metaDescription:
      'Import a spec book, send quote requests to every vendor at once, compare pricing side by side and track orders through delivery.',
    eyebrow: 'Notch for design and purchasing teams',
    headline: 'Turn spec books into quote requests without manual data entry.',
    lead: 'Notch gives FF&E and OS&E purchasing teams one place to import specs, send quote requests to every vendor at once, compare pricing and track orders through delivery.',
    table: {
      project: 'Downtown PA Hotel',
      count: '18 of 18 items',
      columns: ['Tag', 'Qty', 'Category', 'Product name', 'Specified vendor'],
      selected: 3,
      selectedLabel: '3 products selected',
      groups: [
        {
          rows: [
            r('K-200 CUST', '1 EA', 'Furniture', 'amber', 'King headboard', 'Custom millwork'),
            r('K-201 CUST', '1 PR', 'Furniture', 'amber', 'King nightstands, wall mounted', 'Custom millwork'),
            r('K-211-ACC', '1 EA', 'Furniture', 'amber', 'Accessible king platform bed', 'Custom millwork'),
            r('X-202 CUST', '1 EA', 'Furniture', 'amber', 'Cocktail table, 41 in. wide', 'Open'),
            r('L-105', '2 EA', 'Lighting', 'violet', 'Bedside sconce with reading light', 'As specified'),
            r('F-301', '14 YD', 'Textiles', 'pink', 'Drapery fabric, blackout lined', 'As specified'),
          ],
        },
      ],
    },
    tableCaption: 'A hotel guestroom package, imported from the spec book and ready to go out for quotes.',
    pointsTitle: 'Set up for the way FF&E gets bought.',
    points: [
      {
        title: 'Spec books of any size',
        text: 'Hundreds of pages come in page by page. Every product keeps a link back to the spec page it came from.',
      },
      {
        title: 'Vendors on the same information',
        text: 'When a spec changes, every vendor on the quote request is notified. Nobody prices last week’s version.',
      },
      {
        title: 'Areas and quantities',
        text: 'Quantities break out by area, so guestrooms, corridors and public space can go out together or on their own.',
      },
    ],
    features: [
      {
        title: 'Import a spec book.',
        text: 'Drop in the PDF. Notch sorts the pages, shows you what it plans to import, and has you check three samples before it reads the rest.',
        panel: {
          kind: 'import',
          title: 'New import',
          file: 'Downtown PA Hotel FF&E spec book.pdf',
          meta: '212 pages',
          steps: ['Scanning your spec book', 'Reading spec pages', 'Extracting product details'],
          done: '18 products imported, each linked to its source page.',
        },
      },
      {
        title: 'Compare vendors line by line.',
        text: 'Vendors price each line in their own portal. You see the low number on every line, the gaps, and which totals are partial before you award.',
        panel: hotelLevel,
      },
      {
        title: 'Follow every order to delivery.',
        text: 'Awarded lines become orders. Each one carries a status your whole team can see, from issued to received.',
        panel: {
          kind: 'list',
          title: 'Orders',
          rows: [
            ['Northline, casegoods', 'Acknowledged'],
            ['Harbor Contract, seating', 'In transit'],
            ['Kestrel and Co., lighting', 'Partial delivery'],
            ['Alder Textiles, drapery', 'Received'],
          ],
        },
      },
    ],
    showQuote: true,
    cta: {
      title: 'Send us a spec book.',
      text: 'We will import it and walk you through the quote request Notch builds from it.',
    },
  },
  {
    slug: 'homebuilders',
    tab: 'Homebuilders',
    name: 'Homebuilders',
    navBlurb: 'Plans, options and finish levels for production builders',
    card: {
      kicker: 'Plan set to awarded pricing',
      text: 'Notch helps homebuilders price every plan, option and finish level with their trades and suppliers, then send awarded prices to their ERP or accounting system.',
    },
    metaTitle: 'Notch for homebuilders',
    metaDescription:
      'Send plans to trades and suppliers, compare what comes back option by option, and hand awarded prices to your ERP or accounting system.',
    eyebrow: 'Notch for homebuilders',
    headline: 'Price every plan, option and finish level in one place.',
    lead: 'Notch gives your purchasing team one place to send plans to trades and suppliers, compare what comes back, and hand awarded prices to your ERP or accounting system.',
    table: {
      project: 'Plan 5414',
      badge: 'Grouped by option',
      columns: ['Cost code', 'Qty', 'Category', 'Item', 'Classic', 'Select', 'Estate'],
      groups: [
        {
          name: 'Base plan',
          count: '5 items',
          rows: [
            r('0180', '1 LS', 'Labor', 'slate', 'Plumbing rough', DASH, DASH, DASH),
            r('0181', '1 LS', 'Labor', 'slate', 'Plumbing top out', DASH, DASH, DASH),
            r('FX-110', '4 EA', 'Fixtures', 'blue', 'Lavatory faucet', 'Centerset, chrome', 'Widespread, nickel', 'Widespread, brass'),
            r('FX-204', '1 EA', 'Fixtures', 'blue', 'Kitchen faucet', 'Pull down, chrome', 'Pull down, steel', 'Bridge, brass'),
            r('FX-310', '2 EA', 'Fixtures', 'blue', 'Tub and shower trim', 'Single handle', 'Pressure balance', 'Thermostatic'),
          ],
        },
        {
          name: 'Opt. bath 5',
          count: '3 items',
          rows: [
            r('0180', '1 LS', 'Labor', 'slate', 'Plumbing rough', DASH, DASH, DASH),
            r('FX-110', '1 EA', 'Fixtures', 'blue', 'Lavatory faucet', 'Centerset, chrome', 'Widespread, nickel', 'Widespread, brass'),
            r('FX-310', '1 EA', 'Fixtures', 'blue', 'Tub and shower trim', 'Single handle', 'Pressure balance', 'Thermostatic'),
          ],
        },
      ],
    },
    tableCaption:
      'One plan with its options. Labor is one line per option, fixtures carry a count and a product for each finish level.',
    pointsTitle: 'Set up the way a production builder buys.',
    points: [
      {
        title: 'Plans and options',
        text: 'One project per plan. Each structural option is its own group of lines, so a trade prices the base house and every option separately.',
      },
      {
        title: 'Finish levels',
        text: 'Your series live in a catalog. Set the fixture for each level once, and every plan picks it up with the right count.',
      },
      {
        title: 'Trades and suppliers',
        text: 'Labor goes to your trades by cost code. Fixtures and materials go to suppliers. Both answer in the same place.',
      },
    ],
    features: [
      {
        title: 'Start from the plan set.',
        text: 'Drop in the plan PDF. Notch sorts the sheets, finds the options and counts the fixtures on each one. You check three samples before the full count runs.',
        panel: {
          kind: 'list',
          title: 'Options found',
          rows: [
            ['Base plan', 'Sheets 2 to 9'],
            ['Opt. bath 5', 'Sheet 14'],
            ['Opt. media room', 'Sheet 17'],
            ['Opt. in-law suite', 'Sheets 21 to 23'],
          ],
          note: { text: 'Sample 1 of 3. Primary bath: 2 lavatory faucets counted.', action: 'This sheet is right' },
        },
      },
      {
        title: 'Compare trades option by option.',
        text: 'Each trade prices the base plan and every option on its own line, or marks a line no bid with a reason. You see the low number per line and which totals are partial before you award.',
        panel: {
          kind: 'level',
          title: 'Bid leveling',
          sub: 'Plumbing labor, 2 responses',
          lineLabel: 'Line',
          vendors: ['Summit Plumbing', 'Ridgeway Mechanical'],
          picked: 0,
          lines: [
            { name: 'Rough, base plan', prices: ['$6,850', '$7,120'], low: 0 },
            { name: 'Top out, base plan', prices: ['$3,410', '$3,290'], low: 1 },
            { name: 'Rough, opt. bath 5', prices: ['$1,180', '$1,325'], low: 0 },
            { name: 'Rough, opt. media room', prices: ['No bid', '$640'], low: 1 },
          ],
          totals: ['Partial, 3 of 4', '$12,375'],
        },
      },
      {
        title: 'Hand awarded prices to your ERP.',
        text: 'Export awarded labor by option and cost code, and the fixture takeoff for each finish level, in the upload format your ERP or accounting system expects.',
        panel: {
          kind: 'list',
          title: 'Export for your ERP',
          rows: [
            ['Base contract, by option and cost code', '16 lines'],
            ['Takeoff, Classic', '26 items'],
            ['Takeoff, Select', '26 items'],
            ['Takeoff, Estate', '26 items'],
          ],
          note: { text: '2 fixtures still need an item number before upload.', tone: 'caution' },
        },
      },
    ],
    showQuote: false,
    cta: {
      title: 'Send us one plan.',
      text: 'We will show you the takeoff and the quote request Notch builds from it, on a plan you already know.',
    },
  },
  {
    slug: 'construction',
    tab: 'Construction',
    name: 'Construction',
    navBlurb: 'Scope by trade, subcontractor quotes and bid day',
    card: {
      kicker: 'Bid day without the scramble',
      text: 'Notch helps general contractors break plans and specs into scope by trade, collect subcontractor quotes, and see what each one covers and leaves out.',
    },
    metaTitle: 'Notch for construction',
    metaDescription:
      'Break plans and specs into scope by trade, collect subcontractor and vendor quotes in one place, and see what each one covers and leaves out.',
    eyebrow: 'Notch for construction',
    headline: 'Bid day without the scramble.',
    lead: 'Notch breaks plans and specs into scope by trade, collects subcontractor and vendor quotes in one place, and shows what each one covers and leaves out.',
    table: {
      project: 'Municipal Services Building',
      count: '109 of 109 items',
      badge: 'Grouped by cost code',
      columns: ['Section', 'Qty', 'Division', 'Scope', 'Trade package'],
      selected: 2,
      selectedLabel: '2 lines selected',
      groups: [
        {
          rows: [
            r('08 41 13', '1 LS', 'Openings', 'blue', 'Aluminum framed entrances and storefronts', 'Glazing'),
            r('08 80 00', '1 LS', 'Openings', 'blue', 'Glazing, insulated and tempered units', 'Glazing'),
            r('05 50 00', '1 LS', 'Metals', 'slate', 'Metal fabrications, stairs and railings', 'Misc. metals'),
            r('09 51 13', '1 LS', 'Finishes', 'violet', 'Acoustical panel ceilings', 'Ceilings'),
            r('10 14 00', '1 LS', 'Specialties', 'amber', 'Interior and exterior signage', 'Signage'),
            r('12 24 13', '1 LS', 'Furnishings', 'pink', 'Roller window shades', 'Window treatments'),
          ],
        },
      ],
    },
    tableCaption: 'Scope lines pulled from the drawings and specs, grouped by cost code and ready to send by trade.',
    pointsTitle: 'Set up for how a job gets bought out.',
    points: [
      {
        title: 'Scope by cost code',
        text: 'Lines carry their spec section and group by cost code. Use CSI MasterFormat or the code set your company already runs.',
      },
      {
        title: 'Every bidder on the same documents',
        text: 'Drawings, specs and addenda ride with the quote request. When something changes, every invited bidder is notified.',
      },
      {
        title: 'Owner purchases too',
        text: 'Signage, furniture, equipment and other direct buys go out the same way as trade packages, in the same project.',
      },
    ],
    features: [
      {
        title: 'Start from the drawings and specs.',
        text: 'Drop in the bid set. Notch sorts the sheets and spec sections, shows you what it plans to pull, and has you check three samples before it reads the rest.',
        panel: {
          kind: 'list',
          title: 'Import plan',
          rows: [
            ['Specifications, Divisions 05 to 12', 'Import as scope lines'],
            ['Architectural sheets', 'Import as scope lines'],
            ['Details and schedules', 'Save to project documents'],
            ['Cover and index', 'Skip'],
          ],
          note: { text: 'Sample 1 of 3. 08 41 13, storefront at main entry.', action: 'This sheet is right' },
        },
      },
      {
        title: 'See who covered what.',
        text: 'Every bidder answers line by line, with a price or a no bid and the reason. Gaps in a number show up before bid day, not after award.',
        panel: {
          kind: 'level',
          title: 'Bid leveling',
          sub: 'Glazing package, 3 responses',
          lineLabel: 'Scope',
          vendors: ['Clearline Glass', 'Atlas Glazing', 'Beacon Storefront'],
          picked: 1,
          lines: [
            { tag: '08 41 13', name: 'Entrances and storefronts', prices: ['$184,200', '$176,900', '$181,450'], low: 1 },
            { tag: '08 44 13', name: 'Glazed aluminum curtain wall', prices: ['$412,000', '$398,500', 'No bid'], low: 1 },
            { tag: '08 80 00', name: 'Glazing', prices: ['$96,300', '$101,200', '$94,800'], low: 2 },
            { tag: '08 71 00', name: 'Door hardware', prices: ['No bid', '$58,400', 'No bid'], low: 1 },
          ],
          totals: ['Partial, 3 of 4', '$735,000', 'Partial, 2 of 4'],
        },
      },
      {
        title: 'Send each trade its own package.',
        text: 'Select the lines, pick the bidders, publish. Each trade gets only its scope and the documents behind it, with one deadline.',
        panel: {
          kind: 'list',
          title: 'Bids',
          rows: [
            ['Glazing', '4 lines, 5 invited'],
            ['Misc. metals', '3 lines, 4 invited'],
            ['Ceilings', '2 lines, 3 invited'],
            ['Signage', '1 line, 4 invited'],
          ],
          note: { text: 'Addendum 2 sent to all 16 bidders.' },
        },
      },
    ],
    showQuote: false,
    cta: {
      title: 'Send us one bid set.',
      text: 'We will show you the scope Notch pulls from it and the quote requests ready to go out by trade.',
    },
  },
  {
    slug: 'higher-ed',
    tab: 'Higher ed and public',
    name: 'Higher ed and public institutions',
    navBlurb: 'Competitive furniture and equipment bids with a clear record',
    card: {
      kicker: 'Fair, documented bidding',
      text: 'Notch helps universities and public institutions run competitive furniture and equipment bids, with every vendor on the same information and a clear record behind each award.',
    },
    metaTitle: 'Notch for higher ed and public institutions',
    metaDescription:
      'Run competitive furniture and equipment bids with every vendor on the same information and a clear record behind each award.',
    eyebrow: 'Notch for higher ed and public institutions',
    headline: 'Competitive bids with a clear record behind every award.',
    lead: 'Notch gives university and public sector procurement teams one place to issue a bid, keep every vendor on the same information, and compare responses line by line.',
    table: {
      project: 'Academic Sciences Building',
      count: '64 of 64 items',
      columns: ['Tag', 'Qty', 'Category', 'Product name', 'Area'],
      selected: 3,
      selectedLabel: '3 products selected',
      groups: [
        {
          rows: [
            r('CH-101', '240 EA', 'Furniture', 'amber', 'Task chair, classroom', 'Classrooms'),
            r('TB-204', '36 EA', 'Furniture', 'amber', 'Seminar table, flip top', 'Classrooms'),
            r('MK-402', '24 EA', 'Equipment', 'blue', 'Mobile markerboard', 'Classrooms'),
            r('LB-310', '96 EA', 'Furniture', 'amber', 'Lab stool, height adjustable', 'Teaching labs'),
            r('LS-120', '18 EA', 'Furniture', 'amber', 'Lounge seating, two seat', 'Commons'),
            r('AC-015', '12 EA', 'Accessories', 'slate', 'Waste and recycling station', 'Commons'),
          ],
        },
      ],
    },
    tableCaption: 'A furniture package for a new academic building, organized by area for a competitive bid.',
    pointsTitle: 'Set up for public procurement.',
    points: [
      {
        title: 'Every vendor, same information',
        text: 'Spec changes and addenda reach every invited vendor at the same time, through the same portal.',
      },
      {
        title: 'Substitutions in the open',
        text: 'A vendor can propose a substitution on a line. You see it next to the specified product, not buried in an attachment.',
      },
      {
        title: 'A record of the award',
        text: 'Invitations, responses and awards are recorded with who did what and when, ready for the file.',
      },
    ],
    features: [
      {
        title: 'Build the bid from the spec package.',
        text: 'Drop in the designer’s spec package. Notch reads it page by page and builds the product list, with the source page behind every line.',
        panel: {
          kind: 'list',
          title: 'Import plan',
          rows: [
            ['Product spec pages', 'Import as products'],
            ['Furniture plans', 'Save to project documents'],
            ['General conditions', 'Save to project documents'],
            ['Cover and index', 'Skip'],
          ],
          note: { text: 'Sample 1 of 3. CH-101 Task chair, qty 240.', action: 'This page is right' },
        },
      },
      {
        title: 'Level responses line by line.',
        text: 'Vendors enter pricing in a standard format, so responses line up without anyone rebuilding them. Low numbers and gaps are visible at a glance.',
        panel: {
          kind: 'level',
          title: 'Bid leveling',
          sub: 'Classroom furniture, 3 responses',
          lineLabel: 'Product',
          vendors: ['Campus Interiors', 'Meridian Contract', 'Fieldhouse Supply'],
          picked: 0,
          lines: [
            { tag: 'CH-101', qty: '240', name: 'Task chair, classroom', prices: ['$318', '$342', '$329'], low: 0 },
            { tag: 'TB-204', qty: '48', name: 'Seminar table, flip top', prices: ['$890', '$845', '$910'], low: 1 },
            { tag: 'MK-402', qty: '36', name: 'Mobile markerboard', prices: ['$412', '$455', null], low: 0 },
            { tag: 'LB-310', qty: '60', name: 'Lab stool, height adjustable', prices: ['$264', '$281', '$259'], low: 2 },
          ],
          totals: ['$143,592', '$150,396', 'Partial, 3 of 4'],
        },
      },
      {
        title: 'Award with the record attached.',
        text: 'Award by line or by vendor. Awarded and not awarded vendors are notified from Notch, and the activity behind the decision stays with the bid.',
        panel: {
          kind: 'list',
          title: 'Bid activity',
          rows: [
            ['Bid published', '6 vendors invited'],
            ['Addendum 1 sent', 'All 6 vendors'],
            ['Responses received', '5 of 6'],
            ['Awarded', 'Campus Interiors, 41 lines'],
          ],
        },
      },
    ],
    showQuote: true,
    cta: {
      title: 'Send us a recent bid package.',
      text: 'We will show you how it runs in Notch, from the spec package to the leveled responses.',
    },
  },
];

export const buyerBySlug = (slug: string | undefined) => buyers.find((b) => b.slug === slug);
