import { Provider } from "react-redux";
import { AppRouter } from "../router/AppRouter";
import "../styles/global.scss";
// import "./app.css";
import { store } from "./store";
function App() {
  return (
    <>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </>
  );
}

export default App;
