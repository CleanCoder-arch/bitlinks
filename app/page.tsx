import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  return (
    <main className="bg-linear-to-br from-purple-100 to-purple-200 min-h-screen overflow-y-auto scroll-smooth">

      {/* FIXED NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-16 flex items-center justify-between">
          <h1 className="flex items-center gap-2 text-xl sm:text-2xl font-bold text-purple-700">
            <Image
              src="/logobitlinks.png"
              alt="Bitlinks Logo"
              width={32}
              height={32}
              className="object-contain opacity-0.2"
            />
            BitLinks
          </h1>

          <div className="hidden md:flex gap-6 text-gray-700 font-medium">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div className="flex gap-2 sm:gap-4">
            <Link href="/shorten">
              <button className="bg-purple-600 hover:bg-purple-700 transition-all duration-300 rounded-xl shadow-lg px-4 sm:px-6 py-2 text-sm sm:text-base font-semibold text-white">
                Try Now
              </button>
            </Link>

            <Link href="/github">
              <button className="hidden sm:block bg-white border border-purple-600 text-purple-700 hover:bg-purple-50 transition-all duration-300 rounded-xl shadow-md px-4 sm:px-6 py-2 text-sm sm:text-base font-semibold">
                Github
              </button>
            </Link>
          </div>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-24 gap-12">
        <div className="flex flex-col gap-6 items-start justify-center">
          <p
            className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold text-purple-800 leading-tight ${poppins.className}`}
          >
            The best URL shortner in the market
          </p>

          <p className="text-gray-700 max-w-xl leading-relaxed text-sm sm:text-base">
            We are the most straightforward URL shortner in the world. Most URL
            shortners track users or require personal details. Bitlinks keeps
            everything simple, private, and fast.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/shorten">
              <button className="bg-purple-600 hover:bg-purple-700 transition-all duration-300 rounded-xl shadow-lg px-6 py-2 font-semibold text-white">
                Try Now
              </button>
            </Link>

            <Link href="/shorten">
              <button className="bg-white border border-purple-600 text-purple-700 hover:bg-purple-50 transition-all duration-300 rounded-xl shadow-md px-6 py-2 font-semibold">
                Explore
              </button>
            </Link>
          </div>
        </div>

        <div className="hidden lg:flex justify-center items-center relative">
          <Image
            className="mix-blend-darken object-contain rounded-3xl transition-transform duration-700 hover:scale-105"
            alt="An Image of a dove"
            src={"/dove.png"}
            fill
            priority
          />
        </div>
      </section>

      {/* SCROLL CONTENT */}
      <section className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-purple-700 mb-2">Fast</h3>
            <p className="text-gray-600">
              Create short links instantly with lightning-fast performance.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-purple-700 mb-2">Private</h3>
            <p className="text-gray-600">
              No tracking, no login, no unnecessary data collection.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-purple-700 mb-2">Reliable</h3>
            <p className="text-gray-600">
              Built with modern tech to scale effortlessly.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
