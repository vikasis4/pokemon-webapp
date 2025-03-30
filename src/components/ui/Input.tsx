"use client";
import { useDebounce } from "@/hooks/useDebounce";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

type inputType = {
  label: string;
  type?: string;
  text?: string;
  setText?: (text: string) => void;
};
export default function Input({ type = "text", label }: inputType) {
  const [text, setText] = React.useState("");

  const searchParams = useSearchParams();
  const router = useRouter();

  const debouncedValue = useDebounce(text, 200);

  React.useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("query", encodeURIComponent(debouncedValue.toString()));
    router.replace(`?${params.toString()}`, { scroll: false });
  }, [debouncedValue]);

  return (
    <input
      id="input"
      type={type}
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder={label}
      className="w-[90%] md:w-1/2 text-lg my-4 px-4 py-2 border border-gray-600 bg-gray-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
    />
  );
}
