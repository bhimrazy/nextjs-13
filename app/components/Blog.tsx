import Image from "next/image";

export default function Blog({ data }: any) {
  return (
    <div className="flex max-w-3xl flex-col">
      <section className="flex flex-col gap-6">
        {data &&
          data.map((blog: any, i: any) => (
            <article
              key={i}
              className="grid cursor-pointer grid-cols-1 items-start gap-4 rounded-md bg-white p-6 shadow-sm transition hover:shadow-md lg:grid-cols-3"
            >
              <div className="relative aspect-video overflow-hidden  rounded-md bg-slate-200">
                <Image
                  src={blog?.thumbnail}
                  alt={blog?.title}
                  className=" object-cover "
                  blurDataURL={blog?.thumbnail}
                  placeholder="blur"
                  fill
                />
              </div>
              <div className="flex flex-col text-left lg:col-span-2">
                <h1 className="text-xl font-bold">{blog?.title}</h1>
                <p className="text-normal text-gray-600">{blog?.description}</p>
              </div>
            </article>
          ))}
      </section>
    </div>
  );
}
