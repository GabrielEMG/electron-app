import { useState } from "react";
import CustomInput from "./customInput";
import db from "../db";
import { useDispatch } from "react-redux";
import { Button } from "@material-ui/core";

const BuyForm = (props) => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    name: "",
    price: 0,
    quantity: 0,
    link: "",
    date: new Date().toDateString(),
  });

  const handleClick = async () => {
    try {
      const buy = await db.buy.insert(state);
      dispatch({
        type: "ADD_BUY",
        payload: buy,
      });
      props.sended(true);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <h5>Agregar compra</h5>
      <CustomInput
        label="Nombre de producto"
        name="name"
        type="text"
        onChange={setState}
      />
      <CustomInput
        label="Precio"
        name="price"
        type="number"
        onChange={setState}
      />
      <CustomInput
        label="Cantidad"
        name="quantity"
        type="number"
        onChange={setState}
      />
      <CustomInput
        label="Link de producto"
        name="link"
        type="text"
        onChange={setState}
      />

      <Button onClick={() => handleClick()}>Agregar compra</Button>
    </div>
  );
};

export default BuyForm;
