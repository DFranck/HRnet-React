export const TableHead = ({ tHeadContent }) => {
  return (
    <thead>
      <tr>
        {tHeadContent.map((item) => (
          <th key={item}>{item}</th>
        ))}
      </tr>
    </thead>
  );
};
