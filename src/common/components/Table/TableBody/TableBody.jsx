export const TableBody = ({ sortData, filtredData, length, page }) => {
  let dataPage;
  if (filtredData.length === 0) {
    dataPage = sortData.slice((page - 1) * length, page * length);
  } else {
    dataPage = filtredData.slice((page - 1) * length, page * length);
  }

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
