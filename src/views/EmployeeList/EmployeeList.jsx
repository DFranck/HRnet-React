import { Link } from "react-router-dom";
import { Table } from "../../common/components/Table/Table";
import { useSelector } from "react-redux";
// import { Table } from "../../../dist/pmf-Table.es";
import "../../../dist/style.css";
import dataMock from "../../mock/employee.json";
export const EmployeeList = () => {
  const employees = useSelector((state) => state.createEmployee.employees);
  const empty = [{}];
  return (
    <main>
      <section id="employee-div" className="container">
        <h1 className="title">Current Employees</h1>
        {/* <Table data={employees} /> */}
        <Table data={dataMock} />
        <Link to="/">Home</Link>
      </section>
    </main>
  );
};
