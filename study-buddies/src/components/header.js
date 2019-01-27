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
  }
}

function ButtonAppBar (props) {
  const { title, classes } = props
  const barStyle = {
    // change the color of the header here
    backgroundColor: '#2C3539',
    height: '85px'

  }

  return (
    <div className={classes.root}>
      <AppBar style={barStyle} className='appbar' position='static'>
        <Toolbar>

          <img className='imageStyle' src='https://image.ibb.co/d2fZBy/Webp_net_resizeimage.png' />

          <Button component={Link} to='/register'>Register</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ButtonAppBar)
