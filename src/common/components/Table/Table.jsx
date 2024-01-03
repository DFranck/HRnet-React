import { useEffect, useState } from "react";
import { TableLenght } from "./TableLength/TableLength";
import { TableFilter } from "./TableFilter/TableFilter";
import { TableInfo } from "./TableInfo/TableInfo";
import { TablePaginate } from "./TablePaginate/TablePaginate";
import { TableHead } from "./TableHead/TableHead";
import { TableBody } from "./TableBody/TableBody";
import "./table.css";
export const Table = ({ data, width }) => {
  const [length, setLength] = useState(10);
  const [page, setPage] = useState(1);
  const [tHeadContent, setTHeadContent] = useState([]);
  useEffect(() => {
    setTHeadContent(Object.keys(data[0]));
  }, []);
  return (
    <section className="table" style={{ width: width }}>
      <header className="table-header">
        <TableLenght setLength={setLength} />
        <TableFilter />
      </header>
      <table>
        <TableHead tHeadContent={tHeadContent} />
        <TableBody data={data} length={length} page={page} />
      </table>
      <footer className="table-footer">
        <TableInfo length={length} totalLength={data.length} page={page} />
        <TablePaginate
          length={length}
          totalLength={data.length}
          setPage={setPage}
        />
      </footer>
    </section>
  );
};
