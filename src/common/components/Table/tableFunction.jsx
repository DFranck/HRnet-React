export const sortAndFilter = (
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
    const sortedDirection = sortDirection === "sorting-asc" ? 1 : -1;
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

export const setDirectionAndColumn = (e, setSortDirection, setSortedColumn) => {
  const targetClass = e.target.className;
  switch (targetClass) {
    case "sorting-asc":
      setSortDirection("sorting-desc");
      setSortedColumn(e.target.textContent);
      break;
    case "sorting-desc":
      setSortDirection("sorting-asc");
      setSortedColumn(e.target.textContent);
      break;
    default:
      setSortDirection("sorting-asc");
      setSortedColumn(e.target.textContent);
      break;
  }
};

export const creatPageLinks = (numberOfPage, setPageNumber) => {
  const links = [];
  for (let i = 0; i < numberOfPage; i++) {
    const newPage = i + 1;
    links.push(
      <button key={i} onClick={() => setPageNumber(newPage)}>
        {i + 1}
      </button>
    );
  }
  return links;
};

export const changePage = (e, setPageNumber, numberOfPage) => {
  const buttonCliked = e.target.textContent;
  switch (buttonCliked) {
    case "Previous":
      setPageNumber((page) => (page > 1 ? page - 1 : 1));
      break;
    case "Next":
      setPageNumber((page) => (page < numberOfPage ? page + 1 : numberOfPage));
      break;
    default:
  }
};
