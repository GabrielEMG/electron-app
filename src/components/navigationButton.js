import { Button } from "react-bootstrap";

const NavigationButton = (props) => {
  const handleClick = (e) => {
    props.onClick(e.target.name);
  };
  return (
    <Button name={props.name} onClick={(e) => handleClick(e)}>
      {props.label}
    </Button>
  );
};

export default NavigationButton;
