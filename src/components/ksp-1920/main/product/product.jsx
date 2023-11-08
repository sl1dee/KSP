import React from 'react';
import Links from "./links/links";
import ProductCard from "./productCard/productCard";
import Specifications from "./specifications/specifications";

const Product = () => {
    return (
        <div>
           <Links/>
           <ProductCard/>
           <Specifications/>
        </div>
    );
};

export default Product;