import { FaXTwitter } from "react-icons/fa6";
import { RiUserLine } from "react-icons/ri";

import {
  GoBell,
  GoBellFill,
  GoBookmark,
  GoHomeFill,
  GoMail,
  GoSearch,
} from "react-icons/go";
import SidebarBtn from "./SidebarBtn";
interface TwitterSiderbarButton {
  icon: React.ReactElement;
  title: string;
  href?: string;
  className?: string;
}
import { CgMoreO } from "react-icons/cg";

function Sidebar() {
  const siderbarButton: TwitterSiderbarButton[] = [
    { icon: <GoHomeFill />, title: "Home", href: "/", className: "" },
    { icon: <GoSearch />, title: "Explore", href: "/", className: "" },
    { icon: <GoBell />, title: "Notification", href: "/", className: "" },
    { icon: <GoMail />, title: "Messages", href: "/", className: "" },
    { icon: <GoBookmark />, title: "Bookmarks", href: "/", className: "" },
    { icon: <RiUserLine />, title: "Profile", href: "/", className: "" },
    { icon: <CgMoreO />, title: "More", href: "/", className: "" },
  ];
  return (
    <div className="col-span-3  p-5 ">
      <div className="pl-2 ">
        <FaXTwitter className="text-5xl hover:bg-slate-800/80 pl-2 w-fit cursor-pointer p-2 rounded-full" />
      </div>
      <div className="mt-5 flex flex-col gap-4">
        {siderbarButton &&
          siderbarButton.map((btn, index) => (
            <SidebarBtn btn={btn} key={index} />
          ))}
      </div>
      <div className="w-full">
        <button className="w-full py-3 bg-sky-500 text-xl font-semibold rounded-full mt-5 hover:bg-sky-600">
          Post
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
