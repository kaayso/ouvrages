/* eslint-disable no-console */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Particles from '../node_modules/particlesjs/dist/particles';

window.onload = () => {
  Particles.init({
    selector: '.particles',
    connectParticles: true,
    color: '#edf0da',
    maxParticles: 50,
  });
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
