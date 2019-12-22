import React from 'react';
import PropTypes from 'prop-types';
//import styles from './OrderForm.scss';

import { Row, Col } from 'react-flexbox-grid';

import OrderSummary from '../OrderSummary/OrderSummary';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';

const OrderForm = props => (
  <Row>
    {pricing.map((option, setOrderOption) => (
      <Col md={4} key={option.id}>
        <OrderOption
          {...option}
          currentValue={props.options[option.id]}
          setOrderOption={setOrderOption}
        />
      </Col>
    ))}
    <Col xs={12}>
      <OrderSummary tripCost={props.tripCost} options={props.options} />
    </Col>
  </Row>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderForm;
