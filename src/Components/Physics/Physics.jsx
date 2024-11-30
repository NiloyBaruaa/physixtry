
import { useEffect, useState } from "react";
import Physic from "../Physic/Physic";
import { Navigate } from "react-router-dom";

const Physics = () => {
    const [physics, setPhysics] = useState([]);
    useEffect(() => {
        fetch('/physics.json')
            .then(res => res.json())
            .then(data => setPhysics(data.subjects))
    }, [])
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
        // Redirect to login if not logged in
        return <Navigate to="/physixtry/login" />;
    }
    return (
        <div className="bg-blue-200">
            <h1 className="text-6xl pt-16 text-center text-black font-bold">PHYSICS</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center m-10  mt-10 ">
                {
                    physics.map(physic => <Physic key={physic.subject_id} physic={physic}></Physic>)
                }
            </div>

        </div>
    );
};

export default Physics;