export type ProofPoint = { title: string; body: string };

export type ProofTopic = {
  slug: string;
  navLabel: string;       // dropdown label (Pet, Family, Life, Mess, Everything)
  label: string;          // "Pet Proof"
  eyebrow: string;
  h1: string;
  hero: string;
  heroAlt: string;
  intro: string;
  // "How our floors account for it"
  howHeading: string;
  how: ProofPoint[];
  // Headline stat strip
  stats: { value: string; label: string }[];
  bestFloors: string[];
  gallery: { src: string; alt: string }[];
  ctaHeadline: string;
  ctaSubline: string;
  metaTitle: string;
  metaDescription: string;
  faqs: { q: string; a: string }[];
};

export const proofTopics: ProofTopic[] = [
  {
    slug: 'pet',
    navLabel: 'Pet Proof',
    label: 'Pet Proof',
    eyebrow: 'Pet Proof Flooring · OKC',
    h1: 'Pet-Proof Flooring Built For Claws, Zoomies & Accidents',
    hero: '/images/photos/laminate/dogonlaminate.webp',
    heroAlt: 'Family dog resting on scratch-resistant pet-proof flooring in an Oklahoma City home',
    intro:
      "Dogs sprint. Cats land claws-first. Bowls overflow and accidents happen at 2 a.m. Our pet-proof floors are engineered for every bit of it - scratch-resistant wear layers, 100% waterproof cores, and stain-proof surfaces that wipe clean and never hold an odor. Beautiful floors your pets can actually live on.",
    howHeading: 'How Our Floors Stand Up To Pets',
    how: [
      { title: 'Scratch-resistant wear layers', body: 'Rigid SPC vinyl and AC4+ laminate are rated for claws, dew-claws and the hardest zoomies - so daily traffic never dulls the finish.' },
      { title: '100% waterproof core', body: 'Accidents, knocked-over water bowls and bath splashes sit on top - they never soak in, swell the planks, or reach the subfloor.' },
      { title: 'Stain- & odor-proof surface', body: 'The sealed wear layer wipes clean with a damp cloth and never traps pet odor - no warping, no yellow stains, no lingering smell.' },
      { title: 'Pet-rated warranties', body: 'Many of our in-stock vinyl and carpet lines carry lifetime pet stain, scratch and odor warranties in writing.' },
    ],
    stats: [
      { value: '100%', label: 'Waterproof core' },
      { value: 'Lifetime', label: 'Pet stain warranty' },
      { value: '24hr', label: 'Install turnaround' },
    ],
    bestFloors: ['Click-Lock Vinyl (LVP)', 'Glue-Down Vinyl (LVT)', 'Tile', 'Pet-Proof Carpet'],
    gallery: [
      { src: '/images/photos/lvp/luxuryvinly.webp', alt: 'Waterproof luxury vinyl plank in a pet-friendly OKC living room' },
      { src: '/images/photos/lvp/vinyl.webp', alt: 'Scratch-resistant vinyl flooring in a sun-lit Oklahoma City home' },
      { src: '/images/photos/hardwood/closeuphardwood.webp', alt: 'Close-up of a durable wear layer that resists pet claws' },
    ],
    ctaHeadline: 'Floors Your Pets Can Actually Live On.',
    ctaSubline:
      "We bring scratch- and stain-proof samples to your home, match them to your light and trim, then handle furniture, install and cleanup. Lifetime warranties, 0% APR for 24 months, installed in as little as 24 hours.",
    metaTitle: 'Pet-Proof Flooring Oklahoma City | Scratch & Stain Proof | Floors To You OKC',
    metaDescription:
      'Pet-proof flooring installed across Oklahoma City - scratch-resistant, 100% waterproof, odor- and stain-proof with lifetime pet warranties. Free in-home estimate. 0% financing.',
    faqs: [
      { q: 'What is the most pet-proof flooring?', a: 'Rigid-core click-lock vinyl (SPC) is the most pet-proof floor we install - it is 100% waterproof, scratch- and dent-resistant, and wipes clean. Tile and certain pet-rated carpets are close seconds.' },
      { q: 'Will dog claws scratch the floor?', a: 'No. Our SPC vinyl and AC4+ laminate carry commercial-grade wear layers rated to shrug off dog and cat claws, so everyday zoomies never dull the finish.' },
      { q: 'Does pet-proof flooring hold odor?', a: 'No. The sealed, waterproof wear layer never absorbs liquid, so urine and odor sit on top and wipe away completely - nothing soaks into the plank or subfloor.' },
    ],
  },
  {
    slug: 'family',
    navLabel: 'Family Proof',
    label: 'Family Proof',
    eyebrow: 'Family Proof Flooring · OKC',
    h1: 'Family-Proof Flooring For Dropped Toys, Juice Boxes & Daily Traffic',
    hero: '/images/photos/carpet/babysfeetoncarpet.webp',
    heroAlt: "A baby's feet on soft, stain-resistant family-proof carpet in an Oklahoma City home",
    intro:
      "Real family life is loud, sticky and constant. Dropped toys, juice boxes, snack crumbs and a hallway that never stops moving. Our family-proof floors are built to take it - soft underfoot where it matters, stain- and dent-resistant everywhere else, and easy enough to clean that the mess never wins.",
    howHeading: 'How Our Floors Handle Real Family Life',
    how: [
      { title: 'Dent- & impact-resistant', body: 'Dropped toys, dragged chairs and toddler tumbles bounce off rigid-core vinyl and AC4-rated laminate without leaving a mark.' },
      { title: 'Stain-proof against spills', body: 'Juice boxes, markers and snack time wipe clean off sealed surfaces - and our family carpet lines carry lifetime stain warranties.' },
      { title: 'Soft & safe underfoot', body: 'Where kids play and crawl, we pair cushioned carpet and warm-feeling planks that are comfortable, quiet and slip-resistant.' },
      { title: 'Built for nonstop traffic', body: 'Hallways, stairs and living rooms get commercial-grade wear layers, so the busiest paths in the house still look new years later.' },
    ],
    stats: [
      { value: '2,500+', label: 'OKC families served' },
      { value: 'Lifetime', label: 'Stain warranty' },
      { value: 'AC4+', label: 'Wear rating' },
    ],
    bestFloors: ['Click-Lock Vinyl (LVP)', 'Laminate', 'Stain-Proof Carpet', 'Engineered Wood'],
    gallery: [
      { src: '/images/photos/carpet/carpetbasement.webp', alt: 'Cozy carpeted basement family room installed in an OKC home' },
      { src: '/images/photos/hardwood/hardwoodlivingroom.webp', alt: 'Wide-plank engineered wood in a busy Oklahoma City family living room' },
      { src: '/images/photos/laminate/lvp-laminatelivingroom.webp', alt: 'Durable wood-look laminate in an OKC family living room' },
    ],
    ctaHeadline: 'Floors That Survive Everything Your Family Throws At Them.',
    ctaSubline:
      "We bring kid- and family-tested samples to your living room, match them to your home, then handle furniture, install and cleanup. Lifetime warranties, 0% APR for 24 months, installed in as little as 24 hours.",
    metaTitle: 'Family-Proof Flooring Oklahoma City | Kid-Friendly Floors | Floors To You OKC',
    metaDescription:
      'Family-proof flooring installed across Oklahoma City - dent-resistant, stain-proof and soft underfoot for kids and daily traffic. Lifetime warranties. Free in-home estimate.',
    faqs: [
      { q: 'What flooring is best for kids?', a: 'Waterproof click-lock vinyl is the best all-around floor for kids - it is dent-, stain- and scratch-resistant and wipes clean. For bedrooms and playrooms, our stain-proof family carpet adds warmth and a soft landing.' },
      { q: 'Is the flooring safe and non-slip for children?', a: 'Yes. We select textured, slip-resistant wear layers and low-VOC materials, and our carpet options add cushioned, quiet comfort where little ones play.' },
      { q: 'Can it handle juice, markers and snack spills?', a: 'Absolutely. The sealed surfaces wipe clean, and our family carpet lines carry lifetime stain warranties - so everyday spills never leave a mark.' },
    ],
  },
  {
    slug: 'life',
    navLabel: 'Life Proof',
    label: 'Life Proof',
    eyebrow: 'Life Proof Flooring · OKC',
    h1: 'Life-Proof Flooring For Furniture, High Heels & Moving Day',
    hero: '/images/photos/hardwood/hardwoodmodernliving.webp',
    heroAlt: 'Wide-plank life-proof wood flooring in a modern Oklahoma City living room',
    intro:
      "Furniture gets dragged. High heels click across the kitchen. Moving day happens. Sunlight pours in every afternoon. Our life-proof floors are engineered for years of real wear - tough commercial-grade surfaces that resist dents, fading and scuffs, so the floor you fall in love with today still stops people mid-sentence a decade from now.",
    howHeading: 'How Our Floors Keep Looking New',
    how: [
      { title: 'Tough commercial wear layers', body: 'Furniture, stiletto heels and moving day meet wear layers up to 28mil and AC4+ laminate that shrug off the daily grind.' },
      { title: 'Fade- & UV-resistant', body: 'OKC sun pours through the windows - our finishes resist fading and yellowing so the color stays true season after season.' },
      { title: 'Dent- & scuff-resistant', body: 'Rigid SPC cores and refinishable engineered wood absorb impact and hide everyday scuffs across the busiest rooms.' },
      { title: 'Lifetime installation warranty', body: 'Every install is backed in writing by our 100% product and labor guarantee - your floor is protected for life.' },
    ],
    stats: [
      { value: '28mil', label: 'Wear layers available' },
      { value: 'Lifetime', label: 'Installation warranty' },
      { value: 'UV', label: 'Fade resistant' },
    ],
    bestFloors: ['Engineered Wood', 'Click-Lock Vinyl (LVP)', 'Glue-Down Vinyl (LVT)', 'Tile'],
    gallery: [
      { src: '/images/photos/hardwood/herringbonefloors.webp', alt: 'Herringbone wood flooring built to last in an Oklahoma City home' },
      { src: '/images/photos/rooms/staircase.webp', alt: 'Durable stair install that handles years of daily traffic in OKC' },
      { src: '/images/photos/lvp/luxuryvinly.webp', alt: 'Scuff- and fade-resistant luxury vinyl in a modern OKC living room' },
    ],
    ctaHeadline: 'Floors That Still Stop People Mid-Sentence In 10 Years.',
    ctaSubline:
      "We bring wear-tested samples to your home, match them to your light and trim, then handle furniture, install and cleanup. Lifetime warranty, 0% APR for 24 months, installed in as little as 24 hours.",
    metaTitle: 'Life-Proof Flooring Oklahoma City | Dent & Fade Resistant | Floors To You OKC',
    metaDescription:
      'Life-proof flooring installed across Oklahoma City - dent-, scuff- and fade-resistant with commercial-grade wear layers and a lifetime installation warranty. Free in-home estimate.',
    faqs: [
      { q: 'What does life-proof flooring mean?', a: 'Life-proof flooring is built to survive everyday living - furniture, high heels, moving day, sunlight and constant traffic - with tough, fade-resistant wear layers that keep the floor looking new for years.' },
      { q: 'Will furniture dent the floor?', a: 'No. Rigid-core vinyl and AC4+ laminate resist denting, and we recommend felt pads under heavy furniture to keep the wear layer factory-fresh.' },
      { q: 'Does sunlight fade the flooring?', a: 'Our finishes are UV- and fade-resistant, so the Oklahoma sun pouring through your windows will not yellow or wash out the color over time.' },
    ],
  },
  {
    slug: 'mess',
    navLabel: 'Mess Proof',
    label: 'Mess Proof',
    eyebrow: 'Mess Proof Flooring · OKC',
    h1: 'Mess-Proof Flooring For Wine, Mud & Everything That Spills',
    hero: '/images/photos/rooms/kitchenfloors.webp',
    heroAlt: 'Wipe-clean mess-proof kitchen flooring in an Oklahoma City home',
    intro:
      "Wine tips. Markers escape. Muddy shoes track straight through the kitchen. Our mess-proof floors are 100% waterproof and stain-proof - sealed, wipe-clean surfaces that don't soak, don't stain and don't hold a mark. Clean up in seconds and get on with your day.",
    howHeading: 'How Our Floors Beat Every Mess',
    how: [
      { title: '100% waterproof', body: 'Spills, mopping and overflowing dishwashers sit on the surface - they never soak in, swell the planks or reach the subfloor.' },
      { title: 'Stain-proof surface', body: 'Wine, coffee, markers and mud wipe clean off the sealed wear layer and never leave a shadow behind.' },
      { title: 'Wipe-clean, no sealing', body: 'A damp mop is all it takes - no waxing, no polishing, no re-sealing. The finish is built in for the life of the floor.' },
      { title: 'Grout & seam protection', body: 'On tile we color-seal every grout line; on glue-down vinyl the bonded seams lock moisture out completely.' },
    ],
    stats: [
      { value: '100%', label: 'Waterproof' },
      { value: '0', label: 'Sealing required' },
      { value: 'Seconds', label: 'To wipe clean' },
    ],
    bestFloors: ['Click-Lock Vinyl (LVP)', 'Glue-Down Vinyl (LVT)', 'Tile', 'Laminate'],
    gallery: [
      { src: '/images/photos/cleaning/hardsyurfacefloorcleaning.webp', alt: 'Wipe-clean hard-surface flooring being mopped in an OKC home' },
      { src: '/images/photos/lvp/lvpkitchen.webp', alt: 'Waterproof vinyl plank in a busy Oklahoma City kitchen' },
      { src: '/images/photos/laminate/lamiantekitchen.webp', alt: 'Stain-resistant wood-look laminate in an OKC kitchen' },
    ],
    ctaHeadline: 'Spill It, Track It, Wipe It Clean.',
    ctaSubline:
      "We bring 100% waterproof, stain-proof samples to your home, match them to your space, then handle furniture, install and cleanup. Lifetime warranty, 0% APR for 24 months, installed in as little as 24 hours.",
    metaTitle: 'Mess-Proof Flooring Oklahoma City | Waterproof & Stain-Proof | Floors To You OKC',
    metaDescription:
      'Mess-proof flooring installed across Oklahoma City - 100% waterproof, stain-proof and wipe-clean against wine, mud and spills. No sealing required. Free in-home estimate.',
    faqs: [
      { q: 'What is the most mess-proof flooring?', a: 'Waterproof vinyl (LVP and LVT) and porcelain tile are the most mess-proof floors we install - both are 100% waterproof, stain-proof and wipe clean with a damp mop.' },
      { q: 'Will red wine or coffee stain the floor?', a: 'No. The sealed wear layer never absorbs liquid, so wine, coffee and juice wipe up completely and leave no shadow behind.' },
      { q: 'Do I need to wax or re-seal it?', a: 'Never. Our waterproof vinyl and laminate are finished for life - just sweep and damp-mop. On tile, we color-seal the grout so it stays clean too.' },
    ],
  },
  {
    slug: 'everything',
    navLabel: 'Everything Proof',
    label: 'Everything Proof',
    eyebrow: 'Everything Proof Flooring · OKC',
    h1: 'Everything-Proof Flooring: Pets, Kids, Water, Wear & Mess',
    hero: '/images/photos/carpet/collageofhardwoodlvptileandcarpet.webp',
    heroAlt: 'Collage of hardwood, vinyl, tile and carpet flooring options from Floors To You OKC',
    intro:
      "Pets. Kids. Water. Furniture. Wine. Moving day. Why protect against one when you can have it all? Everything-proof flooring rolls pet-proof, family-proof, life-proof and mess-proof into a single floor - 100% waterproof, scratch- and dent-resistant, stain-proof and backed for life. One floor that handles whatever Oklahoma living throws at it.",
    howHeading: 'How One Floor Handles It All',
    how: [
      { title: 'Pet proof', body: 'Scratch-resistant wear layers and waterproof cores shrug off claws, zoomies and accidents - and never hold an odor.' },
      { title: 'Family proof', body: 'Dent- and stain-resistant against dropped toys, juice boxes and the busiest hallway in the house.' },
      { title: 'Life proof', body: 'Furniture, high heels, moving day and OKC sunlight meet fade- and scuff-resistant commercial-grade finishes.' },
      { title: 'Mess proof', body: '100% waterproof and stain-proof - wine, mud and spills wipe clean in seconds with no sealing, ever.' },
    ],
    stats: [
      { value: '4-in-1', label: 'Pet · Family · Life · Mess' },
      { value: '100%', label: 'Waterproof' },
      { value: 'Lifetime', label: 'Warranty in writing' },
    ],
    bestFloors: ['Click-Lock Vinyl (LVP)', 'Glue-Down Vinyl (LVT)', 'Tile', 'Engineered Wood'],
    gallery: [
      { src: '/images/photos/hardwood/hardwood-full-home.webp', alt: 'Whole-home flooring that handles pets, kids and daily life in an OKC home' },
      { src: '/images/photos/tile/tileluxuryhome.webp', alt: 'Waterproof, stain-proof tile in a luxury Oklahoma City home' },
      { src: '/images/photos/lvp/vinyl.webp', alt: 'Everything-proof waterproof vinyl flooring in a sun-lit OKC home' },
    ],
    ctaHeadline: 'One Floor. Pet-Proof, Family-Proof, Life-Proof & Mess-Proof.',
    ctaSubline:
      "We bring the showroom to your living room and match an everything-proof floor to your home, then handle furniture, install and cleanup. Lifetime warranty, 0% APR for 24 months, installed in as little as 24 hours.",
    metaTitle: 'Everything-Proof Flooring Oklahoma City | Pet, Kid & Waterproof | Floors To You OKC',
    metaDescription:
      'Everything-proof flooring installed across Oklahoma City - pet-proof, family-proof, life-proof and mess-proof in one 100% waterproof floor backed for life. Free in-home estimate.',
    faqs: [
      { q: 'Is there really one floor that does it all?', a: 'Yes. Waterproof rigid-core vinyl (SPC) is pet-, family-, life- and mess-proof in a single floor - 100% waterproof, scratch- and dent-resistant, stain-proof and backed by lifetime warranties.' },
      { q: 'Which everything-proof floor should I choose?', a: 'For most OKC homes we recommend click-lock vinyl plank for whole-home coverage, or porcelain tile in wet areas. We bring samples to your home and match the right one to your space at no charge.' },
      { q: 'Is it really backed for life?', a: 'Yes. Our everything-proof lines carry lifetime waterproof, pet and stain warranties, and every install is covered by our 100% product and labor guarantee in writing.' },
    ],
  },
];

export const getProofTopic = (slug: string) => proofTopics.find((t) => t.slug === slug);
