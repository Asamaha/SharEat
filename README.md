__[TwitterMap](https://geo-tweet.herokuapp.com/)__
Interactive Map

Discover new Tweets, along the journey.

__[TwitterMap](https://geo-tweet.herokuapp.com/)__

## Summary

Road Trip Advisor recommends the best places to eat, drink, sleep and play, along your road trip. You choose the types of stops you're most interested in. Looking for a great local restaurant or nightlife? We've got something for everybody.

## Features

- Interactive map from the Google Maps API
- Content from Twitter
- Works anywhere in the world

## Tech Stack

Angular, Node/Express

## Developer Environment

1. Include Twitter API keys (get from Twitter directly):
   ```sh
   # Create a new file server/api/local_key.js, formatted as:
   module.exports = {
     consumer_key: 'YOUR-KEY',
     consumer_secret: 'YOUR-KEY',
     token: 'YOUR-KEY',
     token_secret:  'YOUR-KEY',
   };
   ```

1. Run the following in the project directory:

    ```sh
    # install dependencies
    npm install
    bower install

    # start server
    node server.js
    ```

1. Open http://localhost:3456 in your browser.
