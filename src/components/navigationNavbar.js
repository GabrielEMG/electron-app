import NavigationButton from "./navigationButton";
import { Container } from "react-bootstrap";

const NavigationNavbar = (props) => {
  return (
    <Container>
      {props.pageList.map((p, i) => (
        <NavigationButton
          label={props.labels[i]}
          key={i}
          name={p}
          onClick={props.setPage}
        />
      ))}
    </Container>
  );
};

export default NavigationNavbar;
