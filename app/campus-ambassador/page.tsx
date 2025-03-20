import React from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Image from "next/image";
import Link from "next/link";

const CampusAmbassadorPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Campus Ambassador Program"
        description="Connecting university students with SwahiliPot Hub to promote innovation and technology on campus."
      />

      <section className="py-16 bg-gray-light dark:bg-gray-900">
        <div className="container mx-auto">
          {/* Section 1: About */}
          <div className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow md:flex mb-12">
            <div className="md:w-1/3">
              <Image
                src="/images/campus/Campus.png"
                alt="Campus Ambassador Program"
                width={600}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 md:w-2/3">
              <div className="text-sm text-primary font-medium mb-1">Campus Ambassador Program</div>
              <h2 className="text-2xl font-semibold mb-3">What is the Campus Ambassador Program?</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A network of student representatives who promote SwahiliPot Hub’s mission and activities on university campuses.
                Ambassadors organize events, share resources, and build communities of innovation and creativity.
              </p>
            </div>
          </div>

          {/* Section 2: Responsibilities */}
          <div className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow md:flex mb-12">
            <div className="p-6 md:w-2/3">
              <div className="text-sm text-primary font-medium mb-1">Responsibilities</div>
              <h2 className="text-2xl font-semibold mb-3">What do Ambassadors do?</h2>
              <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
                <li className="mb-2">Oversee the implementation of the campus ambassador program.</li>
                <li className="mb-2">Offer support to students in navigating their career journey.</li>
                <li className="mb-2">Organize events and workshops related to technology and innovation.</li>
                <li className="mb-2">Serve as a representative and advocate for the SwahiliPot Hub community.</li>
                <li>Establishes and mantains relationships with university faculty , administration and students organizations through SPH club.</li>
              </ul>
            </div>
            <div className="md:w-1/3">
              <Image
                src="/images/campus/Ayubu.webp"
                alt="Ambassador Responsibilities"
                width={600}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Section 3: Benefits */}
          <div className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow md:flex mb-12">
            <div className="md:w-1/3">
              <Image
                src="/images/campus/benefits_ambassador.jpg"
                alt="Benefits for Campus Ambassadors"
                width={600}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 md:w-2/3">
              <div className="text-sm text-primary font-medium mb-1">Benefits</div>
              <h2 className="text-2xl font-semibold mb-3">Why become a Campus Ambassador?</h2>
              <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
                <li className="mb-2">Exclusive access to SwahiliPot Hub’s events and programs.</li>
                <li className="mb-2">Develop leadership and technical skills for your career.</li>
                <li className="mb-2">Network with industry professionals and fellow student leaders.</li>
                <li className="mb-2">Receive a certificate of participation and special event invitations.</li>
              </ul>
            </div>
          </div>

          {/* Section 4: How to Apply */}
          <div className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow p-8 text-center">
            <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">Become a Campus Ambassador</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Are you a university student passionate about technology, innovation, or entrepreneurship?
              Apply now to become a SwahiliPot Hub Campus Ambassador and start making an impact on your campus!
            </p>

            <Link
              href="/joinus"
              className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition"
            >
              Apply Now →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CampusAmbassadorPage;
