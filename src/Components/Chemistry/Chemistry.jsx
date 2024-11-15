
import { useEffect, useState } from "react";
import Physic from "../Physic/Physic";
import Chemist from "../Chemist/Chemist";

const Chemistry = () => {
    const [chemistry, setChemistry] = useState([]);
    useEffect(() => {
        fetch('physics.json')
            .then(res => res.json())
            .then(data => setChemistry(data.subjects))
    }, [])
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