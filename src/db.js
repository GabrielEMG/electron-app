import Datastore from "nedb-promises";

const db = {
  order: Datastore.create({
    filename: "order.db",
    timestampData: true,
    autoload: true,
  }),
  client: Datastore.create({
    filename: "client.db",
    timestampData: true,
    autoload: true,
  }),
  buy: Datastore.create({
    filename: "buy.db",
    timestampData: true,
    autoload: true,
  }),
};

export default db;
