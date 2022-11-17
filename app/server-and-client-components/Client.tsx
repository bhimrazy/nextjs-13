"use client";
import { useState } from "react";

export default function Client() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col text-center">
      <p className="text-blue-400">You clicked {count} times</p>
      <button
        className="rounded-md bg-gray-200 p-2"
        onClick={() => setCount(count + 1)}
      >
        Click me
      </button>
    </div>
  );
}
