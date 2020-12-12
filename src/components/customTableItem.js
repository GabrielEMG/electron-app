import ConfirmationPopWrapper from "./confirmationPopWrapper";
import DeleteItemButtom from "./deleteItemButton";
import db from "../db";
import { useDispatch } from "react-redux";

const CustomTableItem = (props) => {
  const dispatch = useDispatch();
  const { item, labelOrder, dbOrigin } = props;
  const handleCheckClick = async () => {
    const updatedItem = await db[dbOrigin].update(
      item,
      {
        $set: { completed: !item.completed },
      },
      { returnUpdatedDocs: true }
    );
    dispatch({
      type: `SWITCH_COMPLETE_${dbOrigin}`,
      payload: updatedItem,
    });
  };
  return (
    <tr>
      {props.withCompletedCheck && (
        <td
          onClick={() => handleCheckClick()}
          style={{ backgroundColor: item.completed ? "green" : "orange" }}
        >
          hola
        </td>
      )}
      {labelOrder.map((label, i) => (
        <td key={i}>{item[label]}</td>
      ))}
      <td>
        <ConfirmationPopWrapper action="Eliminar">
          <DeleteItemButtom dbOrigin={dbOrigin} item={item} />
        </ConfirmationPopWrapper>
      </td>
    </tr>
  );
};

export default CustomTableItem;
