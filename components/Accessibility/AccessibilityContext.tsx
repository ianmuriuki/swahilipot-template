"use client";

import React, { createContext, useContext, useState } from "react";

const AccessibilityContext = createContext(null);

export function AccessibilityProvider({ children }) {
  const [highContrast, setHighContrast] = useState(false);
  const [textSpacing, setTextSpacing] = useState(false);
  const [linkHighlight, setLinkHighlight] = useState(false);
  const [pauseAnimations, setPauseAnimations] = useState(false);
  const [hideImages, setHideImages] = useState(false);
  const [dyslexiaFont, setDyslexiaFont] = useState(false);
  const [largeCursor, setLargeCursor] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  return (
    <AccessibilityContext.Provider
      value={{
        fontSize,
        increaseFontSize: () => setFontSize((size) => Math.min(size + 2, 24)),
        decreaseFontSize: () => setFontSize((size) => Math.max(size - 2, 12)),
        toggleHighContrast: () => setHighContrast(!highContrast),
        toggleTextSpacing: () => setTextSpacing(!textSpacing),
        toggleLinkHighlight: () => setLinkHighlight(!linkHighlight),
        togglePauseAnimations: () => setPauseAnimations(!pauseAnimations),
        toggleHideImages: () => setHideImages(!hideImages),
        toggleDyslexiaFont: () => setDyslexiaFont(!dyslexiaFont),
        toggleLargeCursor: () => setLargeCursor(!largeCursor),
      }}
    >
      <div className={`transition-all ${highContrast ? "contrast-150" : ""} ${textSpacing ? "tracking-wide" : ""}`}>
        {children}
      </div>
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  return useContext(AccessibilityContext);
}
