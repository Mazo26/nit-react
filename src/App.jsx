import "./App.css";
import { Routes, Route } from "react-router";
import Pocetna from "./pages/Pocetna";
import ToDoLista from "./pages/ToDoLista";
import Shop from "./pages/Shop";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Pocetna />} />
      <Route path='/todolista' element={<ToDoLista />} />
      <Route path='/shop' element={<Shop />} />
    </Routes>
  );
}

export default App;
