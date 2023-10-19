import { Route, Routes } from "react-router-dom";
import "./App.css";
import "../src/assets/css/Master.css";
import "../src/assets/css/Style.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import {
  Home,
  About,
  Contact,
  ProductDetails,
  Retails,
  Wishlist,
  Cart,
} from "./pages/Index";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/retails" element={<Retails />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
