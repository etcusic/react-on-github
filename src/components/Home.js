import React, { Component } from 'react'
import { sendToHeroku } from '../actions/index'

export class HomePage extends Component {

  constructor(){
      super()
      this.state = {
          thing: ""
      }
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