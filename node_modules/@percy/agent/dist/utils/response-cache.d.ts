import { Response } from 'puppeteer';
/**
 * Keep an in-memory cache of asset responses.
 *
 * When enabled, asset responses will be kept in memory. When the asset is
 * re-requested, it will be responsed with what the cached response. This makes
 * it so servers aren't being hounded for the same asset over and over again.
 */
export declare function cacheResponse(response: Response, logger: any): Promise<void>;
export declare function getResponseCache(url: string): any;
export declare function _setResponseCache(newResponseCache: any): any;
