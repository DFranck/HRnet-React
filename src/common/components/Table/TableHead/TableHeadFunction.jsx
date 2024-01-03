export const handleClick = (
  e,
  setSortDirection,
  setSortData,
  setFiltredData,
  filtredData
) => {
  const sortedColumn = e.target.textContent;
  const targetClass = e.target.className;
  let sortDirection = 1;
  switch (targetClass) {
    case "":
      setSortDirection("asc");
      break;
    case "asc":
      sortDirection = -1;
      setSortDirection("desc");
      break;
    case "desc":
      setSortDirection("asc");
      break;
    default:
      break;
  }
  const sortedData = [...filtredData].sort((a, b) => {
    if (a[sortedColumn] === b[sortedColumn]) return 0;
    return a[sortedColumn] > b[sortedColumn] ? sortDirection : -sortDirection;
  });
  setSortData(sortedData);
  setFiltredData(sortedData);
};
