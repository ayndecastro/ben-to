import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';
import '../../styles/components/header.css';
import { Paper, TextField } from '@material-ui/core';

const styles = theme => ({
    root: {
      margin: '1.6rem',
      padding: '.6rem',
      boxShadow: '0'
      
    },
    search:{
        '&:active': {

        }
    }
  });
  


export class BentoListFilters extends React.Component {
   state = {
       value: this.props.value ? this.props.value : ''
   };

    componentDidMount = () => {
        this.props.setTextFilter(this.state.value)
    }

    onTextChange = (e) => {
    this.props.setTextFilter(e.target.value)
    }

    render() {
        const { classes } = this.props;
    return (
        <Paper
        elevation={0}
        className={classes.root}
        >
        
        <TextField
            type="search"
            margin='dense'
            
            placeholder={this.state.value ? this.state.value : ''}
            inputProps={{ 'aria-label': 'Search' }}
            value={this.props.filters.onTextChange}
            className={classes.search}
            onChange={this.onTextChange} />
            <SearchIcon />
        </Paper>
    )}}

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text))
})

const mapStateToProps = (state) => ({ filters: state.filters })


export default 
    withStyles(styles)(
    connect(mapStateToProps, mapDispatchToProps)(BentoListFilters))
