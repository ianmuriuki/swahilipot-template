import React from 'react';

interface StatsProps {
  stats: {
    label: string;
    value: string;
  }[];
}

export default function Stats({ stats }: StatsProps) {
  return (
    <section className="py-16 bg-primary text-white dark:bg-gray-800">
      <div className="container-custom mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Community Impact</h2>
          <p className="text-lg max-w-3xl mx-auto">
            The Community Department plays a vital role in fostering collaboration, skill development, and social impact at Swahilipot Hub.
          </p>
          <h5 className="text-sm">(All metrics recorded are up to May 2024)</h5>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
