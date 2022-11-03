import Blog from "./Blog";
import Counter from "./Counter";

export default async function Components() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <main className="flex min-h-screen flex-col place-content-center space-y-6">
        <section className="flex cursor-pointer flex-col space-y-4 rounded-md bg-white p-10 text-center shadow-sm transition hover:shadow-md">
          <h2 className=" text-xl text-cyan-600">
            Getting started with Server and Client Components.
          </h2>
          <Counter />
          {/* <Suspense fallback={<p>Loading feed...</p>}> */}
          <Blog />
          {/* </Suspense> */}
        </section>
      </main>
    </div>
  );
}
