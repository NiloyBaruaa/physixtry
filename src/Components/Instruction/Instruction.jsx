
import ReactPlayer from "react-player/youtube";

const Instruction = ({instruction}) => {
    const { video_title,video_url,video_id} = instruction;
    return (
        <div >

            <div className="card bg-blue-950 text-white shadow-xl text-center font-bold text-2xl">
                <div className="p-2 rounded-lg  mx-auto">
                <ReactPlayer url={video_url} height={270} width={380} controls volume></ReactPlayer>
                </div>
                <div className="card-body">
                 
                    <p>Instruction : {video_id} : {video_title}</p>
                </div>
            </div>
        </div>
    )
};

export default Instruction;