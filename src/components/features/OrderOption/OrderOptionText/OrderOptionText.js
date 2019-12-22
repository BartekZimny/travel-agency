import React from 'react';
import PropTypes from 'prop-types';
import styles from '../OrderOption.scss';

const OrderOptionText = ({ setOptionValue }) => (
  <input
    className={styles.input}
    type="text"
    placeholder="text"
    onChange={event => setOptionValue(event.currentTarget.value)}
  ></input>
);

OrderOptionText.propTypes = {
  setOptionValue: PropTypes.func,
};

export default OrderOptionText;
