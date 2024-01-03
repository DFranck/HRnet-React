export const columnSort = (e, data, setSortData) => {
  const columnToSort = e.target.textContent;
  const columnData = data.map((item) => {
    if (item[columnToSort] === undefined) {
      return 0;
    } else {
      return item[columnToSort];
    }
  });
  columnData.sort((a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });
  console.log(columnToSort, data, columnData);
};
