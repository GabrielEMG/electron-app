import useLoadApp from "./hooks/useLoadApp";
import HomePage from "./pages/homePage";

const App = () => {
  useLoadApp();
  return <HomePage />;
};

export default App;
