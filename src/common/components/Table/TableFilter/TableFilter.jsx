import { useState } from "react";
import { handleChange } from "./TableFilterFunction";
export const TableFilter = ({ data, setFiltredData }) => {
  return (
    <label>
      Search:
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => handleChange(e, data, setFiltredData)}
      />
    </label>
  );
};
