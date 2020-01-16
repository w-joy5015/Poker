import React from 'react'
import axios from "axios"


export default class CurrentGame extends React.Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  async handleClick (event) {
    try{
      event.preventDefault()
      const deck = this.props.deck
      const hand = await axios.get(`https://deckofcardsapi.com/api/deck/${deck}/draw/?count=5`)
      console.log(hand.data)
    }catch (err) {
      console.error(err)
    }
  }

  render(){
    return(
      <div>
        <button onClick={this.handleClick}>Draw your cards</button>
      </div>
    )
  }
}
