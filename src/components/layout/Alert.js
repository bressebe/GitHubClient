import React from 'react';

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className={`bg-${alert.type} text-white p-3 my-3`}>
        <i className='fas fa-info-circle' /> {alert.msg}
      </div>
    )
  );
};

export default Alert;
