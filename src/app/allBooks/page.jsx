import AllBookCard from '@/components/shared/AllBookCard';
import React from 'react';

const AllBook = async() => {

     const res = await fetch('http://localhost:3000/data.json   ');
    const books =await res.json()
    console.log(books)
    return (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10">
         
            {
        books.map(book=><AllBookCard key={book.id} book={book}/>)
    }
        </div>
    );
};

export default AllBook;