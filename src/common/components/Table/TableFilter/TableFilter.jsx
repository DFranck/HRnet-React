export const TableFilter = ({ setInputValue }) => {
  return (
    <label id="table-filter-label">
      Search:
      <input
        id="table-filter-input"
        type="text"
        placeholder="Search..."
        onChange={(e) => setInputValue(e.target.value)}
      />
    </label>
  );
};
