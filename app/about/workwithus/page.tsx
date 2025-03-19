import React from 'react';
import RoleDescription from '@/components/about/workwithus/RoleDescription';
import Breadcrumb from '@/components/Common/Breadcrumb';

export default function WorkWithUsPage() {
  const roles = [
    {
      title: "Software Developer",
      department: "Engineering",
      location: "Mombasa, Kenya",
      type: "Full-time",
      description: "We're looking for a talented software developer to join our engineering team. In this role, you'll work on developing and maintaining web and mobile applications that support SwahiliPot Hub's initiatives and community needs.",
      responsibilities: [
        "Design, develop, and maintain web and mobile applications",
        "Collaborate with cross-functional teams to define, design, and ship new features",
        "Ensure the performance, quality, and responsiveness of applications",
        "Identify and correct bottlenecks and fix bugs",
        "Help maintain code quality, organization, and automatization"
      ],
      qualifications: [
        "Bachelor's degree in Computer Science or related field (or equivalent experience)",
        "2+ years of experience in software development",
        "Proficiency in JavaScript/TypeScript and at least one modern framework (React, Vue, Angular)",
        "Experience with backend development (Node.js, Python, etc.)",
        "Knowledge of database systems and API design",
        "Strong problem-solving skills and attention to detail"
      ],
      applicationLink: "/about/workwithus"
    },
    {
      title: "Community Engagement Coordinator",
      department: "Community",
      location: "Mombasa, Kenya",
      type: "Full-time",
      description: "We're seeking a Community Engagement Coordinator to help build and nurture relationships with our members, partners, and the wider community. This role is crucial in creating a supportive ecosystem for innovation and creativity.",
      responsibilities: [
        "Develop and implement community engagement strategies",
        "Organize and facilitate community events and activities",
        "Build and maintain relationships with community partners",
        "Recruit, train, and coordinate volunteers",
        "Collect and analyze community feedback to improve programs",
        "Create content for community communications"
      ],
      qualifications: [
        "Bachelor's degree in Communications, Community Development, or related field",
        "2+ years of experience in community engagement or similar role",
        "Excellent communication and interpersonal skills",
        "Experience in event planning and volunteer management",
        "Strong organizational and project management skills",
        "Passion for community development and youth empowerment"
      ],
      applicationLink: "/about/workwithus"
    },
    {
      title: "Arts & Culture Program Assistant",
      department: "Arts & Culture",
      location: "Mombasa, Kenya",
      type: "Part-time",
      description: "Join our Arts & Culture department as a Program Assistant to help develop and implement creative programs and cultural initiatives. This role supports our mission to celebrate and promote local arts and cultural heritage.",
      responsibilities: [
        "Assist in planning and executing arts and cultural events",
        "Support the development of creative workshops and programs",
        "Help coordinate with artists, performers, and cultural practitioners",
        "Maintain program documentation and records",
        "Assist with program evaluation and reporting",
        "Support communications related to arts and culture programs"
      ],
      qualifications: [
        "Background in arts, culture, or related field",
        "Experience in program coordination or event planning",
        "Knowledge of East African arts and cultural practices",
        "Strong organizational and communication skills",
        "Ability to work collaboratively in a team environment",
        "Passion for arts, culture, and community development"
      ],
      applicationLink: "/about/workwithus"
    }
  ];

  return (
    <>
      <section className="py-16 bg-orange-50 dark:bg-gray-900">
        <div className="container-custom mx-auto px-6">
          {/* Breadcrumb */}
          <Breadcrumb 
            pageName="Work with Us" 
            description="Join our community and explore our opportunities." 
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {roles.map((role, index) => (
              <div
                className="w-full wow fadeInUp shadow-lg dark:bg-gray-800 dark:shadow-xl dark:hover:shadow-2xl relative z-10 rounded-xl bg-white px-6 py-8 hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105"
                key={index}
                data-wow-delay=".1s"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-3xl font-bold text-black dark:text-white">{role.title}</h3>
                </div>
                <h4 className="mb-2 text-xl font-bold text-dark dark:text-white">{role.department}</h4>
                <p className="mb-4 text-base text-body-color">{role.location} | {role.type}</p>
                <p className="mb-7 text-base text-body-color">{role.description}</p>

                <div className="mb-8 border-b border-body-color border-opacity-10 pb-8 dark:border-white dark:border-opacity-10">
                  <button className="flex w-full items-center justify-center rounded-lg bg-primary p-3 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-lg">
                    Apply Now
                  </button>
                </div>

                <div>
                  <h5 className="text-lg font-semibold text-gray-900 dark:text-white">Responsibilities:</h5>
                  <ul className="list-disc pl-5 text-base text-body-color">
                    {role.responsibilities.map((task, idx) => (
                      <li key={idx}>{task}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4">
                  <h5 className="text-lg font-semibold text-gray-900 dark:text-white">Qualifications:</h5>
                  <ul className="list-disc pl-5 text-base text-body-color">
                    {role.qualifications.map((qual, idx) => (
                      <li key={idx}>{qual}</li>
                    ))}
                  </ul>
                </div>

                <div className="absolute bottom-0 right-0 z-[-1]">
                  <svg
                    width="179"
                    height="158"
                    viewBox="0 0 179 158"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.5"
                      d="M75.0002 63.256C115.229 82.3657 136.011 137.496 141.374 162.673C150.063 203.47 207.217 197.755 202.419 167.738C195.393 123.781 137.273 90.3579 75.0002 63.256Z"
                      fill="url(#paint0_linear_70:153)"
                    />
                    <path
                      opacity="0.3"
                      d="M178.255 0.150879C129.388 56.5969 134.648 155.224 143.387 197.482C157.547 265.958 65.9705 295.709 53.1024 246.401C34.2588 174.197 100.939 83.7223 178.255 0.150879Z"
                      fill="url(#paint1_linear_70:153)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_70:153"
                        x1="69.6694"
                        y1="29.9033"
                        x2="196.108"
                        y2="83.2919"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                        <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_70:153"
                        x1="165.348"
                        y1="-75.4466"
                        x2="-3.75136"
                        y2="103.645"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                        <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
