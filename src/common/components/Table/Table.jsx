//dependencies
import { useEffect, useState } from "react";
//subComponents
import { TableLenght } from "./TableLength/TableLength";
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
  const [sortDirection, setSortDirection] = useState("asc");
  const [inputValue, setInputValue] = useState("");
  const tableHeadContents = Object.keys(data[0]);

  //useEffect for re-render when user sort or filter the table
  useEffect(() => {
    sortAndFilter(
      data,
      sortDirection,
      sortedColumn,
      inputValue,
      setDisplayedData
    );
  }, [sortDirection, sortedColumn, inputValue]);

  return (
    <section id="table-wrapper">
      <header id="table-header">
        <TableLenght setDisplayLength={setDisplayLength} />
        <TableFilter setInputValue={setInputValue} />
      </header>
      <table id="table">
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
        />
      </table>
      <footer id="table-footer">
        <TableInfo
          displayLength={displayLength}
          totalLength={displayedData.length}
          pageNumber={pageNumber}
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
