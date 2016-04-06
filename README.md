# [TwitterMap](https://geo-tweet.herokuapp.com/)
Interactive Map

## Summary

Discover new Tweets, anywhere in the world.

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
    node srever/server.js
    ```

1. Open http://localhost:3000 in your browser.
