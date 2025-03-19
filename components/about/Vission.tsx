export default function Vission() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Vision images now on the LEFT side */}
          <div className="w-full">
            <img
              src="/images/about/vission.png"
              alt="Swahilipot Vision Light"
              className="w-full h-auto rounded-md dark:hidden"
            />
            <img
              src="/images/about/vission.png"
              alt="Swahilipot Vision Dark"
              className="w-full h-auto rounded-md hidden dark:block"
            />

            {/* Button placed BELOW the images */}
            <div className="mt-4 flex justify-center">
              <a
                href="https://www.youtube.com/watch?v=bscypssE8Ms"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition duration-300 text-xs text-center"
              >
                Watch Our Documentary
              </a>
            </div>
          </div>

          {/* Content now on the RIGHT side */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Our Vision
            </h2>
            <p className="text-base text-gray-700 dark:text-gray-300 mb-4">
              We envision an East Africa where youth are at the forefront of technological innovation and cultural expression, creating solutions to local challenges and contributing to the global digital economy.
            </p>
            <p className="text-base text-gray-700 dark:text-gray-300">
              SwahiliPot Hub aims to be the leading hub for technology and arts in the region, known for nurturing talent, fostering innovation, and preserving cultural heritage through digital means.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
