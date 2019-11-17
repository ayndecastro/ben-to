import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/Auth';
import { Box, Grid } from '@material-ui/core';
import Icon from '../../img/favicon.png';
import { makeStyles } from '@material-ui/styles';

const Navbar = ({ auth: { isAuthenticated, loading }, logout, landing }) => {

  const useStyles = makeStyles({
    box: {
      zIndex: '100'
    },
    root: {
      textDecoration: 'none',
      background: '#212121',
      color: 'white',
      padding: '0.7rem 2rem',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignContent: 'center',
      alignItems: 'center',
      border: 'none',
      // borderBottom: 'gray 2px solid',
      marginBottom: 0,
      position: 'relative',
      textDecoration: 'none',
      width: '100%'
    },
    rootLanding: {
      textDecoration: 'none',
      background: '#E1EAEF',
      padding: '0.7rem 2rem',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignContent: 'center',
      alignItems: 'center',
      border: 'none',
      // borderBottom: 'gray 2px solid',
      marginBottom: 0,
      position: 'relative',
      textDecoration: 'none',
      width: '100%',
      color: 'white'
    },
    ul : {
      display: 'flex',
      padding: '0.7rem 2rem',
      listStyleType: 'none',
      justifyContent: 'flex-end',
      alignContent: 'flex-end',

      ['@media (max-width:960px)']: { // eslint-disable-line no-useless-computed-key
        justifyContent: 'center',
      alignContent: 'center',
      },
    },
    li: {
      fontWeight: '500',
      letterSpacing: '1px',
      fontSize: '15px',
      textTransform: 'uppercase',
      verticalAlign: 'baseline',
      padding: '0.6rem',
      margin: '0 0.25rem',
      textDecoration: 'none',
      transition: 'all .1s ease-in-out',
      border: 'none',
      color: 'white',
      '&:hover': {
        borderBottom: '.2px solid white'
     },
    },

    liLanding: {
      fontWeight: '500',
      letterSpacing: '1px',
      fontSize: '15px',
      textTransform: 'uppercase',
      verticalAlign: 'baseline',
      padding: '0.6rem',
      margin: '0 0.25rem',
      textDecoration: 'none',
      transition: 'all .1s ease-in-out',
      border: 'none',
      color: '#665247',
      '&:hover': {
        borderBottom: '.2px solid #665247'
     },
    },
    Icon: {
      marginRight: 'auto',
      ['@media (max-width:960px)']: { // eslint-disable-line no-useless-computed-key
        display: 'flex',
        justifyContent: 'center',
      alignContent: 'center',
      },
    },
    links: {
      marginLeft: 'auto'
    }
  });

  const classes = useStyles();

  const authLinks = (
    <ul className={classes.ul}>
      <li>
        <Link className={landing ? classes.liLanding : classes.li} style={{ textDecoration: 'none'}} color='inherit' to='/profiles'>Profiles</Link>
      </li>
      <li>
        <Link className={landing ? classes.liLanding : classes.li} style={{ textDecoration: 'none'}} color='inherit' to='/bentos'>Bento</Link>
      </li>
      <li>
        <Link className={landing ? classes.liLanding : classes.li} style={{ textDecoration: 'none'}} color='inherit' to='/add-bento'>Create Bento</Link>
      </li>
      <li>
        <a onClick={logout} href='#!'>
          <i /> <span>Logout</span>
        </a>
      </li>
    </ul>
  );
  const guestLinks = (
    <ul className={classes.ul}>
      <li>
        <Link className={landing ? classes.liLanding : classes.li} style={{ textDecoration: 'none'}} color='inherit' to='/profiles'> Profiles</Link>
      </li>
      <li>
        <Link className={landing ? classes.liLanding : classes.li} style={{ textDecoration: 'none'}} color='inherit' to='/register'> Register</Link>
      </li>
      <li>
        <Link className={landing ? classes.liLanding : classes.li} style={{ textDecoration: 'none'}} color='inherit' to='/login'> Login</Link>
      </li>
    </ul>
  );

  return (
      <Box boxShadow={10} position='static' className={classes.box}>
        <Grid container spacing={0} className={landing ? classes.rootLanding : classes.root}>
          <Grid item xs={12} md={8} lg={8}>
          <h1 className={classes.Icon}> 
            <Link to='/'>
              <img src={Icon} alt='Bento' className='header__title.img' />
            </Link>
          </h1>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={3} xl={2} className={classes.links}>
          {!loading && 
            isAuthenticated ? authLinks : guestLinks
          }
        </Grid>
        
        </Grid>
      </Box>
  );
};

Navbar.ProtoTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
