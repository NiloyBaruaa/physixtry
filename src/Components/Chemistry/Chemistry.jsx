
import { useEffect, useState } from "react";

import Chemist from "../Chemist/Chemist";
import { Navigate } from "react-router-dom";

const Chemistry = () => {
  

    const [chemistry, setChemistry] = useState([]);
    useEffect(() => {
        fetch('/chemistry.json')
            .then(res => res.json())
            .then(data => setChemistry(data.subjects))
    }, [])

    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
        // Redirect to login if not logged in
        return <Navigate to="/physixtry/login" />;
    }
    return (
        <div>
            <h1 className="text-7xl text-center font-bold">PHYSICS Content</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center m-10  mt-10 ">
                {
                    chemistry.map(chemist => <Chemist key={chemist.subject_id} chemist={chemist}></Chemist>)
                }
            </div>

        </div>
    );
};

export default Chemistry;