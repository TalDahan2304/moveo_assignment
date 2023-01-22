import './App.css';
import { BrowserRouter ,Routes, Route } from "react-router-dom";
import PageCodeList from './pages/Lobby';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes path="/">
         <Route index element={<PageCodeList/>}></Route>
        </Routes>  
      </BrowserRouter>
    </div>
  );
}

export default App;
