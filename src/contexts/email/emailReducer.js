import {
  SET_READ_EMAIL,
  CLEAR_READ_EMAIL,
  DELETE_EMAIL,
  SEND_EMAIL,
  INCREMENT_TIMER,
  TERMINATE_TIMER,
} from '../types';

const EmailReducer = (state, action) => {
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
    case DELETE_EMAIL:
      var deletedEmail = state.emails.filter(
        (email) => email.id === action.payload
      );
      if (deletedEmail.length === 0) {
        deletedEmail = state.emailsSent.filter(
          (email) => email.id === action.payload
        );
      }
      return {
        ...state,
        deleteBin: [...state.deleteBin, deletedEmail[0]],
        emails: state.emails.filter((email) => email.id !== action.payload),
        emailsSent: state.emailsSent.filter(
          (email) => email.id !== action.payload
        ),
      };
    case SEND_EMAIL:
      const email = action.payload;
      email.id = state.idAvailable;
      email.from = 'CHuang@gooseint.com';
      if (!email.to.includes('@gooseint.com')) {
        email.tag = state.sensitiveDict.some((keyword) =>
          email.content.includes(keyword)
        )
          ? 'red'
          : 'yellow';
      } else {
        email.tag = 'green';
      }
      return {
        ...state,
        emailsSent: [...state.emailsSent, email],
        idAvailable: state.idAvailable + 1,
      };
    case INCREMENT_TIMER:
      return {
        ...state,
        currentTimeOnEmail: action.payload,
      };
    case TERMINATE_TIMER:
      return {
        ...state,
        timeOnEmail: state.timeOnEmail + state.currentTimeOnEmail,
        currentTimeOnEmail: 0,
      };
    default:
      return state;
  }
};

export default EmailReducer;
