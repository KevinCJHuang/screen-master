import React, { useState, useContext } from 'react';
import AdminContext from '../../contexts/admin/adminContext';
import EmailContext from '../../contexts/email/emailContext';

const AdminEmailView = ({ emailItem }) => {
  const adminContext = useContext(AdminContext);
  const emailContext = useContext(EmailContext);
  const { id, from, to, CC, title, content } = emailItem;

  const [hover, setHover] = useState(false);

  const readOnClick = () => adminContext.setReadEmail(emailItem);

  return (
    <li className='list-group-item'>
      {hover &&
      emailContext.deleteBin.filter((email) => email.id === emailItem.id)
        .length === 0 ? (
        <div
          className='row'
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            height: '30px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          <div className='col-6'>
            <h5 className='ml-2'>To: {to}</h5>
          </div>
          <div className='col-5'>
            <h5> {title}</h5>
          </div>
          <div className='col-1'>
            <button
              className='btn btn-outline-success btn-sm float-right'
              style={{ height: '30px' }}
              onClick={readOnClick}
            >
              Read
            </button>
          </div>
        </div>
      ) : (
        <div
          className='row'
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            height: '30px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          <div className='col-6'>
            <h5 className='ml-2'>To: {to}</h5>
          </div>
          <div className='col-6'>
            <h5> {title}</h5>
          </div>
        </div>
      )}
    </li>
  );
};

export default AdminEmailView;
