import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Header from './components/header'
import SecondBar from './components/secondary'
import content from './coupon-content.json'
import CouponCard from './components/buddy-card'
import Grid from '@material-ui/core/Grid'

require('normalize.css')

const RegisterPage = ({ props, match }) => {

    return (
      <div>
      </div>
    )

}

const IndexPage = ({ props, match }) => {

  const fullcouponList = content.map((coupon) => <Grid key={coupon.id} item xs={12} sm={6} lg={4}> <CouponCard coupon={coupon} /> </Grid>)

  return (
    <div>
      <div style={{flexGrow: 1}}>
      <Grid container spacing={24}>
        {fullcouponList}
      </Grid>
      </div>
    </div>
  )
}

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route path='/register' component={RegisterPage} />
        <Route component={IndexPage} />
      </Switch>
    </div>
  </Router>

)

var render = () => {
  ReactDOM.render(
      <App />,
    document.getElementById('root')
  )
}

render()
