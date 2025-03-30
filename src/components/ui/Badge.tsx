"use client";

import { useEffect, useState } from "react";

const colors = [
  "bg-red-700/50",
  "bg-blue-700/50",
  "bg-green-700/50",
  "bg-purple-700/50",
  "bg-orange-700/50",
];

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

interface BadgeProps {
  label: string;
  count?: number;
}

const Badge = ({ label, count = 0 }: BadgeProps) => {
  const [bgColor, setBgColor] = useState("bg-gray-500");

  useEffect(() => {
    setBgColor(getRandomColor());
  }, []);

  return (
    <div
      className={`relative px-3 py-1 text-white ${bgColor} rounded-md text-sm shadow shadow-white/20 border border-white/20 font-bold inline-block`}
    >
      <p className="truncate text-xs">{label}</p>
      {count > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white border border-white/40 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
          {count}
        </span>
      )}
    </div>
  );
};

export default Badge;
