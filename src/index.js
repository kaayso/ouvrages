/* eslint-disable no-console */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { StateProvider } from 'contextAPI/stateProvider';
import reducer, { initialState } from 'contextAPI/reducer';
import App from './App';
import Particles from '../node_modules/particlesjs/dist/particles';

try {
  window.onload = () => {
    Particles.init({
      selector: '.particles',
      connectParticles: true,
      color: '#edf0da',
      maxParticles: 50,
    });
  };
} catch (error) {
  console.error(error);
}

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>,
  document.getElementById('root'),
);
