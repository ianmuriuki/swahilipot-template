// app/about/page.tsx

import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link"; // Importing Link for routing

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Swahilipot Hub",
  description: "Learn more about Swahilipot Hub, our mission, and our vision.",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="Get to know about Swahilipot Hub, our mission, and how we make a difference."
      />
      <AboutSectionOne />
      <AboutSectionTwo />

      {/* Link to the origin page */}
      <section className="py-12 bg-blue-50 dark:bg-gray-800">
        <div className="container mx-auto text-center">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
            Learn More About Our Origin
          </h3>
          <p className="text-base text-gray-700 dark:text-gray-300 mb-4">
            Want to know how Swahilipot Hub started? Click below to read our full origin story and journey.
          </p>
          <Link
            href="/about/origin" // Link to the origin page
            className="text-white bg-primary hover:bg-primary-dark px-6 py-3 rounded-lg"
          >
            Read Our Origin Story
          </Link>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
