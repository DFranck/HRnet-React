import { createSlice } from "@reduxjs/toolkit";
export const formInputsSlice = createSlice({
  name: "formInputs",
  initialState: {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: "",
  },
  reducers: {
    resetForm: (state) => {
      console.log("form reset!");
      state.firstName = "";
      state.lastName = "";
      state.dateOfBirth = "";
      state.startDate = "";
      state.street = "";
      state.city = "";
      state.state = "";
      state.zipCode = "";
      state.department = "";
    },
    updateFirstName: (state, action) => {
      console.log("new first name", action.payload);
      state.firstName = action.payload;
    },
    updateLastName: (state, action) => {
      console.log("new last name", action.payload);
      state.lastName = action.payload;
    },
    updateDateOfBirth: (state, action) => {
      console.log("new date of birth", action.payload);
      state.dateOfBirth = action.payload;
    },
    updateStartDate: (state, action) => {
      console.log("new start date", action.payload);
      state.startDate = action.payload;
    },
    updateStreet: (state, action) => {
      console.log("new street", action.payload);
      state.street = action.payload;
    },
    updateCity: (state, action) => {
      console.log("new city", action.payload);
      state.city = action.payload;
    },
    updateState: (state, action) => {
      console.log("new state", action.payload);
      state.state = action.payload;
    },
    updateZipCode: (state, action) => {
      console.log("new zip code", action.payload);
      state.zipCode = action.payload;
    },
    updateDepartment: (state, action) => {
      console.log("new department", action.payload);
      state.department = action.payload;
    },
  },
});

export const {
  resetForm,
  updateFirstName,
  updateLastName,
  updateDateOfBirth,
  updateStartDate,
  updateStreet,
  updateCity,
  updateState,
  updateZipCode,
  updateDepartment,
} = formInputsSlice.actions;
