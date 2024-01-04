export const TableHead = ({
  sortDirection,
  sortedColumn,
  setSortedColumn,
  setSortDirection,
  tableHeadContents,
}) => {
  const handleClick = (e) => {
    const targetClass = e.target.className;
    switch (targetClass) {
      case "asc":
        setSortDirection("desc");
        setSortedColumn(e.target.textContent);
        break;
      case "desc":
        setSortDirection("asc");
        setSortedColumn(e.target.textContent);
        break;
      default:
        setSortDirection("asc");
        setSortedColumn(e.target.textContent);
        break;
    }
  };
  return (
    <thead>
      <tr>
        {tableHeadContents.map((item, index) => (
          <th
            key={item + index}
            onClick={(e) => handleClick(e)}
            className={item === sortedColumn ? sortDirection : ""}
          >
            {item}
          </th>
        ))}
      </tr>
    </thead>
  );
};
