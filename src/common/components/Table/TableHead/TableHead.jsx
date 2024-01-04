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
        {tableHeadContents.map((item, index) => (
          <th
            key={item + index}
            onClick={(e) =>
              setDirectionAndColumn(item, e, setSortDirection, setSortedColumn)
            }
            className={
              item === sortedColumn
                ? sortDirection
                : "pmf-tableHead-cell-sorting"
            }
          >
            {item.charAt(0).toUpperCase() +
              item.slice(1).replace(/([A-Z])/g, " $1")}
          </th>
        ))}
      </tr>
    </thead>
  );
};
