import { useRouter } from "next/router";
import React from "react";

const ComingSoon = () => {
  const router = useRouter();
  return (
    <div className="w-full h-screen bg-inherit flex flex-col items-center justify-center space-4">
      <h1 className="text-center capitalize text-3xl font-bold text-white/70">
        Page Coming soon
      </h1>
      <button
        onClick={() => router.push("/")}
        className="my-6 px-6 py-2.5 text-white bg-amber-500 hover:bg-amber-600 font-bold rounded-full text-xl "
      >
        Go Home
      </button>
    </div>
  );
};

export default ComingSoon;
