import { TableLenght } from "./TableLength/TableLength";
import { TableFilter } from "./TableFilter/TableFilter";
import { TableInfo } from "./TableInfo/TableInfo";
import { TablePaginate } from "./TablePaginate/TablePaginate";
import { TableHead } from "./TableHead/TableHead";
import { TableBody } from "./TableBody/TableBody";
import "./table.css";
export const Table = ({ data, width }) => {
  console.log(data);
  return (
    <section className="table" style={{ width: width }}>
      <header className="table-header">
        <TableLenght />
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
