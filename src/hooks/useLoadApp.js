import db from "../db";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useLoadApp = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getData = async () => {
      const orders = await db.order.find({});
      dispatch({
        type: "LOAD_ALL_ORDERS",
        payload: orders,
      });
      const clients = await db.client.find({});
      dispatch({
        type: "LOAD_ALL_CLIENTS",
        payload: clients,
      });
      const buys = await db.buy.find({});
      dispatch({
        type: "LOAD_ALL_BUYS",
        payload: buys,
      });
    };
    getData();
  }, []);
};

export default useLoadApp;
