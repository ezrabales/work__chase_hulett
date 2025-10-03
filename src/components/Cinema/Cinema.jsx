import "./Cinema.css";
import Video from "../Video/Video";
import CardsContainer from "../CardsContainer/CardsContainer";
import TextContainer from "../TextContainer/TextContainer";
import ContactFormContainer from "../ContactFormContainer/ContactFormContainer";
import { useEffect } from "react";
import { useSlideEffect } from "../../hooks/useSlideEffect";

const Cinema = () => {
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
    threshold: 0.4,
  });
  useSlideEffect({
    side: "left",
    rootMargin: "0px 0px -10% 0px",
    threshold: 0.4,
  });
  useEffect(() => {
    const bg = document.querySelector(".cinema__background");
    if (!bg) return;

    // background parallax effect
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
    <div className="cinema">
      <div className="cinema__background" />
      <Video source="./drone.mp4" />
      <div className="cinema__main-content">
        <CardsContainer extraClass="slide-in-right-rand">
          <img src="../../src/assets/Award.svg" alt="award" />
          <img src="../../src/assets/Award.svg" alt="award" />
          <img src="../../src/assets/Award.svg" alt="award" />
          <img src="../../src/assets/Award.svg" alt="award" />
          <img src="../../src/assets/Award.svg" alt="award" />
          <img src="../../src/assets/Award.svg" alt="award" />
        </CardsContainer>
        <div className="cinema__text_long slide-in-bottom">
          <TextContainer
            heading="Heading"
            subheading="Subheading"
            main="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi quasicorrupti unde pariatur, voluptates hic ut accusantium sunt temporapraesentium, ipsa rerum sapiente ad eligendi repellat veniam, sintblanditiis. Ut."
          />
        </div>
        <div className="cinema__vid-txt-vid_container">
          <div className="cinema__vid-txt-vid_video slide-in-left">
            <Video source={"/portrait_drone.mp4"} />
          </div>
          <div className="cinema__vid-txt-vid_text slide-in-bottom">
            <TextContainer
              heading="Heading"
              subheading="Subheading"
              main="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi quasicorrupti unde pariatur, voluptates hic ut accusantium sunt temporapraesentium, ipsa rerum sapiente ad eligendi repellat veniam, sintblanditiis. Ut."
            />
          </div>
          <div className="cinema__vid-txt-vid_video slide-in-right">
            <Video source={"/portrait_drone.mp4"} />
          </div>
        </div>
        <CardsContainer extraClass="slide-in-left-rand">
          <img src="../../src/assets/Testimonial_Card.svg" alt="award" />
          <img src="../../src/assets/Testimonial_Card.svg" alt="award" />
          <img src="../../src/assets/Testimonial_Card.svg" alt="award" />
          <img src="../../src/assets/Testimonial_Card.svg" alt="award" />
          <img src="../../src/assets/Testimonial_Card.svg" alt="award" />
          <img src="../../src/assets/Testimonial_Card.svg" alt="award" />
        </CardsContainer>
        <ContactFormContainer source="cinema" />
      </div>
    </div>
  );
};
export default Cinema;
