import { useRouter } from "next/router";
import React from "react";

const ErrorComponent = () => {
  const router = useRouter();
  const HandleBack = () => {
    router.replace("/");
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen text-white text-4xl ">
      <h1>Oops, There is an Error....</h1>
      <button
        onClick={HandleBack}
        className="mt-10 bg-[#141414] border-[#262626] border px-3 py-2 text-white cursor-pointer rounded-md hover:bg-[#262626] hover:border-white hover:text-white transition duration-300"
      >
        Back To Home
      </button>
    </div>
  );
};

export default ErrorComponent;
