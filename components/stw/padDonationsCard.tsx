import React from "react";
import Link from "next/link";

interface PadDonationProps {
  amount: string;
  purpose: string;
}

const padDonations: PadDonationProps[] = [
  { amount: "KES 100", purpose: "Provides a Packet of Pads" },
  { amount: "KES 2,000", purpose: "Provides a Box of Pads" },
  { amount: "KES 2,499", purpose: "Provides a Hygiene Pack" },
];

export default function PadDonationsCard() {
  return (
    <section className="relative z-10 overflow-hidden pt-28 lg:pt-[150px] pb-16 bg-gray-light dark:bg-gray-800">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-bold mb-4">
              Donate to Support a Girl's Hygiene
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Many young women in our community miss school or work due to lack
              of access to menstrual products. Our pad drive initiative aims to
              provide sanitary pads to women and girls in need.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Your donation ensures that women can participate fully in
              educational and professional opportunities.
            </p>

            <div className="space-y-2 mb-6">
              {padDonations.map((donation, index) => (
                <div
                  key={index}
                  className="flex justify-between text-gray-600 dark:text-gray-300 text-sm bg-white dark:bg-gray-800 p-3 rounded-lg shadow"
                >
                  <span>{donation.amount}</span>
                  <span>{donation.purpose}</span>
                </div>
              ))}
            </div>

            <Link
              href="https://flutterwave.com/pay/fsxxrsiu1hvk"
              className="text-primary font-medium hover:underline"
              target="_blank"
            >
              Donate to Pad Drive →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
