import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../themeSlice";
import "./themeBtn.scss";
import moon from "/assets/svg/moon.svg";
import sun from "/assets/svg/sun.svg";
export const ThemeBtn = () => {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();
  return (
    <button
      className="theme-btn"
      onClick={() =>
        dispatch(toggleTheme(theme === "light" ? "dark" : "light"))
      }
    >
      <img src={theme === "light" ? moon : sun} alt="theme icon" />
    </button>
  );
};
