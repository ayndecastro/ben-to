import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Image from '../../images/Image01.jpg';
import Box from '@material-ui/core/Box';
import TopBar from '../components/LandingPageTopBar';
import '../../styles/components/landingPage.css';
import SearchBentoForm from '../components/SearchBentoForm'
import LandingPageSecondPage from '../components/LandingPageSecondPage';

const useStyles = makeStyles({
    Page1: {
      minHeight: '100vh',
      width: 'auto',
      backgroundImage: `linear-gradient(to right top, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, .5  ) ),  url(${Image})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      backgroundSize: "cover",
      ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
        backgroundPosition: "center -170px",
        backgroundSize: "100% 50% contain",
      }
    },
    form: {
      position: 'absolute',
      top: '30%',
      left: '10%',
      ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
          width: '100%',
          maxWidth: '100%',
          left: '0',
          top: '50%'
        }
    }
  });

  export default function LandingPage() {
    const classes = useStyles();

    return (
      <div>
        <div  className={classes.Page1}>
          <TopBar  />
            <Box className={classes.form}>
              <SearchBentoForm 
              header={"Discover Authentic Home-Cooked Bento."}
              />
            </Box>
        </div>
      </div>
    );
  }
