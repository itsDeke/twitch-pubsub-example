// PubSub Events
const PubsubClient = require('twitch-pubsub-client').default;
const pubSubBot = async (twitchClient, TWITCH_ID) => {
    const {
        handleSubscription,
        handleRedemption,
        handleBits, handleWhisper
      } = require('./handlePubSubEvents');

    // Pubsub
    const pubSubClient = new PubsubClient();
    try {
        await pubSubClient.registerUserListener(twitchClient);
    } catch(error) {
        console.log({error})
    }
    
    // onRedemption = Channel Point Reward Redemptions
    pubSubClient.onRedemption(TWITCH_ID, (message) => {
        const { _data } = handleRedemption(message);
        const result = _data.data
        console.log({ result });
    });
    
    // onSubscription = Channel Subscriptions
    pubSubClient.onSubscription(TWITCH_ID, (message) => {
        const result = handleSubscription(message);
        console.log({ result });// console.log result of subscriptionhandler
    });
    
    // onBits? = Channel bits?
    pubSubClient.onBits(TWITCH_ID, (message) => {
        const result = handleBits(message);
        console.log({ result }); // console.log result of bitshandler
    });
    
    // Need Handlers
    // onBits? = Channel bits?
    pubSubClient.onBitsBadgeUnlock(TWITCH_ID, (message) => {
        // const result = handleBits(message);
        // console.log({ result });
    });
    
    // Whispers?
    pubSubClient.onWhisper(TWITCH_ID, (message) => {
        console.log("whisper message", message._data.data_object)
        const result = handleWhisper(message);
        console.log({ result }); // console.log resunt of whisper handle
    });
    
    // onModAction?
    pubSubClient.onModAction(TWITCH_ID, (topic, message) => {
        // console.log({topic})
        // console.log({message})
    });
}

module.exports = {
    pubSubBot
}
    