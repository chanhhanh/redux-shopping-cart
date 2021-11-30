import React from "react";

// Redux
import { connect } from "react-redux";

import Product from "./Product/Product";
import { Box } from "@mui/system";

const Products = ({ products }) => {
  return (
    <Box sx={{ width: "65vw", m: "auto" }}>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Products);
