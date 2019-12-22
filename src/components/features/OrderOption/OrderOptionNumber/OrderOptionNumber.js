import React from 'react';
import PropTypes from 'prop-types';

const OrderOptionNumber = props => <div>{props.name}</div>;

OrderOptionNumber.propTypes = {
  name: PropTypes.string,
};

export default OrderOptionNumber;
