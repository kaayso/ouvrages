import React from 'react';
import './App.css';
import NavBar from 'components/navBar/navBar';
import Home from 'containers/home/home';
import Footer from 'containers/footer/footer';

function App() {
  return (
    <main>
      <NavBar />
      <Home />
      <Footer />
    </main>
  );
}

export default App;
