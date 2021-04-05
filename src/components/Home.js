import React, { Component } from 'react'
import { getThings } from '../actions/index'
import { sendToHeroku } from '../actions/index'

export class HomePage extends Component {

  constructor(){
      super()
      this.state = {
          things: [],
          thing: ""
      }
  }

  componentDidMount(){
    let things = getThings()
    console.log(things)
    this.setState({ things: things })
  }

  changeThing = (value) => {
      let thing = Object.assign({}, this.state.thing)
      thing = value
      this.setState({ thing: thing })
  }

  checkState = () => {
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <h1>Development Section: </h1>
        <ul>
          { this.state.things.map(thing => <li>{ thing }</li>)}
        </ul>
        <div>
          <form onSubmit={ event => sendToHeroku(event, this.state.thing) }>
            <input onChange={ event => this.changeThing(event.target.value) } value={ this.state.thing }></input>
            <button type="submit">Send to Heroku</button>
          </form>
        </div>
        <button onClick={ this.checkState }>Check State</button>
      </div>
    )
  }
}

export default HomePage