/**
 * Returns a URL for a public asset, correctly handling Astro's BASE_URL
 * regardless of whether it has a trailing slash.
 *
 * Usage in .astro frontmatter:
 *   import { asset } from '../utils';
 *   <img src={asset('logo/website_logo.png')} />
 */
const _base = import.meta.env.BASE_URL;
const _normalised = _base.endsWith('/') ? _base : `${_base}/`;

export const asset = (path: string): string => `${_normalised}${path}`;

/** Absolute URL for meta tags (og:image, etc.). */
export const absoluteAsset = (path: string): string =>
  new URL(asset(path), import.meta.env.SITE).href;
