import { useState } from "react";
import CustomInput from "./customInput";
import db from "../db";
import { useDispatch } from "react-redux";
import { Button } from "@material-ui/core";

const ClientForm = (props) => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    name: "",
    phone: "",
    email: "",
    socialMedia: {
      facebook: "",
      instagram: "",
      twitter: "",
    },
    location: "",
    dateCreation: new Date(),
    lastBuy: "",
  });

  const handleClick = async () => {
    try {
      const client = await db.client.insert(state);
      dispatch({
        type: "ADD_CLIENT",
        payload: client,
      });
      props.sended(true);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <div>
        <h5>Información de cliente</h5>
        <CustomInput
          label="Cliente"
          name="name"
          type="text"
          onChange={setState}
        />
        <CustomInput label="Fono" name="phone" type="tel" onChange={setState} />
        <CustomInput
          label="Email"
          name="email"
          type="email"
          onChange={setState}
        />
        <CustomInput
          label="Dirección despacho"
          name="location"
          type="text"
          onChange={setState}
        />
      </div>
      <div>
        <h5>Redes Sociales</h5>
        <CustomInput
          label="Facebook"
          name="socialMedia"
          sub="facebook"
          type="text"
          onChange={setState}
        />
        <CustomInput
          label="Instagram"
          name="socialMedia"
          sub="Instagram"
          type="text"
          onChange={setState}
        />
        <CustomInput
          label="Twitter"
          name="socialMedia"
          sub="Twitter"
          type="text"
          onChange={setState}
        />
      </div>

      <Button variant="contained" color="primary" onClick={() => handleClick()}>
        agregar cliente
      </Button>
    </div>
  );
};

export default ClientForm;
