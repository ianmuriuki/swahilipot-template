import React from "react";
import Image from "next/image";

interface TeamCardProps {
  name: string;
  title: string;
  bio: string;
  image: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, title, bio, image }) => {
  return (
    <div className="bg-orange-50 dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
      <div className="relative w-full h-64">
        {/* Ensure the image path is correct */}
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1 text-gray-800 dark:text-white">{name}</h3>
        <p className="text-primary font-medium mb-4 text-gray-600 dark:text-gray-300">{title}</p>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{bio}</p>
      </div>
    </div>
  );
};

export default TeamCard;
