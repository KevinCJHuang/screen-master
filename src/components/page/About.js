import React from 'react';

const About = () => {
  return (
    <div className='container'>
      <div className='card mt-5'>
        <div className='card-header'>
          <h3>About this App</h3>
        </div>

        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <strong>Group Number: </strong>12
          </li>
          <li className='list-group-item'>
            <strong> Group Members: </strong> Guanlin Cheng, Tingqian Han,
            Chengjie Huang, Lichen Yu
          </li>
          <li className='list-group-item'>
            <p>
              Screen Monitor is built as an example screen monitor App for the
              CS492 final group assignment. It mimics the functionalities of
              many other screen monitor Apps on the market. A user can login to
              the App as an <strong> Employee</strong> or an{' '}
              <strong>Admin</strong>.
            </p>
            <p>
              There are three mini-apps for an <strong> Employee</strong> to
              use:
              <strong> Work App, Email App, and Relax App.</strong>
            </p>
            <ul>
              <li>
                <p>
                  When using the <strong>Work App</strong>, the Screen Monitor
                  will track how long the employee has been working, and how
                  many works are done.
                </p>
              </li>
              <li>
                <p>
                  When using the <strong> Email App</strong>, the Screen Monitor
                  will track the amount of time the employee spends on reading
                  and writing emails, screens through the contents the employee
                  writes in his/her email, and reports to the admin if the email
                  sends to an external mailbox and if it contains any
                  confidential information.
                </p>
              </li>
              <li>
                <p>
                  When using the <strong>Relax App</strong>, the Screen Monitor
                  will track how long the employee stays idle.
                </p>
              </li>
            </ul>
            <p>
              All the above data will be collected by the App. When a user login
              to the App as an <strong>Admin</strong>, it will view these data
              in an <strong>Admin Dashboard</strong>.
            </p>
            <p>To start with, please login with the following credentials:</p>
            <ul>
              <li>
                <strong>Employee Account</strong>
                <ul>
                  <li>User Name: E01</li>
                  <li>Password: employee</li>
                </ul>
              </li>
              <li>
                <strong>Admin Account</strong>
                <ul>
                  <li>User Name: A01</li>
                  <li>Password: admin</li>
                </ul>{' '}
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
