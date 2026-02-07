import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data";
import BookInfo from "./pages/Bookinfo";
import Cart from "./pages/Cart";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart((prev) => [...prev, book]);
    console.log(cart);
  }

  useEffect(() => { 
    console.log(cart);
  }, [cart]);

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/books" exact element={<Books books={books} />} />
          <Route
            path="/books/:id"
            element={<BookInfo books={books} addToCart={addToCart} />}
          />
          <Route path="/cart" element={<Cart books={books} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
