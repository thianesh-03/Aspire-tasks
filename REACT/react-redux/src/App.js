import { Provider } from "react-redux";
import "./App.css";
import AddUser from "./Components/addUser";
import ViewUser from "./Components/viewUser";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AddUser />
        <ViewUser />
      </div>
    </Provider>
  );
}

export default App;
