import React, { useRef, useState, useEffect } from "react";
import OrderTable from "../../components/orderTable";
import BuyTable from "../../components/buyTable";
import ClientTable from "../../components/clientTable";
import PopMenu from "../../components/popMenu";
import BuyForm from "../../components/buyForm";
import ClientForm from "../../components/clientForm";
import OrderForm from "../../components/orderForm";
import Sumary from "../../components/sumary";
import Carousel from "../../components/carousel";

const HomePage = () => {
  const [state, setState] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
  });
  const changeYear = (year) => {
    setState((prev) => {
      return { ...prev, year };
    });
  };
  const changeMonth = (month) => {
    setState((prev) => {
      return { ...prev, month };
    });
  };
  return (
    <div>
      <div>
        años <Button onClick={(e) => changeYear(2020)}>2020</Button>
        <Button onClick={(e) => changeYear(2020)}>2021</Button>
      </div>
      mes <Button onClick={(e) => changeYear(10)}>noviembre</Button>
      <Button onClick={(e) => changeMonth(11)}>diciembre</Button>
      <div>
        <Sumary year={state.year} month={state.month} />
      </div>
      <div>
        <PopMenu action="Agregar compra" buttonTitle="Agregar compra">
          <BuyForm year={state.year} month={state.month} />
        </PopMenu>
        <PopMenu action="Agregar cliente" buttonTitle="Agregar cliente">
          <ClientForm />
        </PopMenu>
        <PopMenu action="Agregar orden" buttonTitle="Agregar orden">
          <OrderForm />
        </PopMenu>
      </div>
      <Carousel buttons={["Ordenes", "Compras", "Clientes"]}>
        <OrderTable />
        <BuyTable />
        <ClientTable />
      </Carousel>
    </div>
  );
};

export default HomePage;
