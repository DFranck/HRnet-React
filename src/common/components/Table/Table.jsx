import { useState } from "react";
import { TableLenght } from "./TableLength/TableLength";
import { TableFilter } from "./TableFilter/TableFilter";
import { TableInfo } from "./TableInfo/TableInfo";
import { TablePaginate } from "./TablePaginate/TablePaginate";
import { TableHead } from "./TableHead/TableHead";
import { TableBody } from "./TableBody/TableBody";
import "./table.css";
export const Table = ({ data, width }) => {
  const [page, setPage] = useState(1);
  const [length, setLength] = useState(10);
  const [sortData, setSortData] = useState(
    [...data].sort((a, b) =>
      a[Object.keys(data[0])[0]] > b[Object.keys(data[0])[0]] ? 1 : -1
    )
  );
  return (
    <section className="table" style={{ width: width }}>
      <header className="table-header">
        <TableLenght setLength={setLength} />
        <TableFilter setSortData={setSortData} />
      </header>
      <table>
        <TableHead sortData={sortData} setSortData={setSortData} />
        <TableBody sortData={sortData} length={length} page={page} />
      </table>
      <footer className="table-footer">
        <TableInfo length={length} totalLength={sortData.length} page={page} />
        <TablePaginate
          length={length}
          totalLength={sortData.length}
          setPage={setPage}
        />
      </footer>
    </section>
  );
};
