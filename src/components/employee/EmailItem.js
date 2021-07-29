import React, { useState, useContext } from 'react';
import EmailContext from '../../contexts/email/emailContext';
const EmailItem = ({ emailItem }) => {
  const emailContext = useContext(EmailContext);
  const { id, from, to, CC, title, content } = emailItem;

  const [hover, setHover] = useState(false);

  const readOnClick = () => emailContext.setReadEmail(emailItem);
  const deleteOnClick = () => emailContext.deleteEmail(emailItem);

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
          {from === 'CHuang@gooseint.com' ? (
            <div className='col-5'>
              <h5 className='ml-2'>To: {to}</h5>
            </div>
          ) : (
            <div className='col-5'>
              <h5 className='ml-2'>{from}</h5>
            </div>
          )}
          <div className='col-4'>
            <h5> {title}</h5>
          </div>
          <div className='col-3'>
            <button
              className='btn btn-outline-danger btn-sm float-right ml-3'
              style={{ height: '30px' }}
              onClick={deleteOnClick}
            >
              Delete
            </button>
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
          {from === 'CHuang@gooseint.com' ? (
            <div className='col-5'>
              <h5 className='ml-2'>To: {to}</h5>
            </div>
          ) : (
            <div className='col-5'>
              <h5 className='ml-2'>{from}</h5>
            </div>
          )}
          <div className='col-7'>
            <h5> {title}</h5>
          </div>
        </div>
      )}
    </li>
  );
};

export default EmailItem;
