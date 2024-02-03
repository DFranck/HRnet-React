import { Link } from "react-router-dom";
export const EmployeeList = () => {
  return (
    <main>
      <section id="employee-div" className="container">
        <h1 className="title">Current Employees</h1>
        {/* <Table data={dataMock} /> */}
        <Link to="/">Home</Link>
      </section>
    </main>
  );
};
