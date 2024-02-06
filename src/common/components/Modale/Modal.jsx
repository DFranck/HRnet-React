import { useDispatch, useSelector } from "react-redux";
import { setShowModal } from "../../../features/CreateEmployee/createEmployeeSlice";
import "./modal.scss";
export const Modal = () => {
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.createEmployee.showModal);
  const theme = useSelector((state) => state.theme.theme);
  if (showModal === true)
    return (
      <div id="confirmation" className={"modal" + " " + theme}>
        <div className="modal-content">
          <p className={theme}>Employee Created!</p>
          <span
            className="close-modal"
            onClick={() => dispatch(setShowModal(false))}
          ></span>
        </div>
      </div>
    );
};
