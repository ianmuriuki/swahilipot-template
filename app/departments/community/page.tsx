import React from 'react';
import PageAbout from '@/components/community/PageAbout';
import Stats from '@/components/community/Stats';
import Responsibilities from '@/components/community/Responsibilities';
import Team from '@/components/community/Team';
import Breadcrumb from '@/components/Common/Breadcrumb';  // Import the breadcrumb component

export default function CommunityDepartment() {
    // Department data
    const communityDescription = "Kujenga Jamii, Kukuza Vipaji, Kulea Ustawi.";

    const communityImage = "/images/community/community.png";

    const activities = [
      "Community Engagement & Networking",
      "Workshops & Skill Development",
      "Volunteer & Mentorship Programs",
      "Events & Cultural Activities",
      "Social Impact Initiatives",
      "Collaborations & Partnerships"
    ];

    const stats = [
      { label: "Active Community Members", value: "6,000+" },
      { label: "Workshops & Events Hosted", value: "600+" },
      { label: "Mentorship Sessions Conducted", value: "500+" },
      { label: "Outreach & Impact", value: "100,000+" }
    ];

    const responsibilities = [
        {
          title: "Community Manager",
          description: "Welcome to the Community Department at Swahilipot Hub! Our mission is to foster a strong, inclusive, and engaging environment where every member feels valued and empowered. We strive to connect individuals, nurture talents, and create opportunities for collaboration, growth, and shared success.",
          responsibilities: [
            "Develop and implement community engagement strategies",
            "Organize events, workshops, and networking sessions",
            "Build relationships with community members and partners",
            "Ensure a welcoming and inclusive environment for all members"
          ]
        },
        {
          title: "Social Media Coordinator",
          description: "At Swahilipot Hub, our community extends beyond physical spaces—it thrives in meaningful interactions, both online and offline. As part of the Community Department, your responsibility will be to amplify our members' voices, highlight their achievements, and cultivate a digital presence that reflects our vibrant and dynamic hub.",
          responsibilities: [
            "Manage and grow the hub’s social media presence",
            "Create and schedule engaging content across platforms",
            "Monitor and respond to community interactions online",
            "Collaborate with other teams to showcase community stories"
          ]
        },
        {
          title: "Content Creator",
          description: "The Community Department at Swahilipot Hub is dedicated to storytelling, knowledge-sharing, and fostering creativity. We believe that every member has a story worth telling, and through content creation, we bring their experiences, innovations, and aspirations to life—creating an engaging and inspiring community space.",
          responsibilities: [
            "Produce engaging written, visual, and multimedia content",
            "Capture stories of community members through interviews and videos",
            "Design promotional materials and creative assets",
            "Ensure content aligns with Swahilipot Hub’s mission and values"
          ]
        }
      ];

    const teamMembers = [
        {
          name: "Person One",
          title: "Community Engagement Leader",
          image: "/images/community/mtu.png",
          bio: "Person One fosters a welcoming and inclusive community at Swahilipot Hub. They lead initiatives that connect members, support collaborations, and enhance engagement through networking and mentorship programs.",
        },
        {
          name: "Person Two",
          title: "Events & Programs Coordinator",
          image: "/images/community/mtu.png",
          bio: "Person Two plans and organizes community-driven events, workshops, and outreach programs. They ensure that every activity aligns with our mission to empower and uplift our members.",
        },
        {
          name: "Person Three",
          title: "Community Content Creator",
          image: "/images/community/mtu.png",
          bio: "Person Three captures and shares the stories, experiences, and achievements of our members. Through blogs, videos, and social media content, they bring the essence of Swahilipot Hub’s community to life.",
        }
      ];

    return (
      <>
        {/* Add the breadcrumb component here */}
        <Breadcrumb 
          pageName="Community Department" 
          description="Learn more about the Community Department, its activities, responsibilities, and the talented team working to build a strong, inclusive community at Swahilipot Hub." 
        />
  
        <PageAbout
          description={communityDescription}
          image={communityImage}
          activities={activities}
        />
  
        <Stats stats={stats} />
  
        <Responsibilities responsibilities={responsibilities} />
  
        <Team members={teamMembers} />
      </>
    );
}
