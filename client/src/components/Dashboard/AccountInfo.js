import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
    margin: '0 auto',
    backgroundColor: '#fafafa',
    display: 'flex',
    flexDirection: 'column',
    
    ['@media (min-width:800px)']: { // eslint-disable-line no-useless-computed-key
      // maxWidth: '800px',
    },
  },
  tabs: {
    marginBottom: 'auto',
    height: 'fit-content'
  },
  panel: {
    padding: theme.spacing(3),
    marginBottom: theme.spacing(1),
    fontSize: '18px'
  },
  buttonGroup: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    width: 'fit-content'
  },
  footer: {
    width: '100%',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    backgroundColor: '#eeeeee',
    padding: theme.spacing(3),
    '& p': {
      marginRight: theme.spacing(2),
    },
    marginTop: 'auto'
  },
  container: {
    width: '100%',
  },
});

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, classes, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
      
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const AccountInfo = (props) => {
  const [value, setValue] = React.useState(0);

  const {
    classes,
    bottomLeftSlot,
    bottomRightSlot,
    handleSubmit,
    DashboardSection,
    FavoritesSection,
    MyBentoSection
  } = props;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <div className={classes.tabs}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Dashboard" {...a11yProps(0)} />
          <Tab label="Favorites" {...a11yProps(1)} />
          <Tab label="My Bentos" {...a11yProps(2)} />
        </Tabs>

        <TabPanel value={value} className={classes.panel} index={0} dir={'x'}>
          {DashboardSection}
        </TabPanel>
        <TabPanel value={value} className={classes.panel} index={1} dir={'x'}>
          {FavoritesSection}
        </TabPanel>
        <TabPanel value={value} className={classes.panel} index={2} dir={'x'}>
          {MyBentoSection}
        </TabPanel>
      </div>

        <div className={classes.footer}>
            {bottomRightSlot && bottomRightSlot()}
        </div>   
    </div>
  );
}

export default withStyles(styles)(AccountInfo);
