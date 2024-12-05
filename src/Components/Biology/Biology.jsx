
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
        <div className="bg-blue-200">
            <h1 className="text-6xl pt-16 text-center text-black font-bold">Biology</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center m-10 gap-4  mt-10 ">
                {
                    biology.map(bio => <Bio key={bio.subject_id} bio = {bio}></Bio>)
                }
            </div>

        </div>
    );
};

export default Biology;