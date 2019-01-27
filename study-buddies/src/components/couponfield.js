import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const styles = theme => ({

  container: {
    display: 'block',
    margin: 'auto',
    width: '100%'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    // this is how you change the length of the extry bar
    width: '45%'
  }
})

const TextFieldMargins = props => {
  const { classes } = props

  return (
    <div className={classes.container}>
      <TextField
        label='Type Coupon Code'
        id='margin-normal'
        className={classes.textField}
        onChange={(evt) => { console.log(evt.target.value) }}
        margin='normal'
      /><br />
    </div>
  )
}

TextFieldMargins.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(TextFieldMargins)
