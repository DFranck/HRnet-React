import { useSelector } from "react-redux";
import { ThemeBtn } from "../../../features/Theme/components/ThemeBtn.jsx";
import "./Header.scss";
export const Header = () => {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <header className="HRnet-header">
      <h1 className="title">
        HR
        <span className={theme}>net</span>
      </h1>
      <ThemeBtn />
    </header>
  );
};
