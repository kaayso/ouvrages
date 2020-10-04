/* eslint-disable react/prop-types */
import React from 'react';
import './serviceItem.css';
import {
  Row, Col, Button, Grid,
} from 'antd';

const { useBreakpoint } = Grid;

export default function ServiceItem({
  image, translateY, description, link, title, greenShadow, reverse, coef,
}) {
  const screens = useBreakpoint();
  const translateValue = !screens.lg ? 0 : translateY / coef;

  return (
    <Row className={`serviceItem ${reverse ? '' : 'serviceItem__reverse'}`}>

      <Col xs={24} sm={24} md={24} lg={14} xl={14} className={`serviceItem__column ${reverse ? 'serviceItem__column--right' : 'serviceItem__column--left'}`}>
        <div className={`serviceItem__content ${reverse ? '' : 'ml-xs'}`}>
          <h3 className="serviceItem__title">
            {title}
          </h3>
          <p className="serviceItem__description">
            {description}
          </p>
          <Button className="serviceItem__link-btn" type="link" href={link}>En savoir plus</Button>
        </div>
      </Col>
      <Col xs={24} sm={24} md={24} lg={10} xl={10} className={`serviceItem__column ${reverse ? 'serviceItem__column--left' : 'serviceItem__column--right'}`}>
        <img src={image} style={{ transform: `translateY(-${translateValue}px)` }} className={`serviceItem__image ${greenShadow ? 'green-shadow' : 'blue-shadow'} ${reverse ? 'ml-xs' : ''}`} alt="" />
      </Col>
    </Row>
  );
}
