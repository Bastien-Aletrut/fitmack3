import { AccueilPage,PresentationPage, CardPage } from "./containers";
import {Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AccueilPage />}/>
        <Route path="/presentation" element={<PresentationPage />}/>
        <Route path="/demarche" element={<CardPage id="0"/>}/>
        <Route path="/service1" element={<CardPage id="1"/>}/>
        <Route path="/service2" element={<CardPage id="2"/>}/>
        <Route path="/service3" element={<CardPage id="3"/>}/>
        <Route path="/service4" element={<CardPage id="4"/>}/>
      </Routes>
    </div>
  );
}

export default App;
