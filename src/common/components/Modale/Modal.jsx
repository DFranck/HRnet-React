import "./modal.css";
import { setShowModal } from "../../../features/CreateEmployee/createEmployeeSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
export const Modal = () => {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.createEmployee.showModal);
  if (showModal === true)
    return (
      <div id="confirmation" className="modal">
        <h1>Employee Created!</h1>
        <button
          className="close-modal"
          onClick={() => dispatch(setShowModal(false))}
        >
          X
        </button>
      </div>
    );
};
