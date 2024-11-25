import { Link } from "react-router-dom";


const Exam = ({ exam }) => {
    const { exam_name, google_form_link, exam_unique_id } = exam
    return (
        <div className="card bg-base-100 w-96 shadow-xl border">
            <div className="card-body">
                <h2 className="card-title text-2xl text-center mx-auto m-5">{exam_name}</h2>
                <Link to={google_form_link} className="btn btn-info">Click Here To Submit Papers</Link>
              
            </div>
        </div>

    );
};

export default Exam;