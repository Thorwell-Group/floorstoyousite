export const site = {
  name: 'Floors To You OKC',
  legalName: 'Floors To You',
  tagline: "The showroom comes to you - and the floors stop people mid-sentence",
  domain: 'https://floorstoyouokc.com',
  logo: '/images/brand/floors-to-you-okc-logo.webp',
  address: {
    street: '4020 West Reno Avenue',
    city: 'Oklahoma City',
    region: 'OK',
    postalCode: '73107',
    country: 'US',
  },
  geo: { lat: 35.4659, lng: -97.5705 },
  hours: [
    { day: 'Monday', open: '09:00', close: '18:00' },
    { day: 'Tuesday', open: '09:00', close: '18:00' },
    { day: 'Wednesday', open: '09:00', close: '18:00' },
    { day: 'Thursday', open: '09:00', close: '18:00' },
    { day: 'Friday', open: '09:00', close: '18:00' },
    { day: 'Saturday', open: '10:00', close: '16:00' },
    { day: 'Sunday', open: null, close: null },
  ],
  phone: '(405) 913-7381',
  phoneE164: '+14059137381',
  email: 'floorstoyouinfo@allinfloors.com',
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=100088814169249',
    // Google Business Profile (place_id verified via Birdeye listing for
    // "Floors To You OKC", 4020 W Reno Ave, OKC 73107). Linking the GBP in
    // sameAs is a primary local-pack/entity signal.
    google: 'https://www.google.com/maps/place/?q=place_id:ChIJ7ZDMcfcRsocRcFVIEgs1qWY',
  },
  promises: [
    'Honest pricing - we price-match the same or similar material',
    'We bring the showroom to you',
    'Next-day install on in-stock material',
    '0% APR financing for 24 months',
    'We handle prep, install, baseboard & cleanup',
    '100% product & labor guarantee',
  ],
  serviceRadiusMiles: 50,
  foundingDate: '2018',
  paymentAccepted: ['Cash', 'Credit Card', 'Financing', 'Synchrony'],
  priceRange: '$$',
};

export type SiteConfig = typeof site;
