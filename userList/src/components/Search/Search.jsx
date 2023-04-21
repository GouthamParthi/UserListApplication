import React from "react";
import styles from "./Search.module.css";
import { useState } from "react";
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
    <div>
      <input
        onKeyUp={(e) => {
          debounce(e.target.value, debounceTimeout);
        }}
        placeholder="Search User"
        className={styles.searchBox}
      />
    </div>
  );
}

export default Search;
