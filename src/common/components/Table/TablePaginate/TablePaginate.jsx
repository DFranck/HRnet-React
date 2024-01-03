import { creatLinks, handleClick } from "./tablePaginateFunction";

export const TablePaginate = ({ length, totalLength, setPage }) => {
  const numberOfPage = Math.ceil(totalLength / length);
  const links = creatLinks(numberOfPage, setPage);
  return (
    <div>
      <button onClick={(e) => handleClick(e, setPage)}>Previous</button>
      <span>{links}</span>
      <button onClick={(e) => handleClick(e, setPage, numberOfPage)}>
        Next
      </button>
    </div>
  );
};
