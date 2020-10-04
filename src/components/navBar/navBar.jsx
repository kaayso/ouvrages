import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import './navBar.css';
import Logo from 'assets/logo-header.svg';

export default function NavBar() {
  const [style, setStyle] = useState(null);
  const [activeButton, setActiveButton] = useState(0);

  const handleScroll = () => {
    const newStyle = window.pageYOffset > 350;
    const navBarStyle = {
      position: 'fixed',
      background: 'rgba(9, 40, 52, 1)',
      transition: 'all .3s',
      transform: 'transitionY(-120%)',
      boxShadow: '0px 4px 25px -4px rgba(0,0,0,0.75)',
      animation: 'appear-from-top .2s ease-in-out forwards',
    };
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

  const setIndex = (idx) => {
    setActiveButton(idx);
  };

  return (
    <header>
      <nav className="navbar" style={style}>
        <div className="navBar__logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="navBar__links-container">
          <Button onClick={() => setIndex(0)} className={activeButton === 0 ? 'navBar__active-link' : ''} type="text">accueil</Button>
          <Button onClick={() => setIndex(1)} className={activeButton === 1 ? 'navBar__active-link' : ''} type="text">savoir-faire</Button>
          <Button onClick={() => setIndex(2)} className={activeButton === 2 ? 'navBar__active-link' : ''} type="text">réalisation</Button>
          <Button onClick={() => setIndex(3)} className={activeButton === 3 ? 'navBar__active-link' : ''} type="text">contact</Button>
        </div>
      </nav>
    </header>
  );
}
