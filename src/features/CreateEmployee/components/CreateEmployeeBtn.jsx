import { useDispatch, useSelector } from "react-redux";
import { addEmployee, setShowModal } from "../createEmployeeSlice";
import { resetForm } from "../formInputsSlice.jsx";
import "./CreateEmployeeBtn.scss";

export const CreateEmployeeBtn = () => {
  const dispatch = useDispatch();
  const newEmployee = useSelector((state) => state.formInputs);
  const theme = useSelector((state) => state.theme.theme);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addEmployee(newEmployee));
    dispatch(setShowModal(true));
    dispatch(resetForm());
  };
  return (
    <>
      <button
        type="submit"
        form="create-employee"
        onClick={(e) => handleSubmit(e)}
        className={`submit ${theme}`}
      >
        Save
      </button>
    </>
  );
};
