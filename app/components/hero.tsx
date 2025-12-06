// components/hero.tsx
import Image from "next/image";
import { Calendar } from "lucide-react";
import Button from "./ui/button";

export default function Hero() {
  return (
    <section className="relative flex h-screen w-full items-start justify-center overflow-hidden pt-32">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/photos/hero.jpg"
          alt="MistressLotusX hero"
          fill
          priority
          className="object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Centered content */}
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-4 text-center">
        <h1 className="mb-4">
          THIS IS THE TEST ENVIRONMENT AGAIN 3
        </h1>

        <p className="mb-8 max-w-2xl">
          Model &amp; content creator specializing in fashion, lifestyle, and
          editorial photography.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button className="bg-transparent border-white/40 hover:bg-white/10">
            Book Session
          </Button>

          <Button variant="secondary">
            View Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
}
