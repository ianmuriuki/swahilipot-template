import React from "react";
import TeamCard from "./TeamCard";
import SectionTitle from "../../Common/SectionTitle";

const BoardMembers: React.FC = () => {
  const boardMembers = [
    {
      name: "Mr. Mahmoud Noor",
      title: "Founder & Chief Mentor",
      bio: "Mr. Mahmoud is the Founder of Swahilipot Hub Foundation.",
      image: "/images/about/mentor.jpg", // Ensure this path is correct
    },
    {
      name: "Zuhra Shariff",
      title: "Head of HR & Admin",
      bio: "Ms. Zuhra is the head of Human Resources at Swahilipot Hub.",
      image: "/images/about/zuhra.jpg",
    },
    {
      name: "To Name",
      title: "Secretary",
      bio: "",
      image: "/images/about/kiplangat.jpg",
    },
    {
      name: "Chris Achinga",
      title: "Technology Lead - Dude",
      bio: "Chris is the maker of software, and Father of Dragons at Swahilipot Hub.",
      image: "/images/about/achinga.jpeg",
    },
    {
      name: "Board Member 5",
      title: "Board Member",
      bio: "......................Swahilipot Hub Foundation.",
      image: "/images/blog/mtu.png",
    },
    {
      name: "Board Member 6",
      title: "Board Member",
      bio: ".................Swahilipot Hub Foundation.",
      image: "/images/blog/mtu.png",
    }
  ];

  return (
    <section id="board-members" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            {/* Text Section */}
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Board of Directors"
                paragraph="Our board members bring diverse expertise and experience to guide Swahilipot Hub's strategic direction. They are committed to our mission of empowering youth through technology, arts, and culture."
                mb="44px"
              />
            </div>

            {/* Team Cards Section */}
            <div className="w-full px-4 lg:w-1/2">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {boardMembers.map((member, index) => (
                  <TeamCard
                    key={index}
                    name={member.name}
                    title={member.title}
                    bio={member.bio}
                    image={member.image}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoardMembers;
