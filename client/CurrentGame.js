import React from 'react'
import axios from "axios"
import calculateHand from "../utils/calculateHand"


export default class CurrentGame extends React.Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      hand: [],
      pokerHand: ""
    }
  }

  async handleClick (event) {
    try{
      event.preventDefault()
      const deck = this.props.deck
      const hand = await axios.get(`https://deckofcardsapi.com/api/deck/${deck}/draw/?count=5`)
      const handValue = calculateHand(hand.data.cards)
      this.setState({
        hand: hand.data.cards,
        pokerHand: handValue
      })
      console.log(hand.data.cards)
    }catch (err) {
      console.error(err)
    }
  }

  render(){
    return(
      <div>
        {(this.state.hand.length===0) ?
         <div>
          <h1>The deck has been shuffled</h1>
          <button onClick={this.handleClick}>Draw cards</button>
         </div> :
         <div>
           <h1>{this.state.pokerHand}</h1>
           <button onClick={this.handleClick}>Draw again from same deck</button>
         </div>
        }
        <div className = "cardImages">
          {this.state.hand.map((card, idx) => {
            return (
                <img key={idx} src={card.image}/>
            )
          })}
        </div>
      </div>
    )
  }
}
