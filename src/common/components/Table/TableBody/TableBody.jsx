import "./tableBody.css";
export const TableBody = ({
  displayLength,
  pageNumber,
  displayedData,
  sortedColumn,
  tableHeadContents,
}) => {
  const dataPage = displayedData.slice(
    (pageNumber - 1) * displayLength,
    pageNumber * displayLength
  );
  const columnKeys = Object.keys(displayedData[0] || {});
  const sortedColumnIndex = columnKeys.indexOf(sortedColumn);
  const columnCount = Object.keys(tableHeadContents[0] || {}).length;
  return (
    <tbody className="pmf-tableBody">
      {dataPage.length > 0 ? (
        dataPage.map((tr, index) => (
          <tr
            role="row"
            key={tr + index}
            className={
              index % 2 === 0
                ? "pmf-tableBody-row-odd"
                : "pmf-tableBody-row-even"
            }
          >
            {Object.values(tr).map((td, index) => (
              <td
                key={td + index}
                className={
                  index === sortedColumnIndex
                    ? td.index % 2 === 0
                      ? "pmf-tableBody-cell-sorting-odd"
                      : "pmf-tableBody-cell-sorting-even"
                    : "pmf-tableBody-cell"
                }
              >
                {td}
              </td>
            ))}
          </tr>
        ))
      ) : (
        <tr role="row">
          <td colSpan={columnCount} className="pmf-tableBody-cell-noData">
            No matching records found
          </td>
        </tr>
      )}
    </tbody>
  );
};
