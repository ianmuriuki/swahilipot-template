import Link from 'next/link';
import Image from 'next/image';

export default function Swahilipotfm() {
  return (
    <section className="py-12 bg-orange-50 dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="container-custom mx-auto px-6 flex justify-center w-full h-[350px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-[1600px] h-full">
          
          {/* Left Section with Background Color */}
          <div className="shadow-lg dark:bg-gray-800 dark:shadow-xl dark:hover:shadow-2xl relative z-10 rounded-xl bg-white p-6 hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105 w-full h-full flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">SwahiliPot FM</h2>
            <p className="text-base mb-4 text-gray-700 dark:text-gray-300">
              Our community radio station gives voice to local stories, music, and discussions. Tune in to hear the sounds and conversations shaping our community.
            </p>
            <p className="text-base mb-6 text-gray-700 dark:text-gray-300">
              SwahiliPot FM is run by youth from our community, providing them with media skills while creating content that matters to our audience.
            </p>
            <Link href="/swahilipotfm" className="flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-lg w-20">
              Listen
            </Link>
          </div>

          {/* Right Section with the Image */}
          <div className="rounded-lg overflow-hidden shadow-lg w-full h-full">
            <Image
              src="/images/fm/fm.png"
              alt="SwahiliPot FM"
              width={1600}
              height={350}
              className="w-full h-full object-cover rounded-lg"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
