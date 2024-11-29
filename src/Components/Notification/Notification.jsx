import React from 'react';

const Notification = ({notification}) => {
    const {notification_id,notification_title,notification_description} = notification;
    console.log(notification_id);
    
    return (
        <div className="card bg-blue-900 text-white w-full">
        <div className="card-body">
          <h2 className="card-title text-3xl">{notification_title}</h2>
          <p>{notification_description}</p>
        </div>
      </div>
    );
};

export default Notification;