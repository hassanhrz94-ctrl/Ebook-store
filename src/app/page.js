import BookPage from "@/components/homepage/BookPage";
import Banner from "@/components/shared/Banner";
import BookNews from "@/components/shared/BookNews";
;

export default function Home() {
  
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
  <Banner/>
    <BookNews/>
    <BookPage></BookPage>
    
    </div>
  );
}
