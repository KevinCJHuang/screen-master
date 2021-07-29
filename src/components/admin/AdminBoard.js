import React, { useContext, useState } from 'react';
import UserContext from '../../contexts/user/userContext';
import WorkContext from '../../contexts/work/workContext';
import EmailContext from '../../contexts/email/emailContext';
import AdminContext from '../../contexts/admin/adminContext';

import AdminEmailView from './AdminEmailView';

const AdminBoard = () => {
  const userContext = useContext(UserContext);
  const { timeSinceLogin, secondToHHMMSS } = userContext;
  const workContext = useContext(WorkContext);
  const { workDone, timeOnWork } = workContext;
  const emailContext = useContext(EmailContext);
  const { timeOnEmail, emailsSent } = emailContext;
  const adminContext = useContext(AdminContext);
  const { readEmail, clearReadEmail } = adminContext;

  const [chosen, setChosen] = useState('E01');
  const switchEmployee = (e) => {
    e.preventDefault();
    switch (e.target.innerText) {
      case 'CHuang':
        setChosen('E01');
        break;
      case 'DWilson':
        setChosen('E02');
        break;
      case 'MJeays':
        setChosen('E03');
        break;
    }
  };

  const E01_Info = (
    <div className='col-6'>
      <h5>E01 - Chengjie Huang</h5>
      <h5>{workDone}</h5>
      <br />
      <h5>{secondToHHMMSS(timeSinceLogin)}</h5>
      <h5>{secondToHHMMSS(timeOnWork)}</h5>
      <h5>{secondToHHMMSS(timeOnEmail)}</h5>
      <h5>{secondToHHMMSS(timeSinceLogin - timeOnWork - timeOnEmail)}</h5>
      <br />
      <h5>{emailsSent.filter((email) => email.tag !== 'green').length}</h5>
    </div>
  );

  const E02_Info = (
    <div className='col-6'>
      <h5>E02 - David Wilson</h5>
      <h5>37</h5>
      <br />
      <h5>{secondToHHMMSS(1245)}</h5>
      <h5>{secondToHHMMSS(654)}</h5>
      <h5>{secondToHHMMSS(182)}</h5>
      <h5>{secondToHHMMSS(1245 - 654 - 182)}</h5> <br />
      <h5>0</h5>
    </div>
  );

  const E03_Info = (
    <div className='col-6'>
      <h5>E03 - Mark Jeays</h5>
      <h5>183</h5>
      <br />
      <h5>{secondToHHMMSS(13275)}</h5>
      <h5>{secondToHHMMSS(6729)}</h5>
      <h5>{secondToHHMMSS(3219)}</h5>
      <h5>{secondToHHMMSS(13275 - 6729 - 3219)}</h5>
      <br />
      <h5>0</h5>
    </div>
  );

  const backOnClick = (e) => {
    clearReadEmail();
  };

  return (
    <div className='container'>
      <h3 className='my-4'>Employee States Dashboard</h3>
      <div className='row'>
        <div className='col-6'>
          <div className='card'>
            <div className='card-header'>
              <ul className='nav nav-tabs card-header-tabs'>
                <li className='nav-item'>
                  <a
                    className={'nav-link ' + (chosen === 'E01' && 'active')}
                    id='E01'
                    href='!#'
                    onClick={switchEmployee}
                  >
                    <h5>CHuang</h5>
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    className={'nav-link ' + (chosen === 'E02' && 'active')}
                    id='E02'
                    href='!#'
                    onClick={switchEmployee}
                  >
                    <h5>DWilson</h5>
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    className={'nav-link ' + (chosen === 'E03' && 'active')}
                    id='E03'
                    href='!#'
                    onClick={switchEmployee}
                  >
                    <h5>MJeays</h5>
                  </a>
                </li>
              </ul>
            </div>
            <div className='card-body'>
              <div className='row'>
                <div className='col-6'>
                  <h5>
                    <strong>Employee ID: </strong>
                  </h5>
                  <h5>
                    <strong>Story Completed:</strong>
                  </h5>
                  <br></br>
                  <h5>
                    <strong>Time since Last Login:</strong>{' '}
                  </h5>
                  <h5>
                    <strong>Time on Work :</strong>{' '}
                  </h5>
                  <h5>
                    <strong>Time on Email :</strong>{' '}
                  </h5>
                  <h5>
                    <strong>Time Idle :</strong>{' '}
                  </h5>
                  <br></br>
                  <h5>
                    <strong>Email Alerts: </strong>
                  </h5>
                </div>
                {chosen === 'E01' && E01_Info}
                {chosen === 'E02' && E02_Info}
                {chosen === 'E03' && E03_Info}
              </div>
            </div>
          </div>
        </div>

        <div className='col-6'>
          {chosen === 'E01' ? (
            <div>
              {readEmail ? (
                <div className='card'>
                  <div className='card-header'>
                    <button
                      className='btn btn-outline-dark'
                      onClick={backOnClick}
                    >
                      <i className='fas fa-arrow-left'></i> back
                    </button>
                  </div>
                  <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                      <form>
                        <div className='input-group mb-3'>
                          <div className='input-group-prepend'>
                            <span className='input-group-text'>Title: </span>
                          </div>
                          <input
                            readOnly='readOnly'
                            className='form-control'
                            type='text'
                            value={readEmail.title}
                          />
                        </div>
                        <div className='input-group mb-3'>
                          <div className='input-group-prepend'>
                            <span className='input-group-text'>To: </span>
                          </div>
                          <input
                            readOnly='readOnly'
                            className='form-control'
                            type='text'
                            value={readEmail.to}
                          />
                        </div>
                        <div className='input-group mb-3'>
                          <div className='input-group-prepend'>
                            <span className='input-group-text'>CC: </span>
                          </div>
                          <input
                            readOnly='readOnly'
                            className='form-control'
                            type='text'
                            value={readEmail.CC}
                          />
                        </div>
                        <div className='form-group'>
                          <label htmlFor='content'>Email Content</label>
                          <textarea
                            className='form-control'
                            readOnly='readOnly'
                            value={readEmail.content}
                            rows='20'
                          />
                        </div>
                      </form>
                    </li>
                  </ul>
                </div>
              ) : (
                <div className='card'>
                  <div className='card-header'>
                    <h4>Suspecious Emails</h4>
                  </div>
                  <div className='card-body'>
                    <ul className='list-group list-group-flush'>
                      {emailsSent.filter((email) => email.tag !== 'green')
                        .length === 0 ? (
                        <h5>The employee has no suspecious emails.</h5>
                      ) : (
                        emailsSent
                          .filter((email) => email.tag !== 'green')
                          .map((email) => (
                            <div>
                              <AdminEmailView
                                key={email.id}
                                emailItem={email}
                              ></AdminEmailView>
                            </div>
                          ))
                      )}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className='card'>
              <div className='card-header'>
                <h4>Suspecious Emails</h4>
              </div>
              <div className='card-body'>
                <ul className='list-group list-group-flush'>
                  <h5>The employee has no suspecious emails.</h5>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminBoard;
