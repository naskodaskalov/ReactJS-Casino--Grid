import React, { Component } from 'react'
import * as Bootstrap from 'react-bootstrap'

import './GamesGrid.css'

export default class GamesGrid extends Component {
  constructor (props) {
    super(props)

    this.state = {
      primaryGame: this.props.primarygame,
      secondaryContainerGames: this.props.games
    }
  }

  render () {
    let primaryGame = this.state.primaryGame
    let secondaryContainerGames = this.state.secondaryContainerGames

    return (
      <div>
        <Bootstrap.Row className='games-container'>
          <Bootstrap.Col md={6} className='primary-game'>
            {primaryGame}
          </Bootstrap.Col>
          <Bootstrap.Col md={6}>
            <Bootstrap.Row className='secondary-games-container'>
              {secondaryContainerGames}
            </Bootstrap.Row>
          </Bootstrap.Col>
        </Bootstrap.Row>
      </div>
    )
  }
}
