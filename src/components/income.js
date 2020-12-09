import { useSelector } from "react-redux";

const Income = () => {
  const orders = useSelector((selector) => selector.orders);
  let income = 0;
  orders.forEach((order) => {
    income += Number(order.price);
  });
  console.log(income);
  return <h5>Ingresos: ${income}</h5>;
};

export default Income;
