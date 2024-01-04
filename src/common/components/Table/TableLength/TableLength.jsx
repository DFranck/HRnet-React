export const TableLenght = ({ setDisplayLength }) => {
  return (
    <label htmlFor="table-length-select" id="table-length-label">
      Show
      <select
        name="table-length-select"
        id="table-length-select"
        onChange={(e) => setDisplayLength(e.target.value)}
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
