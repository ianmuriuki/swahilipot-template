import React from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import SectionTitle from "@/components/Common/SectionTitle";

export const metadata = {
  title: "Mombasa Tourism Innovation Lab",
  description: "Inspiring the interest of opportunities in Mombasa.",
};

const MombasaTourismPage = () => {
  return (
    <>
      {/* Breadcrumb Section */}
      <Breadcrumb
        pageName="Mombasa Tourism"
        description="Inspiring the interest of opportunities in Mombasa."
      />

      {/* About Section */}
      <section className="relative z-10 overflow-hidden pt-28 lg:pt-[150px] pb-16 bg-blue-50 dark:bg-gray-900">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-6">
                About Mombasa Tourism Innovation
              </h2>
              <p className="text-base text-gray-700 dark:text-gray-300 mb-6">
                The Mombasa Innovation Lab, hosted at SwahiliPot Hub Foundation,
                seeks to inspire the interest of opportunity youth in Mombasa in
                culture and heritage tourism as a means of job creation. The
                logic of change is underpinned by this quote from the Cabinet
                Secretary for Tourism and Wildlife.
              </p>
              <p className="text-base text-gray-700 dark:text-gray-300">
                The lack of a structured way to innovate and scale new tourism
                products that appeal to the modern youthful traveler—who values
                experiences over material possessions—has led to a decline in
                tourist numbers. With support from the European Union, Camoes
                IP, Jumuia ya County Za Pwani, and the Go-Blue project, we aim
                to incubate innovative ideas in cultural and heritage tourism in
                Mombasa County.
              </p>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md">
              <img
                src="/images/about/mombasa.jpeg"
                alt="Mombasa Beach"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* ✅ Updated Objectives Section */}
          <div className="bg-blue-50 dark:bg-gray-800 text-gray-900 dark:text-white p-10 rounded-lg shadow-lg mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center text-primary dark:text-white">
              Our Objectives
            </h2>
            <ul className="space-y-6">
              {[
                "Create jobs for young people by developing new tourism products.",
                "Incubate grassroots tourism ideas in Mombasa County.",
                "Develop research and key data points to advance the tourism industry.",
                "Contribute to rejuvenating the coastal tourism product.",
              ].map((objective, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-3 text-lg font-medium"
                >
                  <span className="text-primary text-xl">✓</span>
                  <span>{objective}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Apply Section */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-2xl font-bold mb-6">Apply</h2>
            <p className="text-base text-gray-700 dark:text-gray-300 mb-8">
              We are receiving proposals from organizations and businesses in
              tourism, hospitality, and cultural heritage that can benefit from
              the pilot.
            </p>
            <a
              href="https://airtable.com/shru9sDInYXqHsL1g"
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-opacity-90 transition"
            >
              Make Application
            </a>
          </div>

          {/* Innovation Lab Section */}
          <div className="text-center mb-16">
            <SectionTitle
              title="Mombasa Tourism Innovation Lab"
              paragraph="The Mombasa Tourism Innovation Lab is a unique initiative aimed at
              revolutionizing the tourism sector in Mombasa through technology
              and innovation. We support startups and entrepreneurs developing
              solutions that enhance the tourism experience and boost the local
              economy."
              center
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-dark dark:text-white">
                What We Offer
              </h3>
              <ul className="list-disc list-inside space-y-4 text-body-color dark:text-gray-300">
                {[
                  "Capacity building programs for tourism startups.",
                  "Access to co-working spaces and modern facilities.",
                  "Mentorship from industry experts and professionals.",
                  "Opportunities for networking and partnerships.",
                  "Support in accessing funding and investment opportunities.",
                ].map((offer, index) => (
                  <li key={index}>{offer}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/images/about/mombasa.jpeg"
                alt="Mombasa Tourism Innovation Lab"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="text-center">
            <a
              href="#"
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-opacity-90 transition"
            >
              Join the Lab
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default MombasaTourismPage;
