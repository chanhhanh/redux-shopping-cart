import React, { useState } from "react";
import { Card } from "@mui/material";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import { connect } from "react-redux";
import { removeCart, adjQty } from "../../../redux/shopping/shopping-actions";
import IconButton from "@mui/material/IconButton";

import DeleteIcon from "@mui/icons-material/Delete";

export const CartItem = ({ item, removeCart, adjQty }) => {
  const [input, setInput] = useState(item.qty);
  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjQty(item.id, e.target.value);
  };
  return (
    <div>
      <Card
        variant='outlined'
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          m: 1,
        }}
      >
        <img
          src={item.image}
          alt={item.title}
          style={{
            width: 250,
            objectFit: "contain",
            borderRadius: 10,
            padding: 1,
          }}
        />

        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            m: 1,
          }}
        >
          <Typography variant='body2' component='div'>
            {item.title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color='text.secondary'>
            $ {item.price}
          </Typography>
          <Typography variant='body2' component='div'>
            Qty:
          </Typography>
          <input
            min='1'
            type='number'
            id='qty'
            name='qty'
            value={input}
            onChange={onChangeHandler}
          />
        </Box>
        <Box
          sx={{
            alignSelf: "flex-end",
            justifySelf: "flex-end",
            margin: "0 5% 5% auto",
          }}
        >
          <IconButton aria-label='delete'>
            <DeleteIcon onClick={() => removeCart(item.id)} />
          </IconButton>
        </Box>
      </Card>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeCart: (id) => dispatch(removeCart(id)),
    adjQty: (id, value) => dispatch(adjQty(id, value)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
