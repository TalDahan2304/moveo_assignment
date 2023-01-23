import './App.css';
import { BrowserRouter ,Routes, Route } from "react-router-dom";
import Lobby from './pages/Lobby/Lobby';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes path="/">
         <Route index element={<Lobby/>}></Route>
        </Routes>  
      </BrowserRouter>
    </div>
  );
}

export default App;
