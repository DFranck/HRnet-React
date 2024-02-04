import Table from "pmf-table";
import { Link } from "react-router-dom";
import dataMock from "../../mock/employee.json";
export const EmployeeList = () => {
  return (
    <main>
      <section id="employee-div" className="container">
        <h1 className="title">Current Employees</h1>
        <Table data={dataMock} />
        <Link to="/">Home</Link>
      </section>
    </main>
  );
};
