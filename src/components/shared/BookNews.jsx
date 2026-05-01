import React from 'react';
import Marquee from "react-fast-marquee";
const BookNews = () => {
    const news = [
  {
    _id: 1,
    title: "The Midnight Library",
  },
  {
    _id: 2,
    title: "Clean Code",
  },
  {
    _id: 3,
    title: "Stephen Hawking",
  },
];
    return (
        <div className=' mt-4 flex justify-between gap-4 items-center bg-pink-200 py-4 px-2 container mx-auto'>
            <Marquee pauseOnHover={true} speed={100}>
{
    news.map((n)=><span key={n.id}>{n.title} | Special Discount on Memberships...</span>)
}
</Marquee>
        </div>
    );
};

export default BookNews;