import React, { useContext } from 'react';

import AlertContext from '../../context/alert/AlertContext';

const Alert = () => {
  const { state } = useContext(AlertContext);
  return (
    state !== null && (
      <div className={`bg-${state.type} text-white p-3 my-3`}>
        <i className='fas fa-info-circle' /> {state.msg}
      </div>
    )
  );
};

export default Alert;
