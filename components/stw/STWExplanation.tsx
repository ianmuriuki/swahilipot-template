import React from "react";

interface STWInfoProps {
  title: string;
  icon: string;
  description: string;
}

const stwInfo: STWInfoProps[] = [
  {
    title: "Our Mission",
    icon: "🎯",
    description:
      "To create an inclusive tech ecosystem where women have equal opportunities to learn, work, and lead in technology fields.",
  },
  {
    title: "Our Vision",
    icon: "👁️",
    description:
      "A world where women are equally represented and valued in technology, contributing their unique perspectives to innovation and problem-solving.",
  },
  {
    title: "Our Impact",
    icon: "💪",
    description:
      "Since our founding, we've trained over 500 women in tech skills, mentored 200+ women, and helped 100+ secure jobs in the tech industry.",
  },
];

export default function STWExplanation() {
  return (
    <section className="relative z-10 overflow-hidden pt-28 lg:pt-[150px] pb-20 bg-gray-light dark:bg-gray-800">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12 px-6">
          <h2 className="text-3xl font-bold mb-4">About Swahili Tech Women</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Swahili Tech Women (STW) is an initiative dedicated to increasing
            the participation and success of women in technology fields across
            East Africa. Through education, mentorship, networking, and
            advocacy, we aim to bridge the gender gap in tech.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stwInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <div className="text-4xl mb-4">{info.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{info.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {info.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
