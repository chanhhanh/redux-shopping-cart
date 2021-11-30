import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import "./App.css";

import { connect } from "react-redux";

import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import SingleItem from "./components/SingleItem/SingleItem";
import About from "./components/about";

import { Box } from "@mui/system";
function App({ currentItem }) {
  return (
    <Box
      sx={{
        width: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        m: 1,
      }}
    >
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Products />} />
          <Route exact path='/cart' element={<Cart />} />
          {!currentItem ? (
            <Route path='*' element={<Navigate to='/' />} />
          ) : (
            <Route exact path='/product/:id' element={<SingleItem />} />
          )}
          <Route exact path='/about' element={<About />} />
        </Routes>
        <Link
          to='/about'
          style={{
            color: "Gray",
            textDecoration: "none",
            fontWeight: 400,
          }}
        >
          About
        </Link>
      </Router>
    </Box>
  );
}

const mapStateToProps = (state) => {
  return {
    currentItem: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(App);
