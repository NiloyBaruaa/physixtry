
import { useEffect, useState } from "react";

import Bio from "../Bio/Bio";
import { Navigate } from "react-router-dom";

const Biology = () => {
    const [biology, setBiology] = useState([]);
    useEffect(() => {
        fetch('/bios.json')
            .then(res => res.json())
            .then(data => setBiology(data.subjects))
    }, [])
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
        // Redirect to login if not logged in
        return <Navigate to="/physixtry/login" />;
    }
    return (
        <div>
            <h1 className="text-3xl text-center font-bold">Biology Content</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center m-10  mt-10 ">
                {
                    biology.map(bio => <Bio key={bio.subject_id} bio={bio}></Bio>)
                }
            </div>

        </div>
    );
};

export default Biology;