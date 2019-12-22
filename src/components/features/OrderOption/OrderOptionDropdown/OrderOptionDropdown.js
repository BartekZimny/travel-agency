import React from 'react';
import PropTypes from 'prop-types';

const OrderOptionDropdown = props => <div>{props.name}</div>;

OrderOptionDropdown.propTypes = {
  name: PropTypes.string,
};

export default OrderOptionDropdown;
