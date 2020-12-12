import { useState } from "react";
import NavigationNavbar from "../components/navigationNavbar";
import HomePage from "./homePage";
import OrderFormPage from "./orderFormPage";
import ClientFormPage from "./clientFormPage";
import BuyFormPage from "./buyFormPage";

const PageHandler = () => {
  const [page, setPage] = useState("home");

  const displayPage = () => {
    switch (page) {
      case "home":
        return <HomePage />;
      case "order-form":
        return <OrderFormPage />;
      case "client-form":
        return <ClientFormPage />;
      case "buy-form":
        return <BuyFormPage />;
      default:
        return null;
    }
  };

  return (
    <div>
      <NavigationNavbar
        pageList={["home", "order-form", "client-form", "buy-form"]}
        labels={["Hogar", "Agregar orden", "Crear cliente", "Agregar compra"]}
        setPage={setPage}
      />
      {displayPage()}
    </div>
  );
};

export default PageHandler;
