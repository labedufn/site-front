import React from "react";
import "../../assets/css/components/home/scroll-button.css";

const ScrollButton: React.FC = () => {
  const handleScroll = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    sectionId: string
  ) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <span className="scroll-button">
        <a href="#sobre" onClick={(e) => handleScroll(e, "sobre")}>
          <span className="mouse">
            <span></span>
          </span>
        </a>
      </span>
    </>
  );
};

export default ScrollButton;
