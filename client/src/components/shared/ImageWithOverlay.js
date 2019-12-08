import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Paper, Box } from '@material-ui/core'

const ImageWithOverlay = ({ image, mainText, header, subtitle, buttonText1, buttonText2, right }) => {

  const useStyles = makeStyles({
    root: {
        backgroundColor: 'transparent',
        border: 'none',
        width: '100%',
        margin: '0 auto',
        ['@media (max-width:1024px)']: { // eslint-disable-line no-useless-computed-key
            width: '100%',
          },
        ['@media (min-width:1025px)']: { // eslint-disable-line no-useless-computed-key
            paddingTop: '25px',
            paddingBottom: '25px'
        },
    },
    imageContainer: {
      overflow: 'hidden',
      position: 'relative',
      backgroundColor: 'transparent',
      ['@media (min-width:1025px)']: { // eslint-disable-line no-useless-computed-key
        marginTop: '50px',
      },
    },
    image: {
      // background: `url(${image})`,
      // backgroundRepeat: 'no-repeat',
      // backgroundSize: 'contain',
      transform: 'translate3d(0px, 0px, 0px) scale(1, 1)',
      position: 'absolute',
      top: '0%',
      left: '0%',
      height: '100%',
      width: '100%',
      transition: 'all .3s ease-in-out',

      '&:hover': {
        transform: 'translate3d(0px, 0px, 2px) scale(.99, .99)',
     },
    },
    imagePosWrapperRight: {
      position: 'relative',
      marginBottom: '2%',
      backgroundColor: 'transparent',

      ['@media (max-width:1024px)']: { // eslint-disable-line no-useless-computed-key
        marginRight: '0',
      },
      
      ['@media (min-width:1024px)']: { // eslint-disable-line no-useless-computed-key
        marginRight: '16.66667%',
      },

      ['@media (min-width:1200px)']: { // eslint-disable-line no-useless-computed-key
        marginRight: '16.66667%',
      },
    },
    imagePosWrapperLeft: {
      position: 'relative',
      marginBottom: '2%',
      backgroundColor: 'transparent',

      ['@media (max-width:1024px)']: { // eslint-disable-line no-useless-computed-key
        marginLeft: '0',
      },
      
      ['@media (min-width:1024px)']: { // eslint-disable-line no-useless-computed-key
        marginLeft: '16.66667%',
      },

      ['@media (min-width:1200px)']: { // eslint-disable-line no-useless-computed-key
        marginLeft: '16.66667%',
      },
    },
    imageWrapper: {
      position: 'relative',
      // width: '100%',
      // height: '100%',
      padding: '49% 100% 0 0',
    },
    imageMask: {
      transform: 'matrix(1, 0, 0, 1, 0, 0)',
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      backgroundColor: 'transparent'
    },
    textBoxPosWrapper: {
        transform: 'matrix(1, 0, 0, 1, 0, 0)',
        backgroundColor: '#ffffff',
        color: 'black',
        zIndex: '20',
        textAlign: 'left',

        ['@media (max-width:1024px)']: { // eslint-disable-line no-useless-computed-key
            left: '0',
            top: '-25px',
            padding: '40px 30px 20px 30px',
            margin: '0 auto',
            width: '95%',
            position: 'relative'
          },
      
        ['@media (min-width:1024px)']: { // eslint-disable-line no-useless-computed-key
            bottom: '0',
            right: '0',
            margin: '0',
            maxWidth: '460px',
            padding: '4.226%',
            position: 'absolute',
        },

        ['@media (min-width:1200px)']: { // eslint-disable-line no-useless-computed-key
            bottom: '0',
            right: '0',
            margin: '0',
            maxWidth: '460px',
            padding: '4.226%',
            position: 'absolute',
        },
    },
    textBoxPosWrapperLeft: {
        transform: 'matrix(1, 0, 0, 1, 0, 0)',
        backgroundColor: '#ffffff',
        color: 'black',
        zIndex: '20',
        textAlign: 'left',

        ['@media (max-width:1024px)']: { // eslint-disable-line no-useless-computed-key
            right: '0',
            padding: '40px 30px 20px 30px',
            margin: '0',
            width: '100%',
            position: 'relative'
          },
      
        ['@media (min-width:1024px)']: { // eslint-disable-line no-useless-computed-key
            bottom: '0',
            left: '0',
            margin: '0',
            maxWidth: '460px',
            padding: '4.226%',
            position: 'absolute',
        },

        ['@media (min-width:1200px)']: { // eslint-disable-line no-useless-computed-key
            bottom: '0',
            left: '0',
            margin: '0',
            maxWidth: '460px',
            padding: '4.226%',
            position: 'absolute',
        },
    },
    header: {
        margin: 0,
        marginBottom: '0.6666666667rem',
        lineHeight: '1.111111111',
        color: '#222021',
        fontSize: '36px'
    },
    subtitle: {
        fontSize: '16px'
    },
    mainText: {
        color: 'rgb(224,30,60)',
        fontSize: '18px',
        lineHeight: '1.1666666667',
        letterSpacing: '-1px',
        fontWeight: '400',
        textTransform: 'uppercase',
        margin: 0,
        marginBottom: '10.0px'
    }


  });
  
  const classes = useStyles();

  return (
    <Box className={classes.root}>
            <Box square={true} marginTop={4} className={classes.imageContainer}>
              <Box className={right ? classes.imagePosWrapperRight : classes.imagePosWrapperLeft}>
                  <Box className={classes.imageWrapper}>
                    <Box elevation={3} className={classes.imageMask}>
                      <img src={image} className={classes.image}/>
                    </Box>
                  </Box>
              </Box>
              <Paper elevation={10} square={true} className={right ? classes.textBoxPosWrapper : classes.textBoxPosWrapperLeft}>
                <Box>
                    <p className={classes.mainText}>{mainText}</p>
                    <h3 className={classes.header}>{header}</h3>
                    <p className={classes.subtitle}>{subtitle}</p>
                </Box>
              </Paper>
            </Box>
    </Box>
  );
};

export default ImageWithOverlay;
