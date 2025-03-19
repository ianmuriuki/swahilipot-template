import { Metadata } from "next";
import SwahilipotfmPage from "../swahilipotfm/index"; // import the actual client component

// Metadata for the Swahilipot FM page
export const metadata: Metadata = {
  title: "Swahilipot FM | Live Radio Streaming",
  description: "Listen to live radio streaming from Swahilipot FM. Stay tuned to the latest shows, music, and more."
};

export default function SwahilipotfmPageWrapper() {
  return <SwahilipotfmPage />;
}
