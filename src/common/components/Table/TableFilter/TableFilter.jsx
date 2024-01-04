import "./tableFilter.css";
export const TableFilter = ({ setInputValue }) => {
  return (
    <label htmlFor="pmf-tableFilter-input" className="pmf-tableFilter-label">
      Search:
      <input
        id="pmf-tableFilter-input"
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
      />
    </label>
  );
};
