import { Link } from 'react-router-dom';
import banner from '../../../public/Images/Yellow and Red Bright and Playful YouTube Thumbnail (9).png'
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";
import banner2 from '../../../public/Images/Yellow and Red Bright and Playful YouTube Thumbnail (13).png'
const Classes = () => {
    const navigate = useNavigate();
    const handleLogout = async () => {

        try {
            await signOut(auth);
            console.log("User signed out successfully.");
            navigate("/physixtry/login"); // Redirect to login page
        } catch (error) {
            console.error("Error signing out:", error.message);
        }
    };
    return (
        <div className='bg-blue-950'>
            <div className="card text-center md:text-left  flex flex-col lg:flex-row bg-base-100 shadow-xl md:mx-28 border m-10">
                <figure>
                    <img className="mx-5 w-full"
                        src={banner}
                        alt="Movie" />
                </figure>
                <div className="card-body bg-black">
                    <h2 className="card-title text-5xl text-yellow-300 font-extrabold">Zero To Hustler Within 200 Hours</h2>
                    <p className="text-2xl font-bold text-white">Experience The Best Education In Bangladesh In The Way You Never Learned Before</p>
                    <div className="card-actions  justify-center">
                        <button className="btn btn-primary px-24 text-white border-none rounded-full text-md font-semibold  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ..."><Link to="/physixtry/subject">Continue Courses</Link></button>
                    </div>
                </div>
            </div>
            <div className="card text-center md:text-left  flex flex-col-reverse lg:flex-row bg-base-100 shadow-xl md:mx-28 border m-10">

            <div className="card-body bg-black">
                    <h2 className="card-title text-5xl text-yellow-300 font-extrabold">Get Your Weekly Test</h2>
                    <p className="text-2xl font-bold text-white">Experience The Best Education In Bangladesh In The Way You Never Learned Before</p>
                    <div className="card-actions  justify-center">
                        <button className="btn btn-primary px-24 text-white border-none rounded-full text-md font-semibold  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ..."><Link to="/physixtry/exams">Continue Exams</Link></button>
                    </div>
                </div>
                <figure>
                    <img className="mx-5 w-full"
                        src={banner2}
                        alt="Movie" />
                </figure>
          
            </div>
        
          <div className='text-center'>
          <h1 onClick={handleLogout} className='w-1/4 text-center mx-auto btn btn-primary mt-4'>Log Out</h1>
          </div>
          
        </div>
    );
};

export default Classes;