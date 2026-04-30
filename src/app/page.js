import BookPage from "@/components/homepage/BookPage";
import Banner from "@/components/shared/Banner";
import Marquee from "@/components/shared/Marquee";
import Image from "next/image";

export default function Home() {
  
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
  
    <BookPage></BookPage>
    
    </div>
  );
}
