import BuyForm from "../components/buyForm";
import SendFormWrapper from "../components/sendFormWrapper";

const BuyFormPage = () => {
  return (
    <SendFormWrapper message="Compra guardada" button="Agregar otra compra">
      <BuyForm />
    </SendFormWrapper>
  );
};

export default BuyFormPage;
