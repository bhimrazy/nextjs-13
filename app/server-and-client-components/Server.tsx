import React from "react";

export async function getData() {
  await new Promise((res) => setTimeout(res, 100));
  const data = {
    descritpion: "this is description",
  };
  return data;
}

export default function Server({ data }: any) {
  return (
    <div className="flex flex-col rounded bg-slate-100 text-center">
      <h2>Server</h2>
      {data && (
        <div>
          <h3>Title: {data?.title}</h3>
        </div>
      )}
      <p>Some extra data</p>
    </div>
  );
}
