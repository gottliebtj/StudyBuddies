import {withStyles} from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar';
import { Circle } from 'rc-progress';


const couponOutline = require('../icon/coupon-outline.png')

const styles = {
  card: {
    display: 'inline-block',
    flexBasis: '25%',
    flexGrow: 1,
    width: '100%',
    textDecoration: 'none'
  },
  content: {
    minHeight: 100,
    textDecoration: 'none'
  },
  circle: {
    marginLeft: '90px'
  }

}

const CouponCard = ({coupon, classes}) => (
  <Card className={classes.card} component={Link} to={coupon.id}>
    <CardContent className={classes.content}>
      <Avatar>{coupon.initials}</Avatar>
      <Typography style={{display: 'inline'}} gutterBottom variant='headline' component='h2'>
        {coupon.name}
      </Typography>
      <Typography component='p'>
        {coupon.class}
      </Typography>
      <Circle className={classes.circle} style={{height:'200px',width:"200px"}} percent={coupon.percent} strokeWidth="4" strokeColor="#124dcc" />
      <Typography  component='p'>
        {coupon.percent}% completed
      </Typography>
      <CardActions>
        <Button component={Link} to={coupon.id}>Go To Achievement Diary</Button>
      </CardActions>
    </CardContent>
  </Card>
)

CouponCard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(CouponCard)
