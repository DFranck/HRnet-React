import { configureStore } from "@reduxjs/toolkit";
import { formInputsSlice } from "../features/CreateEmployee/formInputsSlice";
import { createEmployeeSlice } from "../features/CreateEmployee/createEmployeeSlice";
export const store = configureStore({
  reducer: {
    formInputs: formInputsSlice.reducer,
    createEmployee: createEmployeeSlice.reducer,
  },
});
