import Table from "pmf-table";
import { useSelector } from "react-redux";
import { Header } from "../../common/components/Header/Header.jsx";
import { Nav } from "../../common/components/Nav/Nav.jsx";
// import dataMock from "../../mock/employee.json";
import "./table.scss";
export const EmployeeList = () => {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <main className={theme}>
      <section id="employee-div" className="container">
        <Header />
        <Nav />
        {/* <Table data={dataMock} /> */}
        <Table />
      </section>
    </main>
  );
};
