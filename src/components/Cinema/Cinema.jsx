import "./Cinema.css";
import Video from "../Video/Video";
import CardsContainer from "../CardsContainer/CardsContainer";
import TextContainer from "../TextContainer/TextContainer";
import ContactFormContainer from "../ContactFormContainer/ContactFormContainer";
import { useEffect } from "react";
import { useSlideEffect } from "../../hooks/useSlideEffect";
import AwardIcon from "../../assets/Award.svg";
import TestimonialCard from "../../assets/Testimonial_Card.svg";

const Cinema = ({ scrollProgress }) => {
  useSlideEffect({
    side: "right-rand",
    delayMax: 600,
    delayMin: 100,
    rootMargin: "0px 0px -5% 0px",
    threshold: 0.1,
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
    // turn this into a hook withe the scroll management in App.jsx
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
        <CardsContainer
          extraClass="slide-in-right-rand"
          containerExtraClass="grid-display-column-2"
        >
          <img src={AwardIcon} alt="award" />
          <img src={AwardIcon} alt="award" />
          <img src={AwardIcon} alt="award" />
          <img src={AwardIcon} alt="award" />
          <img src={AwardIcon} alt="award" />
          <img src={AwardIcon} alt="award" />
        </CardsContainer>
        <div className="cinema__text_long slide-in-bottom">
          <TextContainer
            heading="Visuals That Speak Louder Than Words"
            subheading="Crafting cinematic experiences that linger long after the credits roll."
            main="We don’t just film—we tell stories. With every project, we aim to capture the emotion, energy, and essence of your vision. Whether it’s a short film, a brand piece, or a personal milestone, we bring your narrative to life with stunning visuals and immersive sound."
          />
        </div>
        <div className="cinema__vid-txt-vid_container">
          <div className="cinema__vid-txt-vid_video slide-in-left">
            <Video source={"/portrait_drone.mp4"} />
          </div>
          <div className="cinema__vid-txt-vid_text slide-in-bottom">
            <TextContainer
              heading="Where Art Meets Precision"
              subheading="A seamless blend of creativity and technical mastery."
              main="Our process is rooted in collaboration and fueled by passion. From concept development to final edit, we work closely with you to ensure every frame reflects your story. With high-end gear and a filmmaker's eye, we deliver content that's both beautiful and impactful."
            />
          </div>
          <div className="cinema__vid-txt-vid_video slide-in-right">
            <Video source={"/portrait_drone.mp4"} />
          </div>
        </div>
        <CardsContainer extraClass="slide-in-left-rand">
          <img src={TestimonialCard} alt="award" />
          <img src={TestimonialCard} alt="award" />
          <img src={TestimonialCard} alt="award" />
          <img src={TestimonialCard} alt="award" />
          <img src={TestimonialCard} alt="award" />
          <img src={TestimonialCard} alt="award" />
        </CardsContainer>
        <ContactFormContainer source="cinema" />
      </div>
    </div>
  );
};
export default Cinema;
