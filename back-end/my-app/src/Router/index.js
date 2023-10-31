import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home.js";
import About from "../pages/About.js";
import Contact from "../pages/Contact.js";
import ProdutcsList from "../pages/Produtucs.js";

function MyRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/produtcs" element={<ProdutcsList />} />
    </Routes>
  );
}

export default MyRouter;
