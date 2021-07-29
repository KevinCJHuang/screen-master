import React, { useContext } from 'react';
import UserContext from '../../contexts/user/userContext';
import WorkContext from '../../contexts/work/workContext';

const Desktop = (props) => {
  const userContext = useContext(UserContext);
  const { userName, userType } = userContext;
  const workContext = useContext(WorkContext);
  const { workDone } = workContext;

  const workAppOnClick = () => props.history.push('./workapp');

  const relaxOnClick = () => props.history.push('./relaxapp');

  const emailOnClick = () => props.history.push('./emailapp');
  return (
    <div className='container'>
      <div className='card border-0'>
        <div className='card-body'>
          <div className='row'>
            <div className='col-8'>
              <h2 className='mb-3'>Welcome to your workplace, {userName}!</h2>

              <button
                className='btn btn-primary m-1'
                style={{ width: '100px' }}
                onClick={workAppOnClick}
              >
                Work App
              </button>
              <button
                className='btn btn-success m-1'
                style={{ width: '100px' }}
                onClick={relaxOnClick}
              >
                Relax App
              </button>
              <button
                className='btn btn-warning m-1'
                style={{ width: '100px' }}
                onClick={emailOnClick}
              >
                Email App
              </button>
            </div>
            <div className='col-4'>
              <div className='card'>
                <div className='card-header'>
                  <h3>Employee Info</h3>
                </div>
                <div className='card-body'>
                  <h5>
                    <strong>User Name: </strong>{' '}
                    {userName === 'E01' && 'Chengjie Huang'}
                  </h5>
                  <h5>
                    <strong>User Type: </strong> {userType}
                  </h5>
                  <h5>
                    <strong>Story Completed:</strong> {workDone}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop;
