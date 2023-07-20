import React from 'react';
import { IoNotificationsOutline } from 'react-icons/io5';
import './NotificationBadge.css';

const NotificationBadge = ({ count, onClick }) => {
  return (
    <div onClick={onClick} className="notification-badge">
      <IoNotificationsOutline className='icon' size={24} color="#000" />
      {count > 0 && <span className="notification-count">{count}</span>}
    </div>
  );
};

export default NotificationBadge;
