import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';
import Box from '@material-ui/core/Box';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';
import '../../styles/components/header.css';

const styles = theme => ({
    root: {
      margin: '1.6rem',
      padding: '1.6rem',
      boxShadow: '0'
      
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
        <Box
        boxShadow={0}
        className={classes.root}
        >
        
        <input type="text"
            
            placeholder={this.state.value ? this.state.value : ''}
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
    connect(mapStateToProps, mapDispatchToProps)(BentoListFilters))
