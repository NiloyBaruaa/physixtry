
import { useEffect, useState } from "react";

import Math from "../Math/Math";

const Maths = () => {
    const [maths, setMaths] = useState([]);
    useEffect(() => {
        fetch('physics.json')
            .then(res => res.json())
            .then(data => setMaths(data.subjects))
    }, [])
    return (
        <div>
            <h1 className="text-7xl text-center font-bold">PHYSICS Content</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center m-10  mt-10 ">
                {
                    maths.map(math => <Math key={math.subject_id} math={math}></Math>)
                }
            </div>

        </div>
    );
};

export default Maths;