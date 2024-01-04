import { setDirectionAndColumn } from "../tableFunction";
export const TableHead = ({
  sortDirection,
  sortedColumn,
  setSortedColumn,
  setSortDirection,
  tableHeadContents,
}) => {
  return (
    <thead>
      <tr>
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
