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
              setDirectionAndColumn(e, setSortDirection, setSortedColumn)
            }
            className={item === sortedColumn ? sortDirection : ""}
          >
            {item}
          </th>
        ))}
      </tr>
    </thead>
  );
};
