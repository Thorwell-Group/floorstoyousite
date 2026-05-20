export const site = {
  name: 'Floors To You OKC',
  legalName: 'Floors To You',
  tagline: "Oklahoma City's largest in-stock flooring showroom",
  domain: 'https://floorstoyouokc.com',
  logo: '/images/brand/floors-to-you-okc-logo.webp',
  email: 'bsmith@allinfloors.com',
  emailHref: 'mailto:bsmith@allinfloors.com',
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
    '100% Product & Labor Guarantee',
    'Largest in-stock selection in Oklahoma',
    'Next-day installation available',
    'Low price guarantee',
    '0% interest financing for 24 months',
    'Free in-home estimates',
  ],
  serviceRadiusMiles: 50,
  foundingDate: '2018',
  paymentAccepted: ['Cash', 'Credit Card', 'Financing', 'Synchrony'],
  priceRange: '$$',
};

export type SiteConfig = typeof site;
