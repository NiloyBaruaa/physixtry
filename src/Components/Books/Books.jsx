import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Book from "../Book/Book";


const Books = () => {

    const [books,setBooks] = useState([])
    useEffect(() => {
        fetch('/public/book.json')
        .then(res => res.json())
        .then(data => setBooks(data.books))
    },[])

    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
        // Redirect to login if not logged in
        return <Navigate to="/physixtry/login" />;
    }
    return (
   <div>
    <h1 className="text-7xl my-16 text-center m-10 font-bold">Highlighted Book</h1>
         <div className="grid grid-cols-1 mx-32 md:mx-16 md:grid-cols-3 gap-10">
            {
                books.map(book => <Book key={book.book_unique_id} book={book}></Book>)
            }
        </div>
   </div>
    );
};

export default Books;