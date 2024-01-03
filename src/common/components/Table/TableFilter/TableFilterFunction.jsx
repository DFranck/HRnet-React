export const handleChange = (e, data, setFiltredData) => {
  const inputValue = e.target.value;
  const filtredData = [...data].filter((item) => {
    return Object.keys(item).some((key) => {
      return item[key]
        .toString()
        .toLowerCase()
        .includes(inputValue.toLowerCase());
    });
  });
  setFiltredData(filtredData);
};
