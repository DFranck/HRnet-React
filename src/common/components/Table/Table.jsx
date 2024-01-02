import { useState } from "react";
import { TableLenght } from "./TableLength/TableLength";
import { TableFilter } from "./TableFilter/TableFilter";
import { TableInfo } from "./TableInfo/TableInfo";
import { TablePaginate } from "./TablePaginate/TablePaginate";
import { TableHead } from "./TableHead/TableHead";
import { TableBody } from "./TableBody/TableBody";
import "./table.css";
export const Table = ({ data, width }) => {
  console.log(data);
  const [length, setLength] = useState(10);
  console.log(length);
  return (
    <section className="table" style={{ width: width }}>
      <header className="table-header">
        <TableLenght setLength={setLength} />
        <TableFilter />
      </header>
      <table>
        <TableHead />
        <TableBody />
      </table>
      <footer className="table-footer">
        <TableInfo />
        <TablePaginate />
      </footer>
    </section>
  );
};
