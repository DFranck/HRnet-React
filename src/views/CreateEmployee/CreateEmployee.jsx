import { Link } from "react-router-dom";
import { Form } from "../../features/CreateEmployee/components/Form";
import { Modal } from "../../common/components/Modale/Modal";
import { CreateEmployeeBtn } from "../../features/CreateEmployee/components/CreateEmployeeBtn";
export const CreateEmployee = () => {
  return (
    <main>
      <section className="container">
        <h1 className="title">HRnet</h1>
        <Link to="/employee-list">View Current Employees</Link>
        <h2>Create Employee</h2>
        <Form />
        <CreateEmployeeBtn />
      </section>
      <Modal />
    </main>
  );
};
