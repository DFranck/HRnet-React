import "./tableBody.css";
export const TableBody = ({ displayLength, pageNumber, displayedData }) => {
  const dataPage = displayedData.slice(
    (pageNumber - 1) * displayLength,
    pageNumber * displayLength
  );
  return (
    <tbody className="pmf-tableBody">
      {dataPage.map((tr, index) => (
        <tr
          role="row"
          key={tr + index}
          className={
            index % 2 === 0 ? "pmf-tableBody-row-odd" : "pmf-tableBody-row-even"
          }
        >
          {Object.values(tr).map((td, index) => (
            <td key={td + index} className="pmf-tableBody-cell">
              {td}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};
