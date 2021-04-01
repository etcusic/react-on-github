import React, { Component } from 'react'
import PageOne from './PageOne.js'
import PageTwo from './PageTwo.js'

export class HomePage extends Component {

  constructor(){
      super()
      this.state = {
          integer: 1,
          view: <PageOne />
      }
  }

  toggleView = () => {
      if (this.state.integer === 1){
          this.setState({
              integer: 2,
              view: <PageTwo />
          })
      } else {
        this.setState({
            integer: 1,
            view: <PageOne />
        })
      }
  }
  
  render() {
    return (
      <div className="row">
        { this.state.view }
        <div>
            <button onClick={ toggleView }>Toggle Page</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    decks: state.decks
  }
}

export default connect(mapStateToProps, { fetchDecks, fetchConnectFourLogs })(HomePage)