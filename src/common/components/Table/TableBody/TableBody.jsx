export const TableBody = ({
  sortData,
  filtredData,
  displayLength,
  numberOfPage,
}) => {
  const dataPage = filtredData.slice(
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
