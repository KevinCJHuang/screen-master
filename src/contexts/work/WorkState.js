import React, { useReducer } from 'react';
import WorkContext from './workContext';
import WorkReducer from './workReducer';
import {
  INCREMENT_WORK_DONE,
  LOGOUT,
  INCREMENT_TIMER,
  TERMINATE_TIMER,
} from '../types';

var workTimeInterval;

const WorkState = (props) => {
  const initialState = {
    workDone: 0,
    timeOnWork: 0,
    currentTimeOnWork: 0,
  };

  const [state, dispatch] = useReducer(WorkReducer, initialState);

  const startTimer = () => {
    var start = Date.now();

    workTimeInterval = setInterval(function () {
      var delta = Date.now() - start;
      delta = Math.floor(delta / 1000); // in seconds
      dispatch({ type: INCREMENT_TIMER, payload: delta });
    }, 1000);
  };

  const terminateTimer = () => {
    clearInterval(workTimeInterval);
    dispatch({ type: TERMINATE_TIMER });
  };

  const incrementWorkDone = (story) => {
    dispatch({ type: INCREMENT_WORK_DONE, payload: story });
  };

  const logout = () => {
    dispatch({ type: LOGOUT });
  };

  return (
    <WorkContext.Provider
      value={{
        workDone: state.workDone,
        timeOnWork: state.timeOnWork,
        currentTimeOnWork: state.currentTimeOnWork,
        incrementWorkDone: incrementWorkDone,
        logout: logout,
        startTimer: startTimer,
        terminateTimer: terminateTimer,
      }}
    >
      {props.children}
    </WorkContext.Provider>
  );
};

export default WorkState;
