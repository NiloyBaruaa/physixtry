
import { useEffect, useState } from "react";

import Bio from "../Bio/Bio";

const Biology = () => {
    const [biology, setBiology] = useState([]);
    useEffect(() => {
        fetch('physics.json')
            .then(res => res.json())
            .then(data => setBiology(data.subjects))
    }, [])
    return (
        <div>
            <h1 className="text-7xl text-center font-bold">PHYSICS Content</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center m-10  mt-10 ">
                {
                    biology.map(bio => <Bio key={bio.subject_id} bio={bio}></Bio>)
                }
            </div>

        </div>
    );
};

export default Biology;