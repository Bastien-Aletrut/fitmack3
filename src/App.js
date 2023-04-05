import { AccueilPage,PresentationPage } from "./containers";
import {Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AccueilPage />}/>
        <Route path="/presentation" element={<PresentationPage />}/>
      </Routes>
    </div>
  );
}

export default App;
