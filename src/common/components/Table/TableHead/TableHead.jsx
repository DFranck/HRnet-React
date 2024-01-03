import { handleClick } from "./TableHeadFunction";
import { useState } from "react";
export const TableHead = ({ sortData, setSortData }) => {
  const tableHeadContents = Object.keys(sortData[0]);
  const [sortedColumn, setSortedColumn] = useState(Object.keys(sortData[0])[0]);
  const [sortDirection, setSortDirection] = useState("asc");
  return (
    <thead>
      <tr>
        {tableHeadContents.map((item, index) => (
          <th
            key={item + index}
            onClick={(e) => {
              handleClick(e, setSortDirection, setSortData, sortData);
              setSortedColumn(e.target.textContent);
            }}
            className={item === sortedColumn ? sortDirection : ""}
          >
            {item}
          </th>
        ))}
      </tr>
    </thead>
  );
};
