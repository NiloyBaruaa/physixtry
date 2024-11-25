import { Link, Navigate } from "react-router-dom";


const Book = ({book}) => {
    const { book_name, pdf_link, book_unique_id } = book;
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
        // Redirect to login if not logged in
        return <Navigate to="/physixtry/login" />;
    }
    return (
        <div className="card bg-base-100 w-96 shadow-xl border">
            <div className="card-body">
                <h2 className="card-title text-2xl text-center mx-auto m-5">{book_name}</h2>
                <Link to={pdf_link} className="btn btn-info">Download Your Book</Link>
            </div>
        </div>
    )
};

export default Book;