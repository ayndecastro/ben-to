import React, { Fragment, useEffect, Suspense, useState } from 'react';
import Spinner from '../Layout/Spinner';
import PropTypes from 'prop-types';

import BentoListFilters from './bentoListFilter';
import BentoItems from './bentoItems';
import { connect } from 'react-redux';
import { Box, Typography, Grid, Paper, Card, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { getBentos } from '../../actions/Bento';
import ThumbsUpIcon from '../../assets/thumbsup.png'

const BentoList = ({ getBentos, bento: { bentos, loading } }) => {
  useEffect(() => {
    getBentos();
  }, [getBentos]);

  const [bentoClicked, clickBento] = useState()

  const onBentoClick = (bento) => {
    clickBento(bento)
    console.log(bentoClicked)
  }

  const useStyles = makeStyles({
    root: {
      height: 'fit-content',
      minHeight: '50rem',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    headerContainer: {
      display: 'flex',
      flexDirection: 'row',
      marginBottom: '1.6rem'
    },
    header: {
      flexGrow: 1
    },
    headerSearch: {
      marginTop: '0rem'
    },
    bento: {
      margin: '.5rem'
    },
    //bentoList
    BentoList: {
    },
    //bentoselected
    BentoSelected: {
      width: '90%',
      minHeight: '50rem',
      margin: '20px auto'
    },
    card: {
      width: '100%',
      height: '100%'
    },
    image: {
      height: '45rem',
      width: 'auto'
    },
    BentoSelectedHeader: {

    },
    BentoSelectedDescription: {
      marginTop: '10px'
    },
    BentoSelectedDetailsPaper: {
      width: '100px',
      height: '100px',
      border: 'black 1px',
      
    },
    BentoSelectedDetails: {
      marginLeft: '20px',

      ['@media (max-width:960px)']: { // eslint-disable-line no-useless-computed-key
        marginLeft: '0',
      },
    },
    detailsContainer: {
      marginTop: '20px',
      textAlign: 'left',
      border: 'none',
      borderBottom: 'solid 1px black'
    },
    detailsDescription: {
      textAlign: 'left'
    }
  });

  const classes = useStyles();

  const BentoListComponent = () => (
    <div className={classes.BentoList}>
    <Suspense fallback={<Spinner />}>
      { 
        bentos.map(bento => {
         return (
             <Paper elevation={2} key={bento._id} className={classes.bento} onClick={() => onBentoClick(bento)}>
               <BentoItems key={bento._id} bento={bento} />
             </Paper>
         );
       })
       }
    </Suspense>
    </div>
  ) 

  const DetailsComponent = (props) => {
    const { description, value } = props; 
    return (
      <Grid container spacing={0}>
        <Grid item xs={6} md={3} lg={2} className={classes.detailsDescription}>
          <Typography variant="body1">
            {description}
          </Typography>
        </Grid>
        <Grid item xs={6} md={9} lg={10}>
          <Typography variant="body1">
            {value}
          </Typography>
        </Grid>
      </Grid>
    )
  }

  const BentoSelected = (bento) => {
    
    const { _id, nameofbento, cuisine, ingredients, cost, image, user, amount, likes } = bento.bento
    
    return (
      <Box className={classes.BentoSelected} m={1}>
        <Grid container spacing={6} style={{minHeight: '40rem'}}>
          {console.log(bentoClicked)}
        <Grid item xs={12} md={12} lg={3}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.image}
              image={image}  
              title={nameofbento}
            />
          </Card>
        </Grid>

        <Grid item xs={9}>
          <Typography 
            gutterbottom='true'
            variant='h3'
            component='h3'
            className={classes.BentoSeletedHeader}
          >
            {nameofbento}
          </Typography>
          <Typography 
            gutterbottom='true'
            variant='body1'
            component='body1'
            className={classes.BentoSelectedDescription}
          >
            {'Authentic ' + cuisine + ' food, contains ' + ingredients.join(', ') + '.'}
          </Typography>

          <Box className={classes.BentoSelectedDetails}>
            
            <Grid container spacing={2}>
              <Grid item xs={12} className={classes.detailsContainer}>
               <Typography variant="h5">Details</Typography>
              </Grid>
                {
                  <Grid item xs={12}>
                    <DetailsComponent description="Kitchen Name" value={"Lola's"}/>
                  </Grid>
                }
                {cost &&
                  <Grid item xs={12}>
                    <DetailsComponent description="Cost" value={'$' + cost}/>
                  </Grid>
                }
                {cuisine && 
                  <Grid item xs={12}>
                    <DetailsComponent description="Cuisine" value={cuisine}/>
                  </Grid>
                }
                {amount && 
                  <Grid item xs={12}>
                    <DetailsComponent description="Amount Remaining" value={amount + " Bentos"}/>
                  </Grid>
                }
                {ingredients.length > 0 &&
                  <Grid item xs={12}>
                    <DetailsComponent description="Ingredients" value={ingredients.join(', ')}/>
                  </Grid>
                }
                {likes && likes.length > 0 &&
                  <Grid item xs={12}>
                    <DetailsComponent description="Likes" 
                      value={
                        <div>
                          <img src={ThumbsUpIcon}
                            height="20px"
                            width="20px"
                          />
                          <Typography variant="body1">({likes.length})</Typography>
                        </div>
                      }/>
                  </Grid>
                }
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )}

  return (
    <Fragment>
      <Paper square elevation={21}>
        <Box boxShadow={1} className={classes.headerContainer}>
          <Typography
            gutterbottom='true'
            variant='h2'
            component='h2'
            className={classes.header}
          >
            <Box
              textAlign='justify'
              m={1}
              p={2}
              fontWeight='fontWeightBold'
              letterSpacing={-1}
            >
              Bento
            </Box>
          </Typography>

          <Box className={classes.headerSearch} gutterbottom='true'>
            {/* <BentoListFilters /> */}
          </Box>
        </Box>
        <div className={classes.root}>
          {
            bentos.length === 0 ? (
              <div className={classes.BentoList}>
               <p> No bento </p>
              </div>
            ) : (
              bentos && !!bentoClicked == false ?
              <BentoListComponent /> : <BentoSelected bento={bentoClicked}/>
          )}
        </div>
      </Paper>
    </Fragment>
  );
};

BentoList.propTypes = {
  getBentos: PropTypes.func.isRequired,
  bento: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  bento: state.bento
});

export default connect(mapStateToProps, { getBentos })(BentoList);
