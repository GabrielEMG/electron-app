import { useEffect } from "react";
import { useDispatch } from "react-redux";
import db from "../db";

const DeleteItemButtom = ({ dbOrigin, item, doAction, display }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    doAction && handleDelete();
  }, [doAction]);
  const handleDelete = async () => {
    try {
      await db[dbOrigin].remove(item);
      dispatch({
        type: `DELETE_${dbOrigin}`,
        payload: item,
      });
      console.log("deleted");
    } catch (err) {
      console.log(err.message);
    }
  };
  return <button onClick={() => display(true)}>eliminar</button>;
};

export default DeleteItemButtom;
