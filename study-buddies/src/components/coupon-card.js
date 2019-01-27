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


const couponOutline = require('../icon/coupon-outline.png')

const styles = {
  card: {
    display: 'inline-block',
    flexBasis: '25%',
    flexGrow: 1,
    flexShrink: 1,
    margin: 10,
    maxWidth: 500,
    minWidth: 250
  },
  content: {
    minHeight: 100
  },
  mediaWrapper: {
    height: 200,
    backgroundColor: '#ccc',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center'
  },
  media: {
    height: '100%',
    width: '100%'
  }
}

const CouponCard = ({coupon, classes}) => (
  <Card className={classes.card}>
    <div className={classes.mediaWrapper}>
      <CardMedia className={classes.media} image={coupon.couponImg} />
    </div>
    <CardContent className={classes.content}>
      <Typography gutterBottom variant='headline' component='h2'>
        {coupon.company}
      </Typography>
      <Typography component='p'>
        {coupon.shortDescription}
      </Typography>
    </CardContent>
    <CardActions>
      <Button component={Link} to={coupon.id}>Redeem</Button>
    </CardActions>
  </Card>
)

CouponCard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(CouponCard)
