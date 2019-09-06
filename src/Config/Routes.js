import React from 'react'
import { Route, Switch } from 'react-router-dom'
import CategoriesContainer from '../Components/CategoriesContainer'
import SelectedGame from '../Components/SelectedGame'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={CategoriesContainer} />
    <Route path='/selectedgame/:id' component={SelectedGame} />
  </Switch>
)

export default Routes
