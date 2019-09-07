import React, { Component } from 'react'
import * as Bootstrap from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './SelectedGame.css'

export default class SelectedGame extends Component {
  constructor (props) {
    super(props)

    this.state = {
      game: [],
      selectedGameId: this.props.match.params.id
    }
  }

  componentDidMount () {
    window.fetch('../grid-app-data.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(res => res.json())
      .then(res => {
        let game = res.categories[0].games[this.state.selectedGameId - 1]
        this.setState({ game })
      })
  }
  render() {
    let selectedGame = this.state.game
    return (
      <Bootstrap.Container className=''>
        <Bootstrap.Row className='selected-game-container'>
          <Bootstrap.Col md={9} className='game-intro'>
            <div>
              <div className='spinner'>
                <Bootstrap.Spinner animation="border" role="status">
                </Bootstrap.Spinner>
                <div>LOADING...</div>
              </div>
            </div>
          </Bootstrap.Col>
          <Bootstrap.Col md={3} className='text-center game-details'>
            <Bootstrap.Row>
              <Bootstrap.Image src={selectedGame.thumb} alt={selectedGame.name} roundedCircle className='game-image' />
            </Bootstrap.Row>
            <Bootstrap.Row className='game-name'><h3>{selectedGame.name}</h3></Bootstrap.Row>
            <Bootstrap.Row className='game-description'>{selectedGame.description}</Bootstrap.Row>
          </Bootstrap.Col>
        </Bootstrap.Row>
        
        <Link to='/' className='btn btn-light'>Go back</Link>
      </Bootstrap.Container>
    )
  }
}
