import { Provider } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import Loader from "./components/Loader";
import SearchBar from "./components/SearchBar";
import AppRoutes from "./routes/AppRoutes";
import store from "./store";

const searchBarClass =
  " w-[90vw] mt-24 inset-0 mx-auto border-white sm:hidden flex";

function App() {
  return (
    <Provider store={store}>
      {/* <SearchBar data={searchBarClass} /> */}
      {/* <Loader /> */}
      <AppRoutes />
      <Header />
    </Provider>
  );
}

export default App;
