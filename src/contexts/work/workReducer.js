import {
  INCREMENT_WORK_DONE,
  LOGOUT,
  INCREMENT_TIMER,
  TERMINATE_TIMER,
} from '../types';

const WorkReducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_WORK_DONE:
      return {
        ...state,
        workDone: state.workDone + action.payload,
      };
    case INCREMENT_TIMER:
      return {
        ...state,
        currentTimeOnWork: action.payload,
      };
    case TERMINATE_TIMER:
      return {
        ...state,
        timeOnWork: state.timeOnWork + state.currentTimeOnWork,
        currentTimeOnWork: 0,
      };
    case LOGOUT:
    default:
      return state;
  }
};

export default WorkReducer;
