/**
 * Canonical host enforcement: www.floorstoyouokc.com -> floorstoyouokc.com
 *
 * www answered 200 with a full copy of the site while every canonical names the
 * bare domain. Search Console (2026-10-13) shows Google indexing three pages under
 * www instead (/areas/moore/, /services/tile/, a catalog filter URL), and URL
 * Inspection reports the apex /areas/moore/ as "URL is unknown to Google". A 301
 * puts those signals back on the canonical host.
 *
 * Cloudflare Pages _redirects cannot match on hostname, so this runs as a Pages
 * Function. It only touches the exact www host (never the apex or *.pages.dev
 * previews), keeps path + query string, and falls through to normal static
 * serving on any error, so a bug here cannot take the site down.
 *
 * Booking / ad landing paths are deliberately left alone on www so a paid-ad link
 * that happens to use www keeps working exactly as before.
 */

const WWW = 'www.floorstoyouokc.com';
const CANONICAL_ORIGIN = 'https://floorstoyouokc.com';
const FUNNEL = /^\/(?:book[^/]*|free-estimate[^/]*|estimate[^/]*|get-started[^/]*|lp|g|thank[^/]*)(?:\/|$)/i;

export async function onRequest(context) {
  try {
    const url = new URL(context.request.url);
    if (url.hostname.toLowerCase() === WWW && !FUNNEL.test(url.pathname)) {
      return Response.redirect(CANONICAL_ORIGIN + url.pathname + url.search, 301);
    }
  } catch {
    // Fall through to normal serving on any unexpected failure.
  }
  return context.next();
}
