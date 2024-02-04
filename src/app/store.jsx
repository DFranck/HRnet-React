import { configureStore } from "@reduxjs/toolkit";
import { createEmployeeSlice } from "../features/CreateEmployee/createEmployeeSlice";
import { formInputsSlice } from "../features/CreateEmployee/formInputsSlice";
import { themeSlice } from "../features/Theme/themeSlice";
export const store = configureStore({
  reducer: {
    formInputs: formInputsSlice.reducer,
    createEmployee: createEmployeeSlice.reducer,
    theme: themeSlice.reducer,
  },
});
