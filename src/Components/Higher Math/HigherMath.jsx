
import { useEffect, useState } from "react";
import Hmath from "../Hmath/Hmath";


const HigherMath = () => {
    const [higherMath, setHigherMath] = useState([]);
    useEffect(() => {
        fetch('physics.json')
            .then(res => res.json())
            .then(data => setHigherMath(data.subjects))
    }, [])
    return (
        <div>
            <h1 className="text-7xl text-center font-bold">PHYSICS Content</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center m-10  mt-10 ">
                {
                    higherMath.map(hmath => <Hmath key={hmath.subject_id} hmath={hmath}></Hmath>)
                }
            </div>

        </div>
    );
};

export default HigherMath;