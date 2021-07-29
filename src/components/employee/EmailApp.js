import React, { useContext, useEffect, useState } from 'react';
import EmailContext from '../../contexts/email/emailContext';
import AlertContext from '../../contexts/alert/alertContext';
import EmailItem from './EmailItem';

const EmailApp = () => {
  const emailContext = useContext(EmailContext);
  const {
    emails,
    deleteBin,
    readEmail,
    clearReadEmail,
    emailsSent,
    sendEmail,
    startTimer,
    terminateTimer,
  } = emailContext;

  const alertContext = useContext(AlertContext);

  const [activeTab, setActiveTab] = useState('inbox');
  const [emailContent, setEmailContent] = useState({
    id: 1,
    from: '',
    to: '',
    CC: '',
    title: '',
    content: ``,
    tag: '',
  });
  const { id, from, to, CC, title, content, tag } = emailContent;

  // On mount
  useEffect(() => {
    startTimer();
  }, []);

  // On Unmount
  useEffect(() => {
    return () => {
      terminateTimer();
    };
  }, []);

  const onClick = (e) => {
    clearReadEmail();
    setActiveTab(e.target.id);
  };

  const backOnClick = (e) => {
    clearReadEmail();
  };
  const onChange = (e) =>
    setEmailContent({ ...emailContent, [e.target.name]: e.target.value });

  const postWarning = () => {
    const targetEmail = emailsSent.filter((e) => e.id === emailContent.id);
    if (targetEmail.length > 0) {
      const tag = targetEmail[0].tag;
      switch (tag) {
        case 'green':
          alertContext.setAlert('Email sent.', 'success');
          break;
        case 'yellow':
          alertContext.setAlert(
            'Email is sent to an external mailbox. This behaviour will be reported to the admin.',
            'warning'
          );
          break;
        case 'red':
          alertContext.setAlert(
            'Email is sent to an external mailbox with sensitive contents. This behaviour will be reported to the admin.',
            'danger'
          );
          break;
        default:
          console.log('default: ', tag);
      }
      setActiveTab('sent');
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    sendEmail(emailContent);
  };

  useEffect(() => {
    postWarning();
  }, [emailsSent]);

  return (
    <div className='container'>
      <div className='card border-0'>
        <div className='card-body'>
          <div className='row'>
            <div className='col-3'>
              <button
                className={
                  'btn btn-outline-dark btn-block ' +
                  (activeTab === 'compose' && 'active')
                }
                id='compose'
                onClick={onClick}
              >
                <i className='fas fa-plus mr-3'></i>
                Compose
              </button>
              <button
                className={
                  'btn btn-outline-dark btn-block ' +
                  (activeTab === 'inbox' && 'active')
                }
                id='inbox'
                onClick={onClick}
              >
                <i className='fas fa-inbox mr-3'></i>
                Email Inbox
              </button>
              <button
                className={
                  'btn btn-outline-dark btn-block ' +
                  (activeTab === 'sent' && 'active')
                }
                id='sent'
                onClick={onClick}
              >
                <i className='fas fa-paper-plane mr-3'></i>
                Email Sent
              </button>
              <button
                className={
                  'btn btn-outline-dark btn-block ' +
                  (activeTab === 'draft' && 'active')
                }
                id='draft'
                onClick={onClick}
              >
                <i className='fas fa-file mr-3'></i>
                Saved Draft
              </button>
              <button
                className={
                  'btn btn-outline-dark btn-block ' +
                  (activeTab === 'bin' && 'active')
                }
                id='bin'
                onClick={onClick}
              >
                <i className='fas fa-trash-alt mr-3'></i>
                Deleted Bin
              </button>
              <button
                className={
                  'btn btn-outline-dark btn-block ' +
                  (activeTab === 'all' && 'active')
                }
                id='all'
                onClick={onClick}
              >
                <i className='fas fa-envelope mr-3'></i>
                All Emails
              </button>
            </div>
            <div className='col-9'>
              {readEmail && (
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
              )}
              {!readEmail && activeTab === 'inbox' && (
                <div className='card'>
                  <div className='card-header'>
                    <h3 className='my-2'>Inbox</h3>
                  </div>
                  <ul className='list-group list-group-flush'>
                    {emails.map((email) => (
                      <div>
                        <EmailItem key={email.id} emailItem={email}></EmailItem>
                      </div>
                    ))}
                  </ul>
                </div>
              )}
              {!readEmail && activeTab === 'sent' && (
                <div className='card'>
                  <div className='card-header'>
                    <h3 className='my-2'>Emails Sent</h3>
                  </div>
                  <ul className='list-group list-group-flush'>
                    {emailsSent.map((email) => (
                      <div>
                        <EmailItem key={email.id} emailItem={email}></EmailItem>
                      </div>
                    ))}
                  </ul>
                </div>
              )}
              {activeTab === 'bin' && (
                <div className='card'>
                  <div className='card-header'>
                    <h3 className='my-2'>Delete Bin</h3>
                  </div>
                  {deleteBin.length === 0 ? (
                    <ul className='list-group list-group-flush'>
                      <li className='list-group-item'>
                        <h5>The bin is empty. There is no deleted email.</h5>
                      </li>
                    </ul>
                  ) : (
                    <ul className='list-group list-group-flush'>
                      {deleteBin.map((email) => (
                        <div>
                          <EmailItem
                            key={email.id}
                            emailItem={email}
                          ></EmailItem>
                        </div>
                      ))}
                    </ul>
                  )}
                </div>
              )}
              {activeTab === 'all' && (
                <div className='card'>
                  <div className='card-header'>
                    <h3 className='my-2'>All Emails</h3>
                  </div>
                  <ul className='list-group list-group-flush'>
                    {[...deleteBin, ...emails, ...emailsSent].map((email) => (
                      <div>
                        <EmailItem key={email.id} emailItem={email}></EmailItem>
                      </div>
                    ))}
                  </ul>
                </div>
              )}
              {activeTab === 'compose' && (
                <div className='card'>
                  <div className='card-header'>
                    <h3 className='my-2'>Create New Email</h3>
                  </div>
                  <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                      <form onSubmit={onSubmit}>
                        <div className='input-group mb-3'>
                          <div className='input-group-prepend'>
                            <span className='input-group-text'>Title: </span>
                          </div>
                          <input
                            className='form-control'
                            type='text'
                            name='title'
                            value={title}
                            placeholder='Enter email title'
                            onChange={onChange}
                            required
                          />
                        </div>
                        <div className='input-group mb-3'>
                          <div className='input-group-prepend'>
                            <span className='input-group-text'>To: </span>
                          </div>
                          <input
                            className='form-control'
                            type='email'
                            name='to'
                            value={to}
                            placeholder='Enter Destination Email Address'
                            onChange={onChange}
                            required
                          />
                        </div>
                        <div className='input-group mb-3'>
                          <div className='input-group-prepend'>
                            <span className='input-group-text'>CC: </span>
                          </div>
                          <input
                            className='form-control'
                            type='text'
                            name='CC'
                            value={CC}
                            placeholder='Enter Copied Email Address'
                            onChange={onChange}
                          />
                        </div>
                        <div className='form-group'>
                          <label htmlFor='content'>Email Content</label>
                          <textarea
                            className='form-control'
                            name='content'
                            value={content}
                            onChange={onChange}
                            required
                            rows='20'
                          />
                        </div>

                        <input
                          type='submit'
                          value='Send'
                          className='btn btn-primary btn-block'
                        />
                      </form>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailApp;
