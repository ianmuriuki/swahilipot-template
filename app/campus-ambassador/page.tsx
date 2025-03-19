import React from 'react';
import Breadcrumb from '@/components/Common/Breadcrumb';
import Image from 'next/image';

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const CampusAmbassadorPage = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <>
      <Breadcrumb
        pageName="Campus Ambassador Program"
        description="Connecting university students with SwahiliPot Hub to promote innovation and technology on campus."
      />

      {/* <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Campus Ambassador Program
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Connecting university students with SwahiliPot Hub to promote innovation and technology on campus.
            </p>
          </div>
        </div>
      </section> */}

      <section className="py-16 bg-blue-50 dark:bg-gray-800">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">About the Campus Ambassador Program</h2>
              <List text="Creates a network of student representatives who promote SwahiliPot Hub's mission and activities on university campuses." />
              <List text="Ambassadors organize events, share resources, and build communities of innovation and creativity." />
              <List text="Develops leadership and professional skills among ambassadors." />
            </div>

            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/campus/Campus.png"
                alt="Campus Ambassador Program"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Ambassador Responsibilities</h2>
            <div className="space-y-6">
              <List text="Oversees the implementation of the campus ambassador program." />
              <List text="Offers support to members in navigating their career journey." />
              <List text="Establishes and maintains relationships with university faculty and student organizations." />
              <List text="Plans and organizes events and workshops related to technology and innovation." />
              <List text="Serves as a representative and advocate for the campus ambassador program." />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/campus/Ayubu.webp"
                alt="Benefits for Campus Ambassadors"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Benefits for Ambassadors</h2>
              <div className="space-y-4">
                <List text="Gain exclusive access to SwahiliPot Hub's latest events and programs." />
                <List text="Develop valuable technical and soft skills for professional success." />
                <List text="Expand your network and forge relationships with fellow student leaders." />
                <List text="Receive special invitations to exclusive events and training opportunities." />
                <List text="Enhance your resume with the prestigious Campus Ambassador Program experience." />
                <List text="Earn certificates showcasing your participation in the program." />
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Become a Campus Ambassador</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-8">
              If you're a university student passionate about technology, innovation, arts, or entrepreneurship, we invite you to apply to become a SwahiliPot Hub Campus Ambassador.
            </p>

            <div className="bg-orange-50 dark:bg-gray-700 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Eligibility Criteria</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Currently enrolled in a University or College program within the target school.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Second-year student or above in any department.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Genuine enthusiasm for the University or organization, eager to share experiences and promote campus life.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Demonstrated initiative, responsibility, and capacity to inspire and guide others.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-gray-700 dark:text-gray-300">Either currently pursuing an IT-related course or demonstrating a strong passion for technology.</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">Application Process</h3>
              <ol className="space-y-2 mb-6 list-decimal pl-5">
                <li className="text-gray-700 dark:text-gray-300">
                  Complete the online application form
                </li>
                <li className="text-gray-700 dark:text-gray-300">
                  Participate in a virtual interview
                </li>
                <li className="text-gray-700 dark:text-gray-300">
                  Attend the ambassador orientation and training
                </li>
                <li className="text-gray-700 dark:text-gray-300">
                  Begin your journey as a SwahiliPot Hub Campus Ambassador
                </li>
              </ol>

              <div className="text-center">
                <a href="/joinus" className="btn px-8 py-3 bg-primary text-white hover:bg-primary-dark rounded-md">
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CampusAmbassadorPage;
