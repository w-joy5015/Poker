import React from 'react'
import CurrentGame from "./CurrentGame"
import axios from "axios"

export default class Main extends React.Component {
  constructor(){
    super()
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      gameInSession: false,
      deckId: null
    }
  }

  async handleClick(event){
    try{
      event.preventDefault()
      const deck = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
      console.log(deck.data)
      this.setState({
        gameInSession: true,
        deckId: deck.data.deck_id
      })
    } catch (err) {
      console.error(err)
    }
  }

  render () {
    return (
      <div id='main' className='welcome'>
        {this.state.gameInSession ? <CurrentGame deck = {this.state.deckId}/> :
          (<div>
            <h1>{"Let's play some poker!"}</h1>
            <button onClick={this.handleClick}>Start a new game</button>
          </div>)
        }
      </div>
    )
  }
}
