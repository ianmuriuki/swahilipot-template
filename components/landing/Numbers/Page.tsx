export default function Numbers() {
    const stats = [
      { number: "4,000+", label: "Community Members" },
      { number: "25", label: "Programs and Activities" },
      { number: "65%", label: "of our members are Youths" }
    ];
  
    return (
      <section className="py-16 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <div className="container-custom mx-auto px-6 flex flex-col items-center justify-center">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Swahilipot Hub in Numbers
            </h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
              Since our inception, we've made significant strides in empowering youth across East Africa.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-xl text-gray-800 dark:text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  