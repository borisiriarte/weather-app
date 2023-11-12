import { Provider } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import store from "./store";
import AppRoutes from "./routes/AppRoutes";
import Main from "./pages/Main";
import { useLocation } from "react-router-dom";

const searchBarClass =
  " w-[90vw] mt-24 inset-0 mx-auto border-white sm:hidden flex";

function App() {
  const { pathname } = useLocation();

  return (
    <Provider store={store}>
      <AppRoutes />
      {pathname !== "/" && <Header />}
    </Provider>
  );
}

export default App;
