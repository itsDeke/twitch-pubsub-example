const TwitchClient = require('twitch').default;

// You can get an ACCESS TOKEN from this website:
// https://twitchtokengenerator.com/
const ACCESS_TOKEN = '';

// ClientID is from dev.twitch.tv application
const TWITCH_CLIENT_ID = '';

// AtomikJaye's Twitch ID: 151923551
// itsDeke's Twitch ID: 170894673
const TWITCH_ID = '151923551';

const { pubSubBot } = require('./pubSubBot');

const twitchClient = TwitchClient.withCredentials(
  TWITCH_CLIENT_ID,
  ACCESS_TOKEN
);

(async () => {
  // New PubSub File
  pubSubBot(twitchClient, TWITCH_ID) // For lack of better name

})();
