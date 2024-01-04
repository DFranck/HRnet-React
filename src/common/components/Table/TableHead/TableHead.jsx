import { setDirectionAndColumn } from "../tableFunction";
import "./tableHead.css";
export const TableHead = ({
  sortDirection,
  sortedColumn,
  setSortedColumn,
  setSortDirection,
  tableHeadContents,
}) => {
  return (
    <thead className="pmf-tableHead">
      <tr className="pmf-tableHead-row">
        {tableHeadContents.map((cell, cellIndex) => (
          <th
            key={cell + cellIndex}
            onClick={(e) =>
              setDirectionAndColumn(cell, e, setSortDirection, setSortedColumn)
            }
            className={
              cell === sortedColumn
                ? sortDirection
                : "pmf-tableHead-cell-sorting"
            }
          >
            {cell.charAt(0).toUpperCase() +
              cell.slice(1).replace(/([A-Z])/g, " $1")}
          </th>
        ))}
      </tr>
    </thead>
  );
};
