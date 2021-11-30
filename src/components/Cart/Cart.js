import React, { useState, useEffect } from "react";

import CartItem from "./CartItem/CartItem";
import { connect } from "react-redux";
import { Box } from "@mui/system";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

export const Cart = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItem, setTotalItem] = useState(0);
  useEffect(() => {
    let items = 0;
    let price = 0;
    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });
    setTotalPrice(price);
    setTotalItem(items);
  }, [cart, totalPrice, totalItem, setTotalPrice, setTotalItem]);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        m: 1,
      }}
    >
      <Box sx={{ width: 600, marginRight: 24 }}>
        {cart.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </Box>

      <Card sx={{ padding: 3, alignSelf: "flex-start" }}>
        <Typography variant='h5' component='div'>
          Cart Summary
        </Typography>
        <Box>
          <Typography variant='body2' component='div'>
            TOTAL: {totalItem} Item(s)
          </Typography>
          <Typography sx={{ mb: 1.5 }} color='text.secondary'>
            $ {totalPrice}
          </Typography>
        </Box>
      </Card>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);
