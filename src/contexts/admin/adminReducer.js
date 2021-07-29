import { SET_READ_EMAIL, CLEAR_READ_EMAIL } from '../types';

const AdminReducer = (state, action) => {
  switch (action.type) {
    case SET_READ_EMAIL:
      return {
        ...state,
        readEmail: action.payload,
      };
    case CLEAR_READ_EMAIL:
      return {
        ...state,
        readEmail: null,
      };
    default:
      return state;
  }
};
export default AdminReducer;
