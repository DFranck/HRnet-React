import { useEffect, useState } from "react";
import { TableLenght } from "./TableLength/TableLength";
import { TableFilter } from "./TableFilter/TableFilter";
import { TableInfo } from "./TableInfo/TableInfo";
import { TablePaginate } from "./TablePaginate/TablePaginate";
import { TableHead } from "./TableHead/TableHead";
import { TableBody } from "./TableBody/TableBody";
import { tableFunction } from "./tableFunction";
import "./table.css";
export const Table = ({ data, width }) => {
  const [numberOfPage, setNumberOfPage] = useState(1);
  const [displayLength, setDisplayLength] = useState(10);
  const [displayedData, setDisplayedData] = useState(data);
  const [sortedColumn, setSortedColumn] = useState(Object.keys(data[0])[0]);
  const [sortDirection, setSortDirection] = useState("asc");
  const [inputValue, setInputValue] = useState("");
  const tableHeadContents = Object.keys(data[0]);
  useEffect(() => {
    tableFunction(
      data,
      sortDirection,
      sortedColumn,
      inputValue,
      setDisplayedData
    );
  }, [sortDirection, sortedColumn, inputValue]);
  return (
    <section className="table" style={{ width: width }}>
      <header className="table-header">
        <TableLenght setDisplayLength={setDisplayLength} />
        <TableFilter setInputValue={setInputValue} />
      </header>
      <table>
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
          numberOfPage={numberOfPage}
        />
      </table>
      <footer className="table-footer">
        <TableInfo
          displayLength={displayLength}
          totalLength={displayedData.length}
          numberOfPage={numberOfPage}
        />
        <TablePaginate
          displayLength={displayLength}
          totalLength={displayedData.length}
          setNumberOfPage={setNumberOfPage}
        />
      </footer>
    </section>
  );
};
