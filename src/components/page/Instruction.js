import React, { useContext } from 'react';
import UserContext from '../../contexts/user/userContext';

const Instruction = () => {
  const userContext = useContext(UserContext);
  const { userName, userType } = userContext;

  return (
    <div className='container'>
      <div className='card border-0'>
        <div className='card-body'>
          <h2 className='mb-3'>Welcome to your workplace, {userName}!</h2>
          <h5>
            <strong>User Name: </strong> {userName}
          </h5>
          <h5>
            <strong>User Type: </strong> {userType}
          </h5>
          <h5>
            <strong>Date: </strong> {new Date().toJSON().slice(0, 10)}
          </h5>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Instruction;
