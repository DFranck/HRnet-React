//dependencies
import { useEffect, useState } from "react";
//subComponents
import { TableLength } from "./TableLength/TableLength";
import { TableFilter } from "./TableFilter/TableFilter";
import { TableInfo } from "./TableInfo/TableInfo";
import { TablePaginate } from "./TablePaginate/TablePaginate";
import { TableHead } from "./TableHead/TableHead";
import { TableBody } from "./TableBody/TableBody";
//minimals styles
import "./table.css";
//functions
import { sortAndFilter } from "./tableFunction";

export const Table = ({ data }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [displayLength, setDisplayLength] = useState(10);
  const [displayedData, setDisplayedData] = useState(data);
  const [sortedColumn, setSortedColumn] = useState(Object.keys(data[0])[0]);
  const [sortDirection, setSortDirection] = useState(
    "pmf-tableHead-cell-sorting-asc"
  );
  const [inputValue, setInputValue] = useState("");
  const [tableHeadContents, setTableHeadContents] = useState([]);
  //useEffect for re-render when user sort or filter the table
  useEffect(() => {
    setTableHeadContents(Object.keys(data[0]));
    sortAndFilter(
      data,
      sortDirection,
      sortedColumn,
      inputValue,
      setDisplayedData
    );
  }, [data, sortDirection, sortedColumn, inputValue]);

  return (
    <section className="pmf-tableWrapper">
      <header className="pmf-tableHeader">
        <TableLength setDisplayLength={setDisplayLength} />
        <TableFilter setInputValue={setInputValue} />
      </header>
      <table className="pmf-table">
        <TableHead
          tableHeadContents={tableHeadContents}
          sortedColumn={sortedColumn}
          setSortedColumn={setSortedColumn}
          sortDirection={sortDirection}
          setSortDirection={setSortDirection}
        />
        <TableBody
          displayedData={displayedData}
          displayLength={displayLength}
          pageNumber={pageNumber}
          sortedColumn={sortedColumn}
          tableHeadContents={tableHeadContents}
        />
      </table>
      <footer className="pmf-tableFooter">
        <TableInfo
          displayLength={displayLength}
          totalLength={displayedData.length}
          pageNumber={pageNumber}
          data={data}
        />
        <TablePaginate
          displayLength={displayLength}
          totalLength={displayedData.length}
          setPageNumber={setPageNumber}
        />
      </footer>
    </section>
  );
};
