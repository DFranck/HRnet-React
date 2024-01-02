import { TableLenght } from "./TableLength/TableLength";
import { TableFilter } from "./TableFilter/TableFilter";
import { TableInfo } from "./TableInfo/TableInfo";
import { TablePaginate } from "./TablePaginate/TablePaginate";
import { TableHead } from "./TableHead/TableHead";
import { TableBody } from "./TableBody/TableBody";
export const Table = ({ data }) => {
  console.log(data);
  return (
    <>
      <>
        <TableLenght />
        <TableFilter />
      </>
      <table>
        <TableHead />
        <TableBody />
      </table>
      <>
        <TableInfo />
        <TablePaginate />
      </>
    </>
  );
};
