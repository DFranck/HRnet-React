import { useSelector } from "react-redux";
import { Header } from "../../common/components/Header/Header";
import { Modal } from "../../common/components/Modale/Modal";
import { Nav } from "../../common/components/Nav/Nav";
import { CreateEmployeeBtn } from "../../features/CreateEmployee/components/CreateEmployeeBtn";
import { Form } from "../../features/CreateEmployee/components/Form";
export const CreateEmployee = () => {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <main className={theme}>
      <section className="container">
        <Header />
        <Nav />
        <Form />
        <CreateEmployeeBtn />
      </section>
      <Modal />
    </main>
  );
};
