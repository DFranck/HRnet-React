import { Link } from "react-router-dom";
// import { Table } from "../../common/components/Table/Table";
// import { Table } from "pmf-table";
// import "pmf-table/style.css";
import { Table } from "../../../../pmf-Table/Table";
import dataMock from "../../mock/employee.json";
export const EmployeeList = () => {
  // const empty = [{}];
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
