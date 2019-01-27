import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Header from './components/header'
import SecondBar from './components/secondary'
import content from './coupon-content.json'
import CouponCard from './components/coupon-card'

require('normalize.css')
require('./index.styl')


const RegisterPage = ({ props, match }) => {

    return (
      <div>
      </div>
    )

}

const IndexPage = ({ props, match }) => {
  const fullcouponList = content.map((coupon) => <CouponCard key={coupon.id} coupon={coupon} />)

  return (
    <div>
      <Header title='SnapSmall' />
      <SecondBar />
      <div id='coupon-list'>
        {fullcouponList}
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
