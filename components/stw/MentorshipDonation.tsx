import React from "react";
import Link from "next/link";

interface MentorshipDonationProps {
  title: string;
  amount: string;
  description: string;
  link: string;
}

const mentorshipDonations: MentorshipDonationProps[] = [
  {
    title: "Full Mentorship Support Package + A Packet of Pads",
    amount: "KES 10,000",
    description:
      "Your generous contribution will play a vital role in empowering Swahili Tech Women's mission to mentor and support women throughout the Pwani region. Your donation will facilitate mentorship programs and provide essential hygiene products.",
    link: "https://flutterwave.com/pay/4nvphchgpofl",
  },
  {
    title: "Half Mentorship Support Package",
    amount: "KES 5,000",
    description:
      "Your generous contribution will significantly support Swahili Tech Women's mission of mentoring and supporting women. With your donation, we can partially fund mentorship programs and provide essential hygiene products.",
    link: "https://flutterwave.com/pay/4nvphchgpofl",
  },
];

export default function MentorshipDonation() {
  return (
    <section className="relative z-10 overflow-hidden pt-28 lg:pt-[150px] pb-16 bg-gray-light dark:bg-gray-900">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mentorshipDonations.map((donation, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow p-6"
            >
              <div className="text-sm text-primary font-medium mb-1">
                {donation.amount}
              </div>
              <h3 className="text-xl font-semibold mb-2">{donation.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {donation.description}
              </p>
              <Link
                href={donation.link}
                className="text-primary font-medium hover:underline"
                target="_blank"
              >
                Donate Now →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
