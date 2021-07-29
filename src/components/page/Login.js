import React, { useState, useContext } from 'react';
import UserContext from '../../contexts/user/userContext';
import AlertContext from '../../contexts/alert/alertContext';

const Login = (props) => {
  const userContext = useContext(UserContext);
  const [credentials, setCredentials] = useState({
    userName: '',
    password: '',
  });

  const alertContext = useContext(AlertContext);

  const onChange = (e) =>
    setCredentials({ ...credentials, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const result = userContext.login(userName, password);
    if (result) {
      props.history.push('/');
    } else {
      alertContext.setAlert('Wrong Credentials', 'danger');
    }
  };

  const { userName, password } = credentials;
  return (
    <div className='form-container'>
      <div className='row'>
        <div className='col-4'></div>
        <div className='col-4'>
          <h1>Account Login</h1>
          <form onSubmit={onSubmit}>
            <div className='form-group'>
              <label htmlFor='userName'>User Name</label>
              <input
                className='form-control'
                name='userName'
                value={userName}
                onChange={onChange}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='password'>Password</label>
              <input
                className='form-control'
                type='password'
                name='password'
                value={password}
                onChange={onChange}
                required
              />
            </div>
            <input
              type='submit'
              value='Login'
              className='btn btn-primary btn-block'
            />
          </form>
        </div>
        <div className='col-4'></div>
      </div>
    </div>
  );
};

export default Login;
