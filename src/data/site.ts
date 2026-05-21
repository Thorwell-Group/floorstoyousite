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
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=100088814169249',
  },
  promises: [
    'We bring the showroom to you',
    'Samples matched to your light and trim',
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
