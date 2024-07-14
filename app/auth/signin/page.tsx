"use client";

import { signIn } from "next-auth/react";
import React from "react";
import { FaGoogle } from "react-icons/fa";

function page() {
  return (
    <div className="container mx-auto flex w-full h-screen justify-center items-center">
      <div className="p-5 bg-slate-900 w-80 rounded-lg flex flex-col gap-4">
        <h1 className="text-2xl font-semibold ">Signin with google</h1>
        <div
          onClick={() => signIn("google")}
          className="bg-sky-600 w-full p-2 rounded-md flex cursor-pointer hover:bg-sky-800 justify-center items-center"
        >
          <FaGoogle className="text-3xl" />
        </div>
      </div>
    </div>
  );
}

export default page;
