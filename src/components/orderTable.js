import { useEffect, useState } from "react";
import CustomTable from "./customTable";
import FilterSearcher from "./filterSearcher";
import { useSelector } from "react-redux";
import monthFilter from "../helpers/monthFilter";

const OrderTable = (props) => {
  const orders = useSelector((selector) => selector.orders);
  const [dateFilter, setDateFilter] = useState(orders);
  const [filter, setFilter] = useState(dateFilter);

  useEffect(() => {
    setDateFilter(monthFilter(orders, props.month, props.year));
  }, [props.month, props.year, orders]);

  useEffect(() => {
    setFilter(dateFilter);
  }, [dateFilter]);

  return (
    <div>
      <FilterSearcher
        data={orders}
        onChange={setFilter}
        types={["client", "price", "quantity"]}
      />
      <CustomTable
        withCompletedCheck={true}
        labels={["Cliente", "Precio", "Cantidad"]}
        labelOrder={["client", "price", "quantity"]}
        data={filter}
        small={true}
        dbOrigin="order"
      />
    </div>
  );
};

export default OrderTable;
