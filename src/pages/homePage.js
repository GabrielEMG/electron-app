import React, { useState } from "react";
import { Button } from "@material-ui/core";
import OrderTable from "../components/orderTable";
import BuyTable from "../components/buyTable";

const HomePage = () => {
  const [display, setDisplay] = useState("order");

  const table = (type) => {
    switch (type) {
      case "order":
        return <OrderTable />;
      case "buy":
        return <BuyTable />;
      default:
        return;
    }
  };

  return (
    <div>
      <Button onClick={() => setDisplay("order")}>Ordenes</Button>
      <Button onClick={() => setDisplay("buy")}>Compras</Button>
      {table(display)}
    </div>
  );
};

export default HomePage;
