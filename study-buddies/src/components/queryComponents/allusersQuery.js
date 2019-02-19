

import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
var cors = require('cors')

export default class AllUsersQuery extends React.Component {
  render(){
    return(
      <div>
      <Query
      query={gql`
        {
          users {
            name
            id
          }
        }
        `}
        >
        {({ loading, error, data }) => {
          if (loading) return <p>Good things take time....</p>
          if (error) return <p>Something went wrong...</p>

          return <div className="row">{data.users.map(user => <p>{user.id}, {user.name} </p> )}</div>
        }}
        </Query>
        </div>
      )
  }
}
