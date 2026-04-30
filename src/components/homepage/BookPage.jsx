import React from 'react';
import BookCard from './BookCard';

const BookPage = async() => {
     const res = await fetch('http://localhost:3000/data.json');
    const books =await res.json()
    console.log(books)
    return (
        <div className='grid grid-cols-3'>
    
    {
        books.slice(0,6).map(book=><BookCard key={book.id} book={book}></BookCard>)
    }
        </div>
    );
};

export default BookPage;