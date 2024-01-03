export const TableBody = ({ sortData, length, page }) => {
  const dataPage = sortData.slice((page - 1) * length, page * length);
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
