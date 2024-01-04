import { creatPageLinks, changePage } from "../tableFunction";

export const TablePaginate = ({
  displayLength,
  totalLength,
  setPageNumber,
}) => {
  const numberOfPage = Math.ceil(totalLength / displayLength);
  const links = creatPageLinks(numberOfPage, setPageNumber);
  return (
    <div>
      <button onClick={(e) => changePage(e, setPageNumber)}>Previous</button>
      <span>{links}</span>
      <button onClick={(e) => changePage(e, setPageNumber, numberOfPage)}>
        Next
      </button>
    </div>
  );
};
