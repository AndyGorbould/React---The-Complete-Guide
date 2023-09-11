import "./Card.css";

const Card = (props) => {             //changed to arrow function
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;
}

export default Card;
