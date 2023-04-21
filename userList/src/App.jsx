import UserDetails from "./components/UserDetails/UserDetails";
import styles from "./App.module.css";
import SquareLoading from "./components/Animation/SquareLoading";
import Search from "./components/Search/Search";
import { useState } from "react";
function App() {
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = (value) => {
    let valueInLowerCase = value.toLowerCase();
    setSearchValue(valueInLowerCase);
  };
  return (
    <div className={styles.app}>
      <Search onInputChange={handleSearch} />
      <UserDetails searchValue={searchValue} />
    </div>
  );
}

export default App;
