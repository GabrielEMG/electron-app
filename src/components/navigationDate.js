import { Button } from "@material-ui/core";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import months from "../helpers/dateButtons";
import getMonths from "../helpers/getMonths";

const NavigationDate = (props) => {
  const orders = useSelector((selector) => selector.orders);
  const [state, setState] = useState([]);

  useEffect(() => {
    if (orders.length > 1) {
      setState(
        getMonths(orders[0].createdAt, orders[orders.length - 1].createdAt)
      );
    }
  }, [orders]);

  const handleClick = (date) => {
    props.setDate(date);
  };

  return (
    <div>
      {state.map((date, i) => (
        <Button
          key={i}
          variant="contained"
          color={
            props.date.month === date.month && props.date.year === date.year
              ? "primary"
              : "secondary"
          }
          onClick={() => handleClick(date)}
        >
          {`${months[date.month]} - ${date.year}`}
        </Button>
      ))}
    </div>
  );
};

export default NavigationDate;
