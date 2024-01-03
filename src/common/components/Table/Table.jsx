import { useState } from "react";
import { TableLenght } from "./TableLength/TableLength";
import { TableFilter } from "./TableFilter/TableFilter";
import { TableInfo } from "./TableInfo/TableInfo";
import { TablePaginate } from "./TablePaginate/TablePaginate";
import { TableHead } from "./TableHead/TableHead";
import { TableBody } from "./TableBody/TableBody";
import "./table.css";
export const Table = ({ data, width }) => {
  const [numberOfPage, setNumberOfPage] = useState(1);
  const [displayLength, setDisplayLength] = useState(10);
  const [displayedData, setDisplayedData] = useState(data);

  const [sortData, setSortData] = useState(
    [...data].sort((a, b) =>
      a[Object.keys(data[0])[0]] > b[Object.keys(data[0])[0]] ? 1 : -1
    )
  );
  const [filtredData, setFiltredData] = useState([...sortData]);
  return (
    <section className="table" style={{ width: width }}>
      <header className="table-header">
        <TableLenght setDisplayLength={setDisplayLength} />
        <TableFilter data={data} setFiltredData={setFiltredData} />
      </header>
      <table>
        <TableHead
          data={data}
          filtredData={filtredData}
          setFiltredData={setFiltredData}
          setSortData={setSortData}
        />
        <TableBody
          sortData={sortData}
          filtredData={filtredData}
          displayLength={displayLength}
          numberOfPage={numberOfPage}
        />
      </table>
      <footer className="table-footer">
        <TableInfo
          displayLength={displayLength}
          totalLength={sortData.length}
          numberOfPage={numberOfPage}
        />
        <TablePaginate
          displayLength={displayLength}
          totalLength={sortData.length}
          setNumberOfPage={setNumberOfPage}
        />
      </footer>
    </section>
  );
};
