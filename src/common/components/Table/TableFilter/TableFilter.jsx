import { useState } from "react";
export const TableFilter = (setSortData) => {
  const [inputFilter, setInputFilter] = useState("");
  console.log(inputFilter);
  return (
    <label>
      Search:
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setInputFilter(e.target.value)}
      />
    </label>
  );
};
