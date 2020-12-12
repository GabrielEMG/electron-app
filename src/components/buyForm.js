import { useState, useEffect } from "react";
import CustomInput from "./customInput";
import db from "../db";
import { useDispatch } from "react-redux";

const BuyForm = (props) => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    name: "",
    price: 0,
    quantity: 0,
    link: "",
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
    </div>
  );
};

export default BuyForm;
