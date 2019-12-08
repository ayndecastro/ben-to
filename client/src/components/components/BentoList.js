import React from 'react';
import { connect } from 'react-redux';
import BentoListItem from './BentoListItem'
import selectBento from '../selectors/bento';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import BentoListFilters from './BentoListFilters';


const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        minHeight: '50rem',
        margin: 'auto'
    },
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '1.6rem',
        maxHeight: '8rem'
    },
    header: { 
        fontSize: '30px',
        lineHeight: '36px',
        letterSpacing: 'normal',
        color: '#484848',
        flex: '1',
        padding: '0 -6px',
        fontWeight: 'bold',
        fontFamily: 'Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif'
    },
    headerSearch: {
        marginTop: '0rem',
    },
    bento: {
        margin: '1rem',
        ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
            width: '95%',
            height: 'auto',
            margin: '1rem auto'
          }
    }
  });

  function BentoList(props) {
    const classes = useStyles();

    return (
        <Paper
        elevation={2}
        square={true}>
        <Paper 
        elevation={1}
        square={true}
        className={classes.headerContainer}>

            <Typography 
                gutterBottom 
                variant="h2"
                component="h2" 
                className={classes.header}>
                    <Box 
                        textAlign="justify" 
                        m={1}
                        p={2}
                        fontWeight="fontWeightBold"
                        letterSpacing={-1} >
                            {props.header ? props.header : 'Bento'}
                    </Box>
            </Typography>

            <Box
            className={classes.headerSearch}
            >
            <BentoListFilters
            value={props.value ? props.value : ''}
            />
            </Box>
        </Paper>
    
        <div  className={classes.root}>
    {
        props.bento.length === 0 ? (
            <p> No bento </p>
        ) : (
            
            props.bento &&
            props.bento.map((expense) => {
                return (
                    
                    
                    <Paper
                    elevation={0}
                    className={classes.bento}
                    key={expense.id}
                    >
                    
                    <BentoListItem
                    {...expense} 
                    key={expense.id}
                    />
                    
                    </Paper>
                    
                )
            })
        )
    }
    </div>
    </Paper>
    );
  }

const mapStatetoProps = (state) => {
    return {
        bento: selectBento(state.bento, state.filters)
    }
}

export default connect(mapStatetoProps)(BentoList);