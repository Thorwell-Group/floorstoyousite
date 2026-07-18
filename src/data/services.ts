export type Service = {
 slug: string;
 name: string;
 shortName: string;
 category: 'soft' | 'hard';
 hero: string;
 heroAlt: string;
 intro: string;
 benefits: string[];
 bestFor: string[];
 installation: string;
 care: string;
 priceFrom: string;
 warranty: string;
 metaTitle: string;
 metaDescription: string;
 faqs: { q: string; a: string }[];
 gallery: { src: string; alt: string }[];
 installImage: { src: string; alt: string };
};

export const services: Service[] = [
 {
 slug: 'carpet',
 name: 'Carpet Flooring & Installation',
 shortName: 'Carpet',
 category: 'soft',
 hero: '/images/photos/carpet/moderncarpetmatt.webp',
 heroAlt: 'Plush modern carpet installed by Floors To You OKC in an Oklahoma City home',
 intro:
 'Soft, warm, and stain-resistant carpet from the brands Oklahoma homeowners trust. From thick plush bedrooms to durable Berber stairs, our Oklahoma City showroom keeps hundreds of styles in stock for next-day installation.',
 benefits: [
 'Stain-resistant fibers built for Oklahoma family life',
 'Hundreds of in-stock colors and textures',
 'Lifetime pet stain & soil warranties available',
 'Professional pad selection included with every quote',
 'Next-day installation on most in-stock rolls',
 ],
 bestFor: ['Bedrooms', 'Stairs', 'Family rooms', 'Basements', 'Rental properties'],
 installation:
 'Our W-2 installers handle subfloor prep, tack strip, pad, seaming, and stair wrap so your finished room looks built-in - not bolted on. Most whole-home carpet installs finish in one day.',
 care:
 'Vacuum twice a week in traffic lanes, blot spills with cool water, and schedule a deep clean every 12–18 months to protect your warranty.',
 priceFrom: '',
 warranty: 'Lifetime stain + 100% labor guarantee',
 metaTitle: 'Carpet Flooring Oklahoma City | In-Stock Carpet & Install | Floors To You OKC',
 metaDescription:
 'Shop in-stock carpet in Oklahoma City with next-day installation, lifetime stain warranty, and 0% financing. Free in-home estimate.',
 faqs: [
 {
 q: 'How much does carpet installation cost in Oklahoma City?',
 a: 'Carpet pricing depends on the style, fiber, pad selection, and square footage of your home. Book a free in-home measure for a same-day, itemized quote.',
 },
 {
 q: 'Can you install carpet over concrete?',
 a: 'Yes. We use a moisture-blocking pad and tack strip rated for concrete subfloors throughout OKC basements, slab-built homes, and rental units.',
 },
 {
 q: 'Do you offer pet-friendly carpet?',
 a: 'Every in-stock SmartStrand, PetProof, and LifeProof line is built specifically for households with pets, with lifetime stain and odor warranties.',
 },
 ],
 gallery: [
 { src: '/images/photos/carpet/carpet-staircase-okc.webp', alt: 'Curved staircase wrapped in soft neutral carpet by Floors To You OKC in an Oklahoma City home' },
 { src: '/images/photos/carpet/happy-homeowners-carpet-okc.webp', alt: 'Happy Oklahoma City homeowners standing in their newly carpeted living room' },
 { src: '/images/photos/carpet/carpet-bedroom-plush-okc.webp', alt: 'Plush new bedroom carpet installed in an Oklahoma City home' },
 { src: '/images/photos/carpet/carpet-bonus-room-okc.webp', alt: 'Freshly carpeted upstairs bonus room in an OKC home' },
 { src: '/images/photos/carpet/carpet-bedroom-blue-okc.webp', alt: 'Soft textured carpet in an Oklahoma City bedroom install' },
 { src: '/images/photos/carpet/carpetselection.webp', alt: 'In-stock carpet sample wall at the Floors To You OKC showroom' },
 ],
 installImage: { src: '/images/photos/carpet/carpet.webp', alt: 'Freshly installed bedroom carpet in an Oklahoma City home' },
 },
 {
 slug: 'engineered-wood',
 name: 'Engineered Wood Flooring & Installation',
 shortName: 'Engineered Wood',
 category: 'hard',
 hero: '/images/photos/hardwood/hardwoodlivingroom.webp',
 heroAlt: 'Wide-plank engineered wood flooring installed in an Oklahoma City living room',
 intro:
 "Real wood top layer, plywood core - built specifically for Oklahoma's swings in humidity. Engineered wood gives you the look and resale value of solid hardwood with the stability needed for slab-built OKC homes and basements.",
 benefits: [
 "Stable plywood core handles Oklahoma's humidity swings",
 'Real oak, hickory, walnut, and maple top layer',
 'Floats, glues, or nail-down - works on any subfloor',
 'Wide planks up to 7.5" in stock',
 'Refinishable up to 3× over the floor’s lifetime',
 ],
 bestFor: ['Living rooms', 'Dining rooms', 'Open-concept main floors', 'Hallways', 'Bedrooms', 'Basements'],
 installation:
 'We float or glue engineered planks over concrete and nail-down over plywood. Acclimation, moisture readings, and expansion gaps are part of every Floors To You OKC install - never an upcharge.',
 care:
 "Sweep daily, damp-mop with a wood-safe cleaner monthly, keep humidity between 35–55%, and add felt pads under furniture to keep your finish factory-fresh.",
 priceFrom: '',
 warranty: 'Up to 50-year finish + lifetime structural',
 metaTitle: 'Engineered Wood Flooring Oklahoma City | Installer | Floors To You OKC',
 metaDescription:
 'Engineered wood floors installed across Oklahoma City. In-stock oak, hickory & walnut, slab-friendly, lifetime structural warranty, 0% financing. Free in-home estimate.',
 faqs: [
 {
 q: 'Why choose engineered wood over solid hardwood in Oklahoma?',
 a: "Engineered wood is the safer pick for OKC slab-built homes and basements because its plywood core resists Oklahoma's humidity swings. You still get a real-wood top layer that looks identical to solid hardwood.",
 },
 {
 q: 'Can engineered wood go in a kitchen?',
 a: 'Yes - engineered wood with a urethane finish handles spills and pet bowls in a typical OKC kitchen for decades. We recommend mats at the sink and refrigerator.',
 },
 {
 q: 'How many times can engineered wood be refinished?',
 a: 'Most quality engineered wood floors can be light-sanded and refinished 2–3 times, depending on the thickness of the wear layer (typically 3–6mm).',
 },
 ],
 gallery: [
 { src: '/images/photos/hardwood/hardwood-kitchen.webp', alt: 'Engineered wood flooring in an Oklahoma City kitchen' },
 { src: '/images/photos/hardwood/hardwood-sunroom.webp', alt: 'Engineered wood flooring in a sun-filled Oklahoma City sunroom' },
 { src: '/images/photos/hardwood/hardwood-staircase-and-living-area.webp', alt: 'Engineered wood staircase and living area install in OKC' },
 ],
 installImage: { src: '/images/photos/hardwood/hardwoodinstall.webp', alt: 'Floors To You OKC installer fitting a wide-plank engineered wood board' },
 },
 {
 slug: 'laminate',
 name: 'Laminate Flooring & Installation',
 shortName: 'Laminate',
 category: 'hard',
 hero: '/images/photos/laminate/laminatebigspace.webp',
 heroAlt: 'Wood-look laminate flooring in an Oklahoma City open-concept living room',
 intro:
 "The realistic look of hardwood at a fraction of the price. Modern laminate is scratch-resistant, AC4+ rated, and locks together over almost any flat subfloor - perfect for OKC families, pets, and rental owners.",
 benefits: [
 'Hyper-realistic wood, stone, and tile visuals',
 'Scratch-, dent-, and fade-resistant wear layer',
 'Floating click-lock - installs in a single day',
 'AC4+ commercial-grade ratings available',
 'Hundreds of in-stock SKUs ready to go home',
 ],
 bestFor: ['Living rooms', 'Bedrooms', 'Hallways', 'Rentals', 'Flip projects'],
 installation:
 'Laminate floats over an attached or rolled underlayment with a 3/8" expansion gap at every wall. Our crews undercut door jambs, transition to existing flooring, and protect baseboards - no shoe-mold needed.',
 care:
 'Sweep often, damp-mop with a laminate-safe cleaner, and avoid steam mops - water sitting at plank seams is the only thing that can damage modern laminate.',
 priceFrom: '',
 warranty: 'Up to 30-year residential wear',
 metaTitle: 'Laminate Flooring Oklahoma City | Scratch-Proof Wood-Look | Floors To You OKC',
 metaDescription:
 'Durable wood-look laminate flooring installed across Oklahoma City. AC4-rated, pet-friendly, in-stock with next-day install. 0% financing. Free in-home estimate.',
 faqs: [
 {
 q: 'Is laminate flooring waterproof?',
 a: 'Most modern laminate is water-resistant for 24–72 hours. For true waterproof performance in bathrooms or laundry rooms, we recommend our vinyl click or vinyl glue lines.',
 },
 {
 q: 'How long does laminate flooring last?',
 a: 'A properly installed AC4 laminate floor will last 20–30 years in a typical Oklahoma City home - backed by manufacturer wear warranties.',
 },
 {
 q: 'Can laminate be installed over tile?',
 a: 'Yes. As long as the tile is flat, intact, and dry, laminate can float right over it with an underlayment - saving you the cost of demo.',
 },
 ],
 gallery: [
 { src: '/images/photos/laminate/laminate-bedroom.webp', alt: 'Modern laminate flooring in an Oklahoma City bedroom' },
 { src: '/images/photos/laminate/lamiantekitchen.webp', alt: 'Wood-look laminate in an OKC kitchen' },
 { src: '/images/photos/laminate/dogonlaminate.webp', alt: 'Family pet on scratch-resistant laminate flooring in an OKC home' },
 ],
 installImage: { src: '/images/photos/laminate/laminateinstall.webp', alt: 'Floors To You OKC installer clicking laminate planks together' },
 },
 {
 slug: 'tile',
 name: 'Tile Flooring & Installation',
 shortName: 'Tile',
 category: 'hard',
 hero: '/images/photos/tile/marbeltilebathroom.webp',
 heroAlt: 'Large-format marble-look porcelain tile in an Oklahoma City bathroom',
 intro:
 "Porcelain, ceramic, and natural stone tile for kitchens, baths, mudrooms, and showers. Our OKC showroom stocks large-format wood-look planks, hex mosaics, and on-trend matte porcelain.",
 benefits: [
 '100% waterproof and stain-resistant surface',
 'Lifetime durability - outlasts the house itself',
 'Radiant-heat compatible for cozy winters',
 'Wood-look, marble-look, and concrete-look options',
 'In-stock 12x24, 24x48, and mosaic sheets',
 ],
 bestFor: ['Bathrooms', 'Showers', 'Kitchens', 'Mudrooms', 'Entryways', 'Sunrooms'],
 installation:
 "We level the subfloor with self-leveling underlayment, set every tile with polymer-modified thinset, and seal grout with a 15-year color-sealer. Showers get a Schluter or RedGard waterproofing membrane standard.",
 care:
 'Sweep, mop with pH-neutral cleaner, and re-seal grout lines every 2–3 years for an as-new look. Avoid bleach and ammonia on natural stone.',
 priceFrom: '',
 warranty: 'Lifetime tile + 5-year installation',
 metaTitle: 'Tile Flooring Oklahoma City | Porcelain & Ceramic Install | Floors To You OKC',
 metaDescription:
 'Porcelain, ceramic & stone tile flooring installed across Oklahoma City. Showers, kitchens & baths. Lifetime tile warranty. 0% financing. Free in-home estimate.',
 faqs: [
 {
 q: 'How long does a tile install take?',
 a: 'A typical OKC bathroom tile install is 2–3 days, including subfloor prep, tile-set, grout cure, and sealer. Larger kitchens or showers run 4–6 days.',
 },
 {
 q: 'Porcelain or ceramic tile - what is the difference?',
 a: 'Porcelain is fired denser and absorbs less than 0.5% water - making it the better choice for showers, exteriors, and high-traffic floors. Ceramic is lighter on the budget for wall tile and low-traffic baths.',
 },
 {
 q: 'Can you install heated tile floors?',
 a: 'Yes. We install Schluter DITRA-HEAT and WarmlyYours under-tile radiant heat for OKC bathrooms, mudrooms, and kitchens.',
 },
 ],
 gallery: [
 { src: '/images/photos/tile/tile.webp', alt: 'Porcelain tile flooring in an Oklahoma City bathroom' },
 { src: '/images/photos/tile/tile1.webp', alt: 'Large-format tile install in an OKC home' },
 { src: '/images/photos/tile/tileluxuryhome.webp', alt: 'Tile flooring in a high-end Oklahoma City home' },
 ],
 installImage: { src: '/images/photos/tile/tileinstaller.webp', alt: 'Floors To You OKC tile installer setting porcelain in an OKC bathroom' },
 },
 {
 slug: 'vinyl-glue',
 name: 'Glue-Down Vinyl Flooring (LVT)',
 shortName: 'Vinyl Glue',
 category: 'hard',
 hero: '/images/photos/lvp/vinyl1.webp',
 heroAlt: 'Glue-down luxury vinyl tile (LVT) installed in an Oklahoma City home',
 intro:
 "Glue-down luxury vinyl tile (LVT) is the thinnest, most stable vinyl on the floor - perfect for kitchens, basements, and high-traffic Oklahoma City commercial spaces where you want zero movement underfoot and a seamless visual.",
 benefits: [
 '100% waterproof - safe in kitchens, baths, basements',
 'Thinnest profile (≈2mm) - best for height-restricted doorways',
 'Glued direct to subfloor - zero movement, hollow-sound-free',
 'Commercial-grade wear layers up to 28mil',
 'Plank, tile, and herringbone patterns in stock',
 ],
 bestFor: ['Kitchens', 'Bathrooms', 'Basements', 'Laundry rooms', 'Mudrooms', 'Light commercial'],
 installation:
 "We level the subfloor with self-leveling underlayment, trowel on the manufacturer-spec adhesive, and roll the planks for full transfer. Most glue-down LVT installs in an OKC home finish in 1–2 days, with full traffic the next morning.",
 care:
 'Sweep, damp-mop with vinyl-safe cleaner, and skip wax or polish - LVT is finished for life. Add felt pads to chair legs to keep wear layers pristine.',
 priceFrom: '',
 warranty: 'Lifetime residential waterproof',
 metaTitle: 'Glue-Down Vinyl (LVT) Oklahoma City | Vinyl Plank Install | Floors To You OKC',
 metaDescription:
 'Glue-down luxury vinyl tile (LVT) installed across Oklahoma City. 100% waterproof, commercial-grade wear, lifetime warranty. 0% financing. Free in-home estimate.',
 faqs: [
 {
 q: 'Glue-down vinyl vs click vinyl - which should I pick?',
 a: 'Choose glue-down vinyl for wet rooms, doorways with tight clearance, light commercial, or anywhere you want zero plank movement. Choose click vinyl for fast whole-home installs over existing floors with minimal subfloor prep.',
 },
 {
 q: 'Is glue-down vinyl truly waterproof?',
 a: 'Yes - the planks are 100% waterproof, and the adhesive bond seals seams against moisture, making this the most water-tight vinyl install we offer.',
 },
 {
 q: 'How long does the glue need to cure?',
 a: 'Most modern pressure-sensitive adhesives hit full cure in 24 hours. We have you walking on the floor that evening and rolling furniture back the next day.',
 },
 ],
 gallery: [
 { src: '/images/photos/lvp/vinylslect.webp', alt: 'Glue-down luxury vinyl tile sample selection in the Floors To You OKC showroom' },
 { src: '/images/photos/lvp/vinyllowtohigh.webp', alt: 'Comparison of low- to high-end glue-down LVT options' },
 { src: '/images/photos/lvp/vinyl.webp', alt: 'Finished glue-down LVT install in an OKC kitchen' },
 ],
 installImage: { src: '/images/photos/lvp/flooringpasteinstall.webp', alt: 'Floors To You OKC installer troweling adhesive for a glue-down vinyl install' },
 },
 {
 slug: 'vinyl-click',
 name: 'Click-Lock Vinyl Flooring (LVP / SPC)',
 shortName: 'Vinyl Click',
 category: 'hard',
 hero: '/images/photos/lvp/lvpkitchen.webp',
 heroAlt: 'Waterproof click-lock luxury vinyl plank flooring in an Oklahoma City kitchen',
 intro:
 "Click-lock luxury vinyl plank (LVP) - the fastest-growing flooring in Oklahoma. SPC and WPC rigid-core planks lock together and float over almost any flat subfloor with no glue. 100% waterproof, pet-proof, and installable whole-home in a day.",
 benefits: [
 '100% waterproof rigid SPC / WPC core',
 'Click-lock floating install - no adhesive, no mess',
 'Floats right over existing tile, vinyl, or plywood',
 'Pet claw, child, and stiletto-heel rated wear layers',
 'Radiant-heat compatible - perfect for OKC winters',
 ],
 bestFor: ['Kitchens', 'Bathrooms', 'Basements', 'Whole-home', 'Rentals', 'Living rooms'],
 installation:
 "We laser-check the subfloor for level, float the planks over a 1mm IIC-rated underlayment, and finish with color-matched quarter-round. Most click-vinyl installs in an OKC home finish in 1–2 days, fully walkable immediately.",
 care:
 'Sweep, damp-mop with vinyl-safe cleaner, and skip wax or polish - LVP is finished for life. Add felt pads to chair legs to keep wear layers pristine.',
 priceFrom: '',
 warranty: 'Lifetime residential waterproof',
 metaTitle: 'Click-Lock Vinyl (LVP) Oklahoma City | Waterproof Floors | Floors To You OKC',
 metaDescription:
 '100% waterproof click-lock LVP flooring installed across Oklahoma City. SPC rigid core, pet-proof, lifetime warranty. Next-day install + 0% financing. Free in-home estimate.',
 faqs: [
 {
 q: 'What is the difference between SPC, WPC, and standard LVP?',
 a: 'SPC has a stone-plastic rigid core (densest, most dent-resistant). WPC has a wood-plastic core (warmer underfoot, more cushion). Standard LVP is more flexible and best for flat subfloors. All three are 100% waterproof.',
 },
 {
 q: 'Can click vinyl be installed over existing tile?',
 a: 'Yes. SPC rigid-core click vinyl floats over level tile without demo - saving you days of labor and dumpster costs.',
 },
 {
 q: 'How fast can you install click vinyl?',
 a: 'Most whole-home click-lock LVP installs in Oklahoma City finish in 1–2 days, with the floor fully walkable and furniture-ready the moment the last plank locks in.',
 },
 ],
 gallery: [
 { src: '/images/photos/lvp/luxuryvinly.webp', alt: 'Click-lock luxury vinyl plank in a contemporary OKC living room' },
 { src: '/images/photos/lvp/vinyllivingroom.webp', alt: 'Waterproof click vinyl plank in an Oklahoma City family room' },
 { src: '/images/photos/lvp/vinylchairincorner.webp', alt: 'Click-lock LVP detail in a sunlit OKC home' },
 ],
 installImage: { src: '/images/photos/lvp/lvp.webp', alt: 'Floors To You OKC installer clicking SPC vinyl planks together' },
 },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
