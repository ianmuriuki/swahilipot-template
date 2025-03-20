"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import AccessibilityButton from "@/components/Accessibility/AccessibilityButton";
import AccessibilityMenu from "@/components/Accessibility/AccessibilityMenu";
import { AccessibilityProvider } from "@/components/Accessibility/AccessibilityContext";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import { Providers } from "./providers";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false); // Function to close the menu

  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <AccessibilityProvider>
            <AccessibilityButton onClick={() => setMenuOpen(true)} />
            {menuOpen && <AccessibilityMenu closeMenu={closeMenu} />}
            <Header />
            {children}
            <Footer />
            <ScrollToTop />
          </AccessibilityProvider>
        </Providers>
      </body>
    </html>
  );
}
