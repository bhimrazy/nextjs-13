import Cards from "./Cards";
import Header from "./Header";
import Hero from "./Hero";
import Tsp from "./Tsp";

export default function TspPilot() {
  return (
    <div className="flex flex-col">
      <Header />

      <main className="flex flex-col">
        <Hero />
        <Tsp />
        <Cards/>
      </main>
    </div>
  );
}
