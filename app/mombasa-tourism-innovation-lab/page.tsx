// app/mombasa-tourism-innovation-lab/page.tsx

import React from "react";
import SectionTitle from "@/components/Common/SectionTitle";
import Breadcrumb from "@/components/Common/Breadcrumb";

export const metadata = {
  title: "Mombasa Tourism - Explore the Coast",
  description: "Discover the beauty, culture, and adventure that await you in Mombasa, Kenya's coastal paradise.",
};

const MombasaTourismPage = () => {
  return (
    <>
     <Breadcrumb
        pageName="Mombasa Tourism"
  description="Inspiring the intrest of opportunities in Mombasa."
        />

      {/* About Section */}
      <section className="py-16 bg-blue-50 dark:bg-gray-800">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Mombasa Tourism Innovation</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                The Mombasa innovation lab, hosted at Swahilipot Hub Foundation, seeks to inspire the interest of opportunity youth in Mombasa in culture and heritage tourism as a means of Job creation. The logic of change is underpinned by this quote from the Cabinet secretary Tourism and Wildlife.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                The inexistence of a structured way to innovate and scale new tourism products that entice the modern youthful traveller, who is more interested in the experience and less on the physical possessions, has led to reduction of touristic numbers. With support from the European Union, Camoes IP, Jumuia ya county Za Pwani, and the Go-Blue project to incubate innovative ideas in cultural and heritage tourism in Mombasa county.
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

          {/* Objectives Section */}
          <div className="bg-orange-50 text-gray-900 p-8 rounded-lg mb-16 dark:bg-gray-800 dark:text-white">
            <div className="flex justify-center items-center text-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Objectives</h2>
                <ul className="space-y-2">
                  <li>
                    <span className="mr-2">✓</span>
                    <span>Create jobs for young people by developing new tourism products that are yet to be developed.</span>
                  </li>
                  <li>
                    <span className="mr-2">✓</span>
                    <span>Become a vehicle to incubate grassroots tourism ideas in Mombasa county.</span>
                  </li>
                  <li>
                    <span className="mr-2">✓</span>
                    <span>Develop research and key data points for advancement of the Tourism Industry.</span>
                  </li>
                  <li>
                    <span className="mr-2">✓</span>
                    <span>Contribute in rejuvenating the coastal tourism product.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Apply Section */}
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Apply</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              We are receiving proposals from organizations and businesses in tourism, hospitality, and cultural heritage that can benefit from the pilot.
            </p>

            <a 
              href="https://airtable.com/shru9sDInYXqHsL1g" 
              className="inline-block bg-primary text-white px-8 py-3 rounded-md hover:bg-primary-dark transition"
            >
              Make Application
            </a>
          </div>
        </div>
      </section>

      {/* Innovation Lab Section */}
      <section className="py-16 bg-light dark:bg-gray-800">
        <div className="container-custom mx-auto px-4">
          <SectionTitle
            title="Mombasa Tourism Innovation Lab"
            paragraph="The Mombasa Tourism Innovation Lab is a unique initiative aimed at revolutionizing the tourism sector in Mombasa through technology and innovation. We support startups and entrepreneurs developing solutions that enhance the tourism experience and boost the local economy."
            center
            mb="12px"
          />

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="wow fadeInUp" data-wow-delay=".1s">
              <h3 className="text-xl font-semibold mb-4 text-dark dark:text-white">
                What We Offer
              </h3>
              <ul className="list-disc list-inside space-y-4 text-body-color dark:text-gray-300">
                <li>Capacity building programs for tourism startups.</li>
                <li>Access to co-working spaces and modern facilities.</li>
                <li>Mentorship from industry experts and professionals.</li>
                <li>Opportunities for networking and partnerships.</li>
                <li>Support in accessing funding and investment opportunities.</li>
              </ul>
            </div>

            <div className="wow fadeInUp relative" data-wow-delay=".2s">
              <img
                src="/images/about/mombasa.jpeg"
                alt="Mombasa Tourism Innovation Lab"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="#"
              className="inline-block bg-primary text-white px-8 py-3 rounded-md hover:bg-primary-dark transition"
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
