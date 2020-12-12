import { useState } from "react";
import CustomTable from "./customTable";
import FilterSearcher from "./filterSearcher";
import { useSelector } from "react-redux";

const ClientTable = () => {
  const clients = useSelector((selector) => selector.clients);
  const [filter, setFilter] = useState(clients);
  return (
    <div>
      <FilterSearcher
        data={clients}
        onChange={setFilter}
        types={["name", "phone", "email"]}
      />
      <CustomTable
        labels={["Nombre", "Fono", "Email"]}
        labelOrder={["name", "phone", "email"]}
        data={filter}
        small={true}
        dbOrigin="client"
      />
    </div>
  );
};

export default ClientTable;
