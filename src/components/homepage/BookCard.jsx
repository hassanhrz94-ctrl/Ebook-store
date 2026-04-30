import Image from "next/image";
import Link from "next/link";
import React from "react";

const BookCard = ({ book }) => {
  const { id, title, author, category, available_quantity, image_url } = book;

  return (
    <div className="max-w-sm mx-auto mt-10">
    
      <h2 className="text-3xl font-bold text-center mb-6">
        Featured Books
      </h2>

     
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300">
        
       
        <Image
          src={image_url}
          width={400}
          height={300}
          alt={title || "book"}
          className="w-full h-64 object-cover"
        />

   
        <div className="p-5 space-y-2">
          <h3 className="text-xl font-semibold">{title}</h3>

          <p className="text-gray-600 text-sm">
            <span className="font-medium">Author:</span> {author}
          </p>

          <p className="text-gray-600 text-sm">
            <span className="font-medium">Category:</span> {category}
          </p>

          <div className="flex items-center justify-between mt-3">
            <p
              className={`text-sm font-semibold ${
                available_quantity > 0 ? "text-green-600" : "text-red-500"
              }`}
            >
              {available_quantity > 0
                ? `Available: ${available_quantity}`
                : "Out of Stock"}
            </p>

          
            <Link href={`/books/${id}`}>
              <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;