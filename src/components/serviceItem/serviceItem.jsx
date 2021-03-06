/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import './serviceItem.css';
import {
  Row, Col, Button, Grid,
} from 'antd';
import { useStateValue } from 'contextAPI/stateProvider';

const { useBreakpoint } = Grid;

export default function ServiceItem({
  image, translateY, description, link, title, greenShadow, reverse, coef, category, idx,
}) {
  const [{ serviceIndex }, dispatch] = useStateValue();
  const screens = useBreakpoint();
  const translateValue = screens.lg ? translateY / coef : 0;

  const setServiceIndex = () => {
    dispatch({
      type: 'SET_SERVICE_INDEX',
      serviceIndex: idx,
    });
  };
  return (
    <Row className={`serviceItem ${reverse ? '' : 'serviceItem__reverse'}`}>

      <Col xs={24} sm={24} md={24} lg={14} xl={14} className={`serviceItem__column ${reverse ? 'serviceItem__column--right' : 'serviceItem__column--left'}`}>
        <div className={`serviceItem__content ${reverse ? '' : 'ml-xs'}`}>
          <h3 className="serviceItem__category">{category}</h3>
          <h3 className="serviceItem__title">
            {title}
          </h3>
          <p className="serviceItem__description">
            {description}
          </p>
          <Button onClick={setServiceIndex} className="serviceItem__link-btn" type="link"><a href={link}>En savoir plus</a></Button>
        </div>
      </Col>

      <Col xs={24} sm={24} md={24} lg={10} xl={10} className={`serviceItem__column ${reverse ? 'serviceItem__column--left' : 'serviceItem__column--right'}`}>
        <img src={image} style={{ transform: `translateY(-${translateValue}px)` }} className={`serviceItem__image ${greenShadow ? 'green-shadow' : 'blue-shadow'} ${reverse ? 'ml-xs' : ''}`} alt="" />
      </Col>
    </Row>
  );
}
