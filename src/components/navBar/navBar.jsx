/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Button, Drawer } from 'antd';
import './navBar.css';
import Logo from 'assets/logo-header.svg';
import { MenuOutlined } from '@ant-design/icons';

const navBarStyle = {
  position: 'fixed',
  background: 'rgba(9, 40, 52, 1)',
  opacity: '0',
  transition: 'all .7s',
  transform: 'transitionY(-120%)',
  boxShadow: '0px 4px 25px -4px rgba(0,0,0,0.75)',
  animation: 'appear-from-top .4s ease-in-out forwards',
};

export default function NavBar({ activeButton }) {
  const [style, setStyle] = useState(null);
  const [drawerVisible, setDrawerVisibility] = useState(false);

  const showDrawer = () => {
    setDrawerVisibility(true);
  };
  const onClose = () => {
    setDrawerVisibility(false);
  };

  const handleScroll = () => {
    const newStyle = window.pageYOffset > 350;
    if (newStyle) {
      setStyle(navBarStyle);
    } else {
      setStyle(null);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <header>
      <nav className="navbar" style={style}>
        <a href="#home" className="navBar__logo">
          <img src={Logo} alt="logo" />
        </a>
        <div className="navBar__links-container navBar__links-container--desktop">
          <Button className={activeButton === 0 ? 'navBar__active-link' : ''} type="text"><a href="#home">accueil</a></Button>
          <Button className={activeButton === 1 ? 'navBar__active-link' : ''} type="text"><a href="#expertise">savoir-faire</a></Button>
          <Button className={activeButton === 2 ? 'navBar__active-link' : ''} type="text"><a href="#projects">réalisations</a></Button>
          <Button className={activeButton === 3 ? 'navBar__active-link' : ''} type="text"><a href="#contact">contact</a></Button>
        </div>
        <div className="navBar__links-container--mobile">
          <Button onClick={showDrawer}><MenuOutlined /></Button>
        </div>
      </nav>
      <Drawer
        placement="right"
        closable
        onClose={onClose}
        visible={drawerVisible}
        className="navbar__drawer"
      >
        <Button onClick={onClose} type="text"><a href="#home">accueil</a></Button>
        <Button onClick={onClose} type="text"><a href="#expertise">savoir-faire</a></Button>
        <Button onClick={onClose} type="text"><a href="#projects">réalisations</a></Button>
        <Button onClick={onClose} type="text"><a href="#contact">contact</a></Button>
      </Drawer>
    </header>
  );
}
