import { Card, CardTitle } from "@/components/ui/card";
import Link from "next/link";

function SuggestSignup() {
  return (
    <Card className="w-full p-3  ">
      <CardTitle className="text-xl">Please Sign Up</CardTitle>
      <Link href={"/"} className="w-full">
        <button className="w-full bg-sky-600 hover:bg-sky-700 rounded-full my-4 font-semibold px-5 py-2">
          Sign Up
        </button>
      </Link>

      <Link href={"/"} className="w-full  ">
        <h1 className="text-center hover:bg-slate-900 p-2 rounded-full">
          Login to existing account
        </h1>
      </Link>
    </Card>
  );
}

export default SuggestSignup;
