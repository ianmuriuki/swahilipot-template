import React, { useState } from "react";

interface AccessibilityMenuProps {
  closeMenu: () => void;
}

export default function AccessibilityMenu({ closeMenu }: AccessibilityMenuProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const toggleOption = (option: string) => {
    if (selectedOption === option) {
      document.body.classList.remove(option);
      setSelectedOption(null);
    } else {
      if (selectedOption) {
        document.body.classList.remove(selectedOption);
      }
      document.body.classList.add(option);
      setSelectedOption(option);
    }
  };

  return (
    <div className="accessibility-menu">
      <button className="close-btn" onClick={closeMenu}>✖ Close</button>
      <button onClick={() => toggleOption("increased-spacing")}>Increase Text Spacing</button>
      <button onClick={() => toggleOption("high-contrast")}>Enable High Contrast</button>
      <button onClick={() => toggleOption("highlight-links")}>Highlight Links</button>
      <button onClick={() => toggleOption("pause-animations")}>Pause Animations</button>
      <button onClick={() => toggleOption("hide-images")}>Hide Images</button>
      <button onClick={() => toggleOption("dyslexia-friendly")}>Dyslexia-Friendly Font</button>
      <button onClick={() => toggleOption("large-cursor")}>Large Cursor</button>
    </div>
  );
}
