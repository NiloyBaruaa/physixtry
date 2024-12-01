

import { useEffect, useState } from "react";

import { Navigate } from "react-router-dom";
import Instruction from "../Instruction/Instruction";

const Instructions = () => {
    const [instructions, setInstructions] = useState([]);
    useEffect(() => {
        fetch('/instructions.json')
            .then(res => res.json())
            .then(data => setInstructions(data))
    }, [])
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
        // Redirect to login if not logged in
        return <Navigate to="/physixtry/login" />;
    }
    return (
        <div className="bg-blue-200">
            <h1 className="text-6xl pt-16 text-center text-black font-bold">Instructional Video</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center m-10  mt-10 ">
                {
                    instructions.map(instruction => <Instruction key={instruction.video_id} instruction={instruction}></Instruction>)
                }
            </div>

        </div>
    );
};

export default Instructions;