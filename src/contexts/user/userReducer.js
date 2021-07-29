import { ADMIN_LOGIN, EMPLOYEE_LOGIN, LOGOUT, INCREMENT_TIMER } from '../types';

const UserReducer = (state, action) => {
  switch (action.type) {
    case EMPLOYEE_LOGIN:
      return {
        ...state,
        userName: action.payload.userName,
        userType: action.payload.userType,
        isAuthenticated: true,
      };
    case ADMIN_LOGIN:
      return {
        ...state,
        userName: action.payload.userName,
        userType: action.payload.userType,
        isAuthenticated: true,
      };
    case LOGOUT:
      return {
        ...state,
        userName: '',
        userType: '',
        isAuthenticated: false,
      };
    case INCREMENT_TIMER:
      return {
        ...state,
        timeSinceLogin: action.payload,
      };
    default:
      return state;
  }
};

export default UserReducer;
