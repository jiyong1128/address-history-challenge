import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
  addresses: {}
}

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const removeAddress = (id) => {
    dispatch({
      type: 'REMOVE_ADDRESS',
      payload: id
    })
  }

  const addAddress = (address) => {
    dispatch({
      type: 'ADD_ADDRESS',
      payload: address
    })
  }

  const editAddress = (address) => {
    dispatch({
      type: 'UPDATE_ADDRESS',
      payload: address
    })
  }

  return (
    <GlobalContext.Provider value={{
      addresses: state.addresses,
      selectedUserId: state.selectedUserId,
      removeAddress,
      addAddress,
      editAddress
    }}>
      {children}
    </GlobalContext.Provider>
  )
}