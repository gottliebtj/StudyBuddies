import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'



const styles = theme => ({
  root: {
    margin: '0px auto',
    display: 'inline-block',
    maxWidth: '750px',
    padding: '20px'
  },

  div: {
    margin: '35px auto',
    display: 'block',
    textAlign: 'center'
  }

})

const AchievementDiary = ({ diary, classes }) => (
  <div className={classes.div}>
    <Paper className={classes.root} elevation={15}>
      <Typography variant='headline' component='h1'>
        Tyler Gottlieb and {diary.name}
      </Typography>

    </Paper>
  </div>
)

AchievementDiary.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(AchievementDiary)
