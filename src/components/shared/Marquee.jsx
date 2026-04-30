import React from "react";

const Marquee = ({ books }) => {
  const text = books.map((b) => b.title).join(" | ");

  return (
    <div className="w-full bg-blue-600 text-white overflow-hidden whitespace-nowrap">
      <div className="animate-marquee py-2 text-sm font-medium">
        New Arrivals: {text} | Special Discount on Memberships 🎉
      </div>
    </div>
  );
};

export default Marquee;