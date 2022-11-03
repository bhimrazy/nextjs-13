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
    <div className="flex h-full w-full flex-col items-center justify-center">
      <main className="flex min-h-screen w-full max-w-3xl flex-col place-content-center">
        <section className="flex flex-col gap-6">
          {blog_content &&
            blog_content.map((blog, i) => (
              <article
                key={i}
                className="grid cursor-pointer grid-cols-1 space-y-4 rounded-md bg-white p-6 shadow-sm transition hover:shadow-md lg:grid-cols-3"
              >
                <div className="relative h-40 w-40 overflow-hidden rounded-md bg-slate-200">
                  <Image
                    src={blog?.thumbnail}
                    alt={blog?.title}
                    className=" object-cover "
                    blurDataURL={blog?.thumbnail}
                    placeholder="blur"
                    fill
                  />
                </div>
                <div className="space-y-2 lg:col-span-2">
                  <h1 className="text-xl font-bold">{blog?.title}</h1>
                  <p className="text-normal text-gray-600">
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
