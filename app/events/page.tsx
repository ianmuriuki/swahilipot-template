import React from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import EventCard from "@/components/sphevents/EventCard";

// Define event data directly within the component for testing
const events = [
  {
    id: "1",
    title: "Tech Hackathon 2025",
    date: "TBD",
    time: "9:00 AM - 5:00 PM",
    location: "Jitume Lab",
    description:
      "A 48-hour coding challenge to solve local community problems. Join teams of developers, designers, and innovators to create solutions that address real challenges in our community.",
    image: "/images/events/hackathon.png",
    featured: true,
    link: "/programs/events/1",
  },
  {
    id: "2",
    title: "Women in Tech Summit",
    date: "TBD",
    time: "10:00 AM - 4:00 PM",
    location: "Amphetheater",
    description:
      "Celebrating and empowering women in technology fields. This summit brings together women in tech to share experiences, learn from each other, and inspire the next generation of female technologists.",
    image: "/images/events/womentech.png",
    featured: false,
    link: "/programs/events/2",
  },
  {
    id: "3",
    title: "Youth Innovation Showcase",
    date: "TBD",
    time: "8:00 AM - 5:00 PM",
    location: "Mazrui Space",
    description:
      "Working towards showcasing solutions to save the world from climate changes. This event highlights the creativity and ingenuity of youth in our community, providing them with a platform to showcase their ideas and receive feedback.",
    image: "/images/events/youthinnovation.png",
    featured: false,
    link: "/programs/events/3",
  },
];

const CaseManagementPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Events & Programs"
        description="Discover upcoming events, workshops, and programs at SwahiliPot Hub."
      />

      <section className="py-16 dark:bg-bg-color-dark bg-gray-light relative z-10">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-3xl font-bold mb-6 text-primary">
              Upcoming Events
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Join us for these exciting events and programs. Registration is
              required for most events.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 mb-16">
            {events
              .filter((event) => event.featured)
              .map((event, index) => (
                <EventCard
                  key={index}
                  title={event.title}
                  date={event.date}
                  time={event.time}
                  location={event.location}
                  description={event.description}
                  image={event.image}
                  link={event.link || "#"}
                />
              ))}
          </div>

          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-3xl font-bold mb-6 text-primary">All Events</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Browse all our upcoming events and programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-gray-light dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-primary font-medium">
                      {event.date}
                    </span>
                    <span className="text-xs bg-light dark:bg-gray-600 px-2 py-1 rounded-full">
                      {event.location}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {event.description}
                  </p>
                  <a
                    href={event.link || "#"}
                    className="text-primary font-medium hover:underline"
                  >
                    Learn more →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 dark:bg-bg-color-dark bg-gray-light">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-primary">
              Host Your Event at SwahiliPot Hub
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Looking for a venue for your next event? SwahiliPot Hub offers
              various spaces that can be customized to meet your needs.
            </p>
            <a
              href="/spaces/SpacesLayout"
              className="btn px-8 py-3 bg-primary text-white hover:bg-primary-dark rounded-md"
            >
              Explore Our Spaces
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseManagementPage;
