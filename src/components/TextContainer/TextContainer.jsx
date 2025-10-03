import "./TextContainer.css";

const TextContainer = ({ heading, subheading, main, extraClass = "" }) => {
  return (
    <div className={`text__container ${extraClass}`}>
      {heading && <h2 className="text__head">{heading}</h2>}
      {subheading && <h3 className="text__subhead">{subheading}</h3>}
      {main && <div className="text__main">{main}</div>}
    </div>
  );
};
export default TextContainer;
