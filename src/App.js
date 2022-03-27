import logo from './logo.svg';
import './App.css';
import './Style.css';
import APICall from './Components/APICall';
import NavBar from './Components/Navbar/Navbar';
import CurrentData from './Components/CurrentData/CurrentData';
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <div className="App backgroundImg">
     <NavBar/>
     
     {/* <CurrentData/> */}
<Routes>
     <Route path="/" element={[<NavBar />]}></Route>
          
          <Route path="/Temp_Celsius" element={<CurrentData />}></Route>

        {/* <Route path="/shippmentDetails" element={[<TrackingCard />,<ShippingDetails /> ]}></Route> */}


        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
