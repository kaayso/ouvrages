/* eslint-disable react/prop-types */
/* eslint-disable no-unused-expressions */
import React, { createContext, useContext, useReducer } from 'react';
// prepares the data layout
export const StateContext = createContext();

// wrap our app and provide the data layout
export const StateProvider = ({ children, reducer, initialState }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// pull informations from the data layout
export const useStateValue = () => useContext(StateContext);
