import React from 'react';
import PropTypes from 'prop-types';

const OrderOptionIcons = props => <div>{props.name}</div>;

OrderOptionIcons.propTypes = {
  name: PropTypes.string,
};

export default OrderOptionIcons;
