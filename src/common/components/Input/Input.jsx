import "./input.scss";
export const Input = ({ label, type, onChange, theme, value }) => {
  return (
    <label htmlFor={label} className={`input-label ${theme}`}>
      {label}
      <input
        type={type}
        id={label}
        onChange={onChange}
        className={theme}
        value={value}
      />
    </label>
  );
};
