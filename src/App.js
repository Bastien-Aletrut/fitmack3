import { Accueil, Contact, Navbar, Prestation, Citation } from "./containers";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Accueil />
      <Citation />
      <Prestation />
      <Contact />
    </div>
  );
}

export default App;
