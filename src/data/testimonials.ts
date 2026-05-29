// Real, verified Google reviews for Floors To You OKC, shown as on-page cards
// so visitors never have to leave the funnel to read them. Newest first.
export interface Review {
  name: string;
  initials: string;
  rating: number;
  date: string;
  text: string;
  localGuide?: boolean;
}

export const reviews: Review[] = [
  {
    name: 'Brandon Bolton',
    initials: 'BB',
    rating: 5,
    date: 'a month ago',
    localGuide: true,
    text: 'Sarah at Floors To You was fantastic to work with from start to finish. She assisted with flooring measurements, installation, and delivery, making the entire process smooth and stress-free. Sarah was professional and knowledgeable.',
  },
  {
    name: 'Dre Cole',
    initials: 'DC',
    rating: 5,
    date: 'a month ago',
    text: "I recently had my carpet replaced with vinyl plank flooring, and I couldn't be happier with the results. From start to finish, the entire experience was smooth and professional. The team took the time to walk me through different options.",
  },
  {
    name: 'lark dacasin',
    initials: 'LD',
    rating: 5,
    date: 'a year ago',
    text: '10/10. Great Service',
  },
];
