import React, { useContext } from 'react';
import AlertContext from '../../contexts/alert/alertContext';

const Alerts = () => {
  const alertContext = useContext(AlertContext);

  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map((alert) => (
      <div key={alert.id} className={`alert alert-${alert.type}`}>
        <i className='fas fa-info-circle mr-2'></i>
        {alert.msg}
      </div>
    ))
  );
};

export default Alerts;
