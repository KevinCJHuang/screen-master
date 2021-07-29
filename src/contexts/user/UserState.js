import React, { useReducer } from 'react';
import UserContext from './userContext';
import UserReducer from './userReducer';
import { ADMIN_LOGIN, EMPLOYEE_LOGIN, LOGOUT, INCREMENT_TIMER } from '../types';

var timeInterval;

// Reducer dispatch types
const UserState = (props) => {
  const initialState = {
    userName: '',
    userType: '',
    isAuthenticated: false,
    timeSinceLogin: 0,
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const login = (userName, passWord) => {
    let login_success = false;
    if (userName === 'A01' && passWord === 'admin') {
      dispatch({
        type: ADMIN_LOGIN,
        payload: { userName: userName, userType: 'Admin' },
      });
      login_success = true;
    } else if (userName === 'E01' && passWord === 'employee') {
      dispatch({
        type: EMPLOYEE_LOGIN,
        payload: { userName: userName, userType: 'Employee' },
      });
      login_success = true;
    }

    // Start timer
    if (login_success && userName === 'E01') {
      var start = Date.now();

      timeInterval = setInterval(function () {
        var delta = Date.now() - start;
        delta = Math.floor(delta / 1000); // in seconds
        dispatch({ type: INCREMENT_TIMER, payload: delta });
      }, 1000);
    }
    return login_success;
  };

  const logout = () => {
    clearInterval(timeInterval);
    dispatch({ type: LOGOUT });
  };

  const secondToHHMMSS = (second) => {
    var sec_num = parseInt(second, 10); // don't forget the second param
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - hours * 3600) / 60);
    var seconds = sec_num - hours * 3600 - minutes * 60;

    if (hours < 10) {
      hours = '0' + hours;
    }
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    return hours + ':' + minutes + ':' + seconds;
  };

  return (
    <UserContext.Provider
      value={{
        userName: state.userName,
        userType: state.userType,
        isAuthenticated: state.isAuthenticated,
        timeSinceLogin: state.timeSinceLogin,
        login: login,
        logout: logout,
        secondToHHMMSS: secondToHHMMSS,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
