import React from 'react';
import PropTypes from 'prop-types';

const OrderOptionCheckboxes = props => <div>{props.name}</div>;

OrderOptionCheckboxes.propTypes = {
  name: PropTypes.string,
};

export default OrderOptionCheckboxes;
