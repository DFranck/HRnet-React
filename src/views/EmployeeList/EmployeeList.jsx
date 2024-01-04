import { Link } from "react-router-dom";
import { Table } from "../../common/components/Table/Table";
import { useSelector } from "react-redux";
export const EmployeeList = () => {
  const employees = useSelector((state) => state.createEmployee.employees);
  return (
    <main>
      <section id="employee-div" className="container">
        <h1 className="title">Current Employees</h1>
        <Table data={employees} />
        <Link to="/">Home</Link>
      </section>
    </main>
  );
};
