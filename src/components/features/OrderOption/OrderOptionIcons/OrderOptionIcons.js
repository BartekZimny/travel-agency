import React from 'react';
import PropTypes from 'prop-types';
import styles from '../OrderOption.scss';

import Icon from '../../../common/Icon/Icon';

import { formatPrice } from '../../../../utils/formatPrice';

const OrderOptionIcons = ({ required, values, setOptionValue }) => (
  <div className={styles.icon}>
    {required ? (
      ''
    ) : (
      <div className={styles.icon} onClick={() => setOptionValue()}>
        <Icon name="times-circle" />
        None
      </div>
    )}
    {values.map(value => (
      <div
        className={styles.icon}
        // activeClassName={styles.iconActive}
        key={value.id}
        onClick={() => setOptionValue(value.id)}
      >
        <Icon name={value.icon} />
        {value.name} ({formatPrice(value.price)})
      </div>
    ))}
  </div>
);

OrderOptionIcons.propTypes = {
  values: PropTypes.array,
  required: PropTypes.bool,
  setOptionValue: PropTypes.func,
};

export default OrderOptionIcons;
