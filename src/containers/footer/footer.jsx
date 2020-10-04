import React from 'react';
import './footer.css';
import Logo from 'assets/home-logo.svg';
import { HomeOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';

export default function Footer() {
  return (
    <footer id="footer">
      <Row>
        <Col xs={24} sm={12} md={8} lg={8} xl={8} className="footer__column">

          <ul className="footer__roadmap">
            <li className="footer__roadmap-title">Plan du site</li>
            <li><a href="/" className="footer__roadmap-link">accueil</a></li>
            <li><a href="/savoir-faire" className="footer__roadmap-link">savoir-faire</a></li>
            <li><a href="/realisations" className="footer__roadmap-link">réalisation</a></li>
            <li><a href="/contact" className="footer__roadmap-link">contact</a></li>
          </ul>
        </Col>
        <Col xs={24} sm={12} md={8} lg={8} xl={8} className="footer__column">
          <ul className="footer__contact">
            <li>
              <HomeOutlined className="footer__icon" />
              45 rue Sainte Claire
              <br />
              63000 Clermont-Ferrand
            </li>
            <li>
              <PhoneOutlined className="footer__icon" />
              <a href="tel:+33950978953">09 50 97 89 53 </a>
            </li>
            <li>
              <MailOutlined className="footer__icon" />
              <a href="mailto:contact@ouvrages-web.fr">contact@ouvrages-web.fr</a>
            </li>
          </ul>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8} className="footer__column">
          <img src={Logo} alt="logo" className="footer__logo" />
        </Col>
      </Row>

    </footer>
  );
}
