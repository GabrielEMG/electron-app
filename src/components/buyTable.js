import { useState } from "react";
import CustomTable from "./customTable";
import FilterSearcher from "./filterSearcher";
import { useSelector } from "react-redux";

const BuyTable = () => {
  const buys = useSelector((selector) => selector.buys);
  const [filter, setFilter] = useState(buys);
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
