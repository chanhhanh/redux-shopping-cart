import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { connect } from "react-redux";

const Navbar = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let count = 0;
    let price = 0;
    cart.forEach((item) => {
      count += item.qty;
      price += item.qty * item.price;
    });

    setCartCount(count);
    setTotalPrice(price);
  }, [cart, cartCount, totalPrice]);

  return (
    <Box sx={{ flexGrow: 1, width: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography
            component={Link}
            to='/'
            variant='h6'
            sx={{ flexGrow: 1 }}
            style={{
              color: "White",
              textDecoration: "none",
              fontWeight: 400,
            }}
          >
            Redux Shopping Cart
          </Typography>
          <div>
            <IconButton
              size='small'
              aria-label='Cart'
              color='inherit'
              component={Link}
              to='/cart'
            >
              <Typography variant='p' component='div' sx={{ flexGrow: 1 }}>
                {cartCount}
              </Typography>

              <ShoppingCartIcon />
              <Typography variant='p' component='div' sx={{ flexGrow: 1 }}>
                $ {totalPrice}
              </Typography>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Navbar);
