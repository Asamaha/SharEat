// Import twit npm module
var Twit = require('twit');
// Imports twitter credential config

if(!process.env.CONSUMER_KEY){
  var twitterCredentials = require('../../config.js').twitter;
}

var T = new Twit({
  consumer_key: 'x6UaZBfEd7EwqQcViowAU7YVt',
  consumer_secret: 'pjlg5gxU0W0uXyM6cWYZFNJUjx5RkRGKtdW7Mnhu3kzxPmJVC6',
  access_token_key: '153242714-peCOP1ODhgusm62226hA1VGHERXkIyTfUX9FATTq',
  access_token_secret: 'Za9zn2qyXn1IErLgWSlBIVtWXEh7cDxUXUBFbEpb1Lw9P'
});

module.exports = { 

  // getTweets: Function that gets the 'n' most recent tweets given a query string and a number n
  getTweets: function(query, number, callback) {
    T.get('search/tweets', {q: query, count: number}, callback);
  },

  // streamTweets: Function that streams tweets with a location or geocode provided
  streamTweets: function(query, callback) {
    var stream = T.stream('statuses/filter', {'locations':['-180','-90','180','90']});
    stream.on('tweet', callback);
  }
};


