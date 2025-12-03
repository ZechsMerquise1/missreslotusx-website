import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <img
        src="/photos/hero.jpg"
        alt="Hero background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Centered content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white">
          Creating Visual Stories
        </h1>

        <p className="mt-4 max-w-2xl text-sm sm:text-base md:text-lg text-white/80">
          Model &amp; Content Creator specializing in fashion, lifestyle, and editorial photography
        </p>

        <div className="mt-8 flex gap-4">
          <Button variant="primary" className="px-7 py-3">
            Book a Session
          </Button>

          <Button variant="secondary" className="px-7 py-3">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
