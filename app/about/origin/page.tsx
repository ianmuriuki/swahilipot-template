import React from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Origin from "@/components/about/origin/Origin";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Origin | About Page | Swahilipot Hub",
  description: "Learn about the origin of Swahilipot Hub and its journey.",
};

export default function OriginPage() {
  return (
    <>
      <Breadcrumb
        pageName="Origin"
        description="Discover the journey behind Swahilipot Hub and how it came to be."
      />
      <Origin />
    </>
  );
}