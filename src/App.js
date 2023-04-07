
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar1 from './components/Navbar1';
import Products from './components/Products';
import Product from './components/Product';
import About from './components/About';
import Contact from './components/contact/Contact';
import Cart from './components/Cart';
function App() {
  return (
    <>
      <Navbar1 />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/products" element={<Products/>} />
        <Route exact path="/products/:id" element={<Product/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/cart" element={<Cart/>} />
        
      </Routes>
    </>
  );
}

export default App;
