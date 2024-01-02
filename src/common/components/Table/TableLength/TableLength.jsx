export const TableLenght = ({ setLength }) => {
  return (
    <label>
      Show
      <select
        name="table_length"
        id="table_length"
        onChange={(e) => setLength(e.target.value)}
      >
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
      entries
    </label>
  );
};
