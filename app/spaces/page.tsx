import Spaces from "@/components/spaces/spaces";
import Breadcrumb from "@/components/Common/Breadcrumb";

// Metadata (Optional)
export const metadata = {
  title: "Spaces - SwahiliPot Hub",
  description: "Explore featured spaces in SwahiliPot Hub.",
};

export default function SpacesPage() {
  return (
    <section className="bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto py-12 px-6">
        {/* Breadcrumb */}
        <Breadcrumb 
        pageName=" Our Spaces"
        description="Explore the innovative spaces at SwahiliPot Hub." />
        
        {/* Featured Spaces */}
        <Spaces />
      </div>
    </section>
  );
}
