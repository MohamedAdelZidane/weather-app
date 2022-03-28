import logo from './logo.svg';
import './App.css';
import './Style.css';
import APICall from './Components/APICall';
import NavBar from './Components/Navbar/Navbar';
import CurrentData from './Components/CurrentData/CurrentData';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FutureData from './Components/FutureData/FutureData';



function App() {
  return (
    <BrowserRouter>
      <div className="App backgroundImg">
        <Routes>
          <Route path="/" element={[<NavBar />, <CurrentData />, <FutureData />]}></Route>
          <Route path="/Temp_Celsius" element={[<NavBar />, <CurrentData />, <FutureData />]}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
