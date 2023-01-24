import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lobby from "./pages/Lobby/Lobby";
import Block1 from "./pages/Blocks/Block1/Block1";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes path="/">
          <Route index element={<Lobby />}></Route>
          <Route path="/JavaScriptHoisting" element={<Block1 />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
