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
import NavigationDate from "../../components/navigationDate";

const HomePage = () => {
  const [date, setDate] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
  });
  console.log(date);
  return (
    <div>
      <div>
        <NavigationDate setDate={setDate} date={date} />
      </div>
      <div>
        <Sumary year={date.year} month={date.month} />
      </div>
      <div>
        <PopMenu action="Agregar orden" buttonTitle="Agregar orden">
          <OrderForm />
        </PopMenu>
        <PopMenu action="Agregar compra" buttonTitle="Agregar compra">
          <BuyForm />
        </PopMenu>
        <PopMenu action="Agregar cliente" buttonTitle="Agregar cliente">
          <ClientForm />
        </PopMenu>
      </div>
      <Carousel buttons={["Ordenes", "Compras", "Clientes"]}>
        <OrderTable year={date.year} month={date.month} />
        <BuyTable year={date.year} month={date.month} />
        <ClientTable />
      </Carousel>
    </div>
  );
};

export default HomePage;
