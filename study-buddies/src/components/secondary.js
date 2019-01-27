import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

class ScrollableTabsButtonAuto extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            scrollable
            scrollButtons="auto"
          >
            <Tab label="All" />
            <Tab label="HappyHour" component={Link} to='happyhour' ></Tab>
            <Tab label="Services" />
            <Tab label="Food & Bev" />
            <Tab label="Retail" />
            <Tab label="Health and Wellness" />
            <Tab label="Experiences" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>All Coupons</TabContainer>}
        {value === 1 && <TabContainer>Mondays Daily Deals</TabContainer>}
        {value === 2 && <TabContainer>Services</TabContainer>}
        {value === 3 && <TabContainer>Food and Bev</TabContainer>}
        {value === 4 && <TabContainer>Retail</TabContainer>}
        {value === 5 && <TabContainer>Health and Wellness</TabContainer>}
        {value === 6 && <TabContainer>Experiences</TabContainer>}

      </div>
    );
  }
}

ScrollableTabsButtonAuto.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScrollableTabsButtonAuto);
