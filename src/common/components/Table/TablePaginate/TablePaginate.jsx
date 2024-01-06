import { creatPageLinks, changePage } from "../tableFunction";
import "./tablePaginate.css";
export const TablePaginate = ({
  displayLength,
  totalLength,
  setPageNumber,
  pageNumber,
}) => {
  const numberOfPage = Math.ceil(totalLength / displayLength);
  const links = creatPageLinks(numberOfPage, setPageNumber, pageNumber);
  return (
    <nav className=" pmf-tablePaginate">
      <button
        className="pmf-tablePaginate-button pmf-tablePaginate-button-previous"
        onClick={(e) => changePage(e, setPageNumber)}
      >
        Previous
      </button>
      <span>{links}</span>
      <button
        className="pmf-tablePaginate-button pmf-tablePaginate-button-next"
        onClick={(e) => changePage(e, setPageNumber, numberOfPage)}
      >
        Next
      </button>
    </nav>
  );
};
