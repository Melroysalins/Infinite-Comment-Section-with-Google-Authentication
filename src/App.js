import "./App.css";
import HomePage from "./component/homepage";
import NavigationBar from "./component/navbar";

function App() {
  return (
    <div className="App">
      <div className="wrapperContainner">
        <NavigationBar />
        <HomePage />
      </div>
    </div>
  );
}

export default App;
