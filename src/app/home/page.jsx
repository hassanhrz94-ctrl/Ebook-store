import Image from 'next/image';
import React from 'react';

const HomePage = async() => {
    const res = await fetch('http://localhost:3000/data.json');
    const books =await res.json()
    console.log(books)

    return (
        <div>
            this is home page
            {
                books.map((book,id)=> <div key={book.id}>
                    
                    {book.title} 
                  <Image 
  src={book.image_url} 
  width={110} 
  height={114} 
  alt={book.title || 'book'}
/>
                    
                    </div>)
            }
        </div>
    );
};

export default HomePage;