import { useSelector } from "react-redux";
import monthFilter from "../helpers/monthFilter";

const Sumary = (props) => {
  let orders = useSelector((selector) => selector.orders);
  let buys = useSelector((selector) => selector.buys);
  orders = monthFilter(oders, props.month, props.year);
  buys = monthFilter(buys, props.month, props.year);
  let income = 0;
  let expense = 0;
  orders.forEach((order) => {
    income += Number(order.price);
  });
  buys.forEach((buy) => {
    expense += Number(buy.price);
  });
  return (
    <div>
      <p>Ingreso: ${income}</p>
      <p>Gasto: ${expense}</p>
      <p>Total: ${income - expense}</p>
    </div>
  );
};

export default Sumary;
