import logo from "./logo.svg";
import "./App.css";
import Starter from "./components/Starter/Starter";
import Section from "./components/Section/Section";
import Account from "./components/Account/Account";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import intro from './intro.png'
import { useState } from "react";

function App() {
  const [i, s] = useState(true);
  return (
    <div className="App">
      {i && <img className="intro" src={intro} onClick={()=>s(false)}/>}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Starter />} />
          <Route path="/section" element={<Section />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
