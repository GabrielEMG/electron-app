import OrderForm from "../components/orderForm";
import SendFormWrapper from "../components/sendFormWrapper";

const OrderFormPage = () => {
  return (
    <SendFormWrapper
      message="Orden de compra guardada"
      button="Agregar otra orden"
    >
      <OrderForm />
    </SendFormWrapper>
  );
};

export default OrderFormPage;
