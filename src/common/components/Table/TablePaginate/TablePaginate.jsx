import { creatLinks, handleClick } from "./tablePaginateFunction";

export const TablePaginate = ({
  displayLength,
  totalLength,
  setNumberOfPage,
}) => {
  const numberOfPage = Math.ceil(totalLength / displayLength);
  const links = creatLinks(numberOfPage, setNumberOfPage);
  return (
    <div>
      <button onClick={(e) => handleClick(e, setNumberOfPage)}>Previous</button>
      <span>{links}</span>
      <button onClick={(e) => handleClick(e, setNumberOfPage, numberOfPage)}>
        Next
      </button>
    </div>
  );
};
