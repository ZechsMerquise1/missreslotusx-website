// app/page.tsx
import Navbar from "./components/ui/navbar";
import Hero from "./components/hero";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Sticky Navbar */}
      <Navbar />

      {/* Push content down so it doesn't hide behind navbar */}
      <main className="pt-20">
        <Hero />
      </main>
    </div>
  );
}
