import ConfirmationPopWrapper from "./confirmationPopWrapper";
import DeleteItemButtom from "./deleteItemButton";

const CustomTableItem = (props) => {
  const { item, labelOrder, dbOrigin } = props;

  return (
    <tr>
      {labelOrder.map((label, i) => (
        <td key={i}>{item[label]}</td>
      ))}
      <td>
        <ConfirmationPopWrapper>
          <DeleteItemButtom dbOrigin={dbOrigin} item={item} />
        </ConfirmationPopWrapper>
      </td>
    </tr>
  );
};

export default CustomTableItem;
