"use client";
import { useState } from "react";
import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";

const Attachment = () => {
  return (
    <div className="bg-white dark:bg-gray-900"> {/* This is the outermost div to control the background */}
      <section 
        id="attachment" 
        className="relative z-10 py-16 md:py-20 lg:py-28  dark:bg-dark-gray"
      >
        <div className="container">
          <SectionTitle
            title="Attachment & Internship Opportunities"
            paragraph="Gain practical experience and develop your skills through our attachment and internship programs."
            center
            width="665px"
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-2">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <div className="text-4xl text-primary mb-4">🎓</div>
              <h3 className="text-2xl font-semibold mb-4">Student Attachments</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                We offer attachment opportunities for students looking to fulfill their academic requirements while gaining practical experience in various fields including technology, arts, communications, and community development.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Flexible duration (3-4 months)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Hands-on project experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Mentorship from professionals</span>
                </li>
              </ul>
              <Link href="/about/workwithus" className="text-primary font-medium hover:underline">
                Apply for Attachment →
              </Link>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <div className="text-4xl text-primary mb-4">💼</div>
              <h3 className="text-2xl font-semibold mb-4">Professional Internships</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Our internship program is designed for recent graduates and young professionals seeking to build their careers in innovation, technology, creative arts, and community development.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>3-12 month structured programs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Leadership development opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Networking with industry professionals</span>
                </li>
              </ul>
              <Link href="/about/workwithus" className="text-primary font-medium hover:underline">
                Apply for Internship →
              </Link>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
              Both our attachment and internship programs provide valuable experience, skills development, and networking opportunities to help launch your career.
            </p>
            <Link href="/about/workwithus" className="btn">
              View All Opportunities
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 z-[-1]">
          <svg
            width="239"
            height="601"
            viewBox="0 0 239 601"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.3"
              x="-184.451"
              y="600.973"
              width="196"
              height="541.607"
              rx="2"
              transform="rotate(-128.7 -184.451 600.973)"
              fill="url(#paint0_linear_93:235)"
            />
            <rect
              opacity="0.3"
              x="-188.201"
              y="385.272"
              width="59.7544"
              height="541.607"
              rx="2"
              transform="rotate(-128.7 -188.201 385.272)"
              fill="url(#paint1_linear_93:235)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_93:235"
                x1="-90.1184"
                y1="420.414"
                x2="-90.1184"
                y2="1131.65"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_93:235"
                x1="-159.441"
                y1="204.714"
                x2="-159.441"
                y2="915.952"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    </div>
  );
};

export default Attachment;
