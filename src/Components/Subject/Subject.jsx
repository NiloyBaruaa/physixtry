import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import physics from "../../../public/Images/Physics.webp"
import chemistry from "../../../public/Images/chemistry.png"
import biology from "../../../public/Images/Biology.jpg"
import math from "../../../public/Images/math.jpg"
import hMath from "../../../public/Images/h math.jpg"
import theoritical from "../../../public/Images/theoritical.png"
const Subject = () => {
    const marqueeSubject = <>
     <Marquee speed={200}>
                <div className="flex gap-14 m-10">
                    <div>
                        <Link to={'/physixtry/physics'}>
                            <img className="w-full h-72" src={physics} alt="" />
                            <p className="text-center text-4xl font-bold border px-5">Physics</p></Link>
                    </div>
                    <div>
                        <Link to={'/physixtry/chemistry'}>
                            <img className="w-full h-72" src={chemistry} alt="" />
                            <p className="text-center text-4xl font-bold border px-5">Chemistry</p></Link>
                    </div>
                    <div>
                        <Link to={'/physixtry/biology'}>        <img className="w-full h-72" src={biology} alt="" />
                            <p className="text-center text-4xl font-bold border px-5">Biology</p></Link>
                    </div>
                    <div>
                        <Link to={'/physixtry/math'}>
                            <img className="w-full h-72" src={math} alt="" />
                            <p className="text-center text-4xl font-bold border px-5">Math</p></Link>
                    </div>
                    <div>
                        <Link to={'/physixtry/highermath'}>
                            <img className="w-full h-72" src={hMath} alt="" />
                            <p className="text-center text-4xl font-bold border px-5">Higher Math</p>
                        </Link>
                    </div>
                    <div>
                        <Link to={'/physixtry/theoritical'}>
                            <img className="w-full h-72" src={theoritical} alt="" />
                            <p className="text-center text-4xl font-bold border px-5">Theoritical</p>
                        </Link>
                    </div>
                </div>
            </Marquee>
    

    </>
    return (

        <div>
            <h1 className="text-5xl mt-3 text-yellow-400 font-extrabold underline text-center">Your Classes</h1>
            <div className="flex flex-col md:flex-row gap-1 mt-10 justify-evenly">
                <div className="card-actions  justify-center">
                    <button className="btn btn-primary px-20 text-white border-none rounded-full text-xl font-semibold  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ..."><Link to="/physixtry/physics">PHYSICS</Link></button>
                </div>
                <div className="card-actions  justify-center">
                    <button className="btn btn-primary px-20 text-white border-none rounded-full text-xl font-semibold  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ..."><Link to="/physixtry/chemistry">CHEMISTRY</Link></button>
                </div>
                <div className="card-actions  justify-center">
                    <button className="btn btn-primary px-20 text-white border-none rounded-full text-xl font-semibold  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ..."><Link to="/physixtry/math">MATH</Link></button>
                </div>
                <div className="card-actions  justify-center">
                    <button className="btn btn-primary px-20 text-white border-none rounded-full text-xl font-semibold  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ..."><Link to="/physixtry/highermath">H.MATH</Link></button>
                </div>
                <div className="card-actions  justify-center">
                    <button className="btn btn-primary px-10 text-white border-none rounded-full text-xl font-semibold  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ..."><Link to="/physixtry/biology">BIOLOGY</Link></button>
                </div>
                <div className="card-actions  justify-center">
                    <button className="btn btn-primary px-10 text-white border-none rounded-full text-xl font-semibold  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ..."><Link to="/physixtry/biology">THEORITICAL</Link></button>
                </div>
            </div>
           {marqueeSubject}
        </div>
    );
};

export default Subject;