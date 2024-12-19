
import { useEffect, useState } from "react";
import Hmath from "../Hmath/Hmath";
import { Navigate } from "react-router-dom";


const HigherMath = () => {
    const [higherMath, setHigherMath] = useState([]);
    useEffect(() => {
        fetch('/hmath.json')
            .then(res => res.json())
            .then(data => setHigherMath(data.subjects))
    }, [])
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
        // Redirect to login if not logged in
        return <Navigate to="/physixtry/login" />;
    }
    return (
        <div>
            <h1 className="text-7xl text-center font-bold">Higher Math Content</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center m-10  mt-10 ">
                {
                    higherMath.map(hmath => <Hmath key={hmath.subject_id} hmath={hmath}></Hmath>)
                }
            </div>

        </div>
    );
};

export default HigherMath;