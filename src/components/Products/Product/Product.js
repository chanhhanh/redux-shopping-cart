import React from "react";
import { Link } from "react-router-dom";
// Redux
import { connect } from "react-redux";
import {
  loadCurrentItem,
  addCart,
} from "../../../redux/shopping/shopping-actions";
import { Box } from "@mui/system";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Product = ({ product, addCart, loadCurrentItem }) => {
  return (
    <Card
      variant='outlined'
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        m: 1,
        flexShrink: 0.1,
      }}
    >
      <img
        src={product.image}
        alt={product.title}
        style={{
          width: "10vw",
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
        <Typography variant='h5' component='div'>
          {product.title}
        </Typography>
        <Typography variant='body2'>{product.description}</Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          $ {product.price}
        </Typography>
      </Box>

      <Stack
        spacing={1}
        direction='column'
        sx={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          margin: "0 6px 0 auto",
        }}
      >
        <Button
          size='small'
          onClick={() => loadCurrentItem(product)}
          variant='outlined'
          component={Link}
          to={`/product/${product.id}`}
          style={{
            textAlign: "center",
          }}
          sx={{ width: 120 }}
        >
          View Item
        </Button>
        <Button
          size='small'
          onClick={() => addCart(product.id)}
          variant='contained'
          sx={{ width: 120 }}
        >
          Add to Cart
        </Button>
      </Stack>
    </Card>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCart: (id) => dispatch(addCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};
//Because we don't use mapStateToProps the first param must be null
export default connect(null, mapDispatchToProps)(Product);
