
/**
 * Encodes a URL to a shortened URL.
 */
const urlMap: Map<string, string> = new Map()
const reserveMap: Map<string, string> = new Map()
const prefix = 'http://tinyurl.com/'

    function encode(longUrl: string): string {
        const key = Math.random().toString(36).substring(2, 8);
        const shortUrl = prefix + key
        urlMap.set(shortUrl, longUrl)
	    return shortUrl
    };

/**
 * Decodes a shortened URL to its original URL.
 */
    function decode(shortUrl: string): string {
        return urlMap.get(shortUrl)
    };

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */