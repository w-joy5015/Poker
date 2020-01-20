const expect = require('chai').expect
const calculateHand = require('./calculateHand')
const should = require('chai').should();

describe('Finds if there are pairs or more than one of a kind', () => {

  it('Finds if there is a full house', () => {
    expect(calculateHand(fullHouse).should.equal("Full House"))
  })

  it('Finds if there are two pairs', () => {
    expect(calculateHand(twoPair)).to.be.equal("Two Pair")
  })
})

describe('Finds if cards are all consecutive and/or all of the same suit', () => {

  it('Finds if there is a flush', () => {
    expect(calculateHand(flush).should.equal("Flush"))
  })

  it('Finds if there is a straight, and handles Aces', () => {
    expect(calculateHand(straight).should.equal("Straight"))
  })

})

describe('If the hand is High Card, prints which card is the high card', () => {

  it('Identifies when Ace is the high card', () => {
    expect(calculateHand(highAce).should.equal("High Card Ace"))
  })

  it('Identifies when a face card is the high card', () => {
    expect(calculateHand(highJack).should.equal("High Card Jack"))
  })

  it('Identifies when a number card is the high card', () => {
    expect(calculateHand(highTen).should.equal("High Card 10"))
  })
})

//--mock data--
const flush = [
  {"suit": "CLUBS", "value": "3"},
  {"suit": "CLUBS", "value": "KING"},
  {"suit": "CLUBS","value": "QUEEN"},
  {"suit": "CLUBS","value": "ACE"},
  {"suit": "CLUBS", "value": "2"}
]
const twoPair = [
  {"suit": "CLUBS", "value": "5"},
  {"suit": "CLUBS", "value": "KING"},
  {"suit": "DIAMONDS","value": "KING"},
  {"suit": "SPADES","value": "JACK"},
  {"suit": "HEARTS", "value": "5"}
]
const fullHouse = [
  {"suit": "CLUBS", "value": "3"},
  {"suit": "CLUBS", "value": "KING"},
  {"suit": "DIAMONDS","value": "KING"},
  {"suit": "SPADES","value": "KING"},
  {"suit": "HEARTS", "value": "3"}
]
const straight = [
  {"suit": "CLUBS", "value": "ACE"},
  {"suit": "CLUBS", "value": "2"},
  {"suit": "DIAMONDS","value": "3"},
  {"suit": "SPADES","value": "4"},
  {"suit": "HEARTS", "value": "5"}
]
const highAce = [
  {"suit": "CLUBS", "value": "5"},
  {"suit": "CLUBS", "value": "KING"},
  {"suit": "DIAMONDS","value": "ACE"},
  {"suit": "SPADES","value": "JACK"},
  {"suit": "HEARTS", "value": "4"}
]
const highJack = [
  {"suit": "CLUBS", "value": "5"},
  {"suit": "CLUBS", "value": "10"},
  {"suit": "DIAMONDS","value": "9"},
  {"suit": "SPADES","value": "JACK"},
  {"suit": "HEARTS", "value": "4"}
]
const highTen = [
  {"suit": "CLUBS", "value": "5"},
  {"suit": "CLUBS", "value": "9"},
  {"suit": "DIAMONDS","value": "10"},
  {"suit": "SPADES","value": "2"},
  {"suit": "HEARTS", "value": "4"}
]
