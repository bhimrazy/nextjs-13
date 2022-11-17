import Blog from "./Blog";
import Counter from "./Counter";
async function getData() {
  // const res = await fetch(
  //   "https://3000-bhimrazy-nextjs13-azeedfo3fe9.ws-us73.gitpod.io/api/"
  // );
  // return res.json();
  await new Promise((res) => setTimeout(res, 200));

  // You would usually return data from an API here.
  // return res.json();
  const blog_content = [
    {
      title: "Surface Pro 8 – The most powerful Pro - Microsoft",
      thumbnail: "https://images.unsplash.com/photo-1583418855863-858dc79c2d19",
      description:
        "Surface Pro 8 is designed to light up the best of Windows 11, enabling you to work, play, and create in ways most natural to you.",
    },
    {
      title: "The M2 MacBook Air Is the Ultimate Laptop Gift",
      thumbnail:
        "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/photo_1517336714731_489689fd1ca8_9.jpeg",
      description:
        "With a new camera, new colors and a bigger screen, the MacBook Air remains one of the most universally useful laptops you can get.",
    },
  ];
  return blog_content;
}

export default async function Components() {
  const data = await getData();
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <main className="flex min-h-screen flex-col place-content-center space-y-6">
        <section className="flex cursor-pointer flex-col space-y-4 rounded-md bg-white p-10 text-center shadow-sm transition hover:shadow-md">
          <h2 className=" text-xl text-cyan-600">
            Getting started with Server and Client Components.
          </h2>
          <Counter />
          {/* <Suspense fallback={<p>Loading feed...</p>}> */}
          <Blog data={data} />
          {/* </Suspense> */}
        </section>
      </main>
    </div>
  );
}
