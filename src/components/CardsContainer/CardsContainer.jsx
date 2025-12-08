import "./CardsContainer.css";

const CardsContainer = ({
  children,
  extraClass = "",
  containerExtraClass = "",
}) => {
  if (!children) {
    return;
  }
  if (!children[0]) {
    return <div className="container__card">{children}</div>;
  }
  return (
    <div className={`container ${containerExtraClass}`}>
      {children.map((card, index) => {
        return (
          <div className={`container__card ${extraClass}`} key={index}>
            {card}
          </div>
        );
      })}
    </div>
  );
};
export default CardsContainer;
