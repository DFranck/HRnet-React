import "./input.scss";
export const Input = ({ label, type, onChange, theme }) => {
  return (
    <label htmlFor={label} className={`input-label ${theme}`}>
      {label}
      <input type={type} id={label} onChange={onChange} className={theme} />
    </label>
  );
};
