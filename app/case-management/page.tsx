import React from 'react';
import Breadcrumb from '@/components/Common/Breadcrumb';

export default function CaseManagementPage() {
  return (
    <>
      <section className="py-16 bg-orange-50 dark:bg-gray-800">
<div className="container-custom mx-auto px-6">
  <Breadcrumb 
    pageName="Case Management Program" 
    description="Anyone , Anywhere, Anytime" 
  />
</div>
</section>


      <section className="py-16 px-8 bg-blue-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-screen-lg px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-6">About Our Case Management Program</h2>
              <p className="text-base text-gray-700 dark:text-gray-300 mb-6">
                At the Swahili Pot Hub Foundation (SPH), we are committed to making a positive impact on the lives of young individuals in Mombasa County and its six sub-counties. For the past seven years, we have been dedicated to helping youth overcome challenges and thrive.
              </p>
              <p className="text-base text-gray-700 dark:text-gray-300">
                The primary objective of the Case Management Project is to connect 60,000 youth in Mombasa County and its sub-counties to a wide range of opportunities and sustainable employment.
              </p>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="/images/case.png" 
                alt="Case Management Program" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">How Our Program Works</h2>
            <div className="space-y-8">
              {[
                { title: "Initial Assessment", desc: "We begin with a comprehensive assessment to understand the individual's situation, challenges, strengths, and goals." },
                { title: "Resource Connection", desc: "We connect youth with relevant resources and services based on their needs, including educational opportunities, healthcare, and legal assistance." },
                { title: "Skills Development", desc: "We provide training in both technical and soft skills to help youth succeed in education, employment, and life." },
                { title: "Ongoing Support", desc: "Our case managers provide mentorship and continuous guidance, ensuring participants progress toward their goals." },
              ].map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-primary text-white p-3 rounded-full mr-6 text-lg font-bold">{index + 1}</div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { title: "Educational Support", icon: "🎯", desc: "We help youth access educational opportunities, tutoring, and academic support." },
              { title: "Employment Assistance", icon: "💼", desc: "We support youth in developing job skills, preparing resumes, and finding employment." },
              { title: "Life Skills Development", icon: "🏠", desc: "Training in financial literacy, communication, and problem-solving skills." },
            ].map((feature, index) => (
              <div key={index} className="bg-light dark:bg-gray-800 p-6 rounded-lg">
                <div className="text-3xl text-primary mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">Get Involved</h2>
            <p className="text-base text-gray-700 dark:text-gray-300 mb-8">
              There are several ways you can support our Case Management Program and make a difference.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                { title: "Refer a Youth", link: "/contact", desc: "If you know someone who could benefit, refer them to us." },
                { title: "Volunteer", link: "/about/work-with-us", desc: "Share your skills and time as a mentor, tutor, or workshop facilitator." },
                { title: "Donate", link: "/stwdonate/support-stw", desc: "Support our program financially to help us reach more youth." },
              ].map((option, index) => (
                <div key={index} className="bg-light dark:bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">{option.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">{option.desc}</p>
                  <a href={option.link} className="text-primary font-medium hover:underline text-sm">
                    Learn More →
                  </a>
                </div>
              ))}
            </div>

            <a href="/contact" className="btn px-6 py-2 text-sm">
              Contact Us to Learn More
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
