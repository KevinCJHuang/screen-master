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

  const adminOnClick = () => props.history.push('./dashboard');
  return (
    <div className='container'>
      <div className='card border-0'>
        <div className='card-body'>
          <h2 className='mb-3'>Welcome to your workplace, {userName}!</h2>

          <button
            className='btn btn-outline-none m-5'
            style={{ width: '100px' }}
            onClick={workAppOnClick}
          >
            <i
              class='fas fa-calculator fa-5x  mb-2'
              style={{ color: '#003300' }}
            />
            <p>Work</p>
          </button>
          <button
            className='btn btn-outline-none m-5'
            style={{ width: '100px' }}
            onClick={relaxOnClick}
          >
            <i class='fas fa-cat fa-5x  mb-2' style={{ color: '#ffcc00' }} />
            <p> Relax </p>
          </button>
          <button
            className='btn btn-outline-none m-5'
            style={{ width: '100px' }}
            onClick={emailOnClick}
          >
            <i
              class='fas fa-envelope fa-5x  mb-2'
              style={{ color: '#0099ff' }}
            />

            <p>Email</p>
          </button>
          <button
            className='btn btn-outline-none m-5'
            style={{ width: '100px' }}
          >
            <i class='fas fa-cogs fa-5x  mb-2' style={{ color: '#808080' }} />
            <p>Settings</p>
          </button>
          <button
            className='btn btn-outline-none m-5'
            style={{ width: '100px' }}
          >
            <i class='fab fa-skype fa-5x  mb-2' style={{ color: '#4db8ff' }} />
            <p>Skype</p>
          </button>
          <button
            className='btn btn-outline-none m-5'
            style={{ width: '100px' }}
          >
            <i
              class='fas fa-file-word fa-5x  mb-2'
              style={{ color: '#0059b3' }}
            />
            <p>Word</p>
          </button>

          <button
            className='btn btn-outline-none m-5'
            style={{ width: '100px' }}
          >
            <i
              class='fas fa-file-excel fa-5x  mb-2'
              style={{ color: '#00802b' }}
            />
            <p>Excel</p>
          </button>
          <button
            className='btn btn-outline-none m-5'
            style={{ width: '100px' }}
          >
            <i
              class='fas fa-file-powerpoint fa-5x  mb-2'
              style={{ color: '#e65c00' }}
            />
            <p>Powerpoint</p>
          </button>

          <button
            className='btn btn-outline-none m-5'
            style={{ width: '100px' }}
          >
            <i
              class='fas fa-photo-video fa-5x  mb-2'
              style={{ color: '#1a1a1a' }}
            />
            <p>Photos</p>
          </button>
          <button
            className='btn btn-outline-none m-5'
            style={{ width: '100px' }}
          >
            <i class='fab fa-safari fa-5x  mb-2' style={{ color: '#1aa3ff' }} />
            <p>Safari</p>
          </button>
          {userName === 'A01' && (
            <button
              className='btn btn-outline-none m-5'
              style={{ width: '100px' }}
              onClick={adminOnClick}
            >
              <i
                class='fas fa-users-cog fa-5x  mb-2'
                style={{ color: '#660000' }}
              />
              <p>Admin Board</p>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Desktop;
