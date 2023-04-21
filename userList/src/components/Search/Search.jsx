import React from "react";
import styles from "./Search.module.css";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
function Search({ onInputChange }) {
  const [debounceTimeout, setDebounceTimeout] = useState();
  const debounce = (value, debounceTimeout) => {
    if (debounceTimeout) clearTimeout(debounceTimeout);
    const timeout = setTimeout(() => {
      onInputChange(value);
    }, 500);
    setDebounceTimeout(timeout);
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onInputChange(e.target.value);
      }}
      className={styles.container}
    >
      <input
        onKeyUp={(e) => {
          debounce(e.target.value, debounceTimeout);
        }}
        placeholder="Search User"
        className={styles.searchBox}
      />
      <button className={styles.searchIcon} type="submit">
        <SearchIcon />
      </button>
    </form>
  );
}

export default Search;
