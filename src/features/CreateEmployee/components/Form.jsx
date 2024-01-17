import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import states from "../states.jsx";
import "./form.css";
import {
  updateFirstName,
  updateLastName,
  updateDateOfBirth,
  updateStartDate,
  updateStreet,
  updateCity,
  updateState,
  updateZipCode,
  updateDepartment,
} from "../formInputsSlice.jsx";
import { useDispatch } from "react-redux";
export const Form = () => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState();
  const [birthDate, setBirthDate] = useState();
  return (
    <>
      <form action="#" id="create-employee">
        <label htmlFor="first-name">First Name</label>
        <input
          type="text"
          id="first-name"
          onChange={(e) => dispatch(updateFirstName(e.target.value))}
        />
        <label htmlFor="last-name">Last Name</label>
        <input
          type="text"
          id="last-name"
          onChange={(e) => dispatch(updateLastName(e.target.value))}
        />
        <label htmlFor="date-of-birth">Date of Birth</label>
        <DatePicker
          id="date-of-birth"
          selected={birthDate}
          onChange={(date) => {
            setBirthDate(date);
            dispatch(updateDateOfBirth(date.toLocaleDateString("eg-EG")));
          }}
          autoComplete="off"
        />
        <label htmlFor="start-date">Start Date</label>

        <DatePicker
          id="start-date"
          selected={startDate}
          onChange={(date, e) => {
            setStartDate(date);
            dispatch(updateStartDate(date.toLocaleDateString("eg-EG")));
          }}
          autoComplete="off"
        />
        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input
            id="street"
            type="text"
            onChange={(e) => dispatch(updateStreet(e.target.value))}
          />

          <label htmlFor="city">City</label>
          <input
            id="city"
            type="text"
            onChange={(e) => dispatch(updateCity(e.target.value))}
          />

          <label htmlFor="state">State</label>
          <select
            name="state"
            id="state"
            className="select"
            onChange={(e) => dispatch(updateState(e.abbreviation))}
          >
            {states.map((state) => (
              <option key={state.abbreviation} className="option">
                {state.label}
              </option>
            ))}
          </select>
          <label htmlFor="zip-code">Zip Code</label>
          <input
            id="zip-code"
            type="number"
            onChange={(e) => dispatch(updateZipCode(e.target.value))}
          />
        </fieldset>
        <label htmlFor="department">Department</label>

        <select
          name="department"
          id="department"
          className="select"
          onChange={(e) => dispatch(updateDepartment(e.target.value))}
        >
          <option className="option">Sales</option>
          <option className="option">Marketing</option>
          <option className="option">Engineering</option>
          <option className="option">Human Resources</option>
          <option className="option">Legal</option>
        </select>
      </form>
    </>
  );
};
