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
        path: "/about",
        newTab: false,
        description: "Learn about our mission, vision, and impact."
      },
      {
        id: 22,
        title: "Origin",
        path: "/origin",
        newTab: false,
        description: "Discover how swahilipot Hub began."
      },
      {
        id: 23,
        title: "Board Members",
        path: "/board-members",
        newTab: false,
        description: "Meet our board members."
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
        path: "/technology",
        newTab: false,
        description: "Cutting-edge tech exploration and solutions."
      },
      {
        id: 102,
        title: "Communication",
        path: "/communication",
        newTab: false,
        description: "Digital communication strategies."
      },
      {
        id: 103,
        title: "Engineering",
        path: "/engineering",
        newTab: false,
        description: "Softwares and hardware development."
      },
      {
        id: 104,
        title: "Community",
        path: "/community",
        newTab: false,
        description: "Community engagement and outreach."
      },
      {
        id: 105,
        title: "Creatives",
        path: "/creatives",
        newTab: false,
        description: "Creaative art and design."
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
    title: "Support",
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
    title: "Swahilipotfm",
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
