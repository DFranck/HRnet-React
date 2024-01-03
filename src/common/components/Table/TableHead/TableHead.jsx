import { handleClick } from "./TableHeadFunction";
import { useState } from "react";
export const TableHead = ({ data, setSortData }) => {
  const tableHeadContents = Object.keys(data[0]);
  const [sortedColumn, setSortedColumn] = useState(Object.keys(data[0])[0]);
  const [sortDirection, setSortDirection] = useState("asc");
  return (
    <thead>
      <tr>
        {tableHeadContents.map((item, index) => (
          <th
            key={item + index}
            onClick={(e) => {
              handleClick(e, setSortDirection, setSortData, data);
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
