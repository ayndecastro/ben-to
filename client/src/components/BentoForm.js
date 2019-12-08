import React from 'react';
import { Paper, Typography, Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    root: {
      background: 'none'
      
    },
    form: {
        padding: '3.2rem',
        height: '43.5rem',
        margin: '1.6rem',
        maxWidth: '30rem'
    },
    header: {
        fontSize: '2.4rem',
        flex: '1',
        letterSpacing: '-2'
        
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
            ingredients: props.bento ? props.bento.ingredients : '',
            cuisine: props.bento ? props.bento.cuisine : '',
            cost: props.bento ? (props.bento.cost).toString() : ''
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

    onCostChange = (e) => {
        const cost = e.target.value;

        if(!cost || cost.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState({ cost })
        }   else {
            console.log('no match')
        }
    }

    onIngredientsChange = (e) => {
        const ingredients = e.target.value;
        this.setState({ ingredients })
    }

    onImgChange = (e) => {
        const img = e.target.value;
        this.setState({ img })
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

        if(this.state.currentQuestion === 'cost') {
            if(this.state.cost.length >= 1) {
                this.setState({
                    currentQuestion: 'ingredients'
                })
            }
        }

        if(this.state.currentQuestion === 'ingredients') {
            if(this.state.ingredients.length >= 1) {
                this.setState({
                    currentQuestion: 'img'
                })
            }
        }

        if(this.state.currentQuestion === 'img') {
            if(this.state.img.length >= 1) {
                this.setState({
                    currentQuestion: 'none'
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
            <div>
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
                        label="BENTO NAME"
                        autoFocus
                        fullWidth
                        margin="normal"
                        variant="standard"
                        className={this.props.classes.inputBento}
                        value={this.state.name}
                        onChange={this.onNameChange}
                        />
                    </Grid>

                    <Grid item xs={8}>
                        <TextField
                        type="text"
                        autoFocus   
                        InputProps={{
                            classes: {
                            input: this.props.classes.input,
                            },
                        }}
                        margin="normal"
                        variant="standard"
                        label="CUISINE"
                        className={this.props.classes.inputCuisine}
                        value = {this.state.cuisine}
                        onChange={this.onCuisineChange}
                        />
                    </Grid>
                    
                    <Grid item xs={4}>
                        <TextField
                        type="text"
                        label="COST"
                        autoFocus
                        margin="normal"
                        variant="standard"
                        className={this.props.classes.inputCost}
                        value={this.state.cost}
                        onChange={this.onCostChange}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                        margin="normal"
                        variant="standard"
                        fullWidth
                        label="INGREDIENTS" 
                        className={this.props.classes.input}   
                        value={this.state.ingredients}
                        onChange={this.onIngredientsChange}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                        type="text"
                        margin="normal"
                        variant="standard"
                        fullWidth
                        label="IMAGE URL"
                        className={this.props.classes.input}
                        value={this.state.img}
                        onChange={this.onImgChange}
                        />
                    </Grid>

                    <Grid 
                    alignSelf="flex-end"
                    item xs={12}>
                    <button
                    hidden={!this.props.remove}
                    onClick={this.props.onRemovebento}>
                        Remove Bento
                    </button>
                
                <button> Submit Bento </button>
                    </Grid>
                </Grid>
                </Paper>
                </form>
            </div>
        )
    }
}

export default withStyles(styles)(BentoForm);