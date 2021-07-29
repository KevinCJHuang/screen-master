import React, { useReducer } from 'react';
import AdminContext from './adminContext';
import AdminReducer from './adminReducer';
import { SET_READ_EMAIL, CLEAR_READ_EMAIL } from '../types';

const AdminState = (props) => {
  const initialState = {
    readEmail: null,
  };

  const [state, dispatch] = useReducer(AdminReducer, initialState);

  // Set Alert
  const setReadEmail = (email) =>
    dispatch({ type: SET_READ_EMAIL, payload: email });
  const clearReadEmail = () => dispatch({ type: CLEAR_READ_EMAIL });
  return (
    <AdminContext.Provider
      value={{
        readEmail: state.readEmail,
        setReadEmail: setReadEmail,
        clearReadEmail: clearReadEmail,
      }}
    >
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminState;
