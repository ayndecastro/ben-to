import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const bentoListFilter = prop => {
  return <div></div>;
};

bentoListFilter.propTypes = {
  bentoFilter: PropTypes.func.isRequired,
  bento: PropTypes.object.isRequired
};

export default bentoListFilter;
