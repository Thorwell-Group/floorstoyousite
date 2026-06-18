export type Area = {
 slug: string;
 city: string;
 state: string;
 county: string;
 zipCodes: string[];
 population: number;
 drivingMinutes: number;
 geo: { lat: number; lng: number };
 intro: string;
 localProof: string;
 neighborhoods: string[];
 mapEmbed: string;
 metaTitle: string;
 metaDescription: string;
 hero: string;
 heroAlt: string;
};

export const areas: Area[] = [
 {
 slug: 'oklahoma-city',
 city: 'Oklahoma City',
 state: 'OK',
 county: 'Oklahoma County',
 zipCodes: ['73102', '73107', '73108', '73109', '73112', '73116', '73118', '73120', '73127', '73142'],
 population: 694800,
 drivingMinutes: 0,
 geo: { lat: 35.4676, lng: -97.5164 },
 intro:
 'Floors To You OKC is headquartered on West Reno Avenue, minutes from Downtown OKC, the Plaza District, and Bricktown. We have been installing carpet, hardwood, LVP, laminate, and tile in Oklahoma City homes since 2018 - with the largest in-stock selection in the metro.',
 localProof:
 "We are within a 15-minute drive of every major OKC neighborhood, from Mesta Park bungalows to new builds in Deer Creek. Most OKC installs leave the showroom on the truck the same week you sign your quote.",
 neighborhoods: [
 'Downtown OKC',
 'Bricktown',
 'Midtown',
 'The Plaza District',
 'Mesta Park',
 'Nichols Hills',
 'The Village',
 'Quail Creek',
 'Deer Creek',
 'Council Crest',
 ],
 mapEmbed:
 'https://www.google.com/maps?q=4020+West+Reno+Avenue,+Oklahoma+City,+OK+73107&output=embed',
 metaTitle: 'Oklahoma City Flooring Store | Floors To You OKC',
 metaDescription:
 'Oklahoma City flooring store with the metro’s largest in-stock carpet, hardwood, LVP, laminate & tile selection. Next-day install + 0% financing. Free in-home estimate.',
 hero: '/images/photos/hero/hero.webp',
 heroAlt: 'Open-concept Oklahoma City home with new wide-plank flooring installed by Floors To You OKC',
 },
 {
 slug: 'edmond',
 city: 'Edmond',
 state: 'OK',
 county: 'Oklahoma County',
 zipCodes: ['73003', '73012', '73013', '73025', '73034'],
 population: 96000,
 drivingMinutes: 25,
 geo: { lat: 35.6528, lng: -97.4781 },
 intro:
 "Edmond homeowners - from historic Cheyenne Ridge to new builds in Coffee Creek - trust Floors To You OKC for in-home estimates, fast turnaround, and a 100% product and labor guarantee. Our crews are in Edmond every week, often offering next-day install on in-stock rolls.",
 localProof:
 'We work closely with several Edmond builders and have replaced flooring in hundreds of Edmond homes near UCO, Oak Tree, and Fairfax. Free in-home estimates throughout 73003, 73012, 73013, 73025, and 73034.',
 neighborhoods: ['Cheyenne Ridge', 'Coffee Creek', 'Oak Tree', 'Fairfax', 'Carriage Hill', 'Twin Bridges', 'Spring Creek', 'Iron Horse Ranch'],
 mapEmbed: 'https://www.google.com/maps?q=Edmond,+OK&output=embed',
 metaTitle: 'Edmond Flooring: Carpet, LVP & Tile | Floors To You OKC',
 metaDescription:
 'Edmond flooring installer with in-home estimates, next-day install on in-stock carpet, LVP, hardwood & tile. 100% guarantee + 0% financing. Free in-home estimate.',
 hero: '/images/photos/hardwood/hardwoodmodernhome.webp',
 heroAlt: 'Modern Edmond, Oklahoma home with new hardwood flooring installed by Floors To You OKC',
 },
 {
 slug: 'yukon',
 city: 'Yukon',
 state: 'OK',
 county: 'Canadian County',
 zipCodes: ['73085', '73099'],
 population: 28250,
 drivingMinutes: 20,
 geo: { lat: 35.5067, lng: -97.7625 },
 intro:
 "Yukon families count on Floors To You OKC for storm-shelter-friendly floors, pet-proof LVP, and same-week installs. Our showroom is a quick I-40 drive from Yukon, and our crews work Yukon homes from Mustang Road to the Mile-N-A-Half daily.",
 localProof:
 "From Surrey Hills to Mulberry Park, we've installed thousands of square feet across Yukon's newest neighborhoods. Free in-home estimates for ZIPs 73085 and 73099.",
 neighborhoods: ['Surrey Hills', 'Mulberry Park', 'Spanish Cove', 'Castlewood', 'Brookside', 'Garth Brooks Estates'],
 mapEmbed: 'https://www.google.com/maps?q=Yukon,+OK&output=embed',
 metaTitle: 'Yukon Flooring: Carpet, LVP & Tile | Floors To You OKC',
 metaDescription:
 'Yukon, OK flooring installer with same-week install on in-stock carpet, LVP, laminate, hardwood & tile. Free in-home estimate + 0% financing. Free in-home estimate.',
 hero: '/images/photos/laminate/dogonlaminate.webp',
 heroAlt: 'Family pet on durable laminate flooring installed by Floors To You OKC in a Yukon, OK home',
 },
 {
 slug: 'mustang',
 city: 'Mustang',
 state: 'OK',
 county: 'Canadian County',
 zipCodes: ['73064'],
 population: 22100,
 drivingMinutes: 25,
 geo: { lat: 35.3845, lng: -97.7242 },
 intro:
 "Mustang is one of the fastest-growing communities in Oklahoma - and Floors To You OKC has been installing new-construction and remodel floors here since the showroom opened. We carry hundreds of carpet, LVP, and tile SKUs in stock and ready for Mustang installs.",
 localProof:
 "Our installers are in Mustang weekly, working homes from Mustang Creek Estates to Trail's End. Free in-home estimate anywhere in 73064.",
 neighborhoods: ["Mustang Creek Estates", "Trail's End", 'Silver Falls', 'Belmont Park', 'Eagle Lake', 'Heritage Park'],
 mapEmbed: 'https://www.google.com/maps?q=Mustang,+OK&output=embed',
 metaTitle: 'Mustang Flooring: LVP, Carpet & Tile | Floors To You OKC',
 metaDescription:
 'Mustang, OK flooring installer with next-day install on in-stock LVP, carpet, laminate & tile. 100% guarantee + 0% financing. Free in-home estimate.',
 hero: '/images/photos/lvp/vinyllivingroom.webp',
 heroAlt: 'Modern Mustang, OK living room with waterproof luxury vinyl plank flooring by Floors To You OKC',
 },
 {
 slug: 'midwest-city',
 city: 'Midwest City',
 state: 'OK',
 county: 'Oklahoma County',
 zipCodes: ['73110', '73130', '73141', '73145'],
 population: 58400,
 drivingMinutes: 20,
 geo: { lat: 35.4495, lng: -97.3967 },
 intro:
 "Midwest City and Tinker AFB families trust Floors To You OKC for VA-friendly financing, military-discount pricing, and pet-proof LVP that handles deployments and PCS moves. Showroom is 20 minutes west on I-40.",
 localProof:
 "We've installed flooring in hundreds of Midwest City homes near Tinker AFB, Heritage Park Mall, and the Soldier Creek corridor. Active-duty and veteran discount available.",
 neighborhoods: ['Tinker AFB housing', 'Soldier Creek', 'Heritage Park', 'Bridgeport', 'Ridgecrest', 'Sooner Rose'],
 mapEmbed: 'https://www.google.com/maps?q=Midwest+City,+OK&output=embed',
 metaTitle: 'Midwest City Flooring: LVP & Carpet | Floors To You OKC',
 metaDescription:
 'Midwest City flooring installer serving Tinker AFB families. Pet-proof LVP, carpet, hardwood & tile. Military discount + 0% financing. Free in-home estimate.',
 hero: '/images/photos/carpet/babysfeetoncarpet.webp',
 heroAlt: 'Soft new carpet installed by Floors To You OKC in a Midwest City, OK family home',
 },
 {
 slug: 'guthrie',
 city: 'Guthrie',
 state: 'OK',
 county: 'Logan County',
 zipCodes: ['73044'],
 population: 11500,
 drivingMinutes: 35,
 geo: { lat: 35.8786, lng: -97.4253 },
 intro:
 "Guthrie's historic downtown and surrounding country homes deserve floors that respect the architecture. Floors To You OKC carries wide-plank engineered hardwood, hand-scraped LVP, and tile suited to Guthrie's mix of Victorian and farmhouse builds.",
 localProof:
 'We make the 35-minute drive from West Reno to Guthrie weekly, with same-day measure for most jobs. Free in-home estimate throughout 73044 and the surrounding Logan County.',
 neighborhoods: ['Historic Downtown', 'Cottonwood Creek', 'Cedar Valley', 'Spring Creek', 'Liberty Lake'],
 mapEmbed: 'https://www.google.com/maps?q=Guthrie,+OK&output=embed',
 metaTitle: 'Guthrie Flooring: Hardwood, LVP & Tile | Floors To You OKC',
 metaDescription:
 'Guthrie, OK flooring installer specializing in engineered hardwood, LVP & tile for historic and new builds. Free estimate + 0% financing. Free in-home estimate.',
 hero: '/images/photos/hardwood/herringbonefloors.webp',
 heroAlt: 'Herringbone hardwood flooring in a historic Guthrie, OK home installed by Floors To You OKC',
 },
 {
 slug: 'moore',
 city: 'Moore',
 state: 'OK',
 county: 'Cleveland County',
 zipCodes: ['73160', '73165', '73170'],
 population: 63500,
 drivingMinutes: 22,
 geo: { lat: 35.3395, lng: -97.4867 },
 intro:
 "Moore homeowners - many rebuilding or upgrading after Oklahoma's storm seasons - choose Floors To You OKC for waterproof LVP, indestructible tile, and next-day install. Insurance-claim-friendly invoicing available.",
 localProof:
 'Hundreds of Moore homes installed since 2018, from Eastlake Estates to Southfork. Insurance-friendly itemized quotes available for storm rebuilds.',
 neighborhoods: ['Eastlake Estates', 'Southfork', 'Brookhaven', 'Stonebridge', 'Country Estates'],
 mapEmbed: 'https://www.google.com/maps?q=Moore,+OK&output=embed',
 metaTitle: 'Moore Flooring: LVP, Carpet & Tile | Floors To You OKC',
 metaDescription:
 'Moore, OK flooring installer with waterproof LVP, carpet, hardwood & tile. Insurance-claim-friendly. Next-day install + 0% financing. Free in-home estimate.',
 hero: '/images/photos/tile/tileluxuryhome.webp',
 heroAlt: 'Wide-format tile flooring in a Moore, OK home installed by Floors To You OKC',
 },
 {
 slug: 'norman',
 city: 'Norman',
 state: 'OK',
 county: 'Cleveland County',
 zipCodes: ['73019', '73026', '73069', '73071', '73072'],
 population: 128000,
 drivingMinutes: 30,
 geo: { lat: 35.2226, lng: -97.4395 },
 intro:
 "Norman homeowners, OU students, and landlords trust Floors To You OKC for rental-grade LVP, family-tough carpet, and same-week installs. Our showroom is a 30-minute drive up I-35 - or we'll come measure your Norman home for free.",
 localProof:
 'Hundreds of installs across Norman, including landlord packages near OU and family homes in Trail Woods and Brookhaven. Free in-home estimate throughout 73019 – 73072.',
 neighborhoods: ['Trail Woods', 'Brookhaven', 'Rose Rock', 'Greystone', 'OU Campus area', 'Lake Thunderbird'],
 mapEmbed: 'https://www.google.com/maps?q=Norman,+OK&output=embed',
 metaTitle: 'Norman Flooring: Carpet, LVP & Hardwood | Floors To You OKC',
 metaDescription:
 'Norman, OK flooring installer with rental-grade LVP, family carpet, hardwood & tile. Same-week install + 0% financing. Free in-home estimate.',
 hero: '/images/photos/laminate/laminateluxuryhome.webp',
 heroAlt: 'Norman, OK family room with new laminate flooring installed by Floors To You OKC',
 },
];

export const getArea = (slug: string) => areas.find((a) => a.slug === slug);
