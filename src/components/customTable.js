import { Table } from "react-bootstrap";
import CustomTableItem from "./customTableItem";

const CustomTable = (props) => {
  return (
    <Table striped bordered hover size={props.small && "sm"}>
      <thead>
        <tr>
          {props.labels.map((label, i) => (
            <th key={i}>{label}</th>
          ))}
          <th>eliminar</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((item, i) => (
          <CustomTableItem
            item={item}
            labelOrder={props.labelOrder}
            index={i}
            dbOrigin={props.dbOrigin}
            key={i}
          />
        ))}
      </tbody>
    </Table>
  );
};

export default CustomTable;