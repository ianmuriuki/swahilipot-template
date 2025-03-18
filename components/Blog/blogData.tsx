import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Visual Studio Code Setup: Unleash Your Coding Creativity",
    paragraph:
      "Visual Studio Code Setup: Unleash Your Coding Creativity.",
    image: "/images/blog/code.png",
    author: {
      name: " Aron Wanje",
      image: "/images/blog/mtu.png",
      designation: "Technical supporter",
    },
    tags: ["Technology"],
    publishDate: "April 30th, 2024",
  },
  {
    id: 2,
    title: "Swahili Tech Women(STW).",
    paragraph:
      "How our Swahili Tech Women program is helping bridge the gender gap in technology fields.",
    image: "/images/blog/womentech.jpg",
    author: {
      name: "Rose Ndinda",
      image: "/images/blog/mtu.png",
      designation: "Content Writer",
    },
    tags: ["women in Tech"],
    publishDate: "April 22nd, 2024",
  },
  {
    id: 3,
    title: "Industrial Attachment Applications at Swahilipot Hub Foundation.",
    paragraph:
      "Industrial Attachment Applications at Swahilipot Hub Foundation.",
    image: "/images/blog/attachee.png",
    author: {
      name: "Chris Achinga",
      image: "/images/blog/mtu.png",
      designation: "Software Developer",
    },
    tags: ["industrial attachment"],
    publishDate: "April 4th,2024",
  },
];
export default blogData;
