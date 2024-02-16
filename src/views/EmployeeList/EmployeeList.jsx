import { Table } from "pmf-table";
import "pmf-table/style.css";
import { useSelector } from "react-redux";
import { Header } from "../../common/components/Header/Header.jsx";
import { Nav } from "../../common/components/Nav/Nav.jsx";
// import dataMock from "../../mock/employee.json";
import "./table.scss";

export const EmployeeList = () => {
  const theme = useSelector((state) => state.theme.theme);
  const data = useSelector((state) => state.createEmployee.employees);
  return (
    <main className={theme}>
      <section id="employee-div" className="container">
        <Header />
        <Nav />
        {/* <Table data={dataMock} /> */}
        <Table data={data} />
      </section>
    </main>
  );
};
