import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Swahilipot Hub contact information",

  // other metadata
  description: "This is Contact Page for Startup Nextjs Template"
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="Get in touch with SwahiliPot Hub. We'd love to hear from you!."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
