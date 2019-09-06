import React, { Component } from 'react'
import * as Bootstrap from 'react-bootstrap'
import GamesGrid from './GamesGrid'

export default class CategoriesContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      games: []
    }

    this.handleGameChoise = this.handleGameChoise.bind(this)
  }

  componentDidMount () {
    window.fetch('../grid-app-data.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(res => res.json())
      .then(res => {
        let games = res.categories[0].games
        this.setState({ games })
      })
  }

  handleGameChoise (e) {
    e.preventDefault()
    let selectedGameId = e.currentTarget.dataset['id']

    this.props.history.push(`/selectedgame/${selectedGameId}`)
  }

  render () {
    if (this.state.games.length > 0) {
      let games = this.state.games
      let primaryGame = games[0]
      games.shift()
      let pg = (
        <div key={primaryGame.id} data-id={primaryGame.id} onClick={this.handleGameChoise}>
          <Bootstrap.Image src={primaryGame.thumb} alt={primaryGame.name} />
          <h3>{primaryGame.name}</h3>
        </div>
      )
      let secondaryContainerGames = games.map(game => (
        <Bootstrap.Col md={3} key={game.id} className='game' data-id={game.id} onClick={this.handleGameChoise}>
          <Bootstrap.Image src={game.thumb} alt={game.name} />
          <h3>{game.name}</h3>
        </Bootstrap.Col>
      ))

      return (
        <Bootstrap.Container className=''>
          <h2>Category title</h2>
          <hr />
          <GamesGrid
            primarygame={pg}
            games={secondaryContainerGames} />
        </Bootstrap.Container>
      )
    } else {
      return (
        <div>asdasd</div>
      )
    }
  }
}
