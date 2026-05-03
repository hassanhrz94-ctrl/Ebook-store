import React from 'react';
import BookCard from './BookCard';



const BookPage = async() => {
     const res = await fetch('http://localhost:3000/data.json',{cache:"no-store"});
    const books =await res.json()
    console.log(books)
    return (
        <div className='grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mt-10'>

          
    
    {
        books.slice(0,6).map(book=><BookCard key={book.id} book={book}></BookCard>)
    }
        </div>
    );
};

export default BookPage;