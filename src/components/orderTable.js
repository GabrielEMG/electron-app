import { useState } from "react";
import CustomTable from "./customTable";
import FilterSearcher from "./filterSearcher";
import { useSelector } from "react-redux";

const OrderTable = () => {
  const orders = useSelector((selector) => selector.orders);
  const [filter, setFilter] = useState(orders);
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
