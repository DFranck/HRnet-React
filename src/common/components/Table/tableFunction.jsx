export const tableFunction = (
  data,
  sortDirection,
  sortedColumn,
  inputValue,
  setDisplayedData
) => {
  let filtredData = data;
  let sortedData;
  const filter = (data, inputValue) => {
    filtredData = [...data].filter((item) => {
      return Object.keys(item).some((key) => {
        return item[key]
          .toString()
          .toLowerCase()
          .includes(inputValue.toLowerCase());
      });
    });
  };
  const sort = (sortedColumn, sortDirection) => {
    const sortedDirection = sortDirection === "asc" ? 1 : -1;
    sortedData = [...filtredData].sort((a, b) => {
      if (a[sortedColumn] === b[sortedColumn]) return 0;
      return a[sortedColumn] > b[sortedColumn]
        ? sortedDirection
        : -sortedDirection;
    });
  };
  inputValue ? filter(data, inputValue) : (filtredData = data);
  sort(sortedColumn, sortDirection);
  setDisplayedData(sortedData);
};
