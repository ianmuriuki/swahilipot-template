import React from 'react';
import TeamCard from './TeamCard';

interface TeamMember {
  name: string;
  title: string;
  image: string;
  bio: string;
}

interface TeamProps {
  members: TeamMember[];
}

export default function Team({ members }: TeamProps) {
  return (
    <section className="py-16 bg-orange-50 dark:bg-gray-800">
      <div className="container-custom mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet Our Communication Team</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our talented team of Communication brings diverse expertise and experience to SwahiliPot Hub.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 place-items-center">
          {members.map((member, index) => (
            <div key={index} className="w-full max-w-[360px]">
              <TeamCard
                name={member.name}
                title={member.title}
                image={member.image}
                bio={member.bio}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
