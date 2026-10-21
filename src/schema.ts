import { SITE } from './site';

export const barnLd = {
  '@type': 'Place',
  name: SITE.barn.name,
  sameAs: SITE.barn.url,
  address: {
    '@type': 'PostalAddress',
    addressLocality: SITE.barn.city,
    addressRegion: SITE.barn.region,
    addressCountry: 'US',
  },
};

export const personLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE.url}/#natalie`,
  name: 'Natalie Hammond',
  alternateName: 'Natalie Ottiger',
  jobTitle: 'Dressage Rider and Trainer',
  url: `${SITE.url}/about/`,
  email: SITE.email,
  sameAs: [SITE.social.facebook, SITE.social.twitter],
  knowsAbout: ['Dressage', 'Horse training', 'Equestrian sport'],
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    name: 'Bereiter, Warendorf, Germany',
  },
  workLocation: barnLd,
  homeLocation: { '@type': 'Place', name: 'Wildwood, Missouri' },
};

export const businessLd = {
  '@context': 'https://schema.org',
  '@type': 'SportsActivityLocation',
  '@id': `${SITE.url}/#business`,
  name: SITE.name,
  url: SITE.url,
  email: SITE.email,
  description: SITE.description,
  founder: { '@id': `${SITE.url}/#natalie` },
  sport: 'Dressage',
  address: barnLd.address,
  areaServed: ['St. Louis, MO', 'Wentzville, MO', 'Wildwood, MO', 'St. Charles County, MO', 'O\'Fallon, MO', 'Chesterfield, MO'],
  sameAs: [SITE.social.facebook],
};

export const websiteLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE.name,
  url: SITE.url,
  publisher: { '@id': `${SITE.url}/#natalie` },
};
