import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from './actions/filters';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';
import '../styles/components/header.css';
import compose from 'recompose/compose';

const styles = theme => ({
    root: {
      margin: '1.6rem',
      padding: '1.6rem',
      boxShadow: '0'
      
    }
  });
  


export class BentoListFilters extends React.Component {
   state = {
       
   };

   onTextChange = (e) => {
    this.props.setTextFilter(e.target.value)
    }

    render() {
        const { classes } = this.props;
    return (
        <Box
        boxShadow={0}
        className={classes.root}
        >
        
        <input type="text"
            
            placeholder="Search"
            inputProps={{ 'aria-label': 'Search' }}
            value={this.props.filters.onTextChange}
            onChange={this.onTextChange} />
                <SearchIcon />
        </Box>
    )}}

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text))
})

const mapStateToProps = (state) => ({ filters: state.filters })


export default 
    withStyles(styles)(
    connect(mapStateToProps, mapDispatchToProps)
    (BentoListFilters))
