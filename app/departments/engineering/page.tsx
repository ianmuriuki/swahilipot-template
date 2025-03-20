import React from 'react';
import PageAbout from '@/components/engineering/PageAbout';
import Stats from '@/components/engineering/Stats';
import Roles from '@/components/engineering/Roles';
import Team from '@/components/engineering/Team';
import Breadcrumb from '@/components/Common/Breadcrumb';  // Import the breadcrumb component

export default function EngineeringDepartment() {
  // Department data
  const departmentDescription = "We are the Engineering Team under the Technology Department at Swahilipot Hub Foundation, dedicated to developing and maintaining the organization's platforms as well as manage and configure the network infrastructure.";
  
  const departmentImage = "/images/about/dep_tech.svg";
  
  const activities = [
    "Software Development",
    "Hardware Prototyping",
    "Tech Financing",
    "Cybersecurity Engineering",
    "Technical Support"
  ];
  
  const stats = [
    { label: "Traffic in terms of reach", value: "5000+" },
    { label: "Platforms in development", value: "10+" },
    { label: "Platforms that are live", value: "4" },
    { label: "Active Engineers", value: "15" }
  ];
  
  const roles = [
    {
      title: "Role of the team",
      description: "The Engineering team is in charge of the following roles:",
      requirements: [
        "The team is crucial to the organisation, leading software, web, and digital product development and innovation.",
        "We design and create technologies that meet the organisation's needs.",
        "Continuously optimizing solutions, they enhance product performance, ensuring competitiveness."
      ]
    },
    {
      title: "Team Goals",
      description: "The following are some of the goals of the team.",
      requirements: [
        "Developing sustainable solutions",
        "Innovation and sustainability",
        "Ethical and Inclusive Designs",
        "Network and System Configuration",
        "Resource Efficiency",
        "Documentation and Knowledge Sharing"
      ]
    },
    {
      title: "Impact of the team in the organization",
      description: "The team has the following impacts on the Swahilipot Hub Organization.",
      requirements: [
        "The team integrates and manages platforms for various activities within the organization.",
        "Our efforts have streamlined processes and enhanced efficiency across departments",
        "The team has fostered strong collaboration with other departments such as creatives and communications, synergizing efforts to achieve common goals and objectives.",
        "Together, our contributions have significantly impacted the hub's operations and success."
      ]
    }
  ];
  
  const teamMembers = [
    {
      name: "Chris Achinga",
      title: "Engineering Lead - Dude",
      image: "/images/departments/chrisimage.png",
      bio: "Maker of Softwares, Breaker of Systems, and the Father of Dragons",
      social: {
        linkedin: "https://linkedin.com/in/achingachris",
        github: "https://github.com/achingachris",
        twitter: "https://twitter.com/achinga_chris"
      }
    },
    {
      name: "Jesse Amianda",
      title: "Software Developer",
      image: "/images/departments/amiandaimage.png",
      bio: "Focused on frontend frameworks and UI/UX designs.",
      social: {
        twitter: "https://twitter.com/jessyamianda",
        github: "https://github.com/jessyamianda",
        linkedin: "https://linkedin.com/in/jessyamianda"
      }
    },
    {
      name: "Chris Mwalimo",
      title: "Software Developer",
      image: "/images/departments/mwalimoimage.png",
      bio: "Specializes in AI technologies and machine learning models.",
      social: {
        linkedin: "https://linkedin.com/in/chrismwalimo",
        github: "https://github.com/chrismwalimo",
        twitter: "https://twitter.com/chris_mwalimo"
      }
    },
    {
      name: "Micky Maria",
      title: "Cybersecurity Engineer",
      image: "/images/departments/mickyimage.png",
      bio: "Dedicated to enhancing system security and data protection.",
      social: {
        linkedin: "https://linkedin.com/in/mickymaria",
        github: "https://github.com/mickymaria",
        twitter: "https://twitter.com/mickymaria"
      }
    },
    {
      name: "Aaron Wanje",
      title: "Technical Support",
      image: "/images/departments/aronimage.png",
      bio: "Ensures smooth operations and rapid troubleshooting in charge of Digital Literacy classes.",
      social: {
        linkedin: "https://linkedin.com/in/michaelodhiambo",
        github: "https://github.com/michaelodhiambo",
        twitter: "https://twitter.com/michaelodhiambo"
      }
    },
    {
      name: "Joy Ngugi",
      title: "Software Developer",
      image: "/images/departments/joyimage.png",
      bio: "Focused on frontend frameworks and UI/UX designs.",
      social: {
        linkedin: "https://linkedin.com/in/joyngugi",
        github: "https://github.com/joyngugi",
        twitter: "https://twitter.com/joyngugi"
      }
    }
  ];
  

  return (
    <>
      {/* Add the breadcrumb component here */}
      <Breadcrumb 
        pageName="Engineering Department" 
        description="Learn more about the Engineering Department, its activities, roles, team members, and contributions to Swahilipot Hub."
      />
      
      <PageAbout 
        description={departmentDescription}
        image={departmentImage}
        activities={activities}
      />
      
      <Stats stats={stats} />
      
      <Roles roles={roles} />
      
      <Team members={teamMembers} />
    </>
  );
}
