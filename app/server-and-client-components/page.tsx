import React from "react";
import Client from "./Client";
import Server from "./Server";

export async function getData() {
  await new Promise((res) => setTimeout(res, 1000));
  const data = {
    title: "Server and Client components",
  };
  return data;
}

export default async function ServerAndClient() {
  const data = await getData();
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-gray-100 ">
      <h1 className="text-3xl font-bold">Server and Client Components</h1>

      <div className="flex w-full max-w-3xl flex-col space-y-8 rounded-lg bg-white p-4 shadow">
        <Client />
        <Server data={data} />
      </div>
    </div>
  );
}
