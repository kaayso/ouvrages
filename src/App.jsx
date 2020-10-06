import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from 'components/navBar/navBar';
import Home from 'containers/home/home';
import Footer from 'containers/footer/footer';
import Projects from 'containers/projects/projects';
import Expertise from 'containers/expertise/expertise';
import Contact from 'containers/contact/contact';

function App() {
  const [activeButton, setActiveButton] = useState(0);
  const OFFSET = 400;

  const handleScroll = () => {
    const homeHeight = document.getElementById('home').clientHeight;
    const expertiseHeight = document.getElementById('expertise').clientHeight;
    const projectsHeight = document.getElementById('projects').clientHeight;
    const stepOne = homeHeight;
    const stepTwo = stepOne + expertiseHeight;
    const stepThree = stepTwo + projectsHeight;

    if (window.pageYOffset < (stepOne - OFFSET)) {
      setActiveButton(0);
    } else if (window.pageYOffset > (stepOne - OFFSET)
      && window.pageYOffset < (stepTwo - OFFSET)) {
      setActiveButton(1);
    } else if (window.pageYOffset > (stepTwo - OFFSET)
      && window.pageYOffset < (stepThree - OFFSET)) {
      setActiveButton(2);
    } else {
      setActiveButton(3);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <main>
      <NavBar activeButton={activeButton} />
      <Home />
      <Expertise />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
