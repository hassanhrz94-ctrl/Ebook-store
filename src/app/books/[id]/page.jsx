import Image from "next/image";

const BooksDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch("https://ebook-store-eta.vercel.app/data.json",{cache:"no-store"});
  const books = await res.json();
  const book = books.find((b) => b.id === parseInt(id));

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      
      {/* Card */}
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-lg overflow-hidden">
        
        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Image */}
          <div>
            <Image
              src={book.image_url}
              width={600}
              height={500}
              alt={book.title || "book"}
              className="w-full h-full object-cover md:rounded-l-2xl"
            />
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col justify-between">
            
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold">
                {book.title}
              </h1>

              <p className="text-gray-600">
                <span className="font-semibold">Author:</span> {book.author}
              </p>

              <p className="text-gray-600">
                <span className="font-semibold">Category:</span> {book.category}
              </p>

              {/* Availability Badge */}
              <p
                className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                  book.available_quantity > 0
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {book.available_quantity > 0
                  ? `Available (${book.available_quantity})`
                  : "Out of Stock"}
              </p>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed">
                {book.description}
              </p>
            </div>

          

          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksDetailsPage;