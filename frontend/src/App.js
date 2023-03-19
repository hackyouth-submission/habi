import logo from "./logo.svg";
import "./App.css";
import Starter from "./components/Starter/Starter";
import Section from "./components/Section/Section";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Starter />} />
          <Route path="/section" element={<Section />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
