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
  lines: { tag?: string; qty?: string; name: string; prices: (string | null)[]; low: number; outlier?: number; sub?: number }[];
  /** Open note card on one cell */
  callout?: { line: number; vendor: number; status: string; note: string };
  totals: string[];
};

export type ListPanel = {
  kind: 'list';
  title: string;
  /** label, detail, optional status chip */
  rows: [string, string, string?][];
  /** label for the first column, shown above the rows when they carry a status */
  head?: string;
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
    { tag: 'K-211', qty: '8', name: 'Accessible king platform bed', prices: ['$2,210', '$2,040', '$2,120'], low: 1, sub: 2 },
  ],
  totals: ['$4,610', '$4,340', '$4,530'],
  callout: { line: 2, vendor: 2, status: 'Substitution', note: 'Offering our 410 series bed. Same finish, ships 2 weeks sooner.' },
};

export const homeLevel = hotelLevel;

/** Products table with rows selected and the bulk action bar showing, for the homepage steps. */
export const homeSelectTable: ProductTable = {
  project: 'Downtown PA Hotel',
  count: '18 of 18 items',
  columns: ['Tag', 'Qty', 'Category', 'Product name'],
  selected: 3,
  selectedLabel: '3 products selected',
  groups: [
    {
      rows: [
        r('K-200 CUST', '1 EA', 'Furniture', 'amber', 'King headboard'),
        r('K-201 CUST', '1 PR', 'Furniture', 'amber', 'King nightstands, wall mounted'),
        r('K-211-ACC', '1 EA', 'Furniture', 'amber', 'Accessible king platform bed'),
        r('X-202 CUST', '1 EA', 'Furniture', 'amber', 'Cocktail table, 41 in. wide'),
        r('L-105', '2 EA', 'Lighting', 'violet', 'Bedside sconce with reading light'),
        r('F-301', '14 YD', 'Textiles', 'pink', 'Drapery fabric, blackout lined'),
      ],
    },
  ],
};

export const buyers: Buyer[] = [
  {
    slug: 'design-and-purchasing',
    tab: 'Design and purchasing',
    name: 'Design and purchasing',
    navBlurb: 'FF&E and OS&E for hotels, multifamily and branded spaces',
    card: {
      kicker: 'Spec book to purchase order',
      text: 'Notch helps design and purchasing teams turn a spec book into quote requests, compare vendor pricing line by line, and track every order through delivery.',
    },
    metaTitle: 'Notch for design and purchasing',
    metaDescription:
      'Import a spec book, send quote requests to every vendor at once, compare pricing side by side and track orders through delivery.',
    eyebrow: 'Notch for design and purchasing',
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
          head: 'Vendor',
          rows: [
            ['Northline, casegoods', '', 'Acknowledged'],
            ['Harbor Contract, seating', '', 'In transit'],
            ['Kestrel and Co., lighting', '', 'Partial delivery'],
            ['Alder Textiles, drapery', '', 'Received'],
            ['Fieldstone, upholstery', '', 'In transit'],
            ['Summit Supply, artwork and mirrors', '', 'Received'],
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
    navBlurb: 'Trade and supplier pricing for every plan you build',
    card: {
      kicker: 'Plan set to awarded pricing',
      text: 'Notch helps homebuilders send plans to trades and suppliers, compare quotes side by side, and send awarded prices to their ERP or accounting system.',
    },
    metaTitle: 'Notch for homebuilders',
    metaDescription:
      'Send plans to trades and suppliers, compare quotes side by side, and export awarded prices to your ERP or accounting system.',
    eyebrow: 'Notch for homebuilders',
    headline: 'Price every plan with your trades and suppliers in one place.',
    lead: 'Notch gives your purchasing team one place to send plans to trades and suppliers, compare what comes back, and export awarded prices to your ERP or accounting system.',
    table: {
      project: 'Plan 2450',
      count: '6 of 6 items',
      columns: ['Cost code', 'Qty', 'Category', 'Item', 'Specified product'],
      groups: [
        {
          rows: [
            r('0180', '1 LS', 'Labor', 'slate', 'Plumbing rough-in', DASH),
            r('0181', '1 LS', 'Labor', 'slate', 'Plumbing top out and trim', DASH),
            r('FX-110', '4 EA', 'Fixtures', 'blue', 'Lavatory faucet', 'Widespread, brushed nickel'),
            r('FX-204', '1 EA', 'Fixtures', 'blue', 'Kitchen faucet', 'Pull down, stainless'),
            r('FX-310', '2 EA', 'Fixtures', 'blue', 'Tub and shower trim', 'Pressure balance'),
            r('FX-402', '3 EA', 'Fixtures', 'blue', 'Elongated toilet', 'Comfort height, white'),
          ],
        },
      ],
    },
    pointsTitle: 'Set up the way homebuilders buy.',
    points: [
      {
        title: 'Organized the way you build',
        text: 'Set up pricing by plan, by community or by job. If you offer options or upgrades, each one can be quoted on its own.',
      },
      {
        title: 'Standard selections',
        text: 'Keep your standard fixtures and finishes in one catalog and reuse them across plans, so you are not rebuilding the list for every house.',
      },
      {
        title: 'Trades and suppliers',
        text: 'Send labor to your trades and materials to your suppliers. Everyone quotes in the same place, on the same information.',
      },
    ],
    features: [
      {
        title: 'Start from the plan set.',
        text: 'Drop in the plan PDF. Notch reads the sheets and builds the list of what needs pricing. You check a few samples before the full import runs.',
        panel: {
          kind: 'import',
          title: 'New import',
          file: 'Plan 2450 construction set.pdf',
          meta: '48 sheets',
          steps: ['Scanning your plan set', 'Reading sheets', 'Building the item list'],
          done: 'Plan imported and ready to send for quotes.',
        },
      },
      {
        title: 'Compare trades line by line.',
        text: 'Each trade prices line by line, or marks a line no bid with a reason. You see the low number on every line and which totals are partial before you award.',
        panel: {
          kind: 'level',
          title: 'Bid leveling',
          sub: 'Plumbing, 2 responses',
          lineLabel: 'Line',
          vendors: ['Summit Plumbing', 'Ridgeway Mechanical'],
          picked: 1,
          lines: [
            { name: 'Plumbing rough-in', prices: ['$6,850', '$7,120'], low: 0 },
            { name: 'Top out and trim', prices: ['$3,410', '$3,290'], low: 1 },
            { name: 'Water heater install', prices: ['$1,180', '$1,325'], low: 0 },
            { name: 'Gas line to range', prices: ['No bid', '$640'], low: 1 },
          ],
          totals: ['Partial, 3 of 4', '$12,375'],
        },
      },
      {
        title: 'Export awarded prices to your ERP.',
        text: 'Export awarded prices by cost code in the upload format your ERP or accounting system expects, so nobody keys them in twice.',
        panel: {
          kind: 'list',
          title: 'Export for your ERP',
          head: 'File',
          rows: [
            ['Awarded labor, by cost code', '16 lines', 'Ready'],
            ['Awarded materials and fixtures', '26 items', 'Needs review'],
            ['Vendor and trade assignments', '9 vendors', 'Ready'],
          ],
          note: { text: '2 items still need an item number before upload.', tone: 'caution' },
        },
      },
    ],
    showQuote: false,
    cta: {
      title: 'Send us one plan.',
      text: 'We will show you the quote request Notch builds from it, on a plan you already know.',
    },
  },
  {
    slug: 'construction',
    tab: 'Construction',
    name: 'Construction',
    navBlurb: 'Scope by trade, subcontractor quotes and bid day',
    card: {
      kicker: 'Bid day without the scramble',
      text: 'Notch helps general contractors break plans and specs into scope by trade, collect quotes for labor and materials, and see what each one covers and leaves out.',
    },
    metaTitle: 'Notch for construction',
    metaDescription:
      'Break plans and specs into scope by trade, collect subcontractor and vendor quotes in one place, and see what each one covers and leaves out.',
    eyebrow: 'Notch for construction',
    headline: 'Bid day without the scramble.',
    lead: 'Notch breaks plans and specs into scope by trade, collects quotes for the work and the materials in one place, and shows what each one covers and leaves out.',
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
        title: 'Scope by CSI code',
        text: 'Every line carries its spec section and groups by CSI code, so each trade gets its own scope.',
      },
      {
        title: 'Every bidder on the same documents',
        text: 'Drawings, specs and addenda are attached to the quote request. When something changes, every invited bidder is notified.',
      },
      {
        title: 'Labor and materials together',
        text: 'A quote request can cover the work, the products, or both. Subcontractor scopes and direct buys like signage, furniture and equipment go out the same way, in the same project.',
      },
    ],
    features: [
      {
        title: 'Start from the drawings and specs.',
        text: 'Drop in the bid set. Notch sorts the sheets and spec sections, shows you what it plans to pull, and has you check three samples before it reads the rest.',
        panel: {
          kind: 'import',
          title: 'New import',
          file: 'Riverside Medical Office bid set.pdf',
          meta: '164 sheets and 38 spec sections',
          steps: ['Scanning your bid set', 'Reading drawings and spec sections', 'Building scope lines by trade'],
          done: 'Bid set imported, with scope grouped by trade.',
        },
      },
      {
        title: 'See who priced what.',
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
          head: 'Bid',
          rows: [
            ['Glazing', '4 lines, 5 invited', 'Review'],
            ['Misc. metals', '3 lines, 4 invited', 'Open'],
            ['Ceilings', '2 lines, 3 invited', 'Open'],
            ['Signage', '1 line, 4 invited', 'Draft'],
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
      text: 'Notch helps universities and public institutions run every bid through one consistent, documented process, with every vendor on the same information and a clear record behind each award.',
    },
    metaTitle: 'Notch for higher ed and public institutions',
    metaDescription:
      'Run every furniture and equipment bid through one consistent, documented process, with every vendor on the same information and a clear record behind each award.',
    eyebrow: 'Notch for higher ed and public institutions',
    headline: 'Run every bid by the book, with the record to show for it.',
    lead: 'Notch gives university and public sector procurement teams one consistent process for every bid: the same steps, the same information to every vendor, and a complete record of each decision. It also cuts most of the manual work out of the bid process.',
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
    pointsTitle: 'Built for procurement that has to hold up to review.',
    points: [
      {
        title: 'Every vendor, same information',
        text: 'Spec changes, addenda and answers reach every invited vendor at the same time, through the same portal.',
      },
      {
        title: 'The same steps on every bid',
        text: 'Every bid moves through the same stages, from invitation to award, with one deadline for every vendor. Nothing gets skipped when the team is busy.',
      },
      {
        title: 'A record of every decision',
        text: 'Invitations, responses, substitutions and awards are recorded with who did what and when, ready when someone asks how an award was made.',
      },
    ],
    features: [
      {
        title: 'Build the bid from the spec package.',
        text: 'Drop in the designer’s spec package. Notch reads it page by page and builds the product list, with the source page behind every line.',
        panel: {
          kind: 'import',
          title: 'New import',
          file: 'Science Hall classroom furniture spec package.pdf',
          meta: '96 pages',
          steps: ['Scanning your spec package', 'Reading spec pages', 'Extracting product details'],
          done: '24 products imported, each linked to its source page.',
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
        title: 'Award, and keep a dated history of the bid.',
        text: 'Award by line or by vendor, and Notch notifies every vendor of the outcome. Each invitation, addendum, response and award is logged with the date and the person who did it.',
        panel: {
          kind: 'list',
          title: 'Bid activity',
          head: 'Activity',
          rows: [
            ['Bid published', '6 vendors invited', 'Sent'],
            ['Addendum 1', 'All 6 vendors', 'Sent'],
            ['Responses', '5 of 6 vendors', 'Received'],
            ['Award', 'Campus Interiors, 41 lines', 'Awarded'],
          ],
        },
      },
    ],
    showQuote: true,
    cta: {
      title: 'Send us a recent bid package.',
      text: 'We will show you how it runs in Notch, from spec book importing to leveled responses.',
    },
  },
];

export const buyerBySlug = (slug: string | undefined) => buyers.find((b) => b.slug === slug);
