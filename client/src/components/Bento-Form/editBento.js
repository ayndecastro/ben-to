import React, { useState, Fragment, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Paper, Typography, Grid } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { editBento, deleteBento, getBento } from '../../actions/Bento';
import { connect } from 'react-redux';
import BentoForm from './addBento';

const EditBento = ({
  bento: { bento, loading },
  editBento,
  deleteBento,
  getBento,
  match,
  history
}) => {
  const [formData, setFormData] = useState({
    nameofbento: '',
    cuisine: '',
    ingredients: '',
    description: '',
    cost: 0,
    amount: 0,
    image: ''
  });

  useEffect(() => {
    getBento(match.params.id);

    setFormData({
      nameofbento: loading || !bento.nameofbento ? '' : bento.nameofbento,
      cuisine: loading || !bento.cuisine ? '' : bento.cuisine,
      ingredients:
        loading || !bento.ingredients ? '' : bento.ingredients.join(','),
      description: loading || !bento.description ? '' : bento.description,
      cost: loading || !bento.cost ? 0 : bento.cost,
      amount: loading || !bento.amount ? 0 : bento.amount,
      image: loading || !bento.image ? '' : bento.image
    });
  }, [getBento, match.params.id]);

  const {
    nameofbento,
    cuisine,
    ingredients,
    description,
    cost,
    amount,
    image
  } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };
  const onSubmit = e => {
    e.preventDefault();
    editBento(bento._id, formData, history, true);
  };

  const useStyles = makeStyles({
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
      alignSelf: 'flex-end',
      width: '5rem'
    },
    inputCuisine: {},
    inputCost: {}
  });
  const classes = useStyles();

  return (
    <Fragment>
      <form onSubmit={e => onSubmit(e)}>
        <Paper className={classes.form} square={true} elevation={21}>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Typography
                variant='h1'
                component='h1'
                className={classes.header}
              >
                EDIT BENTO
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <TextField
                type='text'
                label='BENTO NAME'
                autoFocus
                fullWidth
                margin='normal'
                variant='standard'
                className={classes.inputBento}
                name='nameofbento'
                value={nameofbento}
                onChange={e => onChange(e)}
              />
            </Grid>

            <Grid item xs={8}>
              <TextField
                type='text'
                autoFocus
                margin='normal'
                variant='standard'
                label='CUISINE'
                name='cuisine'
                className={classes.inputCuisine}
                value={cuisine}
                onChange={e => onChange(e)}
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                type='text'
                label='COST'
                autoFocus
                margin='normal'
                name='cost'
                variant='standard'
                className={classes.inputCost}
                value={cost}
                onChange={e => onChange(e)}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                type='integer'
                label='AMOUNT'
                autoFocus
                margin='normal'
                name='amount'
                variant='standard'
                className={classes.inputCost}
                value={amount}
                onChange={e => onChange(e)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                margin='normal'
                variant='standard'
                fullWidth
                label='INGREDIENTS'
                name='ingredients'
                className={classes.input}
                value={ingredients}
                onChange={e => onChange(e)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type='text'
                label='BENTO DESCRIPTION'
                autoFocus
                fullWidth
                margin='normal'
                variant='standard'
                name='description'
                className={classes.inputBento}
                value={description}
                onChange={e => onChange(e)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                type='text'
                margin='normal'
                variant='standard'
                fullWidth
                label='IMAGE URL'
                name='image'
                className={classes.input}
                value={image}
                onChange={e => onChange(e)}
              />
            </Grid>

            <Grid alignself='flex-end' item xs={12}>
              <button> Submit Bento </button>
            </Grid>
          </Grid>
        </Paper>
      </form>
    </Fragment>
  );
};

editBento.propTypes = {
  editBento: PropTypes.func.isRequired,
  deleteBento: PropTypes.func.isRequired,
  bento: PropTypes.object.isRequired,
  getBento: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  bento: state.bento
});

export default connect(mapStateToProps, { editBento, deleteBento, getBento })(
  withRouter(EditBento)
);
