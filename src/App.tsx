import Navbar from "./components/Navbar";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Connect from "./pages/Connect";
import About from "./pages/About";



function App() {
  return (
    <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Connect/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
