# Poker

This app allows a user to shuffle a standard deck of 52 cards (no Joker cards) and then draw a hand of 5 cards. The screen will print the name of the highest value poker hand drawn.

This app uses the Deck of Cards API (https://deckofcardsapi.com/) to create decks from which cards are drawn from.

## Setup

To start the app on your local device, fork and clone the respository to your local computer and then open the terminal. Run `npm install` to install package dependancies. Then run `npm run start` to start the server. You will see it say in the terminal `listening on port 8080`, indicating that you can navigate to `localhost:8080` to see the app running on your local computer.

## Testing

This app uses unit testing with Mocha and Chai to test the highest value poker hand drawn. To run the tests, in the terminal run `npm run test`. Currently, there are 7 test specs.
