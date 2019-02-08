import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'
import TextField from '@material-ui/core/TextField'

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1,
    color: 'white'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    color: 'white'
  },
  register: {
    float: 'right',
    color: 'white'
  }
}

function ButtonAppBar (props) {
  const { title, classes } = props
  const barStyle = {
    // change the color of the header here
    backgroundColor: '#000000',
    height: '55px'

  }

  return (
    <div className={classes.root}>
      <AppBar style={barStyle} className='appbar' position='static'>
        <Toolbar>
        <Typography component='p' className ={classes.title}>
          Study Buddies
        </Typography>
          
        </Toolbar>
      </AppBar>
    </div>
  )
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ButtonAppBar)
