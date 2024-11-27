import { Link } from "react-router-dom";
import routine from '../../assets/Images/routine.jpg'



const Details = () => {
    return (

        <div className="bg-blue-950">
            <h1 className="text-5xl font-bold text-center p-9 text-white">Get Your Full Routine</h1>
            <Link  to={'https://drive.google.com/file/d/14jHyIYpvkia3diCP3NGQiW1ohtoV_CpF/view?usp=sharing'}><p className="text-center text-3xl font-semibold p-5 underline">Click Here</p></Link>
            <img className="w-1/2 h-1/4 mx-auto pb-10" src={routine} alt="" />
        </div>

    );
};

export default Details;
