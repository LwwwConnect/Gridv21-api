// utils/cache.js
class Cache {
  constructor(ttl = 300000) { // 5 minutes default TTL
    this.cache = new Map();
    this.ttl = ttl;
  }

  get(key) {
    const item = this.cache.get(key);
    if (!item) return null;
    const [value, expiry] = item;
    if (Date.now() > expiry) {
      this.cache.delete(key);
      return null;
    }
    return value;
  }

  set(key, value) {
    const expiry = Date.now() + this.ttl;
    this.cache.set(key, [value, expiry]);
  }
}

module.exports = Cache;
