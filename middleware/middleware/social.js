// utils/social.js
const supabase = require('./supabase');

const linkSocialAccount = async (userId, platform, token, profileId) => {
  const { data, error } = await supabase
    .from('social_tokens')
    .insert([{ user_id: userId, platform, access_token: token, profile_id: profileId }]);

  if (error) console.error('Error linking social account:', error);
};

const getSocialToken = async (userId, platform) => {
  const { data, error } = await supabase
    .from('social_tokens')
    .select('access_token')
    .eq('user_id', userId)
    .eq('platform', platform);

  if (error) console.error('Error getting social token:', error);
  return data?.[0]?.access_token;
};

module.exports = { linkSocialAccount, getSocialToken };
