import Mission from "@/components/About/Mission";
import Vision from "@/components/About/Vission";
import Gallery from "@/components/About/Gallery";
import Breadcrumb from "@/components/Common/Breadcrumb";

// Metadata (Optional)
export const metadata = {
  title: "About Us - SwahiliPot Hub",
  description: "Learn about our mission, vision, and impact.",
};

export default function AboutPage() {
  return (
    <section className="bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto py-12">
        {/* Add the Breadcrumb with the provided content */}
        <Breadcrumb 
          pageName="About Us" 
          description="Learn about our mission, vision, and impact" 
        />
        <Mission />
        <Vision />
      </div>
      <Gallery />
    </section>
  );
}
