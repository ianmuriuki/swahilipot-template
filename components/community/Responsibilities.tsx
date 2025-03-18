interface Responsibilities {
    title: string;
    description: string;
    responsibilities: string[];
  }
  
  interface ResponsibilitiesProps {
    responsibilities: Responsibilities[];
  }
  
  export default function Responsibilities({ responsibilities }: ResponsibilitiesProps) {
    const bgClasses = ["bg-blue-50", "bg-orange-50", "bg-yellow-50"];
  
    return (
      <section className="py-16 bg-light dark:bg-gray-900">
        <div className="container-custom mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">The Community Department Responsibilities</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore the various responsibilities within our Community Department and the key duties for each position.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {responsibilities.map((responsibility, index) => (
              <div
                key={index}
                className={`${bgClasses[index % 3]} dark:bg-gray-700 rounded-lg shadow-md p-6 mx-auto w-full max-w-[380px]`}
              >
                <h3 className="text-lg font-semibold mb-3">{responsibility.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{responsibility.description}</p>
  
                <h6 className="font-medium mb-2">Responsibilities:</h6>
                <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                  {responsibility.responsibilities.map((res, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <span className="text-primary mr-2">•</span>
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  