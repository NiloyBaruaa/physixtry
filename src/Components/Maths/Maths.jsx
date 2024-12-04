
import { useEffect, useState } from "react";

import Math from "../Math/Math";
import { Navigate } from "react-router-dom";

const Maths = () => {
    const [maths, setMaths] = useState([]);
    useEffect(() => {
        fetch('/maths.json')
            .then(res => res.json())
            .then(data => setMaths(data.subjects))
    }, [])
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
        // Redirect to login if not logged in
        return <Navigate to="/physixtry/login" />;
    }
    return (
        <div>
            <h1 className="text-7xl text-center font-bold">Math Content</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center m-10  mt-10 ">
                {
                    maths.map(math => <Math key={math.subject_id} math={math}></Math>)
                }
            </div>

        </div>
    );
};

export default Maths;