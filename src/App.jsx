import React from 'react';
import './App.css';
import NavBar from 'components/navBar/navBar';
import Home from 'containers/home/home';
import Footer from 'containers/footer/footer';
import Projects from 'containers/projects/projects';
import Expertise from 'containers/expertise/expertise';
import Contact from 'containers/contact/contact';

function App() {
  return (
    <main>
      <NavBar />
      <Home />
      <Expertise />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
