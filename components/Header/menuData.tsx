import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 2,
    title: "About",
    newTab: false,
    submenu: [
      {
        id: 21,
        title: "About Us",
        path: "/about/aboutUs",
        newTab: false,
        description: "Learn about our mission, vision, and impact."
      },
      {
        id: 22,
        title: "Origin",
        path: "/about/origin",
        newTab: false,
        description: "Discover how SwahiliPot Hub began."
      },
      {
        id: 23,
        title: "Board Members",
        path: "/about/board-members",
        newTab: false,
        description: "Meet our board members."
      },
      {
        id: 24,
         title: "Work with us",
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
        title: "Technology",
        path: "/departments/technology",
        newTab: false,
        description: "Cutting-edge tech exploration and solutions."
      },
      {
        id: 102,
        title: "Communications",
        path: "/departments/communications",
        newTab: false,
        description: "Digital communication strategies."
      },
      {
        id: 103,
        title: "Engineering",
        path: "/departments/engineering",
        newTab: false,
        description: "Software and hardware development."
      },
      {
        id: 104,
        title: "Community",
        path: "/departments/community",
        newTab: false,
        description: "Community engagement and outreach."
      },
      {
        id: 105,
        title: "Creatives",
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
    title: "Pages",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "About Page",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "Contact Page",
        path: "/contact",
        newTab: false,
      },
      {
        id: 43,
        title: "Blog Grid Page",
        path: "/blog",
        newTab: false,
      },
      {
        id: 44,
        title: "Blog Sidebar Page",
        path: "/blog-sidebar",
        newTab: false,
      },
      {
        id: 45,
        title: "Blog Details Page",
        path: "/blog-details",
        newTab: false,
      },
      {
        id: 46,
        title: "Sign In Page",
        path: "/signin",
        newTab: false,
      },
      {
        id: 47,
        title: "Sign Up Page",
        path: "/signup",
        newTab: false,
      },
      {
        id: 48,
        title: "Error Page",
        path: "/error",
        newTab: false,
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
