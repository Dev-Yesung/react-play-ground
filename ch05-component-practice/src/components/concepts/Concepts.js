import Card from "../ui/Card";
import "./Concepts.css";

const Concepts = (props) => {
  const title = props.concept.title;
  const image = props.concept.image;
  const description = props.concept.description;

  return (
    <Card className="concept">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </Card>
  );
};

export default Concepts;
