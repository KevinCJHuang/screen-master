import React, { useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../contexts/user/userContext';
import WorkContext from '../../contexts/work/workContext';

const Navbar = (props) => {
  const userContext = useContext(UserContext);
  const workContext = useContext(WorkContext);
  const logout = (e) => {
    // e.preventDefault();
    userContext.logout();
    workContext.logout();
  };

  if (userContext.isAuthenticated) {
    return (
      <div>
        <div className='navbar navbar-expand-lg navbar-light bg-light mb-3'>
          <div className='container'>
            <div className='navbar-brand'>
              <i className='fas fa-lg fa-desktop align-middle mr-3'></i>
              <h3 className='align-middle d-inline'>Screen Master</h3>{' '}
            </div>

            <Fragment>
              <button
                className='navbar-toggler'
                data-toggle='collapse'
                data-target='#navbarToggler'
              >
                <span className='navbar-toggler-icon'></span>
              </button>
              <div className='collapse navbar-collapse' id='navbarToggler'>
                {userContext.userType === 'Employee' ? (
                  <ul className='navbar-nav'>
                    <li className='nav-item'>
                      <Link className='nav-link' to='/'>
                        About
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link className='nav-link' to='/desktop'>
                        Desktop
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link className='nav-link' to='/workapp'>
                        Work App
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link className='nav-link' to='/emailapp'>
                        Email App
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link className='nav-link' to='/relaxapp'>
                        Relax App
                      </Link>
                    </li>
                  </ul>
                ) : (
                  <ul className='navbar-nav'>
                    <li className='nav-item'>
                      <Link className='nav-link' to='/'>
                        About
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link className='nav-link' to='/dashboard'>
                        Dashboard
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
              <ul className='navbar-nav ml-auto'>
                <Link className='nav-link' onClick={logout} to='/login'>
                  Logout
                </Link>
              </ul>
            </Fragment>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className='navbar navbar-expand-lg navbar-light bg-light mb-3'>
          <div className='container'>
            <div className='navbar-brand'>
              <i className='fas fa-lg fa-desktop align-middle mr-3'></i>
              <h3 className='align-middle d-inline'>Screen Master</h3>{' '}
            </div>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link className='nav-link' to='/'>
                  About
                </Link>
              </li>
            </ul>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item'>
                <Link className='nav-link' to='/login'>
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
};

export default Navbar;
