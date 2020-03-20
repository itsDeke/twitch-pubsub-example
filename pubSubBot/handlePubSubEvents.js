const handleRedemption = (message) => {
  if(message._data.data.redemption.reward.title === "Change Philips Lights Color (Does not Work)") {
    return `Changing Philips Hue to ${message._data.data.redemption.user_input}`;
  }
//   console.log('onRedemption data.redemption:', message._data.data.redemption);
//   console.log('onRedemption Type:', message._data.type);
//   console.log('onRedemption data.timestamp:', message._data.data.timestamp);
//   console.log(
//     'onRedemption User who Redemed Reward:',
//     message._data.data.redemption.user.display_name
//   );
//   console.log(
//     'onRedemption User who Redemed Reward Title:',
//     message._data.data.redemption.reward.title
//   );
//   console.log(
//     'onRedemption User who Redemed Reward Prompt:',
//     message._data.data.redemption.reward.prompt
//   ); // Description?
//   console.log(
//     'onRedemption User who Redemed Reward Cost:',
//     message._data.data.redemption.reward.cost
//   );
//   console.log(
//     'onRedemption User who Redemed Reward SubOnly:',
//     message._data.data.redemption.reward.is_sub_only
//   );
//   console.log(
//     'onRedemption User who Redemed Reward User Input:',
//     message._data.data.redemption.user_input
//   );
//   console.log(
//     'onRedemption User who Redemed Reward Status?:',
//     message._data.data.redemption.status // What is status for?
//   );
  // return some sort of value
  return message;
};

const handleBits = (message) => {

  return message;
};

const handleWhisper = (message) => {
  // Handle Whispers to your Account
  // Add to database, ect..
  // Object data below:
  /*
  message: {
  type: 'whisper_received',
  data: '{"message_id":"c8093f0e-38a4-4be7-865d-322bb3dbcffc","id":5,"thread_id":"32216218_170894673","body":"HeyGuys Hello","sent_ts":1584301214,"from_id":32216218,"tags":{"login":"dellec","display_name":"Dellec","color":"#FF69B4","emotes":[{"id":30259,"start":0,"end":6}],"badges":[{"id":"premium","version":"1"}]},"recipient":{"id":170894673,"username":"itsdeke","display_name":"itsDeke","color":"#FF007C","profile_image":null},"nonce":"54f00cd1bc02019343d9ad7b630f3787"}',
  data_object: {
    message_id: 'c8093f0e-38a4-4be7-865d-322bb3dbcffc',
    id: 5,
    thread_id: '32216218_170894673',
    body: 'HeyGuys Hello',
    sent_ts: 1584301214,
    from_id: 32216218,
    tags: {
      login: 'dellec',
      display_name: 'Dellec',
      color: '#FF69B4',
      emotes: [ { id: 41, start: 10, end: 17 } ], // emotes sent in the message
      badges: [ { id: 'premium', version: '1' } ] 
    },
    recipient: {
      id: 170894673,
      username: 'itsdeke',
      display_name: 'itsDeke',
      color: '#FF007C',
      profile_image: null
    },
    nonce: '54f00cd1bc02019343d9ad7b630f3787'
  }
}
  */
  return message;
};

const handleSubscription = (message) => {

  return message;
};

module.exports ={
    handleRedemption,
    handleBits,
    handleSubscription,
    handleWhisper
}