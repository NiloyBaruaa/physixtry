import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const Subject = () => {
    return (

        <div>
            <h1 className="text-5xl mt-3 text-yellow-400 font-extrabold underline text-center">Choose Your Subject !</h1>
            <div className="flex flex-col md:flex-row gap-10 mt-10 justify-evenly">
                <div className="card-actions  justify-center">
                    <button className="btn btn-primary px-20 text-white border-none rounded-full text-xl font-semibold  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ..."><Link to="/physics">PHYSICS</Link></button>
                </div>
                <div className="card-actions  justify-center">
                    <button className="btn btn-primary px-20 text-white border-none rounded-full text-xl font-semibold  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ..."><Link to="/chemistry">CHEMISTRY</Link></button>
                </div>
                <div className="card-actions  justify-center">
                    <button className="btn btn-primary px-20 text-white border-none rounded-full text-xl font-semibold  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ..."><Link to="/math">MATH</Link></button>
                </div>
                <div className="card-actions  justify-center">
                    <button className="btn btn-primary px-20 text-white border-none rounded-full text-xl font-semibold  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ..."><Link to="/highermath">H.MATH</Link></button>
                </div>
                <div className="card-actions  justify-center">
                    <button className="btn btn-primary px-10 text-white border-none rounded-full text-xl font-semibold  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ..."><Link to="/biology">BIOLOGY</Link></button>
                </div>
            </div>
            <Marquee speed={200}>
                <div className="flex gap-14 m-10">
                    <div>
                        <Link to={'/physics'}>
                            <img className="w-full h-72" src="../../../public/Images/Physics.webp" alt="" />
                            <p className="text-center text-4xl font-bold border px-5">Physics</p></Link>
                    </div>
                    <div>
                        <Link to={'/chemistry'}>
                            <img className="w-full h-72" src="../../../public/Images/chemistry.png" alt="" />
                            <p className="text-center text-4xl font-bold border px-5">Chemistry</p></Link>
                    </div>
                    <div>
                        <Link to={'/biology'}>        <img className="w-full h-72" src="../../../public/Images/Biology.jpg" alt="" />
                            <p className="text-center text-4xl font-bold border px-5">Biology</p></Link>
                    </div>
                    <div>
                        <Link to={'/math'}>
                            <img className="w-full h-72" src="../../../public/Images/math.jpg" alt="" />
                            <p className="text-center text-4xl font-bold border px-5">Math</p></Link>
                    </div>
                    <div>
                        <Link to={'/highermath'}>
                            <img className="w-full h-72" src="../../../public/Images/mathermarebap.jpg" alt="" />
                            <p className="text-center text-4xl font-bold border px-5">Higher Math</p>
                        </Link>
                    </div>
                </div>
            </Marquee>
        </div>
    );
};

export default Subject;