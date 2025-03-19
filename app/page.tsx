import AboutSectionOne from "@/components/landing/AboutSectionOne";
import AboutSectionTwo from "@/components/landing/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import Numbers from "@/components/landing/Numbers/Page";
import Swahilipotfm from "@/components/landing/Swahiliotfm/Page";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Swahilipot Hub Foundation",
  description: "Empowering Innovation in Coastal Regions",

  icons: {
    icon: "images/logo/logo.png",
  },

  // Open Graph Meta Tags
  openGraph: {
    title: "Swahilipot Hub Foundation",
    description: "Empowering Innovation in Coastal Regions",
    url: "https://swahilipothubtemplate.vercel.app", // Your URL
    images: [
      {
        url: "https://swahilipothubtemplate.vercel.app/logo/image.jpg", // Correct image URL
        alt: "Swahilipot Hun Foundation Logo",
        width: 1200,
        height: 630,
      },
    ],
  },

  // Twitter Card Meta Tags
  // Other metadata can be added below as needed
  twitter: {
    card: "summary_large_image",
    title: "Swahilipot Hun Foundation",
    description: "Empowering Innovation in Coastal Regions",
    images: [
      {
        url: "https://swahilipothubtemplate.vercel.app/logo/image.jpg", // Correct image URL
        alt: "Swahilipot Hun Foundation Logo",
        width: 1200,
        height: 630,
      },
    ],
  }
};



export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      <Numbers/>
      <Swahilipotfm/>
      <Blog />
      
      <Contact />
    </>
  );
}
