import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getBentos } from '../../actions/Bento';
import Spinner from '../Layout/Spinner';
import BentoList from './bentoList';
import { makeStyles } from '@material-ui/styles';

const Bentos = ({ getBentos, bento: { bentos, loading } }) => {
  useEffect(() => {
    getBentos();
  }, [getBentos]);

  const useStyles = makeStyles({
    root: {
      backgroundColor: '#F6F8FA',
      padding: '0',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      flexWrap: 'wrap',
      margin: '0 0',
      minHeight: '70rem'
    },
    bentolist: {
      backgroundColor: '#F6F8FA',
      margin: '0 1.6rem',
      flex: 1
    },
    bentoform: {
      maxWidth: '40rem',
      margin: '1rem 1.6rem',
      flexGrow: '999'
    }
  });

  const classes = useStyles();

  return (
    <Fragment>
      <div className={classes.root}>
        <div className={classes.bentolist}>
          {loading ? <Spinner /> : <BentoList />}
        </div>
      </div>
    </Fragment>
  );
};

Bentos.propTypes = {
  getBentos: PropTypes.func.isRequired,
  bento: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  bento: state.bento
});

export default connect(
  mapStateToProps,
  { getBentos }
)(Bentos);
