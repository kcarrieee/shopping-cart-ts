import Navbar from "./components/Navbar";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Connect from "./pages/Connect";
import About from "./pages/About";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import Footer from "./components/Footer";



function App() {
  return (
    <ShoppingCartProvider>
    <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Connect/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </BrowserRouter>
    <Footer/>
    </ShoppingCartProvider>
  );
}

export default App;
