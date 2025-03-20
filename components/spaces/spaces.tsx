import Link from "next/link";

const Spaces = () => {
  return (
    <section className="py-16 bg-orange-50 dark:bg-gray-900">
      <div className="container-custom mx-auto px-6">
        <div className="section-title text-center mb-16">
          <span className="sub-content wow fadeInUp">
            <img src="assets/img/bale.png" alt="img" />
            Spaces Gallery
          </span>
          <h2 className="wow fadeInUp text-3xl font-bold text-black dark:text-white" data-wow-delay=".3s">
            Explore Featured Spaces
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* First space */}
          <div className="w-full wow fadeInUp shadow-lg dark:bg-gray-800 dark:shadow-xl dark:hover:shadow-2xl relative z-10 rounded-xl bg-white px-6 py-8 hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105" data-wow-delay=".3s">
            <div className="project-image mb-4">
              <img src="/images/about/casemanagement.png" alt="img" className="w-full rounded-lg" />
            </div>
            <div className="project-content">
              <p className="text-lg text-gray-900 dark:text-white">Mwana Kupona</p>
              <h3 className="text-xl font-semibold text-black dark:text-white">
                <Link href="project-details">
                  Swahilipot Hub <br />
                  Mwana Kupona Space
                </Link>
              </h3>
            </div>
          </div>

          {/* Second space */}
          <div className="w-full wow fadeInUp shadow-lg dark:bg-gray-800 dark:shadow-xl dark:hover:shadow-2xl relative z-10 rounded-xl bg-white px-6 py-8 hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105" data-wow-delay=".5s">
            <div className="project-image mb-4">
              <img src="assets/img/spaces/comm.jpg" alt="img" className="w-full rounded-lg" />
            </div>
            <div className="project-content">
              <p className="text-lg text-gray-900 dark:text-white">Community Space</p>
              <h3 className="text-xl font-semibold text-black dark:text-white">
                <Link href="project-details">
                  Swahilipot HUB <br />
                  Community Space
                </Link>
              </h3>
            </div>
          </div>

          {/* Third space */}
          <div className="w-full wow fadeInUp shadow-lg dark:bg-gray-800 dark:shadow-xl dark:hover:shadow-2xl relative z-10 rounded-xl bg-white px-6 py-8 hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105" data-wow-delay=".3s">
            <div className="project-image mb-4">
              <img src="assets/img/spaces/Mekatilili.webp" alt="img" className="w-full rounded-lg" />
            </div>
            <div className="project-content">
              <p className="text-lg text-gray-900 dark:text-white">Mekatilili</p>
              <h3 className="text-xl font-semibold text-black dark:text-white">
                <Link href="project-details">
                  Swahilipot HUB <br />
                  Mekatilili Space
                </Link>
              </h3>
            </div>
          </div>

          {/* Fourth space */}
          <div className="w-full wow fadeInUp shadow-lg dark:bg-gray-800 dark:shadow-xl dark:hover:shadow-2xl relative z-10 rounded-xl bg-white px-6 py-8 hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105" data-wow-delay=".5s">
            <div className="project-image mb-4">
              <img src="/assets/img/spaces/ali.webp" alt="img" className="w-full rounded-lg" />
            </div>
            <div className="project-content">
              <p className="text-lg text-gray-900 dark:text-white">Ali Mazurui Space</p>
              <h3 className="text-xl font-semibold text-black dark:text-white">
                <Link href="project-details">
                  Swahilipot HUB <br />
                  Ali Mazurui Space
                </Link>
              </h3>
            </div>
          </div>

          {/* Fifth space */}
          <div className="w-full wow fadeInUp shadow-lg dark:bg-gray-800 dark:shadow-xl dark:hover:shadow-2xl relative z-10 rounded-xl bg-white px-6 py-8 hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105" data-wow-delay=".3s">
            <div className="project-image mb-4">
              <img src="assets/img/spaces/Amp.webp" alt="img" className="w-full rounded-lg" />
            </div>
            <div className="project-content">
              <p className="text-lg text-gray-900 dark:text-white">Amphitheatre Space</p>
              <h3 className="text-xl font-semibold text-black dark:text-white">
                <Link href="project-details">
                  Swahilipot HUB <br />
                  Amphitheatre Space
                </Link>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spaces;
