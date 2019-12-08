import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Paper, Box, TextField, Grid } from '@material-ui/core'
import ImageWithOverlay from '../shared/ImageWithOverlay'
import NavBar from './Navbar';
import pansit from '../../assets/bihon.jpg';
import landingBG from '../../assets/steaks.jpg';
import katsu from '../../assets/katsu.jpg';
import ramen from '../../assets/ramen.jpg';
import footerImg from '../../assets/footer.jpg';
import noodles from '../../assets/noodlessvg.svg';
import bento from '../../assets/bentosvg.svg';

const Landing = ({ isAuthenticated }) => {

  const useStyles = makeStyles({
    root: {
      width: '100%',
      height: '100%',
      backgroundColor: '#f7f7f7'
    },
    landing: {
      width: '100%',
      maxWidth: '90%',
      position: 'relative',
      height: '100%',
      marginLeft: 'auto',
      marginRight: 'auto',
      textAlign: 'center',
      ['@media (max-width:1024px)']: { // eslint-disable-line no-useless-computed-key
        maxWidth: '100%'
      },
    },
    landingContent: {
      width: '100%',
      height: '60vh',
      position: 'relative',
      overflow: 'hidden',
      textAlign: 'center',
      background: '#fafafa',
      ['@media (max-width:1024px)']: { // eslint-disable-line no-useless-computed-key
        width: '100%',
        height: '50vh',
      },
    },
    landingContentImg: {
      width: '100%',
      height: '100%',
      // background: `url(${landingBG}), linear-gradient(red, black)     `,
      // backgroundSize: 'cover',
      // backgroundRepeat: 'no-repeat',
      // backgroundPosition: 'center',
      position: 'absolute',
      top: 0,
      left: 0
    },
    landingContentText: {
      margin: '0 auto',
      width: '100%',
      maxWidth: '880px',
      // background: 'rgba(0, 0, 0, 0.1)',
      padding: '20px',
      margin: '0 auto',
      position: 'absolute',
      top: '50%',
      right: '50%',
      transform: 'translate(50%,-50%)',
      height: '350px',
      zIndex: '2'
    },
    landingHeader: {
      fontSize: '36px',
      textAlign: 'left',
      lineHeight: '1.25',
      fontWeight: '700',
      color: 'black',
      fontStretch: 'normal',
      wordWrap: 'break-word',
      wordBreak: 'break-word',
      marginBottom: '0px'
    },
    landingSubtitle: {
      padding: '0',
      textAlign: 'left',
      width: '100%',
      maxWidth: '50rem',
      fontWeight: '600',
      fontSize: '16px',
      color: '#37474f',
      margin: '0',
      marginBottom: '5px'
    },
    landingTrending: {
      color: '#37474f',
      textAlign: 'left',
      fontSize: '13px',
      margin: 0
    },
    contactUs: {
      backgroundColor: '#e2e2e2',
      height: '50vh',
      position: 'relative'
    },
    footerImg: {
      width: '100%',
      height: '100%',
      background: `url(${footerImg}), linear-gradient(red, black)     `,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: '0'
    },
    cbggBlack: {
      transform: 'rotate(-20deg) translate3d(-50%, -15%, 0)',
      position: 'relative',
      top: '50%',
      left: '50%',
      zIndex: '-1',
      backgroundColor: 'black',
      height: '11.5rem',
      width: '120%'
    },
    contactUsPaper: {
      height: '100%',
      width: '100%',
      margin: '0 auto',
      position: 'relative',
      overflow: 'hidden',
      marginTop: '20px'
    },
    bento: {
      transform: 'rotate(-50deg) translate3d(30%, 68%, 0)',
      zIndex: '-1',
      height: '500px',
      ['@media (max-width:1024px)']: { // eslint-disable-line no-useless-computed-key
        height: '300px',
        transform: 'rotate(-50deg) translate3d(0%, 78%, 0)',
      },
      ['@media (max-width:600px)']: { // eslint-disable-line no-useless-computed-key
        height: '300px',
        transform: 'rotate(-50deg) translate3d(-22%, 83%, 0)',
      
    }
  }
  });
  
  const classes = useStyles();

  if (isAuthenticated) {
    console.log(isAuthenticated);
    return <Redirect to='/dashboard' />;
  }

  return (
    <Box className={classes.root}>
      <NavBar 
      landing/>
      <Box paddingTop={4} className={classes.landingContent}>
        <Box className={classes.landingContentImg}>
          <img src={bento} className={classes.bento}/>
        </Box>
        <Box className={classes.landingContentText}>
          <h1 className={classes.landingHeader}>Introducing Bento</h1>
          <p className={classes.landingSubtitle}> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                dicta sunt explicabo. </p>
                <TextField
                  className={classes.textField}
                  placeholder="Search Dishes"
                  margin="dense"
                  fullWidth
                  inputProps={{ 
                    'aria-label': 'bare',
                    style: { 
                            fontSize: '20px',
                            color: '#37474f',
                            padding: '10px',
                            border: 'none',
                            backgroundColor: 'rgba(255, 255, 255, 0.47)',
                           }
                  }}
                />    
          <p className={classes.landingTrending} >Trending: Filipino, Pasta, Burgers</p>
        </Box>
            
      </Box>
      <Box className={classes.landing}>
          <Grid container spacing={2}>
                  
                  <Grid item xs={12} lg={6}>
                    <ImageWithOverlay 
                        image={katsu} 
                        right
                        header={'Lorem Ipsum'} 
                        subtitle={`ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                          dicta sunt explicabo.`}
                        mainText={"Less Waste, More Food"}
                    />
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <ImageWithOverlay 
                        image={pansit} 
                        right
                        header={'Lorem Ipsum'} 
                        subtitle={`ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                          dicta sunt explicabo.`}
                        mainText={"Less Waste, More Food"}
                    />
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <ImageWithOverlay 
                        image={pansit} 
                        right
                        header={'Lorem Ipsum'} 
                        subtitle={`ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                          dicta sunt explicabo.`}
                        mainText={"Less Waste, More Food"}
                    />
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <ImageWithOverlay 
                        image={ramen}
                        right
                        header={'Lorem Ipsum'} 
                        subtitle={`ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                          dicta sunt explicabo.`}
                        mainText={"Less Waste, More Food"}
                    />
                  </Grid>
          </Grid>
          
          </Box>
          {/* <Box className={classes.contactUs}>

         
                <Paper square elevation={4} className={classes.contactUsPaper}>
                
                  <p>Interested?</p>
                  <h1>We'd love to chat.</h1>

                  <button>CONTACT</button>
                </Paper>
          </Box> */}
      </Box>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
