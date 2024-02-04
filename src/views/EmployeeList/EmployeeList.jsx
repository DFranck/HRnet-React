import Table from "pmf-table";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Header } from "../../common/components/Header/Header.jsx";
import { Nav } from "../../common/components/Nav/Nav.jsx";
import dataMock from "../../mock/employee.json";
export const EmployeeList = () => {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <main className={theme}>
      <section id="employee-div" className="container">
        <Header />
        <Nav />
        <h1 className="title">Current Employees</h1>
        <Table data={dataMock} />
        <Link to="/">Home</Link>
      </section>
    </main>
  );
};
