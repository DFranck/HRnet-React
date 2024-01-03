export const TableBody = ({ data, length, page }) => {
  // console.log(data, length, page);
  const dataPage = data.slice((page - 1) * length, page * length);
  console.log(dataPage);
  return (
    <tbody>
      {dataPage.map((tr) => (
        <tr key={tr.id}>
          {Object.values(tr).map((td) => (
            <td key={td}>{td}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};
