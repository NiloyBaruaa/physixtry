import ReactPlayer from "react-player/youtube";


const Math = ({ math }) => {
    const { subject_name, subject_url, subject_title } = math;
    return (
        <div >

            <div className="card bg-base-100 w-96 shadow-xl text-center font-bold text-2xl">
                <ReactPlayer url={subject_url} height={270} width={380} controls volume></ReactPlayer>
                <div className="card-body">
                    <h2 >{subject_name}</h2>
                    <p>{subject_title}</p>
             
                </div>
            </div>


          

        </div>
    );
};

export default Math;