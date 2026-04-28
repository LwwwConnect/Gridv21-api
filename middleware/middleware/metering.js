// utils/metering.js
const supabase = require('./supabase');

const trackUsage = async (apiKey, endpoint) => {
  const { data, error } = await supabase
    .from('usage_logs')
    .insert([{ api_key: apiKey, endpoint, timestamp: new Date() }]);

  if (error) console.error('Error tracking usage:', error);
};

const checkQuota = async (apiKey) => {
  const { data, error } = await supabase
    .from('usage_logs')
    .select('*')
    .eq('api_key', apiKey)
    .gte('timestamp', new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)); // last 30 days

  if (error) {
    console.error('Error checking quota:', error);
    return false;
  }

  return data.length < 1000; // Example limit: 1000 requests/30 days
};

module.exports = { trackUsage, checkQuota };
