import Header from "./Header";
import Hero from "./Hero";

export default function TspPilot() {
  return (
    <div className="flex flex-col">
      <Header />

      <main className="flex flex-col">
        <Hero />
      </main>
    </div>
  );
}
