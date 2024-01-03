import { columnSort } from "./TableHeadFunction";
export const TableHead = ({ data, setSortData }) => {
  const tHeadData = Object.keys(data[0]);
  return (
    <thead>
      <tr>
        {tHeadData.map((item, index) => (
          <th
            key={item + index}
            onClick={(e) => columnSort(e, data, setSortData)}
          >
            {item}
          </th>
        ))}
      </tr>
    </thead>
  );
};
