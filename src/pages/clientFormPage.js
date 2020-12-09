import ClientForm from "../components/clientForm";
import SendFormWrapper from "../components/sendFormWrapper";

const ClientFormPage = () => {
  return (
    <SendFormWrapper message="Cliente guardado" button="Agregar otro cliente">
      <ClientForm />
    </SendFormWrapper>
  );
};

export default ClientFormPage;
