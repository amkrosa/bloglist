import React, { useState } from "react";
import {
  Grid,
  makeStyles,
  Avatar,
  Typography,
  Tabs,
  Tab,
  Paper
} from "@material-ui/core";
import { connect } from "react-redux";
import Edit from "./Edit";
import Settings from "./Settings";
import Statistics from "./Statistics";
import TabPanel from "../common/TabPanel";
import { getCurrentUser } from "../../actions/userActions";

const useStyles = makeStyles(theme => ({
  userHeaderWrapper: {
    flex: 1,
    marginTop: 120,
    justifyContent: "center",
    alignItems: "center",
    direction: "row"
  },
  avatar: {
    margin: "4rem",
    width: 120,
    height: 120
  },
  userDetails: {
    width: "28rem"
  },
  userDetailsBody: {
    marginTop: "2rem"
  },
  tabsWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  tabs: {}
}));

const Profile = props => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const classes = useStyles();

  return (
    <>
      <Grid className={classes.userHeaderWrapper} container>
        <Avatar className={classes.avatar}>{props.user.name[0]}</Avatar>
        <Grid className={classes.userDetails} item>
          <Typography variant='h3'>{props.user.name}</Typography>
          <Typography className={classes.userDetailsBody} variant='body1'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae
            ipsum consequat, imperdiet sapien sed, rhoncus metus.
          </Typography>
        </Grid>
      </Grid>
      <Grid className={classes.tabsWrapper} container>
        <Paper>
          <Tabs
            value={value}
            indicatorColor='primary'
            textColor='primary'
            onChange={handleChange}
            className={classes.tabs}>
            <Tab label='Statistics' />
            <Tab label='Edit' />
            <Tab label='Settings' />
          </Tabs>
          <TabPanel value={value} index={0}>
            <Statistics />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Edit />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Settings />
          </TabPanel>
        </Paper>
      </Grid>
    </>
  );
};

const mapStateToProps = state => {
  return {
    user: getCurrentUser(state)
  };
};

export default connect(
  mapStateToProps,
  null
)(Profile);
