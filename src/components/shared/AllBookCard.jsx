import Image from "next/image";
import Link from "next/link";
import React from "react";

const AllBookCard = ({ book }) => {
  const { id, title, author, category, available_quantity, image_url } = book;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col">

      {/* Image */}
      <div className="w-full">
        <Image
          src={image_url}
          width={400}
          height={300}
          alt={title || "book"}
          className="w-full h-52 object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1 justify-between">

        <div className="space-y-2">
          <h2 className="text-lg font-semibold">{title}</h2>

          <p className="text-sm text-gray-600">
            <span className="font-medium">Author:</span> {author}
          </p>

          <p className="text-sm text-gray-600">
            <span className="font-medium">Category:</span> {category}
          </p>

          <p
            className={`text-sm font-semibold ${
              available_quantity > 0 ? "text-green-600" : "text-red-500"
            }`}
          >
            {available_quantity > 0
              ? `Available: ${available_quantity}`
              : "Out of Stock"}
          </p>
        </div>

        {/* Button */}
        <div className="mt-4">
          <Link href={`/books/${id}`}>
            <button className="w-full bg-pink-600 text-white text-sm py-2 rounded-lg transition">
              View Details
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default AllBookCard;