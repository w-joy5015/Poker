const {expect} = require('chai')
const calculateHand = require('./utils')

describe('calculateHand function', () => {

  describe('returns the given type of poker hand', () => {

    const hand = [
      {
          "suit": "CLUBS",
          "value": "3",
          "image": "https://deckofcardsapi.com/static/img/3C.png",
          "code": "3C",
          "images": {
              "svg": "https://deckofcardsapi.com/static/img/3C.svg",
              "png": "https://deckofcardsapi.com/static/img/3C.png"
          }
      },
      {
          "suit": "CLUBS",
          "value": "KING",
          "image": "https://deckofcardsapi.com/static/img/KC.png",
          "code": "KC",
          "images": {
              "svg": "https://deckofcardsapi.com/static/img/KC.svg",
              "png": "https://deckofcardsapi.com/static/img/KC.png"
          }
      },
      {
          "suit": "DIAMONDS",
          "value": "KING",
          "image": "https://deckofcardsapi.com/static/img/KD.png",
          "code": "KD",
          "images": {
              "svg": "https://deckofcardsapi.com/static/img/KD.svg",
              "png": "https://deckofcardsapi.com/static/img/KD.png"
          }
      },
      {
          "suit": "SPADES",
          "value": "JACK",
          "image": "https://deckofcardsapi.com/static/img/JS.png",
          "code": "JS",
          "images": {
              "svg": "https://deckofcardsapi.com/static/img/JS.svg",
              "png": "https://deckofcardsapi.com/static/img/JS.png"
          }
      },
      {
          "suit": "HEARTS",
          "value": "5",
          "image": "https://deckofcardsapi.com/static/img/5H.png",
          "code": "5H",
          "images": {
              "svg": "https://deckofcardsapi.com/static/img/5H.svg",
              "png": "https://deckofcardsapi.com/static/img/5H.png"
          }
      }
    ]

    it('Finds if there are pairs or more than one of a kind', () => {
      expect(calculateHand(hand)).to.be.equal("One Pair")
    })
  })
})
