import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import AppRoutes from "./routes/AppRoutes";

const searchBarClass =
  " w-[90vw] mt-24 inset-0 mx-auto border-white sm:hidden flex";

function App() {
  return (
    <>
      {/* <SearchBar data={searchBarClass} /> */}
      <AppRoutes />
      <Header />
    </>
  );
}

export default App;
