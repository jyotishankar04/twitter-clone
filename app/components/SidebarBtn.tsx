"use client";

import Link from "next/link";
import { useRouter } from "next/router";

interface props {
  className?: string;
  href?: string;
  icon: React.ReactElement;
  title: string;
}
const SidebarBtn: React.FC<{ btn: props }> = ({ btn }) => {
  // const { asPath } = useRouter();
  // console.log(locaion);

  return (
    <Link href={btn.href!}>
      <button
        className={` flex 

        //   asPath == btn.href && "font-bold"
        // }
         justify-start gap-4 items-center  text-xl font-light text-slate-200 ${btn.className} hover:bg-slate-800/50 py-2 px-4 w-full rounded-full `}
      >
        <span className="text-3xl">{btn.icon}</span>
        {btn.title}
      </button>
    </Link>
  );
};

export default SidebarBtn;
