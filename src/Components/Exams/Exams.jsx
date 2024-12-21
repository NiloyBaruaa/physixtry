import { useEffect, useState } from "react";
import Exam from "../Exam/Exam";
import { Navigate } from "react-router-dom";


const Exams = () => {

    const [exams, setExams] = useState([])
    useEffect(() => {
        fetch('/exams.json')
            .then(res => res.json())
            .then(data => setExams(data.exams))
    }, [])


    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
        // Redirect to login if not logged in
        return <Navigate to="/physixtry/login" />;
    }
    return (





        <div className="bg-blue-900"> 
            <h1 className="text-4xl text-center p-10 text-white">Submit Your Weekly Test : </h1>
            <div className="grid grid-cols-3 gap-10  m-5">
                {
                    exams.map(exam => <Exam key={exam.exam_unique_id} exam={exam}></Exam>)
                }



            </div>
        </div>
    );
};

export default Exams;