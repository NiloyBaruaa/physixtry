import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Book from "../Book/Book";


const Books = () => {

    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch('/book.json')
            .then(res => res.json())
            .then(data => setBooks(data.books))
            .catch(error => console.error('Error fetching books.json:', error));
    }, [])

    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
        // Redirect to login if not logged in
        return <Navigate to="/physixtry/login" />;
    }
    localStorage.setItem('isLoggedIn', 'true');

    if (!books) {
        return <span className="loading loading-spinner loading-lg"></span>
    }
    return (
        <div className="pb-10 bg-cyan-400">
            <h1 className="md:text-7xl text-black text-4xl py-16 text-center p-10 font-bold">Highlighted Book</h1>
            <div className="grid grid-cols-1 mx-6 md:mx-16 md:grid-cols-3 gap-10">
                {
                    books.map(book => <Book key={book.book_unique_id} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;