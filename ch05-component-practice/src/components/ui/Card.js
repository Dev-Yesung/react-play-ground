import "./Card.css";

const Card = (props) => {
  const classNames = "card " + props.className;

  return <li className={classNames}>{props.children}</li>;
};

export default Card;
