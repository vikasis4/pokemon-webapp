"use client"

import { CiWarning } from "react-icons/ci";

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white">
      <div className="bg-white/20 backdrop-blur-sm p-8 flex flex-col justify-center items-center rounded-2xl shadow-lg max-w-lg text-center">
      <CiWarning className="text-6xl" />
        <h2 className="text-4xl text-pink-600/80 font-semibold mb-4">Something went wrong</h2>
        <p className="text-gray-300 text-lg mb-6">
          We couldn't load the page. Please check your connection or try again.
        </p>
      </div>
    </div>
  );
}
