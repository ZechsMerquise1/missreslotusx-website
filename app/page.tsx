import Hero from "./components/hero";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* <Navbar />  // if you have one */}
      <main className="pt-16">
        <Hero />
        {/* other sections will go here later */}
      </main>
    </div>
  );
}
