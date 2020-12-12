import { useState, useEffect } from "react";
import CustomTable from "./customTable";
import FilterSearcher from "./filterSearcher";
import { useSelector } from "react-redux";
import monthFilter from "../helpers/monthFilter";

const BuyTable = (props) => {
  const buys = useSelector((selector) => selector.buys);
  const [dateFilter, setDateFilter] = useState(buys);
  const [filter, setFilter] = useState(dateFilter);
  useEffect(() => {
    setDateFilter(monthFilter(buys, props.month, props.year));
  }, [props.month, props.year, buys]);

  useEffect(() => {
    setFilter(dateFilter);
  }, [dateFilter]);

  return (
    <div>
      <FilterSearcher
        data={buys}
        onChange={setFilter}
        types={["name", "price", "quantity", "link"]}
      />
      <CustomTable
        labels={["Producto", "Precio", "Cantidad", "Link"]}
        labelOrder={["name", "price", "quantity", "link"]}
        data={filter}
        small={true}
        dbOrigin="buy"
      />
    </div>
  );
};

export default BuyTable;
