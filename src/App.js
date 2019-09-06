import React from 'react'
import Routes from './Config/Routes'
import * as Bootstrap from 'react-bootstrap'
import './App.css'

function App () {
  return (
    <div className='App container'>
      <h1>ReactJS casino grid app</h1>
      <Bootstrap.Container className='App categories-container'>
        <Routes />
        <Bootstrap.Row className='footer'>
          <blockquote className='blockquote'>
            <footer className='blockquote-footer'>Powered by <cite title='Nasko Daskalov'>Nasko Daskalov</cite> for <cite title='SBTech'>SBTech</cite></footer>
          </blockquote>
        </Bootstrap.Row>
      </Bootstrap.Container>
    </div>

  )
}

export default App
