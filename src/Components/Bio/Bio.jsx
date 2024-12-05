import ReactPlayer from "react-player/youtube";
import { Link } from "react-router-dom";


const Bio = ({ bio }) => {
    const { subject_name, subject_url, subject_title, chapter_number ,exam_link} = bio;
    return (
        <div >

            <div className="card bg-blue-950 text-white shadow-xl text-center mx-3 font-bold text-2xl">
                <div className="p-2 rounded-lg"><ReactPlayer url={subject_url} height={270} width={380} controls volume></ReactPlayer></div>
                <div className="card-body">
                 
                    <p>Chapter {chapter_number} : {subject_title}</p>
                    <p className="text-blue-600 text-base">Daily Test : <Link to={exam_link}>Chapter {chapter_number}</Link></p>
                </div>
            </div>


          

        </div>
    );
};

export default Bio;