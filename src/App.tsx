import "./App.css";
import PocDemo from "./components/PocDemo";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  return (
    <div>
      <h2 className="App-header">MUI POC</h2>
      <ThemeSwitcher>
        <PocDemo />
      </ThemeSwitcher>
    </div>
  );
}

export default App;
