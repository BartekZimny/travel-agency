import React from 'react';
import styles from './OrderOption.scss';

import OrderOptionDropdown from './OrderOptionDropdown/OrderOptionDropdown';
import OrderOptionIcons from './OrderOptionIcons/OrderOptionIcons';
import OrderOptionNumber from './OrderOptionNumber/OrderOptionNumber';
import OrderOptionCheckboxes from './OrderOptionCheckboxes/OrderOptionCheckboxes';
import OrderOptionText from './OrderOptionText/OrderOptionText';

const optionTypes = {
  dropdown: OrderOptionDropdown,
  icons: OrderOptionIcons,
  checkboxes: OrderOptionCheckboxes,
  number: OrderOptionNumber,
  text: OrderOptionText,
};

const OrderOption = ({ id, setOrderOption, name, type, ...otherProps }) => {
  const OptionComponent = optionTypes[type];
  if (!OptionComponent) {
    return null;
  } else {
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{name}</h3>
        <OptionComponent
          {...otherProps}
          setOptionValue={value => setOrderOption({ [id]: value })}
        />
      </div>
    );
  }
};

export default OrderOption;
