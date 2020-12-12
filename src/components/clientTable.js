import { useState, useEffect } from "react";
import CustomTable from "./customTable";
import FilterSearcher from "./filterSearcher";
import { useSelector } from "react-redux";
import monthFilter from "../helpers/monthFilter";

const ClientTable = (props) => {
  const clients = useSelector((selector) => selector.clients);
  const [dateFilter, setDateFilter] = useState(clients);
  const [filter, setFilter] = useState(dateFilter);
  useEffect(() => {
    setDateFilter(monthFilter(clients, props.month, props.year));
  }, [props.month, props.year, clients]);

  useEffect(() => {
    setFilter(dateFilter);
  }, [dateFilter]);

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
