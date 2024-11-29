import ReactPlayer from "react-player/youtube";

const Physic = ({ physic }) => {
    const { subject_name, subject_url, subject_title } = physic;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl text-center font-bold text-2xl">
                <div style={{ position: "relative", width: "380px", height: "270px" }}>
                    {/* ReactPlayer Component */}
                    <ReactPlayer 
                        url={subject_url} 
                        height={270} 
                        width={380} 
                        controls 
                        volume 
                    />
                    {/* Transparent Overlay to Prevent Clicks */}
                    <div
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            background: "transparent",
                            zIndex: 1,
                            cursor: "not-allowed",
                        }}
                        onClick={() => alert("Clicking on the video is disabled.")}
                    ></div>
                </div>
                <div className="card-body">
                    <h2>{subject_name}</h2>
                    <p>{subject_title}</p>
                </div>
            </div>
        </div>
    );
};

export default Physic;
