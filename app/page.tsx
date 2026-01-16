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
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className={`text-3xl font-bold ${poppins.className}`}>

            The best URL shortner in the market
          </p>
          <p className="px-56 text-center">
            We are the most straightforward URL shortner in the world. Most of the URL shortners will track you or ask you to give your details for login. We understand your needs and hence have created this URL Shortner
          </p>
          <div className='flex gap-3 justify-start'>
            <Link href="/shorten"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white'>Try Now</button></Link>
            <Link href="/github"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white'>Github</button></Link>
          </div>


        </div>
        <div className="flex justify-start relative">
          <Image className="mix-blend-darken
          object-cover rounded-3xl transition-transform duration-600 hover:scale-105" alt="An Image of a dove" src={"/dove.png"} fill={true} />
        </div>

      </section>
    </main>
  );
}
