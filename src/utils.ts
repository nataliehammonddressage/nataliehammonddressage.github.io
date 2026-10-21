import { getCollection } from 'astro:content';

export const formatDate = (date: Date) =>
  date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'America/Chicago' });

/** Published posts, newest first. Drafts show up in `astro dev` but never in a build. */
export const getPosts = async () =>
  (await getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );

/** Albums for the Photos page, newest first. */
export const getAlbums = async () =>
  (await getCollection('albums', ({ data }) => !data.hidden)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );
