import React, { createContext, useContext, useReducer } from 'react';

//Prepare the Datalayer
export const StateContext = createContext();

//wrap our app and provide the data laye

export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// pull info. from the data layer
export const useStateValue = () => useContext(StateContext);