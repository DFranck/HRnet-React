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
    const sortedDirection =
      sortDirection === "pmf-tableHead-cell-sorting-asc" ? 1 : -1;
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

export const setDirectionAndColumn = (
  cell,
  e,
  setSortDirection,
  setSortedColumn
) => {
  const targetClass = e.target.className;
  switch (targetClass) {
    case "pmf-tableHead-cell-sorting-asc":
      setSortDirection("pmf-tableHead-cell-sorting-desc");
      setSortedColumn(cell);
      break;
    case "pmf-tableHead-cell-sorting-desc":
      setSortDirection("pmf-tableHead-cell-sorting-asc");
      setSortedColumn(cell);
      break;
    default:
      setSortDirection("pmf-tableHead-cell-sorting-asc");
      setSortedColumn(cell);
      break;
  }
};

export const creatPageLinks = (numberOfPage, setPageNumber, pageNumber) => {
  const links = [];
  for (let i = 0; i < numberOfPage; i++) {
    const newPage = i + 1;
    links.push(
      <button
        id={newPage}
        className={
          pageNumber === newPage
            ? "pmf-tablePaginate-button-active pmf-tablePaginate-button-" +
              newPage
            : "pmf-tablePaginate-button pmf-tablePaginate-button-" + newPage
        }
        key={i}
        onClick={(e) => changePage(e, setPageNumber)}
      >
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
      setPageNumber(parseInt(buttonCliked));
  }
};
