import { LoginPage } from 'presentation/pages'
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'presentation/styles/global.scss'

const Router: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" exact component={LoginPage} />
    </Switch>
  </BrowserRouter>
)

export default Router
