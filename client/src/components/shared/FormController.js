import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box'

const styles = theme => ({
  formContainer: {
    width: '100%',
    margin: '20px auto',
    height: 'fit-content',
    
    ['@media (min-width:800px)']: { // eslint-disable-line no-useless-computed-key
      maxWidth: '800px',
    },
  },
  panel: {
    padding: theme.spacing(3),
    marginBottom: theme.spacing(1),
    fontSize: '18px'
  },
  buttonGroup: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    background: '#eeeeee',
    padding: theme.spacing(3),
    '& p': {
      marginRight: theme.spacing(2),
    },
  },
  container: {
    width: '100%',
  },
  bottomLeftP:{
    fontSize: '15px'
  }
});

const FormPanel = props => {
  const {
    classes,
    formSlot,
    bottomLeftSlot,
    bottomRightSlot,
    handleSubmit,
  } = props;

  return (
    <Paper
    elavation={10}
    className={classes.formContainer}
    square>
    <Grid 
    container
    spacing={0}
    alignItems="center"
    justify="center">
      <form
        autocomplete="off"
        onSubmit={handleSubmit}
        className={classes.container}
      >
        <Grid item sm={12}>
          <Paper>
            <div className={classes.panel}>{formSlot()}</div>
            <div className={classes.footer}>
              <Grid container>
                <Grid item xs={12} sm={7} lg={7} className={classes.bottomLeftP}>
                  {bottomLeftSlot && bottomLeftSlot()}
                </Grid>
                <Grid
                  item
                  className={classes.buttonGroup}
                  xs={12}
                  sm={5}
                  lg={5}
                >
                  {bottomRightSlot && bottomRightSlot()}
                </Grid>
              </Grid>
            </div>
          </Paper>
        </Grid>
      </form>
    </Grid>
    </Paper>
  );
};

export default withStyles(styles)(FormPanel);
