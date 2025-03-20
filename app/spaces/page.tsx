import Spaces from "@/components/spaces/spaces";

// Metadata (Optional)
export const metadata = {
  title: "Spaces - SwahiliPot Hub",
  description: "Explore featured spaces in SwahiliPot Hub.",
};

export default function SpacesPage() {
  return (
    <section className="bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto py-12">
        {/* Here, you can add other sections or content if needed */}
        <Spaces />
      </div>
    </section>
  );
}
