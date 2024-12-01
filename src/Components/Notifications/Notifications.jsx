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
        <div className="bg-blue-950">
        <h1 className="md:text-7xl text-3xl py-16 text-center p-10 font-bold  text-white">Latest Notification</h1>
             <div className=" md:mx-32 mx-6 flex flex-col-reverse gap-5">
                {
                    notifications.map(notification => <Notification key={notification.notification_id} notification={notification}></Notification>)
                }
            </div>
       </div>
    );
};

export default Notifications;