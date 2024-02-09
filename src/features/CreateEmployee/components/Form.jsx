import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "../../../common/components/Input/input.jsx";
import {
  updateCity,
  updateDateOfBirth,
  updateDepartment,
  updateFirstName,
  updateLastName,
  updateStartDate,
  updateState,
  updateStreet,
  updateZipCode,
} from "../formInputsSlice.jsx";
import states from "../states.jsx";
import "./form.scss";
export const Form = () => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState();
  const [birthDate, setBirthDate] = useState();
  const theme = useSelector((state) => state.theme.theme);
  const values = useSelector((state) => state.formInputs);
  const modale = useSelector((state) => state.createEmployee.showModal);
  const onChange = (e) => {
    switch (e.target.id) {
      case "First Name":
        dispatch(updateFirstName(e.target.value));
        break;
      case "Last Name":
        dispatch(updateLastName(e.target.value));
        break;
      case "Street":
        dispatch(updateStreet(e.target.value));
        break;
      case "City":
        dispatch(updateCity(e.target.value));
        break;
      case "Zip Code":
        dispatch(updateZipCode(e.target.value));
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    if (modale) {
      setStartDate("");
      setBirthDate("");
    }
  });
  return (
    <>
      <form action="#" id="create-employee">
        <fieldset className="personal">
          <legend className={theme}>Personal</legend>
          <Input
            type="text"
            label="First Name"
            onChange={onChange}
            theme={theme}
            value={values.firstName}
          />
          <Input
            type="text"
            label="Last Name"
            onChange={onChange}
            theme={theme}
            value={values.lastName}
          />
          <label htmlFor="date-of-birth" className={theme}>
            Date of Birth
          </label>
          <DatePicker
            id="date-of-birth"
            className={theme}
            selected={birthDate}
            onChange={(date) => {
              setBirthDate(date);
              dispatch(updateDateOfBirth(date.toLocaleDateString("eg-EG")));
            }}
            autoComplete="off"
          />
          <label htmlFor="start-date" className={theme}>
            Start Date
          </label>
          <DatePicker
            id="start-date"
            className={theme}
            selected={startDate}
            onChange={(date, e) => {
              setStartDate(date);
              dispatch(updateStartDate(date.toLocaleDateString("eg-EG")));
            }}
            autoComplete="off"
          />
        </fieldset>
        <fieldset className="address">
          <legend className={theme}>Address</legend>
          <Input
            type="text"
            label="Street"
            onChange={onChange}
            theme={theme}
            value={values.street}
          />
          <Input
            type="text"
            label="City"
            onChange={onChange}
            theme={theme}
            value={values.city}
          />
          <label htmlFor="state" className={theme}>
            State
          </label>
          <select
            name="state"
            id="state"
            className={"select " + theme}
            onChange={(e) =>
              dispatch(updateState(e.target.value.slice(0, 2).toUpperCase()))
            }
          >
            {states.map((state) => (
              <option key={state.abbreviation} className="option">
                {state.label}
              </option>
            ))}
          </select>
          <Input
            type="text"
            label="Zip Code"
            onChange={onChange}
            theme={theme}
            value={values.zipCode}
          />
        </fieldset>
        <fieldset className="position">
          <legend className={theme}>Position</legend>
          <label htmlFor="department" className={theme}>
            Department
          </label>

          <select
            name="department"
            id="department"
            className={"select " + theme}
            onChange={(e) => dispatch(updateDepartment(e.target.value))}
          >
            <option className="option">Sales</option>
            <option className="option">Marketing</option>
            <option className="option">Engineering</option>
            <option className="option">Human Resources</option>
            <option className="option">Legal</option>
          </select>
        </fieldset>
      </form>
    </>
  );
};
