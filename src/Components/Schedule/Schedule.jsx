
import { FaCalendarCheck } from "react-icons/fa";
import { FaRegCalendarXmark } from "react-icons/fa6";

const Schedule = () => {
    return (
        <div>
            <h1 className="text-5xl md:text-6xl text-center mt-12 mb-8 font-extrabold ">Course Schedule</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:mx-20 md:py-10 md:px-5 mx-7 ">
                <div className="card card-side border py-10 px-5 bg-cyan-300">
                    <figure>
                       <FaCalendarCheck className="text-blue-950 h-24 w-24 md:pl-12 "></FaCalendarCheck>
                    </figure>
                    <div className="card-body text-black ">
                        <h2 className="card-title text-3xl font-semibold">এনরোলমেন্ট শুরু</h2>
                        <p className="text-2xl font-semibold italic">November 05, 2024</p>
                        
                    </div>
                </div>
                <div className="card card-side border  py-10 px-5 bg-cyan-300">
                    <figure>
                        <FaRegCalendarXmark className="text-red-600 h-24 w-24 md:pl-12"></FaRegCalendarXmark>
                    </figure>
                    <div className="card-body text-black ">
                        <h2 className="card-title text-3xl font-semibold">এনরোলমেন্ট শেষ</h2>
                        <p className="text-2xl font-semibold italic">November 18, 2024</p>
                        
                    </div>
                </div>
            </div>
            <div className="text-center text-3xl text-white">
                <h1 className="font-bold mt-5">কোর্স ফি 550/= টাকা</h1>
            </div>
             <div className="flex justify-center mt-8">
                <a href="" className="btn btn-primary px-32 rounded-2xl mb-5 hover:bg-white hover:text-blue text-2xl font-semibold">Enroll Now</a>
             </div>
        </div>
    );
};

export default Schedule;