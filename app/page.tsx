import Image from "next/image";
import FeedCard from "./components/Feed/FeedCard";
import SuggestSignup from "./components/RightBar/SuggestSignup";

export default function Home() {
  return (
    <div className="w-full h-screen  col-span-9 grid grid-cols-12">
      <div className="col-span-8 border-x overflow-auto no-scrollbar">
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
      </div>
      <div className="col-span-4   p-2">
        <div>
          <SuggestSignup />
        </div>
      </div>
    </div>
  );
}
