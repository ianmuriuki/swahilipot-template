// app/about/origin/page.tsx

import OriginContent from "@/components/About/OriginContent";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Origin | About Page | Swahilipot Hub",
  description: "Learn about the origin of Swahilipot Hub and its journey.",
};

const OriginPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Origin"
        description="Discover the journey behind Swahilipot Hub and how it came to be."
      />
      <OriginContent />
    </>
  );
};

export default OriginPage;
