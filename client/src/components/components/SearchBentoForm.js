import React from 'react';
import { Paper, Typography, Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const styles = theme => ({
    root: {
      background: 'none',
      position: 'inherit',
      ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
        width: '100%',
        maxWidth: '100%',
        margin: '0'
      }
      
    },
    form: {
        padding: '3.2rem',
        height: '40rem',
        maxWidth: '33rem',
        ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
            width: '100%',
            maxWidth: '100%',
            margin: '0'
          }
    },
    header: {
        fontSize: '30px',
        lineHeight: '36px',
        letterSpacing: 'normal',
        color: '#484848',
        flex: '1',
        padding: '0 -6px',
        fontWeight: 'bold',
        fontFamily: 'Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif',
        ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
            overflowWrap: "break-word",
            margin: '1rem',
            fontSize: '20px'
          }
        
    },
    header2: {
        fontSize: '8.4rem',
        marginTop: '-2rem',
        paddingTop: '0'
    },
    inputBento: {   
        fontSize: '2rem' 
    },
    textField: {
        alignSelf: "flex-end",
        width: '5rem'
    },
    searchButton: {
        marginTop: '2rem',
        boxShadow: 0,
        '&:hover': {
            background: '#2ABBC7',
            transition: 'background .5s ease-in-out'
        }
    },
    inputCuisine: {
    },
    inputCost: {
    }
  });
  

class BentoForm extends React.Component {
    

    constructor(props) {
        super(props)

        this.state = {
            name: props.bento ? props.bento.name : '',
            cuisine: props.bento ? props.bento.cuisine : '',
        };
    }

    onNameChange = (e) => {
        const name = e.target.value;
        this.setState({ name })
    }

    onCuisineChange = (e) => {
        const cuisine = e.target.value;
        this.setState({ cuisine })
    }

    onSubmit = (e) => {
        e.preventDefault();

        if(this.state.currentQuestion === 'name') {
            if(this.state.name.length >= 1) {
                this.setState({
                    currentQuestion: 'cuisine'
                })
            }
        }

        if(this.state.currentQuestion === 'cuisine') {
            if(this.state.cuisine.length >= 1) {
                this.setState({
                    currentQuestion: 'cost'
                })
            }
        }

        if(this.state.currentQuestion === 'none') {
            this.setState(() => ({ error: ''}))
            this.props.onSubmit({
                name: this.state.name,
                cost: parseFloat(this.state.cost, 10) * 100,
                ingredients: this.state.ingredients,
                cuisine: this.state.cuisine,
                img: this.state.img

            })
        }
    }

    render () {
        
        return (
            <Paper elevation={3}>
                <form onSubmit={this.onSubmit}>
                <Paper  className={this.props.classes.form} square={true} elevation={21}>
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                    <Typography gutterBottom variant="h1" component="h1" className={this.props.classes.header}>
                    {this.props.header}
                    </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                        type="text"
                        label="Search by Dish Name"
                        fullWidth
                        margin="normal"
                        variant="standard"
                        className={this.props.classes.inputBento}
                        value={this.state.name}
                        onChange={this.onNameChange}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                        type="text"   
                        InputProps={{
                            classes: {
                            input: this.props.classes.input,
                            },
                        }}
                        fullWidth
                        margin="normal"
                        variant="standard"
                        label="Search by Cuisine"
                        className={this.props.classes.inputCuisine}
                        value = {this.state.cuisine}
                        onChange={this.onCuisineChange}
                        />
                    </Grid>
                    <Grid item xs={7}></Grid>

                    <Grid 
                    mt={3}
                    alignSelf="flex-end"
                    item xs={5}>

                    <Link to={this.state.name ? `/market/${this.state.name}` : this.state.cuisine ? `/market/${this.state.cuisine}` : `/home`} >
                    <Button
                    variant="contained"
                    elevation={0}
                    className={this.props.classes.searchButton}
                    > Search Bento </Button>
                    </Link>
                    </Grid>
                </Grid>
                </Paper>
                </form>
            </Paper>
        )
    }
}

export default withStyles(styles)(BentoForm);