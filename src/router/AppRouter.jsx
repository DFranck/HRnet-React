import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CreateEmployee } from "../views/CreateEmployee/CreateEmployee";
import { EmployeeList } from "../views/EmployeeList/EmployeeList";
export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateEmployee />} />
        <Route path="/employee-list" element={<EmployeeList />} />
      </Routes>
    </Router>
  );
};
