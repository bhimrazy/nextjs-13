import Image from "next/image";

export default function Blog({ data }: any) {
  return (
    <div className="flex max-w-3xl flex-col place-content-center">
      <ul className="flex flex-col gap-6">
        {data &&
          data.map((blog: any, i: any) => (
            <li key={i}>
              <article
                key={i}
                className="grid cursor-pointer grid-cols-1 space-y-4 rounded-md bg-white p-6 shadow-sm transition hover:shadow-md lg:grid-cols-3"
              >
                <div className="relative h-40 w-40 overflow-hidden rounded-md bg-slate-200">
                  <Image
                    src="https://bhimraj.com.np/bhimraj_yadav.jpg"
                    alt={blog?.title}
                    className=" object-contain "
                    fill
                    // width={500}
                    // height={500}
                    blurDataURL={blog?.thumbnail}
                    placeholder="blur"
                  />
                </div>
                <div className="space-y-2 lg:col-span-2">
                  <h1 className="text-xl font-bold">{blog?.title}</h1>
                  <p className="text-normal text-gray-600">
                    {blog?.description}
                  </p>
                </div>
              </article>
            </li>
          ))}
      </ul>
    </div>
  );
}
