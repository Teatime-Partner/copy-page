import "./App.css";
import Navigation from "./components/navigation/Navigation.jsx";
import Content from "./components/content/Content.jsx";
import Footbar from "./components/footbar/Footbar.jsx";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Content />
      <Footbar />
    </div>
  );
}

export default App;
