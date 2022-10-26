import Image from "next/image";

export default function page() {
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
  return (
    <div className="flex flex-col h-full w-full items-center justify-center">
      <main className="flex flex-col min-h-screen place-content-center w-full max-w-3xl">
        <section className="flex flex-col gap-6">
          {blog_content &&
            blog_content.map((blog, i) => (
              <article
                key={i}
                className="grid grid-cols-1 lg:grid-cols-3 bg-white rounded-md space-y-4 p-6 shadow-sm hover:shadow-md transition cursor-pointer"
              >
                <div className="h-40 w-40 bg-slate-200 rounded-md overflow-hidden">
                  <img
                    src={blog?.thumbnail}
                    alt={blog?.title}
                    className="h-full w-full"
                    loading="eager"
                    // fill={true}
                    // width={500}
                    // height={500}
                    // blurDataURL={blog?.thumbnail}
                    // placeholder="blur"
                  />
                </div>
                <div className="lg:col-span-2 space-y-2">
                  <h1 className="text-xl font-bold">{blog?.title}</h1>
                  <p className="text-gray-600 text-normal">
                    {blog?.description}
                  </p>
                </div>
              </article>
            ))}
        </section>
      </main>
    </div>
  );
}
