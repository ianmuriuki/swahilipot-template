export default function Mission() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Our Mission
            </h2>
            <p className="text-base text-gray-700 dark:text-gray-300 mb-4">
              Our mission is to empower young people by providing access to technology, resources, and a collaborative space where they can innovate, learn, and grow.
            </p>
            <p className="text-base text-gray-700 dark:text-gray-300">
              Through mentorship, training, and community-driven initiatives, we strive to bridge the digital divide and create a sustainable impact in the region.
            </p>
          </div>

          {/* Mission images */}
          <div className="w-full">
            <img
              src="/images/about/mission.png"
              alt="Swahilipot Mission Light"
              className="w-full h-auto rounded-md dark:hidden"
            />
            <img
              src="/images/about/mission.png"
              alt="Swahilipot Mission Dark"
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
               Our Documentary
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
