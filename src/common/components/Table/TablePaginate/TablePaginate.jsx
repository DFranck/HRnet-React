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
        className={
          pageNumber === 1
            ? "pmf-tablePaginate-button-disabled pmf-tablePaginate-button-previous"
            : "pmf-tablePaginate-button pmf-tablePaginate-button-previous"
        }
        onClick={(e) => changePage(e, setPageNumber, numberOfPage, pageNumber)}
      >
        Previous
      </button>
      <span>{links}</span>
      <button
        className={
          pageNumber === numberOfPage
            ? "pmf-tablePaginate-button-disabled pmf-tablePaginate-button-next"
            : "pmf-tablePaginate-button pmf-tablePaginate-button-next"
        }
        onClick={(e) => changePage(e, setPageNumber, numberOfPage, pageNumber)}
      >
        Next
      </button>
    </nav>
  );
};
