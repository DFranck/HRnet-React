export const TableBody = ({ displayLength, numberOfPage, displayedData }) => {
  const dataPage = displayedData.slice(
    (numberOfPage - 1) * displayLength,
    numberOfPage * displayLength
  );
  return (
    <tbody>
      {dataPage.map((tr, index) => (
        <tr key={tr + index}>
          {Object.values(tr).map((td, index) => (
            <td key={td + index}>{td}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};
