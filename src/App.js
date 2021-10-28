import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/iceCreamContainer";
import DonutContainer from "./components/DonutContainer";
import HookDonutContainer from "./components/HookDonutContainer";
import NewIceCreamContainer from "./components/NewIceCreamContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
        <NewIceCreamContainer />
        <DonutContainer />
        <HookDonutContainer />
      </div>
    </Provider>
  );
}

export default App;
