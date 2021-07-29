import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Pages
import About from './components/page/About';
import Login from './components/page/Login';
import Desktop from './components/employee/Desktop';
import Instruction from './components/page/Instruction';
import AdminBoard from './components/admin/AdminBoard';

// Employee Apps
import WorkApp from './components/employee/WorkApp';
import RelaxApp from './components/employee/RelaxApp';
import EmailApp from './components/employee/EmailApp';

// Layouts
import Navbar from './components/layout/Navbar';
import Alerts from './components/layout/Alerts';
// Context
import UserState from './contexts/user/UserState';
import WorkState from './contexts/work/WorkState';
import EmailState from './contexts/email/EmailState';
import AlertState from './contexts/alert/AlertState';
import AdminState from './contexts/admin/AdminState';

const App = () => {
  return (
    <AdminState>
      <AlertState>
        <EmailState>
          <UserState>
            <WorkState>
              <Router>
                <Navbar />
                <div className='container'>
                  <Alerts></Alerts>
                  <Switch>
                    <Route exact path='/' component={About}></Route>
                    <Route exact path='/login' component={Login}></Route>
                    <Route
                      exact
                      path='/instruction'
                      component={Instruction}
                    ></Route>
                    <Route exact path='/desktop' component={Desktop}></Route>
                    <Route exact path='/workapp' component={WorkApp}></Route>
                    <Route exact path='/relaxapp' component={RelaxApp}></Route>
                    <Route exact path='/emailapp' component={EmailApp}></Route>
                    <Route
                      exact
                      path='/dashboard'
                      component={AdminBoard}
                    ></Route>
                  </Switch>
                </div>
              </Router>
            </WorkState>
          </UserState>
        </EmailState>
      </AlertState>
    </AdminState>
  );
};

export default App;
