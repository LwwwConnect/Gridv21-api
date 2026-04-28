// utils/affiliate.js
const supabase = require('./supabase');

const trackClick = async (userId, offer, ip) => {
  const { data, error } = await supabase
    .from('affiliate_clicks')
    .insert([{ user_id: userId, offer, ip, timestamp: new Date() }]);

  if (error) console.error('Error tracking affiliate click:', error);
};

module.exports = { trackClick };
