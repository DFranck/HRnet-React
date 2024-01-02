import { AppRouter } from "../router/AppRouter";
import "./app.css";
import { Provider } from "react-redux";
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
