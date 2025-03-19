import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 2,
    title: "About",
    newTab: false,
    submenu: [
      {
        id: 21,
        title: "ABOUT US",
        path: "/about",
        newTab: false,
        description: "Learn about our mission, vision, and impact."
      },
      {
        id: 22,
        title: "OUR ORIGIN",
        path: "/about/origin",
        newTab: false,
        description: "Discover how Swahilipot Hub began."
      },
      {
        id: 23,
        title: "BOARD MEMBERS",
        path: "/about/board", // Updated path to match the directory structure
        newTab: false,
        description: "Meet our board members."
      },
      {
        id: 24,
        title: "WORK WITH US",
        path: "/about/workwithus",
        newTab: false,
        description: "Work with us"
      },
    ],
  },
  {
    id: 100,
    title: "Departments",
    newTab: false,
    submenu: [
      {
        id: 101,
        title: "TECHNOLOGY",
        path: "/departments/technology",
        newTab: false,
        description: "Cutting-edge tech exploration and solutions."
      },
      {
        id: 102,
        title: "COMMUNICATION",
        path: "/departments/communications",
        newTab: false,
        description: "Digital communication strategies."
      },
      {
        id: 103,
        title: "ENGINEERING",
        path: "/departments/engineering",
        newTab: false,
        description: "Software and hardware development."
      },
      {
        id: 104,
        title: "COMMUNITY",
        path: "/departments/community",
        newTab: false,
        description: "Community engagement and outreach."
      },
      {
        id: 105,
        title: "CREATIVES",
        path: "/departments/creatives",
        newTab: false,
        description: "Creative art and design."
      },
    ],
  },
  {
    id: 33,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 3,
    title: "Contact Us",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "Programs",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "CASE MANAGEMENT",
        path: "/case-management",
        newTab: false,
        description: "Project and case tracking",
      },
      {
        id: 42,
        title: "CAMPUS AMBASSADOR",
        path: "/campus-ambassador",
        newTab: false,
        description: "University outreach programs",
      },
      {
        id: 43,
        title: "EVENTS",
        path: "/events",
        newTab: false,
        description: "Upcoming eventsa nad activities",
      },
      {
        id: 44,
        title: "SWAHILI TECH WOMEN",
        path: "/swahili-tech-women",
        newTab: false,
        description: "Empowering women in technology",
      },
      {
        id: 45,
        title: "TOURISM INNOVATION LAB",
        path: "/mombasa-tourism-innovation-lab",
        newTab: false,
        description: "Innovation in tourism sector",
      },
     
    ],
  },
  {
    id: 200,
    title: "SwahiliPot FM",
    path: "/swahilipotfm",
    newTab: false,
  },
  {
    id: 201,
    title: "Join Us",
    path: "/join-us",
    newTab: false,
  },
];

export default menuData;
