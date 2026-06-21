import "./App.css";
import { Routes, Route } from "react-router";
import Pocetna from "./pages/Pocetna";
import ToDoLista from "./pages/ToDoLista";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Pocetna />} />
      <Route path='/todolista' element={<ToDoLista />} />
    </Routes>
  );
}

export default App;
