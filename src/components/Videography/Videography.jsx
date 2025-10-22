import "./Videography.css";
import Video from "../Video/Video";
import TextContainer from "../TextContainer/TextContainer";
import ContactFormContainer from "../ContactFormContainer/ContactFormContainer";
import { useEffect } from "react";
import { useSlideEffect } from "../../hooks/useSlideEffect";
import useAnalyticsClickEvent from "../../hooks/useAnalyticsClickEvent";

const Videography = ({ scrollProgress }) => {
  useAnalyticsClickEvent({ location: "videography" });
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
    <main className="vid">
      <div className="vid__background" />
      <Video source={"/drone.mp4"} />
      <div className="vid__main-content">
        <div className="vid__text_long slide-in-bottom">
          <TextContainer
            heading="Capturing Moments That Move"
            subheading="From intimate weddings to sweeping landscapes, we craft visual stories that resonate."
            main="Every frame we shoot is designed to evoke emotion and preserve memory. Our approach blends artistry with technical precision, ensuring your moments are not just recorded—but remembered."
          />
        </div>
        <div className="vid__video-text_container">
          <div className="vid__video-text_video slide-in-left-rand">
            <Video source={"/drone.mp4"} />
          </div>
          <div className="vid__video-text_text text_right slide-in-left-rand">
            <TextContainer
              heading="Your Story, Beautifully Told"
              subheading="We believe every person, brand, and event has a unique narrative."
              main="With a keen eye for detail and a passion for storytelling, we transform ordinary footage into extraordinary films. Whether it’s a promotional video or a personal milestone, we tailor each project to reflect your vision."
            />
          </div>
        </div>
        <div className="vid__video-text_container">
          <div className="vid__video-text_text text_left slide-in-right-rand">
            <TextContainer
              heading="From Concept to Final Cut"
              subheading="Seamless production that brings your ideas to life."
              main="Our team handles everything—from scripting and shooting to editing and delivery. We use industry-leading equipment and techniques to ensure your final product is polished, powerful, and ready to share."
            />
          </div>
          <div className="vid__video-text_video slide-in-right-rand">
            <Video source={"/drone.mp4"} />
          </div>
        </div>
        <ContactFormContainer source="videography" />
      </div>
    </main>
  );
};
export default Videography;
