import { useSelector } from "react-redux";
import monthFilter from "../helpers/monthFilter";

const Sumary = (props) => {
  let orders = useSelector((selector) => selector.orders);
  let buys = useSelector((selector) => selector.buys);
  orders = monthFilter(orders, props.month, props.year);
  buys = monthFilter(buys, props.month, props.year);
  let income = 0;
  let expense = 0;
  let IVA = 0;
  let ballot = 0;
  orders.forEach((order) => {
    income += Math.round(Number(order.price) / 1.19);
    IVA += Math.round((Number(order.price) * 0.19) / 1.19);
  });
  buys.forEach((buy) => {
    if (buy.ballot) {
      expense += Math.round(Number(buy.price) * 0.81);
      ballot += Math.round(Number(buy.price) * 0.19);
    } else {
      expense += Number(buy.price);
    }
  });
  return (
    <div>
      <p>Ingreso: ${income}</p>
      <p>Gasto: ${expense}</p>
      <p>Total: ${income - expense}</p>
      <p>IVA: ${IVA}</p>
      <p>Crédito fiscal: ${ballot}</p>
    </div>
  );
};

export default Sumary;
