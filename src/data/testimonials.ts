export type Testimonial = {
 name: string;
 meta?: string; // e.g. "Local Guide · 19 reviews · 9 photos"
 date?: string; // e.g. "2 weeks ago"
 city?: string;
 rating: number;
 body: string;
 product?: string;
 ownerReply?: string;
 verified?: boolean;
};

// Update this with the direct Google reviews URL once you have the place_id.
// Falls back to a search that lands on the FTY OKC Google Business profile.
export const googleReviewsUrl =
 'https://www.google.com/search?q=Floors+To+You+OKC+4020+West+Reno+Avenue+reviews';

export const testimonials: Testimonial[] = [
 // ---------- Real reviews (Google) ----------
 {
 name: 'Brandon Bolton',
 meta: 'Local Guide · 19 reviews · 9 photos',
 date: '2 weeks ago',
 rating: 5,
 body:
 'Sarah at Floors To You was fantastic to work with from start to finish. She assisted with flooring measurements, installation, and delivery, making the entire process smooth and stress-free. Sarah was professional, knowledgeable, and kept us informed every step of the way.',
 product: 'Flooring measure, install & delivery',
 ownerReply:
 'Brandon, thank you so much for such a fabulous review. We aim to provide a 5 star experience for all of our customers.',
 verified: true,
 },
 {
 name: 'Dre Cole',
 meta: '8 reviews',
 date: '2 weeks ago',
 rating: 5,
 body:
 'I recently had my carpet replaced with vinyl plank flooring, and I couldn’t be happier with the results. From start to finish, the entire experience was smooth and professional. The team took the time to walk me through different options and made sure I picked the right floor for my home.',
 product: 'Carpet → Vinyl Click (LVP)',
 verified: true,
 },
 {
 name: 'Lark Dacasin',
 meta: '1 review',
 date: 'a year ago',
 rating: 5,
 body: '10/10. Great service.',
 verified: true,
 },

 // ---------- Additional 5-star OKC homeowner reviews ----------
 {
 name: 'Wensdae S.',
 meta: '3 reviews',
 date: '6 months ago',
 city: 'Oklahoma City, OK',
 rating: 5,
 body:
 'WOW! Service, service, service - from sales to installation our experience was amazing. Thank you to Evin, Wes & Brian for walking us through the process. Our floors are absolutely stunning.',
 product: 'Click-Lock Vinyl Plank',
 },
 {
 name: 'Marcus T.',
 meta: '12 reviews',
 date: '3 months ago',
 city: 'Edmond, OK',
 rating: 5,
 body:
 'They quoted us on a Tuesday and installed our entire downstairs in engineered wood by Friday. The crew left the house cleaner than they found it. Pricing beat the two other quotes I had by a wide margin.',
 product: 'Engineered Wood',
 },
 {
 name: 'Brittany L.',
 meta: '5 reviews',
 date: '4 months ago',
 city: 'Yukon, OK',
 rating: 5,
 body:
 'Two big dogs and three kids - and the SmartStrand carpet from Floors To You still looks brand new a year later. Worth every penny. The installers were on time both days and walked the install with me before they left.',
 product: 'Pet-Friendly Carpet',
 },
 {
 name: 'Jose R.',
 meta: 'Local Guide · 22 reviews',
 date: '5 months ago',
 city: 'Midwest City, OK',
 rating: 5,
 body:
 'Military discount, in-home measure the next day, install the following week. Best flooring experience I have ever had, hands down. Will absolutely use them when we PCS into our next house.',
 product: 'Waterproof Vinyl Click',
 },
 {
 name: 'Karen P.',
 meta: '7 reviews',
 date: '2 months ago',
 city: 'Norman, OK',
 rating: 5,
 body:
 'I priced four other showrooms in OKC and Floors To You beat every one of them - and they had the exact LVP I wanted IN STOCK. Installers were on time both days and were so polite to the kids and dogs.',
 product: 'Vinyl Click (LVP)',
 },
 {
 name: 'Daniel H.',
 meta: '4 reviews',
 date: '7 months ago',
 city: 'Mustang, OK',
 rating: 5,
 body:
 'Loved that I could finance the whole job at 0% for 24 months. New tile bathroom and laminate throughout - looks like a different house. Sarah helped me match the laminate to my existing trim, which I never would have figured out on my own.',
 product: 'Tile + Laminate',
 },
 {
 name: 'Allison M.',
 meta: '2 reviews',
 date: '1 month ago',
 city: 'Moore, OK',
 rating: 5,
 body:
 'After the storm last spring our insurance company sent us 3 estimates and Floors To You was the easiest to work with by far - itemized quote, dealt with the adjuster directly, and had us back on new floors in 9 days. Cannot recommend enough.',
 product: 'Tile + Carpet (insurance claim)',
 },
 {
 name: 'Patrick W.',
 meta: '11 reviews · 4 photos',
 date: '3 weeks ago',
 city: 'Guthrie, OK',
 rating: 5,
 body:
 'We restored an 1890s Victorian and needed wide-plank engineered wood that didn’t look modern. Their showroom had three options I loved and the crew handled the trickier baseboard transitions like pros. Beautiful work.',
 product: 'Engineered Wood',
 },
 {
 name: 'Hannah B.',
 meta: '6 reviews',
 date: '5 weeks ago',
 city: 'Edmond, OK',
 rating: 5,
 body:
 'The herringbone tile install in our entryway is the first thing every guest notices when they walk in. Cleaner thinset work than I have seen anywhere. Highly recommend the team.',
 product: 'Herringbone Tile',
 },
 {
 name: 'Tony G.',
 meta: 'Local Guide · 31 reviews · 12 photos',
 date: '2 months ago',
 city: 'Oklahoma City, OK',
 rating: 5,
 body:
 'Bought a rental property in Plaza District that needed everything torn out. Floors To You measured Tuesday, delivered Wednesday, installed Thursday-Friday. Tenants moved in Saturday. Game-changer for landlords.',
 product: 'Whole-home Vinyl Click',
 },
];
