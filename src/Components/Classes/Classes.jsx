import { Link } from 'react-router-dom';
import banner from '../../../public/Images/Yellow and Red Bright and Playful YouTube Thumbnail (9).png'

const Classes = () => {
    return (
        <div>
            <div className="card text-center md:text-left  flex flex-col lg:flex-row bg-base-100 shadow-xl md:mx-28 border m-10">
                <figure>
                    <img className="mx-5 w-full"
                        src={banner}
                        alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-5xl text-yellow-300 font-extrabold">Zero To Hustler Within 200 Hours</h2>
                    <p className="text-2xl font-bold text-white">Experience The Best Education In Bangladesh In The Way You Never Learned Before</p>
                    <div className="card-actions  justify-center">
                        <button className="btn btn-primary px-24 text-white border-none rounded-full text-xl font-semibold  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ..."><Link to="/subject">Continue Courses</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Classes;