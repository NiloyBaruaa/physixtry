import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Notification from "../Notification/Notification";


const Notifications = () => {
    const [notifications,setNotification] = useState([])
    useEffect(() => {
        fetch('/notifications.json')
        .then(res => res.json())
        .then(data => setNotification(data))
    },[])
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
        // Redirect to login if not logged in
        return <Navigate to="/physixtry/login" />;
    }
    return (
        <div>
        <h1 className="text-7xl my-16 text-center m-10 font-bold bg-blue-950">Latest Notification</h1>
             <div className=" mx-32 md:mx-16 flex flex-col-reverse gap-10">
                {
                    notifications.map(notification => <Notification key={notification.notification_id} notification={notification}></Notification>)
                }
            </div>
       </div>
    );
};

export default Notifications;