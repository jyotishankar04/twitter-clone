import Image from "next/image";
import Link from "next/link";
import { BiRepost } from "react-icons/bi";
import { GoBookmark, GoComment, GoHeart } from "react-icons/go";
import FeedButton from "./FeedButton";
import { VscGraph } from "react-icons/vsc";
export interface CardButtons {
  icon: React.ReactElement;
  type: string;
}

function FeedCard() {
  const cardButtons: CardButtons[] = [
    { icon: <GoComment />, type: "comment" },
    { icon: <BiRepost />, type: "repost" },
    { icon: <GoHeart />, type: "like" },
    { icon: <VscGraph />, type: "reach" },
    { icon: <GoBookmark />, type: "bookmark" },
  ];
  return (
    <div className="w-full border p-4 hover:bg-slate-950">
      <div className="flex gap-5 justify-start items-center">
        <Link
          href={"/"}
          className="w-12 aspect-square rounded-full overflow-hidden flex justify-center items-center object-cover"
        >
          <Image
            className="w-full object-cover aspect-square"
            src={
              "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
            }
            width={100}
            height={100}
            alt="Profile"
          />
        </Link>
        <div className="flex flex-col justify-center items-start">
          <Link href={"/"}>
            jhon joe{" "}
            <span className="text-sm text-gray-300/50">@jhondoe.io</span>
          </Link>
          <span className="text-sm text-gray-400/50">2 hours ago</span>
        </div>
      </div>
      <div className="ml-16 p-2">
        <p className="text-md  text-gray-200 t">
          You might hate me for saying this, but “Luck factor” is a big thing in
          life! Unless you absolutely break it down with something out of the
          box, or you are at it for years.
        </p>
      </div>
      <div className="flex ml-16 justify-between justify-items-center">
        {cardButtons.map((btn, index) => (
          <FeedButton btn={btn} key={index} />
        ))}
      </div>
    </div>
  );
}

export default FeedCard;
