import React, { useReducer } from 'react';
import EmailContext from './emailContext';
import EmailReducer from './emailReducer';
import {
  SET_READ_EMAIL,
  CLEAR_READ_EMAIL,
  DELETE_EMAIL,
  SEND_EMAIL,
  INCREMENT_TIMER,
  TERMINATE_TIMER,
} from '../types';

var emailTimeInterval;

// Reducer dispatch types
const UserState = (props) => {
  const initialState = {
    timeOnEmail: 0,
    currentTimeOnEmail: 0,
    idAvailable: 6,
    emails: [
      {
        id: 1,
        from: 'DWilson@gooseint.com',
        to: 'CHuang@gooseint.com',
        CC: 'MJeays@gooseint.com',
        title: 'Re: Updating Financial Dashboard',
        content: `CC Mark Jeays.
Hi Mark, do you have any thoughts?
--------------------------------------------------------------------------------
Hi David,

As discussed before, coud you update the Financial Dashboard to include the exchange rates？

Thanks,
Chengjie`,
        tag: 'green',
      },

      {
        id: 3,

        from: 'GooseHR@gooseint.com',
        to: 'CHuang@gooseint.com, DWilson@gooseint.com, MJeays@gooseint.com',
        CC: '',
        title: 'Post-Covid Arrangemnt for September',
        content: `As the Goose International sees a signal of recovering from pandemic,
we will officially announce our plans for this September.`,
        tag: 'green',
      },

      {
        id: 5,

        from: 'MShelley@gooseint.com',
        to: 'CHuang@gooseint.com',
        CC: '',
        title: 'Term-End Plan',
        content: `Hi Chengjie,

It's near the end of your 4-months Co-op term. Do you wish to come back and work again?

Kind regards,
Mary`,
        tag: 'green',
      },
    ],
    emailsSent: [
      {
        id: 2,

        from: 'CHuang@gooseint.com',
        to: 'DWilson@gooseint.com',
        CC: '',
        title: 'Updating Financial Dashboard',
        content: `Hi David,

As discussed before, coud you update the Financial Dashboard to include the exchange rates？

Thanks,
Chengjie`,
        tag: 'green',
      },
      {
        id: 4,

        from: 'CHuang@gooseint.com',
        to: 'MShelley@gooseint.com',
        CC: '',
        title: 'Re: Term-End Plan',
        content: `Hi Mary,
  
Thanks for your offer. I'll think about it.

Kind regards,
Chengjie`,
        tag: 'green',
      },
    ],
    deleteBin: [],
    readEmail: null,
    sensitiveDict: [
      'data',
      'password',
      'profit',
      'loss',
      'prod',
      'production',
      'deploy',
      'deployment',
      'loophole',
      'attack',
      'Goose',
      'goose',
      'company',
    ],
  };

  const [state, dispatch] = useReducer(EmailReducer, initialState);

  const setReadEmail = (email) =>
    dispatch({ type: SET_READ_EMAIL, payload: email });

  const deleteEmail = (email) => {
    dispatch({ type: DELETE_EMAIL, payload: email.id });
  };

  const clearReadEmail = () => dispatch({ type: CLEAR_READ_EMAIL });

  const sendEmail = (email) => {
    dispatch({ type: SEND_EMAIL, payload: email });
  };

  const startTimer = () => {
    var start = Date.now();

    emailTimeInterval = setInterval(function () {
      var delta = Date.now() - start;
      delta = Math.floor(delta / 1000); // in seconds
      dispatch({ type: INCREMENT_TIMER, payload: delta });
    }, 1000);
  };

  const terminateTimer = () => {
    clearInterval(emailTimeInterval);
    dispatch({ type: TERMINATE_TIMER });
  };

  return (
    <EmailContext.Provider
      value={{
        idAvailable: state.idAvailable,
        emails: state.emails,
        deleteBin: state.deleteBin,
        readEmail: state.readEmail,
        emailsSent: state.emailsSent,
        timeOnEmail: state.timeOnEmail,
        currentTimeOnEmail: state.currentTimeOnEmail,
        setReadEmail: setReadEmail,
        clearReadEmail: clearReadEmail,
        deleteEmail: deleteEmail,
        sendEmail: sendEmail,
        startTimer: startTimer,
        terminateTimer: terminateTimer,
      }}
    >
      {props.children}
    </EmailContext.Provider>
  );
};

export default UserState;
