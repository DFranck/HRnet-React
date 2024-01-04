import "./tableBody.css";
export const TableBody = ({ displayLength, pageNumber, displayedData }) => {
  const dataPage = displayedData.slice(
    (pageNumber - 1) * displayLength,
    pageNumber * displayLength
  );
  return (
    <tbody>
      {dataPage.map((tr, index) => (
        <tr key={tr + index} className={index % 2 === 0 ? "even" : "odd"}>
          {Object.values(tr).map((td, index) => (
            <td key={td + index}>{td}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};
