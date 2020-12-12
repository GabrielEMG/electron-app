import { useState, useEffect } from "react";
import db from "../db";
import CustomInput from "./customInput";
import { useDispatch } from "react-redux";
import AutocompleteClient from "./autocompleteClient";

const OrderForm = (props) => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    client: "",
    price: 0,
    quantity: 0,
    delivery: false,
    completed: false,
    type: "",
  });

  useEffect(() => {
    if (props.doAction) {
      handleClick();
      props.setDoAction(false);
      props.setShow(false);
    }
  }, [props.doAction]);

  const handleClick = async () => {
    try {
      const order = await db.order.insert(state);
      dispatch({
        type: "ADD_ORDER",
        payload: order,
      });
      props.sended(true);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div>
      <AutocompleteClient onChange={setState} />
      <CustomInput
        type="number"
        label="precio"
        name="price"
        onChange={setState}
      />
      <CustomInput
        type="number"
        label="cantidad"
        name="quantity"
        onChange={setState}
      />
    </div>
  );
};

export default OrderForm;
