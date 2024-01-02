import { createSlice } from "@reduxjs/toolkit";
export const createEmployeeSlice = createSlice({
  initialState: {
    employees: JSON.parse(localStorage.getItem("employees")) || [],
    showModal: false,
  },
  name: "createEmployee",
  reducers: {
    addEmployee: (state, action) => {
      const updatedEmployees = [...state.employees, action.payload];
      state.employees = updatedEmployees;
      localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    },
    setShowModal: (state, action) => {
      state.showModal = action.payload;
    },
  },
});

export const { addEmployee, setShowModal } = createEmployeeSlice.actions;
