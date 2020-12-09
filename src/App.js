import useLoadApp from "./hooks/useLoadApp";
import PageHandler from "./pages/pageHandler";

const App = () => {
  useLoadApp();
  return (
    <div>
      <PageHandler />
    </div>
  );
};

export default App;
