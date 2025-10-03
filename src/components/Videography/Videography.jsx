import "./Videography.css";
import Video from "../Video/Video";
import TextContainer from "../TextContainer/TextContainer";
import ContactFormContainer from "../ContactFormContainer/ContactFormContainer";
import { useEffect } from "react";
import { useSlideEffect } from "../../hooks/useSlideEffect";

const Videography = () => {
  useSlideEffect({
    side: "right-rand",
    delayMax: 600,
    delayMin: 100,
    rootMargin: "0px 0px -5% 0px",
  });
  useSlideEffect({
    side: "left-rand",
    delayMax: 600,
    delayMin: 100,
    rootMargin: "0px 0px -5% 0px",
  });
  useSlideEffect({
    side: "bottom",
    rootMargin: "0px 0px -5% 0px",
    threshold: 0.1,
  });
  useSlideEffect({
    side: "right",
    rootMargin: "0px 0px -10% 0px",
    threshold: 0.5,
  });
  useSlideEffect({
    side: "left",
    rootMargin: "0px 0px -10% 0px",
    threshold: 0.5,
  });
  useEffect(() => {
    const bg = document.querySelector(".vid__background");
    if (!bg) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = scrollY / maxScroll;
      const positionY = scrollProgress * 100;
      bg.style.backgroundPosition = `center ${positionY}%`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="vid">
      <div className="vid__background" />
      <Video source={"/drone.mp4"} />
      <div className="vid__main-content">
        <div className="vid__text_long slide-in-bottom">
          <TextContainer
            heading="Heading"
            subheading="Subheading"
            main="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi quasicorrupti unde pariatur, voluptates hic ut accusantium sunt temporapraesentium, ipsa rerum sapiente ad eligendi repellat veniam, sintblanditiis. Ut."
          />
        </div>
        <div className="vid__video-text_container">
          <div className="vid__video-text_video slide-in-left-rand">
            <Video source={"/drone.mp4"} />
          </div>
          <div className="vid__video-text_text text_right slide-in-left-rand">
            <TextContainer
              heading="Heading"
              subheading="Subheading"
              main="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi quasicorrupti unde pariatur, voluptates hic ut accusantium sunt temporapraesentium, ipsa rerum sapiente ad eligendi repellat veniam, sintblanditiis. Ut."
            />
          </div>
        </div>
        <div className="vid__video-text_container">
          <div className="vid__video-text_text text_left slide-in-right-rand">
            <TextContainer
              heading="Heading"
              subheading="Subheading"
              main="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi quasicorrupti unde pariatur, voluptates hic ut accusantium sunt temporapraesentium, ipsa rerum sapiente ad eligendi repellat veniam, sintblanditiis. Ut."
            />
          </div>
          <div className="vid__video-text_video slide-in-right-rand">
            <Video source={"/drone.mp4"} />
          </div>
        </div>
        <ContactFormContainer source="videography" />
      </div>
    </div>
  );
};
export default Videography;
