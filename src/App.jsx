import "./App.css";
import Header from "./components/Header";
import Subnav from "./components/Subnav";
import DataContainer from "./components/DataContainer";
import SearchBar from "./components/SearchBar";
import Loader from "./components/Loader";

const searchBarClass =
  " w-[90vw] mt-24 inset-0 mx-auto border-white sm:hidden flex";

function App() {
  return (
    <>
      {/* <DataContainer />
      <Subnav /> */}
      {/* <Loader /> */}
      <SearchBar data={searchBarClass} />
      <Header />
    </>
  );
}

export default App;
