import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import './Toast.css'
function ToastMessage(status){
  const success={
    icons: <FaCheck />,
    statusMessage: 'Thành Công',
    notification: 'Tạo chuyến đi thành công'
  }
  return (
    <div className='wrapperToast'>
      <div className='container'>
        <div className='containerItem'>
          {success.icons}
        </div>
        <div className='status'>
          <span>{success.statusMessage}</span>
          <span>{success.notification}</span>
        </div>
      </div>
    </div>
  );
}

export default ToastMessage;