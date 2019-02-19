import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import find from 'lodash.find'
import Header from './components/header'
import SecondBar from './components/secondary'
import content from './coupon-content.json'
import CouponCard from './components/buddy-card'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import AchievementDiary from './components/achievement-diary'
import AllUsers from './components/queryComponents/allusersQuery'

import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
require('normalize.css')


const client = new ApolloClient({
  uri: 'https://staging.studytools.com/api/graphql',
})

const RegisterPage = ({ props, match }) => {

    return (
      <div>

      </div>
    )

}
const AllUsersQuery = ({ props, match }) => {
    return (
      <div>
      <ApolloProvider client={client}>
      <AllUsers />
      </ApolloProvider>
      </div>
    )
}





const Achievements = ({ props, diary, match }) => {
  const foundPartnerDiary = find(content, {id: match.params.id})
  return (
    <div>
      <Header title='Redeeming ' />
      <AchievementDiary diary={foundPartnerDiary} />
    </div>
  )
}






const IndexPage = ({ props, match }) => {

  const fullcouponList = content.map((coupon) => <Grid key={coupon.id} item xs={12} sm={6} lg={4}> <CouponCard coupon={coupon} /> </Grid>)

  return (
    <div>
    <Header />
      <div style={{flexGrow: 1}}>
      <Typography style={{display: 'inline'}} gutterBottom variant='headline' component='h1'>
      Tyler Gottlieb's Study Buddies
      </Typography>
      <br />
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
        <Route path='/allusers' component={AllUsersQuery} />
        <Route path='/:id' component={Achievements} />
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
