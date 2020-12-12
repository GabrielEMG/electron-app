import { useState, Children } from "react";
import { Button } from "@material-ui/core";

const Carousel = (props) => {
  const [page, setPage] = useState(0);
  return (
    <div>
      <div>
        {props.buttons.map((button, index) => (
          <Button key={index} onClick={() => setPage(index)}>
            {button}
          </Button>
        ))}
      </div>
      <div
        style={{
          overflowX: "hidden",
          position: "relative",
          width: "100%",
          height: "600px",
        }}
      >
        {Children.map(props.children, (child, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              width: "100%",
              paddingRight: 20,
              paddingLeft: 20,
              transition: "0.6s",
              transform: `translateX(${index * 100 - 100 * page}%)`,
            }}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
