export const TableFilter = ({ setInputValue }) => {
  return (
    <label>
      Search:
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setInputValue(e.target.value)}
      />
    </label>
  );
};
